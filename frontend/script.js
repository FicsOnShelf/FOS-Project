'use strict';

/* ================================================================
   FICS ON SHELF — script.js
   Módulos:
     1. CONFIG (API)
     2. ESTADO da aplicação
     3. ROTEADOR (SPA: home / perfil / feed)
     4. AUTH (login, cadastro, sair, avatar na navbar)
     5. PERFIL (banner, avatar, bio, privacidade, top4, stats)
     6. FEED (curtir, comentar, seguir)
     7. HELPERS (modal, feedback, loading, senha)
   ================================================================ */


/* ── 1. CONFIG ───────────────────────────────────────────────── */
const API = {
    BASE_URL: 'http://localhost:3000', // ← URL do backend
    LOGIN:    '/auth/login',
    CADASTRO: '/auth/register',
    PERFIL:   '/users/me',
};


/* ── 2. ESTADO ───────────────────────────────────────────────── */
// Guarda informações do usuário logado durante a sessão
let app = {
    usuario: null,       // { nome, nomeUsuario, email, avatar, bio, privado, top4: [] }
    paginaAtual: 'home', // 'home' | 'perfil' | 'feed'
};

// Simula usuário logado para desenvolvimento (remova quando integrar o backend)
// Descomente a linha abaixo para testar a UI logada sem backend:
// app.usuario = { nome: 'Leitora Fics', nomeUsuario: '@leitora_fics', email: 'lei@fics.com', avatar: null, bio: '', privado: false, top4: [] };


/* ── 3. ROTEADOR SPA ─────────────────────────────────────────── */
const paginas = {
    home:   document.getElementById('pagina-home'),
    perfil: document.getElementById('pagina-perfil'),
    feed:   document.getElementById('pagina-feed'),
};

function navegar(destino) {
    // Feed e Perfil exigem login
    if ((destino === 'feed' || destino === 'perfil') && !app.usuario) {
        abrirModal(modalLogin);
        return;
    }

    // Oculta todas as páginas
    Object.values(paginas).forEach(p => p && (p.hidden = true));

    // Exibe a destino
    if (paginas[destino]) {
        paginas[destino].hidden = false;
        app.paginaAtual = destino;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (destino === 'perfil') renderizarPerfil();
    }
}

// Todos os elementos com data-nav disparam a navegação
document.addEventListener('click', e => {
    const el = e.target.closest('[data-nav]');
    if (!el) return;
    e.preventDefault();
    navegar(el.dataset.nav);
    fecharDropdown();
});


/* ── 4. AUTH ─────────────────────────────────────────────────── */
const modalLogin    = document.getElementById('modal-login');
const modalCadastro = document.getElementById('modal-cadastro');
const loginFeedback    = document.getElementById('login-feedback');
const cadastroFeedback = document.getElementById('cadastro-feedback');

// Abrir modais
document.getElementById('btn-abrir-login')?.addEventListener('click', () => abrirModal(modalLogin));
document.getElementById('btn-abrir-cadastro')?.addEventListener('click', () => abrirModal(modalCadastro));
document.getElementById('btn-cta-cadastro')?.addEventListener('click', () => abrirModal(modalCadastro));
document.getElementById('footer-link-login')?.addEventListener('click', e => { e.preventDefault(); abrirModal(modalLogin); });
document.getElementById('footer-link-cadastro')?.addEventListener('click', e => { e.preventDefault(); abrirModal(modalCadastro); });

// Fechar modais
document.getElementById('fechar-login')?.addEventListener('click', () => fecharModal(modalLogin));
document.getElementById('fechar-cadastro')?.addEventListener('click', () => fecharModal(modalCadastro));

// Alternar entre modais
document.getElementById('switch-para-cadastro')?.addEventListener('click', () => alternarModal(modalLogin, modalCadastro));
document.getElementById('switch-para-login')?.addEventListener('click', () => alternarModal(modalCadastro, modalLogin));

// Fechar ao clicar fora / pressionar Escape
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

