
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Work
 * 
 */
export type Work = $Result.DefaultSelection<Prisma.$WorkPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model PriceHistory
 * 
 */
export type PriceHistory = $Result.DefaultSelection<Prisma.$PriceHistoryPayload>
/**
 * Model Stockpile
 * 
 */
export type Stockpile = $Result.DefaultSelection<Prisma.$StockpilePayload>
/**
 * Model Movement
 * 
 */
export type Movement = $Result.DefaultSelection<Prisma.$MovementPayload>
/**
 * Model MovementItem
 * 
 */
export type MovementItem = $Result.DefaultSelection<Prisma.$MovementItemPayload>
/**
 * Model Withdrawer
 * 
 */
export type Withdrawer = $Result.DefaultSelection<Prisma.$WithdrawerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.priceHistory`: Exposes CRUD operations for the **PriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceHistories
    * const priceHistories = await prisma.priceHistory.findMany()
    * ```
    */
  get priceHistory(): Prisma.PriceHistoryDelegate<ExtArgs>;

  /**
   * `prisma.stockpile`: Exposes CRUD operations for the **Stockpile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stockpiles
    * const stockpiles = await prisma.stockpile.findMany()
    * ```
    */
  get stockpile(): Prisma.StockpileDelegate<ExtArgs>;

  /**
   * `prisma.movement`: Exposes CRUD operations for the **Movement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movements
    * const movements = await prisma.movement.findMany()
    * ```
    */
  get movement(): Prisma.MovementDelegate<ExtArgs>;

  /**
   * `prisma.movementItem`: Exposes CRUD operations for the **MovementItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovementItems
    * const movementItems = await prisma.movementItem.findMany()
    * ```
    */
  get movementItem(): Prisma.MovementItemDelegate<ExtArgs>;

  /**
   * `prisma.withdrawer`: Exposes CRUD operations for the **Withdrawer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawers
    * const withdrawers = await prisma.withdrawer.findMany()
    * ```
    */
  get withdrawer(): Prisma.WithdrawerDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Client: 'Client',
    Work: 'Work',
    Product: 'Product',
    PriceHistory: 'PriceHistory',
    Stockpile: 'Stockpile',
    Movement: 'Movement',
    MovementItem: 'MovementItem',
    Withdrawer: 'Withdrawer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "client" | "work" | "product" | "priceHistory" | "stockpile" | "movement" | "movementItem" | "withdrawer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Work: {
        payload: Prisma.$WorkPayload<ExtArgs>
        fields: Prisma.WorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findFirst: {
            args: Prisma.WorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findMany: {
            args: Prisma.WorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          create: {
            args: Prisma.WorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          createMany: {
            args: Prisma.WorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          delete: {
            args: Prisma.WorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          update: {
            args: Prisma.WorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          deleteMany: {
            args: Prisma.WorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.WorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      PriceHistory: {
        payload: Prisma.$PriceHistoryPayload<ExtArgs>
        fields: Prisma.PriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.PriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findMany: {
            args: Prisma.PriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          create: {
            args: Prisma.PriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          createMany: {
            args: Prisma.PriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          delete: {
            args: Prisma.PriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          update: {
            args: Prisma.PriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.PriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceHistory>
          }
          groupBy: {
            args: Prisma.PriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryCountAggregateOutputType> | number
          }
        }
      }
      Stockpile: {
        payload: Prisma.$StockpilePayload<ExtArgs>
        fields: Prisma.StockpileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockpileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockpileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload>
          }
          findFirst: {
            args: Prisma.StockpileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockpileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload>
          }
          findMany: {
            args: Prisma.StockpileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload>[]
          }
          create: {
            args: Prisma.StockpileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload>
          }
          createMany: {
            args: Prisma.StockpileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockpileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload>[]
          }
          delete: {
            args: Prisma.StockpileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload>
          }
          update: {
            args: Prisma.StockpileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload>
          }
          deleteMany: {
            args: Prisma.StockpileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockpileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockpileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockpilePayload>
          }
          aggregate: {
            args: Prisma.StockpileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockpile>
          }
          groupBy: {
            args: Prisma.StockpileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockpileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockpileCountArgs<ExtArgs>
            result: $Utils.Optional<StockpileCountAggregateOutputType> | number
          }
        }
      }
      Movement: {
        payload: Prisma.$MovementPayload<ExtArgs>
        fields: Prisma.MovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findFirst: {
            args: Prisma.MovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findMany: {
            args: Prisma.MovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          create: {
            args: Prisma.MovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          createMany: {
            args: Prisma.MovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          delete: {
            args: Prisma.MovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          update: {
            args: Prisma.MovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          deleteMany: {
            args: Prisma.MovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          aggregate: {
            args: Prisma.MovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovement>
          }
          groupBy: {
            args: Prisma.MovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovementCountArgs<ExtArgs>
            result: $Utils.Optional<MovementCountAggregateOutputType> | number
          }
        }
      }
      MovementItem: {
        payload: Prisma.$MovementItemPayload<ExtArgs>
        fields: Prisma.MovementItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovementItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovementItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          findFirst: {
            args: Prisma.MovementItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovementItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          findMany: {
            args: Prisma.MovementItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>[]
          }
          create: {
            args: Prisma.MovementItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          createMany: {
            args: Prisma.MovementItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovementItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>[]
          }
          delete: {
            args: Prisma.MovementItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          update: {
            args: Prisma.MovementItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          deleteMany: {
            args: Prisma.MovementItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovementItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovementItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementItemPayload>
          }
          aggregate: {
            args: Prisma.MovementItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovementItem>
          }
          groupBy: {
            args: Prisma.MovementItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovementItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovementItemCountArgs<ExtArgs>
            result: $Utils.Optional<MovementItemCountAggregateOutputType> | number
          }
        }
      }
      Withdrawer: {
        payload: Prisma.$WithdrawerPayload<ExtArgs>
        fields: Prisma.WithdrawerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload>
          }
          findFirst: {
            args: Prisma.WithdrawerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload>
          }
          findMany: {
            args: Prisma.WithdrawerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload>[]
          }
          create: {
            args: Prisma.WithdrawerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload>
          }
          createMany: {
            args: Prisma.WithdrawerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload>[]
          }
          delete: {
            args: Prisma.WithdrawerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload>
          }
          update: {
            args: Prisma.WithdrawerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WithdrawerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawerPayload>
          }
          aggregate: {
            args: Prisma.WithdrawerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawer>
          }
          groupBy: {
            args: Prisma.WithdrawerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawerCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawerCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    works: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | ClientCountOutputTypeCountWorksArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
  }


  /**
   * Count Type WorkCountOutputType
   */

  export type WorkCountOutputType = {
    movements: number
    stockpiles: number
  }

  export type WorkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | WorkCountOutputTypeCountMovementsArgs
    stockpiles?: boolean | WorkCountOutputTypeCountStockpilesArgs
  }

  // Custom InputTypes
  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCountOutputType
     */
    select?: WorkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
  }

  /**
   * WorkCountOutputType without action
   */
  export type WorkCountOutputTypeCountStockpilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockpileWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    stockpileItems: number
    movementItems: number
    priceHistory: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockpileItems?: boolean | ProductCountOutputTypeCountStockpileItemsArgs
    movementItems?: boolean | ProductCountOutputTypeCountMovementItemsArgs
    priceHistory?: boolean | ProductCountOutputTypeCountPriceHistoryArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockpileItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockpileWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMovementItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
  }


  /**
   * Count Type MovementCountOutputType
   */

  export type MovementCountOutputType = {
    items: number
  }

  export type MovementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MovementCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * MovementCountOutputType without action
   */
  export type MovementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementCountOutputType
     */
    select?: MovementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovementCountOutputType without action
   */
  export type MovementCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementItemWhereInput
  }


  /**
   * Count Type WithdrawerCountOutputType
   */

  export type WithdrawerCountOutputType = {
    movements: number
  }

  export type WithdrawerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | WithdrawerCountOutputTypeCountMovementsArgs
  }

  // Custom InputTypes
  /**
   * WithdrawerCountOutputType without action
   */
  export type WithdrawerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawerCountOutputType
     */
    select?: WithdrawerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WithdrawerCountOutputType without action
   */
  export type WithdrawerCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    dni: string | null
    phone: string | null
    observations: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    dni: string | null
    phone: string | null
    observations: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    dni: number
    phone: number
    observations: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    dni?: true
    phone?: true
    observations?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    dni?: true
    phone?: true
    observations?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    dni?: true
    phone?: true
    observations?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    lastName: string | null
    dni: string | null
    phone: string | null
    observations: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    dni?: boolean
    phone?: boolean
    observations?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    works?: boolean | Client$worksArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    dni?: boolean
    phone?: boolean
    observations?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    dni?: boolean
    phone?: boolean
    observations?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | Client$worksArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      works: Prisma.$WorkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastName: string | null
      dni: string | null
      phone: string | null
      observations: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    works<T extends Client$worksArgs<ExtArgs> = {}>(args?: Subset<T, Client$worksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly dni: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly observations: FieldRef<"Client", 'String'>
    readonly active: FieldRef<"Client", 'Boolean'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.works
   */
  export type Client$worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    cursor?: WorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Work
   */

  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type WorkSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type WorkMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    observations: string | null
    active: boolean | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    observations: string | null
    active: boolean | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkCountAggregateOutputType = {
    id: number
    name: number
    address: number
    observations: number
    active: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type WorkSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type WorkMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    observations?: true
    active?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    observations?: true
    active?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    observations?: true
    active?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Work to aggregate.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type WorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithAggregationInput | WorkOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: WorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _avg?: WorkAvgAggregateInputType
    _sum?: WorkSumAggregateInputType
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }

  export type WorkGroupByOutputType = {
    id: number
    name: string
    address: string | null
    observations: string | null
    active: boolean
    clientId: number
    createdAt: Date
    updatedAt: Date
    _count: WorkCountAggregateOutputType | null
    _avg: WorkAvgAggregateOutputType | null
    _sum: WorkSumAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type WorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    observations?: boolean
    active?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    movements?: boolean | Work$movementsArgs<ExtArgs>
    stockpiles?: boolean | Work$stockpilesArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    observations?: boolean
    active?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    observations?: boolean
    active?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    movements?: boolean | Work$movementsArgs<ExtArgs>
    stockpiles?: boolean | Work$stockpilesArgs<ExtArgs>
    _count?: boolean | WorkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $WorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Work"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      movements: Prisma.$MovementPayload<ExtArgs>[]
      stockpiles: Prisma.$StockpilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      observations: string | null
      active: boolean
      clientId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type WorkGetPayload<S extends boolean | null | undefined | WorkDefaultArgs> = $Result.GetResult<Prisma.$WorkPayload, S>

  type WorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface WorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Work'], meta: { name: 'Work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFindUniqueArgs>(args: SelectSubset<T, WorkFindUniqueArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFindFirstArgs>(args?: SelectSubset<T, WorkFindFirstArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workWithIdOnly = await prisma.work.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFindManyArgs>(args?: SelectSubset<T, WorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends WorkCreateArgs>(args: SelectSubset<T, WorkCreateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Works.
     * @param {WorkCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCreateManyArgs>(args?: SelectSubset<T, WorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {WorkCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const workWithIdOnly = await prisma.work.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends WorkDeleteArgs>(args: SelectSubset<T, WorkDeleteArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkUpdateArgs>(args: SelectSubset<T, WorkUpdateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDeleteManyArgs>(args?: SelectSubset<T, WorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkUpdateManyArgs>(args: SelectSubset<T, WorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
     */
    upsert<T extends WorkUpsertArgs>(args: SelectSubset<T, WorkUpsertArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): Prisma.PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupByArgs} args - Group by arguments.
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
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Work model
   */
  readonly fields: WorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    movements<T extends Work$movementsArgs<ExtArgs> = {}>(args?: Subset<T, Work$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany"> | Null>
    stockpiles<T extends Work$stockpilesArgs<ExtArgs> = {}>(args?: Subset<T, Work$stockpilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Work model
   */ 
  interface WorkFieldRefs {
    readonly id: FieldRef<"Work", 'Int'>
    readonly name: FieldRef<"Work", 'String'>
    readonly address: FieldRef<"Work", 'String'>
    readonly observations: FieldRef<"Work", 'String'>
    readonly active: FieldRef<"Work", 'Boolean'>
    readonly clientId: FieldRef<"Work", 'Int'>
    readonly createdAt: FieldRef<"Work", 'DateTime'>
    readonly updatedAt: FieldRef<"Work", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Work findUnique
   */
  export type WorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findFirst
   */
  export type WorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findMany
   */
  export type WorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work create
   */
  export type WorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to create a Work.
     */
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }

  /**
   * Work createMany
   */
  export type WorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
  }

  /**
   * Work createManyAndReturn
   */
  export type WorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work update
   */
  export type WorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to update a Work.
     */
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
  }

  /**
   * Work upsert
   */
  export type WorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The filter to search for the Work to update in case it exists.
     */
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     */
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }

  /**
   * Work delete
   */
  export type WorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter which Work to delete.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorkWhereInput
  }

  /**
   * Work.movements
   */
  export type Work$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    cursor?: MovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Work.stockpiles
   */
  export type Work$stockpilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    where?: StockpileWhereInput
    orderBy?: StockpileOrderByWithRelationInput | StockpileOrderByWithRelationInput[]
    cursor?: StockpileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockpileScalarFieldEnum | StockpileScalarFieldEnum[]
  }

  /**
   * Work without action
   */
  export type WorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    code: string | null
    description: string | null
    category: string | null
    price: number | null
    active: boolean | null
    lastUpdated: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    code: string | null
    description: string | null
    category: string | null
    price: number | null
    active: boolean | null
    lastUpdated: Date | null
  }

  export type ProductCountAggregateOutputType = {
    code: number
    description: number
    category: number
    price: number
    active: number
    lastUpdated: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    code?: true
    description?: true
    category?: true
    price?: true
    active?: true
    lastUpdated?: true
  }

  export type ProductMaxAggregateInputType = {
    code?: true
    description?: true
    category?: true
    price?: true
    active?: true
    lastUpdated?: true
  }

  export type ProductCountAggregateInputType = {
    code?: true
    description?: true
    category?: true
    price?: true
    active?: true
    lastUpdated?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    code: string
    description: string
    category: string | null
    price: number
    active: boolean
    lastUpdated: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    active?: boolean
    lastUpdated?: boolean
    stockpileItems?: boolean | Product$stockpileItemsArgs<ExtArgs>
    movementItems?: boolean | Product$movementItemsArgs<ExtArgs>
    priceHistory?: boolean | Product$priceHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    active?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    code?: boolean
    description?: boolean
    category?: boolean
    price?: boolean
    active?: boolean
    lastUpdated?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockpileItems?: boolean | Product$stockpileItemsArgs<ExtArgs>
    movementItems?: boolean | Product$movementItemsArgs<ExtArgs>
    priceHistory?: boolean | Product$priceHistoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      stockpileItems: Prisma.$StockpilePayload<ExtArgs>[]
      movementItems: Prisma.$MovementItemPayload<ExtArgs>[]
      priceHistory: Prisma.$PriceHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      description: string
      category: string | null
      price: number
      active: boolean
      lastUpdated: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const productWithCodeOnly = await prisma.product.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `code`
     * const productWithCodeOnly = await prisma.product.createManyAndReturn({ 
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockpileItems<T extends Product$stockpileItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockpileItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "findMany"> | Null>
    movementItems<T extends Product$movementItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$movementItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findMany"> | Null>
    priceHistory<T extends Product$priceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly code: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly active: FieldRef<"Product", 'Boolean'>
    readonly lastUpdated: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.stockpileItems
   */
  export type Product$stockpileItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    where?: StockpileWhereInput
    orderBy?: StockpileOrderByWithRelationInput | StockpileOrderByWithRelationInput[]
    cursor?: StockpileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockpileScalarFieldEnum | StockpileScalarFieldEnum[]
  }

  /**
   * Product.movementItems
   */
  export type Product$movementItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    where?: MovementItemWhereInput
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    cursor?: MovementItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * Product.priceHistory
   */
  export type Product$priceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    cursor?: PriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model PriceHistory
   */

  export type AggregatePriceHistory = {
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  export type PriceHistoryAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PriceHistorySumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type PriceHistoryMinAggregateOutputType = {
    id: number | null
    productId: string | null
    price: number | null
    date: Date | null
  }

  export type PriceHistoryMaxAggregateOutputType = {
    id: number | null
    productId: string | null
    price: number | null
    date: Date | null
  }

  export type PriceHistoryCountAggregateOutputType = {
    id: number
    productId: number
    price: number
    date: number
    _all: number
  }


  export type PriceHistoryAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PriceHistorySumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PriceHistoryMinAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    date?: true
  }

  export type PriceHistoryMaxAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    date?: true
  }

  export type PriceHistoryCountAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    date?: true
    _all?: true
  }

  export type PriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistory to aggregate.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceHistories
    **/
    _count?: true | PriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type GetPriceHistoryAggregateType<T extends PriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceHistory[P]>
      : GetScalarType<T[P], AggregatePriceHistory[P]>
  }




  export type PriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithAggregationInput | PriceHistoryOrderByWithAggregationInput[]
    by: PriceHistoryScalarFieldEnum[] | PriceHistoryScalarFieldEnum
    having?: PriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceHistoryCountAggregateInputType | true
    _avg?: PriceHistoryAvgAggregateInputType
    _sum?: PriceHistorySumAggregateInputType
    _min?: PriceHistoryMinAggregateInputType
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type PriceHistoryGroupByOutputType = {
    id: number
    productId: string
    price: number
    date: Date
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  type GetPriceHistoryGroupByPayload<T extends PriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    price?: boolean
    date?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    price?: boolean
    date?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectScalar = {
    id?: boolean
    productId?: boolean
    price?: boolean
    date?: boolean
  }

  export type PriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PriceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceHistory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: string
      price: number
      date: Date
    }, ExtArgs["result"]["priceHistory"]>
    composites: {}
  }

  type PriceHistoryGetPayload<S extends boolean | null | undefined | PriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$PriceHistoryPayload, S>

  type PriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceHistoryCountAggregateInputType | true
    }

  export interface PriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceHistory'], meta: { name: 'PriceHistory' } }
    /**
     * Find zero or one PriceHistory that matches the filter.
     * @param {PriceHistoryFindUniqueArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceHistoryFindUniqueArgs>(args: SelectSubset<T, PriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PriceHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceHistoryFindFirstArgs>(args?: SelectSubset<T, PriceHistoryFindFirstArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany()
     * 
     * // Get first 10 PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceHistoryFindManyArgs>(args?: SelectSubset<T, PriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PriceHistory.
     * @param {PriceHistoryCreateArgs} args - Arguments to create a PriceHistory.
     * @example
     * // Create one PriceHistory
     * const PriceHistory = await prisma.priceHistory.create({
     *   data: {
     *     // ... data to create a PriceHistory
     *   }
     * })
     * 
     */
    create<T extends PriceHistoryCreateArgs>(args: SelectSubset<T, PriceHistoryCreateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PriceHistories.
     * @param {PriceHistoryCreateManyArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceHistoryCreateManyArgs>(args?: SelectSubset<T, PriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceHistories and returns the data saved in the database.
     * @param {PriceHistoryCreateManyAndReturnArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceHistories and only return the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PriceHistory.
     * @param {PriceHistoryDeleteArgs} args - Arguments to delete one PriceHistory.
     * @example
     * // Delete one PriceHistory
     * const PriceHistory = await prisma.priceHistory.delete({
     *   where: {
     *     // ... filter to delete one PriceHistory
     *   }
     * })
     * 
     */
    delete<T extends PriceHistoryDeleteArgs>(args: SelectSubset<T, PriceHistoryDeleteArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PriceHistory.
     * @param {PriceHistoryUpdateArgs} args - Arguments to update one PriceHistory.
     * @example
     * // Update one PriceHistory
     * const priceHistory = await prisma.priceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceHistoryUpdateArgs>(args: SelectSubset<T, PriceHistoryUpdateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PriceHistories.
     * @param {PriceHistoryDeleteManyArgs} args - Arguments to filter PriceHistories to delete.
     * @example
     * // Delete a few PriceHistories
     * const { count } = await prisma.priceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceHistoryDeleteManyArgs>(args?: SelectSubset<T, PriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceHistoryUpdateManyArgs>(args: SelectSubset<T, PriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceHistory.
     * @param {PriceHistoryUpsertArgs} args - Arguments to update or create a PriceHistory.
     * @example
     * // Update or create a PriceHistory
     * const priceHistory = await prisma.priceHistory.upsert({
     *   create: {
     *     // ... data to create a PriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends PriceHistoryUpsertArgs>(args: SelectSubset<T, PriceHistoryUpsertArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryCountArgs} args - Arguments to filter PriceHistories to count.
     * @example
     * // Count the number of PriceHistories
     * const count = await prisma.priceHistory.count({
     *   where: {
     *     // ... the filter for the PriceHistories we want to count
     *   }
     * })
    **/
    count<T extends PriceHistoryCountArgs>(
      args?: Subset<T, PriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceHistoryAggregateArgs>(args: Subset<T, PriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetPriceHistoryAggregateType<T>>

    /**
     * Group by PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryGroupByArgs} args - Group by arguments.
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
      T extends PriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PriceHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceHistory model
   */
  readonly fields: PriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PriceHistory model
   */ 
  interface PriceHistoryFieldRefs {
    readonly id: FieldRef<"PriceHistory", 'Int'>
    readonly productId: FieldRef<"PriceHistory", 'String'>
    readonly price: FieldRef<"PriceHistory", 'Float'>
    readonly date: FieldRef<"PriceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceHistory findUnique
   */
  export type PriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findUniqueOrThrow
   */
  export type PriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findFirst
   */
  export type PriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findFirstOrThrow
   */
  export type PriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findMany
   */
  export type PriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistories to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory create
   */
  export type PriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceHistory.
     */
    data: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
  }

  /**
   * PriceHistory createMany
   */
  export type PriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
  }

  /**
   * PriceHistory createManyAndReturn
   */
  export type PriceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceHistory update
   */
  export type PriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceHistory.
     */
    data: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which PriceHistory to update.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory updateMany
   */
  export type PriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput
  }

  /**
   * PriceHistory upsert
   */
  export type PriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceHistory to update in case it exists.
     */
    where: PriceHistoryWhereUniqueInput
    /**
     * In case the PriceHistory found by the `where` argument doesn't exist, create a new PriceHistory with this data.
     */
    create: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
    /**
     * In case the PriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
  }

  /**
   * PriceHistory delete
   */
  export type PriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which PriceHistory to delete.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory deleteMany
   */
  export type PriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistories to delete
     */
    where?: PriceHistoryWhereInput
  }

  /**
   * PriceHistory without action
   */
  export type PriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Stockpile
   */

  export type AggregateStockpile = {
    _count: StockpileCountAggregateOutputType | null
    _avg: StockpileAvgAggregateOutputType | null
    _sum: StockpileSumAggregateOutputType | null
    _min: StockpileMinAggregateOutputType | null
    _max: StockpileMaxAggregateOutputType | null
  }

  export type StockpileAvgAggregateOutputType = {
    id: number | null
    workId: number | null
    quantity: number | null
    price: number | null
    withdrawn: number | null
  }

  export type StockpileSumAggregateOutputType = {
    id: number | null
    workId: number | null
    quantity: number | null
    price: number | null
    withdrawn: number | null
  }

  export type StockpileMinAggregateOutputType = {
    id: number | null
    workId: number | null
    productId: string | null
    quantity: number | null
    price: number | null
    withdrawn: number | null
    date: Date | null
    observations: string | null
  }

  export type StockpileMaxAggregateOutputType = {
    id: number | null
    workId: number | null
    productId: string | null
    quantity: number | null
    price: number | null
    withdrawn: number | null
    date: Date | null
    observations: string | null
  }

  export type StockpileCountAggregateOutputType = {
    id: number
    workId: number
    productId: number
    quantity: number
    price: number
    withdrawn: number
    date: number
    observations: number
    _all: number
  }


  export type StockpileAvgAggregateInputType = {
    id?: true
    workId?: true
    quantity?: true
    price?: true
    withdrawn?: true
  }

  export type StockpileSumAggregateInputType = {
    id?: true
    workId?: true
    quantity?: true
    price?: true
    withdrawn?: true
  }

  export type StockpileMinAggregateInputType = {
    id?: true
    workId?: true
    productId?: true
    quantity?: true
    price?: true
    withdrawn?: true
    date?: true
    observations?: true
  }

  export type StockpileMaxAggregateInputType = {
    id?: true
    workId?: true
    productId?: true
    quantity?: true
    price?: true
    withdrawn?: true
    date?: true
    observations?: true
  }

  export type StockpileCountAggregateInputType = {
    id?: true
    workId?: true
    productId?: true
    quantity?: true
    price?: true
    withdrawn?: true
    date?: true
    observations?: true
    _all?: true
  }

  export type StockpileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stockpile to aggregate.
     */
    where?: StockpileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stockpiles to fetch.
     */
    orderBy?: StockpileOrderByWithRelationInput | StockpileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockpileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stockpiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stockpiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stockpiles
    **/
    _count?: true | StockpileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockpileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockpileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockpileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockpileMaxAggregateInputType
  }

  export type GetStockpileAggregateType<T extends StockpileAggregateArgs> = {
        [P in keyof T & keyof AggregateStockpile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockpile[P]>
      : GetScalarType<T[P], AggregateStockpile[P]>
  }




  export type StockpileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockpileWhereInput
    orderBy?: StockpileOrderByWithAggregationInput | StockpileOrderByWithAggregationInput[]
    by: StockpileScalarFieldEnum[] | StockpileScalarFieldEnum
    having?: StockpileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockpileCountAggregateInputType | true
    _avg?: StockpileAvgAggregateInputType
    _sum?: StockpileSumAggregateInputType
    _min?: StockpileMinAggregateInputType
    _max?: StockpileMaxAggregateInputType
  }

  export type StockpileGroupByOutputType = {
    id: number
    workId: number
    productId: string
    quantity: number
    price: number
    withdrawn: number
    date: Date
    observations: string | null
    _count: StockpileCountAggregateOutputType | null
    _avg: StockpileAvgAggregateOutputType | null
    _sum: StockpileSumAggregateOutputType | null
    _min: StockpileMinAggregateOutputType | null
    _max: StockpileMaxAggregateOutputType | null
  }

  type GetStockpileGroupByPayload<T extends StockpileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockpileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockpileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockpileGroupByOutputType[P]>
            : GetScalarType<T[P], StockpileGroupByOutputType[P]>
        }
      >
    >


  export type StockpileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    withdrawn?: boolean
    date?: boolean
    observations?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockpile"]>

  export type StockpileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    withdrawn?: boolean
    date?: boolean
    observations?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockpile"]>

  export type StockpileSelectScalar = {
    id?: boolean
    workId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    withdrawn?: boolean
    date?: boolean
    observations?: boolean
  }

  export type StockpileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StockpileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StockpilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stockpile"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workId: number
      productId: string
      quantity: number
      price: number
      withdrawn: number
      date: Date
      observations: string | null
    }, ExtArgs["result"]["stockpile"]>
    composites: {}
  }

  type StockpileGetPayload<S extends boolean | null | undefined | StockpileDefaultArgs> = $Result.GetResult<Prisma.$StockpilePayload, S>

  type StockpileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockpileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockpileCountAggregateInputType | true
    }

  export interface StockpileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stockpile'], meta: { name: 'Stockpile' } }
    /**
     * Find zero or one Stockpile that matches the filter.
     * @param {StockpileFindUniqueArgs} args - Arguments to find a Stockpile
     * @example
     * // Get one Stockpile
     * const stockpile = await prisma.stockpile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockpileFindUniqueArgs>(args: SelectSubset<T, StockpileFindUniqueArgs<ExtArgs>>): Prisma__StockpileClient<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stockpile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockpileFindUniqueOrThrowArgs} args - Arguments to find a Stockpile
     * @example
     * // Get one Stockpile
     * const stockpile = await prisma.stockpile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockpileFindUniqueOrThrowArgs>(args: SelectSubset<T, StockpileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockpileClient<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stockpile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockpileFindFirstArgs} args - Arguments to find a Stockpile
     * @example
     * // Get one Stockpile
     * const stockpile = await prisma.stockpile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockpileFindFirstArgs>(args?: SelectSubset<T, StockpileFindFirstArgs<ExtArgs>>): Prisma__StockpileClient<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stockpile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockpileFindFirstOrThrowArgs} args - Arguments to find a Stockpile
     * @example
     * // Get one Stockpile
     * const stockpile = await prisma.stockpile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockpileFindFirstOrThrowArgs>(args?: SelectSubset<T, StockpileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockpileClient<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stockpiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockpileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stockpiles
     * const stockpiles = await prisma.stockpile.findMany()
     * 
     * // Get first 10 Stockpiles
     * const stockpiles = await prisma.stockpile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockpileWithIdOnly = await prisma.stockpile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockpileFindManyArgs>(args?: SelectSubset<T, StockpileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stockpile.
     * @param {StockpileCreateArgs} args - Arguments to create a Stockpile.
     * @example
     * // Create one Stockpile
     * const Stockpile = await prisma.stockpile.create({
     *   data: {
     *     // ... data to create a Stockpile
     *   }
     * })
     * 
     */
    create<T extends StockpileCreateArgs>(args: SelectSubset<T, StockpileCreateArgs<ExtArgs>>): Prisma__StockpileClient<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stockpiles.
     * @param {StockpileCreateManyArgs} args - Arguments to create many Stockpiles.
     * @example
     * // Create many Stockpiles
     * const stockpile = await prisma.stockpile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockpileCreateManyArgs>(args?: SelectSubset<T, StockpileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stockpiles and returns the data saved in the database.
     * @param {StockpileCreateManyAndReturnArgs} args - Arguments to create many Stockpiles.
     * @example
     * // Create many Stockpiles
     * const stockpile = await prisma.stockpile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stockpiles and only return the `id`
     * const stockpileWithIdOnly = await prisma.stockpile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockpileCreateManyAndReturnArgs>(args?: SelectSubset<T, StockpileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Stockpile.
     * @param {StockpileDeleteArgs} args - Arguments to delete one Stockpile.
     * @example
     * // Delete one Stockpile
     * const Stockpile = await prisma.stockpile.delete({
     *   where: {
     *     // ... filter to delete one Stockpile
     *   }
     * })
     * 
     */
    delete<T extends StockpileDeleteArgs>(args: SelectSubset<T, StockpileDeleteArgs<ExtArgs>>): Prisma__StockpileClient<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stockpile.
     * @param {StockpileUpdateArgs} args - Arguments to update one Stockpile.
     * @example
     * // Update one Stockpile
     * const stockpile = await prisma.stockpile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockpileUpdateArgs>(args: SelectSubset<T, StockpileUpdateArgs<ExtArgs>>): Prisma__StockpileClient<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stockpiles.
     * @param {StockpileDeleteManyArgs} args - Arguments to filter Stockpiles to delete.
     * @example
     * // Delete a few Stockpiles
     * const { count } = await prisma.stockpile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockpileDeleteManyArgs>(args?: SelectSubset<T, StockpileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stockpiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockpileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stockpiles
     * const stockpile = await prisma.stockpile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockpileUpdateManyArgs>(args: SelectSubset<T, StockpileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stockpile.
     * @param {StockpileUpsertArgs} args - Arguments to update or create a Stockpile.
     * @example
     * // Update or create a Stockpile
     * const stockpile = await prisma.stockpile.upsert({
     *   create: {
     *     // ... data to create a Stockpile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stockpile we want to update
     *   }
     * })
     */
    upsert<T extends StockpileUpsertArgs>(args: SelectSubset<T, StockpileUpsertArgs<ExtArgs>>): Prisma__StockpileClient<$Result.GetResult<Prisma.$StockpilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stockpiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockpileCountArgs} args - Arguments to filter Stockpiles to count.
     * @example
     * // Count the number of Stockpiles
     * const count = await prisma.stockpile.count({
     *   where: {
     *     // ... the filter for the Stockpiles we want to count
     *   }
     * })
    **/
    count<T extends StockpileCountArgs>(
      args?: Subset<T, StockpileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockpileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stockpile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockpileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockpileAggregateArgs>(args: Subset<T, StockpileAggregateArgs>): Prisma.PrismaPromise<GetStockpileAggregateType<T>>

    /**
     * Group by Stockpile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockpileGroupByArgs} args - Group by arguments.
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
      T extends StockpileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockpileGroupByArgs['orderBy'] }
        : { orderBy?: StockpileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockpileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockpileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stockpile model
   */
  readonly fields: StockpileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stockpile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockpileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Stockpile model
   */ 
  interface StockpileFieldRefs {
    readonly id: FieldRef<"Stockpile", 'Int'>
    readonly workId: FieldRef<"Stockpile", 'Int'>
    readonly productId: FieldRef<"Stockpile", 'String'>
    readonly quantity: FieldRef<"Stockpile", 'Float'>
    readonly price: FieldRef<"Stockpile", 'Float'>
    readonly withdrawn: FieldRef<"Stockpile", 'Float'>
    readonly date: FieldRef<"Stockpile", 'DateTime'>
    readonly observations: FieldRef<"Stockpile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Stockpile findUnique
   */
  export type StockpileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    /**
     * Filter, which Stockpile to fetch.
     */
    where: StockpileWhereUniqueInput
  }

  /**
   * Stockpile findUniqueOrThrow
   */
  export type StockpileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    /**
     * Filter, which Stockpile to fetch.
     */
    where: StockpileWhereUniqueInput
  }

  /**
   * Stockpile findFirst
   */
  export type StockpileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    /**
     * Filter, which Stockpile to fetch.
     */
    where?: StockpileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stockpiles to fetch.
     */
    orderBy?: StockpileOrderByWithRelationInput | StockpileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stockpiles.
     */
    cursor?: StockpileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stockpiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stockpiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stockpiles.
     */
    distinct?: StockpileScalarFieldEnum | StockpileScalarFieldEnum[]
  }

  /**
   * Stockpile findFirstOrThrow
   */
  export type StockpileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    /**
     * Filter, which Stockpile to fetch.
     */
    where?: StockpileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stockpiles to fetch.
     */
    orderBy?: StockpileOrderByWithRelationInput | StockpileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stockpiles.
     */
    cursor?: StockpileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stockpiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stockpiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stockpiles.
     */
    distinct?: StockpileScalarFieldEnum | StockpileScalarFieldEnum[]
  }

  /**
   * Stockpile findMany
   */
  export type StockpileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    /**
     * Filter, which Stockpiles to fetch.
     */
    where?: StockpileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stockpiles to fetch.
     */
    orderBy?: StockpileOrderByWithRelationInput | StockpileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stockpiles.
     */
    cursor?: StockpileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stockpiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stockpiles.
     */
    skip?: number
    distinct?: StockpileScalarFieldEnum | StockpileScalarFieldEnum[]
  }

  /**
   * Stockpile create
   */
  export type StockpileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    /**
     * The data needed to create a Stockpile.
     */
    data: XOR<StockpileCreateInput, StockpileUncheckedCreateInput>
  }

  /**
   * Stockpile createMany
   */
  export type StockpileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stockpiles.
     */
    data: StockpileCreateManyInput | StockpileCreateManyInput[]
  }

  /**
   * Stockpile createManyAndReturn
   */
  export type StockpileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stockpiles.
     */
    data: StockpileCreateManyInput | StockpileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stockpile update
   */
  export type StockpileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    /**
     * The data needed to update a Stockpile.
     */
    data: XOR<StockpileUpdateInput, StockpileUncheckedUpdateInput>
    /**
     * Choose, which Stockpile to update.
     */
    where: StockpileWhereUniqueInput
  }

  /**
   * Stockpile updateMany
   */
  export type StockpileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stockpiles.
     */
    data: XOR<StockpileUpdateManyMutationInput, StockpileUncheckedUpdateManyInput>
    /**
     * Filter which Stockpiles to update
     */
    where?: StockpileWhereInput
  }

  /**
   * Stockpile upsert
   */
  export type StockpileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    /**
     * The filter to search for the Stockpile to update in case it exists.
     */
    where: StockpileWhereUniqueInput
    /**
     * In case the Stockpile found by the `where` argument doesn't exist, create a new Stockpile with this data.
     */
    create: XOR<StockpileCreateInput, StockpileUncheckedCreateInput>
    /**
     * In case the Stockpile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockpileUpdateInput, StockpileUncheckedUpdateInput>
  }

  /**
   * Stockpile delete
   */
  export type StockpileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
    /**
     * Filter which Stockpile to delete.
     */
    where: StockpileWhereUniqueInput
  }

  /**
   * Stockpile deleteMany
   */
  export type StockpileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stockpiles to delete
     */
    where?: StockpileWhereInput
  }

  /**
   * Stockpile without action
   */
  export type StockpileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stockpile
     */
    select?: StockpileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockpileInclude<ExtArgs> | null
  }


  /**
   * Model Movement
   */

  export type AggregateMovement = {
    _count: MovementCountAggregateOutputType | null
    _avg: MovementAvgAggregateOutputType | null
    _sum: MovementSumAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  export type MovementAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    workId: number | null
    withdrawerId: number | null
  }

  export type MovementSumAggregateOutputType = {
    id: number | null
    amount: number | null
    workId: number | null
    withdrawerId: number | null
  }

  export type MovementMinAggregateOutputType = {
    id: number | null
    type: string | null
    amount: number | null
    date: Date | null
    workId: number | null
    withdrawerId: number | null
    observations: string | null
  }

  export type MovementMaxAggregateOutputType = {
    id: number | null
    type: string | null
    amount: number | null
    date: Date | null
    workId: number | null
    withdrawerId: number | null
    observations: string | null
  }

  export type MovementCountAggregateOutputType = {
    id: number
    type: number
    amount: number
    date: number
    workId: number
    withdrawerId: number
    observations: number
    _all: number
  }


  export type MovementAvgAggregateInputType = {
    id?: true
    amount?: true
    workId?: true
    withdrawerId?: true
  }

  export type MovementSumAggregateInputType = {
    id?: true
    amount?: true
    workId?: true
    withdrawerId?: true
  }

  export type MovementMinAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    date?: true
    workId?: true
    withdrawerId?: true
    observations?: true
  }

  export type MovementMaxAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    date?: true
    workId?: true
    withdrawerId?: true
    observations?: true
  }

  export type MovementCountAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    date?: true
    workId?: true
    withdrawerId?: true
    observations?: true
    _all?: true
  }

  export type MovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movement to aggregate.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movements
    **/
    _count?: true | MovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovementMaxAggregateInputType
  }

  export type GetMovementAggregateType<T extends MovementAggregateArgs> = {
        [P in keyof T & keyof AggregateMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovement[P]>
      : GetScalarType<T[P], AggregateMovement[P]>
  }




  export type MovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithAggregationInput | MovementOrderByWithAggregationInput[]
    by: MovementScalarFieldEnum[] | MovementScalarFieldEnum
    having?: MovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovementCountAggregateInputType | true
    _avg?: MovementAvgAggregateInputType
    _sum?: MovementSumAggregateInputType
    _min?: MovementMinAggregateInputType
    _max?: MovementMaxAggregateInputType
  }

  export type MovementGroupByOutputType = {
    id: number
    type: string
    amount: number | null
    date: Date
    workId: number
    withdrawerId: number | null
    observations: string | null
    _count: MovementCountAggregateOutputType | null
    _avg: MovementAvgAggregateOutputType | null
    _sum: MovementSumAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  type GetMovementGroupByPayload<T extends MovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovementGroupByOutputType[P]>
            : GetScalarType<T[P], MovementGroupByOutputType[P]>
        }
      >
    >


  export type MovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    workId?: boolean
    withdrawerId?: boolean
    observations?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    items?: boolean | Movement$itemsArgs<ExtArgs>
    withdrawer?: boolean | Movement$withdrawerArgs<ExtArgs>
    _count?: boolean | MovementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    workId?: boolean
    withdrawerId?: boolean
    observations?: boolean
    work?: boolean | WorkDefaultArgs<ExtArgs>
    withdrawer?: boolean | Movement$withdrawerArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectScalar = {
    id?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    workId?: boolean
    withdrawerId?: boolean
    observations?: boolean
  }

  export type MovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    items?: boolean | Movement$itemsArgs<ExtArgs>
    withdrawer?: boolean | Movement$withdrawerArgs<ExtArgs>
    _count?: boolean | MovementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorkDefaultArgs<ExtArgs>
    withdrawer?: boolean | Movement$withdrawerArgs<ExtArgs>
  }

  export type $MovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movement"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>
      items: Prisma.$MovementItemPayload<ExtArgs>[]
      withdrawer: Prisma.$WithdrawerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      amount: number | null
      date: Date
      workId: number
      withdrawerId: number | null
      observations: string | null
    }, ExtArgs["result"]["movement"]>
    composites: {}
  }

  type MovementGetPayload<S extends boolean | null | undefined | MovementDefaultArgs> = $Result.GetResult<Prisma.$MovementPayload, S>

  type MovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovementCountAggregateInputType | true
    }

  export interface MovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movement'], meta: { name: 'Movement' } }
    /**
     * Find zero or one Movement that matches the filter.
     * @param {MovementFindUniqueArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovementFindUniqueArgs>(args: SelectSubset<T, MovementFindUniqueArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Movement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MovementFindUniqueOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovementFindUniqueOrThrowArgs>(args: SelectSubset<T, MovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Movement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovementFindFirstArgs>(args?: SelectSubset<T, MovementFindFirstArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Movement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovementFindFirstOrThrowArgs>(args?: SelectSubset<T, MovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Movements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movements
     * const movements = await prisma.movement.findMany()
     * 
     * // Get first 10 Movements
     * const movements = await prisma.movement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movementWithIdOnly = await prisma.movement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovementFindManyArgs>(args?: SelectSubset<T, MovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Movement.
     * @param {MovementCreateArgs} args - Arguments to create a Movement.
     * @example
     * // Create one Movement
     * const Movement = await prisma.movement.create({
     *   data: {
     *     // ... data to create a Movement
     *   }
     * })
     * 
     */
    create<T extends MovementCreateArgs>(args: SelectSubset<T, MovementCreateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Movements.
     * @param {MovementCreateManyArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovementCreateManyArgs>(args?: SelectSubset<T, MovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movements and returns the data saved in the database.
     * @param {MovementCreateManyAndReturnArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movements and only return the `id`
     * const movementWithIdOnly = await prisma.movement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovementCreateManyAndReturnArgs>(args?: SelectSubset<T, MovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Movement.
     * @param {MovementDeleteArgs} args - Arguments to delete one Movement.
     * @example
     * // Delete one Movement
     * const Movement = await prisma.movement.delete({
     *   where: {
     *     // ... filter to delete one Movement
     *   }
     * })
     * 
     */
    delete<T extends MovementDeleteArgs>(args: SelectSubset<T, MovementDeleteArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Movement.
     * @param {MovementUpdateArgs} args - Arguments to update one Movement.
     * @example
     * // Update one Movement
     * const movement = await prisma.movement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovementUpdateArgs>(args: SelectSubset<T, MovementUpdateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Movements.
     * @param {MovementDeleteManyArgs} args - Arguments to filter Movements to delete.
     * @example
     * // Delete a few Movements
     * const { count } = await prisma.movement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovementDeleteManyArgs>(args?: SelectSubset<T, MovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movements
     * const movement = await prisma.movement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovementUpdateManyArgs>(args: SelectSubset<T, MovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movement.
     * @param {MovementUpsertArgs} args - Arguments to update or create a Movement.
     * @example
     * // Update or create a Movement
     * const movement = await prisma.movement.upsert({
     *   create: {
     *     // ... data to create a Movement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movement we want to update
     *   }
     * })
     */
    upsert<T extends MovementUpsertArgs>(args: SelectSubset<T, MovementUpsertArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementCountArgs} args - Arguments to filter Movements to count.
     * @example
     * // Count the number of Movements
     * const count = await prisma.movement.count({
     *   where: {
     *     // ... the filter for the Movements we want to count
     *   }
     * })
    **/
    count<T extends MovementCountArgs>(
      args?: Subset<T, MovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovementAggregateArgs>(args: Subset<T, MovementAggregateArgs>): Prisma.PrismaPromise<GetMovementAggregateType<T>>

    /**
     * Group by Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementGroupByArgs} args - Group by arguments.
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
      T extends MovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovementGroupByArgs['orderBy'] }
        : { orderBy?: MovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movement model
   */
  readonly fields: MovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends WorkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDefaultArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Movement$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Movement$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findMany"> | Null>
    withdrawer<T extends Movement$withdrawerArgs<ExtArgs> = {}>(args?: Subset<T, Movement$withdrawerArgs<ExtArgs>>): Prisma__WithdrawerClient<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Movement model
   */ 
  interface MovementFieldRefs {
    readonly id: FieldRef<"Movement", 'Int'>
    readonly type: FieldRef<"Movement", 'String'>
    readonly amount: FieldRef<"Movement", 'Float'>
    readonly date: FieldRef<"Movement", 'DateTime'>
    readonly workId: FieldRef<"Movement", 'Int'>
    readonly withdrawerId: FieldRef<"Movement", 'Int'>
    readonly observations: FieldRef<"Movement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movement findUnique
   */
  export type MovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findUniqueOrThrow
   */
  export type MovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findFirst
   */
  export type MovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findFirstOrThrow
   */
  export type MovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findMany
   */
  export type MovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movements to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement create
   */
  export type MovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to create a Movement.
     */
    data: XOR<MovementCreateInput, MovementUncheckedCreateInput>
  }

  /**
   * Movement createMany
   */
  export type MovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
  }

  /**
   * Movement createManyAndReturn
   */
  export type MovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movement update
   */
  export type MovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to update a Movement.
     */
    data: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
    /**
     * Choose, which Movement to update.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement updateMany
   */
  export type MovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movements.
     */
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyInput>
    /**
     * Filter which Movements to update
     */
    where?: MovementWhereInput
  }

  /**
   * Movement upsert
   */
  export type MovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The filter to search for the Movement to update in case it exists.
     */
    where: MovementWhereUniqueInput
    /**
     * In case the Movement found by the `where` argument doesn't exist, create a new Movement with this data.
     */
    create: XOR<MovementCreateInput, MovementUncheckedCreateInput>
    /**
     * In case the Movement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
  }

  /**
   * Movement delete
   */
  export type MovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter which Movement to delete.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement deleteMany
   */
  export type MovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movements to delete
     */
    where?: MovementWhereInput
  }

  /**
   * Movement.items
   */
  export type Movement$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    where?: MovementItemWhereInput
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    cursor?: MovementItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * Movement.withdrawer
   */
  export type Movement$withdrawerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    where?: WithdrawerWhereInput
  }

  /**
   * Movement without action
   */
  export type MovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
  }


  /**
   * Model MovementItem
   */

  export type AggregateMovementItem = {
    _count: MovementItemCountAggregateOutputType | null
    _avg: MovementItemAvgAggregateOutputType | null
    _sum: MovementItemSumAggregateOutputType | null
    _min: MovementItemMinAggregateOutputType | null
    _max: MovementItemMaxAggregateOutputType | null
  }

  export type MovementItemAvgAggregateOutputType = {
    id: number | null
    movementId: number | null
    quantity: number | null
    price: number | null
  }

  export type MovementItemSumAggregateOutputType = {
    id: number | null
    movementId: number | null
    quantity: number | null
    price: number | null
  }

  export type MovementItemMinAggregateOutputType = {
    id: number | null
    movementId: number | null
    productId: string | null
    quantity: number | null
    price: number | null
  }

  export type MovementItemMaxAggregateOutputType = {
    id: number | null
    movementId: number | null
    productId: string | null
    quantity: number | null
    price: number | null
  }

  export type MovementItemCountAggregateOutputType = {
    id: number
    movementId: number
    productId: number
    quantity: number
    price: number
    _all: number
  }


  export type MovementItemAvgAggregateInputType = {
    id?: true
    movementId?: true
    quantity?: true
    price?: true
  }

  export type MovementItemSumAggregateInputType = {
    id?: true
    movementId?: true
    quantity?: true
    price?: true
  }

  export type MovementItemMinAggregateInputType = {
    id?: true
    movementId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type MovementItemMaxAggregateInputType = {
    id?: true
    movementId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type MovementItemCountAggregateInputType = {
    id?: true
    movementId?: true
    productId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type MovementItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovementItem to aggregate.
     */
    where?: MovementItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementItems to fetch.
     */
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovementItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovementItems
    **/
    _count?: true | MovementItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovementItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovementItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovementItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovementItemMaxAggregateInputType
  }

  export type GetMovementItemAggregateType<T extends MovementItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMovementItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovementItem[P]>
      : GetScalarType<T[P], AggregateMovementItem[P]>
  }




  export type MovementItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementItemWhereInput
    orderBy?: MovementItemOrderByWithAggregationInput | MovementItemOrderByWithAggregationInput[]
    by: MovementItemScalarFieldEnum[] | MovementItemScalarFieldEnum
    having?: MovementItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovementItemCountAggregateInputType | true
    _avg?: MovementItemAvgAggregateInputType
    _sum?: MovementItemSumAggregateInputType
    _min?: MovementItemMinAggregateInputType
    _max?: MovementItemMaxAggregateInputType
  }

  export type MovementItemGroupByOutputType = {
    id: number
    movementId: number
    productId: string
    quantity: number
    price: number
    _count: MovementItemCountAggregateOutputType | null
    _avg: MovementItemAvgAggregateOutputType | null
    _sum: MovementItemSumAggregateOutputType | null
    _min: MovementItemMinAggregateOutputType | null
    _max: MovementItemMaxAggregateOutputType | null
  }

  type GetMovementItemGroupByPayload<T extends MovementItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovementItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovementItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovementItemGroupByOutputType[P]>
            : GetScalarType<T[P], MovementItemGroupByOutputType[P]>
        }
      >
    >


  export type MovementItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movementId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movementItem"]>

  export type MovementItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movementId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movementItem"]>

  export type MovementItemSelectScalar = {
    id?: boolean
    movementId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type MovementItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type MovementItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movement?: boolean | MovementDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $MovementItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovementItem"
    objects: {
      movement: Prisma.$MovementPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movementId: number
      productId: string
      quantity: number
      price: number
    }, ExtArgs["result"]["movementItem"]>
    composites: {}
  }

  type MovementItemGetPayload<S extends boolean | null | undefined | MovementItemDefaultArgs> = $Result.GetResult<Prisma.$MovementItemPayload, S>

  type MovementItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovementItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovementItemCountAggregateInputType | true
    }

  export interface MovementItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovementItem'], meta: { name: 'MovementItem' } }
    /**
     * Find zero or one MovementItem that matches the filter.
     * @param {MovementItemFindUniqueArgs} args - Arguments to find a MovementItem
     * @example
     * // Get one MovementItem
     * const movementItem = await prisma.movementItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovementItemFindUniqueArgs>(args: SelectSubset<T, MovementItemFindUniqueArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MovementItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MovementItemFindUniqueOrThrowArgs} args - Arguments to find a MovementItem
     * @example
     * // Get one MovementItem
     * const movementItem = await prisma.movementItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovementItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MovementItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MovementItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemFindFirstArgs} args - Arguments to find a MovementItem
     * @example
     * // Get one MovementItem
     * const movementItem = await prisma.movementItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovementItemFindFirstArgs>(args?: SelectSubset<T, MovementItemFindFirstArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MovementItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemFindFirstOrThrowArgs} args - Arguments to find a MovementItem
     * @example
     * // Get one MovementItem
     * const movementItem = await prisma.movementItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovementItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MovementItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MovementItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovementItems
     * const movementItems = await prisma.movementItem.findMany()
     * 
     * // Get first 10 MovementItems
     * const movementItems = await prisma.movementItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movementItemWithIdOnly = await prisma.movementItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovementItemFindManyArgs>(args?: SelectSubset<T, MovementItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MovementItem.
     * @param {MovementItemCreateArgs} args - Arguments to create a MovementItem.
     * @example
     * // Create one MovementItem
     * const MovementItem = await prisma.movementItem.create({
     *   data: {
     *     // ... data to create a MovementItem
     *   }
     * })
     * 
     */
    create<T extends MovementItemCreateArgs>(args: SelectSubset<T, MovementItemCreateArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MovementItems.
     * @param {MovementItemCreateManyArgs} args - Arguments to create many MovementItems.
     * @example
     * // Create many MovementItems
     * const movementItem = await prisma.movementItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovementItemCreateManyArgs>(args?: SelectSubset<T, MovementItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovementItems and returns the data saved in the database.
     * @param {MovementItemCreateManyAndReturnArgs} args - Arguments to create many MovementItems.
     * @example
     * // Create many MovementItems
     * const movementItem = await prisma.movementItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovementItems and only return the `id`
     * const movementItemWithIdOnly = await prisma.movementItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovementItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MovementItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MovementItem.
     * @param {MovementItemDeleteArgs} args - Arguments to delete one MovementItem.
     * @example
     * // Delete one MovementItem
     * const MovementItem = await prisma.movementItem.delete({
     *   where: {
     *     // ... filter to delete one MovementItem
     *   }
     * })
     * 
     */
    delete<T extends MovementItemDeleteArgs>(args: SelectSubset<T, MovementItemDeleteArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MovementItem.
     * @param {MovementItemUpdateArgs} args - Arguments to update one MovementItem.
     * @example
     * // Update one MovementItem
     * const movementItem = await prisma.movementItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovementItemUpdateArgs>(args: SelectSubset<T, MovementItemUpdateArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MovementItems.
     * @param {MovementItemDeleteManyArgs} args - Arguments to filter MovementItems to delete.
     * @example
     * // Delete a few MovementItems
     * const { count } = await prisma.movementItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovementItemDeleteManyArgs>(args?: SelectSubset<T, MovementItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovementItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovementItems
     * const movementItem = await prisma.movementItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovementItemUpdateManyArgs>(args: SelectSubset<T, MovementItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovementItem.
     * @param {MovementItemUpsertArgs} args - Arguments to update or create a MovementItem.
     * @example
     * // Update or create a MovementItem
     * const movementItem = await prisma.movementItem.upsert({
     *   create: {
     *     // ... data to create a MovementItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovementItem we want to update
     *   }
     * })
     */
    upsert<T extends MovementItemUpsertArgs>(args: SelectSubset<T, MovementItemUpsertArgs<ExtArgs>>): Prisma__MovementItemClient<$Result.GetResult<Prisma.$MovementItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MovementItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemCountArgs} args - Arguments to filter MovementItems to count.
     * @example
     * // Count the number of MovementItems
     * const count = await prisma.movementItem.count({
     *   where: {
     *     // ... the filter for the MovementItems we want to count
     *   }
     * })
    **/
    count<T extends MovementItemCountArgs>(
      args?: Subset<T, MovementItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovementItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovementItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovementItemAggregateArgs>(args: Subset<T, MovementItemAggregateArgs>): Prisma.PrismaPromise<GetMovementItemAggregateType<T>>

    /**
     * Group by MovementItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementItemGroupByArgs} args - Group by arguments.
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
      T extends MovementItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovementItemGroupByArgs['orderBy'] }
        : { orderBy?: MovementItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovementItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovementItem model
   */
  readonly fields: MovementItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovementItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovementItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movement<T extends MovementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovementDefaultArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MovementItem model
   */ 
  interface MovementItemFieldRefs {
    readonly id: FieldRef<"MovementItem", 'Int'>
    readonly movementId: FieldRef<"MovementItem", 'Int'>
    readonly productId: FieldRef<"MovementItem", 'String'>
    readonly quantity: FieldRef<"MovementItem", 'Float'>
    readonly price: FieldRef<"MovementItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MovementItem findUnique
   */
  export type MovementItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItem to fetch.
     */
    where: MovementItemWhereUniqueInput
  }

  /**
   * MovementItem findUniqueOrThrow
   */
  export type MovementItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItem to fetch.
     */
    where: MovementItemWhereUniqueInput
  }

  /**
   * MovementItem findFirst
   */
  export type MovementItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItem to fetch.
     */
    where?: MovementItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementItems to fetch.
     */
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovementItems.
     */
    cursor?: MovementItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovementItems.
     */
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * MovementItem findFirstOrThrow
   */
  export type MovementItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItem to fetch.
     */
    where?: MovementItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementItems to fetch.
     */
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovementItems.
     */
    cursor?: MovementItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovementItems.
     */
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * MovementItem findMany
   */
  export type MovementItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter, which MovementItems to fetch.
     */
    where?: MovementItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovementItems to fetch.
     */
    orderBy?: MovementItemOrderByWithRelationInput | MovementItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovementItems.
     */
    cursor?: MovementItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovementItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovementItems.
     */
    skip?: number
    distinct?: MovementItemScalarFieldEnum | MovementItemScalarFieldEnum[]
  }

  /**
   * MovementItem create
   */
  export type MovementItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MovementItem.
     */
    data: XOR<MovementItemCreateInput, MovementItemUncheckedCreateInput>
  }

  /**
   * MovementItem createMany
   */
  export type MovementItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovementItems.
     */
    data: MovementItemCreateManyInput | MovementItemCreateManyInput[]
  }

  /**
   * MovementItem createManyAndReturn
   */
  export type MovementItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MovementItems.
     */
    data: MovementItemCreateManyInput | MovementItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovementItem update
   */
  export type MovementItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MovementItem.
     */
    data: XOR<MovementItemUpdateInput, MovementItemUncheckedUpdateInput>
    /**
     * Choose, which MovementItem to update.
     */
    where: MovementItemWhereUniqueInput
  }

  /**
   * MovementItem updateMany
   */
  export type MovementItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovementItems.
     */
    data: XOR<MovementItemUpdateManyMutationInput, MovementItemUncheckedUpdateManyInput>
    /**
     * Filter which MovementItems to update
     */
    where?: MovementItemWhereInput
  }

  /**
   * MovementItem upsert
   */
  export type MovementItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MovementItem to update in case it exists.
     */
    where: MovementItemWhereUniqueInput
    /**
     * In case the MovementItem found by the `where` argument doesn't exist, create a new MovementItem with this data.
     */
    create: XOR<MovementItemCreateInput, MovementItemUncheckedCreateInput>
    /**
     * In case the MovementItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovementItemUpdateInput, MovementItemUncheckedUpdateInput>
  }

  /**
   * MovementItem delete
   */
  export type MovementItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
    /**
     * Filter which MovementItem to delete.
     */
    where: MovementItemWhereUniqueInput
  }

  /**
   * MovementItem deleteMany
   */
  export type MovementItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovementItems to delete
     */
    where?: MovementItemWhereInput
  }

  /**
   * MovementItem without action
   */
  export type MovementItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovementItem
     */
    select?: MovementItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementItemInclude<ExtArgs> | null
  }


  /**
   * Model Withdrawer
   */

  export type AggregateWithdrawer = {
    _count: WithdrawerCountAggregateOutputType | null
    _avg: WithdrawerAvgAggregateOutputType | null
    _sum: WithdrawerSumAggregateOutputType | null
    _min: WithdrawerMinAggregateOutputType | null
    _max: WithdrawerMaxAggregateOutputType | null
  }

  export type WithdrawerAvgAggregateOutputType = {
    id: number | null
  }

  export type WithdrawerSumAggregateOutputType = {
    id: number | null
  }

  export type WithdrawerMinAggregateOutputType = {
    id: number | null
    name: string | null
    dni: string | null
    phone: string | null
    observations: string | null
  }

  export type WithdrawerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    dni: string | null
    phone: string | null
    observations: string | null
  }

  export type WithdrawerCountAggregateOutputType = {
    id: number
    name: number
    dni: number
    phone: number
    observations: number
    _all: number
  }


  export type WithdrawerAvgAggregateInputType = {
    id?: true
  }

  export type WithdrawerSumAggregateInputType = {
    id?: true
  }

  export type WithdrawerMinAggregateInputType = {
    id?: true
    name?: true
    dni?: true
    phone?: true
    observations?: true
  }

  export type WithdrawerMaxAggregateInputType = {
    id?: true
    name?: true
    dni?: true
    phone?: true
    observations?: true
  }

  export type WithdrawerCountAggregateInputType = {
    id?: true
    name?: true
    dni?: true
    phone?: true
    observations?: true
    _all?: true
  }

  export type WithdrawerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawer to aggregate.
     */
    where?: WithdrawerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawers to fetch.
     */
    orderBy?: WithdrawerOrderByWithRelationInput | WithdrawerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Withdrawers
    **/
    _count?: true | WithdrawerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawerMaxAggregateInputType
  }

  export type GetWithdrawerAggregateType<T extends WithdrawerAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawer[P]>
      : GetScalarType<T[P], AggregateWithdrawer[P]>
  }




  export type WithdrawerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawerWhereInput
    orderBy?: WithdrawerOrderByWithAggregationInput | WithdrawerOrderByWithAggregationInput[]
    by: WithdrawerScalarFieldEnum[] | WithdrawerScalarFieldEnum
    having?: WithdrawerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawerCountAggregateInputType | true
    _avg?: WithdrawerAvgAggregateInputType
    _sum?: WithdrawerSumAggregateInputType
    _min?: WithdrawerMinAggregateInputType
    _max?: WithdrawerMaxAggregateInputType
  }

  export type WithdrawerGroupByOutputType = {
    id: number
    name: string
    dni: string | null
    phone: string | null
    observations: string | null
    _count: WithdrawerCountAggregateOutputType | null
    _avg: WithdrawerAvgAggregateOutputType | null
    _sum: WithdrawerSumAggregateOutputType | null
    _min: WithdrawerMinAggregateOutputType | null
    _max: WithdrawerMaxAggregateOutputType | null
  }

  type GetWithdrawerGroupByPayload<T extends WithdrawerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawerGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawerGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dni?: boolean
    phone?: boolean
    observations?: boolean
    movements?: boolean | Withdrawer$movementsArgs<ExtArgs>
    _count?: boolean | WithdrawerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawer"]>

  export type WithdrawerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dni?: boolean
    phone?: boolean
    observations?: boolean
  }, ExtArgs["result"]["withdrawer"]>

  export type WithdrawerSelectScalar = {
    id?: boolean
    name?: boolean
    dni?: boolean
    phone?: boolean
    observations?: boolean
  }

  export type WithdrawerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | Withdrawer$movementsArgs<ExtArgs>
    _count?: boolean | WithdrawerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WithdrawerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WithdrawerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Withdrawer"
    objects: {
      movements: Prisma.$MovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      dni: string | null
      phone: string | null
      observations: string | null
    }, ExtArgs["result"]["withdrawer"]>
    composites: {}
  }

  type WithdrawerGetPayload<S extends boolean | null | undefined | WithdrawerDefaultArgs> = $Result.GetResult<Prisma.$WithdrawerPayload, S>

  type WithdrawerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WithdrawerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WithdrawerCountAggregateInputType | true
    }

  export interface WithdrawerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Withdrawer'], meta: { name: 'Withdrawer' } }
    /**
     * Find zero or one Withdrawer that matches the filter.
     * @param {WithdrawerFindUniqueArgs} args - Arguments to find a Withdrawer
     * @example
     * // Get one Withdrawer
     * const withdrawer = await prisma.withdrawer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawerFindUniqueArgs>(args: SelectSubset<T, WithdrawerFindUniqueArgs<ExtArgs>>): Prisma__WithdrawerClient<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Withdrawer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WithdrawerFindUniqueOrThrowArgs} args - Arguments to find a Withdrawer
     * @example
     * // Get one Withdrawer
     * const withdrawer = await prisma.withdrawer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawerFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawerClient<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Withdrawer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawerFindFirstArgs} args - Arguments to find a Withdrawer
     * @example
     * // Get one Withdrawer
     * const withdrawer = await prisma.withdrawer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawerFindFirstArgs>(args?: SelectSubset<T, WithdrawerFindFirstArgs<ExtArgs>>): Prisma__WithdrawerClient<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Withdrawer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawerFindFirstOrThrowArgs} args - Arguments to find a Withdrawer
     * @example
     * // Get one Withdrawer
     * const withdrawer = await prisma.withdrawer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawerFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawerClient<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Withdrawers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawers
     * const withdrawers = await prisma.withdrawer.findMany()
     * 
     * // Get first 10 Withdrawers
     * const withdrawers = await prisma.withdrawer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawerWithIdOnly = await prisma.withdrawer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawerFindManyArgs>(args?: SelectSubset<T, WithdrawerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Withdrawer.
     * @param {WithdrawerCreateArgs} args - Arguments to create a Withdrawer.
     * @example
     * // Create one Withdrawer
     * const Withdrawer = await prisma.withdrawer.create({
     *   data: {
     *     // ... data to create a Withdrawer
     *   }
     * })
     * 
     */
    create<T extends WithdrawerCreateArgs>(args: SelectSubset<T, WithdrawerCreateArgs<ExtArgs>>): Prisma__WithdrawerClient<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Withdrawers.
     * @param {WithdrawerCreateManyArgs} args - Arguments to create many Withdrawers.
     * @example
     * // Create many Withdrawers
     * const withdrawer = await prisma.withdrawer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawerCreateManyArgs>(args?: SelectSubset<T, WithdrawerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Withdrawers and returns the data saved in the database.
     * @param {WithdrawerCreateManyAndReturnArgs} args - Arguments to create many Withdrawers.
     * @example
     * // Create many Withdrawers
     * const withdrawer = await prisma.withdrawer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Withdrawers and only return the `id`
     * const withdrawerWithIdOnly = await prisma.withdrawer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawerCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Withdrawer.
     * @param {WithdrawerDeleteArgs} args - Arguments to delete one Withdrawer.
     * @example
     * // Delete one Withdrawer
     * const Withdrawer = await prisma.withdrawer.delete({
     *   where: {
     *     // ... filter to delete one Withdrawer
     *   }
     * })
     * 
     */
    delete<T extends WithdrawerDeleteArgs>(args: SelectSubset<T, WithdrawerDeleteArgs<ExtArgs>>): Prisma__WithdrawerClient<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Withdrawer.
     * @param {WithdrawerUpdateArgs} args - Arguments to update one Withdrawer.
     * @example
     * // Update one Withdrawer
     * const withdrawer = await prisma.withdrawer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawerUpdateArgs>(args: SelectSubset<T, WithdrawerUpdateArgs<ExtArgs>>): Prisma__WithdrawerClient<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Withdrawers.
     * @param {WithdrawerDeleteManyArgs} args - Arguments to filter Withdrawers to delete.
     * @example
     * // Delete a few Withdrawers
     * const { count } = await prisma.withdrawer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawerDeleteManyArgs>(args?: SelectSubset<T, WithdrawerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawers
     * const withdrawer = await prisma.withdrawer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawerUpdateManyArgs>(args: SelectSubset<T, WithdrawerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Withdrawer.
     * @param {WithdrawerUpsertArgs} args - Arguments to update or create a Withdrawer.
     * @example
     * // Update or create a Withdrawer
     * const withdrawer = await prisma.withdrawer.upsert({
     *   create: {
     *     // ... data to create a Withdrawer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawer we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawerUpsertArgs>(args: SelectSubset<T, WithdrawerUpsertArgs<ExtArgs>>): Prisma__WithdrawerClient<$Result.GetResult<Prisma.$WithdrawerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Withdrawers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawerCountArgs} args - Arguments to filter Withdrawers to count.
     * @example
     * // Count the number of Withdrawers
     * const count = await prisma.withdrawer.count({
     *   where: {
     *     // ... the filter for the Withdrawers we want to count
     *   }
     * })
    **/
    count<T extends WithdrawerCountArgs>(
      args?: Subset<T, WithdrawerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawerAggregateArgs>(args: Subset<T, WithdrawerAggregateArgs>): Prisma.PrismaPromise<GetWithdrawerAggregateType<T>>

    /**
     * Group by Withdrawer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawerGroupByArgs} args - Group by arguments.
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
      T extends WithdrawerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawerGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Withdrawer model
   */
  readonly fields: WithdrawerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Withdrawer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movements<T extends Withdrawer$movementsArgs<ExtArgs> = {}>(args?: Subset<T, Withdrawer$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Withdrawer model
   */ 
  interface WithdrawerFieldRefs {
    readonly id: FieldRef<"Withdrawer", 'Int'>
    readonly name: FieldRef<"Withdrawer", 'String'>
    readonly dni: FieldRef<"Withdrawer", 'String'>
    readonly phone: FieldRef<"Withdrawer", 'String'>
    readonly observations: FieldRef<"Withdrawer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Withdrawer findUnique
   */
  export type WithdrawerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawer to fetch.
     */
    where: WithdrawerWhereUniqueInput
  }

  /**
   * Withdrawer findUniqueOrThrow
   */
  export type WithdrawerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawer to fetch.
     */
    where: WithdrawerWhereUniqueInput
  }

  /**
   * Withdrawer findFirst
   */
  export type WithdrawerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawer to fetch.
     */
    where?: WithdrawerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawers to fetch.
     */
    orderBy?: WithdrawerOrderByWithRelationInput | WithdrawerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawers.
     */
    cursor?: WithdrawerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawers.
     */
    distinct?: WithdrawerScalarFieldEnum | WithdrawerScalarFieldEnum[]
  }

  /**
   * Withdrawer findFirstOrThrow
   */
  export type WithdrawerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawer to fetch.
     */
    where?: WithdrawerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawers to fetch.
     */
    orderBy?: WithdrawerOrderByWithRelationInput | WithdrawerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawers.
     */
    cursor?: WithdrawerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawers.
     */
    distinct?: WithdrawerScalarFieldEnum | WithdrawerScalarFieldEnum[]
  }

  /**
   * Withdrawer findMany
   */
  export type WithdrawerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawers to fetch.
     */
    where?: WithdrawerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawers to fetch.
     */
    orderBy?: WithdrawerOrderByWithRelationInput | WithdrawerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Withdrawers.
     */
    cursor?: WithdrawerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawers.
     */
    skip?: number
    distinct?: WithdrawerScalarFieldEnum | WithdrawerScalarFieldEnum[]
  }

  /**
   * Withdrawer create
   */
  export type WithdrawerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    /**
     * The data needed to create a Withdrawer.
     */
    data: XOR<WithdrawerCreateInput, WithdrawerUncheckedCreateInput>
  }

  /**
   * Withdrawer createMany
   */
  export type WithdrawerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Withdrawers.
     */
    data: WithdrawerCreateManyInput | WithdrawerCreateManyInput[]
  }

  /**
   * Withdrawer createManyAndReturn
   */
  export type WithdrawerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Withdrawers.
     */
    data: WithdrawerCreateManyInput | WithdrawerCreateManyInput[]
  }

  /**
   * Withdrawer update
   */
  export type WithdrawerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    /**
     * The data needed to update a Withdrawer.
     */
    data: XOR<WithdrawerUpdateInput, WithdrawerUncheckedUpdateInput>
    /**
     * Choose, which Withdrawer to update.
     */
    where: WithdrawerWhereUniqueInput
  }

  /**
   * Withdrawer updateMany
   */
  export type WithdrawerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Withdrawers.
     */
    data: XOR<WithdrawerUpdateManyMutationInput, WithdrawerUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawers to update
     */
    where?: WithdrawerWhereInput
  }

  /**
   * Withdrawer upsert
   */
  export type WithdrawerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    /**
     * The filter to search for the Withdrawer to update in case it exists.
     */
    where: WithdrawerWhereUniqueInput
    /**
     * In case the Withdrawer found by the `where` argument doesn't exist, create a new Withdrawer with this data.
     */
    create: XOR<WithdrawerCreateInput, WithdrawerUncheckedCreateInput>
    /**
     * In case the Withdrawer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawerUpdateInput, WithdrawerUncheckedUpdateInput>
  }

  /**
   * Withdrawer delete
   */
  export type WithdrawerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
    /**
     * Filter which Withdrawer to delete.
     */
    where: WithdrawerWhereUniqueInput
  }

  /**
   * Withdrawer deleteMany
   */
  export type WithdrawerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawers to delete
     */
    where?: WithdrawerWhereInput
  }

  /**
   * Withdrawer.movements
   */
  export type Withdrawer$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    cursor?: MovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Withdrawer without action
   */
  export type WithdrawerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawer
     */
    select?: WithdrawerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    dni: 'dni',
    phone: 'phone',
    observations: 'observations',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const WorkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    observations: 'observations',
    active: 'active',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    code: 'code',
    description: 'description',
    category: 'category',
    price: 'price',
    active: 'active',
    lastUpdated: 'lastUpdated'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PriceHistoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    price: 'price',
    date: 'date'
  };

  export type PriceHistoryScalarFieldEnum = (typeof PriceHistoryScalarFieldEnum)[keyof typeof PriceHistoryScalarFieldEnum]


  export const StockpileScalarFieldEnum: {
    id: 'id',
    workId: 'workId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price',
    withdrawn: 'withdrawn',
    date: 'date',
    observations: 'observations'
  };

  export type StockpileScalarFieldEnum = (typeof StockpileScalarFieldEnum)[keyof typeof StockpileScalarFieldEnum]


  export const MovementScalarFieldEnum: {
    id: 'id',
    type: 'type',
    amount: 'amount',
    date: 'date',
    workId: 'workId',
    withdrawerId: 'withdrawerId',
    observations: 'observations'
  };

  export type MovementScalarFieldEnum = (typeof MovementScalarFieldEnum)[keyof typeof MovementScalarFieldEnum]


  export const MovementItemScalarFieldEnum: {
    id: 'id',
    movementId: 'movementId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price'
  };

  export type MovementItemScalarFieldEnum = (typeof MovementItemScalarFieldEnum)[keyof typeof MovementItemScalarFieldEnum]


  export const WithdrawerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dni: 'dni',
    phone: 'phone',
    observations: 'observations'
  };

  export type WithdrawerScalarFieldEnum = (typeof WithdrawerScalarFieldEnum)[keyof typeof WithdrawerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    lastName?: StringNullableFilter<"Client"> | string | null
    dni?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    observations?: StringNullableFilter<"Client"> | string | null
    active?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    works?: WorkListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    works?: WorkOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dni?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    lastName?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    observations?: StringNullableFilter<"Client"> | string | null
    active?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    works?: WorkListRelationFilter
  }, "id" | "dni">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    lastName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    dni?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    observations?: StringNullableWithAggregatesFilter<"Client"> | string | null
    active?: BoolWithAggregatesFilter<"Client"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type WorkWhereInput = {
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    id?: IntFilter<"Work"> | number
    name?: StringFilter<"Work"> | string
    address?: StringNullableFilter<"Work"> | string | null
    observations?: StringNullableFilter<"Work"> | string | null
    active?: BoolFilter<"Work"> | boolean
    clientId?: IntFilter<"Work"> | number
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    movements?: MovementListRelationFilter
    stockpiles?: StockpileListRelationFilter
  }

  export type WorkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    active?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    movements?: MovementOrderByRelationAggregateInput
    stockpiles?: StockpileOrderByRelationAggregateInput
  }

  export type WorkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    name?: StringFilter<"Work"> | string
    address?: StringNullableFilter<"Work"> | string | null
    observations?: StringNullableFilter<"Work"> | string | null
    active?: BoolFilter<"Work"> | boolean
    clientId?: IntFilter<"Work"> | number
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    movements?: MovementListRelationFilter
    stockpiles?: StockpileListRelationFilter
  }, "id">

  export type WorkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    active?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkCountOrderByAggregateInput
    _avg?: WorkAvgOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
    _sum?: WorkSumOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    OR?: WorkScalarWhereWithAggregatesInput[]
    NOT?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Work"> | number
    name?: StringWithAggregatesFilter<"Work"> | string
    address?: StringNullableWithAggregatesFilter<"Work"> | string | null
    observations?: StringNullableWithAggregatesFilter<"Work"> | string | null
    active?: BoolWithAggregatesFilter<"Work"> | boolean
    clientId?: IntWithAggregatesFilter<"Work"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Work"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    code?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    category?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    active?: BoolFilter<"Product"> | boolean
    lastUpdated?: DateTimeFilter<"Product"> | Date | string
    stockpileItems?: StockpileListRelationFilter
    movementItems?: MovementItemListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    price?: SortOrder
    active?: SortOrder
    lastUpdated?: SortOrder
    stockpileItems?: StockpileOrderByRelationAggregateInput
    movementItems?: MovementItemOrderByRelationAggregateInput
    priceHistory?: PriceHistoryOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    description?: StringFilter<"Product"> | string
    category?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    active?: BoolFilter<"Product"> | boolean
    lastUpdated?: DateTimeFilter<"Product"> | Date | string
    stockpileItems?: StockpileListRelationFilter
    movementItems?: MovementItemListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
  }, "code">

  export type ProductOrderByWithAggregationInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    price?: SortOrder
    active?: SortOrder
    lastUpdated?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    active?: BoolWithAggregatesFilter<"Product"> | boolean
    lastUpdated?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type PriceHistoryWhereInput = {
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    id?: IntFilter<"PriceHistory"> | number
    productId?: StringFilter<"PriceHistory"> | string
    price?: FloatFilter<"PriceHistory"> | number
    date?: DateTimeFilter<"PriceHistory"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type PriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type PriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    productId?: StringFilter<"PriceHistory"> | string
    price?: FloatFilter<"PriceHistory"> | number
    date?: DateTimeFilter<"PriceHistory"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type PriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    _count?: PriceHistoryCountOrderByAggregateInput
    _avg?: PriceHistoryAvgOrderByAggregateInput
    _max?: PriceHistoryMaxOrderByAggregateInput
    _min?: PriceHistoryMinOrderByAggregateInput
    _sum?: PriceHistorySumOrderByAggregateInput
  }

  export type PriceHistoryScalarWhereWithAggregatesInput = {
    AND?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    OR?: PriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PriceHistory"> | number
    productId?: StringWithAggregatesFilter<"PriceHistory"> | string
    price?: FloatWithAggregatesFilter<"PriceHistory"> | number
    date?: DateTimeWithAggregatesFilter<"PriceHistory"> | Date | string
  }

  export type StockpileWhereInput = {
    AND?: StockpileWhereInput | StockpileWhereInput[]
    OR?: StockpileWhereInput[]
    NOT?: StockpileWhereInput | StockpileWhereInput[]
    id?: IntFilter<"Stockpile"> | number
    workId?: IntFilter<"Stockpile"> | number
    productId?: StringFilter<"Stockpile"> | string
    quantity?: FloatFilter<"Stockpile"> | number
    price?: FloatFilter<"Stockpile"> | number
    withdrawn?: FloatFilter<"Stockpile"> | number
    date?: DateTimeFilter<"Stockpile"> | Date | string
    observations?: StringNullableFilter<"Stockpile"> | string | null
    work?: XOR<WorkRelationFilter, WorkWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type StockpileOrderByWithRelationInput = {
    id?: SortOrder
    workId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    withdrawn?: SortOrder
    date?: SortOrder
    observations?: SortOrderInput | SortOrder
    work?: WorkOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type StockpileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockpileWhereInput | StockpileWhereInput[]
    OR?: StockpileWhereInput[]
    NOT?: StockpileWhereInput | StockpileWhereInput[]
    workId?: IntFilter<"Stockpile"> | number
    productId?: StringFilter<"Stockpile"> | string
    quantity?: FloatFilter<"Stockpile"> | number
    price?: FloatFilter<"Stockpile"> | number
    withdrawn?: FloatFilter<"Stockpile"> | number
    date?: DateTimeFilter<"Stockpile"> | Date | string
    observations?: StringNullableFilter<"Stockpile"> | string | null
    work?: XOR<WorkRelationFilter, WorkWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type StockpileOrderByWithAggregationInput = {
    id?: SortOrder
    workId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    withdrawn?: SortOrder
    date?: SortOrder
    observations?: SortOrderInput | SortOrder
    _count?: StockpileCountOrderByAggregateInput
    _avg?: StockpileAvgOrderByAggregateInput
    _max?: StockpileMaxOrderByAggregateInput
    _min?: StockpileMinOrderByAggregateInput
    _sum?: StockpileSumOrderByAggregateInput
  }

  export type StockpileScalarWhereWithAggregatesInput = {
    AND?: StockpileScalarWhereWithAggregatesInput | StockpileScalarWhereWithAggregatesInput[]
    OR?: StockpileScalarWhereWithAggregatesInput[]
    NOT?: StockpileScalarWhereWithAggregatesInput | StockpileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stockpile"> | number
    workId?: IntWithAggregatesFilter<"Stockpile"> | number
    productId?: StringWithAggregatesFilter<"Stockpile"> | string
    quantity?: FloatWithAggregatesFilter<"Stockpile"> | number
    price?: FloatWithAggregatesFilter<"Stockpile"> | number
    withdrawn?: FloatWithAggregatesFilter<"Stockpile"> | number
    date?: DateTimeWithAggregatesFilter<"Stockpile"> | Date | string
    observations?: StringNullableWithAggregatesFilter<"Stockpile"> | string | null
  }

  export type MovementWhereInput = {
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    id?: IntFilter<"Movement"> | number
    type?: StringFilter<"Movement"> | string
    amount?: FloatNullableFilter<"Movement"> | number | null
    date?: DateTimeFilter<"Movement"> | Date | string
    workId?: IntFilter<"Movement"> | number
    withdrawerId?: IntNullableFilter<"Movement"> | number | null
    observations?: StringNullableFilter<"Movement"> | string | null
    work?: XOR<WorkRelationFilter, WorkWhereInput>
    items?: MovementItemListRelationFilter
    withdrawer?: XOR<WithdrawerNullableRelationFilter, WithdrawerWhereInput> | null
  }

  export type MovementOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrder
    workId?: SortOrder
    withdrawerId?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    work?: WorkOrderByWithRelationInput
    items?: MovementItemOrderByRelationAggregateInput
    withdrawer?: WithdrawerOrderByWithRelationInput
  }

  export type MovementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    type?: StringFilter<"Movement"> | string
    amount?: FloatNullableFilter<"Movement"> | number | null
    date?: DateTimeFilter<"Movement"> | Date | string
    workId?: IntFilter<"Movement"> | number
    withdrawerId?: IntNullableFilter<"Movement"> | number | null
    observations?: StringNullableFilter<"Movement"> | string | null
    work?: XOR<WorkRelationFilter, WorkWhereInput>
    items?: MovementItemListRelationFilter
    withdrawer?: XOR<WithdrawerNullableRelationFilter, WithdrawerWhereInput> | null
  }, "id">

  export type MovementOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrder
    workId?: SortOrder
    withdrawerId?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    _count?: MovementCountOrderByAggregateInput
    _avg?: MovementAvgOrderByAggregateInput
    _max?: MovementMaxOrderByAggregateInput
    _min?: MovementMinOrderByAggregateInput
    _sum?: MovementSumOrderByAggregateInput
  }

  export type MovementScalarWhereWithAggregatesInput = {
    AND?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    OR?: MovementScalarWhereWithAggregatesInput[]
    NOT?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movement"> | number
    type?: StringWithAggregatesFilter<"Movement"> | string
    amount?: FloatNullableWithAggregatesFilter<"Movement"> | number | null
    date?: DateTimeWithAggregatesFilter<"Movement"> | Date | string
    workId?: IntWithAggregatesFilter<"Movement"> | number
    withdrawerId?: IntNullableWithAggregatesFilter<"Movement"> | number | null
    observations?: StringNullableWithAggregatesFilter<"Movement"> | string | null
  }

  export type MovementItemWhereInput = {
    AND?: MovementItemWhereInput | MovementItemWhereInput[]
    OR?: MovementItemWhereInput[]
    NOT?: MovementItemWhereInput | MovementItemWhereInput[]
    id?: IntFilter<"MovementItem"> | number
    movementId?: IntFilter<"MovementItem"> | number
    productId?: StringFilter<"MovementItem"> | string
    quantity?: FloatFilter<"MovementItem"> | number
    price?: FloatFilter<"MovementItem"> | number
    movement?: XOR<MovementRelationFilter, MovementWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type MovementItemOrderByWithRelationInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    movement?: MovementOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type MovementItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovementItemWhereInput | MovementItemWhereInput[]
    OR?: MovementItemWhereInput[]
    NOT?: MovementItemWhereInput | MovementItemWhereInput[]
    movementId?: IntFilter<"MovementItem"> | number
    productId?: StringFilter<"MovementItem"> | string
    quantity?: FloatFilter<"MovementItem"> | number
    price?: FloatFilter<"MovementItem"> | number
    movement?: XOR<MovementRelationFilter, MovementWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type MovementItemOrderByWithAggregationInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: MovementItemCountOrderByAggregateInput
    _avg?: MovementItemAvgOrderByAggregateInput
    _max?: MovementItemMaxOrderByAggregateInput
    _min?: MovementItemMinOrderByAggregateInput
    _sum?: MovementItemSumOrderByAggregateInput
  }

  export type MovementItemScalarWhereWithAggregatesInput = {
    AND?: MovementItemScalarWhereWithAggregatesInput | MovementItemScalarWhereWithAggregatesInput[]
    OR?: MovementItemScalarWhereWithAggregatesInput[]
    NOT?: MovementItemScalarWhereWithAggregatesInput | MovementItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MovementItem"> | number
    movementId?: IntWithAggregatesFilter<"MovementItem"> | number
    productId?: StringWithAggregatesFilter<"MovementItem"> | string
    quantity?: FloatWithAggregatesFilter<"MovementItem"> | number
    price?: FloatWithAggregatesFilter<"MovementItem"> | number
  }

  export type WithdrawerWhereInput = {
    AND?: WithdrawerWhereInput | WithdrawerWhereInput[]
    OR?: WithdrawerWhereInput[]
    NOT?: WithdrawerWhereInput | WithdrawerWhereInput[]
    id?: IntFilter<"Withdrawer"> | number
    name?: StringFilter<"Withdrawer"> | string
    dni?: StringNullableFilter<"Withdrawer"> | string | null
    phone?: StringNullableFilter<"Withdrawer"> | string | null
    observations?: StringNullableFilter<"Withdrawer"> | string | null
    movements?: MovementListRelationFilter
  }

  export type WithdrawerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    movements?: MovementOrderByRelationAggregateInput
  }

  export type WithdrawerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WithdrawerWhereInput | WithdrawerWhereInput[]
    OR?: WithdrawerWhereInput[]
    NOT?: WithdrawerWhereInput | WithdrawerWhereInput[]
    name?: StringFilter<"Withdrawer"> | string
    dni?: StringNullableFilter<"Withdrawer"> | string | null
    phone?: StringNullableFilter<"Withdrawer"> | string | null
    observations?: StringNullableFilter<"Withdrawer"> | string | null
    movements?: MovementListRelationFilter
  }, "id">

  export type WithdrawerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    _count?: WithdrawerCountOrderByAggregateInput
    _avg?: WithdrawerAvgOrderByAggregateInput
    _max?: WithdrawerMaxOrderByAggregateInput
    _min?: WithdrawerMinOrderByAggregateInput
    _sum?: WithdrawerSumOrderByAggregateInput
  }

  export type WithdrawerScalarWhereWithAggregatesInput = {
    AND?: WithdrawerScalarWhereWithAggregatesInput | WithdrawerScalarWhereWithAggregatesInput[]
    OR?: WithdrawerScalarWhereWithAggregatesInput[]
    NOT?: WithdrawerScalarWhereWithAggregatesInput | WithdrawerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Withdrawer"> | number
    name?: StringWithAggregatesFilter<"Withdrawer"> | string
    dni?: StringNullableWithAggregatesFilter<"Withdrawer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Withdrawer"> | string | null
    observations?: StringNullableWithAggregatesFilter<"Withdrawer"> | string | null
  }

  export type ClientCreateInput = {
    name: string
    lastName?: string | null
    dni?: string | null
    phone?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: WorkCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    lastName?: string | null
    dni?: string | null
    phone?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    works?: WorkUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorkUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorkUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    lastName?: string | null
    dni?: string | null
    phone?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCreateInput = {
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutWorksInput
    movements?: MovementCreateNestedManyWithoutWorkInput
    stockpiles?: StockpileCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementUncheckedCreateNestedManyWithoutWorkInput
    stockpiles?: StockpileUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutWorksNestedInput
    movements?: MovementUpdateManyWithoutWorkNestedInput
    stockpiles?: StockpileUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementUncheckedUpdateManyWithoutWorkNestedInput
    stockpiles?: StockpileUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    code: string
    description: string
    category?: string | null
    price: number
    active?: boolean
    lastUpdated?: Date | string
    stockpileItems?: StockpileCreateNestedManyWithoutProductInput
    movementItems?: MovementItemCreateNestedManyWithoutProductInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    code: string
    description: string
    category?: string | null
    price: number
    active?: boolean
    lastUpdated?: Date | string
    stockpileItems?: StockpileUncheckedCreateNestedManyWithoutProductInput
    movementItems?: MovementItemUncheckedCreateNestedManyWithoutProductInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    stockpileItems?: StockpileUpdateManyWithoutProductNestedInput
    movementItems?: MovementItemUpdateManyWithoutProductNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    stockpileItems?: StockpileUncheckedUpdateManyWithoutProductNestedInput
    movementItems?: MovementItemUncheckedUpdateManyWithoutProductNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    code: string
    description: string
    category?: string | null
    price: number
    active?: boolean
    lastUpdated?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateInput = {
    price: number
    date?: Date | string
    product: ProductCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateInput = {
    id?: number
    productId: string
    price: number
    date?: Date | string
  }

  export type PriceHistoryUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateManyInput = {
    id?: number
    productId: string
    price: number
    date?: Date | string
  }

  export type PriceHistoryUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockpileCreateInput = {
    quantity: number
    price: number
    withdrawn?: number
    date?: Date | string
    observations?: string | null
    work: WorkCreateNestedOneWithoutStockpilesInput
    product: ProductCreateNestedOneWithoutStockpileItemsInput
  }

  export type StockpileUncheckedCreateInput = {
    id?: number
    workId: number
    productId: string
    quantity: number
    price: number
    withdrawn?: number
    date?: Date | string
    observations?: string | null
  }

  export type StockpileUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    work?: WorkUpdateOneRequiredWithoutStockpilesNestedInput
    product?: ProductUpdateOneRequiredWithoutStockpileItemsNestedInput
  }

  export type StockpileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockpileCreateManyInput = {
    id?: number
    workId: number
    productId: string
    quantity: number
    price: number
    withdrawn?: number
    date?: Date | string
    observations?: string | null
  }

  export type StockpileUpdateManyMutationInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockpileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovementCreateInput = {
    type: string
    amount?: number | null
    date?: Date | string
    observations?: string | null
    work: WorkCreateNestedOneWithoutMovementsInput
    items?: MovementItemCreateNestedManyWithoutMovementInput
    withdrawer?: WithdrawerCreateNestedOneWithoutMovementsInput
  }

  export type MovementUncheckedCreateInput = {
    id?: number
    type: string
    amount?: number | null
    date?: Date | string
    workId: number
    withdrawerId?: number | null
    observations?: string | null
    items?: MovementItemUncheckedCreateNestedManyWithoutMovementInput
  }

  export type MovementUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    work?: WorkUpdateOneRequiredWithoutMovementsNestedInput
    items?: MovementItemUpdateManyWithoutMovementNestedInput
    withdrawer?: WithdrawerUpdateOneWithoutMovementsNestedInput
  }

  export type MovementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: IntFieldUpdateOperationsInput | number
    withdrawerId?: NullableIntFieldUpdateOperationsInput | number | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    items?: MovementItemUncheckedUpdateManyWithoutMovementNestedInput
  }

  export type MovementCreateManyInput = {
    id?: number
    type: string
    amount?: number | null
    date?: Date | string
    workId: number
    withdrawerId?: number | null
    observations?: string | null
  }

  export type MovementUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: IntFieldUpdateOperationsInput | number
    withdrawerId?: NullableIntFieldUpdateOperationsInput | number | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovementItemCreateInput = {
    quantity: number
    price: number
    movement: MovementCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutMovementItemsInput
  }

  export type MovementItemUncheckedCreateInput = {
    id?: number
    movementId: number
    productId: string
    quantity: number
    price: number
  }

  export type MovementItemUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    movement?: MovementUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutMovementItemsNestedInput
  }

  export type MovementItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movementId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MovementItemCreateManyInput = {
    id?: number
    movementId: number
    productId: string
    quantity: number
    price: number
  }

  export type MovementItemUpdateManyMutationInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MovementItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movementId?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type WithdrawerCreateInput = {
    name: string
    dni?: string | null
    phone?: string | null
    observations?: string | null
    movements?: MovementCreateNestedManyWithoutWithdrawerInput
  }

  export type WithdrawerUncheckedCreateInput = {
    id?: number
    name: string
    dni?: string | null
    phone?: string | null
    observations?: string | null
    movements?: MovementUncheckedCreateNestedManyWithoutWithdrawerInput
  }

  export type WithdrawerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    movements?: MovementUpdateManyWithoutWithdrawerNestedInput
  }

  export type WithdrawerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    movements?: MovementUncheckedUpdateManyWithoutWithdrawerNestedInput
  }

  export type WithdrawerCreateManyInput = {
    id?: number
    name: string
    dni?: string | null
    phone?: string | null
    observations?: string | null
  }

  export type WithdrawerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WithdrawerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkListRelationFilter = {
    every?: WorkWhereInput
    some?: WorkWhereInput
    none?: WorkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    phone?: SortOrder
    observations?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    phone?: SortOrder
    observations?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    dni?: SortOrder
    phone?: SortOrder
    observations?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type MovementListRelationFilter = {
    every?: MovementWhereInput
    some?: MovementWhereInput
    none?: MovementWhereInput
  }

  export type StockpileListRelationFilter = {
    every?: StockpileWhereInput
    some?: StockpileWhereInput
    none?: StockpileWhereInput
  }

  export type MovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockpileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    observations?: SortOrder
    active?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    observations?: SortOrder
    active?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    observations?: SortOrder
    active?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MovementItemListRelationFilter = {
    every?: MovementItemWhereInput
    some?: MovementItemWhereInput
    none?: MovementItemWhereInput
  }

  export type PriceHistoryListRelationFilter = {
    every?: PriceHistoryWhereInput
    some?: PriceHistoryWhereInput
    none?: PriceHistoryWhereInput
  }

  export type MovementItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    active?: SortOrder
    lastUpdated?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    active?: SortOrder
    lastUpdated?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrder
    price?: SortOrder
    active?: SortOrder
    lastUpdated?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type PriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    date?: SortOrder
  }

  export type PriceHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    date?: SortOrder
  }

  export type PriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    date?: SortOrder
  }

  export type PriceHistorySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type WorkRelationFilter = {
    is?: WorkWhereInput
    isNot?: WorkWhereInput
  }

  export type StockpileCountOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    withdrawn?: SortOrder
    date?: SortOrder
    observations?: SortOrder
  }

  export type StockpileAvgOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    withdrawn?: SortOrder
  }

  export type StockpileMaxOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    withdrawn?: SortOrder
    date?: SortOrder
    observations?: SortOrder
  }

  export type StockpileMinOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    withdrawn?: SortOrder
    date?: SortOrder
    observations?: SortOrder
  }

  export type StockpileSumOrderByAggregateInput = {
    id?: SortOrder
    workId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    withdrawn?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WithdrawerNullableRelationFilter = {
    is?: WithdrawerWhereInput | null
    isNot?: WithdrawerWhereInput | null
  }

  export type MovementCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    workId?: SortOrder
    withdrawerId?: SortOrder
    observations?: SortOrder
  }

  export type MovementAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    workId?: SortOrder
    withdrawerId?: SortOrder
  }

  export type MovementMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    workId?: SortOrder
    withdrawerId?: SortOrder
    observations?: SortOrder
  }

  export type MovementMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    workId?: SortOrder
    withdrawerId?: SortOrder
    observations?: SortOrder
  }

  export type MovementSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    workId?: SortOrder
    withdrawerId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type MovementRelationFilter = {
    is?: MovementWhereInput
    isNot?: MovementWhereInput
  }

  export type MovementItemCountOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type MovementItemAvgOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type MovementItemMaxOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type MovementItemMinOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type MovementItemSumOrderByAggregateInput = {
    id?: SortOrder
    movementId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type WithdrawerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrder
    phone?: SortOrder
    observations?: SortOrder
  }

  export type WithdrawerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WithdrawerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrder
    phone?: SortOrder
    observations?: SortOrder
  }

  export type WithdrawerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrder
    phone?: SortOrder
    observations?: SortOrder
  }

  export type WithdrawerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkCreateNestedManyWithoutClientInput = {
    create?: XOR<WorkCreateWithoutClientInput, WorkUncheckedCreateWithoutClientInput> | WorkCreateWithoutClientInput[] | WorkUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutClientInput | WorkCreateOrConnectWithoutClientInput[]
    createMany?: WorkCreateManyClientInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type WorkUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<WorkCreateWithoutClientInput, WorkUncheckedCreateWithoutClientInput> | WorkCreateWithoutClientInput[] | WorkUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutClientInput | WorkCreateOrConnectWithoutClientInput[]
    createMany?: WorkCreateManyClientInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkUpdateManyWithoutClientNestedInput = {
    create?: XOR<WorkCreateWithoutClientInput, WorkUncheckedCreateWithoutClientInput> | WorkCreateWithoutClientInput[] | WorkUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutClientInput | WorkCreateOrConnectWithoutClientInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutClientInput | WorkUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: WorkCreateManyClientInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutClientInput | WorkUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutClientInput | WorkUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<WorkCreateWithoutClientInput, WorkUncheckedCreateWithoutClientInput> | WorkCreateWithoutClientInput[] | WorkUncheckedCreateWithoutClientInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutClientInput | WorkCreateOrConnectWithoutClientInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutClientInput | WorkUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: WorkCreateManyClientInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutClientInput | WorkUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutClientInput | WorkUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutWorksInput = {
    create?: XOR<ClientCreateWithoutWorksInput, ClientUncheckedCreateWithoutWorksInput>
    connectOrCreate?: ClientCreateOrConnectWithoutWorksInput
    connect?: ClientWhereUniqueInput
  }

  export type MovementCreateNestedManyWithoutWorkInput = {
    create?: XOR<MovementCreateWithoutWorkInput, MovementUncheckedCreateWithoutWorkInput> | MovementCreateWithoutWorkInput[] | MovementUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWorkInput | MovementCreateOrConnectWithoutWorkInput[]
    createMany?: MovementCreateManyWorkInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type StockpileCreateNestedManyWithoutWorkInput = {
    create?: XOR<StockpileCreateWithoutWorkInput, StockpileUncheckedCreateWithoutWorkInput> | StockpileCreateWithoutWorkInput[] | StockpileUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: StockpileCreateOrConnectWithoutWorkInput | StockpileCreateOrConnectWithoutWorkInput[]
    createMany?: StockpileCreateManyWorkInputEnvelope
    connect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
  }

  export type MovementUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<MovementCreateWithoutWorkInput, MovementUncheckedCreateWithoutWorkInput> | MovementCreateWithoutWorkInput[] | MovementUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWorkInput | MovementCreateOrConnectWithoutWorkInput[]
    createMany?: MovementCreateManyWorkInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type StockpileUncheckedCreateNestedManyWithoutWorkInput = {
    create?: XOR<StockpileCreateWithoutWorkInput, StockpileUncheckedCreateWithoutWorkInput> | StockpileCreateWithoutWorkInput[] | StockpileUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: StockpileCreateOrConnectWithoutWorkInput | StockpileCreateOrConnectWithoutWorkInput[]
    createMany?: StockpileCreateManyWorkInputEnvelope
    connect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutWorksNestedInput = {
    create?: XOR<ClientCreateWithoutWorksInput, ClientUncheckedCreateWithoutWorksInput>
    connectOrCreate?: ClientCreateOrConnectWithoutWorksInput
    upsert?: ClientUpsertWithoutWorksInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutWorksInput, ClientUpdateWithoutWorksInput>, ClientUncheckedUpdateWithoutWorksInput>
  }

  export type MovementUpdateManyWithoutWorkNestedInput = {
    create?: XOR<MovementCreateWithoutWorkInput, MovementUncheckedCreateWithoutWorkInput> | MovementCreateWithoutWorkInput[] | MovementUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWorkInput | MovementCreateOrConnectWithoutWorkInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutWorkInput | MovementUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: MovementCreateManyWorkInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutWorkInput | MovementUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutWorkInput | MovementUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type StockpileUpdateManyWithoutWorkNestedInput = {
    create?: XOR<StockpileCreateWithoutWorkInput, StockpileUncheckedCreateWithoutWorkInput> | StockpileCreateWithoutWorkInput[] | StockpileUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: StockpileCreateOrConnectWithoutWorkInput | StockpileCreateOrConnectWithoutWorkInput[]
    upsert?: StockpileUpsertWithWhereUniqueWithoutWorkInput | StockpileUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: StockpileCreateManyWorkInputEnvelope
    set?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    disconnect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    delete?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    connect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    update?: StockpileUpdateWithWhereUniqueWithoutWorkInput | StockpileUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: StockpileUpdateManyWithWhereWithoutWorkInput | StockpileUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: StockpileScalarWhereInput | StockpileScalarWhereInput[]
  }

  export type MovementUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<MovementCreateWithoutWorkInput, MovementUncheckedCreateWithoutWorkInput> | MovementCreateWithoutWorkInput[] | MovementUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWorkInput | MovementCreateOrConnectWithoutWorkInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutWorkInput | MovementUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: MovementCreateManyWorkInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutWorkInput | MovementUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutWorkInput | MovementUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type StockpileUncheckedUpdateManyWithoutWorkNestedInput = {
    create?: XOR<StockpileCreateWithoutWorkInput, StockpileUncheckedCreateWithoutWorkInput> | StockpileCreateWithoutWorkInput[] | StockpileUncheckedCreateWithoutWorkInput[]
    connectOrCreate?: StockpileCreateOrConnectWithoutWorkInput | StockpileCreateOrConnectWithoutWorkInput[]
    upsert?: StockpileUpsertWithWhereUniqueWithoutWorkInput | StockpileUpsertWithWhereUniqueWithoutWorkInput[]
    createMany?: StockpileCreateManyWorkInputEnvelope
    set?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    disconnect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    delete?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    connect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    update?: StockpileUpdateWithWhereUniqueWithoutWorkInput | StockpileUpdateWithWhereUniqueWithoutWorkInput[]
    updateMany?: StockpileUpdateManyWithWhereWithoutWorkInput | StockpileUpdateManyWithWhereWithoutWorkInput[]
    deleteMany?: StockpileScalarWhereInput | StockpileScalarWhereInput[]
  }

  export type StockpileCreateNestedManyWithoutProductInput = {
    create?: XOR<StockpileCreateWithoutProductInput, StockpileUncheckedCreateWithoutProductInput> | StockpileCreateWithoutProductInput[] | StockpileUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockpileCreateOrConnectWithoutProductInput | StockpileCreateOrConnectWithoutProductInput[]
    createMany?: StockpileCreateManyProductInputEnvelope
    connect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
  }

  export type MovementItemCreateNestedManyWithoutProductInput = {
    create?: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput> | MovementItemCreateWithoutProductInput[] | MovementItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutProductInput | MovementItemCreateOrConnectWithoutProductInput[]
    createMany?: MovementItemCreateManyProductInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type PriceHistoryCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput> | PriceHistoryCreateWithoutProductInput[] | PriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutProductInput | PriceHistoryCreateOrConnectWithoutProductInput[]
    createMany?: PriceHistoryCreateManyProductInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type StockpileUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockpileCreateWithoutProductInput, StockpileUncheckedCreateWithoutProductInput> | StockpileCreateWithoutProductInput[] | StockpileUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockpileCreateOrConnectWithoutProductInput | StockpileCreateOrConnectWithoutProductInput[]
    createMany?: StockpileCreateManyProductInputEnvelope
    connect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
  }

  export type MovementItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput> | MovementItemCreateWithoutProductInput[] | MovementItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutProductInput | MovementItemCreateOrConnectWithoutProductInput[]
    createMany?: MovementItemCreateManyProductInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type PriceHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput> | PriceHistoryCreateWithoutProductInput[] | PriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutProductInput | PriceHistoryCreateOrConnectWithoutProductInput[]
    createMany?: PriceHistoryCreateManyProductInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StockpileUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockpileCreateWithoutProductInput, StockpileUncheckedCreateWithoutProductInput> | StockpileCreateWithoutProductInput[] | StockpileUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockpileCreateOrConnectWithoutProductInput | StockpileCreateOrConnectWithoutProductInput[]
    upsert?: StockpileUpsertWithWhereUniqueWithoutProductInput | StockpileUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockpileCreateManyProductInputEnvelope
    set?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    disconnect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    delete?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    connect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    update?: StockpileUpdateWithWhereUniqueWithoutProductInput | StockpileUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockpileUpdateManyWithWhereWithoutProductInput | StockpileUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockpileScalarWhereInput | StockpileScalarWhereInput[]
  }

  export type MovementItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput> | MovementItemCreateWithoutProductInput[] | MovementItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutProductInput | MovementItemCreateOrConnectWithoutProductInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutProductInput | MovementItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MovementItemCreateManyProductInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutProductInput | MovementItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutProductInput | MovementItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type PriceHistoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput> | PriceHistoryCreateWithoutProductInput[] | PriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutProductInput | PriceHistoryCreateOrConnectWithoutProductInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutProductInput | PriceHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceHistoryCreateManyProductInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutProductInput | PriceHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutProductInput | PriceHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type StockpileUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockpileCreateWithoutProductInput, StockpileUncheckedCreateWithoutProductInput> | StockpileCreateWithoutProductInput[] | StockpileUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockpileCreateOrConnectWithoutProductInput | StockpileCreateOrConnectWithoutProductInput[]
    upsert?: StockpileUpsertWithWhereUniqueWithoutProductInput | StockpileUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockpileCreateManyProductInputEnvelope
    set?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    disconnect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    delete?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    connect?: StockpileWhereUniqueInput | StockpileWhereUniqueInput[]
    update?: StockpileUpdateWithWhereUniqueWithoutProductInput | StockpileUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockpileUpdateManyWithWhereWithoutProductInput | StockpileUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockpileScalarWhereInput | StockpileScalarWhereInput[]
  }

  export type MovementItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput> | MovementItemCreateWithoutProductInput[] | MovementItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutProductInput | MovementItemCreateOrConnectWithoutProductInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutProductInput | MovementItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MovementItemCreateManyProductInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutProductInput | MovementItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutProductInput | MovementItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type PriceHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput> | PriceHistoryCreateWithoutProductInput[] | PriceHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutProductInput | PriceHistoryCreateOrConnectWithoutProductInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutProductInput | PriceHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceHistoryCreateManyProductInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutProductInput | PriceHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutProductInput | PriceHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceHistoryInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceHistoryInput
    upsert?: ProductUpsertWithoutPriceHistoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPriceHistoryInput, ProductUpdateWithoutPriceHistoryInput>, ProductUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type WorkCreateNestedOneWithoutStockpilesInput = {
    create?: XOR<WorkCreateWithoutStockpilesInput, WorkUncheckedCreateWithoutStockpilesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutStockpilesInput
    connect?: WorkWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutStockpileItemsInput = {
    create?: XOR<ProductCreateWithoutStockpileItemsInput, ProductUncheckedCreateWithoutStockpileItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockpileItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type WorkUpdateOneRequiredWithoutStockpilesNestedInput = {
    create?: XOR<WorkCreateWithoutStockpilesInput, WorkUncheckedCreateWithoutStockpilesInput>
    connectOrCreate?: WorkCreateOrConnectWithoutStockpilesInput
    upsert?: WorkUpsertWithoutStockpilesInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutStockpilesInput, WorkUpdateWithoutStockpilesInput>, WorkUncheckedUpdateWithoutStockpilesInput>
  }

  export type ProductUpdateOneRequiredWithoutStockpileItemsNestedInput = {
    create?: XOR<ProductCreateWithoutStockpileItemsInput, ProductUncheckedCreateWithoutStockpileItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockpileItemsInput
    upsert?: ProductUpsertWithoutStockpileItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockpileItemsInput, ProductUpdateWithoutStockpileItemsInput>, ProductUncheckedUpdateWithoutStockpileItemsInput>
  }

  export type WorkCreateNestedOneWithoutMovementsInput = {
    create?: XOR<WorkCreateWithoutMovementsInput, WorkUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutMovementsInput
    connect?: WorkWhereUniqueInput
  }

  export type MovementItemCreateNestedManyWithoutMovementInput = {
    create?: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput> | MovementItemCreateWithoutMovementInput[] | MovementItemUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutMovementInput | MovementItemCreateOrConnectWithoutMovementInput[]
    createMany?: MovementItemCreateManyMovementInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type WithdrawerCreateNestedOneWithoutMovementsInput = {
    create?: XOR<WithdrawerCreateWithoutMovementsInput, WithdrawerUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: WithdrawerCreateOrConnectWithoutMovementsInput
    connect?: WithdrawerWhereUniqueInput
  }

  export type MovementItemUncheckedCreateNestedManyWithoutMovementInput = {
    create?: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput> | MovementItemCreateWithoutMovementInput[] | MovementItemUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutMovementInput | MovementItemCreateOrConnectWithoutMovementInput[]
    createMany?: MovementItemCreateManyMovementInputEnvelope
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: XOR<WorkCreateWithoutMovementsInput, WorkUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: WorkCreateOrConnectWithoutMovementsInput
    upsert?: WorkUpsertWithoutMovementsInput
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutMovementsInput, WorkUpdateWithoutMovementsInput>, WorkUncheckedUpdateWithoutMovementsInput>
  }

  export type MovementItemUpdateManyWithoutMovementNestedInput = {
    create?: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput> | MovementItemCreateWithoutMovementInput[] | MovementItemUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutMovementInput | MovementItemCreateOrConnectWithoutMovementInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutMovementInput | MovementItemUpsertWithWhereUniqueWithoutMovementInput[]
    createMany?: MovementItemCreateManyMovementInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutMovementInput | MovementItemUpdateWithWhereUniqueWithoutMovementInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutMovementInput | MovementItemUpdateManyWithWhereWithoutMovementInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type WithdrawerUpdateOneWithoutMovementsNestedInput = {
    create?: XOR<WithdrawerCreateWithoutMovementsInput, WithdrawerUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: WithdrawerCreateOrConnectWithoutMovementsInput
    upsert?: WithdrawerUpsertWithoutMovementsInput
    disconnect?: WithdrawerWhereInput | boolean
    delete?: WithdrawerWhereInput | boolean
    connect?: WithdrawerWhereUniqueInput
    update?: XOR<XOR<WithdrawerUpdateToOneWithWhereWithoutMovementsInput, WithdrawerUpdateWithoutMovementsInput>, WithdrawerUncheckedUpdateWithoutMovementsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovementItemUncheckedUpdateManyWithoutMovementNestedInput = {
    create?: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput> | MovementItemCreateWithoutMovementInput[] | MovementItemUncheckedCreateWithoutMovementInput[]
    connectOrCreate?: MovementItemCreateOrConnectWithoutMovementInput | MovementItemCreateOrConnectWithoutMovementInput[]
    upsert?: MovementItemUpsertWithWhereUniqueWithoutMovementInput | MovementItemUpsertWithWhereUniqueWithoutMovementInput[]
    createMany?: MovementItemCreateManyMovementInputEnvelope
    set?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    disconnect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    delete?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    connect?: MovementItemWhereUniqueInput | MovementItemWhereUniqueInput[]
    update?: MovementItemUpdateWithWhereUniqueWithoutMovementInput | MovementItemUpdateWithWhereUniqueWithoutMovementInput[]
    updateMany?: MovementItemUpdateManyWithWhereWithoutMovementInput | MovementItemUpdateManyWithWhereWithoutMovementInput[]
    deleteMany?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
  }

  export type MovementCreateNestedOneWithoutItemsInput = {
    create?: XOR<MovementCreateWithoutItemsInput, MovementUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MovementCreateOrConnectWithoutItemsInput
    connect?: MovementWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutMovementItemsInput = {
    create?: XOR<ProductCreateWithoutMovementItemsInput, ProductUncheckedCreateWithoutMovementItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type MovementUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<MovementCreateWithoutItemsInput, MovementUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MovementCreateOrConnectWithoutItemsInput
    upsert?: MovementUpsertWithoutItemsInput
    connect?: MovementWhereUniqueInput
    update?: XOR<XOR<MovementUpdateToOneWithWhereWithoutItemsInput, MovementUpdateWithoutItemsInput>, MovementUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutMovementItemsNestedInput = {
    create?: XOR<ProductCreateWithoutMovementItemsInput, ProductUncheckedCreateWithoutMovementItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementItemsInput
    upsert?: ProductUpsertWithoutMovementItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMovementItemsInput, ProductUpdateWithoutMovementItemsInput>, ProductUncheckedUpdateWithoutMovementItemsInput>
  }

  export type MovementCreateNestedManyWithoutWithdrawerInput = {
    create?: XOR<MovementCreateWithoutWithdrawerInput, MovementUncheckedCreateWithoutWithdrawerInput> | MovementCreateWithoutWithdrawerInput[] | MovementUncheckedCreateWithoutWithdrawerInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWithdrawerInput | MovementCreateOrConnectWithoutWithdrawerInput[]
    createMany?: MovementCreateManyWithdrawerInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type MovementUncheckedCreateNestedManyWithoutWithdrawerInput = {
    create?: XOR<MovementCreateWithoutWithdrawerInput, MovementUncheckedCreateWithoutWithdrawerInput> | MovementCreateWithoutWithdrawerInput[] | MovementUncheckedCreateWithoutWithdrawerInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWithdrawerInput | MovementCreateOrConnectWithoutWithdrawerInput[]
    createMany?: MovementCreateManyWithdrawerInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type MovementUpdateManyWithoutWithdrawerNestedInput = {
    create?: XOR<MovementCreateWithoutWithdrawerInput, MovementUncheckedCreateWithoutWithdrawerInput> | MovementCreateWithoutWithdrawerInput[] | MovementUncheckedCreateWithoutWithdrawerInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWithdrawerInput | MovementCreateOrConnectWithoutWithdrawerInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutWithdrawerInput | MovementUpsertWithWhereUniqueWithoutWithdrawerInput[]
    createMany?: MovementCreateManyWithdrawerInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutWithdrawerInput | MovementUpdateWithWhereUniqueWithoutWithdrawerInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutWithdrawerInput | MovementUpdateManyWithWhereWithoutWithdrawerInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type MovementUncheckedUpdateManyWithoutWithdrawerNestedInput = {
    create?: XOR<MovementCreateWithoutWithdrawerInput, MovementUncheckedCreateWithoutWithdrawerInput> | MovementCreateWithoutWithdrawerInput[] | MovementUncheckedCreateWithoutWithdrawerInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutWithdrawerInput | MovementCreateOrConnectWithoutWithdrawerInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutWithdrawerInput | MovementUpsertWithWhereUniqueWithoutWithdrawerInput[]
    createMany?: MovementCreateManyWithdrawerInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutWithdrawerInput | MovementUpdateWithWhereUniqueWithoutWithdrawerInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutWithdrawerInput | MovementUpdateManyWithWhereWithoutWithdrawerInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type WorkCreateWithoutClientInput = {
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementCreateNestedManyWithoutWorkInput
    stockpiles?: StockpileCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutClientInput = {
    id?: number
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementUncheckedCreateNestedManyWithoutWorkInput
    stockpiles?: StockpileUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutClientInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutClientInput, WorkUncheckedCreateWithoutClientInput>
  }

  export type WorkCreateManyClientInputEnvelope = {
    data: WorkCreateManyClientInput | WorkCreateManyClientInput[]
  }

  export type WorkUpsertWithWhereUniqueWithoutClientInput = {
    where: WorkWhereUniqueInput
    update: XOR<WorkUpdateWithoutClientInput, WorkUncheckedUpdateWithoutClientInput>
    create: XOR<WorkCreateWithoutClientInput, WorkUncheckedCreateWithoutClientInput>
  }

  export type WorkUpdateWithWhereUniqueWithoutClientInput = {
    where: WorkWhereUniqueInput
    data: XOR<WorkUpdateWithoutClientInput, WorkUncheckedUpdateWithoutClientInput>
  }

  export type WorkUpdateManyWithWhereWithoutClientInput = {
    where: WorkScalarWhereInput
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyWithoutClientInput>
  }

  export type WorkScalarWhereInput = {
    AND?: WorkScalarWhereInput | WorkScalarWhereInput[]
    OR?: WorkScalarWhereInput[]
    NOT?: WorkScalarWhereInput | WorkScalarWhereInput[]
    id?: IntFilter<"Work"> | number
    name?: StringFilter<"Work"> | string
    address?: StringNullableFilter<"Work"> | string | null
    observations?: StringNullableFilter<"Work"> | string | null
    active?: BoolFilter<"Work"> | boolean
    clientId?: IntFilter<"Work"> | number
    createdAt?: DateTimeFilter<"Work"> | Date | string
    updatedAt?: DateTimeFilter<"Work"> | Date | string
  }

  export type ClientCreateWithoutWorksInput = {
    name: string
    lastName?: string | null
    dni?: string | null
    phone?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutWorksInput = {
    id?: number
    name: string
    lastName?: string | null
    dni?: string | null
    phone?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutWorksInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutWorksInput, ClientUncheckedCreateWithoutWorksInput>
  }

  export type MovementCreateWithoutWorkInput = {
    type: string
    amount?: number | null
    date?: Date | string
    observations?: string | null
    items?: MovementItemCreateNestedManyWithoutMovementInput
    withdrawer?: WithdrawerCreateNestedOneWithoutMovementsInput
  }

  export type MovementUncheckedCreateWithoutWorkInput = {
    id?: number
    type: string
    amount?: number | null
    date?: Date | string
    withdrawerId?: number | null
    observations?: string | null
    items?: MovementItemUncheckedCreateNestedManyWithoutMovementInput
  }

  export type MovementCreateOrConnectWithoutWorkInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutWorkInput, MovementUncheckedCreateWithoutWorkInput>
  }

  export type MovementCreateManyWorkInputEnvelope = {
    data: MovementCreateManyWorkInput | MovementCreateManyWorkInput[]
  }

  export type StockpileCreateWithoutWorkInput = {
    quantity: number
    price: number
    withdrawn?: number
    date?: Date | string
    observations?: string | null
    product: ProductCreateNestedOneWithoutStockpileItemsInput
  }

  export type StockpileUncheckedCreateWithoutWorkInput = {
    id?: number
    productId: string
    quantity: number
    price: number
    withdrawn?: number
    date?: Date | string
    observations?: string | null
  }

  export type StockpileCreateOrConnectWithoutWorkInput = {
    where: StockpileWhereUniqueInput
    create: XOR<StockpileCreateWithoutWorkInput, StockpileUncheckedCreateWithoutWorkInput>
  }

  export type StockpileCreateManyWorkInputEnvelope = {
    data: StockpileCreateManyWorkInput | StockpileCreateManyWorkInput[]
  }

  export type ClientUpsertWithoutWorksInput = {
    update: XOR<ClientUpdateWithoutWorksInput, ClientUncheckedUpdateWithoutWorksInput>
    create: XOR<ClientCreateWithoutWorksInput, ClientUncheckedCreateWithoutWorksInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutWorksInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutWorksInput, ClientUncheckedUpdateWithoutWorksInput>
  }

  export type ClientUpdateWithoutWorksInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutWorksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUpsertWithWhereUniqueWithoutWorkInput = {
    where: MovementWhereUniqueInput
    update: XOR<MovementUpdateWithoutWorkInput, MovementUncheckedUpdateWithoutWorkInput>
    create: XOR<MovementCreateWithoutWorkInput, MovementUncheckedCreateWithoutWorkInput>
  }

  export type MovementUpdateWithWhereUniqueWithoutWorkInput = {
    where: MovementWhereUniqueInput
    data: XOR<MovementUpdateWithoutWorkInput, MovementUncheckedUpdateWithoutWorkInput>
  }

  export type MovementUpdateManyWithWhereWithoutWorkInput = {
    where: MovementScalarWhereInput
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyWithoutWorkInput>
  }

  export type MovementScalarWhereInput = {
    AND?: MovementScalarWhereInput | MovementScalarWhereInput[]
    OR?: MovementScalarWhereInput[]
    NOT?: MovementScalarWhereInput | MovementScalarWhereInput[]
    id?: IntFilter<"Movement"> | number
    type?: StringFilter<"Movement"> | string
    amount?: FloatNullableFilter<"Movement"> | number | null
    date?: DateTimeFilter<"Movement"> | Date | string
    workId?: IntFilter<"Movement"> | number
    withdrawerId?: IntNullableFilter<"Movement"> | number | null
    observations?: StringNullableFilter<"Movement"> | string | null
  }

  export type StockpileUpsertWithWhereUniqueWithoutWorkInput = {
    where: StockpileWhereUniqueInput
    update: XOR<StockpileUpdateWithoutWorkInput, StockpileUncheckedUpdateWithoutWorkInput>
    create: XOR<StockpileCreateWithoutWorkInput, StockpileUncheckedCreateWithoutWorkInput>
  }

  export type StockpileUpdateWithWhereUniqueWithoutWorkInput = {
    where: StockpileWhereUniqueInput
    data: XOR<StockpileUpdateWithoutWorkInput, StockpileUncheckedUpdateWithoutWorkInput>
  }

  export type StockpileUpdateManyWithWhereWithoutWorkInput = {
    where: StockpileScalarWhereInput
    data: XOR<StockpileUpdateManyMutationInput, StockpileUncheckedUpdateManyWithoutWorkInput>
  }

  export type StockpileScalarWhereInput = {
    AND?: StockpileScalarWhereInput | StockpileScalarWhereInput[]
    OR?: StockpileScalarWhereInput[]
    NOT?: StockpileScalarWhereInput | StockpileScalarWhereInput[]
    id?: IntFilter<"Stockpile"> | number
    workId?: IntFilter<"Stockpile"> | number
    productId?: StringFilter<"Stockpile"> | string
    quantity?: FloatFilter<"Stockpile"> | number
    price?: FloatFilter<"Stockpile"> | number
    withdrawn?: FloatFilter<"Stockpile"> | number
    date?: DateTimeFilter<"Stockpile"> | Date | string
    observations?: StringNullableFilter<"Stockpile"> | string | null
  }

  export type StockpileCreateWithoutProductInput = {
    quantity: number
    price: number
    withdrawn?: number
    date?: Date | string
    observations?: string | null
    work: WorkCreateNestedOneWithoutStockpilesInput
  }

  export type StockpileUncheckedCreateWithoutProductInput = {
    id?: number
    workId: number
    quantity: number
    price: number
    withdrawn?: number
    date?: Date | string
    observations?: string | null
  }

  export type StockpileCreateOrConnectWithoutProductInput = {
    where: StockpileWhereUniqueInput
    create: XOR<StockpileCreateWithoutProductInput, StockpileUncheckedCreateWithoutProductInput>
  }

  export type StockpileCreateManyProductInputEnvelope = {
    data: StockpileCreateManyProductInput | StockpileCreateManyProductInput[]
  }

  export type MovementItemCreateWithoutProductInput = {
    quantity: number
    price: number
    movement: MovementCreateNestedOneWithoutItemsInput
  }

  export type MovementItemUncheckedCreateWithoutProductInput = {
    id?: number
    movementId: number
    quantity: number
    price: number
  }

  export type MovementItemCreateOrConnectWithoutProductInput = {
    where: MovementItemWhereUniqueInput
    create: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput>
  }

  export type MovementItemCreateManyProductInputEnvelope = {
    data: MovementItemCreateManyProductInput | MovementItemCreateManyProductInput[]
  }

  export type PriceHistoryCreateWithoutProductInput = {
    price: number
    date?: Date | string
  }

  export type PriceHistoryUncheckedCreateWithoutProductInput = {
    id?: number
    price: number
    date?: Date | string
  }

  export type PriceHistoryCreateOrConnectWithoutProductInput = {
    where: PriceHistoryWhereUniqueInput
    create: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput>
  }

  export type PriceHistoryCreateManyProductInputEnvelope = {
    data: PriceHistoryCreateManyProductInput | PriceHistoryCreateManyProductInput[]
  }

  export type StockpileUpsertWithWhereUniqueWithoutProductInput = {
    where: StockpileWhereUniqueInput
    update: XOR<StockpileUpdateWithoutProductInput, StockpileUncheckedUpdateWithoutProductInput>
    create: XOR<StockpileCreateWithoutProductInput, StockpileUncheckedCreateWithoutProductInput>
  }

  export type StockpileUpdateWithWhereUniqueWithoutProductInput = {
    where: StockpileWhereUniqueInput
    data: XOR<StockpileUpdateWithoutProductInput, StockpileUncheckedUpdateWithoutProductInput>
  }

  export type StockpileUpdateManyWithWhereWithoutProductInput = {
    where: StockpileScalarWhereInput
    data: XOR<StockpileUpdateManyMutationInput, StockpileUncheckedUpdateManyWithoutProductInput>
  }

  export type MovementItemUpsertWithWhereUniqueWithoutProductInput = {
    where: MovementItemWhereUniqueInput
    update: XOR<MovementItemUpdateWithoutProductInput, MovementItemUncheckedUpdateWithoutProductInput>
    create: XOR<MovementItemCreateWithoutProductInput, MovementItemUncheckedCreateWithoutProductInput>
  }

  export type MovementItemUpdateWithWhereUniqueWithoutProductInput = {
    where: MovementItemWhereUniqueInput
    data: XOR<MovementItemUpdateWithoutProductInput, MovementItemUncheckedUpdateWithoutProductInput>
  }

  export type MovementItemUpdateManyWithWhereWithoutProductInput = {
    where: MovementItemScalarWhereInput
    data: XOR<MovementItemUpdateManyMutationInput, MovementItemUncheckedUpdateManyWithoutProductInput>
  }

  export type MovementItemScalarWhereInput = {
    AND?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
    OR?: MovementItemScalarWhereInput[]
    NOT?: MovementItemScalarWhereInput | MovementItemScalarWhereInput[]
    id?: IntFilter<"MovementItem"> | number
    movementId?: IntFilter<"MovementItem"> | number
    productId?: StringFilter<"MovementItem"> | string
    quantity?: FloatFilter<"MovementItem"> | number
    price?: FloatFilter<"MovementItem"> | number
  }

  export type PriceHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: PriceHistoryWhereUniqueInput
    update: XOR<PriceHistoryUpdateWithoutProductInput, PriceHistoryUncheckedUpdateWithoutProductInput>
    create: XOR<PriceHistoryCreateWithoutProductInput, PriceHistoryUncheckedCreateWithoutProductInput>
  }

  export type PriceHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: PriceHistoryWhereUniqueInput
    data: XOR<PriceHistoryUpdateWithoutProductInput, PriceHistoryUncheckedUpdateWithoutProductInput>
  }

  export type PriceHistoryUpdateManyWithWhereWithoutProductInput = {
    where: PriceHistoryScalarWhereInput
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyWithoutProductInput>
  }

  export type PriceHistoryScalarWhereInput = {
    AND?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    OR?: PriceHistoryScalarWhereInput[]
    NOT?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    id?: IntFilter<"PriceHistory"> | number
    productId?: StringFilter<"PriceHistory"> | string
    price?: FloatFilter<"PriceHistory"> | number
    date?: DateTimeFilter<"PriceHistory"> | Date | string
  }

  export type ProductCreateWithoutPriceHistoryInput = {
    code: string
    description: string
    category?: string | null
    price: number
    active?: boolean
    lastUpdated?: Date | string
    stockpileItems?: StockpileCreateNestedManyWithoutProductInput
    movementItems?: MovementItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPriceHistoryInput = {
    code: string
    description: string
    category?: string | null
    price: number
    active?: boolean
    lastUpdated?: Date | string
    stockpileItems?: StockpileUncheckedCreateNestedManyWithoutProductInput
    movementItems?: MovementItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPriceHistoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
  }

  export type ProductUpsertWithoutPriceHistoryInput = {
    update: XOR<ProductUpdateWithoutPriceHistoryInput, ProductUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPriceHistoryInput, ProductUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type ProductUpdateWithoutPriceHistoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    stockpileItems?: StockpileUpdateManyWithoutProductNestedInput
    movementItems?: MovementItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPriceHistoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    stockpileItems?: StockpileUncheckedUpdateManyWithoutProductNestedInput
    movementItems?: MovementItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WorkCreateWithoutStockpilesInput = {
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutWorksInput
    movements?: MovementCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutStockpilesInput = {
    id?: number
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutStockpilesInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutStockpilesInput, WorkUncheckedCreateWithoutStockpilesInput>
  }

  export type ProductCreateWithoutStockpileItemsInput = {
    code: string
    description: string
    category?: string | null
    price: number
    active?: boolean
    lastUpdated?: Date | string
    movementItems?: MovementItemCreateNestedManyWithoutProductInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockpileItemsInput = {
    code: string
    description: string
    category?: string | null
    price: number
    active?: boolean
    lastUpdated?: Date | string
    movementItems?: MovementItemUncheckedCreateNestedManyWithoutProductInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockpileItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockpileItemsInput, ProductUncheckedCreateWithoutStockpileItemsInput>
  }

  export type WorkUpsertWithoutStockpilesInput = {
    update: XOR<WorkUpdateWithoutStockpilesInput, WorkUncheckedUpdateWithoutStockpilesInput>
    create: XOR<WorkCreateWithoutStockpilesInput, WorkUncheckedCreateWithoutStockpilesInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutStockpilesInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutStockpilesInput, WorkUncheckedUpdateWithoutStockpilesInput>
  }

  export type WorkUpdateWithoutStockpilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutWorksNestedInput
    movements?: MovementUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutStockpilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type ProductUpsertWithoutStockpileItemsInput = {
    update: XOR<ProductUpdateWithoutStockpileItemsInput, ProductUncheckedUpdateWithoutStockpileItemsInput>
    create: XOR<ProductCreateWithoutStockpileItemsInput, ProductUncheckedCreateWithoutStockpileItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockpileItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockpileItemsInput, ProductUncheckedUpdateWithoutStockpileItemsInput>
  }

  export type ProductUpdateWithoutStockpileItemsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    movementItems?: MovementItemUpdateManyWithoutProductNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockpileItemsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    movementItems?: MovementItemUncheckedUpdateManyWithoutProductNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WorkCreateWithoutMovementsInput = {
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutWorksInput
    stockpiles?: StockpileCreateNestedManyWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutMovementsInput = {
    id?: number
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    clientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockpiles?: StockpileUncheckedCreateNestedManyWithoutWorkInput
  }

  export type WorkCreateOrConnectWithoutMovementsInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutMovementsInput, WorkUncheckedCreateWithoutMovementsInput>
  }

  export type MovementItemCreateWithoutMovementInput = {
    quantity: number
    price: number
    product: ProductCreateNestedOneWithoutMovementItemsInput
  }

  export type MovementItemUncheckedCreateWithoutMovementInput = {
    id?: number
    productId: string
    quantity: number
    price: number
  }

  export type MovementItemCreateOrConnectWithoutMovementInput = {
    where: MovementItemWhereUniqueInput
    create: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput>
  }

  export type MovementItemCreateManyMovementInputEnvelope = {
    data: MovementItemCreateManyMovementInput | MovementItemCreateManyMovementInput[]
  }

  export type WithdrawerCreateWithoutMovementsInput = {
    name: string
    dni?: string | null
    phone?: string | null
    observations?: string | null
  }

  export type WithdrawerUncheckedCreateWithoutMovementsInput = {
    id?: number
    name: string
    dni?: string | null
    phone?: string | null
    observations?: string | null
  }

  export type WithdrawerCreateOrConnectWithoutMovementsInput = {
    where: WithdrawerWhereUniqueInput
    create: XOR<WithdrawerCreateWithoutMovementsInput, WithdrawerUncheckedCreateWithoutMovementsInput>
  }

  export type WorkUpsertWithoutMovementsInput = {
    update: XOR<WorkUpdateWithoutMovementsInput, WorkUncheckedUpdateWithoutMovementsInput>
    create: XOR<WorkCreateWithoutMovementsInput, WorkUncheckedCreateWithoutMovementsInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutMovementsInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutMovementsInput, WorkUncheckedUpdateWithoutMovementsInput>
  }

  export type WorkUpdateWithoutMovementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutWorksNestedInput
    stockpiles?: StockpileUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutMovementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    clientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockpiles?: StockpileUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type MovementItemUpsertWithWhereUniqueWithoutMovementInput = {
    where: MovementItemWhereUniqueInput
    update: XOR<MovementItemUpdateWithoutMovementInput, MovementItemUncheckedUpdateWithoutMovementInput>
    create: XOR<MovementItemCreateWithoutMovementInput, MovementItemUncheckedCreateWithoutMovementInput>
  }

  export type MovementItemUpdateWithWhereUniqueWithoutMovementInput = {
    where: MovementItemWhereUniqueInput
    data: XOR<MovementItemUpdateWithoutMovementInput, MovementItemUncheckedUpdateWithoutMovementInput>
  }

  export type MovementItemUpdateManyWithWhereWithoutMovementInput = {
    where: MovementItemScalarWhereInput
    data: XOR<MovementItemUpdateManyMutationInput, MovementItemUncheckedUpdateManyWithoutMovementInput>
  }

  export type WithdrawerUpsertWithoutMovementsInput = {
    update: XOR<WithdrawerUpdateWithoutMovementsInput, WithdrawerUncheckedUpdateWithoutMovementsInput>
    create: XOR<WithdrawerCreateWithoutMovementsInput, WithdrawerUncheckedCreateWithoutMovementsInput>
    where?: WithdrawerWhereInput
  }

  export type WithdrawerUpdateToOneWithWhereWithoutMovementsInput = {
    where?: WithdrawerWhereInput
    data: XOR<WithdrawerUpdateWithoutMovementsInput, WithdrawerUncheckedUpdateWithoutMovementsInput>
  }

  export type WithdrawerUpdateWithoutMovementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WithdrawerUncheckedUpdateWithoutMovementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovementCreateWithoutItemsInput = {
    type: string
    amount?: number | null
    date?: Date | string
    observations?: string | null
    work: WorkCreateNestedOneWithoutMovementsInput
    withdrawer?: WithdrawerCreateNestedOneWithoutMovementsInput
  }

  export type MovementUncheckedCreateWithoutItemsInput = {
    id?: number
    type: string
    amount?: number | null
    date?: Date | string
    workId: number
    withdrawerId?: number | null
    observations?: string | null
  }

  export type MovementCreateOrConnectWithoutItemsInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutItemsInput, MovementUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutMovementItemsInput = {
    code: string
    description: string
    category?: string | null
    price: number
    active?: boolean
    lastUpdated?: Date | string
    stockpileItems?: StockpileCreateNestedManyWithoutProductInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMovementItemsInput = {
    code: string
    description: string
    category?: string | null
    price: number
    active?: boolean
    lastUpdated?: Date | string
    stockpileItems?: StockpileUncheckedCreateNestedManyWithoutProductInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMovementItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMovementItemsInput, ProductUncheckedCreateWithoutMovementItemsInput>
  }

  export type MovementUpsertWithoutItemsInput = {
    update: XOR<MovementUpdateWithoutItemsInput, MovementUncheckedUpdateWithoutItemsInput>
    create: XOR<MovementCreateWithoutItemsInput, MovementUncheckedCreateWithoutItemsInput>
    where?: MovementWhereInput
  }

  export type MovementUpdateToOneWithWhereWithoutItemsInput = {
    where?: MovementWhereInput
    data: XOR<MovementUpdateWithoutItemsInput, MovementUncheckedUpdateWithoutItemsInput>
  }

  export type MovementUpdateWithoutItemsInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    work?: WorkUpdateOneRequiredWithoutMovementsNestedInput
    withdrawer?: WithdrawerUpdateOneWithoutMovementsNestedInput
  }

  export type MovementUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: IntFieldUpdateOperationsInput | number
    withdrawerId?: NullableIntFieldUpdateOperationsInput | number | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpsertWithoutMovementItemsInput = {
    update: XOR<ProductUpdateWithoutMovementItemsInput, ProductUncheckedUpdateWithoutMovementItemsInput>
    create: XOR<ProductCreateWithoutMovementItemsInput, ProductUncheckedCreateWithoutMovementItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMovementItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMovementItemsInput, ProductUncheckedUpdateWithoutMovementItemsInput>
  }

  export type ProductUpdateWithoutMovementItemsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    stockpileItems?: StockpileUpdateManyWithoutProductNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMovementItemsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    stockpileItems?: StockpileUncheckedUpdateManyWithoutProductNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type MovementCreateWithoutWithdrawerInput = {
    type: string
    amount?: number | null
    date?: Date | string
    observations?: string | null
    work: WorkCreateNestedOneWithoutMovementsInput
    items?: MovementItemCreateNestedManyWithoutMovementInput
  }

  export type MovementUncheckedCreateWithoutWithdrawerInput = {
    id?: number
    type: string
    amount?: number | null
    date?: Date | string
    workId: number
    observations?: string | null
    items?: MovementItemUncheckedCreateNestedManyWithoutMovementInput
  }

  export type MovementCreateOrConnectWithoutWithdrawerInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutWithdrawerInput, MovementUncheckedCreateWithoutWithdrawerInput>
  }

  export type MovementCreateManyWithdrawerInputEnvelope = {
    data: MovementCreateManyWithdrawerInput | MovementCreateManyWithdrawerInput[]
  }

  export type MovementUpsertWithWhereUniqueWithoutWithdrawerInput = {
    where: MovementWhereUniqueInput
    update: XOR<MovementUpdateWithoutWithdrawerInput, MovementUncheckedUpdateWithoutWithdrawerInput>
    create: XOR<MovementCreateWithoutWithdrawerInput, MovementUncheckedCreateWithoutWithdrawerInput>
  }

  export type MovementUpdateWithWhereUniqueWithoutWithdrawerInput = {
    where: MovementWhereUniqueInput
    data: XOR<MovementUpdateWithoutWithdrawerInput, MovementUncheckedUpdateWithoutWithdrawerInput>
  }

  export type MovementUpdateManyWithWhereWithoutWithdrawerInput = {
    where: MovementScalarWhereInput
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyWithoutWithdrawerInput>
  }

  export type WorkCreateManyClientInput = {
    id?: number
    name: string
    address?: string | null
    observations?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkUpdateWithoutClientInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementUpdateManyWithoutWorkNestedInput
    stockpiles?: StockpileUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementUncheckedUpdateManyWithoutWorkNestedInput
    stockpiles?: StockpileUncheckedUpdateManyWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateManyWorkInput = {
    id?: number
    type: string
    amount?: number | null
    date?: Date | string
    withdrawerId?: number | null
    observations?: string | null
  }

  export type StockpileCreateManyWorkInput = {
    id?: number
    productId: string
    quantity: number
    price: number
    withdrawn?: number
    date?: Date | string
    observations?: string | null
  }

  export type MovementUpdateWithoutWorkInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    items?: MovementItemUpdateManyWithoutMovementNestedInput
    withdrawer?: WithdrawerUpdateOneWithoutMovementsNestedInput
  }

  export type MovementUncheckedUpdateWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    withdrawerId?: NullableIntFieldUpdateOperationsInput | number | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    items?: MovementItemUncheckedUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateManyWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    withdrawerId?: NullableIntFieldUpdateOperationsInput | number | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockpileUpdateWithoutWorkInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutStockpileItemsNestedInput
  }

  export type StockpileUncheckedUpdateWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockpileUncheckedUpdateManyWithoutWorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockpileCreateManyProductInput = {
    id?: number
    workId: number
    quantity: number
    price: number
    withdrawn?: number
    date?: Date | string
    observations?: string | null
  }

  export type MovementItemCreateManyProductInput = {
    id?: number
    movementId: number
    quantity: number
    price: number
  }

  export type PriceHistoryCreateManyProductInput = {
    id?: number
    price: number
    date?: Date | string
  }

  export type StockpileUpdateWithoutProductInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    work?: WorkUpdateOneRequiredWithoutStockpilesNestedInput
  }

  export type StockpileUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    workId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockpileUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    workId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    withdrawn?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovementItemUpdateWithoutProductInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    movement?: MovementUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MovementItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    movementId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MovementItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    movementId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PriceHistoryUpdateWithoutProductInput = {
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementItemCreateManyMovementInput = {
    id?: number
    productId: string
    quantity: number
    price: number
  }

  export type MovementItemUpdateWithoutMovementInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutMovementItemsNestedInput
  }

  export type MovementItemUncheckedUpdateWithoutMovementInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MovementItemUncheckedUpdateManyWithoutMovementInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MovementCreateManyWithdrawerInput = {
    id?: number
    type: string
    amount?: number | null
    date?: Date | string
    workId: number
    observations?: string | null
  }

  export type MovementUpdateWithoutWithdrawerInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    work?: WorkUpdateOneRequiredWithoutMovementsNestedInput
    items?: MovementItemUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateWithoutWithdrawerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    items?: MovementItemUncheckedUpdateManyWithoutMovementNestedInput
  }

  export type MovementUncheckedUpdateManyWithoutWithdrawerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workId?: IntFieldUpdateOperationsInput | number
    observations?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkCountOutputTypeDefaultArgs instead
     */
    export type WorkCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovementCountOutputTypeDefaultArgs instead
     */
    export type MovementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WithdrawerCountOutputTypeDefaultArgs instead
     */
    export type WithdrawerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WithdrawerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkDefaultArgs instead
     */
    export type WorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceHistoryDefaultArgs instead
     */
    export type PriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockpileDefaultArgs instead
     */
    export type StockpileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockpileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovementDefaultArgs instead
     */
    export type MovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovementItemDefaultArgs instead
     */
    export type MovementItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovementItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WithdrawerDefaultArgs instead
     */
    export type WithdrawerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WithdrawerDefaultArgs<ExtArgs>

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