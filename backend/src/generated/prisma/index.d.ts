
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Seguidor
 * 
 */
export type Seguidor = $Result.DefaultSelection<Prisma.$SeguidorPayload>
/**
 * Model Fanfic
 * 
 */
export type Fanfic = $Result.DefaultSelection<Prisma.$FanficPayload>
/**
 * Model Estante
 * 
 */
export type Estante = $Result.DefaultSelection<Prisma.$EstantePayload>
/**
 * Model ItemEstante
 * 
 */
export type ItemEstante = $Result.DefaultSelection<Prisma.$ItemEstantePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Fandom
 * 
 */
export type Fandom = $Result.DefaultSelection<Prisma.$FandomPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seguidor`: Exposes CRUD operations for the **Seguidor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seguidors
    * const seguidors = await prisma.seguidor.findMany()
    * ```
    */
  get seguidor(): Prisma.SeguidorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fanfic`: Exposes CRUD operations for the **Fanfic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fanfics
    * const fanfics = await prisma.fanfic.findMany()
    * ```
    */
  get fanfic(): Prisma.FanficDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estante`: Exposes CRUD operations for the **Estante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estantes
    * const estantes = await prisma.estante.findMany()
    * ```
    */
  get estante(): Prisma.EstanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemEstante`: Exposes CRUD operations for the **ItemEstante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemEstantes
    * const itemEstantes = await prisma.itemEstante.findMany()
    * ```
    */
  get itemEstante(): Prisma.ItemEstanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fandom`: Exposes CRUD operations for the **Fandom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fandoms
    * const fandoms = await prisma.fandom.findMany()
    * ```
    */
  get fandom(): Prisma.FandomDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Seguidor: 'Seguidor',
    Fanfic: 'Fanfic',
    Estante: 'Estante',
    ItemEstante: 'ItemEstante',
    Tag: 'Tag',
    Fandom: 'Fandom'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "seguidor" | "fanfic" | "estante" | "itemEstante" | "tag" | "fandom"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Seguidor: {
        payload: Prisma.$SeguidorPayload<ExtArgs>
        fields: Prisma.SeguidorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeguidorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeguidorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          findFirst: {
            args: Prisma.SeguidorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeguidorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          findMany: {
            args: Prisma.SeguidorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>[]
          }
          create: {
            args: Prisma.SeguidorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          createMany: {
            args: Prisma.SeguidorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeguidorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>[]
          }
          delete: {
            args: Prisma.SeguidorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          update: {
            args: Prisma.SeguidorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          deleteMany: {
            args: Prisma.SeguidorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeguidorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeguidorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>[]
          }
          upsert: {
            args: Prisma.SeguidorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          aggregate: {
            args: Prisma.SeguidorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeguidor>
          }
          groupBy: {
            args: Prisma.SeguidorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeguidorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeguidorCountArgs<ExtArgs>
            result: $Utils.Optional<SeguidorCountAggregateOutputType> | number
          }
        }
      }
      Fanfic: {
        payload: Prisma.$FanficPayload<ExtArgs>
        fields: Prisma.FanficFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FanficFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FanficFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload>
          }
          findFirst: {
            args: Prisma.FanficFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FanficFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload>
          }
          findMany: {
            args: Prisma.FanficFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload>[]
          }
          create: {
            args: Prisma.FanficCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload>
          }
          createMany: {
            args: Prisma.FanficCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FanficCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload>[]
          }
          delete: {
            args: Prisma.FanficDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload>
          }
          update: {
            args: Prisma.FanficUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload>
          }
          deleteMany: {
            args: Prisma.FanficDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FanficUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FanficUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload>[]
          }
          upsert: {
            args: Prisma.FanficUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FanficPayload>
          }
          aggregate: {
            args: Prisma.FanficAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFanfic>
          }
          groupBy: {
            args: Prisma.FanficGroupByArgs<ExtArgs>
            result: $Utils.Optional<FanficGroupByOutputType>[]
          }
          count: {
            args: Prisma.FanficCountArgs<ExtArgs>
            result: $Utils.Optional<FanficCountAggregateOutputType> | number
          }
        }
      }
      Estante: {
        payload: Prisma.$EstantePayload<ExtArgs>
        fields: Prisma.EstanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload>
          }
          findFirst: {
            args: Prisma.EstanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload>
          }
          findMany: {
            args: Prisma.EstanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload>[]
          }
          create: {
            args: Prisma.EstanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload>
          }
          createMany: {
            args: Prisma.EstanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload>[]
          }
          delete: {
            args: Prisma.EstanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload>
          }
          update: {
            args: Prisma.EstanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload>
          }
          deleteMany: {
            args: Prisma.EstanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload>[]
          }
          upsert: {
            args: Prisma.EstanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstantePayload>
          }
          aggregate: {
            args: Prisma.EstanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstante>
          }
          groupBy: {
            args: Prisma.EstanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstanteCountArgs<ExtArgs>
            result: $Utils.Optional<EstanteCountAggregateOutputType> | number
          }
        }
      }
      ItemEstante: {
        payload: Prisma.$ItemEstantePayload<ExtArgs>
        fields: Prisma.ItemEstanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemEstanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemEstanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload>
          }
          findFirst: {
            args: Prisma.ItemEstanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemEstanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload>
          }
          findMany: {
            args: Prisma.ItemEstanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload>[]
          }
          create: {
            args: Prisma.ItemEstanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload>
          }
          createMany: {
            args: Prisma.ItemEstanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemEstanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload>[]
          }
          delete: {
            args: Prisma.ItemEstanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload>
          }
          update: {
            args: Prisma.ItemEstanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload>
          }
          deleteMany: {
            args: Prisma.ItemEstanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemEstanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemEstanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload>[]
          }
          upsert: {
            args: Prisma.ItemEstanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemEstantePayload>
          }
          aggregate: {
            args: Prisma.ItemEstanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemEstante>
          }
          groupBy: {
            args: Prisma.ItemEstanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemEstanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemEstanteCountArgs<ExtArgs>
            result: $Utils.Optional<ItemEstanteCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Fandom: {
        payload: Prisma.$FandomPayload<ExtArgs>
        fields: Prisma.FandomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FandomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FandomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload>
          }
          findFirst: {
            args: Prisma.FandomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FandomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload>
          }
          findMany: {
            args: Prisma.FandomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload>[]
          }
          create: {
            args: Prisma.FandomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload>
          }
          createMany: {
            args: Prisma.FandomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FandomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload>[]
          }
          delete: {
            args: Prisma.FandomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload>
          }
          update: {
            args: Prisma.FandomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload>
          }
          deleteMany: {
            args: Prisma.FandomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FandomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FandomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload>[]
          }
          upsert: {
            args: Prisma.FandomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FandomPayload>
          }
          aggregate: {
            args: Prisma.FandomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFandom>
          }
          groupBy: {
            args: Prisma.FandomGroupByArgs<ExtArgs>
            result: $Utils.Optional<FandomGroupByOutputType>[]
          }
          count: {
            args: Prisma.FandomCountArgs<ExtArgs>
            result: $Utils.Optional<FandomCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    seguidor?: SeguidorOmit
    fanfic?: FanficOmit
    estante?: EstanteOmit
    itemEstante?: ItemEstanteOmit
    tag?: TagOmit
    fandom?: FandomOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    estantes: number
    seguindo: number
    seguidores: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estantes?: boolean | UsuarioCountOutputTypeCountEstantesArgs
    seguindo?: boolean | UsuarioCountOutputTypeCountSeguindoArgs
    seguidores?: boolean | UsuarioCountOutputTypeCountSeguidoresArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEstantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstanteWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSeguindoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguidorWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSeguidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguidorWhereInput
  }


  /**
   * Count Type FanficCountOutputType
   */

  export type FanficCountOutputType = {
    itensEstante: number
    tags: number
    fandoms: number
  }

  export type FanficCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensEstante?: boolean | FanficCountOutputTypeCountItensEstanteArgs
    tags?: boolean | FanficCountOutputTypeCountTagsArgs
    fandoms?: boolean | FanficCountOutputTypeCountFandomsArgs
  }

  // Custom InputTypes
  /**
   * FanficCountOutputType without action
   */
  export type FanficCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FanficCountOutputType
     */
    select?: FanficCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FanficCountOutputType without action
   */
  export type FanficCountOutputTypeCountItensEstanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemEstanteWhereInput
  }

  /**
   * FanficCountOutputType without action
   */
  export type FanficCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * FanficCountOutputType without action
   */
  export type FanficCountOutputTypeCountFandomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FandomWhereInput
  }


  /**
   * Count Type EstanteCountOutputType
   */

  export type EstanteCountOutputType = {
    itens: number
  }

  export type EstanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | EstanteCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * EstanteCountOutputType without action
   */
  export type EstanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstanteCountOutputType
     */
    select?: EstanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstanteCountOutputType without action
   */
  export type EstanteCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemEstanteWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    fics: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fics?: boolean | TagCountOutputTypeCountFicsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountFicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FanficWhereInput
  }


  /**
   * Count Type FandomCountOutputType
   */

  export type FandomCountOutputType = {
    fics: number
  }

  export type FandomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fics?: boolean | FandomCountOutputTypeCountFicsArgs
  }

  // Custom InputTypes
  /**
   * FandomCountOutputType without action
   */
  export type FandomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FandomCountOutputType
     */
    select?: FandomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FandomCountOutputType without action
   */
  export type FandomCountOutputTypeCountFicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FanficWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    nomeExibicao: string | null
    senha: string | null
    bio: string | null
    avatar: string | null
    banner: string | null
    perfil_privado: boolean | null
    criadoEm: Date | null
    termos_aceitos: boolean | null
    data_aceite_termos: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    nomeExibicao: string | null
    senha: string | null
    bio: string | null
    avatar: string | null
    banner: string | null
    perfil_privado: boolean | null
    criadoEm: Date | null
    termos_aceitos: boolean | null
    data_aceite_termos: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    username: number
    nomeExibicao: number
    senha: number
    bio: number
    avatar: number
    banner: number
    perfil_privado: number
    criadoEm: number
    termos_aceitos: number
    data_aceite_termos: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    nomeExibicao?: true
    senha?: true
    bio?: true
    avatar?: true
    banner?: true
    perfil_privado?: true
    criadoEm?: true
    termos_aceitos?: true
    data_aceite_termos?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    nomeExibicao?: true
    senha?: true
    bio?: true
    avatar?: true
    banner?: true
    perfil_privado?: true
    criadoEm?: true
    termos_aceitos?: true
    data_aceite_termos?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    nomeExibicao?: true
    senha?: true
    bio?: true
    avatar?: true
    banner?: true
    perfil_privado?: true
    criadoEm?: true
    termos_aceitos?: true
    data_aceite_termos?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio: string | null
    avatar: string | null
    banner: string | null
    perfil_privado: boolean | null
    criadoEm: Date
    termos_aceitos: boolean
    data_aceite_termos: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    nomeExibicao?: boolean
    senha?: boolean
    bio?: boolean
    avatar?: boolean
    banner?: boolean
    perfil_privado?: boolean
    criadoEm?: boolean
    termos_aceitos?: boolean
    data_aceite_termos?: boolean
    estantes?: boolean | Usuario$estantesArgs<ExtArgs>
    seguindo?: boolean | Usuario$seguindoArgs<ExtArgs>
    seguidores?: boolean | Usuario$seguidoresArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    nomeExibicao?: boolean
    senha?: boolean
    bio?: boolean
    avatar?: boolean
    banner?: boolean
    perfil_privado?: boolean
    criadoEm?: boolean
    termos_aceitos?: boolean
    data_aceite_termos?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    nomeExibicao?: boolean
    senha?: boolean
    bio?: boolean
    avatar?: boolean
    banner?: boolean
    perfil_privado?: boolean
    criadoEm?: boolean
    termos_aceitos?: boolean
    data_aceite_termos?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    nomeExibicao?: boolean
    senha?: boolean
    bio?: boolean
    avatar?: boolean
    banner?: boolean
    perfil_privado?: boolean
    criadoEm?: boolean
    termos_aceitos?: boolean
    data_aceite_termos?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "nomeExibicao" | "senha" | "bio" | "avatar" | "banner" | "perfil_privado" | "criadoEm" | "termos_aceitos" | "data_aceite_termos", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estantes?: boolean | Usuario$estantesArgs<ExtArgs>
    seguindo?: boolean | Usuario$seguindoArgs<ExtArgs>
    seguidores?: boolean | Usuario$seguidoresArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      estantes: Prisma.$EstantePayload<ExtArgs>[]
      seguindo: Prisma.$SeguidorPayload<ExtArgs>[]
      seguidores: Prisma.$SeguidorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      nomeExibicao: string
      senha: string
      bio: string | null
      avatar: string | null
      banner: string | null
      perfil_privado: boolean | null
      criadoEm: Date
      termos_aceitos: boolean
      data_aceite_termos: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estantes<T extends Usuario$estantesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$estantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seguindo<T extends Usuario$seguindoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$seguindoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seguidores<T extends Usuario$seguidoresArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$seguidoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly nomeExibicao: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly bio: FieldRef<"Usuario", 'String'>
    readonly avatar: FieldRef<"Usuario", 'String'>
    readonly banner: FieldRef<"Usuario", 'String'>
    readonly perfil_privado: FieldRef<"Usuario", 'Boolean'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly termos_aceitos: FieldRef<"Usuario", 'Boolean'>
    readonly data_aceite_termos: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.estantes
   */
  export type Usuario$estantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    where?: EstanteWhereInput
    orderBy?: EstanteOrderByWithRelationInput | EstanteOrderByWithRelationInput[]
    cursor?: EstanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstanteScalarFieldEnum | EstanteScalarFieldEnum[]
  }

  /**
   * Usuario.seguindo
   */
  export type Usuario$seguindoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    where?: SeguidorWhereInput
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    cursor?: SeguidorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Usuario.seguidores
   */
  export type Usuario$seguidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    where?: SeguidorWhereInput
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    cursor?: SeguidorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Seguidor
   */

  export type AggregateSeguidor = {
    _count: SeguidorCountAggregateOutputType | null
    _avg: SeguidorAvgAggregateOutputType | null
    _sum: SeguidorSumAggregateOutputType | null
    _min: SeguidorMinAggregateOutputType | null
    _max: SeguidorMaxAggregateOutputType | null
  }

  export type SeguidorAvgAggregateOutputType = {
    id: number | null
    seguidorId: number | null
    seguindoId: number | null
  }

  export type SeguidorSumAggregateOutputType = {
    id: number | null
    seguidorId: number | null
    seguindoId: number | null
  }

  export type SeguidorMinAggregateOutputType = {
    id: number | null
    seguidorId: number | null
    seguindoId: number | null
  }

  export type SeguidorMaxAggregateOutputType = {
    id: number | null
    seguidorId: number | null
    seguindoId: number | null
  }

  export type SeguidorCountAggregateOutputType = {
    id: number
    seguidorId: number
    seguindoId: number
    _all: number
  }


  export type SeguidorAvgAggregateInputType = {
    id?: true
    seguidorId?: true
    seguindoId?: true
  }

  export type SeguidorSumAggregateInputType = {
    id?: true
    seguidorId?: true
    seguindoId?: true
  }

  export type SeguidorMinAggregateInputType = {
    id?: true
    seguidorId?: true
    seguindoId?: true
  }

  export type SeguidorMaxAggregateInputType = {
    id?: true
    seguidorId?: true
    seguindoId?: true
  }

  export type SeguidorCountAggregateInputType = {
    id?: true
    seguidorId?: true
    seguindoId?: true
    _all?: true
  }

  export type SeguidorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seguidor to aggregate.
     */
    where?: SeguidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguidors to fetch.
     */
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeguidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seguidors
    **/
    _count?: true | SeguidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeguidorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeguidorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeguidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeguidorMaxAggregateInputType
  }

  export type GetSeguidorAggregateType<T extends SeguidorAggregateArgs> = {
        [P in keyof T & keyof AggregateSeguidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeguidor[P]>
      : GetScalarType<T[P], AggregateSeguidor[P]>
  }




  export type SeguidorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguidorWhereInput
    orderBy?: SeguidorOrderByWithAggregationInput | SeguidorOrderByWithAggregationInput[]
    by: SeguidorScalarFieldEnum[] | SeguidorScalarFieldEnum
    having?: SeguidorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeguidorCountAggregateInputType | true
    _avg?: SeguidorAvgAggregateInputType
    _sum?: SeguidorSumAggregateInputType
    _min?: SeguidorMinAggregateInputType
    _max?: SeguidorMaxAggregateInputType
  }

  export type SeguidorGroupByOutputType = {
    id: number
    seguidorId: number
    seguindoId: number
    _count: SeguidorCountAggregateOutputType | null
    _avg: SeguidorAvgAggregateOutputType | null
    _sum: SeguidorSumAggregateOutputType | null
    _min: SeguidorMinAggregateOutputType | null
    _max: SeguidorMaxAggregateOutputType | null
  }

  type GetSeguidorGroupByPayload<T extends SeguidorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeguidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeguidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeguidorGroupByOutputType[P]>
            : GetScalarType<T[P], SeguidorGroupByOutputType[P]>
        }
      >
    >


  export type SeguidorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seguidorId?: boolean
    seguindoId?: boolean
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguidor"]>

  export type SeguidorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seguidorId?: boolean
    seguindoId?: boolean
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguidor"]>

  export type SeguidorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seguidorId?: boolean
    seguindoId?: boolean
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguidor"]>

  export type SeguidorSelectScalar = {
    id?: boolean
    seguidorId?: boolean
    seguindoId?: boolean
  }

  export type SeguidorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seguidorId" | "seguindoId", ExtArgs["result"]["seguidor"]>
  export type SeguidorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SeguidorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SeguidorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SeguidorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seguidor"
    objects: {
      seguidor: Prisma.$UsuarioPayload<ExtArgs>
      seguindo: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seguidorId: number
      seguindoId: number
    }, ExtArgs["result"]["seguidor"]>
    composites: {}
  }

  type SeguidorGetPayload<S extends boolean | null | undefined | SeguidorDefaultArgs> = $Result.GetResult<Prisma.$SeguidorPayload, S>

  type SeguidorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeguidorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeguidorCountAggregateInputType | true
    }

  export interface SeguidorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seguidor'], meta: { name: 'Seguidor' } }
    /**
     * Find zero or one Seguidor that matches the filter.
     * @param {SeguidorFindUniqueArgs} args - Arguments to find a Seguidor
     * @example
     * // Get one Seguidor
     * const seguidor = await prisma.seguidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeguidorFindUniqueArgs>(args: SelectSubset<T, SeguidorFindUniqueArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seguidor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeguidorFindUniqueOrThrowArgs} args - Arguments to find a Seguidor
     * @example
     * // Get one Seguidor
     * const seguidor = await prisma.seguidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeguidorFindUniqueOrThrowArgs>(args: SelectSubset<T, SeguidorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seguidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorFindFirstArgs} args - Arguments to find a Seguidor
     * @example
     * // Get one Seguidor
     * const seguidor = await prisma.seguidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeguidorFindFirstArgs>(args?: SelectSubset<T, SeguidorFindFirstArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seguidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorFindFirstOrThrowArgs} args - Arguments to find a Seguidor
     * @example
     * // Get one Seguidor
     * const seguidor = await prisma.seguidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeguidorFindFirstOrThrowArgs>(args?: SelectSubset<T, SeguidorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seguidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seguidors
     * const seguidors = await prisma.seguidor.findMany()
     * 
     * // Get first 10 Seguidors
     * const seguidors = await prisma.seguidor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seguidorWithIdOnly = await prisma.seguidor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeguidorFindManyArgs>(args?: SelectSubset<T, SeguidorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seguidor.
     * @param {SeguidorCreateArgs} args - Arguments to create a Seguidor.
     * @example
     * // Create one Seguidor
     * const Seguidor = await prisma.seguidor.create({
     *   data: {
     *     // ... data to create a Seguidor
     *   }
     * })
     * 
     */
    create<T extends SeguidorCreateArgs>(args: SelectSubset<T, SeguidorCreateArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seguidors.
     * @param {SeguidorCreateManyArgs} args - Arguments to create many Seguidors.
     * @example
     * // Create many Seguidors
     * const seguidor = await prisma.seguidor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeguidorCreateManyArgs>(args?: SelectSubset<T, SeguidorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seguidors and returns the data saved in the database.
     * @param {SeguidorCreateManyAndReturnArgs} args - Arguments to create many Seguidors.
     * @example
     * // Create many Seguidors
     * const seguidor = await prisma.seguidor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seguidors and only return the `id`
     * const seguidorWithIdOnly = await prisma.seguidor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeguidorCreateManyAndReturnArgs>(args?: SelectSubset<T, SeguidorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seguidor.
     * @param {SeguidorDeleteArgs} args - Arguments to delete one Seguidor.
     * @example
     * // Delete one Seguidor
     * const Seguidor = await prisma.seguidor.delete({
     *   where: {
     *     // ... filter to delete one Seguidor
     *   }
     * })
     * 
     */
    delete<T extends SeguidorDeleteArgs>(args: SelectSubset<T, SeguidorDeleteArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seguidor.
     * @param {SeguidorUpdateArgs} args - Arguments to update one Seguidor.
     * @example
     * // Update one Seguidor
     * const seguidor = await prisma.seguidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeguidorUpdateArgs>(args: SelectSubset<T, SeguidorUpdateArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seguidors.
     * @param {SeguidorDeleteManyArgs} args - Arguments to filter Seguidors to delete.
     * @example
     * // Delete a few Seguidors
     * const { count } = await prisma.seguidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeguidorDeleteManyArgs>(args?: SelectSubset<T, SeguidorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seguidors
     * const seguidor = await prisma.seguidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeguidorUpdateManyArgs>(args: SelectSubset<T, SeguidorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguidors and returns the data updated in the database.
     * @param {SeguidorUpdateManyAndReturnArgs} args - Arguments to update many Seguidors.
     * @example
     * // Update many Seguidors
     * const seguidor = await prisma.seguidor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seguidors and only return the `id`
     * const seguidorWithIdOnly = await prisma.seguidor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeguidorUpdateManyAndReturnArgs>(args: SelectSubset<T, SeguidorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seguidor.
     * @param {SeguidorUpsertArgs} args - Arguments to update or create a Seguidor.
     * @example
     * // Update or create a Seguidor
     * const seguidor = await prisma.seguidor.upsert({
     *   create: {
     *     // ... data to create a Seguidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seguidor we want to update
     *   }
     * })
     */
    upsert<T extends SeguidorUpsertArgs>(args: SelectSubset<T, SeguidorUpsertArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seguidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorCountArgs} args - Arguments to filter Seguidors to count.
     * @example
     * // Count the number of Seguidors
     * const count = await prisma.seguidor.count({
     *   where: {
     *     // ... the filter for the Seguidors we want to count
     *   }
     * })
    **/
    count<T extends SeguidorCountArgs>(
      args?: Subset<T, SeguidorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeguidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seguidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeguidorAggregateArgs>(args: Subset<T, SeguidorAggregateArgs>): Prisma.PrismaPromise<GetSeguidorAggregateType<T>>

    /**
     * Group by Seguidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeguidorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeguidorGroupByArgs['orderBy'] }
        : { orderBy?: SeguidorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeguidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeguidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seguidor model
   */
  readonly fields: SeguidorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seguidor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeguidorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seguidor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seguindo<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seguidor model
   */
  interface SeguidorFieldRefs {
    readonly id: FieldRef<"Seguidor", 'Int'>
    readonly seguidorId: FieldRef<"Seguidor", 'Int'>
    readonly seguindoId: FieldRef<"Seguidor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Seguidor findUnique
   */
  export type SeguidorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidor to fetch.
     */
    where: SeguidorWhereUniqueInput
  }

  /**
   * Seguidor findUniqueOrThrow
   */
  export type SeguidorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidor to fetch.
     */
    where: SeguidorWhereUniqueInput
  }

  /**
   * Seguidor findFirst
   */
  export type SeguidorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidor to fetch.
     */
    where?: SeguidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguidors to fetch.
     */
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seguidors.
     */
    cursor?: SeguidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seguidors.
     */
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Seguidor findFirstOrThrow
   */
  export type SeguidorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidor to fetch.
     */
    where?: SeguidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguidors to fetch.
     */
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seguidors.
     */
    cursor?: SeguidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seguidors.
     */
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Seguidor findMany
   */
  export type SeguidorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidors to fetch.
     */
    where?: SeguidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguidors to fetch.
     */
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seguidors.
     */
    cursor?: SeguidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seguidors.
     */
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Seguidor create
   */
  export type SeguidorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * The data needed to create a Seguidor.
     */
    data: XOR<SeguidorCreateInput, SeguidorUncheckedCreateInput>
  }

  /**
   * Seguidor createMany
   */
  export type SeguidorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seguidors.
     */
    data: SeguidorCreateManyInput | SeguidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seguidor createManyAndReturn
   */
  export type SeguidorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * The data used to create many Seguidors.
     */
    data: SeguidorCreateManyInput | SeguidorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seguidor update
   */
  export type SeguidorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * The data needed to update a Seguidor.
     */
    data: XOR<SeguidorUpdateInput, SeguidorUncheckedUpdateInput>
    /**
     * Choose, which Seguidor to update.
     */
    where: SeguidorWhereUniqueInput
  }

  /**
   * Seguidor updateMany
   */
  export type SeguidorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seguidors.
     */
    data: XOR<SeguidorUpdateManyMutationInput, SeguidorUncheckedUpdateManyInput>
    /**
     * Filter which Seguidors to update
     */
    where?: SeguidorWhereInput
    /**
     * Limit how many Seguidors to update.
     */
    limit?: number
  }

  /**
   * Seguidor updateManyAndReturn
   */
  export type SeguidorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * The data used to update Seguidors.
     */
    data: XOR<SeguidorUpdateManyMutationInput, SeguidorUncheckedUpdateManyInput>
    /**
     * Filter which Seguidors to update
     */
    where?: SeguidorWhereInput
    /**
     * Limit how many Seguidors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seguidor upsert
   */
  export type SeguidorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * The filter to search for the Seguidor to update in case it exists.
     */
    where: SeguidorWhereUniqueInput
    /**
     * In case the Seguidor found by the `where` argument doesn't exist, create a new Seguidor with this data.
     */
    create: XOR<SeguidorCreateInput, SeguidorUncheckedCreateInput>
    /**
     * In case the Seguidor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeguidorUpdateInput, SeguidorUncheckedUpdateInput>
  }

  /**
   * Seguidor delete
   */
  export type SeguidorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter which Seguidor to delete.
     */
    where: SeguidorWhereUniqueInput
  }

  /**
   * Seguidor deleteMany
   */
  export type SeguidorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seguidors to delete
     */
    where?: SeguidorWhereInput
    /**
     * Limit how many Seguidors to delete.
     */
    limit?: number
  }

  /**
   * Seguidor without action
   */
  export type SeguidorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
  }


  /**
   * Model Fanfic
   */

  export type AggregateFanfic = {
    _count: FanficCountAggregateOutputType | null
    _avg: FanficAvgAggregateOutputType | null
    _sum: FanficSumAggregateOutputType | null
    _min: FanficMinAggregateOutputType | null
    _max: FanficMaxAggregateOutputType | null
  }

  export type FanficAvgAggregateOutputType = {
    id: number | null
    mediaNota: number | null
  }

  export type FanficSumAggregateOutputType = {
    id: number | null
    mediaNota: number | null
  }

  export type FanficMinAggregateOutputType = {
    id: number | null
    url: string | null
    titulo: string | null
    autor: string | null
    plataforma: string | null
    capa: string | null
    mediaNota: number | null
  }

  export type FanficMaxAggregateOutputType = {
    id: number | null
    url: string | null
    titulo: string | null
    autor: string | null
    plataforma: string | null
    capa: string | null
    mediaNota: number | null
  }

  export type FanficCountAggregateOutputType = {
    id: number
    url: number
    titulo: number
    autor: number
    plataforma: number
    capa: number
    mediaNota: number
    _all: number
  }


  export type FanficAvgAggregateInputType = {
    id?: true
    mediaNota?: true
  }

  export type FanficSumAggregateInputType = {
    id?: true
    mediaNota?: true
  }

  export type FanficMinAggregateInputType = {
    id?: true
    url?: true
    titulo?: true
    autor?: true
    plataforma?: true
    capa?: true
    mediaNota?: true
  }

  export type FanficMaxAggregateInputType = {
    id?: true
    url?: true
    titulo?: true
    autor?: true
    plataforma?: true
    capa?: true
    mediaNota?: true
  }

  export type FanficCountAggregateInputType = {
    id?: true
    url?: true
    titulo?: true
    autor?: true
    plataforma?: true
    capa?: true
    mediaNota?: true
    _all?: true
  }

  export type FanficAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fanfic to aggregate.
     */
    where?: FanficWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fanfics to fetch.
     */
    orderBy?: FanficOrderByWithRelationInput | FanficOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FanficWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fanfics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fanfics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fanfics
    **/
    _count?: true | FanficCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FanficAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FanficSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FanficMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FanficMaxAggregateInputType
  }

  export type GetFanficAggregateType<T extends FanficAggregateArgs> = {
        [P in keyof T & keyof AggregateFanfic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFanfic[P]>
      : GetScalarType<T[P], AggregateFanfic[P]>
  }




  export type FanficGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FanficWhereInput
    orderBy?: FanficOrderByWithAggregationInput | FanficOrderByWithAggregationInput[]
    by: FanficScalarFieldEnum[] | FanficScalarFieldEnum
    having?: FanficScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FanficCountAggregateInputType | true
    _avg?: FanficAvgAggregateInputType
    _sum?: FanficSumAggregateInputType
    _min?: FanficMinAggregateInputType
    _max?: FanficMaxAggregateInputType
  }

  export type FanficGroupByOutputType = {
    id: number
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa: string | null
    mediaNota: number
    _count: FanficCountAggregateOutputType | null
    _avg: FanficAvgAggregateOutputType | null
    _sum: FanficSumAggregateOutputType | null
    _min: FanficMinAggregateOutputType | null
    _max: FanficMaxAggregateOutputType | null
  }

  type GetFanficGroupByPayload<T extends FanficGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FanficGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FanficGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FanficGroupByOutputType[P]>
            : GetScalarType<T[P], FanficGroupByOutputType[P]>
        }
      >
    >


  export type FanficSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    titulo?: boolean
    autor?: boolean
    plataforma?: boolean
    capa?: boolean
    mediaNota?: boolean
    itensEstante?: boolean | Fanfic$itensEstanteArgs<ExtArgs>
    tags?: boolean | Fanfic$tagsArgs<ExtArgs>
    fandoms?: boolean | Fanfic$fandomsArgs<ExtArgs>
    _count?: boolean | FanficCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fanfic"]>

  export type FanficSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    titulo?: boolean
    autor?: boolean
    plataforma?: boolean
    capa?: boolean
    mediaNota?: boolean
  }, ExtArgs["result"]["fanfic"]>

  export type FanficSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    titulo?: boolean
    autor?: boolean
    plataforma?: boolean
    capa?: boolean
    mediaNota?: boolean
  }, ExtArgs["result"]["fanfic"]>

  export type FanficSelectScalar = {
    id?: boolean
    url?: boolean
    titulo?: boolean
    autor?: boolean
    plataforma?: boolean
    capa?: boolean
    mediaNota?: boolean
  }

  export type FanficOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "titulo" | "autor" | "plataforma" | "capa" | "mediaNota", ExtArgs["result"]["fanfic"]>
  export type FanficInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensEstante?: boolean | Fanfic$itensEstanteArgs<ExtArgs>
    tags?: boolean | Fanfic$tagsArgs<ExtArgs>
    fandoms?: boolean | Fanfic$fandomsArgs<ExtArgs>
    _count?: boolean | FanficCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FanficIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FanficIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FanficPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fanfic"
    objects: {
      itensEstante: Prisma.$ItemEstantePayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      fandoms: Prisma.$FandomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      titulo: string
      autor: string
      plataforma: string
      capa: string | null
      mediaNota: number
    }, ExtArgs["result"]["fanfic"]>
    composites: {}
  }

  type FanficGetPayload<S extends boolean | null | undefined | FanficDefaultArgs> = $Result.GetResult<Prisma.$FanficPayload, S>

  type FanficCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FanficFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FanficCountAggregateInputType | true
    }

  export interface FanficDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fanfic'], meta: { name: 'Fanfic' } }
    /**
     * Find zero or one Fanfic that matches the filter.
     * @param {FanficFindUniqueArgs} args - Arguments to find a Fanfic
     * @example
     * // Get one Fanfic
     * const fanfic = await prisma.fanfic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FanficFindUniqueArgs>(args: SelectSubset<T, FanficFindUniqueArgs<ExtArgs>>): Prisma__FanficClient<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fanfic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FanficFindUniqueOrThrowArgs} args - Arguments to find a Fanfic
     * @example
     * // Get one Fanfic
     * const fanfic = await prisma.fanfic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FanficFindUniqueOrThrowArgs>(args: SelectSubset<T, FanficFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FanficClient<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fanfic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FanficFindFirstArgs} args - Arguments to find a Fanfic
     * @example
     * // Get one Fanfic
     * const fanfic = await prisma.fanfic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FanficFindFirstArgs>(args?: SelectSubset<T, FanficFindFirstArgs<ExtArgs>>): Prisma__FanficClient<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fanfic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FanficFindFirstOrThrowArgs} args - Arguments to find a Fanfic
     * @example
     * // Get one Fanfic
     * const fanfic = await prisma.fanfic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FanficFindFirstOrThrowArgs>(args?: SelectSubset<T, FanficFindFirstOrThrowArgs<ExtArgs>>): Prisma__FanficClient<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fanfics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FanficFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fanfics
     * const fanfics = await prisma.fanfic.findMany()
     * 
     * // Get first 10 Fanfics
     * const fanfics = await prisma.fanfic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fanficWithIdOnly = await prisma.fanfic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FanficFindManyArgs>(args?: SelectSubset<T, FanficFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fanfic.
     * @param {FanficCreateArgs} args - Arguments to create a Fanfic.
     * @example
     * // Create one Fanfic
     * const Fanfic = await prisma.fanfic.create({
     *   data: {
     *     // ... data to create a Fanfic
     *   }
     * })
     * 
     */
    create<T extends FanficCreateArgs>(args: SelectSubset<T, FanficCreateArgs<ExtArgs>>): Prisma__FanficClient<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fanfics.
     * @param {FanficCreateManyArgs} args - Arguments to create many Fanfics.
     * @example
     * // Create many Fanfics
     * const fanfic = await prisma.fanfic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FanficCreateManyArgs>(args?: SelectSubset<T, FanficCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fanfics and returns the data saved in the database.
     * @param {FanficCreateManyAndReturnArgs} args - Arguments to create many Fanfics.
     * @example
     * // Create many Fanfics
     * const fanfic = await prisma.fanfic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fanfics and only return the `id`
     * const fanficWithIdOnly = await prisma.fanfic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FanficCreateManyAndReturnArgs>(args?: SelectSubset<T, FanficCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fanfic.
     * @param {FanficDeleteArgs} args - Arguments to delete one Fanfic.
     * @example
     * // Delete one Fanfic
     * const Fanfic = await prisma.fanfic.delete({
     *   where: {
     *     // ... filter to delete one Fanfic
     *   }
     * })
     * 
     */
    delete<T extends FanficDeleteArgs>(args: SelectSubset<T, FanficDeleteArgs<ExtArgs>>): Prisma__FanficClient<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fanfic.
     * @param {FanficUpdateArgs} args - Arguments to update one Fanfic.
     * @example
     * // Update one Fanfic
     * const fanfic = await prisma.fanfic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FanficUpdateArgs>(args: SelectSubset<T, FanficUpdateArgs<ExtArgs>>): Prisma__FanficClient<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fanfics.
     * @param {FanficDeleteManyArgs} args - Arguments to filter Fanfics to delete.
     * @example
     * // Delete a few Fanfics
     * const { count } = await prisma.fanfic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FanficDeleteManyArgs>(args?: SelectSubset<T, FanficDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fanfics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FanficUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fanfics
     * const fanfic = await prisma.fanfic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FanficUpdateManyArgs>(args: SelectSubset<T, FanficUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fanfics and returns the data updated in the database.
     * @param {FanficUpdateManyAndReturnArgs} args - Arguments to update many Fanfics.
     * @example
     * // Update many Fanfics
     * const fanfic = await prisma.fanfic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fanfics and only return the `id`
     * const fanficWithIdOnly = await prisma.fanfic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FanficUpdateManyAndReturnArgs>(args: SelectSubset<T, FanficUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fanfic.
     * @param {FanficUpsertArgs} args - Arguments to update or create a Fanfic.
     * @example
     * // Update or create a Fanfic
     * const fanfic = await prisma.fanfic.upsert({
     *   create: {
     *     // ... data to create a Fanfic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fanfic we want to update
     *   }
     * })
     */
    upsert<T extends FanficUpsertArgs>(args: SelectSubset<T, FanficUpsertArgs<ExtArgs>>): Prisma__FanficClient<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fanfics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FanficCountArgs} args - Arguments to filter Fanfics to count.
     * @example
     * // Count the number of Fanfics
     * const count = await prisma.fanfic.count({
     *   where: {
     *     // ... the filter for the Fanfics we want to count
     *   }
     * })
    **/
    count<T extends FanficCountArgs>(
      args?: Subset<T, FanficCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FanficCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fanfic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FanficAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FanficAggregateArgs>(args: Subset<T, FanficAggregateArgs>): Prisma.PrismaPromise<GetFanficAggregateType<T>>

    /**
     * Group by Fanfic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FanficGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FanficGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FanficGroupByArgs['orderBy'] }
        : { orderBy?: FanficGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FanficGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFanficGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fanfic model
   */
  readonly fields: FanficFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fanfic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FanficClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itensEstante<T extends Fanfic$itensEstanteArgs<ExtArgs> = {}>(args?: Subset<T, Fanfic$itensEstanteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Fanfic$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Fanfic$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fandoms<T extends Fanfic$fandomsArgs<ExtArgs> = {}>(args?: Subset<T, Fanfic$fandomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fanfic model
   */
  interface FanficFieldRefs {
    readonly id: FieldRef<"Fanfic", 'Int'>
    readonly url: FieldRef<"Fanfic", 'String'>
    readonly titulo: FieldRef<"Fanfic", 'String'>
    readonly autor: FieldRef<"Fanfic", 'String'>
    readonly plataforma: FieldRef<"Fanfic", 'String'>
    readonly capa: FieldRef<"Fanfic", 'String'>
    readonly mediaNota: FieldRef<"Fanfic", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Fanfic findUnique
   */
  export type FanficFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    /**
     * Filter, which Fanfic to fetch.
     */
    where: FanficWhereUniqueInput
  }

  /**
   * Fanfic findUniqueOrThrow
   */
  export type FanficFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    /**
     * Filter, which Fanfic to fetch.
     */
    where: FanficWhereUniqueInput
  }

  /**
   * Fanfic findFirst
   */
  export type FanficFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    /**
     * Filter, which Fanfic to fetch.
     */
    where?: FanficWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fanfics to fetch.
     */
    orderBy?: FanficOrderByWithRelationInput | FanficOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fanfics.
     */
    cursor?: FanficWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fanfics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fanfics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fanfics.
     */
    distinct?: FanficScalarFieldEnum | FanficScalarFieldEnum[]
  }

  /**
   * Fanfic findFirstOrThrow
   */
  export type FanficFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    /**
     * Filter, which Fanfic to fetch.
     */
    where?: FanficWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fanfics to fetch.
     */
    orderBy?: FanficOrderByWithRelationInput | FanficOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fanfics.
     */
    cursor?: FanficWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fanfics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fanfics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fanfics.
     */
    distinct?: FanficScalarFieldEnum | FanficScalarFieldEnum[]
  }

  /**
   * Fanfic findMany
   */
  export type FanficFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    /**
     * Filter, which Fanfics to fetch.
     */
    where?: FanficWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fanfics to fetch.
     */
    orderBy?: FanficOrderByWithRelationInput | FanficOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fanfics.
     */
    cursor?: FanficWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fanfics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fanfics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fanfics.
     */
    distinct?: FanficScalarFieldEnum | FanficScalarFieldEnum[]
  }

  /**
   * Fanfic create
   */
  export type FanficCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    /**
     * The data needed to create a Fanfic.
     */
    data: XOR<FanficCreateInput, FanficUncheckedCreateInput>
  }

  /**
   * Fanfic createMany
   */
  export type FanficCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fanfics.
     */
    data: FanficCreateManyInput | FanficCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fanfic createManyAndReturn
   */
  export type FanficCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * The data used to create many Fanfics.
     */
    data: FanficCreateManyInput | FanficCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fanfic update
   */
  export type FanficUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    /**
     * The data needed to update a Fanfic.
     */
    data: XOR<FanficUpdateInput, FanficUncheckedUpdateInput>
    /**
     * Choose, which Fanfic to update.
     */
    where: FanficWhereUniqueInput
  }

  /**
   * Fanfic updateMany
   */
  export type FanficUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fanfics.
     */
    data: XOR<FanficUpdateManyMutationInput, FanficUncheckedUpdateManyInput>
    /**
     * Filter which Fanfics to update
     */
    where?: FanficWhereInput
    /**
     * Limit how many Fanfics to update.
     */
    limit?: number
  }

  /**
   * Fanfic updateManyAndReturn
   */
  export type FanficUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * The data used to update Fanfics.
     */
    data: XOR<FanficUpdateManyMutationInput, FanficUncheckedUpdateManyInput>
    /**
     * Filter which Fanfics to update
     */
    where?: FanficWhereInput
    /**
     * Limit how many Fanfics to update.
     */
    limit?: number
  }

  /**
   * Fanfic upsert
   */
  export type FanficUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    /**
     * The filter to search for the Fanfic to update in case it exists.
     */
    where: FanficWhereUniqueInput
    /**
     * In case the Fanfic found by the `where` argument doesn't exist, create a new Fanfic with this data.
     */
    create: XOR<FanficCreateInput, FanficUncheckedCreateInput>
    /**
     * In case the Fanfic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FanficUpdateInput, FanficUncheckedUpdateInput>
  }

  /**
   * Fanfic delete
   */
  export type FanficDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    /**
     * Filter which Fanfic to delete.
     */
    where: FanficWhereUniqueInput
  }

  /**
   * Fanfic deleteMany
   */
  export type FanficDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fanfics to delete
     */
    where?: FanficWhereInput
    /**
     * Limit how many Fanfics to delete.
     */
    limit?: number
  }

  /**
   * Fanfic.itensEstante
   */
  export type Fanfic$itensEstanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    where?: ItemEstanteWhereInput
    orderBy?: ItemEstanteOrderByWithRelationInput | ItemEstanteOrderByWithRelationInput[]
    cursor?: ItemEstanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemEstanteScalarFieldEnum | ItemEstanteScalarFieldEnum[]
  }

  /**
   * Fanfic.tags
   */
  export type Fanfic$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Fanfic.fandoms
   */
  export type Fanfic$fandomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    where?: FandomWhereInput
    orderBy?: FandomOrderByWithRelationInput | FandomOrderByWithRelationInput[]
    cursor?: FandomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FandomScalarFieldEnum | FandomScalarFieldEnum[]
  }

  /**
   * Fanfic without action
   */
  export type FanficDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
  }


  /**
   * Model Estante
   */

  export type AggregateEstante = {
    _count: EstanteCountAggregateOutputType | null
    _avg: EstanteAvgAggregateOutputType | null
    _sum: EstanteSumAggregateOutputType | null
    _min: EstanteMinAggregateOutputType | null
    _max: EstanteMaxAggregateOutputType | null
  }

  export type EstanteAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EstanteSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EstanteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    privada: boolean | null
    usuarioId: number | null
  }

  export type EstanteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    privada: boolean | null
    usuarioId: number | null
  }

  export type EstanteCountAggregateOutputType = {
    id: number
    nome: number
    privada: number
    usuarioId: number
    _all: number
  }


  export type EstanteAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EstanteSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EstanteMinAggregateInputType = {
    id?: true
    nome?: true
    privada?: true
    usuarioId?: true
  }

  export type EstanteMaxAggregateInputType = {
    id?: true
    nome?: true
    privada?: true
    usuarioId?: true
  }

  export type EstanteCountAggregateInputType = {
    id?: true
    nome?: true
    privada?: true
    usuarioId?: true
    _all?: true
  }

  export type EstanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estante to aggregate.
     */
    where?: EstanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estantes to fetch.
     */
    orderBy?: EstanteOrderByWithRelationInput | EstanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estantes
    **/
    _count?: true | EstanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstanteMaxAggregateInputType
  }

  export type GetEstanteAggregateType<T extends EstanteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstante[P]>
      : GetScalarType<T[P], AggregateEstante[P]>
  }




  export type EstanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstanteWhereInput
    orderBy?: EstanteOrderByWithAggregationInput | EstanteOrderByWithAggregationInput[]
    by: EstanteScalarFieldEnum[] | EstanteScalarFieldEnum
    having?: EstanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstanteCountAggregateInputType | true
    _avg?: EstanteAvgAggregateInputType
    _sum?: EstanteSumAggregateInputType
    _min?: EstanteMinAggregateInputType
    _max?: EstanteMaxAggregateInputType
  }

  export type EstanteGroupByOutputType = {
    id: number
    nome: string
    privada: boolean
    usuarioId: number
    _count: EstanteCountAggregateOutputType | null
    _avg: EstanteAvgAggregateOutputType | null
    _sum: EstanteSumAggregateOutputType | null
    _min: EstanteMinAggregateOutputType | null
    _max: EstanteMaxAggregateOutputType | null
  }

  type GetEstanteGroupByPayload<T extends EstanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstanteGroupByOutputType[P]>
            : GetScalarType<T[P], EstanteGroupByOutputType[P]>
        }
      >
    >


  export type EstanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    privada?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | Estante$itensArgs<ExtArgs>
    _count?: boolean | EstanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estante"]>

  export type EstanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    privada?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estante"]>

  export type EstanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    privada?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estante"]>

  export type EstanteSelectScalar = {
    id?: boolean
    nome?: boolean
    privada?: boolean
    usuarioId?: boolean
  }

  export type EstanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "privada" | "usuarioId", ExtArgs["result"]["estante"]>
  export type EstanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | Estante$itensArgs<ExtArgs>
    _count?: boolean | EstanteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EstanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EstantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estante"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      itens: Prisma.$ItemEstantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      privada: boolean
      usuarioId: number
    }, ExtArgs["result"]["estante"]>
    composites: {}
  }

  type EstanteGetPayload<S extends boolean | null | undefined | EstanteDefaultArgs> = $Result.GetResult<Prisma.$EstantePayload, S>

  type EstanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstanteCountAggregateInputType | true
    }

  export interface EstanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estante'], meta: { name: 'Estante' } }
    /**
     * Find zero or one Estante that matches the filter.
     * @param {EstanteFindUniqueArgs} args - Arguments to find a Estante
     * @example
     * // Get one Estante
     * const estante = await prisma.estante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstanteFindUniqueArgs>(args: SelectSubset<T, EstanteFindUniqueArgs<ExtArgs>>): Prisma__EstanteClient<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstanteFindUniqueOrThrowArgs} args - Arguments to find a Estante
     * @example
     * // Get one Estante
     * const estante = await prisma.estante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstanteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstanteClient<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstanteFindFirstArgs} args - Arguments to find a Estante
     * @example
     * // Get one Estante
     * const estante = await prisma.estante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstanteFindFirstArgs>(args?: SelectSubset<T, EstanteFindFirstArgs<ExtArgs>>): Prisma__EstanteClient<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstanteFindFirstOrThrowArgs} args - Arguments to find a Estante
     * @example
     * // Get one Estante
     * const estante = await prisma.estante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstanteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstanteClient<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estantes
     * const estantes = await prisma.estante.findMany()
     * 
     * // Get first 10 Estantes
     * const estantes = await prisma.estante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estanteWithIdOnly = await prisma.estante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstanteFindManyArgs>(args?: SelectSubset<T, EstanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estante.
     * @param {EstanteCreateArgs} args - Arguments to create a Estante.
     * @example
     * // Create one Estante
     * const Estante = await prisma.estante.create({
     *   data: {
     *     // ... data to create a Estante
     *   }
     * })
     * 
     */
    create<T extends EstanteCreateArgs>(args: SelectSubset<T, EstanteCreateArgs<ExtArgs>>): Prisma__EstanteClient<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estantes.
     * @param {EstanteCreateManyArgs} args - Arguments to create many Estantes.
     * @example
     * // Create many Estantes
     * const estante = await prisma.estante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstanteCreateManyArgs>(args?: SelectSubset<T, EstanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estantes and returns the data saved in the database.
     * @param {EstanteCreateManyAndReturnArgs} args - Arguments to create many Estantes.
     * @example
     * // Create many Estantes
     * const estante = await prisma.estante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estantes and only return the `id`
     * const estanteWithIdOnly = await prisma.estante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstanteCreateManyAndReturnArgs>(args?: SelectSubset<T, EstanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estante.
     * @param {EstanteDeleteArgs} args - Arguments to delete one Estante.
     * @example
     * // Delete one Estante
     * const Estante = await prisma.estante.delete({
     *   where: {
     *     // ... filter to delete one Estante
     *   }
     * })
     * 
     */
    delete<T extends EstanteDeleteArgs>(args: SelectSubset<T, EstanteDeleteArgs<ExtArgs>>): Prisma__EstanteClient<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estante.
     * @param {EstanteUpdateArgs} args - Arguments to update one Estante.
     * @example
     * // Update one Estante
     * const estante = await prisma.estante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstanteUpdateArgs>(args: SelectSubset<T, EstanteUpdateArgs<ExtArgs>>): Prisma__EstanteClient<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estantes.
     * @param {EstanteDeleteManyArgs} args - Arguments to filter Estantes to delete.
     * @example
     * // Delete a few Estantes
     * const { count } = await prisma.estante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstanteDeleteManyArgs>(args?: SelectSubset<T, EstanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estantes
     * const estante = await prisma.estante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstanteUpdateManyArgs>(args: SelectSubset<T, EstanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estantes and returns the data updated in the database.
     * @param {EstanteUpdateManyAndReturnArgs} args - Arguments to update many Estantes.
     * @example
     * // Update many Estantes
     * const estante = await prisma.estante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estantes and only return the `id`
     * const estanteWithIdOnly = await prisma.estante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstanteUpdateManyAndReturnArgs>(args: SelectSubset<T, EstanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estante.
     * @param {EstanteUpsertArgs} args - Arguments to update or create a Estante.
     * @example
     * // Update or create a Estante
     * const estante = await prisma.estante.upsert({
     *   create: {
     *     // ... data to create a Estante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estante we want to update
     *   }
     * })
     */
    upsert<T extends EstanteUpsertArgs>(args: SelectSubset<T, EstanteUpsertArgs<ExtArgs>>): Prisma__EstanteClient<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstanteCountArgs} args - Arguments to filter Estantes to count.
     * @example
     * // Count the number of Estantes
     * const count = await prisma.estante.count({
     *   where: {
     *     // ... the filter for the Estantes we want to count
     *   }
     * })
    **/
    count<T extends EstanteCountArgs>(
      args?: Subset<T, EstanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstanteAggregateArgs>(args: Subset<T, EstanteAggregateArgs>): Prisma.PrismaPromise<GetEstanteAggregateType<T>>

    /**
     * Group by Estante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstanteGroupByArgs['orderBy'] }
        : { orderBy?: EstanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estante model
   */
  readonly fields: EstanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Estante$itensArgs<ExtArgs> = {}>(args?: Subset<T, Estante$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estante model
   */
  interface EstanteFieldRefs {
    readonly id: FieldRef<"Estante", 'Int'>
    readonly nome: FieldRef<"Estante", 'String'>
    readonly privada: FieldRef<"Estante", 'Boolean'>
    readonly usuarioId: FieldRef<"Estante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Estante findUnique
   */
  export type EstanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    /**
     * Filter, which Estante to fetch.
     */
    where: EstanteWhereUniqueInput
  }

  /**
   * Estante findUniqueOrThrow
   */
  export type EstanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    /**
     * Filter, which Estante to fetch.
     */
    where: EstanteWhereUniqueInput
  }

  /**
   * Estante findFirst
   */
  export type EstanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    /**
     * Filter, which Estante to fetch.
     */
    where?: EstanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estantes to fetch.
     */
    orderBy?: EstanteOrderByWithRelationInput | EstanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estantes.
     */
    cursor?: EstanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estantes.
     */
    distinct?: EstanteScalarFieldEnum | EstanteScalarFieldEnum[]
  }

  /**
   * Estante findFirstOrThrow
   */
  export type EstanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    /**
     * Filter, which Estante to fetch.
     */
    where?: EstanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estantes to fetch.
     */
    orderBy?: EstanteOrderByWithRelationInput | EstanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estantes.
     */
    cursor?: EstanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estantes.
     */
    distinct?: EstanteScalarFieldEnum | EstanteScalarFieldEnum[]
  }

  /**
   * Estante findMany
   */
  export type EstanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    /**
     * Filter, which Estantes to fetch.
     */
    where?: EstanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estantes to fetch.
     */
    orderBy?: EstanteOrderByWithRelationInput | EstanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estantes.
     */
    cursor?: EstanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estantes.
     */
    distinct?: EstanteScalarFieldEnum | EstanteScalarFieldEnum[]
  }

  /**
   * Estante create
   */
  export type EstanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Estante.
     */
    data: XOR<EstanteCreateInput, EstanteUncheckedCreateInput>
  }

  /**
   * Estante createMany
   */
  export type EstanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estantes.
     */
    data: EstanteCreateManyInput | EstanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estante createManyAndReturn
   */
  export type EstanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * The data used to create many Estantes.
     */
    data: EstanteCreateManyInput | EstanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estante update
   */
  export type EstanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Estante.
     */
    data: XOR<EstanteUpdateInput, EstanteUncheckedUpdateInput>
    /**
     * Choose, which Estante to update.
     */
    where: EstanteWhereUniqueInput
  }

  /**
   * Estante updateMany
   */
  export type EstanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estantes.
     */
    data: XOR<EstanteUpdateManyMutationInput, EstanteUncheckedUpdateManyInput>
    /**
     * Filter which Estantes to update
     */
    where?: EstanteWhereInput
    /**
     * Limit how many Estantes to update.
     */
    limit?: number
  }

  /**
   * Estante updateManyAndReturn
   */
  export type EstanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * The data used to update Estantes.
     */
    data: XOR<EstanteUpdateManyMutationInput, EstanteUncheckedUpdateManyInput>
    /**
     * Filter which Estantes to update
     */
    where?: EstanteWhereInput
    /**
     * Limit how many Estantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estante upsert
   */
  export type EstanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Estante to update in case it exists.
     */
    where: EstanteWhereUniqueInput
    /**
     * In case the Estante found by the `where` argument doesn't exist, create a new Estante with this data.
     */
    create: XOR<EstanteCreateInput, EstanteUncheckedCreateInput>
    /**
     * In case the Estante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstanteUpdateInput, EstanteUncheckedUpdateInput>
  }

  /**
   * Estante delete
   */
  export type EstanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
    /**
     * Filter which Estante to delete.
     */
    where: EstanteWhereUniqueInput
  }

  /**
   * Estante deleteMany
   */
  export type EstanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estantes to delete
     */
    where?: EstanteWhereInput
    /**
     * Limit how many Estantes to delete.
     */
    limit?: number
  }

  /**
   * Estante.itens
   */
  export type Estante$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    where?: ItemEstanteWhereInput
    orderBy?: ItemEstanteOrderByWithRelationInput | ItemEstanteOrderByWithRelationInput[]
    cursor?: ItemEstanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemEstanteScalarFieldEnum | ItemEstanteScalarFieldEnum[]
  }

  /**
   * Estante without action
   */
  export type EstanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estante
     */
    select?: EstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estante
     */
    omit?: EstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstanteInclude<ExtArgs> | null
  }


  /**
   * Model ItemEstante
   */

  export type AggregateItemEstante = {
    _count: ItemEstanteCountAggregateOutputType | null
    _avg: ItemEstanteAvgAggregateOutputType | null
    _sum: ItemEstanteSumAggregateOutputType | null
    _min: ItemEstanteMinAggregateOutputType | null
    _max: ItemEstanteMaxAggregateOutputType | null
  }

  export type ItemEstanteAvgAggregateOutputType = {
    id: number | null
    capitulo: number | null
    nota: number | null
    estanteId: number | null
    fanficId: number | null
  }

  export type ItemEstanteSumAggregateOutputType = {
    id: number | null
    capitulo: number | null
    nota: number | null
    estanteId: number | null
    fanficId: number | null
  }

  export type ItemEstanteMinAggregateOutputType = {
    id: number | null
    status: string | null
    capitulo: number | null
    nota: number | null
    resenha: string | null
    temSpoiler: boolean | null
    dataLeitura: Date | null
    atualizadoEm: Date | null
    estanteId: number | null
    fanficId: number | null
  }

  export type ItemEstanteMaxAggregateOutputType = {
    id: number | null
    status: string | null
    capitulo: number | null
    nota: number | null
    resenha: string | null
    temSpoiler: boolean | null
    dataLeitura: Date | null
    atualizadoEm: Date | null
    estanteId: number | null
    fanficId: number | null
  }

  export type ItemEstanteCountAggregateOutputType = {
    id: number
    status: number
    capitulo: number
    nota: number
    resenha: number
    temSpoiler: number
    dataLeitura: number
    atualizadoEm: number
    estanteId: number
    fanficId: number
    _all: number
  }


  export type ItemEstanteAvgAggregateInputType = {
    id?: true
    capitulo?: true
    nota?: true
    estanteId?: true
    fanficId?: true
  }

  export type ItemEstanteSumAggregateInputType = {
    id?: true
    capitulo?: true
    nota?: true
    estanteId?: true
    fanficId?: true
  }

  export type ItemEstanteMinAggregateInputType = {
    id?: true
    status?: true
    capitulo?: true
    nota?: true
    resenha?: true
    temSpoiler?: true
    dataLeitura?: true
    atualizadoEm?: true
    estanteId?: true
    fanficId?: true
  }

  export type ItemEstanteMaxAggregateInputType = {
    id?: true
    status?: true
    capitulo?: true
    nota?: true
    resenha?: true
    temSpoiler?: true
    dataLeitura?: true
    atualizadoEm?: true
    estanteId?: true
    fanficId?: true
  }

  export type ItemEstanteCountAggregateInputType = {
    id?: true
    status?: true
    capitulo?: true
    nota?: true
    resenha?: true
    temSpoiler?: true
    dataLeitura?: true
    atualizadoEm?: true
    estanteId?: true
    fanficId?: true
    _all?: true
  }

  export type ItemEstanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemEstante to aggregate.
     */
    where?: ItemEstanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemEstantes to fetch.
     */
    orderBy?: ItemEstanteOrderByWithRelationInput | ItemEstanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemEstanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemEstantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemEstantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemEstantes
    **/
    _count?: true | ItemEstanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemEstanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemEstanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemEstanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemEstanteMaxAggregateInputType
  }

  export type GetItemEstanteAggregateType<T extends ItemEstanteAggregateArgs> = {
        [P in keyof T & keyof AggregateItemEstante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemEstante[P]>
      : GetScalarType<T[P], AggregateItemEstante[P]>
  }




  export type ItemEstanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemEstanteWhereInput
    orderBy?: ItemEstanteOrderByWithAggregationInput | ItemEstanteOrderByWithAggregationInput[]
    by: ItemEstanteScalarFieldEnum[] | ItemEstanteScalarFieldEnum
    having?: ItemEstanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemEstanteCountAggregateInputType | true
    _avg?: ItemEstanteAvgAggregateInputType
    _sum?: ItemEstanteSumAggregateInputType
    _min?: ItemEstanteMinAggregateInputType
    _max?: ItemEstanteMaxAggregateInputType
  }

  export type ItemEstanteGroupByOutputType = {
    id: number
    status: string
    capitulo: number
    nota: number | null
    resenha: string | null
    temSpoiler: boolean
    dataLeitura: Date
    atualizadoEm: Date
    estanteId: number
    fanficId: number
    _count: ItemEstanteCountAggregateOutputType | null
    _avg: ItemEstanteAvgAggregateOutputType | null
    _sum: ItemEstanteSumAggregateOutputType | null
    _min: ItemEstanteMinAggregateOutputType | null
    _max: ItemEstanteMaxAggregateOutputType | null
  }

  type GetItemEstanteGroupByPayload<T extends ItemEstanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemEstanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemEstanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemEstanteGroupByOutputType[P]>
            : GetScalarType<T[P], ItemEstanteGroupByOutputType[P]>
        }
      >
    >


  export type ItemEstanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    capitulo?: boolean
    nota?: boolean
    resenha?: boolean
    temSpoiler?: boolean
    dataLeitura?: boolean
    atualizadoEm?: boolean
    estanteId?: boolean
    fanficId?: boolean
    estante?: boolean | EstanteDefaultArgs<ExtArgs>
    fanfic?: boolean | FanficDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemEstante"]>

  export type ItemEstanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    capitulo?: boolean
    nota?: boolean
    resenha?: boolean
    temSpoiler?: boolean
    dataLeitura?: boolean
    atualizadoEm?: boolean
    estanteId?: boolean
    fanficId?: boolean
    estante?: boolean | EstanteDefaultArgs<ExtArgs>
    fanfic?: boolean | FanficDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemEstante"]>

  export type ItemEstanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    capitulo?: boolean
    nota?: boolean
    resenha?: boolean
    temSpoiler?: boolean
    dataLeitura?: boolean
    atualizadoEm?: boolean
    estanteId?: boolean
    fanficId?: boolean
    estante?: boolean | EstanteDefaultArgs<ExtArgs>
    fanfic?: boolean | FanficDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemEstante"]>

  export type ItemEstanteSelectScalar = {
    id?: boolean
    status?: boolean
    capitulo?: boolean
    nota?: boolean
    resenha?: boolean
    temSpoiler?: boolean
    dataLeitura?: boolean
    atualizadoEm?: boolean
    estanteId?: boolean
    fanficId?: boolean
  }

  export type ItemEstanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "capitulo" | "nota" | "resenha" | "temSpoiler" | "dataLeitura" | "atualizadoEm" | "estanteId" | "fanficId", ExtArgs["result"]["itemEstante"]>
  export type ItemEstanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estante?: boolean | EstanteDefaultArgs<ExtArgs>
    fanfic?: boolean | FanficDefaultArgs<ExtArgs>
  }
  export type ItemEstanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estante?: boolean | EstanteDefaultArgs<ExtArgs>
    fanfic?: boolean | FanficDefaultArgs<ExtArgs>
  }
  export type ItemEstanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estante?: boolean | EstanteDefaultArgs<ExtArgs>
    fanfic?: boolean | FanficDefaultArgs<ExtArgs>
  }

  export type $ItemEstantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemEstante"
    objects: {
      estante: Prisma.$EstantePayload<ExtArgs>
      fanfic: Prisma.$FanficPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      capitulo: number
      nota: number | null
      resenha: string | null
      temSpoiler: boolean
      dataLeitura: Date
      atualizadoEm: Date
      estanteId: number
      fanficId: number
    }, ExtArgs["result"]["itemEstante"]>
    composites: {}
  }

  type ItemEstanteGetPayload<S extends boolean | null | undefined | ItemEstanteDefaultArgs> = $Result.GetResult<Prisma.$ItemEstantePayload, S>

  type ItemEstanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemEstanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemEstanteCountAggregateInputType | true
    }

  export interface ItemEstanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemEstante'], meta: { name: 'ItemEstante' } }
    /**
     * Find zero or one ItemEstante that matches the filter.
     * @param {ItemEstanteFindUniqueArgs} args - Arguments to find a ItemEstante
     * @example
     * // Get one ItemEstante
     * const itemEstante = await prisma.itemEstante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemEstanteFindUniqueArgs>(args: SelectSubset<T, ItemEstanteFindUniqueArgs<ExtArgs>>): Prisma__ItemEstanteClient<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemEstante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemEstanteFindUniqueOrThrowArgs} args - Arguments to find a ItemEstante
     * @example
     * // Get one ItemEstante
     * const itemEstante = await prisma.itemEstante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemEstanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemEstanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemEstanteClient<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemEstante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEstanteFindFirstArgs} args - Arguments to find a ItemEstante
     * @example
     * // Get one ItemEstante
     * const itemEstante = await prisma.itemEstante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemEstanteFindFirstArgs>(args?: SelectSubset<T, ItemEstanteFindFirstArgs<ExtArgs>>): Prisma__ItemEstanteClient<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemEstante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEstanteFindFirstOrThrowArgs} args - Arguments to find a ItemEstante
     * @example
     * // Get one ItemEstante
     * const itemEstante = await prisma.itemEstante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemEstanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemEstanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemEstanteClient<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemEstantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEstanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemEstantes
     * const itemEstantes = await prisma.itemEstante.findMany()
     * 
     * // Get first 10 ItemEstantes
     * const itemEstantes = await prisma.itemEstante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemEstanteWithIdOnly = await prisma.itemEstante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemEstanteFindManyArgs>(args?: SelectSubset<T, ItemEstanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemEstante.
     * @param {ItemEstanteCreateArgs} args - Arguments to create a ItemEstante.
     * @example
     * // Create one ItemEstante
     * const ItemEstante = await prisma.itemEstante.create({
     *   data: {
     *     // ... data to create a ItemEstante
     *   }
     * })
     * 
     */
    create<T extends ItemEstanteCreateArgs>(args: SelectSubset<T, ItemEstanteCreateArgs<ExtArgs>>): Prisma__ItemEstanteClient<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemEstantes.
     * @param {ItemEstanteCreateManyArgs} args - Arguments to create many ItemEstantes.
     * @example
     * // Create many ItemEstantes
     * const itemEstante = await prisma.itemEstante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemEstanteCreateManyArgs>(args?: SelectSubset<T, ItemEstanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemEstantes and returns the data saved in the database.
     * @param {ItemEstanteCreateManyAndReturnArgs} args - Arguments to create many ItemEstantes.
     * @example
     * // Create many ItemEstantes
     * const itemEstante = await prisma.itemEstante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemEstantes and only return the `id`
     * const itemEstanteWithIdOnly = await prisma.itemEstante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemEstanteCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemEstanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemEstante.
     * @param {ItemEstanteDeleteArgs} args - Arguments to delete one ItemEstante.
     * @example
     * // Delete one ItemEstante
     * const ItemEstante = await prisma.itemEstante.delete({
     *   where: {
     *     // ... filter to delete one ItemEstante
     *   }
     * })
     * 
     */
    delete<T extends ItemEstanteDeleteArgs>(args: SelectSubset<T, ItemEstanteDeleteArgs<ExtArgs>>): Prisma__ItemEstanteClient<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemEstante.
     * @param {ItemEstanteUpdateArgs} args - Arguments to update one ItemEstante.
     * @example
     * // Update one ItemEstante
     * const itemEstante = await prisma.itemEstante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemEstanteUpdateArgs>(args: SelectSubset<T, ItemEstanteUpdateArgs<ExtArgs>>): Prisma__ItemEstanteClient<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemEstantes.
     * @param {ItemEstanteDeleteManyArgs} args - Arguments to filter ItemEstantes to delete.
     * @example
     * // Delete a few ItemEstantes
     * const { count } = await prisma.itemEstante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemEstanteDeleteManyArgs>(args?: SelectSubset<T, ItemEstanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemEstantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEstanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemEstantes
     * const itemEstante = await prisma.itemEstante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemEstanteUpdateManyArgs>(args: SelectSubset<T, ItemEstanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemEstantes and returns the data updated in the database.
     * @param {ItemEstanteUpdateManyAndReturnArgs} args - Arguments to update many ItemEstantes.
     * @example
     * // Update many ItemEstantes
     * const itemEstante = await prisma.itemEstante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemEstantes and only return the `id`
     * const itemEstanteWithIdOnly = await prisma.itemEstante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemEstanteUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemEstanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemEstante.
     * @param {ItemEstanteUpsertArgs} args - Arguments to update or create a ItemEstante.
     * @example
     * // Update or create a ItemEstante
     * const itemEstante = await prisma.itemEstante.upsert({
     *   create: {
     *     // ... data to create a ItemEstante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemEstante we want to update
     *   }
     * })
     */
    upsert<T extends ItemEstanteUpsertArgs>(args: SelectSubset<T, ItemEstanteUpsertArgs<ExtArgs>>): Prisma__ItemEstanteClient<$Result.GetResult<Prisma.$ItemEstantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemEstantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEstanteCountArgs} args - Arguments to filter ItemEstantes to count.
     * @example
     * // Count the number of ItemEstantes
     * const count = await prisma.itemEstante.count({
     *   where: {
     *     // ... the filter for the ItemEstantes we want to count
     *   }
     * })
    **/
    count<T extends ItemEstanteCountArgs>(
      args?: Subset<T, ItemEstanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemEstanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemEstante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEstanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemEstanteAggregateArgs>(args: Subset<T, ItemEstanteAggregateArgs>): Prisma.PrismaPromise<GetItemEstanteAggregateType<T>>

    /**
     * Group by ItemEstante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemEstanteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemEstanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemEstanteGroupByArgs['orderBy'] }
        : { orderBy?: ItemEstanteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemEstanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemEstanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemEstante model
   */
  readonly fields: ItemEstanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemEstante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemEstanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estante<T extends EstanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstanteDefaultArgs<ExtArgs>>): Prisma__EstanteClient<$Result.GetResult<Prisma.$EstantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fanfic<T extends FanficDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FanficDefaultArgs<ExtArgs>>): Prisma__FanficClient<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemEstante model
   */
  interface ItemEstanteFieldRefs {
    readonly id: FieldRef<"ItemEstante", 'Int'>
    readonly status: FieldRef<"ItemEstante", 'String'>
    readonly capitulo: FieldRef<"ItemEstante", 'Int'>
    readonly nota: FieldRef<"ItemEstante", 'Int'>
    readonly resenha: FieldRef<"ItemEstante", 'String'>
    readonly temSpoiler: FieldRef<"ItemEstante", 'Boolean'>
    readonly dataLeitura: FieldRef<"ItemEstante", 'DateTime'>
    readonly atualizadoEm: FieldRef<"ItemEstante", 'DateTime'>
    readonly estanteId: FieldRef<"ItemEstante", 'Int'>
    readonly fanficId: FieldRef<"ItemEstante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemEstante findUnique
   */
  export type ItemEstanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    /**
     * Filter, which ItemEstante to fetch.
     */
    where: ItemEstanteWhereUniqueInput
  }

  /**
   * ItemEstante findUniqueOrThrow
   */
  export type ItemEstanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    /**
     * Filter, which ItemEstante to fetch.
     */
    where: ItemEstanteWhereUniqueInput
  }

  /**
   * ItemEstante findFirst
   */
  export type ItemEstanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    /**
     * Filter, which ItemEstante to fetch.
     */
    where?: ItemEstanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemEstantes to fetch.
     */
    orderBy?: ItemEstanteOrderByWithRelationInput | ItemEstanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemEstantes.
     */
    cursor?: ItemEstanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemEstantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemEstantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemEstantes.
     */
    distinct?: ItemEstanteScalarFieldEnum | ItemEstanteScalarFieldEnum[]
  }

  /**
   * ItemEstante findFirstOrThrow
   */
  export type ItemEstanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    /**
     * Filter, which ItemEstante to fetch.
     */
    where?: ItemEstanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemEstantes to fetch.
     */
    orderBy?: ItemEstanteOrderByWithRelationInput | ItemEstanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemEstantes.
     */
    cursor?: ItemEstanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemEstantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemEstantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemEstantes.
     */
    distinct?: ItemEstanteScalarFieldEnum | ItemEstanteScalarFieldEnum[]
  }

  /**
   * ItemEstante findMany
   */
  export type ItemEstanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    /**
     * Filter, which ItemEstantes to fetch.
     */
    where?: ItemEstanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemEstantes to fetch.
     */
    orderBy?: ItemEstanteOrderByWithRelationInput | ItemEstanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemEstantes.
     */
    cursor?: ItemEstanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemEstantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemEstantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemEstantes.
     */
    distinct?: ItemEstanteScalarFieldEnum | ItemEstanteScalarFieldEnum[]
  }

  /**
   * ItemEstante create
   */
  export type ItemEstanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemEstante.
     */
    data: XOR<ItemEstanteCreateInput, ItemEstanteUncheckedCreateInput>
  }

  /**
   * ItemEstante createMany
   */
  export type ItemEstanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemEstantes.
     */
    data: ItemEstanteCreateManyInput | ItemEstanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemEstante createManyAndReturn
   */
  export type ItemEstanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * The data used to create many ItemEstantes.
     */
    data: ItemEstanteCreateManyInput | ItemEstanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemEstante update
   */
  export type ItemEstanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemEstante.
     */
    data: XOR<ItemEstanteUpdateInput, ItemEstanteUncheckedUpdateInput>
    /**
     * Choose, which ItemEstante to update.
     */
    where: ItemEstanteWhereUniqueInput
  }

  /**
   * ItemEstante updateMany
   */
  export type ItemEstanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemEstantes.
     */
    data: XOR<ItemEstanteUpdateManyMutationInput, ItemEstanteUncheckedUpdateManyInput>
    /**
     * Filter which ItemEstantes to update
     */
    where?: ItemEstanteWhereInput
    /**
     * Limit how many ItemEstantes to update.
     */
    limit?: number
  }

  /**
   * ItemEstante updateManyAndReturn
   */
  export type ItemEstanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * The data used to update ItemEstantes.
     */
    data: XOR<ItemEstanteUpdateManyMutationInput, ItemEstanteUncheckedUpdateManyInput>
    /**
     * Filter which ItemEstantes to update
     */
    where?: ItemEstanteWhereInput
    /**
     * Limit how many ItemEstantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemEstante upsert
   */
  export type ItemEstanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemEstante to update in case it exists.
     */
    where: ItemEstanteWhereUniqueInput
    /**
     * In case the ItemEstante found by the `where` argument doesn't exist, create a new ItemEstante with this data.
     */
    create: XOR<ItemEstanteCreateInput, ItemEstanteUncheckedCreateInput>
    /**
     * In case the ItemEstante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemEstanteUpdateInput, ItemEstanteUncheckedUpdateInput>
  }

  /**
   * ItemEstante delete
   */
  export type ItemEstanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
    /**
     * Filter which ItemEstante to delete.
     */
    where: ItemEstanteWhereUniqueInput
  }

  /**
   * ItemEstante deleteMany
   */
  export type ItemEstanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemEstantes to delete
     */
    where?: ItemEstanteWhereInput
    /**
     * Limit how many ItemEstantes to delete.
     */
    limit?: number
  }

  /**
   * ItemEstante without action
   */
  export type ItemEstanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemEstante
     */
    select?: ItemEstanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemEstante
     */
    omit?: ItemEstanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemEstanteInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    nome: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fics?: boolean | Tag$ficsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fics?: boolean | Tag$ficsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      fics: Prisma.$FanficPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fics<T extends Tag$ficsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$ficsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly nome: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.fics
   */
  export type Tag$ficsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    where?: FanficWhereInput
    orderBy?: FanficOrderByWithRelationInput | FanficOrderByWithRelationInput[]
    cursor?: FanficWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FanficScalarFieldEnum | FanficScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Fandom
   */

  export type AggregateFandom = {
    _count: FandomCountAggregateOutputType | null
    _avg: FandomAvgAggregateOutputType | null
    _sum: FandomSumAggregateOutputType | null
    _min: FandomMinAggregateOutputType | null
    _max: FandomMaxAggregateOutputType | null
  }

  export type FandomAvgAggregateOutputType = {
    id: number | null
  }

  export type FandomSumAggregateOutputType = {
    id: number | null
  }

  export type FandomMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type FandomMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type FandomCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type FandomAvgAggregateInputType = {
    id?: true
  }

  export type FandomSumAggregateInputType = {
    id?: true
  }

  export type FandomMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type FandomMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type FandomCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type FandomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fandom to aggregate.
     */
    where?: FandomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fandoms to fetch.
     */
    orderBy?: FandomOrderByWithRelationInput | FandomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FandomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fandoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fandoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fandoms
    **/
    _count?: true | FandomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FandomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FandomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FandomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FandomMaxAggregateInputType
  }

  export type GetFandomAggregateType<T extends FandomAggregateArgs> = {
        [P in keyof T & keyof AggregateFandom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFandom[P]>
      : GetScalarType<T[P], AggregateFandom[P]>
  }




  export type FandomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FandomWhereInput
    orderBy?: FandomOrderByWithAggregationInput | FandomOrderByWithAggregationInput[]
    by: FandomScalarFieldEnum[] | FandomScalarFieldEnum
    having?: FandomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FandomCountAggregateInputType | true
    _avg?: FandomAvgAggregateInputType
    _sum?: FandomSumAggregateInputType
    _min?: FandomMinAggregateInputType
    _max?: FandomMaxAggregateInputType
  }

  export type FandomGroupByOutputType = {
    id: number
    nome: string
    _count: FandomCountAggregateOutputType | null
    _avg: FandomAvgAggregateOutputType | null
    _sum: FandomSumAggregateOutputType | null
    _min: FandomMinAggregateOutputType | null
    _max: FandomMaxAggregateOutputType | null
  }

  type GetFandomGroupByPayload<T extends FandomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FandomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FandomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FandomGroupByOutputType[P]>
            : GetScalarType<T[P], FandomGroupByOutputType[P]>
        }
      >
    >


  export type FandomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fics?: boolean | Fandom$ficsArgs<ExtArgs>
    _count?: boolean | FandomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fandom"]>

  export type FandomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["fandom"]>

  export type FandomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["fandom"]>

  export type FandomSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type FandomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["fandom"]>
  export type FandomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fics?: boolean | Fandom$ficsArgs<ExtArgs>
    _count?: boolean | FandomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FandomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FandomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FandomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fandom"
    objects: {
      fics: Prisma.$FanficPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["fandom"]>
    composites: {}
  }

  type FandomGetPayload<S extends boolean | null | undefined | FandomDefaultArgs> = $Result.GetResult<Prisma.$FandomPayload, S>

  type FandomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FandomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FandomCountAggregateInputType | true
    }

  export interface FandomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fandom'], meta: { name: 'Fandom' } }
    /**
     * Find zero or one Fandom that matches the filter.
     * @param {FandomFindUniqueArgs} args - Arguments to find a Fandom
     * @example
     * // Get one Fandom
     * const fandom = await prisma.fandom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FandomFindUniqueArgs>(args: SelectSubset<T, FandomFindUniqueArgs<ExtArgs>>): Prisma__FandomClient<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fandom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FandomFindUniqueOrThrowArgs} args - Arguments to find a Fandom
     * @example
     * // Get one Fandom
     * const fandom = await prisma.fandom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FandomFindUniqueOrThrowArgs>(args: SelectSubset<T, FandomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FandomClient<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fandom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FandomFindFirstArgs} args - Arguments to find a Fandom
     * @example
     * // Get one Fandom
     * const fandom = await prisma.fandom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FandomFindFirstArgs>(args?: SelectSubset<T, FandomFindFirstArgs<ExtArgs>>): Prisma__FandomClient<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fandom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FandomFindFirstOrThrowArgs} args - Arguments to find a Fandom
     * @example
     * // Get one Fandom
     * const fandom = await prisma.fandom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FandomFindFirstOrThrowArgs>(args?: SelectSubset<T, FandomFindFirstOrThrowArgs<ExtArgs>>): Prisma__FandomClient<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fandoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FandomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fandoms
     * const fandoms = await prisma.fandom.findMany()
     * 
     * // Get first 10 Fandoms
     * const fandoms = await prisma.fandom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fandomWithIdOnly = await prisma.fandom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FandomFindManyArgs>(args?: SelectSubset<T, FandomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fandom.
     * @param {FandomCreateArgs} args - Arguments to create a Fandom.
     * @example
     * // Create one Fandom
     * const Fandom = await prisma.fandom.create({
     *   data: {
     *     // ... data to create a Fandom
     *   }
     * })
     * 
     */
    create<T extends FandomCreateArgs>(args: SelectSubset<T, FandomCreateArgs<ExtArgs>>): Prisma__FandomClient<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fandoms.
     * @param {FandomCreateManyArgs} args - Arguments to create many Fandoms.
     * @example
     * // Create many Fandoms
     * const fandom = await prisma.fandom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FandomCreateManyArgs>(args?: SelectSubset<T, FandomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fandoms and returns the data saved in the database.
     * @param {FandomCreateManyAndReturnArgs} args - Arguments to create many Fandoms.
     * @example
     * // Create many Fandoms
     * const fandom = await prisma.fandom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fandoms and only return the `id`
     * const fandomWithIdOnly = await prisma.fandom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FandomCreateManyAndReturnArgs>(args?: SelectSubset<T, FandomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fandom.
     * @param {FandomDeleteArgs} args - Arguments to delete one Fandom.
     * @example
     * // Delete one Fandom
     * const Fandom = await prisma.fandom.delete({
     *   where: {
     *     // ... filter to delete one Fandom
     *   }
     * })
     * 
     */
    delete<T extends FandomDeleteArgs>(args: SelectSubset<T, FandomDeleteArgs<ExtArgs>>): Prisma__FandomClient<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fandom.
     * @param {FandomUpdateArgs} args - Arguments to update one Fandom.
     * @example
     * // Update one Fandom
     * const fandom = await prisma.fandom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FandomUpdateArgs>(args: SelectSubset<T, FandomUpdateArgs<ExtArgs>>): Prisma__FandomClient<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fandoms.
     * @param {FandomDeleteManyArgs} args - Arguments to filter Fandoms to delete.
     * @example
     * // Delete a few Fandoms
     * const { count } = await prisma.fandom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FandomDeleteManyArgs>(args?: SelectSubset<T, FandomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fandoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FandomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fandoms
     * const fandom = await prisma.fandom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FandomUpdateManyArgs>(args: SelectSubset<T, FandomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fandoms and returns the data updated in the database.
     * @param {FandomUpdateManyAndReturnArgs} args - Arguments to update many Fandoms.
     * @example
     * // Update many Fandoms
     * const fandom = await prisma.fandom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fandoms and only return the `id`
     * const fandomWithIdOnly = await prisma.fandom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FandomUpdateManyAndReturnArgs>(args: SelectSubset<T, FandomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fandom.
     * @param {FandomUpsertArgs} args - Arguments to update or create a Fandom.
     * @example
     * // Update or create a Fandom
     * const fandom = await prisma.fandom.upsert({
     *   create: {
     *     // ... data to create a Fandom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fandom we want to update
     *   }
     * })
     */
    upsert<T extends FandomUpsertArgs>(args: SelectSubset<T, FandomUpsertArgs<ExtArgs>>): Prisma__FandomClient<$Result.GetResult<Prisma.$FandomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fandoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FandomCountArgs} args - Arguments to filter Fandoms to count.
     * @example
     * // Count the number of Fandoms
     * const count = await prisma.fandom.count({
     *   where: {
     *     // ... the filter for the Fandoms we want to count
     *   }
     * })
    **/
    count<T extends FandomCountArgs>(
      args?: Subset<T, FandomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FandomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fandom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FandomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FandomAggregateArgs>(args: Subset<T, FandomAggregateArgs>): Prisma.PrismaPromise<GetFandomAggregateType<T>>

    /**
     * Group by Fandom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FandomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FandomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FandomGroupByArgs['orderBy'] }
        : { orderBy?: FandomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FandomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFandomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fandom model
   */
  readonly fields: FandomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fandom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FandomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fics<T extends Fandom$ficsArgs<ExtArgs> = {}>(args?: Subset<T, Fandom$ficsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FanficPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fandom model
   */
  interface FandomFieldRefs {
    readonly id: FieldRef<"Fandom", 'Int'>
    readonly nome: FieldRef<"Fandom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fandom findUnique
   */
  export type FandomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    /**
     * Filter, which Fandom to fetch.
     */
    where: FandomWhereUniqueInput
  }

  /**
   * Fandom findUniqueOrThrow
   */
  export type FandomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    /**
     * Filter, which Fandom to fetch.
     */
    where: FandomWhereUniqueInput
  }

  /**
   * Fandom findFirst
   */
  export type FandomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    /**
     * Filter, which Fandom to fetch.
     */
    where?: FandomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fandoms to fetch.
     */
    orderBy?: FandomOrderByWithRelationInput | FandomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fandoms.
     */
    cursor?: FandomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fandoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fandoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fandoms.
     */
    distinct?: FandomScalarFieldEnum | FandomScalarFieldEnum[]
  }

  /**
   * Fandom findFirstOrThrow
   */
  export type FandomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    /**
     * Filter, which Fandom to fetch.
     */
    where?: FandomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fandoms to fetch.
     */
    orderBy?: FandomOrderByWithRelationInput | FandomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fandoms.
     */
    cursor?: FandomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fandoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fandoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fandoms.
     */
    distinct?: FandomScalarFieldEnum | FandomScalarFieldEnum[]
  }

  /**
   * Fandom findMany
   */
  export type FandomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    /**
     * Filter, which Fandoms to fetch.
     */
    where?: FandomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fandoms to fetch.
     */
    orderBy?: FandomOrderByWithRelationInput | FandomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fandoms.
     */
    cursor?: FandomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fandoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fandoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fandoms.
     */
    distinct?: FandomScalarFieldEnum | FandomScalarFieldEnum[]
  }

  /**
   * Fandom create
   */
  export type FandomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    /**
     * The data needed to create a Fandom.
     */
    data: XOR<FandomCreateInput, FandomUncheckedCreateInput>
  }

  /**
   * Fandom createMany
   */
  export type FandomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fandoms.
     */
    data: FandomCreateManyInput | FandomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fandom createManyAndReturn
   */
  export type FandomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * The data used to create many Fandoms.
     */
    data: FandomCreateManyInput | FandomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fandom update
   */
  export type FandomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    /**
     * The data needed to update a Fandom.
     */
    data: XOR<FandomUpdateInput, FandomUncheckedUpdateInput>
    /**
     * Choose, which Fandom to update.
     */
    where: FandomWhereUniqueInput
  }

  /**
   * Fandom updateMany
   */
  export type FandomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fandoms.
     */
    data: XOR<FandomUpdateManyMutationInput, FandomUncheckedUpdateManyInput>
    /**
     * Filter which Fandoms to update
     */
    where?: FandomWhereInput
    /**
     * Limit how many Fandoms to update.
     */
    limit?: number
  }

  /**
   * Fandom updateManyAndReturn
   */
  export type FandomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * The data used to update Fandoms.
     */
    data: XOR<FandomUpdateManyMutationInput, FandomUncheckedUpdateManyInput>
    /**
     * Filter which Fandoms to update
     */
    where?: FandomWhereInput
    /**
     * Limit how many Fandoms to update.
     */
    limit?: number
  }

  /**
   * Fandom upsert
   */
  export type FandomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    /**
     * The filter to search for the Fandom to update in case it exists.
     */
    where: FandomWhereUniqueInput
    /**
     * In case the Fandom found by the `where` argument doesn't exist, create a new Fandom with this data.
     */
    create: XOR<FandomCreateInput, FandomUncheckedCreateInput>
    /**
     * In case the Fandom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FandomUpdateInput, FandomUncheckedUpdateInput>
  }

  /**
   * Fandom delete
   */
  export type FandomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
    /**
     * Filter which Fandom to delete.
     */
    where: FandomWhereUniqueInput
  }

  /**
   * Fandom deleteMany
   */
  export type FandomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fandoms to delete
     */
    where?: FandomWhereInput
    /**
     * Limit how many Fandoms to delete.
     */
    limit?: number
  }

  /**
   * Fandom.fics
   */
  export type Fandom$ficsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fanfic
     */
    select?: FanficSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fanfic
     */
    omit?: FanficOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FanficInclude<ExtArgs> | null
    where?: FanficWhereInput
    orderBy?: FanficOrderByWithRelationInput | FanficOrderByWithRelationInput[]
    cursor?: FanficWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FanficScalarFieldEnum | FanficScalarFieldEnum[]
  }

  /**
   * Fandom without action
   */
  export type FandomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fandom
     */
    select?: FandomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fandom
     */
    omit?: FandomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FandomInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    nomeExibicao: 'nomeExibicao',
    senha: 'senha',
    bio: 'bio',
    avatar: 'avatar',
    banner: 'banner',
    perfil_privado: 'perfil_privado',
    criadoEm: 'criadoEm',
    termos_aceitos: 'termos_aceitos',
    data_aceite_termos: 'data_aceite_termos'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SeguidorScalarFieldEnum: {
    id: 'id',
    seguidorId: 'seguidorId',
    seguindoId: 'seguindoId'
  };

  export type SeguidorScalarFieldEnum = (typeof SeguidorScalarFieldEnum)[keyof typeof SeguidorScalarFieldEnum]


  export const FanficScalarFieldEnum: {
    id: 'id',
    url: 'url',
    titulo: 'titulo',
    autor: 'autor',
    plataforma: 'plataforma',
    capa: 'capa',
    mediaNota: 'mediaNota'
  };

  export type FanficScalarFieldEnum = (typeof FanficScalarFieldEnum)[keyof typeof FanficScalarFieldEnum]


  export const EstanteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    privada: 'privada',
    usuarioId: 'usuarioId'
  };

  export type EstanteScalarFieldEnum = (typeof EstanteScalarFieldEnum)[keyof typeof EstanteScalarFieldEnum]


  export const ItemEstanteScalarFieldEnum: {
    id: 'id',
    status: 'status',
    capitulo: 'capitulo',
    nota: 'nota',
    resenha: 'resenha',
    temSpoiler: 'temSpoiler',
    dataLeitura: 'dataLeitura',
    atualizadoEm: 'atualizadoEm',
    estanteId: 'estanteId',
    fanficId: 'fanficId'
  };

  export type ItemEstanteScalarFieldEnum = (typeof ItemEstanteScalarFieldEnum)[keyof typeof ItemEstanteScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const FandomScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type FandomScalarFieldEnum = (typeof FandomScalarFieldEnum)[keyof typeof FandomScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    nomeExibicao?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    bio?: StringNullableFilter<"Usuario"> | string | null
    avatar?: StringNullableFilter<"Usuario"> | string | null
    banner?: StringNullableFilter<"Usuario"> | string | null
    perfil_privado?: BoolNullableFilter<"Usuario"> | boolean | null
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    termos_aceitos?: BoolFilter<"Usuario"> | boolean
    data_aceite_termos?: DateTimeFilter<"Usuario"> | Date | string
    estantes?: EstanteListRelationFilter
    seguindo?: SeguidorListRelationFilter
    seguidores?: SeguidorListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    nomeExibicao?: SortOrder
    senha?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    perfil_privado?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    termos_aceitos?: SortOrder
    data_aceite_termos?: SortOrder
    estantes?: EstanteOrderByRelationAggregateInput
    seguindo?: SeguidorOrderByRelationAggregateInput
    seguidores?: SeguidorOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nomeExibicao?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    bio?: StringNullableFilter<"Usuario"> | string | null
    avatar?: StringNullableFilter<"Usuario"> | string | null
    banner?: StringNullableFilter<"Usuario"> | string | null
    perfil_privado?: BoolNullableFilter<"Usuario"> | boolean | null
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    termos_aceitos?: BoolFilter<"Usuario"> | boolean
    data_aceite_termos?: DateTimeFilter<"Usuario"> | Date | string
    estantes?: EstanteListRelationFilter
    seguindo?: SeguidorListRelationFilter
    seguidores?: SeguidorListRelationFilter
  }, "id" | "email" | "username">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    nomeExibicao?: SortOrder
    senha?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    perfil_privado?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    termos_aceitos?: SortOrder
    data_aceite_termos?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    username?: StringWithAggregatesFilter<"Usuario"> | string
    nomeExibicao?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    bio?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    banner?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    perfil_privado?: BoolNullableWithAggregatesFilter<"Usuario"> | boolean | null
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    termos_aceitos?: BoolWithAggregatesFilter<"Usuario"> | boolean
    data_aceite_termos?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type SeguidorWhereInput = {
    AND?: SeguidorWhereInput | SeguidorWhereInput[]
    OR?: SeguidorWhereInput[]
    NOT?: SeguidorWhereInput | SeguidorWhereInput[]
    id?: IntFilter<"Seguidor"> | number
    seguidorId?: IntFilter<"Seguidor"> | number
    seguindoId?: IntFilter<"Seguidor"> | number
    seguidor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    seguindo?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type SeguidorOrderByWithRelationInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguindoId?: SortOrder
    seguidor?: UsuarioOrderByWithRelationInput
    seguindo?: UsuarioOrderByWithRelationInput
  }

  export type SeguidorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeguidorWhereInput | SeguidorWhereInput[]
    OR?: SeguidorWhereInput[]
    NOT?: SeguidorWhereInput | SeguidorWhereInput[]
    seguidorId?: IntFilter<"Seguidor"> | number
    seguindoId?: IntFilter<"Seguidor"> | number
    seguidor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    seguindo?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type SeguidorOrderByWithAggregationInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguindoId?: SortOrder
    _count?: SeguidorCountOrderByAggregateInput
    _avg?: SeguidorAvgOrderByAggregateInput
    _max?: SeguidorMaxOrderByAggregateInput
    _min?: SeguidorMinOrderByAggregateInput
    _sum?: SeguidorSumOrderByAggregateInput
  }

  export type SeguidorScalarWhereWithAggregatesInput = {
    AND?: SeguidorScalarWhereWithAggregatesInput | SeguidorScalarWhereWithAggregatesInput[]
    OR?: SeguidorScalarWhereWithAggregatesInput[]
    NOT?: SeguidorScalarWhereWithAggregatesInput | SeguidorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seguidor"> | number
    seguidorId?: IntWithAggregatesFilter<"Seguidor"> | number
    seguindoId?: IntWithAggregatesFilter<"Seguidor"> | number
  }

  export type FanficWhereInput = {
    AND?: FanficWhereInput | FanficWhereInput[]
    OR?: FanficWhereInput[]
    NOT?: FanficWhereInput | FanficWhereInput[]
    id?: IntFilter<"Fanfic"> | number
    url?: StringFilter<"Fanfic"> | string
    titulo?: StringFilter<"Fanfic"> | string
    autor?: StringFilter<"Fanfic"> | string
    plataforma?: StringFilter<"Fanfic"> | string
    capa?: StringNullableFilter<"Fanfic"> | string | null
    mediaNota?: FloatFilter<"Fanfic"> | number
    itensEstante?: ItemEstanteListRelationFilter
    tags?: TagListRelationFilter
    fandoms?: FandomListRelationFilter
  }

  export type FanficOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    plataforma?: SortOrder
    capa?: SortOrderInput | SortOrder
    mediaNota?: SortOrder
    itensEstante?: ItemEstanteOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    fandoms?: FandomOrderByRelationAggregateInput
  }

  export type FanficWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: FanficWhereInput | FanficWhereInput[]
    OR?: FanficWhereInput[]
    NOT?: FanficWhereInput | FanficWhereInput[]
    titulo?: StringFilter<"Fanfic"> | string
    autor?: StringFilter<"Fanfic"> | string
    plataforma?: StringFilter<"Fanfic"> | string
    capa?: StringNullableFilter<"Fanfic"> | string | null
    mediaNota?: FloatFilter<"Fanfic"> | number
    itensEstante?: ItemEstanteListRelationFilter
    tags?: TagListRelationFilter
    fandoms?: FandomListRelationFilter
  }, "id" | "url">

  export type FanficOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    plataforma?: SortOrder
    capa?: SortOrderInput | SortOrder
    mediaNota?: SortOrder
    _count?: FanficCountOrderByAggregateInput
    _avg?: FanficAvgOrderByAggregateInput
    _max?: FanficMaxOrderByAggregateInput
    _min?: FanficMinOrderByAggregateInput
    _sum?: FanficSumOrderByAggregateInput
  }

  export type FanficScalarWhereWithAggregatesInput = {
    AND?: FanficScalarWhereWithAggregatesInput | FanficScalarWhereWithAggregatesInput[]
    OR?: FanficScalarWhereWithAggregatesInput[]
    NOT?: FanficScalarWhereWithAggregatesInput | FanficScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fanfic"> | number
    url?: StringWithAggregatesFilter<"Fanfic"> | string
    titulo?: StringWithAggregatesFilter<"Fanfic"> | string
    autor?: StringWithAggregatesFilter<"Fanfic"> | string
    plataforma?: StringWithAggregatesFilter<"Fanfic"> | string
    capa?: StringNullableWithAggregatesFilter<"Fanfic"> | string | null
    mediaNota?: FloatWithAggregatesFilter<"Fanfic"> | number
  }

  export type EstanteWhereInput = {
    AND?: EstanteWhereInput | EstanteWhereInput[]
    OR?: EstanteWhereInput[]
    NOT?: EstanteWhereInput | EstanteWhereInput[]
    id?: IntFilter<"Estante"> | number
    nome?: StringFilter<"Estante"> | string
    privada?: BoolFilter<"Estante"> | boolean
    usuarioId?: IntFilter<"Estante"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: ItemEstanteListRelationFilter
  }

  export type EstanteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    privada?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    itens?: ItemEstanteOrderByRelationAggregateInput
  }

  export type EstanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstanteWhereInput | EstanteWhereInput[]
    OR?: EstanteWhereInput[]
    NOT?: EstanteWhereInput | EstanteWhereInput[]
    nome?: StringFilter<"Estante"> | string
    privada?: BoolFilter<"Estante"> | boolean
    usuarioId?: IntFilter<"Estante"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: ItemEstanteListRelationFilter
  }, "id">

  export type EstanteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    privada?: SortOrder
    usuarioId?: SortOrder
    _count?: EstanteCountOrderByAggregateInput
    _avg?: EstanteAvgOrderByAggregateInput
    _max?: EstanteMaxOrderByAggregateInput
    _min?: EstanteMinOrderByAggregateInput
    _sum?: EstanteSumOrderByAggregateInput
  }

  export type EstanteScalarWhereWithAggregatesInput = {
    AND?: EstanteScalarWhereWithAggregatesInput | EstanteScalarWhereWithAggregatesInput[]
    OR?: EstanteScalarWhereWithAggregatesInput[]
    NOT?: EstanteScalarWhereWithAggregatesInput | EstanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estante"> | number
    nome?: StringWithAggregatesFilter<"Estante"> | string
    privada?: BoolWithAggregatesFilter<"Estante"> | boolean
    usuarioId?: IntWithAggregatesFilter<"Estante"> | number
  }

  export type ItemEstanteWhereInput = {
    AND?: ItemEstanteWhereInput | ItemEstanteWhereInput[]
    OR?: ItemEstanteWhereInput[]
    NOT?: ItemEstanteWhereInput | ItemEstanteWhereInput[]
    id?: IntFilter<"ItemEstante"> | number
    status?: StringFilter<"ItemEstante"> | string
    capitulo?: IntFilter<"ItemEstante"> | number
    nota?: IntNullableFilter<"ItemEstante"> | number | null
    resenha?: StringNullableFilter<"ItemEstante"> | string | null
    temSpoiler?: BoolFilter<"ItemEstante"> | boolean
    dataLeitura?: DateTimeFilter<"ItemEstante"> | Date | string
    atualizadoEm?: DateTimeFilter<"ItemEstante"> | Date | string
    estanteId?: IntFilter<"ItemEstante"> | number
    fanficId?: IntFilter<"ItemEstante"> | number
    estante?: XOR<EstanteScalarRelationFilter, EstanteWhereInput>
    fanfic?: XOR<FanficScalarRelationFilter, FanficWhereInput>
  }

  export type ItemEstanteOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    capitulo?: SortOrder
    nota?: SortOrderInput | SortOrder
    resenha?: SortOrderInput | SortOrder
    temSpoiler?: SortOrder
    dataLeitura?: SortOrder
    atualizadoEm?: SortOrder
    estanteId?: SortOrder
    fanficId?: SortOrder
    estante?: EstanteOrderByWithRelationInput
    fanfic?: FanficOrderByWithRelationInput
  }

  export type ItemEstanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemEstanteWhereInput | ItemEstanteWhereInput[]
    OR?: ItemEstanteWhereInput[]
    NOT?: ItemEstanteWhereInput | ItemEstanteWhereInput[]
    status?: StringFilter<"ItemEstante"> | string
    capitulo?: IntFilter<"ItemEstante"> | number
    nota?: IntNullableFilter<"ItemEstante"> | number | null
    resenha?: StringNullableFilter<"ItemEstante"> | string | null
    temSpoiler?: BoolFilter<"ItemEstante"> | boolean
    dataLeitura?: DateTimeFilter<"ItemEstante"> | Date | string
    atualizadoEm?: DateTimeFilter<"ItemEstante"> | Date | string
    estanteId?: IntFilter<"ItemEstante"> | number
    fanficId?: IntFilter<"ItemEstante"> | number
    estante?: XOR<EstanteScalarRelationFilter, EstanteWhereInput>
    fanfic?: XOR<FanficScalarRelationFilter, FanficWhereInput>
  }, "id">

  export type ItemEstanteOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    capitulo?: SortOrder
    nota?: SortOrderInput | SortOrder
    resenha?: SortOrderInput | SortOrder
    temSpoiler?: SortOrder
    dataLeitura?: SortOrder
    atualizadoEm?: SortOrder
    estanteId?: SortOrder
    fanficId?: SortOrder
    _count?: ItemEstanteCountOrderByAggregateInput
    _avg?: ItemEstanteAvgOrderByAggregateInput
    _max?: ItemEstanteMaxOrderByAggregateInput
    _min?: ItemEstanteMinOrderByAggregateInput
    _sum?: ItemEstanteSumOrderByAggregateInput
  }

  export type ItemEstanteScalarWhereWithAggregatesInput = {
    AND?: ItemEstanteScalarWhereWithAggregatesInput | ItemEstanteScalarWhereWithAggregatesInput[]
    OR?: ItemEstanteScalarWhereWithAggregatesInput[]
    NOT?: ItemEstanteScalarWhereWithAggregatesInput | ItemEstanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemEstante"> | number
    status?: StringWithAggregatesFilter<"ItemEstante"> | string
    capitulo?: IntWithAggregatesFilter<"ItemEstante"> | number
    nota?: IntNullableWithAggregatesFilter<"ItemEstante"> | number | null
    resenha?: StringNullableWithAggregatesFilter<"ItemEstante"> | string | null
    temSpoiler?: BoolWithAggregatesFilter<"ItemEstante"> | boolean
    dataLeitura?: DateTimeWithAggregatesFilter<"ItemEstante"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"ItemEstante"> | Date | string
    estanteId?: IntWithAggregatesFilter<"ItemEstante"> | number
    fanficId?: IntWithAggregatesFilter<"ItemEstante"> | number
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    nome?: StringFilter<"Tag"> | string
    fics?: FanficListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    fics?: FanficOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    fics?: FanficListRelationFilter
  }, "id" | "nome">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    nome?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type FandomWhereInput = {
    AND?: FandomWhereInput | FandomWhereInput[]
    OR?: FandomWhereInput[]
    NOT?: FandomWhereInput | FandomWhereInput[]
    id?: IntFilter<"Fandom"> | number
    nome?: StringFilter<"Fandom"> | string
    fics?: FanficListRelationFilter
  }

  export type FandomOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    fics?: FanficOrderByRelationAggregateInput
  }

  export type FandomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: FandomWhereInput | FandomWhereInput[]
    OR?: FandomWhereInput[]
    NOT?: FandomWhereInput | FandomWhereInput[]
    fics?: FanficListRelationFilter
  }, "id" | "nome">

  export type FandomOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: FandomCountOrderByAggregateInput
    _avg?: FandomAvgOrderByAggregateInput
    _max?: FandomMaxOrderByAggregateInput
    _min?: FandomMinOrderByAggregateInput
    _sum?: FandomSumOrderByAggregateInput
  }

  export type FandomScalarWhereWithAggregatesInput = {
    AND?: FandomScalarWhereWithAggregatesInput | FandomScalarWhereWithAggregatesInput[]
    OR?: FandomScalarWhereWithAggregatesInput[]
    NOT?: FandomScalarWhereWithAggregatesInput | FandomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fandom"> | number
    nome?: StringWithAggregatesFilter<"Fandom"> | string
  }

  export type UsuarioCreateInput = {
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio?: string | null
    avatar?: string | null
    banner?: string | null
    perfil_privado?: boolean | null
    criadoEm?: Date | string
    termos_aceitos?: boolean
    data_aceite_termos?: Date | string
    estantes?: EstanteCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguidorCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio?: string | null
    avatar?: string | null
    banner?: string | null
    perfil_privado?: boolean | null
    criadoEm?: Date | string
    termos_aceitos?: boolean
    data_aceite_termos?: Date | string
    estantes?: EstanteUncheckedCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
    estantes?: EstanteUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguidorUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
    estantes?: EstanteUncheckedUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio?: string | null
    avatar?: string | null
    banner?: string | null
    perfil_privado?: boolean | null
    criadoEm?: Date | string
    termos_aceitos?: boolean
    data_aceite_termos?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguidorCreateInput = {
    seguidor: UsuarioCreateNestedOneWithoutSeguindoInput
    seguindo: UsuarioCreateNestedOneWithoutSeguidoresInput
  }

  export type SeguidorUncheckedCreateInput = {
    id?: number
    seguidorId: number
    seguindoId: number
  }

  export type SeguidorUpdateInput = {
    seguidor?: UsuarioUpdateOneRequiredWithoutSeguindoNestedInput
    seguindo?: UsuarioUpdateOneRequiredWithoutSeguidoresNestedInput
  }

  export type SeguidorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seguidorId?: IntFieldUpdateOperationsInput | number
    seguindoId?: IntFieldUpdateOperationsInput | number
  }

  export type SeguidorCreateManyInput = {
    id?: number
    seguidorId: number
    seguindoId: number
  }

  export type SeguidorUpdateManyMutationInput = {

  }

  export type SeguidorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seguidorId?: IntFieldUpdateOperationsInput | number
    seguindoId?: IntFieldUpdateOperationsInput | number
  }

  export type FanficCreateInput = {
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa?: string | null
    mediaNota?: number
    itensEstante?: ItemEstanteCreateNestedManyWithoutFanficInput
    tags?: TagCreateNestedManyWithoutFicsInput
    fandoms?: FandomCreateNestedManyWithoutFicsInput
  }

  export type FanficUncheckedCreateInput = {
    id?: number
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa?: string | null
    mediaNota?: number
    itensEstante?: ItemEstanteUncheckedCreateNestedManyWithoutFanficInput
    tags?: TagUncheckedCreateNestedManyWithoutFicsInput
    fandoms?: FandomUncheckedCreateNestedManyWithoutFicsInput
  }

  export type FanficUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
    itensEstante?: ItemEstanteUpdateManyWithoutFanficNestedInput
    tags?: TagUpdateManyWithoutFicsNestedInput
    fandoms?: FandomUpdateManyWithoutFicsNestedInput
  }

  export type FanficUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
    itensEstante?: ItemEstanteUncheckedUpdateManyWithoutFanficNestedInput
    tags?: TagUncheckedUpdateManyWithoutFicsNestedInput
    fandoms?: FandomUncheckedUpdateManyWithoutFicsNestedInput
  }

  export type FanficCreateManyInput = {
    id?: number
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa?: string | null
    mediaNota?: number
  }

  export type FanficUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
  }

  export type FanficUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
  }

  export type EstanteCreateInput = {
    nome: string
    privada?: boolean
    usuario: UsuarioCreateNestedOneWithoutEstantesInput
    itens?: ItemEstanteCreateNestedManyWithoutEstanteInput
  }

  export type EstanteUncheckedCreateInput = {
    id?: number
    nome: string
    privada?: boolean
    usuarioId: number
    itens?: ItemEstanteUncheckedCreateNestedManyWithoutEstanteInput
  }

  export type EstanteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    privada?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutEstantesNestedInput
    itens?: ItemEstanteUpdateManyWithoutEstanteNestedInput
  }

  export type EstanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    privada?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    itens?: ItemEstanteUncheckedUpdateManyWithoutEstanteNestedInput
  }

  export type EstanteCreateManyInput = {
    id?: number
    nome: string
    privada?: boolean
    usuarioId: number
  }

  export type EstanteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    privada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EstanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    privada?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEstanteCreateInput = {
    status: string
    capitulo?: number
    nota?: number | null
    resenha?: string | null
    temSpoiler?: boolean
    dataLeitura?: Date | string
    atualizadoEm?: Date | string
    estante: EstanteCreateNestedOneWithoutItensInput
    fanfic: FanficCreateNestedOneWithoutItensEstanteInput
  }

  export type ItemEstanteUncheckedCreateInput = {
    id?: number
    status: string
    capitulo?: number
    nota?: number | null
    resenha?: string | null
    temSpoiler?: boolean
    dataLeitura?: Date | string
    atualizadoEm?: Date | string
    estanteId: number
    fanficId: number
  }

  export type ItemEstanteUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    estante?: EstanteUpdateOneRequiredWithoutItensNestedInput
    fanfic?: FanficUpdateOneRequiredWithoutItensEstanteNestedInput
  }

  export type ItemEstanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    estanteId?: IntFieldUpdateOperationsInput | number
    fanficId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEstanteCreateManyInput = {
    id?: number
    status: string
    capitulo?: number
    nota?: number | null
    resenha?: string | null
    temSpoiler?: boolean
    dataLeitura?: Date | string
    atualizadoEm?: Date | string
    estanteId: number
    fanficId: number
  }

  export type ItemEstanteUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemEstanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    estanteId?: IntFieldUpdateOperationsInput | number
    fanficId?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateInput = {
    nome: string
    fics?: FanficCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    nome: string
    fics?: FanficUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    fics?: FanficUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fics?: FanficUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    nome: string
  }

  export type TagUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FandomCreateInput = {
    nome: string
    fics?: FanficCreateNestedManyWithoutFandomsInput
  }

  export type FandomUncheckedCreateInput = {
    id?: number
    nome: string
    fics?: FanficUncheckedCreateNestedManyWithoutFandomsInput
  }

  export type FandomUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    fics?: FanficUpdateManyWithoutFandomsNestedInput
  }

  export type FandomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fics?: FanficUncheckedUpdateManyWithoutFandomsNestedInput
  }

  export type FandomCreateManyInput = {
    id?: number
    nome: string
  }

  export type FandomUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FandomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EstanteListRelationFilter = {
    every?: EstanteWhereInput
    some?: EstanteWhereInput
    none?: EstanteWhereInput
  }

  export type SeguidorListRelationFilter = {
    every?: SeguidorWhereInput
    some?: SeguidorWhereInput
    none?: SeguidorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EstanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeguidorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    nomeExibicao?: SortOrder
    senha?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    banner?: SortOrder
    perfil_privado?: SortOrder
    criadoEm?: SortOrder
    termos_aceitos?: SortOrder
    data_aceite_termos?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    nomeExibicao?: SortOrder
    senha?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    banner?: SortOrder
    perfil_privado?: SortOrder
    criadoEm?: SortOrder
    termos_aceitos?: SortOrder
    data_aceite_termos?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    nomeExibicao?: SortOrder
    senha?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    banner?: SortOrder
    perfil_privado?: SortOrder
    criadoEm?: SortOrder
    termos_aceitos?: SortOrder
    data_aceite_termos?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SeguidorCountOrderByAggregateInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguindoId?: SortOrder
  }

  export type SeguidorAvgOrderByAggregateInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguindoId?: SortOrder
  }

  export type SeguidorMaxOrderByAggregateInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguindoId?: SortOrder
  }

  export type SeguidorMinOrderByAggregateInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguindoId?: SortOrder
  }

  export type SeguidorSumOrderByAggregateInput = {
    id?: SortOrder
    seguidorId?: SortOrder
    seguindoId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ItemEstanteListRelationFilter = {
    every?: ItemEstanteWhereInput
    some?: ItemEstanteWhereInput
    none?: ItemEstanteWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type FandomListRelationFilter = {
    every?: FandomWhereInput
    some?: FandomWhereInput
    none?: FandomWhereInput
  }

  export type ItemEstanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FandomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FanficCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    plataforma?: SortOrder
    capa?: SortOrder
    mediaNota?: SortOrder
  }

  export type FanficAvgOrderByAggregateInput = {
    id?: SortOrder
    mediaNota?: SortOrder
  }

  export type FanficMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    plataforma?: SortOrder
    capa?: SortOrder
    mediaNota?: SortOrder
  }

  export type FanficMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    plataforma?: SortOrder
    capa?: SortOrder
    mediaNota?: SortOrder
  }

  export type FanficSumOrderByAggregateInput = {
    id?: SortOrder
    mediaNota?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EstanteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    privada?: SortOrder
    usuarioId?: SortOrder
  }

  export type EstanteAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EstanteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    privada?: SortOrder
    usuarioId?: SortOrder
  }

  export type EstanteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    privada?: SortOrder
    usuarioId?: SortOrder
  }

  export type EstanteSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EstanteScalarRelationFilter = {
    is?: EstanteWhereInput
    isNot?: EstanteWhereInput
  }

  export type FanficScalarRelationFilter = {
    is?: FanficWhereInput
    isNot?: FanficWhereInput
  }

  export type ItemEstanteCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    capitulo?: SortOrder
    nota?: SortOrder
    resenha?: SortOrder
    temSpoiler?: SortOrder
    dataLeitura?: SortOrder
    atualizadoEm?: SortOrder
    estanteId?: SortOrder
    fanficId?: SortOrder
  }

  export type ItemEstanteAvgOrderByAggregateInput = {
    id?: SortOrder
    capitulo?: SortOrder
    nota?: SortOrder
    estanteId?: SortOrder
    fanficId?: SortOrder
  }

  export type ItemEstanteMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    capitulo?: SortOrder
    nota?: SortOrder
    resenha?: SortOrder
    temSpoiler?: SortOrder
    dataLeitura?: SortOrder
    atualizadoEm?: SortOrder
    estanteId?: SortOrder
    fanficId?: SortOrder
  }

  export type ItemEstanteMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    capitulo?: SortOrder
    nota?: SortOrder
    resenha?: SortOrder
    temSpoiler?: SortOrder
    dataLeitura?: SortOrder
    atualizadoEm?: SortOrder
    estanteId?: SortOrder
    fanficId?: SortOrder
  }

  export type ItemEstanteSumOrderByAggregateInput = {
    id?: SortOrder
    capitulo?: SortOrder
    nota?: SortOrder
    estanteId?: SortOrder
    fanficId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FanficListRelationFilter = {
    every?: FanficWhereInput
    some?: FanficWhereInput
    none?: FanficWhereInput
  }

  export type FanficOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FandomCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type FandomAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FandomMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type FandomMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type FandomSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstanteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EstanteCreateWithoutUsuarioInput, EstanteUncheckedCreateWithoutUsuarioInput> | EstanteCreateWithoutUsuarioInput[] | EstanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstanteCreateOrConnectWithoutUsuarioInput | EstanteCreateOrConnectWithoutUsuarioInput[]
    createMany?: EstanteCreateManyUsuarioInputEnvelope
    connect?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
  }

  export type SeguidorCreateNestedManyWithoutSeguidorInput = {
    create?: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput> | SeguidorCreateWithoutSeguidorInput[] | SeguidorUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidorInput | SeguidorCreateOrConnectWithoutSeguidorInput[]
    createMany?: SeguidorCreateManySeguidorInputEnvelope
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
  }

  export type SeguidorCreateNestedManyWithoutSeguindoInput = {
    create?: XOR<SeguidorCreateWithoutSeguindoInput, SeguidorUncheckedCreateWithoutSeguindoInput> | SeguidorCreateWithoutSeguindoInput[] | SeguidorUncheckedCreateWithoutSeguindoInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguindoInput | SeguidorCreateOrConnectWithoutSeguindoInput[]
    createMany?: SeguidorCreateManySeguindoInputEnvelope
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
  }

  export type EstanteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EstanteCreateWithoutUsuarioInput, EstanteUncheckedCreateWithoutUsuarioInput> | EstanteCreateWithoutUsuarioInput[] | EstanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstanteCreateOrConnectWithoutUsuarioInput | EstanteCreateOrConnectWithoutUsuarioInput[]
    createMany?: EstanteCreateManyUsuarioInputEnvelope
    connect?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
  }

  export type SeguidorUncheckedCreateNestedManyWithoutSeguidorInput = {
    create?: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput> | SeguidorCreateWithoutSeguidorInput[] | SeguidorUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidorInput | SeguidorCreateOrConnectWithoutSeguidorInput[]
    createMany?: SeguidorCreateManySeguidorInputEnvelope
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
  }

  export type SeguidorUncheckedCreateNestedManyWithoutSeguindoInput = {
    create?: XOR<SeguidorCreateWithoutSeguindoInput, SeguidorUncheckedCreateWithoutSeguindoInput> | SeguidorCreateWithoutSeguindoInput[] | SeguidorUncheckedCreateWithoutSeguindoInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguindoInput | SeguidorCreateOrConnectWithoutSeguindoInput[]
    createMany?: SeguidorCreateManySeguindoInputEnvelope
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EstanteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EstanteCreateWithoutUsuarioInput, EstanteUncheckedCreateWithoutUsuarioInput> | EstanteCreateWithoutUsuarioInput[] | EstanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstanteCreateOrConnectWithoutUsuarioInput | EstanteCreateOrConnectWithoutUsuarioInput[]
    upsert?: EstanteUpsertWithWhereUniqueWithoutUsuarioInput | EstanteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EstanteCreateManyUsuarioInputEnvelope
    set?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
    disconnect?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
    delete?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
    connect?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
    update?: EstanteUpdateWithWhereUniqueWithoutUsuarioInput | EstanteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EstanteUpdateManyWithWhereWithoutUsuarioInput | EstanteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EstanteScalarWhereInput | EstanteScalarWhereInput[]
  }

  export type SeguidorUpdateManyWithoutSeguidorNestedInput = {
    create?: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput> | SeguidorCreateWithoutSeguidorInput[] | SeguidorUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidorInput | SeguidorCreateOrConnectWithoutSeguidorInput[]
    upsert?: SeguidorUpsertWithWhereUniqueWithoutSeguidorInput | SeguidorUpsertWithWhereUniqueWithoutSeguidorInput[]
    createMany?: SeguidorCreateManySeguidorInputEnvelope
    set?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    disconnect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    delete?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    update?: SeguidorUpdateWithWhereUniqueWithoutSeguidorInput | SeguidorUpdateWithWhereUniqueWithoutSeguidorInput[]
    updateMany?: SeguidorUpdateManyWithWhereWithoutSeguidorInput | SeguidorUpdateManyWithWhereWithoutSeguidorInput[]
    deleteMany?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
  }

  export type SeguidorUpdateManyWithoutSeguindoNestedInput = {
    create?: XOR<SeguidorCreateWithoutSeguindoInput, SeguidorUncheckedCreateWithoutSeguindoInput> | SeguidorCreateWithoutSeguindoInput[] | SeguidorUncheckedCreateWithoutSeguindoInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguindoInput | SeguidorCreateOrConnectWithoutSeguindoInput[]
    upsert?: SeguidorUpsertWithWhereUniqueWithoutSeguindoInput | SeguidorUpsertWithWhereUniqueWithoutSeguindoInput[]
    createMany?: SeguidorCreateManySeguindoInputEnvelope
    set?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    disconnect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    delete?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    update?: SeguidorUpdateWithWhereUniqueWithoutSeguindoInput | SeguidorUpdateWithWhereUniqueWithoutSeguindoInput[]
    updateMany?: SeguidorUpdateManyWithWhereWithoutSeguindoInput | SeguidorUpdateManyWithWhereWithoutSeguindoInput[]
    deleteMany?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstanteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EstanteCreateWithoutUsuarioInput, EstanteUncheckedCreateWithoutUsuarioInput> | EstanteCreateWithoutUsuarioInput[] | EstanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EstanteCreateOrConnectWithoutUsuarioInput | EstanteCreateOrConnectWithoutUsuarioInput[]
    upsert?: EstanteUpsertWithWhereUniqueWithoutUsuarioInput | EstanteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EstanteCreateManyUsuarioInputEnvelope
    set?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
    disconnect?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
    delete?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
    connect?: EstanteWhereUniqueInput | EstanteWhereUniqueInput[]
    update?: EstanteUpdateWithWhereUniqueWithoutUsuarioInput | EstanteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EstanteUpdateManyWithWhereWithoutUsuarioInput | EstanteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EstanteScalarWhereInput | EstanteScalarWhereInput[]
  }

  export type SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput = {
    create?: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput> | SeguidorCreateWithoutSeguidorInput[] | SeguidorUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidorInput | SeguidorCreateOrConnectWithoutSeguidorInput[]
    upsert?: SeguidorUpsertWithWhereUniqueWithoutSeguidorInput | SeguidorUpsertWithWhereUniqueWithoutSeguidorInput[]
    createMany?: SeguidorCreateManySeguidorInputEnvelope
    set?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    disconnect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    delete?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    update?: SeguidorUpdateWithWhereUniqueWithoutSeguidorInput | SeguidorUpdateWithWhereUniqueWithoutSeguidorInput[]
    updateMany?: SeguidorUpdateManyWithWhereWithoutSeguidorInput | SeguidorUpdateManyWithWhereWithoutSeguidorInput[]
    deleteMany?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
  }

  export type SeguidorUncheckedUpdateManyWithoutSeguindoNestedInput = {
    create?: XOR<SeguidorCreateWithoutSeguindoInput, SeguidorUncheckedCreateWithoutSeguindoInput> | SeguidorCreateWithoutSeguindoInput[] | SeguidorUncheckedCreateWithoutSeguindoInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguindoInput | SeguidorCreateOrConnectWithoutSeguindoInput[]
    upsert?: SeguidorUpsertWithWhereUniqueWithoutSeguindoInput | SeguidorUpsertWithWhereUniqueWithoutSeguindoInput[]
    createMany?: SeguidorCreateManySeguindoInputEnvelope
    set?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    disconnect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    delete?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    update?: SeguidorUpdateWithWhereUniqueWithoutSeguindoInput | SeguidorUpdateWithWhereUniqueWithoutSeguindoInput[]
    updateMany?: SeguidorUpdateManyWithWhereWithoutSeguindoInput | SeguidorUpdateManyWithWhereWithoutSeguindoInput[]
    deleteMany?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutSeguindoInput = {
    create?: XOR<UsuarioCreateWithoutSeguindoInput, UsuarioUncheckedCreateWithoutSeguindoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeguindoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutSeguidoresInput = {
    create?: XOR<UsuarioCreateWithoutSeguidoresInput, UsuarioUncheckedCreateWithoutSeguidoresInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeguidoresInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutSeguindoNestedInput = {
    create?: XOR<UsuarioCreateWithoutSeguindoInput, UsuarioUncheckedCreateWithoutSeguindoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeguindoInput
    upsert?: UsuarioUpsertWithoutSeguindoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSeguindoInput, UsuarioUpdateWithoutSeguindoInput>, UsuarioUncheckedUpdateWithoutSeguindoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutSeguidoresNestedInput = {
    create?: XOR<UsuarioCreateWithoutSeguidoresInput, UsuarioUncheckedCreateWithoutSeguidoresInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeguidoresInput
    upsert?: UsuarioUpsertWithoutSeguidoresInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSeguidoresInput, UsuarioUpdateWithoutSeguidoresInput>, UsuarioUncheckedUpdateWithoutSeguidoresInput>
  }

  export type ItemEstanteCreateNestedManyWithoutFanficInput = {
    create?: XOR<ItemEstanteCreateWithoutFanficInput, ItemEstanteUncheckedCreateWithoutFanficInput> | ItemEstanteCreateWithoutFanficInput[] | ItemEstanteUncheckedCreateWithoutFanficInput[]
    connectOrCreate?: ItemEstanteCreateOrConnectWithoutFanficInput | ItemEstanteCreateOrConnectWithoutFanficInput[]
    createMany?: ItemEstanteCreateManyFanficInputEnvelope
    connect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutFicsInput = {
    create?: XOR<TagCreateWithoutFicsInput, TagUncheckedCreateWithoutFicsInput> | TagCreateWithoutFicsInput[] | TagUncheckedCreateWithoutFicsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutFicsInput | TagCreateOrConnectWithoutFicsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type FandomCreateNestedManyWithoutFicsInput = {
    create?: XOR<FandomCreateWithoutFicsInput, FandomUncheckedCreateWithoutFicsInput> | FandomCreateWithoutFicsInput[] | FandomUncheckedCreateWithoutFicsInput[]
    connectOrCreate?: FandomCreateOrConnectWithoutFicsInput | FandomCreateOrConnectWithoutFicsInput[]
    connect?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
  }

  export type ItemEstanteUncheckedCreateNestedManyWithoutFanficInput = {
    create?: XOR<ItemEstanteCreateWithoutFanficInput, ItemEstanteUncheckedCreateWithoutFanficInput> | ItemEstanteCreateWithoutFanficInput[] | ItemEstanteUncheckedCreateWithoutFanficInput[]
    connectOrCreate?: ItemEstanteCreateOrConnectWithoutFanficInput | ItemEstanteCreateOrConnectWithoutFanficInput[]
    createMany?: ItemEstanteCreateManyFanficInputEnvelope
    connect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutFicsInput = {
    create?: XOR<TagCreateWithoutFicsInput, TagUncheckedCreateWithoutFicsInput> | TagCreateWithoutFicsInput[] | TagUncheckedCreateWithoutFicsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutFicsInput | TagCreateOrConnectWithoutFicsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type FandomUncheckedCreateNestedManyWithoutFicsInput = {
    create?: XOR<FandomCreateWithoutFicsInput, FandomUncheckedCreateWithoutFicsInput> | FandomCreateWithoutFicsInput[] | FandomUncheckedCreateWithoutFicsInput[]
    connectOrCreate?: FandomCreateOrConnectWithoutFicsInput | FandomCreateOrConnectWithoutFicsInput[]
    connect?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemEstanteUpdateManyWithoutFanficNestedInput = {
    create?: XOR<ItemEstanteCreateWithoutFanficInput, ItemEstanteUncheckedCreateWithoutFanficInput> | ItemEstanteCreateWithoutFanficInput[] | ItemEstanteUncheckedCreateWithoutFanficInput[]
    connectOrCreate?: ItemEstanteCreateOrConnectWithoutFanficInput | ItemEstanteCreateOrConnectWithoutFanficInput[]
    upsert?: ItemEstanteUpsertWithWhereUniqueWithoutFanficInput | ItemEstanteUpsertWithWhereUniqueWithoutFanficInput[]
    createMany?: ItemEstanteCreateManyFanficInputEnvelope
    set?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    disconnect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    delete?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    connect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    update?: ItemEstanteUpdateWithWhereUniqueWithoutFanficInput | ItemEstanteUpdateWithWhereUniqueWithoutFanficInput[]
    updateMany?: ItemEstanteUpdateManyWithWhereWithoutFanficInput | ItemEstanteUpdateManyWithWhereWithoutFanficInput[]
    deleteMany?: ItemEstanteScalarWhereInput | ItemEstanteScalarWhereInput[]
  }

  export type TagUpdateManyWithoutFicsNestedInput = {
    create?: XOR<TagCreateWithoutFicsInput, TagUncheckedCreateWithoutFicsInput> | TagCreateWithoutFicsInput[] | TagUncheckedCreateWithoutFicsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutFicsInput | TagCreateOrConnectWithoutFicsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutFicsInput | TagUpsertWithWhereUniqueWithoutFicsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutFicsInput | TagUpdateWithWhereUniqueWithoutFicsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutFicsInput | TagUpdateManyWithWhereWithoutFicsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type FandomUpdateManyWithoutFicsNestedInput = {
    create?: XOR<FandomCreateWithoutFicsInput, FandomUncheckedCreateWithoutFicsInput> | FandomCreateWithoutFicsInput[] | FandomUncheckedCreateWithoutFicsInput[]
    connectOrCreate?: FandomCreateOrConnectWithoutFicsInput | FandomCreateOrConnectWithoutFicsInput[]
    upsert?: FandomUpsertWithWhereUniqueWithoutFicsInput | FandomUpsertWithWhereUniqueWithoutFicsInput[]
    set?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
    disconnect?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
    delete?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
    connect?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
    update?: FandomUpdateWithWhereUniqueWithoutFicsInput | FandomUpdateWithWhereUniqueWithoutFicsInput[]
    updateMany?: FandomUpdateManyWithWhereWithoutFicsInput | FandomUpdateManyWithWhereWithoutFicsInput[]
    deleteMany?: FandomScalarWhereInput | FandomScalarWhereInput[]
  }

  export type ItemEstanteUncheckedUpdateManyWithoutFanficNestedInput = {
    create?: XOR<ItemEstanteCreateWithoutFanficInput, ItemEstanteUncheckedCreateWithoutFanficInput> | ItemEstanteCreateWithoutFanficInput[] | ItemEstanteUncheckedCreateWithoutFanficInput[]
    connectOrCreate?: ItemEstanteCreateOrConnectWithoutFanficInput | ItemEstanteCreateOrConnectWithoutFanficInput[]
    upsert?: ItemEstanteUpsertWithWhereUniqueWithoutFanficInput | ItemEstanteUpsertWithWhereUniqueWithoutFanficInput[]
    createMany?: ItemEstanteCreateManyFanficInputEnvelope
    set?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    disconnect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    delete?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    connect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    update?: ItemEstanteUpdateWithWhereUniqueWithoutFanficInput | ItemEstanteUpdateWithWhereUniqueWithoutFanficInput[]
    updateMany?: ItemEstanteUpdateManyWithWhereWithoutFanficInput | ItemEstanteUpdateManyWithWhereWithoutFanficInput[]
    deleteMany?: ItemEstanteScalarWhereInput | ItemEstanteScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutFicsNestedInput = {
    create?: XOR<TagCreateWithoutFicsInput, TagUncheckedCreateWithoutFicsInput> | TagCreateWithoutFicsInput[] | TagUncheckedCreateWithoutFicsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutFicsInput | TagCreateOrConnectWithoutFicsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutFicsInput | TagUpsertWithWhereUniqueWithoutFicsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutFicsInput | TagUpdateWithWhereUniqueWithoutFicsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutFicsInput | TagUpdateManyWithWhereWithoutFicsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type FandomUncheckedUpdateManyWithoutFicsNestedInput = {
    create?: XOR<FandomCreateWithoutFicsInput, FandomUncheckedCreateWithoutFicsInput> | FandomCreateWithoutFicsInput[] | FandomUncheckedCreateWithoutFicsInput[]
    connectOrCreate?: FandomCreateOrConnectWithoutFicsInput | FandomCreateOrConnectWithoutFicsInput[]
    upsert?: FandomUpsertWithWhereUniqueWithoutFicsInput | FandomUpsertWithWhereUniqueWithoutFicsInput[]
    set?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
    disconnect?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
    delete?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
    connect?: FandomWhereUniqueInput | FandomWhereUniqueInput[]
    update?: FandomUpdateWithWhereUniqueWithoutFicsInput | FandomUpdateWithWhereUniqueWithoutFicsInput[]
    updateMany?: FandomUpdateManyWithWhereWithoutFicsInput | FandomUpdateManyWithWhereWithoutFicsInput[]
    deleteMany?: FandomScalarWhereInput | FandomScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEstantesInput = {
    create?: XOR<UsuarioCreateWithoutEstantesInput, UsuarioUncheckedCreateWithoutEstantesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstantesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ItemEstanteCreateNestedManyWithoutEstanteInput = {
    create?: XOR<ItemEstanteCreateWithoutEstanteInput, ItemEstanteUncheckedCreateWithoutEstanteInput> | ItemEstanteCreateWithoutEstanteInput[] | ItemEstanteUncheckedCreateWithoutEstanteInput[]
    connectOrCreate?: ItemEstanteCreateOrConnectWithoutEstanteInput | ItemEstanteCreateOrConnectWithoutEstanteInput[]
    createMany?: ItemEstanteCreateManyEstanteInputEnvelope
    connect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
  }

  export type ItemEstanteUncheckedCreateNestedManyWithoutEstanteInput = {
    create?: XOR<ItemEstanteCreateWithoutEstanteInput, ItemEstanteUncheckedCreateWithoutEstanteInput> | ItemEstanteCreateWithoutEstanteInput[] | ItemEstanteUncheckedCreateWithoutEstanteInput[]
    connectOrCreate?: ItemEstanteCreateOrConnectWithoutEstanteInput | ItemEstanteCreateOrConnectWithoutEstanteInput[]
    createMany?: ItemEstanteCreateManyEstanteInputEnvelope
    connect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutEstantesNestedInput = {
    create?: XOR<UsuarioCreateWithoutEstantesInput, UsuarioUncheckedCreateWithoutEstantesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstantesInput
    upsert?: UsuarioUpsertWithoutEstantesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEstantesInput, UsuarioUpdateWithoutEstantesInput>, UsuarioUncheckedUpdateWithoutEstantesInput>
  }

  export type ItemEstanteUpdateManyWithoutEstanteNestedInput = {
    create?: XOR<ItemEstanteCreateWithoutEstanteInput, ItemEstanteUncheckedCreateWithoutEstanteInput> | ItemEstanteCreateWithoutEstanteInput[] | ItemEstanteUncheckedCreateWithoutEstanteInput[]
    connectOrCreate?: ItemEstanteCreateOrConnectWithoutEstanteInput | ItemEstanteCreateOrConnectWithoutEstanteInput[]
    upsert?: ItemEstanteUpsertWithWhereUniqueWithoutEstanteInput | ItemEstanteUpsertWithWhereUniqueWithoutEstanteInput[]
    createMany?: ItemEstanteCreateManyEstanteInputEnvelope
    set?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    disconnect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    delete?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    connect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    update?: ItemEstanteUpdateWithWhereUniqueWithoutEstanteInput | ItemEstanteUpdateWithWhereUniqueWithoutEstanteInput[]
    updateMany?: ItemEstanteUpdateManyWithWhereWithoutEstanteInput | ItemEstanteUpdateManyWithWhereWithoutEstanteInput[]
    deleteMany?: ItemEstanteScalarWhereInput | ItemEstanteScalarWhereInput[]
  }

  export type ItemEstanteUncheckedUpdateManyWithoutEstanteNestedInput = {
    create?: XOR<ItemEstanteCreateWithoutEstanteInput, ItemEstanteUncheckedCreateWithoutEstanteInput> | ItemEstanteCreateWithoutEstanteInput[] | ItemEstanteUncheckedCreateWithoutEstanteInput[]
    connectOrCreate?: ItemEstanteCreateOrConnectWithoutEstanteInput | ItemEstanteCreateOrConnectWithoutEstanteInput[]
    upsert?: ItemEstanteUpsertWithWhereUniqueWithoutEstanteInput | ItemEstanteUpsertWithWhereUniqueWithoutEstanteInput[]
    createMany?: ItemEstanteCreateManyEstanteInputEnvelope
    set?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    disconnect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    delete?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    connect?: ItemEstanteWhereUniqueInput | ItemEstanteWhereUniqueInput[]
    update?: ItemEstanteUpdateWithWhereUniqueWithoutEstanteInput | ItemEstanteUpdateWithWhereUniqueWithoutEstanteInput[]
    updateMany?: ItemEstanteUpdateManyWithWhereWithoutEstanteInput | ItemEstanteUpdateManyWithWhereWithoutEstanteInput[]
    deleteMany?: ItemEstanteScalarWhereInput | ItemEstanteScalarWhereInput[]
  }

  export type EstanteCreateNestedOneWithoutItensInput = {
    create?: XOR<EstanteCreateWithoutItensInput, EstanteUncheckedCreateWithoutItensInput>
    connectOrCreate?: EstanteCreateOrConnectWithoutItensInput
    connect?: EstanteWhereUniqueInput
  }

  export type FanficCreateNestedOneWithoutItensEstanteInput = {
    create?: XOR<FanficCreateWithoutItensEstanteInput, FanficUncheckedCreateWithoutItensEstanteInput>
    connectOrCreate?: FanficCreateOrConnectWithoutItensEstanteInput
    connect?: FanficWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstanteUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<EstanteCreateWithoutItensInput, EstanteUncheckedCreateWithoutItensInput>
    connectOrCreate?: EstanteCreateOrConnectWithoutItensInput
    upsert?: EstanteUpsertWithoutItensInput
    connect?: EstanteWhereUniqueInput
    update?: XOR<XOR<EstanteUpdateToOneWithWhereWithoutItensInput, EstanteUpdateWithoutItensInput>, EstanteUncheckedUpdateWithoutItensInput>
  }

  export type FanficUpdateOneRequiredWithoutItensEstanteNestedInput = {
    create?: XOR<FanficCreateWithoutItensEstanteInput, FanficUncheckedCreateWithoutItensEstanteInput>
    connectOrCreate?: FanficCreateOrConnectWithoutItensEstanteInput
    upsert?: FanficUpsertWithoutItensEstanteInput
    connect?: FanficWhereUniqueInput
    update?: XOR<XOR<FanficUpdateToOneWithWhereWithoutItensEstanteInput, FanficUpdateWithoutItensEstanteInput>, FanficUncheckedUpdateWithoutItensEstanteInput>
  }

  export type FanficCreateNestedManyWithoutTagsInput = {
    create?: XOR<FanficCreateWithoutTagsInput, FanficUncheckedCreateWithoutTagsInput> | FanficCreateWithoutTagsInput[] | FanficUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: FanficCreateOrConnectWithoutTagsInput | FanficCreateOrConnectWithoutTagsInput[]
    connect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
  }

  export type FanficUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<FanficCreateWithoutTagsInput, FanficUncheckedCreateWithoutTagsInput> | FanficCreateWithoutTagsInput[] | FanficUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: FanficCreateOrConnectWithoutTagsInput | FanficCreateOrConnectWithoutTagsInput[]
    connect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
  }

  export type FanficUpdateManyWithoutTagsNestedInput = {
    create?: XOR<FanficCreateWithoutTagsInput, FanficUncheckedCreateWithoutTagsInput> | FanficCreateWithoutTagsInput[] | FanficUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: FanficCreateOrConnectWithoutTagsInput | FanficCreateOrConnectWithoutTagsInput[]
    upsert?: FanficUpsertWithWhereUniqueWithoutTagsInput | FanficUpsertWithWhereUniqueWithoutTagsInput[]
    set?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    disconnect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    delete?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    connect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    update?: FanficUpdateWithWhereUniqueWithoutTagsInput | FanficUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: FanficUpdateManyWithWhereWithoutTagsInput | FanficUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: FanficScalarWhereInput | FanficScalarWhereInput[]
  }

  export type FanficUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<FanficCreateWithoutTagsInput, FanficUncheckedCreateWithoutTagsInput> | FanficCreateWithoutTagsInput[] | FanficUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: FanficCreateOrConnectWithoutTagsInput | FanficCreateOrConnectWithoutTagsInput[]
    upsert?: FanficUpsertWithWhereUniqueWithoutTagsInput | FanficUpsertWithWhereUniqueWithoutTagsInput[]
    set?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    disconnect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    delete?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    connect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    update?: FanficUpdateWithWhereUniqueWithoutTagsInput | FanficUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: FanficUpdateManyWithWhereWithoutTagsInput | FanficUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: FanficScalarWhereInput | FanficScalarWhereInput[]
  }

  export type FanficCreateNestedManyWithoutFandomsInput = {
    create?: XOR<FanficCreateWithoutFandomsInput, FanficUncheckedCreateWithoutFandomsInput> | FanficCreateWithoutFandomsInput[] | FanficUncheckedCreateWithoutFandomsInput[]
    connectOrCreate?: FanficCreateOrConnectWithoutFandomsInput | FanficCreateOrConnectWithoutFandomsInput[]
    connect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
  }

  export type FanficUncheckedCreateNestedManyWithoutFandomsInput = {
    create?: XOR<FanficCreateWithoutFandomsInput, FanficUncheckedCreateWithoutFandomsInput> | FanficCreateWithoutFandomsInput[] | FanficUncheckedCreateWithoutFandomsInput[]
    connectOrCreate?: FanficCreateOrConnectWithoutFandomsInput | FanficCreateOrConnectWithoutFandomsInput[]
    connect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
  }

  export type FanficUpdateManyWithoutFandomsNestedInput = {
    create?: XOR<FanficCreateWithoutFandomsInput, FanficUncheckedCreateWithoutFandomsInput> | FanficCreateWithoutFandomsInput[] | FanficUncheckedCreateWithoutFandomsInput[]
    connectOrCreate?: FanficCreateOrConnectWithoutFandomsInput | FanficCreateOrConnectWithoutFandomsInput[]
    upsert?: FanficUpsertWithWhereUniqueWithoutFandomsInput | FanficUpsertWithWhereUniqueWithoutFandomsInput[]
    set?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    disconnect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    delete?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    connect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    update?: FanficUpdateWithWhereUniqueWithoutFandomsInput | FanficUpdateWithWhereUniqueWithoutFandomsInput[]
    updateMany?: FanficUpdateManyWithWhereWithoutFandomsInput | FanficUpdateManyWithWhereWithoutFandomsInput[]
    deleteMany?: FanficScalarWhereInput | FanficScalarWhereInput[]
  }

  export type FanficUncheckedUpdateManyWithoutFandomsNestedInput = {
    create?: XOR<FanficCreateWithoutFandomsInput, FanficUncheckedCreateWithoutFandomsInput> | FanficCreateWithoutFandomsInput[] | FanficUncheckedCreateWithoutFandomsInput[]
    connectOrCreate?: FanficCreateOrConnectWithoutFandomsInput | FanficCreateOrConnectWithoutFandomsInput[]
    upsert?: FanficUpsertWithWhereUniqueWithoutFandomsInput | FanficUpsertWithWhereUniqueWithoutFandomsInput[]
    set?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    disconnect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    delete?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    connect?: FanficWhereUniqueInput | FanficWhereUniqueInput[]
    update?: FanficUpdateWithWhereUniqueWithoutFandomsInput | FanficUpdateWithWhereUniqueWithoutFandomsInput[]
    updateMany?: FanficUpdateManyWithWhereWithoutFandomsInput | FanficUpdateManyWithWhereWithoutFandomsInput[]
    deleteMany?: FanficScalarWhereInput | FanficScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EstanteCreateWithoutUsuarioInput = {
    nome: string
    privada?: boolean
    itens?: ItemEstanteCreateNestedManyWithoutEstanteInput
  }

  export type EstanteUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    privada?: boolean
    itens?: ItemEstanteUncheckedCreateNestedManyWithoutEstanteInput
  }

  export type EstanteCreateOrConnectWithoutUsuarioInput = {
    where: EstanteWhereUniqueInput
    create: XOR<EstanteCreateWithoutUsuarioInput, EstanteUncheckedCreateWithoutUsuarioInput>
  }

  export type EstanteCreateManyUsuarioInputEnvelope = {
    data: EstanteCreateManyUsuarioInput | EstanteCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SeguidorCreateWithoutSeguidorInput = {
    seguindo: UsuarioCreateNestedOneWithoutSeguidoresInput
  }

  export type SeguidorUncheckedCreateWithoutSeguidorInput = {
    id?: number
    seguindoId: number
  }

  export type SeguidorCreateOrConnectWithoutSeguidorInput = {
    where: SeguidorWhereUniqueInput
    create: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput>
  }

  export type SeguidorCreateManySeguidorInputEnvelope = {
    data: SeguidorCreateManySeguidorInput | SeguidorCreateManySeguidorInput[]
    skipDuplicates?: boolean
  }

  export type SeguidorCreateWithoutSeguindoInput = {
    seguidor: UsuarioCreateNestedOneWithoutSeguindoInput
  }

  export type SeguidorUncheckedCreateWithoutSeguindoInput = {
    id?: number
    seguidorId: number
  }

  export type SeguidorCreateOrConnectWithoutSeguindoInput = {
    where: SeguidorWhereUniqueInput
    create: XOR<SeguidorCreateWithoutSeguindoInput, SeguidorUncheckedCreateWithoutSeguindoInput>
  }

  export type SeguidorCreateManySeguindoInputEnvelope = {
    data: SeguidorCreateManySeguindoInput | SeguidorCreateManySeguindoInput[]
    skipDuplicates?: boolean
  }

  export type EstanteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EstanteWhereUniqueInput
    update: XOR<EstanteUpdateWithoutUsuarioInput, EstanteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EstanteCreateWithoutUsuarioInput, EstanteUncheckedCreateWithoutUsuarioInput>
  }

  export type EstanteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EstanteWhereUniqueInput
    data: XOR<EstanteUpdateWithoutUsuarioInput, EstanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type EstanteUpdateManyWithWhereWithoutUsuarioInput = {
    where: EstanteScalarWhereInput
    data: XOR<EstanteUpdateManyMutationInput, EstanteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EstanteScalarWhereInput = {
    AND?: EstanteScalarWhereInput | EstanteScalarWhereInput[]
    OR?: EstanteScalarWhereInput[]
    NOT?: EstanteScalarWhereInput | EstanteScalarWhereInput[]
    id?: IntFilter<"Estante"> | number
    nome?: StringFilter<"Estante"> | string
    privada?: BoolFilter<"Estante"> | boolean
    usuarioId?: IntFilter<"Estante"> | number
  }

  export type SeguidorUpsertWithWhereUniqueWithoutSeguidorInput = {
    where: SeguidorWhereUniqueInput
    update: XOR<SeguidorUpdateWithoutSeguidorInput, SeguidorUncheckedUpdateWithoutSeguidorInput>
    create: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput>
  }

  export type SeguidorUpdateWithWhereUniqueWithoutSeguidorInput = {
    where: SeguidorWhereUniqueInput
    data: XOR<SeguidorUpdateWithoutSeguidorInput, SeguidorUncheckedUpdateWithoutSeguidorInput>
  }

  export type SeguidorUpdateManyWithWhereWithoutSeguidorInput = {
    where: SeguidorScalarWhereInput
    data: XOR<SeguidorUpdateManyMutationInput, SeguidorUncheckedUpdateManyWithoutSeguidorInput>
  }

  export type SeguidorScalarWhereInput = {
    AND?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
    OR?: SeguidorScalarWhereInput[]
    NOT?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
    id?: IntFilter<"Seguidor"> | number
    seguidorId?: IntFilter<"Seguidor"> | number
    seguindoId?: IntFilter<"Seguidor"> | number
  }

  export type SeguidorUpsertWithWhereUniqueWithoutSeguindoInput = {
    where: SeguidorWhereUniqueInput
    update: XOR<SeguidorUpdateWithoutSeguindoInput, SeguidorUncheckedUpdateWithoutSeguindoInput>
    create: XOR<SeguidorCreateWithoutSeguindoInput, SeguidorUncheckedCreateWithoutSeguindoInput>
  }

  export type SeguidorUpdateWithWhereUniqueWithoutSeguindoInput = {
    where: SeguidorWhereUniqueInput
    data: XOR<SeguidorUpdateWithoutSeguindoInput, SeguidorUncheckedUpdateWithoutSeguindoInput>
  }

  export type SeguidorUpdateManyWithWhereWithoutSeguindoInput = {
    where: SeguidorScalarWhereInput
    data: XOR<SeguidorUpdateManyMutationInput, SeguidorUncheckedUpdateManyWithoutSeguindoInput>
  }

  export type UsuarioCreateWithoutSeguindoInput = {
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio?: string | null
    avatar?: string | null
    banner?: string | null
    perfil_privado?: boolean | null
    criadoEm?: Date | string
    termos_aceitos?: boolean
    data_aceite_termos?: Date | string
    estantes?: EstanteCreateNestedManyWithoutUsuarioInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUncheckedCreateWithoutSeguindoInput = {
    id?: number
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio?: string | null
    avatar?: string | null
    banner?: string | null
    perfil_privado?: boolean | null
    criadoEm?: Date | string
    termos_aceitos?: boolean
    data_aceite_termos?: Date | string
    estantes?: EstanteUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioCreateOrConnectWithoutSeguindoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSeguindoInput, UsuarioUncheckedCreateWithoutSeguindoInput>
  }

  export type UsuarioCreateWithoutSeguidoresInput = {
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio?: string | null
    avatar?: string | null
    banner?: string | null
    perfil_privado?: boolean | null
    criadoEm?: Date | string
    termos_aceitos?: boolean
    data_aceite_termos?: Date | string
    estantes?: EstanteCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguidorCreateNestedManyWithoutSeguidorInput
  }

  export type UsuarioUncheckedCreateWithoutSeguidoresInput = {
    id?: number
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio?: string | null
    avatar?: string | null
    banner?: string | null
    perfil_privado?: boolean | null
    criadoEm?: Date | string
    termos_aceitos?: boolean
    data_aceite_termos?: Date | string
    estantes?: EstanteUncheckedCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type UsuarioCreateOrConnectWithoutSeguidoresInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSeguidoresInput, UsuarioUncheckedCreateWithoutSeguidoresInput>
  }

  export type UsuarioUpsertWithoutSeguindoInput = {
    update: XOR<UsuarioUpdateWithoutSeguindoInput, UsuarioUncheckedUpdateWithoutSeguindoInput>
    create: XOR<UsuarioCreateWithoutSeguindoInput, UsuarioUncheckedCreateWithoutSeguindoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSeguindoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSeguindoInput, UsuarioUncheckedUpdateWithoutSeguindoInput>
  }

  export type UsuarioUpdateWithoutSeguindoInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
    estantes?: EstanteUpdateManyWithoutUsuarioNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSeguindoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
    estantes?: EstanteUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUpsertWithoutSeguidoresInput = {
    update: XOR<UsuarioUpdateWithoutSeguidoresInput, UsuarioUncheckedUpdateWithoutSeguidoresInput>
    create: XOR<UsuarioCreateWithoutSeguidoresInput, UsuarioUncheckedCreateWithoutSeguidoresInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSeguidoresInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSeguidoresInput, UsuarioUncheckedUpdateWithoutSeguidoresInput>
  }

  export type UsuarioUpdateWithoutSeguidoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
    estantes?: EstanteUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguidorUpdateManyWithoutSeguidorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSeguidoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
    estantes?: EstanteUncheckedUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type ItemEstanteCreateWithoutFanficInput = {
    status: string
    capitulo?: number
    nota?: number | null
    resenha?: string | null
    temSpoiler?: boolean
    dataLeitura?: Date | string
    atualizadoEm?: Date | string
    estante: EstanteCreateNestedOneWithoutItensInput
  }

  export type ItemEstanteUncheckedCreateWithoutFanficInput = {
    id?: number
    status: string
    capitulo?: number
    nota?: number | null
    resenha?: string | null
    temSpoiler?: boolean
    dataLeitura?: Date | string
    atualizadoEm?: Date | string
    estanteId: number
  }

  export type ItemEstanteCreateOrConnectWithoutFanficInput = {
    where: ItemEstanteWhereUniqueInput
    create: XOR<ItemEstanteCreateWithoutFanficInput, ItemEstanteUncheckedCreateWithoutFanficInput>
  }

  export type ItemEstanteCreateManyFanficInputEnvelope = {
    data: ItemEstanteCreateManyFanficInput | ItemEstanteCreateManyFanficInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutFicsInput = {
    nome: string
  }

  export type TagUncheckedCreateWithoutFicsInput = {
    id?: number
    nome: string
  }

  export type TagCreateOrConnectWithoutFicsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutFicsInput, TagUncheckedCreateWithoutFicsInput>
  }

  export type FandomCreateWithoutFicsInput = {
    nome: string
  }

  export type FandomUncheckedCreateWithoutFicsInput = {
    id?: number
    nome: string
  }

  export type FandomCreateOrConnectWithoutFicsInput = {
    where: FandomWhereUniqueInput
    create: XOR<FandomCreateWithoutFicsInput, FandomUncheckedCreateWithoutFicsInput>
  }

  export type ItemEstanteUpsertWithWhereUniqueWithoutFanficInput = {
    where: ItemEstanteWhereUniqueInput
    update: XOR<ItemEstanteUpdateWithoutFanficInput, ItemEstanteUncheckedUpdateWithoutFanficInput>
    create: XOR<ItemEstanteCreateWithoutFanficInput, ItemEstanteUncheckedCreateWithoutFanficInput>
  }

  export type ItemEstanteUpdateWithWhereUniqueWithoutFanficInput = {
    where: ItemEstanteWhereUniqueInput
    data: XOR<ItemEstanteUpdateWithoutFanficInput, ItemEstanteUncheckedUpdateWithoutFanficInput>
  }

  export type ItemEstanteUpdateManyWithWhereWithoutFanficInput = {
    where: ItemEstanteScalarWhereInput
    data: XOR<ItemEstanteUpdateManyMutationInput, ItemEstanteUncheckedUpdateManyWithoutFanficInput>
  }

  export type ItemEstanteScalarWhereInput = {
    AND?: ItemEstanteScalarWhereInput | ItemEstanteScalarWhereInput[]
    OR?: ItemEstanteScalarWhereInput[]
    NOT?: ItemEstanteScalarWhereInput | ItemEstanteScalarWhereInput[]
    id?: IntFilter<"ItemEstante"> | number
    status?: StringFilter<"ItemEstante"> | string
    capitulo?: IntFilter<"ItemEstante"> | number
    nota?: IntNullableFilter<"ItemEstante"> | number | null
    resenha?: StringNullableFilter<"ItemEstante"> | string | null
    temSpoiler?: BoolFilter<"ItemEstante"> | boolean
    dataLeitura?: DateTimeFilter<"ItemEstante"> | Date | string
    atualizadoEm?: DateTimeFilter<"ItemEstante"> | Date | string
    estanteId?: IntFilter<"ItemEstante"> | number
    fanficId?: IntFilter<"ItemEstante"> | number
  }

  export type TagUpsertWithWhereUniqueWithoutFicsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutFicsInput, TagUncheckedUpdateWithoutFicsInput>
    create: XOR<TagCreateWithoutFicsInput, TagUncheckedCreateWithoutFicsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutFicsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutFicsInput, TagUncheckedUpdateWithoutFicsInput>
  }

  export type TagUpdateManyWithWhereWithoutFicsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutFicsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    nome?: StringFilter<"Tag"> | string
  }

  export type FandomUpsertWithWhereUniqueWithoutFicsInput = {
    where: FandomWhereUniqueInput
    update: XOR<FandomUpdateWithoutFicsInput, FandomUncheckedUpdateWithoutFicsInput>
    create: XOR<FandomCreateWithoutFicsInput, FandomUncheckedCreateWithoutFicsInput>
  }

  export type FandomUpdateWithWhereUniqueWithoutFicsInput = {
    where: FandomWhereUniqueInput
    data: XOR<FandomUpdateWithoutFicsInput, FandomUncheckedUpdateWithoutFicsInput>
  }

  export type FandomUpdateManyWithWhereWithoutFicsInput = {
    where: FandomScalarWhereInput
    data: XOR<FandomUpdateManyMutationInput, FandomUncheckedUpdateManyWithoutFicsInput>
  }

  export type FandomScalarWhereInput = {
    AND?: FandomScalarWhereInput | FandomScalarWhereInput[]
    OR?: FandomScalarWhereInput[]
    NOT?: FandomScalarWhereInput | FandomScalarWhereInput[]
    id?: IntFilter<"Fandom"> | number
    nome?: StringFilter<"Fandom"> | string
  }

  export type UsuarioCreateWithoutEstantesInput = {
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio?: string | null
    avatar?: string | null
    banner?: string | null
    perfil_privado?: boolean | null
    criadoEm?: Date | string
    termos_aceitos?: boolean
    data_aceite_termos?: Date | string
    seguindo?: SeguidorCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUncheckedCreateWithoutEstantesInput = {
    id?: number
    email: string
    username: string
    nomeExibicao: string
    senha: string
    bio?: string | null
    avatar?: string | null
    banner?: string | null
    perfil_privado?: boolean | null
    criadoEm?: Date | string
    termos_aceitos?: boolean
    data_aceite_termos?: Date | string
    seguindo?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioCreateOrConnectWithoutEstantesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEstantesInput, UsuarioUncheckedCreateWithoutEstantesInput>
  }

  export type ItemEstanteCreateWithoutEstanteInput = {
    status: string
    capitulo?: number
    nota?: number | null
    resenha?: string | null
    temSpoiler?: boolean
    dataLeitura?: Date | string
    atualizadoEm?: Date | string
    fanfic: FanficCreateNestedOneWithoutItensEstanteInput
  }

  export type ItemEstanteUncheckedCreateWithoutEstanteInput = {
    id?: number
    status: string
    capitulo?: number
    nota?: number | null
    resenha?: string | null
    temSpoiler?: boolean
    dataLeitura?: Date | string
    atualizadoEm?: Date | string
    fanficId: number
  }

  export type ItemEstanteCreateOrConnectWithoutEstanteInput = {
    where: ItemEstanteWhereUniqueInput
    create: XOR<ItemEstanteCreateWithoutEstanteInput, ItemEstanteUncheckedCreateWithoutEstanteInput>
  }

  export type ItemEstanteCreateManyEstanteInputEnvelope = {
    data: ItemEstanteCreateManyEstanteInput | ItemEstanteCreateManyEstanteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutEstantesInput = {
    update: XOR<UsuarioUpdateWithoutEstantesInput, UsuarioUncheckedUpdateWithoutEstantesInput>
    create: XOR<UsuarioCreateWithoutEstantesInput, UsuarioUncheckedCreateWithoutEstantesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEstantesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEstantesInput, UsuarioUncheckedUpdateWithoutEstantesInput>
  }

  export type UsuarioUpdateWithoutEstantesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
    seguindo?: SeguidorUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEstantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nomeExibicao?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    perfil_privado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    termos_aceitos?: BoolFieldUpdateOperationsInput | boolean
    data_aceite_termos?: DateTimeFieldUpdateOperationsInput | Date | string
    seguindo?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguindoNestedInput
  }

  export type ItemEstanteUpsertWithWhereUniqueWithoutEstanteInput = {
    where: ItemEstanteWhereUniqueInput
    update: XOR<ItemEstanteUpdateWithoutEstanteInput, ItemEstanteUncheckedUpdateWithoutEstanteInput>
    create: XOR<ItemEstanteCreateWithoutEstanteInput, ItemEstanteUncheckedCreateWithoutEstanteInput>
  }

  export type ItemEstanteUpdateWithWhereUniqueWithoutEstanteInput = {
    where: ItemEstanteWhereUniqueInput
    data: XOR<ItemEstanteUpdateWithoutEstanteInput, ItemEstanteUncheckedUpdateWithoutEstanteInput>
  }

  export type ItemEstanteUpdateManyWithWhereWithoutEstanteInput = {
    where: ItemEstanteScalarWhereInput
    data: XOR<ItemEstanteUpdateManyMutationInput, ItemEstanteUncheckedUpdateManyWithoutEstanteInput>
  }

  export type EstanteCreateWithoutItensInput = {
    nome: string
    privada?: boolean
    usuario: UsuarioCreateNestedOneWithoutEstantesInput
  }

  export type EstanteUncheckedCreateWithoutItensInput = {
    id?: number
    nome: string
    privada?: boolean
    usuarioId: number
  }

  export type EstanteCreateOrConnectWithoutItensInput = {
    where: EstanteWhereUniqueInput
    create: XOR<EstanteCreateWithoutItensInput, EstanteUncheckedCreateWithoutItensInput>
  }

  export type FanficCreateWithoutItensEstanteInput = {
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa?: string | null
    mediaNota?: number
    tags?: TagCreateNestedManyWithoutFicsInput
    fandoms?: FandomCreateNestedManyWithoutFicsInput
  }

  export type FanficUncheckedCreateWithoutItensEstanteInput = {
    id?: number
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa?: string | null
    mediaNota?: number
    tags?: TagUncheckedCreateNestedManyWithoutFicsInput
    fandoms?: FandomUncheckedCreateNestedManyWithoutFicsInput
  }

  export type FanficCreateOrConnectWithoutItensEstanteInput = {
    where: FanficWhereUniqueInput
    create: XOR<FanficCreateWithoutItensEstanteInput, FanficUncheckedCreateWithoutItensEstanteInput>
  }

  export type EstanteUpsertWithoutItensInput = {
    update: XOR<EstanteUpdateWithoutItensInput, EstanteUncheckedUpdateWithoutItensInput>
    create: XOR<EstanteCreateWithoutItensInput, EstanteUncheckedCreateWithoutItensInput>
    where?: EstanteWhereInput
  }

  export type EstanteUpdateToOneWithWhereWithoutItensInput = {
    where?: EstanteWhereInput
    data: XOR<EstanteUpdateWithoutItensInput, EstanteUncheckedUpdateWithoutItensInput>
  }

  export type EstanteUpdateWithoutItensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    privada?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutEstantesNestedInput
  }

  export type EstanteUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    privada?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type FanficUpsertWithoutItensEstanteInput = {
    update: XOR<FanficUpdateWithoutItensEstanteInput, FanficUncheckedUpdateWithoutItensEstanteInput>
    create: XOR<FanficCreateWithoutItensEstanteInput, FanficUncheckedCreateWithoutItensEstanteInput>
    where?: FanficWhereInput
  }

  export type FanficUpdateToOneWithWhereWithoutItensEstanteInput = {
    where?: FanficWhereInput
    data: XOR<FanficUpdateWithoutItensEstanteInput, FanficUncheckedUpdateWithoutItensEstanteInput>
  }

  export type FanficUpdateWithoutItensEstanteInput = {
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
    tags?: TagUpdateManyWithoutFicsNestedInput
    fandoms?: FandomUpdateManyWithoutFicsNestedInput
  }

  export type FanficUncheckedUpdateWithoutItensEstanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutFicsNestedInput
    fandoms?: FandomUncheckedUpdateManyWithoutFicsNestedInput
  }

  export type FanficCreateWithoutTagsInput = {
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa?: string | null
    mediaNota?: number
    itensEstante?: ItemEstanteCreateNestedManyWithoutFanficInput
    fandoms?: FandomCreateNestedManyWithoutFicsInput
  }

  export type FanficUncheckedCreateWithoutTagsInput = {
    id?: number
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa?: string | null
    mediaNota?: number
    itensEstante?: ItemEstanteUncheckedCreateNestedManyWithoutFanficInput
    fandoms?: FandomUncheckedCreateNestedManyWithoutFicsInput
  }

  export type FanficCreateOrConnectWithoutTagsInput = {
    where: FanficWhereUniqueInput
    create: XOR<FanficCreateWithoutTagsInput, FanficUncheckedCreateWithoutTagsInput>
  }

  export type FanficUpsertWithWhereUniqueWithoutTagsInput = {
    where: FanficWhereUniqueInput
    update: XOR<FanficUpdateWithoutTagsInput, FanficUncheckedUpdateWithoutTagsInput>
    create: XOR<FanficCreateWithoutTagsInput, FanficUncheckedCreateWithoutTagsInput>
  }

  export type FanficUpdateWithWhereUniqueWithoutTagsInput = {
    where: FanficWhereUniqueInput
    data: XOR<FanficUpdateWithoutTagsInput, FanficUncheckedUpdateWithoutTagsInput>
  }

  export type FanficUpdateManyWithWhereWithoutTagsInput = {
    where: FanficScalarWhereInput
    data: XOR<FanficUpdateManyMutationInput, FanficUncheckedUpdateManyWithoutTagsInput>
  }

  export type FanficScalarWhereInput = {
    AND?: FanficScalarWhereInput | FanficScalarWhereInput[]
    OR?: FanficScalarWhereInput[]
    NOT?: FanficScalarWhereInput | FanficScalarWhereInput[]
    id?: IntFilter<"Fanfic"> | number
    url?: StringFilter<"Fanfic"> | string
    titulo?: StringFilter<"Fanfic"> | string
    autor?: StringFilter<"Fanfic"> | string
    plataforma?: StringFilter<"Fanfic"> | string
    capa?: StringNullableFilter<"Fanfic"> | string | null
    mediaNota?: FloatFilter<"Fanfic"> | number
  }

  export type FanficCreateWithoutFandomsInput = {
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa?: string | null
    mediaNota?: number
    itensEstante?: ItemEstanteCreateNestedManyWithoutFanficInput
    tags?: TagCreateNestedManyWithoutFicsInput
  }

  export type FanficUncheckedCreateWithoutFandomsInput = {
    id?: number
    url: string
    titulo: string
    autor: string
    plataforma: string
    capa?: string | null
    mediaNota?: number
    itensEstante?: ItemEstanteUncheckedCreateNestedManyWithoutFanficInput
    tags?: TagUncheckedCreateNestedManyWithoutFicsInput
  }

  export type FanficCreateOrConnectWithoutFandomsInput = {
    where: FanficWhereUniqueInput
    create: XOR<FanficCreateWithoutFandomsInput, FanficUncheckedCreateWithoutFandomsInput>
  }

  export type FanficUpsertWithWhereUniqueWithoutFandomsInput = {
    where: FanficWhereUniqueInput
    update: XOR<FanficUpdateWithoutFandomsInput, FanficUncheckedUpdateWithoutFandomsInput>
    create: XOR<FanficCreateWithoutFandomsInput, FanficUncheckedCreateWithoutFandomsInput>
  }

  export type FanficUpdateWithWhereUniqueWithoutFandomsInput = {
    where: FanficWhereUniqueInput
    data: XOR<FanficUpdateWithoutFandomsInput, FanficUncheckedUpdateWithoutFandomsInput>
  }

  export type FanficUpdateManyWithWhereWithoutFandomsInput = {
    where: FanficScalarWhereInput
    data: XOR<FanficUpdateManyMutationInput, FanficUncheckedUpdateManyWithoutFandomsInput>
  }

  export type EstanteCreateManyUsuarioInput = {
    id?: number
    nome: string
    privada?: boolean
  }

  export type SeguidorCreateManySeguidorInput = {
    id?: number
    seguindoId: number
  }

  export type SeguidorCreateManySeguindoInput = {
    id?: number
    seguidorId: number
  }

  export type EstanteUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    privada?: BoolFieldUpdateOperationsInput | boolean
    itens?: ItemEstanteUpdateManyWithoutEstanteNestedInput
  }

  export type EstanteUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    privada?: BoolFieldUpdateOperationsInput | boolean
    itens?: ItemEstanteUncheckedUpdateManyWithoutEstanteNestedInput
  }

  export type EstanteUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    privada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeguidorUpdateWithoutSeguidorInput = {
    seguindo?: UsuarioUpdateOneRequiredWithoutSeguidoresNestedInput
  }

  export type SeguidorUncheckedUpdateWithoutSeguidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    seguindoId?: IntFieldUpdateOperationsInput | number
  }

  export type SeguidorUncheckedUpdateManyWithoutSeguidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    seguindoId?: IntFieldUpdateOperationsInput | number
  }

  export type SeguidorUpdateWithoutSeguindoInput = {
    seguidor?: UsuarioUpdateOneRequiredWithoutSeguindoNestedInput
  }

  export type SeguidorUncheckedUpdateWithoutSeguindoInput = {
    id?: IntFieldUpdateOperationsInput | number
    seguidorId?: IntFieldUpdateOperationsInput | number
  }

  export type SeguidorUncheckedUpdateManyWithoutSeguindoInput = {
    id?: IntFieldUpdateOperationsInput | number
    seguidorId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEstanteCreateManyFanficInput = {
    id?: number
    status: string
    capitulo?: number
    nota?: number | null
    resenha?: string | null
    temSpoiler?: boolean
    dataLeitura?: Date | string
    atualizadoEm?: Date | string
    estanteId: number
  }

  export type ItemEstanteUpdateWithoutFanficInput = {
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    estante?: EstanteUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemEstanteUncheckedUpdateWithoutFanficInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    estanteId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEstanteUncheckedUpdateManyWithoutFanficInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    estanteId?: IntFieldUpdateOperationsInput | number
  }

  export type TagUpdateWithoutFicsInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutFicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyWithoutFicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FandomUpdateWithoutFicsInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FandomUncheckedUpdateWithoutFicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FandomUncheckedUpdateManyWithoutFicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ItemEstanteCreateManyEstanteInput = {
    id?: number
    status: string
    capitulo?: number
    nota?: number | null
    resenha?: string | null
    temSpoiler?: boolean
    dataLeitura?: Date | string
    atualizadoEm?: Date | string
    fanficId: number
  }

  export type ItemEstanteUpdateWithoutEstanteInput = {
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    fanfic?: FanficUpdateOneRequiredWithoutItensEstanteNestedInput
  }

  export type ItemEstanteUncheckedUpdateWithoutEstanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    fanficId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemEstanteUncheckedUpdateManyWithoutEstanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capitulo?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    resenha?: NullableStringFieldUpdateOperationsInput | string | null
    temSpoiler?: BoolFieldUpdateOperationsInput | boolean
    dataLeitura?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    fanficId?: IntFieldUpdateOperationsInput | number
  }

  export type FanficUpdateWithoutTagsInput = {
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
    itensEstante?: ItemEstanteUpdateManyWithoutFanficNestedInput
    fandoms?: FandomUpdateManyWithoutFicsNestedInput
  }

  export type FanficUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
    itensEstante?: ItemEstanteUncheckedUpdateManyWithoutFanficNestedInput
    fandoms?: FandomUncheckedUpdateManyWithoutFicsNestedInput
  }

  export type FanficUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
  }

  export type FanficUpdateWithoutFandomsInput = {
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
    itensEstante?: ItemEstanteUpdateManyWithoutFanficNestedInput
    tags?: TagUpdateManyWithoutFicsNestedInput
  }

  export type FanficUncheckedUpdateWithoutFandomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
    itensEstante?: ItemEstanteUncheckedUpdateManyWithoutFanficNestedInput
    tags?: TagUncheckedUpdateManyWithoutFicsNestedInput
  }

  export type FanficUncheckedUpdateManyWithoutFandomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    plataforma?: StringFieldUpdateOperationsInput | string
    capa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaNota?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}