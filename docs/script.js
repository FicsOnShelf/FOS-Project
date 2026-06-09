'use strict';

/* localização das rotas de comunicação com o backend  */
const API = {
    BASE_URL: 'https://fos-backend-o0el.onrender.com',

    LOGIN:    '/login',
    CADASTRO: '/register',

    USUARIOS:         '/usuarios',
    USUARIO_POR_ID:   (id)          => `/usuarios/${id}`,

    FANFIC:           '/fanfic',
    FANFIC_BUSCA:     '/fanfic/search',
    FANFIC_POR_ID:    (id)          => `/fanfics/${id}`,
    FANFIC_REFRESH:   (id)          => `/fanfics/${id}`,
    FANFIC_DELETAR:   (id)          => `/fanfics/${id}`,

    ESTANTES:                          '/estantes',
    ESTANTE_ITENS:    (estanteId)   => `/estantes/${estanteId}/itens`,
    ESTANTE_ITEM:     (itemId)      => `/estantes/itens/${itemId}`,
    USUARIO_ESTANTES: (usuarioId)   => `/usuarios/${usuarioId}/estantes`,

    SEGUIR: '/seguir',
};

/** Cracha de acesso = toda chamada protegida já recebe o token para ter acesso autorizado*/
function authHeaders() {
    const token = sessionStorage.getItem('fos_token');
    const h = { 'Content-Type': 'application/json' };
    if (token) h['Authorization'] = `Bearer ${token}`;
    return h;
}

/** Wrapper HTTP genérico — retorna { ok, status, data } */
async function api(method, path, body) /* Wrapper HTTP q guarda o mesmo codigo de envio para diferentes ações*/{
    const opts = { method, headers: authHeaders() };
    if (body !== undefined) opts.body = JSON.stringify(body);
    const res  = await fetch(`${API.BASE_URL}${path}`, opts);

    const data = res.status === 204 ? null : await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, data };
}

const http = {
    get:    (path)        => api('GET',    path),
    post:   (path, body)  => api('POST',   path, body),
    put:    (path, body)  => api('PUT',    path, body),
    delete: (path, body)  => api('DELETE', path, body),
};


/* ESTADO GLOBAL da aplicação*/
let app = {
    usuario: null,       
    paginaAtual: 'home',
    estantes: [],        
};

/** recupera ao recarregar a pag */
function restaurarSessao() {
    const token    = sessionStorage.getItem('fos_token');
    const raw      = sessionStorage.getItem('fos_usuario');
    if (!token || !raw) return;
    try {
        app.usuario = JSON.parse(raw);
    } catch { /* sessão corrompida, ignora */ }
}

/** salva token e os dados */
function persistirSessao(token, usuario) {
    sessionStorage.setItem('fos_token',   token);
    sessionStorage.setItem('fos_usuario', JSON.stringify(usuario));
}

function limparSessao() {
    sessionStorage.removeItem('fos_token');
    sessionStorage.removeItem('fos_usuario');
    app.usuario = null;
    app.estantes = [];
}

/* ROTEADOR SPA: seções ocultas e visíveis */
const paginas = {
    home:   document.getElementById('pagina-home'),
    perfil: document.getElementById('pagina-perfil'),
    feed:   document.getElementById('pagina-feed'),
};

function navegar(destino) {
    if ((destino === 'feed' || destino === 'perfil') && !app.usuario) {
        abrirModal(modalLogin);
        return;
    }

    Object.values(paginas).forEach(p => p && (p.hidden = true));

    if (paginas[destino]) {
        paginas[destino].hidden = false;
        app.paginaAtual = destino;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (destino === 'perfil') {
            renderizarPerfil();
            carregarEstantesDoUsuario();
        }
        if (destino === 'feed') {
            carregarFeed();
        }
    }
}

document.addEventListener('click', e => {
    const el = e.target.closest('[data-nav]');
    if (!el) return;
    e.preventDefault();
    navegar(el.dataset.nav);
    fecharDropdown();
});

/* AUTH */
const modalLogin    = document.getElementById('modal-login');
const modalCadastro = document.getElementById('modal-cadastro');
const loginFeedback    = document.getElementById('login-feedback');
const cadastroFeedback = document.getElementById('cadastro-feedback');

document.getElementById('btn-abrir-login')?.addEventListener('click', () => abrirModal(modalLogin));
document.getElementById('btn-abrir-cadastro')?.addEventListener('click', () => abrirModal(modalCadastro));
document.getElementById('btn-cta-cadastro')?.addEventListener('click', () => abrirModal(modalCadastro));
document.getElementById('footer-link-login')?.addEventListener('click', e => { e.preventDefault(); abrirModal(modalLogin); });
document.getElementById('footer-link-cadastro')?.addEventListener('click', e => { e.preventDefault(); abrirModal(modalCadastro); });