/* LOGIN */
document.getElementById('btn-login-submit')?.addEventListener('click', async () => {
    limparFeedback(modalLogin);
    const id    = document.getElementById('login-identificador').value.trim();
    const senha = document.getElementById('login-senha').value;
    if (!id)    { marcarInvalido('login-identificador'); mostrarFeedback(loginFeedback, 'Informe seu e-mail ou nome de usuário.', 'error'); return; }
    if (!senha) { marcarInvalido('login-senha'); mostrarFeedback(loginFeedback, 'Informe sua senha.', 'error'); return; }

    const btn = document.getElementById('btn-login-submit');
    setLoading(btn, true);

    try {
        const res  = await fetch(`${API.BASE_URL}${API.LOGIN}`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identificador: id, senha }),
        });
        const data = await res.json();

        if (res.ok) {
            mostrarFeedback(loginFeedback, '✓ Login realizado! Entrando...', 'success');

            /* ── INTEGRAÇÃO BACKEND ─────────────────────────────
               Adapte os campos abaixo ao formato que seu backend retorna.
               Exemplo esperado: { token, usuario: { nome, nomeUsuario, email, avatar } }
            ──────────────────────────────────────────────────── */
            // localStorage.setItem('fos_token', data.token);
            app.usuario = data.usuario ?? {
                nome: id, nomeUsuario: '@' + id.split('@')[0],
                email: id, avatar: null, bio: '', privado: false, top4: [],
            };

            setTimeout(() => {
                fecharModal(modalLogin);
                atualizarNavbarLogado();
            }, 900);
        } else {
            mostrarFeedback(loginFeedback, data.mensagem || data.message || 'E-mail ou senha incorretos.', 'error');
        }
    } catch {
        // Modo offline/dev: simula login para testar a UI
        app.usuario = {
            nome: id.includes('@') ? id.split('@')[0] : id,
            nomeUsuario: '@' + (id.includes('@') ? id.split('@')[0] : id),
            email: id, avatar: null, bio: '', privado: false, top4: [],
        };
        mostrarFeedback(loginFeedback, '✓ (modo dev) Entrando...', 'success');
        setTimeout(() => {
            fecharModal(modalLogin);
            atualizarNavbarLogado();
        }, 900);
    } finally {
        setLoading(btn, false);
    }
});

/* CADASTRO */
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
        const res  = await fetch(`${API.BASE_URL}${API.CADASTRO}`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, usuario, nome, senha }),
        });
        const data = await res.json();

        if (res.ok) {
            mostrarFeedback(cadastroFeedback, '✓ Conta criada! Fazendo login...', 'success');
            app.usuario = data.usuario ?? { nome, nomeUsuario: '@' + usuario, email, avatar: null, bio: '', privado: false, top4: [] };
            setTimeout(() => { fecharModal(modalCadastro); atualizarNavbarLogado(); }, 1200);
        } else {
            mostrarFeedback(cadastroFeedback, data.mensagem || data.message || 'Não foi possível criar a conta.', 'error');
        }
    } catch {
        // Modo dev
        app.usuario = { nome, nomeUsuario: '@' + usuario, email, avatar: null, bio: '', privado: false, top4: [] };
        mostrarFeedback(cadastroFeedback, '✓ (modo dev) Conta criada!', 'success');
        setTimeout(() => { fecharModal(modalCadastro); atualizarNavbarLogado(); }, 1200);
    } finally {
        setLoading(btn, false);
    }
});

/* SAIR */
document.getElementById('btn-sair')?.addEventListener('click', () => {
    app.usuario = null;
    // localStorage.removeItem('fos_token');
    fecharDropdown();

    // Reexibe botões "Entrar" e "Cadastrar-se"; oculta avatar
    const elDeslogado = document.getElementById('auth-deslogado');
    const elLogado    = document.getElementById('auth-logado');
    if (elDeslogado) elDeslogado.hidden = false;
    if (elLogado)    elLogado.hidden    = true;

    // Restaura links da navbar para estado deslogado
    const navDes = document.getElementById('nav-deslogado');
    const navLog = document.getElementById('nav-logado');
    if (navDes) navDes.hidden = false;
    if (navLog) navLog.hidden = true;

    // Reexibe links de login/cadastro no footer e CTA
    const footerLogin = document.getElementById('footer-link-login');
    const footerCad   = document.getElementById('footer-link-cadastro');
    const ctaCad      = document.getElementById('btn-cta-cadastro');
    if (footerLogin) footerLogin.hidden = false;
    if (footerCad)   footerCad.hidden   = false;
    if (ctaCad)      ctaCad.hidden      = false;

    navegar('home');
});

/* Atualiza navbar após login/cadastro */
function atualizarNavbarLogado() {
    if (!app.usuario) return;
    const { nome, nomeUsuario, avatar } = app.usuario;
    const inicial = (nome || nomeUsuario || '?')[0].toUpperCase();

    // Oculta botões "Entrar" e "Cadastrar-se"; exibe avatar
    const elDeslogado = document.getElementById('auth-deslogado');
    const elLogado    = document.getElementById('auth-logado');
    if (elDeslogado) elDeslogado.hidden = true;
    if (elLogado)    elLogado.hidden    = false;

    // Troca links da navbar
    const navDes = document.getElementById('nav-deslogado');
    const navLog = document.getElementById('nav-logado');
    if (navDes) navDes.hidden = true;
    if (navLog) navLog.hidden = false;

    // Preenche nome, @usuario e inicial do avatar
    const elNome    = document.getElementById('nav-dropdown-nome');
    const elUsuario = document.getElementById('nav-dropdown-usuario');
    const elInicial = document.getElementById('nav-avatar-inicial');
    if (elNome)    elNome.textContent    = nome    || '';
    if (elUsuario) elUsuario.textContent = nomeUsuario || '';
    if (elInicial) elInicial.textContent = inicial;

    // Se tiver foto de avatar, exibe a imagem e esconde a inicial
    const img = document.getElementById('nav-avatar-img');
    if (img && avatar) {
        img.src    = avatar;
        img.hidden = false;
        if (elInicial) elInicial.hidden = true;
    }

    // Esconde botões de login/cadastro no footer e CTA da home
    const footerLogin = document.getElementById('footer-link-login');
    const footerCad   = document.getElementById('footer-link-cadastro');
    const ctaCad      = document.getElementById('btn-cta-cadastro');
    if (footerLogin) footerLogin.hidden = true;
    if (footerCad)   footerCad.hidden   = true;
    if (ctaCad)      ctaCad.hidden      = true;
}