document.getElementById('fechar-login')?.addEventListener('click', () => fecharModal(modalLogin));
document.getElementById('fechar-cadastro')?.addEventListener('click', () => fecharModal(modalCadastro));

document.getElementById('switch-para-cadastro')?.addEventListener('click', () => alternarModal(modalLogin, modalCadastro));
document.getElementById('switch-para-login')?.addEventListener('click', () => alternarModal(modalCadastro, modalLogin));

document.addEventListener('click', e => {
    [modalLogin, modalCadastro, modalEditarPerfil, modalTop4].forEach(m => {
        if (m && e.target === m) fecharModal(m);
    });
});
document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    [modalLogin, modalCadastro, modalEditarPerfil, modalTop4].forEach(m => {
        if (m?.classList.contains('active')) fecharModal(m);
    });
});

document.getElementById('btn-login-submit')?.addEventListener('click', async () => {
    limparFeedback(modalLogin);

    const id    = document.getElementById('login-identificador').value.trim();
    const senha = document.getElementById('login-senha').value;

    if (!id)    { marcarInvalido('login-identificador'); mostrarFeedback(loginFeedback, 'Informe seu e-mail ou nome de usuário.', 'error'); return; }
    if (!senha) { marcarInvalido('login-senha');          mostrarFeedback(loginFeedback, 'Informe sua senha.', 'error'); return; }

    const btn = document.getElementById('btn-login-submit');
    setLoading(btn, true);

    try {
        // O backend recebe `email` — se for username, o frontend envia no campo email mesmo;
        // para suporte pleno a username no login, seria necessário ajuste no AuthController.
        const { ok, data } = await http.post(API.LOGIN, { email: id, password: senha });

        if (ok && data?.token) {
            // Busca dados completos do usuário após login bem-sucedido
            const { data: perfil } = await http.get(API.USUARIO_POR_ID(data.userId ?? data.user?.id ?? ''));

            const usuario = normalizarUsuario(perfil ?? data.user ?? { email: id });
            persistirSessao(data.token, usuario);
            app.usuario = usuario;

            mostrarFeedback(loginFeedback, '✓ Login realizado! Entrando...', 'success');
            setTimeout(() => {
                fecharModal(modalLogin);
                atualizarNavbarLogado();
            }, 900);
        } else {
            mostrarFeedback(loginFeedback, data?.error || data?.message || 'E-mail ou senha incorretos.', 'error');
        }
    } catch (err) {
        console.error('Erro no login:', err);
        mostrarFeedback(loginFeedback, 'Não foi possível conectar ao servidor.', 'error');
    } finally {
        setLoading(btn, false);
    }
});

document.getElementById('btn-cadastro-submit')?.addEventListener('click', async () => {
    limparFeedback(modalCadastro);

    const email     = document.getElementById('cad-email').value.trim();
    const usuario   = document.getElementById('cad-usuario').value.trim();
    const nome      = document.getElementById('cad-nome').value.trim();
    const senha     = document.getElementById('cad-senha').value;
    const confirmar = document.getElementById('cad-confirmar').value;
    const termos    = document.getElementById('cad-termos').checked;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { marcarInvalido('cad-email'); mostrarFeedback(cadastroFeedback, 'E-mail inválido.', 'error'); return; }
    if (usuario.length < 3) { marcarInvalido('cad-usuario'); mostrarFeedback(cadastroFeedback, 'Usuário precisa ter ao menos 3 caracteres.', 'error'); return; }
    if (!nome) { marcarInvalido('cad-nome'); mostrarFeedback(cadastroFeedback, 'Informe seu nome.', 'error'); return; }
    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(senha)) { marcarInvalido('cad-senha'); mostrarFeedback(cadastroFeedback, 'Senha: mínimo 8 caracteres, letras e números.', 'error'); return; }
    if (senha !== confirmar) { marcarInvalido('cad-confirmar'); mostrarFeedback(cadastroFeedback, 'As senhas não coincidem.', 'error'); return; }
    if (!termos) { mostrarFeedback(cadastroFeedback, 'Aceite os Termos de Uso para continuar.', 'error'); return; }

    const btn = document.getElementById('btn-cadastro-submit');
    setLoading(btn, true);

    try {
        // Rota POST /register (AuthController)
        const { ok: okReg, data: dataReg } = await http.post(API.CADASTRO, {
            email,
            username: usuario,
            password: senha,
            termos_aceitos: true,
        });

        if (!okReg) {
            mostrarFeedback(cadastroFeedback, dataReg?.error || 'Não foi possível criar a conta.', 'error');
            return;
        }
        // Faz login automático após cadastro
        const { ok: okLogin, data: dataLogin } = await http.post(API.LOGIN, { email, password: senha });

        if (okLogin && dataLogin?.token) {
            const usuarioNorm = normalizarUsuario(dataLogin.user ?? dataReg.user ?? { email, username: usuario, nomeExibicao: nome });
            persistirSessao(dataLogin.token, usuarioNorm);
            app.usuario = usuarioNorm;

            mostrarFeedback(cadastroFeedback, '✓ Conta criada! Fazendo login...', 'success');
            setTimeout(() => {
                fecharModal(modalCadastro);
                atualizarNavbarLogado();
            }, 1200);
        } else {
            // Cadastro funcionou mas login automático falhou — pede login manual
            mostrarFeedback(cadastroFeedback, '✓ Conta criada! Faça login para continuar.', 'success');
            setTimeout(() => alternarModal(modalCadastro, modalLogin), 1500);
        }
    } catch (err) {
        console.error('Erro no cadastro:', err);
        mostrarFeedback(cadastroFeedback, 'Não foi possível conectar ao servidor.', 'error');
    } finally {
        setLoading(btn, false);
    }
});

/* ── SAIR ── */
document.getElementById('btn-sair')?.addEventListener('click', () => {
    limparSessao();
    fecharDropdown();

    document.getElementById('auth-deslogado') && (document.getElementById('auth-deslogado').hidden = false);
    document.getElementById('auth-logado')    && (document.getElementById('auth-logado').hidden    = true);
    document.getElementById('nav-deslogado')  && (document.getElementById('nav-deslogado').hidden  = false);
    document.getElementById('nav-logado')     && (document.getElementById('nav-logado').hidden     = true);
    document.getElementById('footer-link-login')   && (document.getElementById('footer-link-login').hidden   = false);
    document.getElementById('footer-link-cadastro') && (document.getElementById('footer-link-cadastro').hidden = false);
    document.getElementById('btn-cta-cadastro') && (document.getElementById('btn-cta-cadastro').hidden = false);

    navegar('home');
});

function normalizarUsuario(raw) {
    return {
        id:          raw.id          ?? raw.userId,
        nome:        raw.nomeExibicao ?? raw.nome ?? raw.name ?? raw.username ?? '',
        nomeUsuario: raw.username    ? '@' + raw.username : (raw.nomeUsuario ?? '@usuario'),
        email:       raw.email       ?? '',
        avatar:      raw.avatar      ?? raw.avatarUrl ?? null,
        bio:         raw.bio         ?? '',
        privado:     raw.privado     ?? raw.private ?? false,
        top4:        raw.top4        ?? [],
    };
}

function atualizarNavbarLogado() {
    if (!app.usuario) return;
    const { nome, nomeUsuario, avatar } = app.usuario;
    const inicial = (nome || nomeUsuario || '?')[0].toUpperCase();

    document.getElementById('auth-deslogado') && (document.getElementById('auth-deslogado').hidden = true);
    document.getElementById('auth-logado')    && (document.getElementById('auth-logado').hidden    = false);
    document.getElementById('nav-deslogado')  && (document.getElementById('nav-deslogado').hidden  = true);
    document.getElementById('nav-logado')     && (document.getElementById('nav-logado').hidden     = false);

    const elNome    = document.getElementById('nav-dropdown-nome');
    const elUsuario = document.getElementById('nav-dropdown-usuario');
    const elInicial = document.getElementById('nav-avatar-inicial');
    if (elNome)    elNome.textContent    = nome    || '';
    if (elUsuario) elUsuario.textContent = nomeUsuario || '';
    if (elInicial) elInicial.textContent = inicial;

    const img = document.getElementById('nav-avatar-img');
    if (img && avatar) {
        img.src    = avatar;
        img.hidden = false;
        if (elInicial) elInicial.hidden = true;
    }

    document.getElementById('footer-link-login')    && (document.getElementById('footer-link-login').hidden    = true);
    document.getElementById('footer-link-cadastro') && (document.getElementById('footer-link-cadastro').hidden = true);
    document.getElementById('btn-cta-cadastro')     && (document.getElementById('btn-cta-cadastro').hidden     = true);
}

const navAvatarBtn = document.getElementById('nav-avatar-btn');
const navDropdown  = document.getElementById('nav-dropdown');
function fecharDropdown() { if (navDropdown) navDropdown.hidden = true; navAvatarBtn?.setAttribute('aria-expanded','false'); }
navAvatarBtn?.addEventListener('click', e => {
    e.stopPropagation();
    const aberto = !navDropdown.hidden;
    navDropdown.hidden = aberto;
    navAvatarBtn.setAttribute('aria-expanded', String(!aberto));
});
document.addEventListener('click', e => { if (!navAvatarBtn?.contains(e.target)) fecharDropdown(); });