/* Dropdown de avatar */
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


/* ── 5. PERFIL ───────────────────────────────────────────────── */
const modalEditarPerfil = document.getElementById('modal-editar-perfil');
const modalTop4         = document.getElementById('modal-top4');

function renderizarPerfil() {
    if (!app.usuario) return;
    const { nome, nomeUsuario, avatar, bio, privado } = app.usuario;
    const inicial = (nome || '?')[0].toUpperCase();

    document.getElementById('perfil-nome-display').textContent    = nome;
    document.getElementById('perfil-usuario-display').textContent = nomeUsuario;
    document.getElementById('perfil-avatar-inicial').textContent  = inicial;
    document.getElementById('perfil-bio-display').textContent     = bio || 'Sem bio ainda. Clique em "Editar perfil" para adicionar.';

    const avatarImg = document.getElementById('perfil-avatar-img');
    if (avatar) { avatarImg.src = avatar; avatarImg.hidden = false; document.getElementById('perfil-avatar-inicial').hidden = true; }

    // Privacidade
    atualizarPrivacidadeUI(privado);
}

// Editar banner
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

// Editar avatar
document.getElementById('btn-editar-avatar')?.addEventListener('click', () => {
    document.getElementById('input-avatar').click();
});
document.getElementById('input-avatar')?.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        const src = ev.target.result;
        const img = document.getElementById('perfil-avatar-img');
        img.src = src; img.hidden = false;
        document.getElementById('perfil-avatar-inicial').hidden = true;

        // Atualiza também o avatar da navbar
        const navImg = document.getElementById('nav-avatar-img');
        navImg.src = src; navImg.hidden = false;
        document.getElementById('nav-avatar-inicial').hidden = true;

        if (app.usuario) app.usuario.avatar = src;
    };
    reader.readAsDataURL(file);
});

// Privacidade
document.getElementById('btn-privacidade')?.addEventListener('click', () => {
    if (!app.usuario) return;
    app.usuario.privado = !app.usuario.privado;
    atualizarPrivacidadeUI(app.usuario.privado);
});

function atualizarPrivacidadeUI(privado) {
    const btn     = document.getElementById('btn-privacidade');
    const label   = document.getElementById('label-privacidade');
    const iconPub = document.getElementById('icon-privacidade-publico');
    const iconPri = document.getElementById('icon-privacidade-privado');
    const conteudo = document.getElementById('perfil-conteudo-publico');
    const aviso    = document.getElementById('perfil-privado-aviso');

    if (privado) {
        btn.classList.add('privado');
        label.textContent   = 'Privado';
        iconPub.hidden = true; iconPri.hidden = false;
        // Perfil privado: mostra aviso, oculta conteúdo (para não-seguidores)
        // Aqui simulamos que o próprio dono SEMPRE vê o conteúdo
        conteudo.hidden = false;
        aviso.hidden    = true;
    } else {
        btn.classList.remove('privado');
        label.textContent   = 'Público';
        iconPub.hidden = false; iconPri.hidden = true;
        conteudo.hidden = false;
        aviso.hidden    = true;
    }
}

// Modal editar perfil
document.getElementById('btn-editar-perfil')?.addEventListener('click', () => {
    if (!app.usuario) return;
    document.getElementById('edit-nome').value = app.usuario.nome || '';
    document.getElementById('edit-bio').value  = app.usuario.bio  || '';
    atualizarContadorBio();
    abrirModal(modalEditarPerfil);
});
document.getElementById('fechar-editar-perfil')?.addEventListener('click', () => fecharModal(modalEditarPerfil));

// Contador de caracteres da bio
const editBio = document.getElementById('edit-bio');
editBio?.addEventListener('input', atualizarContadorBio);
function atualizarContadorBio() {
    const count = (editBio?.value || '').length;
    const span  = document.getElementById('edit-bio-count');
    if (span) span.textContent = count;
}