const modalEditarPerfil = document.getElementById('modal-editar-perfil');
const modalTop4         = document.getElementById('modal-top4');

function renderizarPerfil() {
    if (!app.usuario) return;
    const { nome, nomeUsuario, avatar, bio, privado } = app.usuario;
    const inicial = (nome || '?')[0].toUpperCase();

    document.getElementById('perfil-nome-display')    && (document.getElementById('perfil-nome-display').textContent    = nome);
    document.getElementById('perfil-usuario-display') && (document.getElementById('perfil-usuario-display').textContent = nomeUsuario);
    document.getElementById('perfil-avatar-inicial')  && (document.getElementById('perfil-avatar-inicial').textContent  = inicial);
    document.getElementById('perfil-bio-display')     && (document.getElementById('perfil-bio-display').textContent     = bio || 'Sem bio ainda. Clique em "Editar perfil" para adicionar.');

    const avatarImg = document.getElementById('perfil-avatar-img');
    if (avatar && avatarImg) {
        avatarImg.src = avatar;
        avatarImg.hidden = false;
        document.getElementById('perfil-avatar-inicial').hidden = true;
    }

    atualizarPrivacidadeUI(privado);
}
/* ── Editar banner (local preview — upload futuro via endpoint de mídia) ── */
document.getElementById('btn-editar-banner')?.addEventListener('click', () => {
    document.getElementById('input-banner').click();
});
document.getElementById('input-banner')?.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        const banner = document.getElementById('perfil-banner-display');
        banner.style.backgroundImage = `url(${ev.target.result})`;
        banner.style.backgroundSize  = 'cover';
        banner.style.backgroundPosition = 'center';
        if (app.usuario) app.usuario.banner = ev.target.result;
    };
    reader.readAsDataURL(file);
});

/* ── Editar avatar (local preview — envia avatarUrl como dataURL via PUT /usuarios/:id) ── */
document.getElementById('btn-editar-avatar')?.addEventListener('click', () => {
    document.getElementById('input-avatar').click();
});
document.getElementById('input-avatar')?.addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async ev => {
        const src = ev.target.result;

        // Atualiza UI imediatamente (otimista)
        const imgPerfil = document.getElementById('perfil-avatar-img');
        imgPerfil.src = src; imgPerfil.hidden = false;
        document.getElementById('perfil-avatar-inicial').hidden = true;
        const navImg = document.getElementById('nav-avatar-img');
        navImg.src = src; navImg.hidden = false;
        document.getElementById('nav-avatar-inicial').hidden = true;

        if (app.usuario) {
            app.usuario.avatar = src;
            // Persiste no backend
            try {
                const { ok } = await http.put(API.USUARIO_POR_ID(app.usuario.id), { avatarUrl: src });
                if (ok) {
                    sessionStorage.setItem('fos_usuario', JSON.stringify(app.usuario));
                }
            } catch (err) {
                console.warn('Falha ao salvar avatar no backend:', err);
            }
        }
    };
    reader.readAsDataURL(file);
});

document.getElementById('btn-privacidade')?.addEventListener('click', async () => {
    if (!app.usuario) return;
    app.usuario.privado = !app.usuario.privado;
    atualizarPrivacidadeUI(app.usuario.privado);
    // Persiste no backend — o campo `privado` pode ser mapeado no PUT de usuário
    try {
        await http.put(API.USUARIO_POR_ID(app.usuario.id), { privado: app.usuario.privado });
        sessionStorage.setItem('fos_usuario', JSON.stringify(app.usuario));
    } catch (err) {
        console.warn('Falha ao salvar privacidade:', err);
    }
});

function atualizarPrivacidadeUI(privado) {
    const btn      = document.getElementById('btn-privacidade');
    const label    = document.getElementById('label-privacidade');
    const iconPub  = document.getElementById('icon-privacidade-publico');
    const iconPri  = document.getElementById('icon-privacidade-privado');
    const conteudo = document.getElementById('perfil-conteudo-publico');
    const aviso    = document.getElementById('perfil-privado-aviso');

    if (privado) {
        btn?.classList.add('privado');
        if (label)   label.textContent   = 'Privado';
        if (iconPub) iconPub.hidden = true;
        if (iconPri) iconPri.hidden = false;
        if (conteudo) conteudo.hidden = false;
        if (aviso)    aviso.hidden    = true;
    } else {
        btn?.classList.remove('privado');
        if (label)   label.textContent   = 'Público';
        if (iconPub) iconPub.hidden = false;
        if (iconPri) iconPri.hidden = true;
        if (conteudo) conteudo.hidden = false;
        if (aviso)    aviso.hidden    = true;
    }
}

document.getElementById('btn-editar-perfil')?.addEventListener('click', () => {
    if (!app.usuario) return;
    document.getElementById('edit-nome').value = app.usuario.nome || '';
    document.getElementById('edit-bio').value  = app.usuario.bio  || '';
    atualizarContadorBio();
    abrirModal(modalEditarPerfil);
});
document.getElementById('fechar-editar-perfil')?.addEventListener('click', () => fecharModal(modalEditarPerfil));

const editBio = document.getElementById('edit-bio');
editBio?.addEventListener('input', atualizarContadorBio);
function atualizarContadorBio() {
    const count = (editBio?.value || '').length;
    const span  = document.getElementById('edit-bio-count');
    if (span) span.textContent = count;
}

/* ── Salvar perfil → PUT /usuarios/:id ── */
document.getElementById('btn-salvar-perfil')?.addEventListener('click', async () => {
    if (!app.usuario) return;

    const novoNome = document.getElementById('edit-nome').value.trim() || app.usuario.nome;
    const novaBio  = document.getElementById('edit-bio').value.trim();

    // Atualização otimista
    app.usuario.nome = novoNome;
    app.usuario.bio  = novaBio;
    fecharModal(modalEditarPerfil);
    renderizarPerfil();

    try {
        const { ok, data } = await http.put(API.USUARIO_POR_ID(app.usuario.id), {
            nomeExibicao: novoNome,
            bio: novaBio,
        });
        if (ok) {
            sessionStorage.setItem('fos_usuario', JSON.stringify(app.usuario));
        } else {
            console.warn('Falha ao salvar perfil:', data);
        }
    } catch (err) {
        console.warn('Erro ao salvar perfil:', err);
    }
});

document.getElementById('btn-editar-top4')?.addEventListener('click', () => {
    popularModalTop4();
    abrirModal(modalTop4);
});
document.getElementById('fechar-top4')?.addEventListener('click',  () => fecharModal(modalTop4));
document.getElementById('btn-salvar-top4')?.addEventListener('click', () => fecharModal(modalTop4));

/** Popula o modal Top 4 com fanfics da estante do usuário */
async function popularModalTop4() {
    if (!app.usuario) return;
    // Se ainda não carregou as estantes, faz agora
    if (!app.estantes.length) await carregarEstantesDoUsuario();

    const fanfics = [];
    app.estantes.forEach(e => e.itens?.forEach(item => fanfics.push(item.fanfic)));

    const lista = document.getElementById('top4-lista-fanfics');
    if (!lista) return;
    lista.innerHTML = '';

    if (!fanfics.length) {
        lista.innerHTML = '<p>Adicione fanfics à sua estante para escolher o Top 4.</p>';
        return;
    }

    fanfics.forEach(fic => {
        const el = document.createElement('label');
        el.className = 'top4-item';
        el.innerHTML = `
            <input type="checkbox" value="${fic.id}" ${app.usuario.top4.includes(fic.id) ? 'checked' : ''}>
            <span>${escapeHtml(fic.titulo)} <small>— ${escapeHtml(fic.autor)}</small></span>`;
        el.querySelector('input').addEventListener('change', ev => {
            if (ev.target.checked) {
                if (app.usuario.top4.length >= 4) { ev.target.checked = false; return; }
                app.usuario.top4.push(fic.id);
            } else {
                app.usuario.top4 = app.usuario.top4.filter(id => id !== fic.id);
            }
        });
        lista.appendChild(el);
    });
}

document.querySelectorAll('.estante-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.estante-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const status = tab.dataset.status; // ex: 'LENDO', 'LIDO', etc.
        renderizarEstante(status);
    });
});

async function carregarEstantesDoUsuario() {
    if (!app.usuario?.id) return;
    try {
        const { ok, data } = await http.get(API.USUARIO_ESTANTES(app.usuario.id));
        if (ok && Array.isArray(data)) {
            app.estantes = data;
            // Renderiza a aba ativa (padrão: primeira)
            const tabAtiva = document.querySelector('.estante-tab.active');
            const status   = tabAtiva?.dataset.status ?? null;
            renderizarEstante(status);
            renderizarStatsLeitura();
        }
    } catch (err) {
        console.warn('Erro ao carregar estantes:', err);
    }
}