// Salvar perfil
document.getElementById('btn-salvar-perfil')?.addEventListener('click', () => {
    if (!app.usuario) return;
    app.usuario.nome = document.getElementById('edit-nome').value.trim() || app.usuario.nome;
    app.usuario.bio  = document.getElementById('edit-bio').value.trim();
    fecharModal(modalEditarPerfil);
    renderizarPerfil();
    // INTEGRAÇÃO BACKEND: PUT/PATCH para API.PERFIL com app.usuario
});

// Modal Top 4
document.getElementById('btn-editar-top4')?.addEventListener('click', () => abrirModal(modalTop4));
document.getElementById('fechar-top4')?.addEventListener('click', () => fecharModal(modalTop4));
document.getElementById('btn-salvar-top4')?.addEventListener('click', () => fecharModal(modalTop4));

// Tabs da estante
document.querySelectorAll('.estante-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.estante-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // INTEGRAÇÃO BACKEND: buscar fanfics da aba selecionada
    });
});


/* ── 6. FEED ─────────────────────────────────────────────────── */

// Curtir
document.querySelectorAll('.feed-acao-btn[data-acao="curtir"]').forEach(btn => {
    btn.addEventListener('click', () => {
        const curtido  = btn.classList.toggle('curtido');
        const contador = btn.querySelector('.feed-curtidas-count');
        if (contador) {
            let n = parseInt(contador.textContent, 10);
            contador.textContent = curtido ? n + 1 : n - 1;
        }
        // INTEGRAÇÃO BACKEND: POST/DELETE /posts/:id/like
    });
});

// Abrir/fechar área de comentários
document.querySelectorAll('.feed-acao-btn[data-acao="comentar"]').forEach(btn => {
    btn.addEventListener('click', () => {
        const id    = btn.dataset.id;
        const area  = document.getElementById(`comentarios-${id}`);
        if (!area) return;
        area.hidden = !area.hidden;
        if (!area.hidden) {
            // Preenche avatar do usuário no input de comentário
            const avatarEl = document.getElementById(`feed-avatar-comentario-${id}`);
            if (avatarEl && app.usuario) {
                avatarEl.textContent = (app.usuario.nome || '?')[0].toUpperCase();
            }
            area.querySelector('.comentario-input')?.focus();
        }
    });
});

// Enviar comentário
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

    // Atualiza contador de comentários
    const contBtn = document.querySelector(`.feed-acao-btn[data-acao="comentar"][data-id="${postId}"] .feed-comentarios-count`);
    if (contBtn) contBtn.textContent = parseInt(contBtn.textContent, 10) + 1;

    // INTEGRAÇÃO BACKEND: POST /posts/:id/comments com { texto }
}

// Botão Seguir na sidebar
document.querySelectorAll('.btn-seguir').forEach(btn => {
    btn.addEventListener('click', () => {
        const seguindo = btn.classList.toggle('seguindo');
        btn.textContent = seguindo ? 'Seguindo' : 'Seguir';
        // INTEGRAÇÃO BACKEND: POST/DELETE /users/:id/follow
    });
});


/* ── 7. HELPERS ──────────────────────────────────────────────── */

/* Modal */
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

/* Feedback */
function mostrarFeedback(el, msg, tipo) { if (!el) return; el.textContent = msg; el.className = `form-feedback show ${tipo}`; }
function limparFeedback(modal) {
    modal?.querySelectorAll('.form-feedback').forEach(el => { el.className = 'form-feedback'; el.textContent = ''; });
    modal?.querySelectorAll('input').forEach(i => i.classList.remove('invalid'));
}
function marcarInvalido(id) { document.getElementById(id)?.classList.add('invalid'); }

/* Loading */
function setLoading(btn, loading) {
    if (!btn) return;
    btn.disabled = loading;
    const t = btn.querySelector('.btn-text');
    const s = btn.querySelector('.btn-spinner');
    if (t) t.hidden = loading;
    if (s) s.hidden = !loading;
}

/* Mostrar/ocultar senha */
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = document.getElementById(btn.dataset.target);
        if (!input) return;
        input.type = input.type === 'password' ? 'text' : 'password';
    });
});

/* Remove 'invalid' ao digitar */
document.addEventListener('input', e => {
    if (e.target.matches('.modal-box input')) e.target.classList.remove('invalid');
});

/* Escape HTML para evitar XSS em comentários */
function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── INICIALIZAÇÃO ───────────────────────────────────────────── */
(function init() {
    // Se quiser restaurar sessão do localStorage, faça aqui:
    // const token = localStorage.getItem('fos_token');
    // if (token) { /* fetch do perfil e chamar atualizarNavbarLogado() */ }
    // Se `app.usuario` já estiver preenchido (modo dev ou sessão restaurada), atualiza UI
    if (app.usuario) {
        atualizarNavbarLogado();
        renderizarPerfil();
    }
    navegar('home');
})();