function renderizarEstante(statusFiltro) {
    const container = document.getElementById('estante-itens-container');
    if (!container) return;

    let itens = [];
    app.estantes.forEach(estante => {
        (estante.itens || []).forEach(item => {
            if (!statusFiltro || item.status === statusFiltro) {
                itens.push({ ...item, estanteNome: estante.nome });
            }
        });
    });

    if (!itens.length) {
        container.innerHTML = '<p class="estante-vazia">Nenhuma fanfic aqui ainda.</p>';
        return;
    }

    container.innerHTML = itens.map(item => `
        <article class="estante-card" data-item-id="${item.id}">
            ${item.fanfic?.capa ? `<img src="${escapeHtml(item.fanfic.capa)}" alt="Capa">` : '<div class="sem-capa"></div>'}
            <div class="estante-card-info">
                <strong>${escapeHtml(item.fanfic?.titulo ?? 'Fanfic')}</strong>
                <span>${escapeHtml(item.fanfic?.autor ?? '')}</span>
                <small>${item.status ?? ''} · Capítulo ${item.capitulo ?? '?'}</small>
                ${item.nota ? `<span class="nota">★ ${item.nota}</span>` : ''}
            </div>
            <div class="estante-card-acoes">
                <button class="btn-atualizar-item" data-item-id="${item.id}">Editar</button>
                <button class="btn-remover-item" data-item-id="${item.id}">✕</button>
            </div>
        </article>`).join('');

    // Delegação de eventos para editar/remover
    container.querySelectorAll('.btn-remover-item').forEach(btn => {
        btn.addEventListener('click', () => removerItemEstante(Number(btn.dataset.itemId)));
    });
    container.querySelectorAll('.btn-atualizar-item').forEach(btn => {
        btn.addEventListener('click', () => abrirEdicaoItem(Number(btn.dataset.itemId)));
    });
}

async function removerItemEstante(itemId) {
    if (!confirm('Remover esta fanfic da estante?')) return;
    try {
        const { ok } = await http.delete(API.ESTANTE_ITEM(itemId));
        if (ok) {
            // Remove do cache local
            app.estantes.forEach(e => {
                e.itens = (e.itens || []).filter(i => i.id !== itemId);
            });
            const tabAtiva = document.querySelector('.estante-tab.active');
            renderizarEstante(tabAtiva?.dataset.status ?? null);
        }
    } catch (err) {
        console.warn('Erro ao remover item:', err);
    }
}

async function abrirEdicaoItem(itemId) {
    const capituloStr = prompt('Capítulo atual (deixe em branco para manter):');
    const notaStr     = prompt('Nota de 1 a 5 (deixe em branco para manter):');
    const statusOpts  = ['LENDO', 'LIDO', 'QUERO_LER', 'ABANDONEI', 'FAVORITO'];
    const statusNovo  = prompt(`Status (${statusOpts.join(', ')}):`)?.toUpperCase();

    const payload = {};
    if (capituloStr) payload.capitulo = Number(capituloStr);
    if (notaStr)     payload.nota     = Number(notaStr);
    if (statusNovo && statusOpts.includes(statusNovo)) payload.status = statusNovo;

    if (!Object.keys(payload).length) return;

    try {
        const { ok } = await http.put(API.ESTANTE_ITEM(itemId), payload);
        if (ok) await carregarEstantesDoUsuario();
    } catch (err) {
        console.warn('Erro ao atualizar item:', err);
    }
}

function renderizarStatsLeitura() {
    const totalEl = document.getElementById('stats-total-lidas');
    if (!totalEl) return;

    let totalLidas = 0, totalLendo = 0, totalFavs = 0;
    app.estantes.forEach(e => (e.itens || []).forEach(item => {
        if (item.status === 'LIDO')      totalLidas++;
        if (item.status === 'LENDO')     totalLendo++;
        if (item.status === 'FAVORITO')  totalFavs++;
    }));

    if (totalEl)                                         totalEl.textContent = totalLidas;
    document.getElementById('stats-lendo')  && (document.getElementById('stats-lendo').textContent  = totalLendo);
    document.getElementById('stats-favs')   && (document.getElementById('stats-favs').textContent   = totalFavs);
}

document.getElementById('btn-adicionar-fanfic')?.addEventListener('click', async () => {
    const urlInput = document.getElementById('input-url-fanfic');
    const url      = urlInput?.value.trim();
    if (!url) { mostrarFeedbackGlobal('Cole a URL da fanfic.', 'error'); return; }

    const btn = document.getElementById('btn-adicionar-fanfic');
    setLoading(btn, true);

    try {
        // POST /fanfic — scraping automático
        const { ok, data, status } = await http.post(API.FANFIC, { url });

        if (ok || status === 200) {
            // Fanfic criada ou já existente; pergunta a estante
            await adicionarFanficNaEstante(data);
            if (urlInput) urlInput.value = '';
            mostrarFeedbackGlobal(`✓ "${escapeHtml(data.titulo)}" adicionada!`, 'success');
        } else {
            mostrarFeedbackGlobal(data?.error || 'Não foi possível catalogar a fanfic.', 'error');
        }
    } catch (err) {
        console.error('Erro ao adicionar fanfic:', err);
        mostrarFeedbackGlobal('Erro ao conectar ao servidor.', 'error');
    } finally {
        setLoading(btn, false);
    }
});

async function adicionarFanficNaEstante(fanfic) {
    if (!app.usuario?.id) return;
    if (!app.estantes.length) await carregarEstantesDoUsuario();

    // Se não houver nenhuma estante ainda, cria a padrão
    if (!app.estantes.length) {
        const { ok, data } = await http.post(API.ESTANTES, {
            nome: 'Minha Estante',
            privada: false,
            usuarioId: app.usuario.id,
        });
        if (ok) app.estantes = [data];
    }

    const statusOpts = ['LENDO', 'LIDO', 'QUERO_LER', 'ABANDONEI', 'FAVORITO'];
    const status = prompt(`Onde salvar "${fanfic.titulo}"?\n${statusOpts.join(' / ')}`)?.toUpperCase() ?? 'QUERO_LER';
    const estanteId = app.estantes[0]?.id;
    if (!estanteId) return;

    await http.post(API.ESTANTE_ITENS(estanteId), {
        fanficId: fanfic.id,
        status: statusOpts.includes(status) ? status : 'QUERO_LER',
    });

    await carregarEstantesDoUsuario();
}

document.getElementById('btn-buscar-fanfic')?.addEventListener('click', buscarFanfics);
document.getElementById('input-busca-fanfic')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') buscarFanfics();
});

async function buscarFanfics() {
    const q          = document.getElementById('input-busca-fanfic')?.value.trim();
    const plataforma = document.getElementById('select-plataforma')?.value || '';
    if (!q) return;

    const path = `${API.FANFIC_BUSCA}?q=${encodeURIComponent(q)}${plataforma ? `&plataforma=${encodeURIComponent(plataforma)}` : ''}`;
    try {
        const { ok, data } = await http.get(path);
        if (ok) renderizarResultadosBusca(data);
    } catch (err) {
        console.warn('Erro na busca:', err);
    }
}

function renderizarResultadosBusca(resultados) {
    const container = document.getElementById('resultados-busca');
    if (!container) return;

    // Caso a API retorne mensagem de "seja o primeiro"
    if (!Array.isArray(resultados) || !resultados.length) {
        container.innerHTML = `
            <p class="busca-vazia">Nenhuma fanfic encontrada.
                <button id="btn-ser-primeiro">Seja o primeiro a adicionar!</button>
            </p>`;
        document.getElementById('btn-ser-primeiro')?.addEventListener('click', () => {
            document.getElementById('input-url-fanfic')?.focus();
        });
        return;
    }

    container.innerHTML = resultados.map(fic => `
        <div class="resultado-card" data-fanfic-id="${fic.id}">
            ${fic.capa ? `<img src="${escapeHtml(fic.capa)}" alt="Capa" class="resultado-capa">` : ''}
            <div>
                <strong>${escapeHtml(fic.titulo)}</strong><br>
                <span>${escapeHtml(fic.autor)} · ${escapeHtml(fic.plataforma)}</span><br>
                <small>${(fic.tags || []).map(t => `#${escapeHtml(t.nome)}`).join(' ')}</small>
            </div>
            <button class="btn-add-na-estante" data-fanfic-id="${fic.id}">+ Estante</button>
        </div>`).join('');

    container.querySelectorAll('.btn-add-na-estante').forEach(btn => {
        btn.addEventListener('click', async () => {
            const ficId = Number(btn.dataset.fanficId);
            const fic   = resultados.find(f => f.id === ficId);
            if (fic) await adicionarFanficNaEstante(fic);
        });
    });
}

async function carregarFeed() {
    console.info('[FOS] Feed: endpoint de atividades ainda não implementado no backend.');
}

document.querySelectorAll('.feed-acao-btn[data-acao="curtir"]').forEach(btn => {
    btn.addEventListener('click', () => {
        const curtido  = btn.classList.toggle('curtido');
        const contador = btn.querySelector('.feed-curtidas-count');
        if (contador) {
            let n = parseInt(contador.textContent, 10);
            contador.textContent = curtido ? n + 1 : n - 1;
        }
        // TODO: POST/DELETE /posts/:id/like quando a rota existir
    });
});

document.querySelectorAll('.feed-acao-btn[data-acao="comentar"]').forEach(btn => {
    btn.addEventListener('click', () => {
        const id   = btn.dataset.id;
        const area = document.getElementById(`comentarios-${id}`);
        if (!area) return;
        area.hidden = !area.hidden;
        if (!area.hidden) {
            const avatarEl = document.getElementById(`feed-avatar-comentario-${id}`);
            if (avatarEl && app.usuario) avatarEl.textContent = (app.usuario.nome || '?')[0].toUpperCase();
            area.querySelector('.comentario-input')?.focus();
        }
    });
});

document.querySelectorAll('.comentario-enviar').forEach(btn => {
    btn.addEventListener('click', () => enviarComentario(btn.dataset.post));
});
document.querySelectorAll('.comentario-input').forEach(input => {
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); enviarComentario(input.dataset.post); }
    });
});

function enviarComentario(postId) {
    const input = document.querySelector(`.comentario-input[data-post="${postId}"]`);
    const texto = input?.value.trim();
    if (!texto || !app.usuario) return;

    const lista = document.getElementById(`lista-comentarios-${postId}`);
    if (!lista) return;

    const div = document.createElement('div');
    div.className = 'comentario-item';
    div.innerHTML = `
        <div class="feed-avatar-mini feed-avatar-mini--sm">${(app.usuario.nome || '?')[0].toUpperCase()}</div>
        <div class="comentario-corpo">
            <span class="comentario-autor">${app.usuario.nomeUsuario}</span>
            <p>${escapeHtml(texto)}</p>
        </div>`;
    lista.appendChild(div);
    input.value = '';

    const contBtn = document.querySelector(`.feed-acao-btn[data-acao="comentar"][data-id="${postId}"] .feed-comentarios-count`);
    if (contBtn) contBtn.textContent = parseInt(contBtn.textContent, 10) + 1;

    // TODO: POST /posts/:id/comments { texto }
}

document.querySelectorAll('.btn-seguir').forEach(btn => {
    btn.addEventListener('click', async () => {
        if (!app.usuario) { abrirModal(modalLogin); return; }

        const seguindoId = Number(btn.dataset.usuarioId);
        if (!seguindoId) return;

        const jaSeguindo = btn.classList.contains('seguindo');

        try {
            const { ok } = jaSeguindo
                ? await http.delete(API.SEGUIR, { seguidorId: app.usuario.id, seguindoId })
                : await http.post(API.SEGUIR,   { seguidorId: app.usuario.id, seguindoId });

            if (ok) {
                btn.classList.toggle('seguindo');
                btn.textContent = btn.classList.contains('seguindo') ? 'Seguindo' : 'Seguir';
            }
        } catch (err) {
            console.warn('Erro ao seguir/deixar de seguir:', err);
        }
    });
});

function abrirModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => modal.querySelector('input')?.focus(), 100);
}
function fecharModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    limparFeedback(modal);
}
function alternarModal(fechar, abrir) { fecharModal(fechar); setTimeout(() => abrirModal(abrir), 150); }

function mostrarFeedback(el, msg, tipo) { if (!el) return; el.textContent = msg; el.className = `form-feedback show ${tipo}`; }
function limparFeedback(modal) {
    modal?.querySelectorAll('.form-feedback').forEach(el => { el.className = 'form-feedback'; el.textContent = ''; });
    modal?.querySelectorAll('input').forEach(i => i.classList.remove('invalid'));
}
function marcarInvalido(id) { document.getElementById(id)?.classList.add('invalid'); }

function mostrarFeedbackGlobal(msg, tipo = 'info') {
    let toast = document.getElementById('fos-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'fos-toast';
        toast.style.cssText = 'position:fixed;bottom:1.5rem;right:1.5rem;padding:.75rem 1.25rem;border-radius:.5rem;font-weight:600;z-index:9999;transition:opacity .3s';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.background = tipo === 'success' ? '#22c55e' : tipo === 'error' ? '#ef4444' : '#6366f1';
    toast.style.color = '#fff';
    toast.style.opacity = '1';
    clearTimeout(toast._to);
    toast._to = setTimeout(() => { toast.style.opacity = '0'; }, 3500);
}

function setLoading(btn, loading) {
    if (!btn) return;
    btn.disabled = loading;
    const t = btn.querySelector('.btn-text');
    const s = btn.querySelector('.btn-spinner');
    if (t) t.hidden = loading;
    if (s) s.hidden = !loading;
}

document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = document.getElementById(btn.dataset.target);
        if (!input) return;
        input.type = input.type === 'password' ? 'text' : 'password';
    });
});

document.addEventListener('input', e => {
    if (e.target.matches('.modal-box input')) e.target.classList.remove('invalid');
});

// garante q o conteudo seja tratado como texto puro e não como marcação HTML = proteção ao XSS: Cross-Site Scripting
function escapeHtml(str) {
    return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

(function init() {
    restaurarSessao(); // tenta restaurar JWT do sessionStorage = n perder oq foi salvo naquela pag
    if (app.usuario) {
        atualizarNavbarLogado();
        renderizarPerfil();
    }
    navegar('home');
})();