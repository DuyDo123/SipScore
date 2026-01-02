
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Drink
 * 
 */
export type Drink = $Result.DefaultSelection<Prisma.$DrinkPayload>
/**
 * Model Topping
 * 
 */
export type Topping = $Result.DefaultSelection<Prisma.$ToppingPayload>
/**
 * Model DrinkTopping
 * 
 */
export type DrinkTopping = $Result.DefaultSelection<Prisma.$DrinkToppingPayload>
/**
 * Model ShopRating
 * 
 */
export type ShopRating = $Result.DefaultSelection<Prisma.$ShopRatingPayload>
/**
 * Model DrinkRating
 * 
 */
export type DrinkRating = $Result.DefaultSelection<Prisma.$DrinkRatingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drink`: Exposes CRUD operations for the **Drink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drinks
    * const drinks = await prisma.drink.findMany()
    * ```
    */
  get drink(): Prisma.DrinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topping`: Exposes CRUD operations for the **Topping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Toppings
    * const toppings = await prisma.topping.findMany()
    * ```
    */
  get topping(): Prisma.ToppingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drinkTopping`: Exposes CRUD operations for the **DrinkTopping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrinkToppings
    * const drinkToppings = await prisma.drinkTopping.findMany()
    * ```
    */
  get drinkTopping(): Prisma.DrinkToppingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopRating`: Exposes CRUD operations for the **ShopRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopRatings
    * const shopRatings = await prisma.shopRating.findMany()
    * ```
    */
  get shopRating(): Prisma.ShopRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drinkRating`: Exposes CRUD operations for the **DrinkRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrinkRatings
    * const drinkRatings = await prisma.drinkRating.findMany()
    * ```
    */
  get drinkRating(): Prisma.DrinkRatingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
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
    User: 'User',
    Shop: 'Shop',
    Drink: 'Drink',
    Topping: 'Topping',
    DrinkTopping: 'DrinkTopping',
    ShopRating: 'ShopRating',
    DrinkRating: 'DrinkRating'
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
      modelProps: "user" | "shop" | "drink" | "topping" | "drinkTopping" | "shopRating" | "drinkRating"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Drink: {
        payload: Prisma.$DrinkPayload<ExtArgs>
        fields: Prisma.DrinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          findFirst: {
            args: Prisma.DrinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          findMany: {
            args: Prisma.DrinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>[]
          }
          create: {
            args: Prisma.DrinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          createMany: {
            args: Prisma.DrinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>[]
          }
          delete: {
            args: Prisma.DrinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          update: {
            args: Prisma.DrinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          deleteMany: {
            args: Prisma.DrinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>[]
          }
          upsert: {
            args: Prisma.DrinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkPayload>
          }
          aggregate: {
            args: Prisma.DrinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrink>
          }
          groupBy: {
            args: Prisma.DrinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrinkCountArgs<ExtArgs>
            result: $Utils.Optional<DrinkCountAggregateOutputType> | number
          }
        }
      }
      Topping: {
        payload: Prisma.$ToppingPayload<ExtArgs>
        fields: Prisma.ToppingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToppingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToppingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          findFirst: {
            args: Prisma.ToppingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToppingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          findMany: {
            args: Prisma.ToppingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>[]
          }
          create: {
            args: Prisma.ToppingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          createMany: {
            args: Prisma.ToppingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToppingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>[]
          }
          delete: {
            args: Prisma.ToppingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          update: {
            args: Prisma.ToppingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          deleteMany: {
            args: Prisma.ToppingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToppingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToppingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>[]
          }
          upsert: {
            args: Prisma.ToppingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          aggregate: {
            args: Prisma.ToppingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopping>
          }
          groupBy: {
            args: Prisma.ToppingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToppingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToppingCountArgs<ExtArgs>
            result: $Utils.Optional<ToppingCountAggregateOutputType> | number
          }
        }
      }
      DrinkTopping: {
        payload: Prisma.$DrinkToppingPayload<ExtArgs>
        fields: Prisma.DrinkToppingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrinkToppingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrinkToppingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload>
          }
          findFirst: {
            args: Prisma.DrinkToppingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrinkToppingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload>
          }
          findMany: {
            args: Prisma.DrinkToppingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload>[]
          }
          create: {
            args: Prisma.DrinkToppingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload>
          }
          createMany: {
            args: Prisma.DrinkToppingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrinkToppingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload>[]
          }
          delete: {
            args: Prisma.DrinkToppingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload>
          }
          update: {
            args: Prisma.DrinkToppingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload>
          }
          deleteMany: {
            args: Prisma.DrinkToppingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrinkToppingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrinkToppingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload>[]
          }
          upsert: {
            args: Prisma.DrinkToppingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkToppingPayload>
          }
          aggregate: {
            args: Prisma.DrinkToppingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrinkTopping>
          }
          groupBy: {
            args: Prisma.DrinkToppingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrinkToppingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrinkToppingCountArgs<ExtArgs>
            result: $Utils.Optional<DrinkToppingCountAggregateOutputType> | number
          }
        }
      }
      ShopRating: {
        payload: Prisma.$ShopRatingPayload<ExtArgs>
        fields: Prisma.ShopRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload>
          }
          findFirst: {
            args: Prisma.ShopRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload>
          }
          findMany: {
            args: Prisma.ShopRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload>[]
          }
          create: {
            args: Prisma.ShopRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload>
          }
          createMany: {
            args: Prisma.ShopRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload>[]
          }
          delete: {
            args: Prisma.ShopRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload>
          }
          update: {
            args: Prisma.ShopRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload>
          }
          deleteMany: {
            args: Prisma.ShopRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload>[]
          }
          upsert: {
            args: Prisma.ShopRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopRatingPayload>
          }
          aggregate: {
            args: Prisma.ShopRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopRating>
          }
          groupBy: {
            args: Prisma.ShopRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopRatingCountArgs<ExtArgs>
            result: $Utils.Optional<ShopRatingCountAggregateOutputType> | number
          }
        }
      }
      DrinkRating: {
        payload: Prisma.$DrinkRatingPayload<ExtArgs>
        fields: Prisma.DrinkRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrinkRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrinkRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload>
          }
          findFirst: {
            args: Prisma.DrinkRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrinkRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload>
          }
          findMany: {
            args: Prisma.DrinkRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload>[]
          }
          create: {
            args: Prisma.DrinkRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload>
          }
          createMany: {
            args: Prisma.DrinkRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrinkRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload>[]
          }
          delete: {
            args: Prisma.DrinkRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload>
          }
          update: {
            args: Prisma.DrinkRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload>
          }
          deleteMany: {
            args: Prisma.DrinkRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrinkRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrinkRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload>[]
          }
          upsert: {
            args: Prisma.DrinkRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrinkRatingPayload>
          }
          aggregate: {
            args: Prisma.DrinkRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrinkRating>
          }
          groupBy: {
            args: Prisma.DrinkRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrinkRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrinkRatingCountArgs<ExtArgs>
            result: $Utils.Optional<DrinkRatingCountAggregateOutputType> | number
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
    user?: UserOmit
    shop?: ShopOmit
    drink?: DrinkOmit
    topping?: ToppingOmit
    drinkTopping?: DrinkToppingOmit
    shopRating?: ShopRatingOmit
    drinkRating?: DrinkRatingOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    drinkRatings: number
    shopRatings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drinkRatings?: boolean | UserCountOutputTypeCountDrinkRatingsArgs
    shopRatings?: boolean | UserCountOutputTypeCountShopRatingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDrinkRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkRatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShopRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopRatingWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    drinks: number
    ratings: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drinks?: boolean | ShopCountOutputTypeCountDrinksArgs
    ratings?: boolean | ShopCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountDrinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopRatingWhereInput
  }


  /**
   * Count Type DrinkCountOutputType
   */

  export type DrinkCountOutputType = {
    ratings: number
    toppings: number
  }

  export type DrinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ratings?: boolean | DrinkCountOutputTypeCountRatingsArgs
    toppings?: boolean | DrinkCountOutputTypeCountToppingsArgs
  }

  // Custom InputTypes
  /**
   * DrinkCountOutputType without action
   */
  export type DrinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkCountOutputType
     */
    select?: DrinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrinkCountOutputType without action
   */
  export type DrinkCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkRatingWhereInput
  }

  /**
   * DrinkCountOutputType without action
   */
  export type DrinkCountOutputTypeCountToppingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkToppingWhereInput
  }


  /**
   * Count Type ToppingCountOutputType
   */

  export type ToppingCountOutputType = {
    drinks: number
  }

  export type ToppingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drinks?: boolean | ToppingCountOutputTypeCountDrinksArgs
  }

  // Custom InputTypes
  /**
   * ToppingCountOutputType without action
   */
  export type ToppingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToppingCountOutputType
     */
    select?: ToppingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToppingCountOutputType without action
   */
  export type ToppingCountOutputTypeCountDrinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkToppingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drinkRatings?: boolean | User$drinkRatingsArgs<ExtArgs>
    shopRatings?: boolean | User$shopRatingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drinkRatings?: boolean | User$drinkRatingsArgs<ExtArgs>
    shopRatings?: boolean | User$shopRatingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      drinkRatings: Prisma.$DrinkRatingPayload<ExtArgs>[]
      shopRatings: Prisma.$ShopRatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drinkRatings<T extends User$drinkRatingsArgs<ExtArgs> = {}>(args?: Subset<T, User$drinkRatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shopRatings<T extends User$shopRatingsArgs<ExtArgs> = {}>(args?: Subset<T, User$shopRatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.drinkRatings
   */
  export type User$drinkRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    where?: DrinkRatingWhereInput
    orderBy?: DrinkRatingOrderByWithRelationInput | DrinkRatingOrderByWithRelationInput[]
    cursor?: DrinkRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrinkRatingScalarFieldEnum | DrinkRatingScalarFieldEnum[]
  }

  /**
   * User.shopRatings
   */
  export type User$shopRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    where?: ShopRatingWhereInput
    orderBy?: ShopRatingOrderByWithRelationInput | ShopRatingOrderByWithRelationInput[]
    cursor?: ShopRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopRatingScalarFieldEnum | ShopRatingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ShopSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    website: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    latitude: number | null
    longitude: number | null
    phone: string | null
    website: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    state: number
    zipCode: number
    latitude: number
    longitude: number
    phone: number
    website: number
    hours: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ShopSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    latitude?: true
    longitude?: true
    phone?: true
    website?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    latitude?: true
    longitude?: true
    phone?: true
    website?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    latitude?: true
    longitude?: true
    phone?: true
    website?: true
    hours?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string | null
    latitude: number
    longitude: number
    phone: string | null
    website: string | null
    hours: JsonValue | null
    description: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    website?: boolean
    hours?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drinks?: boolean | Shop$drinksArgs<ExtArgs>
    ratings?: boolean | Shop$ratingsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    website?: boolean
    hours?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    website?: boolean
    hours?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    phone?: boolean
    website?: boolean
    hours?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "state" | "zipCode" | "latitude" | "longitude" | "phone" | "website" | "hours" | "description" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drinks?: boolean | Shop$drinksArgs<ExtArgs>
    ratings?: boolean | Shop$ratingsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      drinks: Prisma.$DrinkPayload<ExtArgs>[]
      ratings: Prisma.$ShopRatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      city: string
      state: string
      zipCode: string | null
      latitude: number
      longitude: number
      phone: string | null
      website: string | null
      hours: Prisma.JsonValue | null
      description: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
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
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drinks<T extends Shop$drinksArgs<ExtArgs> = {}>(args?: Subset<T, Shop$drinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Shop$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly address: FieldRef<"Shop", 'String'>
    readonly city: FieldRef<"Shop", 'String'>
    readonly state: FieldRef<"Shop", 'String'>
    readonly zipCode: FieldRef<"Shop", 'String'>
    readonly latitude: FieldRef<"Shop", 'Float'>
    readonly longitude: FieldRef<"Shop", 'Float'>
    readonly phone: FieldRef<"Shop", 'String'>
    readonly website: FieldRef<"Shop", 'String'>
    readonly hours: FieldRef<"Shop", 'Json'>
    readonly description: FieldRef<"Shop", 'String'>
    readonly imageUrl: FieldRef<"Shop", 'String'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.drinks
   */
  export type Shop$drinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    where?: DrinkWhereInput
    orderBy?: DrinkOrderByWithRelationInput | DrinkOrderByWithRelationInput[]
    cursor?: DrinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrinkScalarFieldEnum | DrinkScalarFieldEnum[]
  }

  /**
   * Shop.ratings
   */
  export type Shop$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    where?: ShopRatingWhereInput
    orderBy?: ShopRatingOrderByWithRelationInput | ShopRatingOrderByWithRelationInput[]
    cursor?: ShopRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopRatingScalarFieldEnum | ShopRatingScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model Drink
   */

  export type AggregateDrink = {
    _count: DrinkCountAggregateOutputType | null
    _avg: DrinkAvgAggregateOutputType | null
    _sum: DrinkSumAggregateOutputType | null
    _min: DrinkMinAggregateOutputType | null
    _max: DrinkMaxAggregateOutputType | null
  }

  export type DrinkAvgAggregateOutputType = {
    price: number | null
  }

  export type DrinkSumAggregateOutputType = {
    price: number | null
  }

  export type DrinkMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type DrinkMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type DrinkCountAggregateOutputType = {
    id: number
    shopId: number
    name: number
    description: number
    price: number
    category: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type DrinkAvgAggregateInputType = {
    price?: true
  }

  export type DrinkSumAggregateInputType = {
    price?: true
  }

  export type DrinkMinAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    imageUrl?: true
    createdAt?: true
  }

  export type DrinkMaxAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    imageUrl?: true
    createdAt?: true
  }

  export type DrinkCountAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type DrinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drink to aggregate.
     */
    where?: DrinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     */
    orderBy?: DrinkOrderByWithRelationInput | DrinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drinks
    **/
    _count?: true | DrinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrinkMaxAggregateInputType
  }

  export type GetDrinkAggregateType<T extends DrinkAggregateArgs> = {
        [P in keyof T & keyof AggregateDrink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrink[P]>
      : GetScalarType<T[P], AggregateDrink[P]>
  }




  export type DrinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkWhereInput
    orderBy?: DrinkOrderByWithAggregationInput | DrinkOrderByWithAggregationInput[]
    by: DrinkScalarFieldEnum[] | DrinkScalarFieldEnum
    having?: DrinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrinkCountAggregateInputType | true
    _avg?: DrinkAvgAggregateInputType
    _sum?: DrinkSumAggregateInputType
    _min?: DrinkMinAggregateInputType
    _max?: DrinkMaxAggregateInputType
  }

  export type DrinkGroupByOutputType = {
    id: string
    shopId: string
    name: string
    description: string | null
    price: number | null
    category: string | null
    imageUrl: string | null
    createdAt: Date
    _count: DrinkCountAggregateOutputType | null
    _avg: DrinkAvgAggregateOutputType | null
    _sum: DrinkSumAggregateOutputType | null
    _min: DrinkMinAggregateOutputType | null
    _max: DrinkMaxAggregateOutputType | null
  }

  type GetDrinkGroupByPayload<T extends DrinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrinkGroupByOutputType[P]>
            : GetScalarType<T[P], DrinkGroupByOutputType[P]>
        }
      >
    >


  export type DrinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    ratings?: boolean | Drink$ratingsArgs<ExtArgs>
    toppings?: boolean | Drink$toppingsArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    _count?: boolean | DrinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drink"]>

  export type DrinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drink"]>

  export type DrinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drink"]>

  export type DrinkSelectScalar = {
    id?: boolean
    shopId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type DrinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "name" | "description" | "price" | "category" | "imageUrl" | "createdAt", ExtArgs["result"]["drink"]>
  export type DrinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ratings?: boolean | Drink$ratingsArgs<ExtArgs>
    toppings?: boolean | Drink$toppingsArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    _count?: boolean | DrinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DrinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type DrinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $DrinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drink"
    objects: {
      ratings: Prisma.$DrinkRatingPayload<ExtArgs>[]
      toppings: Prisma.$DrinkToppingPayload<ExtArgs>[]
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      name: string
      description: string | null
      price: number | null
      category: string | null
      imageUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["drink"]>
    composites: {}
  }

  type DrinkGetPayload<S extends boolean | null | undefined | DrinkDefaultArgs> = $Result.GetResult<Prisma.$DrinkPayload, S>

  type DrinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrinkCountAggregateInputType | true
    }

  export interface DrinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drink'], meta: { name: 'Drink' } }
    /**
     * Find zero or one Drink that matches the filter.
     * @param {DrinkFindUniqueArgs} args - Arguments to find a Drink
     * @example
     * // Get one Drink
     * const drink = await prisma.drink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrinkFindUniqueArgs>(args: SelectSubset<T, DrinkFindUniqueArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrinkFindUniqueOrThrowArgs} args - Arguments to find a Drink
     * @example
     * // Get one Drink
     * const drink = await prisma.drink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrinkFindUniqueOrThrowArgs>(args: SelectSubset<T, DrinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkFindFirstArgs} args - Arguments to find a Drink
     * @example
     * // Get one Drink
     * const drink = await prisma.drink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrinkFindFirstArgs>(args?: SelectSubset<T, DrinkFindFirstArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkFindFirstOrThrowArgs} args - Arguments to find a Drink
     * @example
     * // Get one Drink
     * const drink = await prisma.drink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrinkFindFirstOrThrowArgs>(args?: SelectSubset<T, DrinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drinks
     * const drinks = await prisma.drink.findMany()
     * 
     * // Get first 10 Drinks
     * const drinks = await prisma.drink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drinkWithIdOnly = await prisma.drink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrinkFindManyArgs>(args?: SelectSubset<T, DrinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drink.
     * @param {DrinkCreateArgs} args - Arguments to create a Drink.
     * @example
     * // Create one Drink
     * const Drink = await prisma.drink.create({
     *   data: {
     *     // ... data to create a Drink
     *   }
     * })
     * 
     */
    create<T extends DrinkCreateArgs>(args: SelectSubset<T, DrinkCreateArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drinks.
     * @param {DrinkCreateManyArgs} args - Arguments to create many Drinks.
     * @example
     * // Create many Drinks
     * const drink = await prisma.drink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrinkCreateManyArgs>(args?: SelectSubset<T, DrinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drinks and returns the data saved in the database.
     * @param {DrinkCreateManyAndReturnArgs} args - Arguments to create many Drinks.
     * @example
     * // Create many Drinks
     * const drink = await prisma.drink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drinks and only return the `id`
     * const drinkWithIdOnly = await prisma.drink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrinkCreateManyAndReturnArgs>(args?: SelectSubset<T, DrinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drink.
     * @param {DrinkDeleteArgs} args - Arguments to delete one Drink.
     * @example
     * // Delete one Drink
     * const Drink = await prisma.drink.delete({
     *   where: {
     *     // ... filter to delete one Drink
     *   }
     * })
     * 
     */
    delete<T extends DrinkDeleteArgs>(args: SelectSubset<T, DrinkDeleteArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drink.
     * @param {DrinkUpdateArgs} args - Arguments to update one Drink.
     * @example
     * // Update one Drink
     * const drink = await prisma.drink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrinkUpdateArgs>(args: SelectSubset<T, DrinkUpdateArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drinks.
     * @param {DrinkDeleteManyArgs} args - Arguments to filter Drinks to delete.
     * @example
     * // Delete a few Drinks
     * const { count } = await prisma.drink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrinkDeleteManyArgs>(args?: SelectSubset<T, DrinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drinks
     * const drink = await prisma.drink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrinkUpdateManyArgs>(args: SelectSubset<T, DrinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drinks and returns the data updated in the database.
     * @param {DrinkUpdateManyAndReturnArgs} args - Arguments to update many Drinks.
     * @example
     * // Update many Drinks
     * const drink = await prisma.drink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drinks and only return the `id`
     * const drinkWithIdOnly = await prisma.drink.updateManyAndReturn({
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
    updateManyAndReturn<T extends DrinkUpdateManyAndReturnArgs>(args: SelectSubset<T, DrinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drink.
     * @param {DrinkUpsertArgs} args - Arguments to update or create a Drink.
     * @example
     * // Update or create a Drink
     * const drink = await prisma.drink.upsert({
     *   create: {
     *     // ... data to create a Drink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drink we want to update
     *   }
     * })
     */
    upsert<T extends DrinkUpsertArgs>(args: SelectSubset<T, DrinkUpsertArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkCountArgs} args - Arguments to filter Drinks to count.
     * @example
     * // Count the number of Drinks
     * const count = await prisma.drink.count({
     *   where: {
     *     // ... the filter for the Drinks we want to count
     *   }
     * })
    **/
    count<T extends DrinkCountArgs>(
      args?: Subset<T, DrinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrinkAggregateArgs>(args: Subset<T, DrinkAggregateArgs>): Prisma.PrismaPromise<GetDrinkAggregateType<T>>

    /**
     * Group by Drink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkGroupByArgs} args - Group by arguments.
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
      T extends DrinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrinkGroupByArgs['orderBy'] }
        : { orderBy?: DrinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drink model
   */
  readonly fields: DrinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ratings<T extends Drink$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Drink$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toppings<T extends Drink$toppingsArgs<ExtArgs> = {}>(args?: Subset<T, Drink$toppingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Drink model
   */
  interface DrinkFieldRefs {
    readonly id: FieldRef<"Drink", 'String'>
    readonly shopId: FieldRef<"Drink", 'String'>
    readonly name: FieldRef<"Drink", 'String'>
    readonly description: FieldRef<"Drink", 'String'>
    readonly price: FieldRef<"Drink", 'Float'>
    readonly category: FieldRef<"Drink", 'String'>
    readonly imageUrl: FieldRef<"Drink", 'String'>
    readonly createdAt: FieldRef<"Drink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Drink findUnique
   */
  export type DrinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drink to fetch.
     */
    where: DrinkWhereUniqueInput
  }

  /**
   * Drink findUniqueOrThrow
   */
  export type DrinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drink to fetch.
     */
    where: DrinkWhereUniqueInput
  }

  /**
   * Drink findFirst
   */
  export type DrinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drink to fetch.
     */
    where?: DrinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     */
    orderBy?: DrinkOrderByWithRelationInput | DrinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drinks.
     */
    cursor?: DrinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drinks.
     */
    distinct?: DrinkScalarFieldEnum | DrinkScalarFieldEnum[]
  }

  /**
   * Drink findFirstOrThrow
   */
  export type DrinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drink to fetch.
     */
    where?: DrinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     */
    orderBy?: DrinkOrderByWithRelationInput | DrinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drinks.
     */
    cursor?: DrinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drinks.
     */
    distinct?: DrinkScalarFieldEnum | DrinkScalarFieldEnum[]
  }

  /**
   * Drink findMany
   */
  export type DrinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter, which Drinks to fetch.
     */
    where?: DrinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drinks to fetch.
     */
    orderBy?: DrinkOrderByWithRelationInput | DrinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drinks.
     */
    cursor?: DrinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drinks.
     */
    skip?: number
    distinct?: DrinkScalarFieldEnum | DrinkScalarFieldEnum[]
  }

  /**
   * Drink create
   */
  export type DrinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Drink.
     */
    data: XOR<DrinkCreateInput, DrinkUncheckedCreateInput>
  }

  /**
   * Drink createMany
   */
  export type DrinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drinks.
     */
    data: DrinkCreateManyInput | DrinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drink createManyAndReturn
   */
  export type DrinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * The data used to create many Drinks.
     */
    data: DrinkCreateManyInput | DrinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drink update
   */
  export type DrinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Drink.
     */
    data: XOR<DrinkUpdateInput, DrinkUncheckedUpdateInput>
    /**
     * Choose, which Drink to update.
     */
    where: DrinkWhereUniqueInput
  }

  /**
   * Drink updateMany
   */
  export type DrinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drinks.
     */
    data: XOR<DrinkUpdateManyMutationInput, DrinkUncheckedUpdateManyInput>
    /**
     * Filter which Drinks to update
     */
    where?: DrinkWhereInput
    /**
     * Limit how many Drinks to update.
     */
    limit?: number
  }

  /**
   * Drink updateManyAndReturn
   */
  export type DrinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * The data used to update Drinks.
     */
    data: XOR<DrinkUpdateManyMutationInput, DrinkUncheckedUpdateManyInput>
    /**
     * Filter which Drinks to update
     */
    where?: DrinkWhereInput
    /**
     * Limit how many Drinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drink upsert
   */
  export type DrinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Drink to update in case it exists.
     */
    where: DrinkWhereUniqueInput
    /**
     * In case the Drink found by the `where` argument doesn't exist, create a new Drink with this data.
     */
    create: XOR<DrinkCreateInput, DrinkUncheckedCreateInput>
    /**
     * In case the Drink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrinkUpdateInput, DrinkUncheckedUpdateInput>
  }

  /**
   * Drink delete
   */
  export type DrinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
    /**
     * Filter which Drink to delete.
     */
    where: DrinkWhereUniqueInput
  }

  /**
   * Drink deleteMany
   */
  export type DrinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drinks to delete
     */
    where?: DrinkWhereInput
    /**
     * Limit how many Drinks to delete.
     */
    limit?: number
  }

  /**
   * Drink.ratings
   */
  export type Drink$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    where?: DrinkRatingWhereInput
    orderBy?: DrinkRatingOrderByWithRelationInput | DrinkRatingOrderByWithRelationInput[]
    cursor?: DrinkRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrinkRatingScalarFieldEnum | DrinkRatingScalarFieldEnum[]
  }

  /**
   * Drink.toppings
   */
  export type Drink$toppingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    where?: DrinkToppingWhereInput
    orderBy?: DrinkToppingOrderByWithRelationInput | DrinkToppingOrderByWithRelationInput[]
    cursor?: DrinkToppingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrinkToppingScalarFieldEnum | DrinkToppingScalarFieldEnum[]
  }

  /**
   * Drink without action
   */
  export type DrinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drink
     */
    select?: DrinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drink
     */
    omit?: DrinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkInclude<ExtArgs> | null
  }


  /**
   * Model Topping
   */

  export type AggregateTopping = {
    _count: ToppingCountAggregateOutputType | null
    _min: ToppingMinAggregateOutputType | null
    _max: ToppingMaxAggregateOutputType | null
  }

  export type ToppingMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ToppingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ToppingCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type ToppingMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ToppingMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ToppingCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ToppingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topping to aggregate.
     */
    where?: ToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toppings to fetch.
     */
    orderBy?: ToppingOrderByWithRelationInput | ToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Toppings
    **/
    _count?: true | ToppingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToppingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToppingMaxAggregateInputType
  }

  export type GetToppingAggregateType<T extends ToppingAggregateArgs> = {
        [P in keyof T & keyof AggregateTopping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopping[P]>
      : GetScalarType<T[P], AggregateTopping[P]>
  }




  export type ToppingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToppingWhereInput
    orderBy?: ToppingOrderByWithAggregationInput | ToppingOrderByWithAggregationInput[]
    by: ToppingScalarFieldEnum[] | ToppingScalarFieldEnum
    having?: ToppingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToppingCountAggregateInputType | true
    _min?: ToppingMinAggregateInputType
    _max?: ToppingMaxAggregateInputType
  }

  export type ToppingGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: ToppingCountAggregateOutputType | null
    _min: ToppingMinAggregateOutputType | null
    _max: ToppingMaxAggregateOutputType | null
  }

  type GetToppingGroupByPayload<T extends ToppingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToppingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToppingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToppingGroupByOutputType[P]>
            : GetScalarType<T[P], ToppingGroupByOutputType[P]>
        }
      >
    >


  export type ToppingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    drinks?: boolean | Topping$drinksArgs<ExtArgs>
    _count?: boolean | ToppingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topping"]>

  export type ToppingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["topping"]>

  export type ToppingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["topping"]>

  export type ToppingSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type ToppingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["topping"]>
  export type ToppingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drinks?: boolean | Topping$drinksArgs<ExtArgs>
    _count?: boolean | ToppingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ToppingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ToppingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ToppingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topping"
    objects: {
      drinks: Prisma.$DrinkToppingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["topping"]>
    composites: {}
  }

  type ToppingGetPayload<S extends boolean | null | undefined | ToppingDefaultArgs> = $Result.GetResult<Prisma.$ToppingPayload, S>

  type ToppingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToppingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToppingCountAggregateInputType | true
    }

  export interface ToppingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topping'], meta: { name: 'Topping' } }
    /**
     * Find zero or one Topping that matches the filter.
     * @param {ToppingFindUniqueArgs} args - Arguments to find a Topping
     * @example
     * // Get one Topping
     * const topping = await prisma.topping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToppingFindUniqueArgs>(args: SelectSubset<T, ToppingFindUniqueArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToppingFindUniqueOrThrowArgs} args - Arguments to find a Topping
     * @example
     * // Get one Topping
     * const topping = await prisma.topping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToppingFindUniqueOrThrowArgs>(args: SelectSubset<T, ToppingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingFindFirstArgs} args - Arguments to find a Topping
     * @example
     * // Get one Topping
     * const topping = await prisma.topping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToppingFindFirstArgs>(args?: SelectSubset<T, ToppingFindFirstArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingFindFirstOrThrowArgs} args - Arguments to find a Topping
     * @example
     * // Get one Topping
     * const topping = await prisma.topping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToppingFindFirstOrThrowArgs>(args?: SelectSubset<T, ToppingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Toppings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Toppings
     * const toppings = await prisma.topping.findMany()
     * 
     * // Get first 10 Toppings
     * const toppings = await prisma.topping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toppingWithIdOnly = await prisma.topping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToppingFindManyArgs>(args?: SelectSubset<T, ToppingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topping.
     * @param {ToppingCreateArgs} args - Arguments to create a Topping.
     * @example
     * // Create one Topping
     * const Topping = await prisma.topping.create({
     *   data: {
     *     // ... data to create a Topping
     *   }
     * })
     * 
     */
    create<T extends ToppingCreateArgs>(args: SelectSubset<T, ToppingCreateArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Toppings.
     * @param {ToppingCreateManyArgs} args - Arguments to create many Toppings.
     * @example
     * // Create many Toppings
     * const topping = await prisma.topping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToppingCreateManyArgs>(args?: SelectSubset<T, ToppingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Toppings and returns the data saved in the database.
     * @param {ToppingCreateManyAndReturnArgs} args - Arguments to create many Toppings.
     * @example
     * // Create many Toppings
     * const topping = await prisma.topping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Toppings and only return the `id`
     * const toppingWithIdOnly = await prisma.topping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToppingCreateManyAndReturnArgs>(args?: SelectSubset<T, ToppingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topping.
     * @param {ToppingDeleteArgs} args - Arguments to delete one Topping.
     * @example
     * // Delete one Topping
     * const Topping = await prisma.topping.delete({
     *   where: {
     *     // ... filter to delete one Topping
     *   }
     * })
     * 
     */
    delete<T extends ToppingDeleteArgs>(args: SelectSubset<T, ToppingDeleteArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topping.
     * @param {ToppingUpdateArgs} args - Arguments to update one Topping.
     * @example
     * // Update one Topping
     * const topping = await prisma.topping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToppingUpdateArgs>(args: SelectSubset<T, ToppingUpdateArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Toppings.
     * @param {ToppingDeleteManyArgs} args - Arguments to filter Toppings to delete.
     * @example
     * // Delete a few Toppings
     * const { count } = await prisma.topping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToppingDeleteManyArgs>(args?: SelectSubset<T, ToppingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Toppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Toppings
     * const topping = await prisma.topping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToppingUpdateManyArgs>(args: SelectSubset<T, ToppingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Toppings and returns the data updated in the database.
     * @param {ToppingUpdateManyAndReturnArgs} args - Arguments to update many Toppings.
     * @example
     * // Update many Toppings
     * const topping = await prisma.topping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Toppings and only return the `id`
     * const toppingWithIdOnly = await prisma.topping.updateManyAndReturn({
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
    updateManyAndReturn<T extends ToppingUpdateManyAndReturnArgs>(args: SelectSubset<T, ToppingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topping.
     * @param {ToppingUpsertArgs} args - Arguments to update or create a Topping.
     * @example
     * // Update or create a Topping
     * const topping = await prisma.topping.upsert({
     *   create: {
     *     // ... data to create a Topping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topping we want to update
     *   }
     * })
     */
    upsert<T extends ToppingUpsertArgs>(args: SelectSubset<T, ToppingUpsertArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Toppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingCountArgs} args - Arguments to filter Toppings to count.
     * @example
     * // Count the number of Toppings
     * const count = await prisma.topping.count({
     *   where: {
     *     // ... the filter for the Toppings we want to count
     *   }
     * })
    **/
    count<T extends ToppingCountArgs>(
      args?: Subset<T, ToppingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToppingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToppingAggregateArgs>(args: Subset<T, ToppingAggregateArgs>): Prisma.PrismaPromise<GetToppingAggregateType<T>>

    /**
     * Group by Topping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingGroupByArgs} args - Group by arguments.
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
      T extends ToppingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToppingGroupByArgs['orderBy'] }
        : { orderBy?: ToppingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToppingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToppingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topping model
   */
  readonly fields: ToppingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToppingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drinks<T extends Topping$drinksArgs<ExtArgs> = {}>(args?: Subset<T, Topping$drinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Topping model
   */
  interface ToppingFieldRefs {
    readonly id: FieldRef<"Topping", 'String'>
    readonly name: FieldRef<"Topping", 'String'>
    readonly description: FieldRef<"Topping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Topping findUnique
   */
  export type ToppingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Topping to fetch.
     */
    where: ToppingWhereUniqueInput
  }

  /**
   * Topping findUniqueOrThrow
   */
  export type ToppingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Topping to fetch.
     */
    where: ToppingWhereUniqueInput
  }

  /**
   * Topping findFirst
   */
  export type ToppingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Topping to fetch.
     */
    where?: ToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toppings to fetch.
     */
    orderBy?: ToppingOrderByWithRelationInput | ToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Toppings.
     */
    cursor?: ToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Toppings.
     */
    distinct?: ToppingScalarFieldEnum | ToppingScalarFieldEnum[]
  }

  /**
   * Topping findFirstOrThrow
   */
  export type ToppingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Topping to fetch.
     */
    where?: ToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toppings to fetch.
     */
    orderBy?: ToppingOrderByWithRelationInput | ToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Toppings.
     */
    cursor?: ToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Toppings.
     */
    distinct?: ToppingScalarFieldEnum | ToppingScalarFieldEnum[]
  }

  /**
   * Topping findMany
   */
  export type ToppingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Toppings to fetch.
     */
    where?: ToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toppings to fetch.
     */
    orderBy?: ToppingOrderByWithRelationInput | ToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Toppings.
     */
    cursor?: ToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toppings.
     */
    skip?: number
    distinct?: ToppingScalarFieldEnum | ToppingScalarFieldEnum[]
  }

  /**
   * Topping create
   */
  export type ToppingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * The data needed to create a Topping.
     */
    data: XOR<ToppingCreateInput, ToppingUncheckedCreateInput>
  }

  /**
   * Topping createMany
   */
  export type ToppingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Toppings.
     */
    data: ToppingCreateManyInput | ToppingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topping createManyAndReturn
   */
  export type ToppingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * The data used to create many Toppings.
     */
    data: ToppingCreateManyInput | ToppingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topping update
   */
  export type ToppingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * The data needed to update a Topping.
     */
    data: XOR<ToppingUpdateInput, ToppingUncheckedUpdateInput>
    /**
     * Choose, which Topping to update.
     */
    where: ToppingWhereUniqueInput
  }

  /**
   * Topping updateMany
   */
  export type ToppingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Toppings.
     */
    data: XOR<ToppingUpdateManyMutationInput, ToppingUncheckedUpdateManyInput>
    /**
     * Filter which Toppings to update
     */
    where?: ToppingWhereInput
    /**
     * Limit how many Toppings to update.
     */
    limit?: number
  }

  /**
   * Topping updateManyAndReturn
   */
  export type ToppingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * The data used to update Toppings.
     */
    data: XOR<ToppingUpdateManyMutationInput, ToppingUncheckedUpdateManyInput>
    /**
     * Filter which Toppings to update
     */
    where?: ToppingWhereInput
    /**
     * Limit how many Toppings to update.
     */
    limit?: number
  }

  /**
   * Topping upsert
   */
  export type ToppingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * The filter to search for the Topping to update in case it exists.
     */
    where: ToppingWhereUniqueInput
    /**
     * In case the Topping found by the `where` argument doesn't exist, create a new Topping with this data.
     */
    create: XOR<ToppingCreateInput, ToppingUncheckedCreateInput>
    /**
     * In case the Topping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToppingUpdateInput, ToppingUncheckedUpdateInput>
  }

  /**
   * Topping delete
   */
  export type ToppingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter which Topping to delete.
     */
    where: ToppingWhereUniqueInput
  }

  /**
   * Topping deleteMany
   */
  export type ToppingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Toppings to delete
     */
    where?: ToppingWhereInput
    /**
     * Limit how many Toppings to delete.
     */
    limit?: number
  }

  /**
   * Topping.drinks
   */
  export type Topping$drinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    where?: DrinkToppingWhereInput
    orderBy?: DrinkToppingOrderByWithRelationInput | DrinkToppingOrderByWithRelationInput[]
    cursor?: DrinkToppingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrinkToppingScalarFieldEnum | DrinkToppingScalarFieldEnum[]
  }

  /**
   * Topping without action
   */
  export type ToppingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topping
     */
    omit?: ToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
  }


  /**
   * Model DrinkTopping
   */

  export type AggregateDrinkTopping = {
    _count: DrinkToppingCountAggregateOutputType | null
    _min: DrinkToppingMinAggregateOutputType | null
    _max: DrinkToppingMaxAggregateOutputType | null
  }

  export type DrinkToppingMinAggregateOutputType = {
    drinkId: string | null
    toppingId: string | null
  }

  export type DrinkToppingMaxAggregateOutputType = {
    drinkId: string | null
    toppingId: string | null
  }

  export type DrinkToppingCountAggregateOutputType = {
    drinkId: number
    toppingId: number
    _all: number
  }


  export type DrinkToppingMinAggregateInputType = {
    drinkId?: true
    toppingId?: true
  }

  export type DrinkToppingMaxAggregateInputType = {
    drinkId?: true
    toppingId?: true
  }

  export type DrinkToppingCountAggregateInputType = {
    drinkId?: true
    toppingId?: true
    _all?: true
  }

  export type DrinkToppingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrinkTopping to aggregate.
     */
    where?: DrinkToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkToppings to fetch.
     */
    orderBy?: DrinkToppingOrderByWithRelationInput | DrinkToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrinkToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkToppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrinkToppings
    **/
    _count?: true | DrinkToppingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrinkToppingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrinkToppingMaxAggregateInputType
  }

  export type GetDrinkToppingAggregateType<T extends DrinkToppingAggregateArgs> = {
        [P in keyof T & keyof AggregateDrinkTopping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrinkTopping[P]>
      : GetScalarType<T[P], AggregateDrinkTopping[P]>
  }




  export type DrinkToppingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkToppingWhereInput
    orderBy?: DrinkToppingOrderByWithAggregationInput | DrinkToppingOrderByWithAggregationInput[]
    by: DrinkToppingScalarFieldEnum[] | DrinkToppingScalarFieldEnum
    having?: DrinkToppingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrinkToppingCountAggregateInputType | true
    _min?: DrinkToppingMinAggregateInputType
    _max?: DrinkToppingMaxAggregateInputType
  }

  export type DrinkToppingGroupByOutputType = {
    drinkId: string
    toppingId: string
    _count: DrinkToppingCountAggregateOutputType | null
    _min: DrinkToppingMinAggregateOutputType | null
    _max: DrinkToppingMaxAggregateOutputType | null
  }

  type GetDrinkToppingGroupByPayload<T extends DrinkToppingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrinkToppingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrinkToppingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrinkToppingGroupByOutputType[P]>
            : GetScalarType<T[P], DrinkToppingGroupByOutputType[P]>
        }
      >
    >


  export type DrinkToppingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    drinkId?: boolean
    toppingId?: boolean
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drinkTopping"]>

  export type DrinkToppingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    drinkId?: boolean
    toppingId?: boolean
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drinkTopping"]>

  export type DrinkToppingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    drinkId?: boolean
    toppingId?: boolean
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drinkTopping"]>

  export type DrinkToppingSelectScalar = {
    drinkId?: boolean
    toppingId?: boolean
  }

  export type DrinkToppingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"drinkId" | "toppingId", ExtArgs["result"]["drinkTopping"]>
  export type DrinkToppingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }
  export type DrinkToppingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }
  export type DrinkToppingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }

  export type $DrinkToppingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrinkTopping"
    objects: {
      drink: Prisma.$DrinkPayload<ExtArgs>
      topping: Prisma.$ToppingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      drinkId: string
      toppingId: string
    }, ExtArgs["result"]["drinkTopping"]>
    composites: {}
  }

  type DrinkToppingGetPayload<S extends boolean | null | undefined | DrinkToppingDefaultArgs> = $Result.GetResult<Prisma.$DrinkToppingPayload, S>

  type DrinkToppingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrinkToppingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrinkToppingCountAggregateInputType | true
    }

  export interface DrinkToppingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrinkTopping'], meta: { name: 'DrinkTopping' } }
    /**
     * Find zero or one DrinkTopping that matches the filter.
     * @param {DrinkToppingFindUniqueArgs} args - Arguments to find a DrinkTopping
     * @example
     * // Get one DrinkTopping
     * const drinkTopping = await prisma.drinkTopping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrinkToppingFindUniqueArgs>(args: SelectSubset<T, DrinkToppingFindUniqueArgs<ExtArgs>>): Prisma__DrinkToppingClient<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrinkTopping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrinkToppingFindUniqueOrThrowArgs} args - Arguments to find a DrinkTopping
     * @example
     * // Get one DrinkTopping
     * const drinkTopping = await prisma.drinkTopping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrinkToppingFindUniqueOrThrowArgs>(args: SelectSubset<T, DrinkToppingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrinkToppingClient<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrinkTopping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkToppingFindFirstArgs} args - Arguments to find a DrinkTopping
     * @example
     * // Get one DrinkTopping
     * const drinkTopping = await prisma.drinkTopping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrinkToppingFindFirstArgs>(args?: SelectSubset<T, DrinkToppingFindFirstArgs<ExtArgs>>): Prisma__DrinkToppingClient<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrinkTopping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkToppingFindFirstOrThrowArgs} args - Arguments to find a DrinkTopping
     * @example
     * // Get one DrinkTopping
     * const drinkTopping = await prisma.drinkTopping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrinkToppingFindFirstOrThrowArgs>(args?: SelectSubset<T, DrinkToppingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrinkToppingClient<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrinkToppings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkToppingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrinkToppings
     * const drinkToppings = await prisma.drinkTopping.findMany()
     * 
     * // Get first 10 DrinkToppings
     * const drinkToppings = await prisma.drinkTopping.findMany({ take: 10 })
     * 
     * // Only select the `drinkId`
     * const drinkToppingWithDrinkIdOnly = await prisma.drinkTopping.findMany({ select: { drinkId: true } })
     * 
     */
    findMany<T extends DrinkToppingFindManyArgs>(args?: SelectSubset<T, DrinkToppingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrinkTopping.
     * @param {DrinkToppingCreateArgs} args - Arguments to create a DrinkTopping.
     * @example
     * // Create one DrinkTopping
     * const DrinkTopping = await prisma.drinkTopping.create({
     *   data: {
     *     // ... data to create a DrinkTopping
     *   }
     * })
     * 
     */
    create<T extends DrinkToppingCreateArgs>(args: SelectSubset<T, DrinkToppingCreateArgs<ExtArgs>>): Prisma__DrinkToppingClient<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrinkToppings.
     * @param {DrinkToppingCreateManyArgs} args - Arguments to create many DrinkToppings.
     * @example
     * // Create many DrinkToppings
     * const drinkTopping = await prisma.drinkTopping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrinkToppingCreateManyArgs>(args?: SelectSubset<T, DrinkToppingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DrinkToppings and returns the data saved in the database.
     * @param {DrinkToppingCreateManyAndReturnArgs} args - Arguments to create many DrinkToppings.
     * @example
     * // Create many DrinkToppings
     * const drinkTopping = await prisma.drinkTopping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DrinkToppings and only return the `drinkId`
     * const drinkToppingWithDrinkIdOnly = await prisma.drinkTopping.createManyAndReturn({
     *   select: { drinkId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrinkToppingCreateManyAndReturnArgs>(args?: SelectSubset<T, DrinkToppingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DrinkTopping.
     * @param {DrinkToppingDeleteArgs} args - Arguments to delete one DrinkTopping.
     * @example
     * // Delete one DrinkTopping
     * const DrinkTopping = await prisma.drinkTopping.delete({
     *   where: {
     *     // ... filter to delete one DrinkTopping
     *   }
     * })
     * 
     */
    delete<T extends DrinkToppingDeleteArgs>(args: SelectSubset<T, DrinkToppingDeleteArgs<ExtArgs>>): Prisma__DrinkToppingClient<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrinkTopping.
     * @param {DrinkToppingUpdateArgs} args - Arguments to update one DrinkTopping.
     * @example
     * // Update one DrinkTopping
     * const drinkTopping = await prisma.drinkTopping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrinkToppingUpdateArgs>(args: SelectSubset<T, DrinkToppingUpdateArgs<ExtArgs>>): Prisma__DrinkToppingClient<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrinkToppings.
     * @param {DrinkToppingDeleteManyArgs} args - Arguments to filter DrinkToppings to delete.
     * @example
     * // Delete a few DrinkToppings
     * const { count } = await prisma.drinkTopping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrinkToppingDeleteManyArgs>(args?: SelectSubset<T, DrinkToppingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrinkToppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkToppingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrinkToppings
     * const drinkTopping = await prisma.drinkTopping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrinkToppingUpdateManyArgs>(args: SelectSubset<T, DrinkToppingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrinkToppings and returns the data updated in the database.
     * @param {DrinkToppingUpdateManyAndReturnArgs} args - Arguments to update many DrinkToppings.
     * @example
     * // Update many DrinkToppings
     * const drinkTopping = await prisma.drinkTopping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DrinkToppings and only return the `drinkId`
     * const drinkToppingWithDrinkIdOnly = await prisma.drinkTopping.updateManyAndReturn({
     *   select: { drinkId: true },
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
    updateManyAndReturn<T extends DrinkToppingUpdateManyAndReturnArgs>(args: SelectSubset<T, DrinkToppingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DrinkTopping.
     * @param {DrinkToppingUpsertArgs} args - Arguments to update or create a DrinkTopping.
     * @example
     * // Update or create a DrinkTopping
     * const drinkTopping = await prisma.drinkTopping.upsert({
     *   create: {
     *     // ... data to create a DrinkTopping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrinkTopping we want to update
     *   }
     * })
     */
    upsert<T extends DrinkToppingUpsertArgs>(args: SelectSubset<T, DrinkToppingUpsertArgs<ExtArgs>>): Prisma__DrinkToppingClient<$Result.GetResult<Prisma.$DrinkToppingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrinkToppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkToppingCountArgs} args - Arguments to filter DrinkToppings to count.
     * @example
     * // Count the number of DrinkToppings
     * const count = await prisma.drinkTopping.count({
     *   where: {
     *     // ... the filter for the DrinkToppings we want to count
     *   }
     * })
    **/
    count<T extends DrinkToppingCountArgs>(
      args?: Subset<T, DrinkToppingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrinkToppingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrinkTopping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkToppingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrinkToppingAggregateArgs>(args: Subset<T, DrinkToppingAggregateArgs>): Prisma.PrismaPromise<GetDrinkToppingAggregateType<T>>

    /**
     * Group by DrinkTopping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkToppingGroupByArgs} args - Group by arguments.
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
      T extends DrinkToppingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrinkToppingGroupByArgs['orderBy'] }
        : { orderBy?: DrinkToppingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrinkToppingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrinkToppingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrinkTopping model
   */
  readonly fields: DrinkToppingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrinkTopping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrinkToppingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drink<T extends DrinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrinkDefaultArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topping<T extends ToppingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToppingDefaultArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DrinkTopping model
   */
  interface DrinkToppingFieldRefs {
    readonly drinkId: FieldRef<"DrinkTopping", 'String'>
    readonly toppingId: FieldRef<"DrinkTopping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DrinkTopping findUnique
   */
  export type DrinkToppingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkTopping to fetch.
     */
    where: DrinkToppingWhereUniqueInput
  }

  /**
   * DrinkTopping findUniqueOrThrow
   */
  export type DrinkToppingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkTopping to fetch.
     */
    where: DrinkToppingWhereUniqueInput
  }

  /**
   * DrinkTopping findFirst
   */
  export type DrinkToppingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkTopping to fetch.
     */
    where?: DrinkToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkToppings to fetch.
     */
    orderBy?: DrinkToppingOrderByWithRelationInput | DrinkToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrinkToppings.
     */
    cursor?: DrinkToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkToppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrinkToppings.
     */
    distinct?: DrinkToppingScalarFieldEnum | DrinkToppingScalarFieldEnum[]
  }

  /**
   * DrinkTopping findFirstOrThrow
   */
  export type DrinkToppingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkTopping to fetch.
     */
    where?: DrinkToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkToppings to fetch.
     */
    orderBy?: DrinkToppingOrderByWithRelationInput | DrinkToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrinkToppings.
     */
    cursor?: DrinkToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkToppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrinkToppings.
     */
    distinct?: DrinkToppingScalarFieldEnum | DrinkToppingScalarFieldEnum[]
  }

  /**
   * DrinkTopping findMany
   */
  export type DrinkToppingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkToppings to fetch.
     */
    where?: DrinkToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkToppings to fetch.
     */
    orderBy?: DrinkToppingOrderByWithRelationInput | DrinkToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrinkToppings.
     */
    cursor?: DrinkToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkToppings.
     */
    skip?: number
    distinct?: DrinkToppingScalarFieldEnum | DrinkToppingScalarFieldEnum[]
  }

  /**
   * DrinkTopping create
   */
  export type DrinkToppingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    /**
     * The data needed to create a DrinkTopping.
     */
    data: XOR<DrinkToppingCreateInput, DrinkToppingUncheckedCreateInput>
  }

  /**
   * DrinkTopping createMany
   */
  export type DrinkToppingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrinkToppings.
     */
    data: DrinkToppingCreateManyInput | DrinkToppingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrinkTopping createManyAndReturn
   */
  export type DrinkToppingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * The data used to create many DrinkToppings.
     */
    data: DrinkToppingCreateManyInput | DrinkToppingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrinkTopping update
   */
  export type DrinkToppingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    /**
     * The data needed to update a DrinkTopping.
     */
    data: XOR<DrinkToppingUpdateInput, DrinkToppingUncheckedUpdateInput>
    /**
     * Choose, which DrinkTopping to update.
     */
    where: DrinkToppingWhereUniqueInput
  }

  /**
   * DrinkTopping updateMany
   */
  export type DrinkToppingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrinkToppings.
     */
    data: XOR<DrinkToppingUpdateManyMutationInput, DrinkToppingUncheckedUpdateManyInput>
    /**
     * Filter which DrinkToppings to update
     */
    where?: DrinkToppingWhereInput
    /**
     * Limit how many DrinkToppings to update.
     */
    limit?: number
  }

  /**
   * DrinkTopping updateManyAndReturn
   */
  export type DrinkToppingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * The data used to update DrinkToppings.
     */
    data: XOR<DrinkToppingUpdateManyMutationInput, DrinkToppingUncheckedUpdateManyInput>
    /**
     * Filter which DrinkToppings to update
     */
    where?: DrinkToppingWhereInput
    /**
     * Limit how many DrinkToppings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrinkTopping upsert
   */
  export type DrinkToppingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    /**
     * The filter to search for the DrinkTopping to update in case it exists.
     */
    where: DrinkToppingWhereUniqueInput
    /**
     * In case the DrinkTopping found by the `where` argument doesn't exist, create a new DrinkTopping with this data.
     */
    create: XOR<DrinkToppingCreateInput, DrinkToppingUncheckedCreateInput>
    /**
     * In case the DrinkTopping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrinkToppingUpdateInput, DrinkToppingUncheckedUpdateInput>
  }

  /**
   * DrinkTopping delete
   */
  export type DrinkToppingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
    /**
     * Filter which DrinkTopping to delete.
     */
    where: DrinkToppingWhereUniqueInput
  }

  /**
   * DrinkTopping deleteMany
   */
  export type DrinkToppingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrinkToppings to delete
     */
    where?: DrinkToppingWhereInput
    /**
     * Limit how many DrinkToppings to delete.
     */
    limit?: number
  }

  /**
   * DrinkTopping without action
   */
  export type DrinkToppingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkTopping
     */
    select?: DrinkToppingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkTopping
     */
    omit?: DrinkToppingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkToppingInclude<ExtArgs> | null
  }


  /**
   * Model ShopRating
   */

  export type AggregateShopRating = {
    _count: ShopRatingCountAggregateOutputType | null
    _avg: ShopRatingAvgAggregateOutputType | null
    _sum: ShopRatingSumAggregateOutputType | null
    _min: ShopRatingMinAggregateOutputType | null
    _max: ShopRatingMaxAggregateOutputType | null
  }

  export type ShopRatingAvgAggregateOutputType = {
    rating: number | null
    serviceRating: number | null
    ambianceRating: number | null
    valueRating: number | null
  }

  export type ShopRatingSumAggregateOutputType = {
    rating: number | null
    serviceRating: number | null
    ambianceRating: number | null
    valueRating: number | null
  }

  export type ShopRatingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    shopId: string | null
    rating: number | null
    review: string | null
    serviceRating: number | null
    ambianceRating: number | null
    valueRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopRatingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    shopId: string | null
    rating: number | null
    review: string | null
    serviceRating: number | null
    ambianceRating: number | null
    valueRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopRatingCountAggregateOutputType = {
    id: number
    userId: number
    shopId: number
    rating: number
    review: number
    serviceRating: number
    ambianceRating: number
    valueRating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopRatingAvgAggregateInputType = {
    rating?: true
    serviceRating?: true
    ambianceRating?: true
    valueRating?: true
  }

  export type ShopRatingSumAggregateInputType = {
    rating?: true
    serviceRating?: true
    ambianceRating?: true
    valueRating?: true
  }

  export type ShopRatingMinAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    rating?: true
    review?: true
    serviceRating?: true
    ambianceRating?: true
    valueRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopRatingMaxAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    rating?: true
    review?: true
    serviceRating?: true
    ambianceRating?: true
    valueRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopRatingCountAggregateInputType = {
    id?: true
    userId?: true
    shopId?: true
    rating?: true
    review?: true
    serviceRating?: true
    ambianceRating?: true
    valueRating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopRating to aggregate.
     */
    where?: ShopRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopRatings to fetch.
     */
    orderBy?: ShopRatingOrderByWithRelationInput | ShopRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopRatings
    **/
    _count?: true | ShopRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopRatingMaxAggregateInputType
  }

  export type GetShopRatingAggregateType<T extends ShopRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateShopRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopRating[P]>
      : GetScalarType<T[P], AggregateShopRating[P]>
  }




  export type ShopRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopRatingWhereInput
    orderBy?: ShopRatingOrderByWithAggregationInput | ShopRatingOrderByWithAggregationInput[]
    by: ShopRatingScalarFieldEnum[] | ShopRatingScalarFieldEnum
    having?: ShopRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopRatingCountAggregateInputType | true
    _avg?: ShopRatingAvgAggregateInputType
    _sum?: ShopRatingSumAggregateInputType
    _min?: ShopRatingMinAggregateInputType
    _max?: ShopRatingMaxAggregateInputType
  }

  export type ShopRatingGroupByOutputType = {
    id: string
    userId: string
    shopId: string
    rating: number
    review: string | null
    serviceRating: number | null
    ambianceRating: number | null
    valueRating: number | null
    createdAt: Date
    updatedAt: Date
    _count: ShopRatingCountAggregateOutputType | null
    _avg: ShopRatingAvgAggregateOutputType | null
    _sum: ShopRatingSumAggregateOutputType | null
    _min: ShopRatingMinAggregateOutputType | null
    _max: ShopRatingMaxAggregateOutputType | null
  }

  type GetShopRatingGroupByPayload<T extends ShopRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopRatingGroupByOutputType[P]>
            : GetScalarType<T[P], ShopRatingGroupByOutputType[P]>
        }
      >
    >


  export type ShopRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopId?: boolean
    rating?: boolean
    review?: boolean
    serviceRating?: boolean
    ambianceRating?: boolean
    valueRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopRating"]>

  export type ShopRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopId?: boolean
    rating?: boolean
    review?: boolean
    serviceRating?: boolean
    ambianceRating?: boolean
    valueRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopRating"]>

  export type ShopRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopId?: boolean
    rating?: boolean
    review?: boolean
    serviceRating?: boolean
    ambianceRating?: boolean
    valueRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopRating"]>

  export type ShopRatingSelectScalar = {
    id?: boolean
    userId?: boolean
    shopId?: boolean
    rating?: boolean
    review?: boolean
    serviceRating?: boolean
    ambianceRating?: boolean
    valueRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shopId" | "rating" | "review" | "serviceRating" | "ambianceRating" | "valueRating" | "createdAt" | "updatedAt", ExtArgs["result"]["shopRating"]>
  export type ShopRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShopRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShopRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShopRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopRating"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      shopId: string
      rating: number
      review: string | null
      serviceRating: number | null
      ambianceRating: number | null
      valueRating: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shopRating"]>
    composites: {}
  }

  type ShopRatingGetPayload<S extends boolean | null | undefined | ShopRatingDefaultArgs> = $Result.GetResult<Prisma.$ShopRatingPayload, S>

  type ShopRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopRatingCountAggregateInputType | true
    }

  export interface ShopRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopRating'], meta: { name: 'ShopRating' } }
    /**
     * Find zero or one ShopRating that matches the filter.
     * @param {ShopRatingFindUniqueArgs} args - Arguments to find a ShopRating
     * @example
     * // Get one ShopRating
     * const shopRating = await prisma.shopRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopRatingFindUniqueArgs>(args: SelectSubset<T, ShopRatingFindUniqueArgs<ExtArgs>>): Prisma__ShopRatingClient<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopRatingFindUniqueOrThrowArgs} args - Arguments to find a ShopRating
     * @example
     * // Get one ShopRating
     * const shopRating = await prisma.shopRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopRatingClient<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopRatingFindFirstArgs} args - Arguments to find a ShopRating
     * @example
     * // Get one ShopRating
     * const shopRating = await prisma.shopRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopRatingFindFirstArgs>(args?: SelectSubset<T, ShopRatingFindFirstArgs<ExtArgs>>): Prisma__ShopRatingClient<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopRatingFindFirstOrThrowArgs} args - Arguments to find a ShopRating
     * @example
     * // Get one ShopRating
     * const shopRating = await prisma.shopRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopRatingClient<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopRatings
     * const shopRatings = await prisma.shopRating.findMany()
     * 
     * // Get first 10 ShopRatings
     * const shopRatings = await prisma.shopRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopRatingWithIdOnly = await prisma.shopRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopRatingFindManyArgs>(args?: SelectSubset<T, ShopRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopRating.
     * @param {ShopRatingCreateArgs} args - Arguments to create a ShopRating.
     * @example
     * // Create one ShopRating
     * const ShopRating = await prisma.shopRating.create({
     *   data: {
     *     // ... data to create a ShopRating
     *   }
     * })
     * 
     */
    create<T extends ShopRatingCreateArgs>(args: SelectSubset<T, ShopRatingCreateArgs<ExtArgs>>): Prisma__ShopRatingClient<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopRatings.
     * @param {ShopRatingCreateManyArgs} args - Arguments to create many ShopRatings.
     * @example
     * // Create many ShopRatings
     * const shopRating = await prisma.shopRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopRatingCreateManyArgs>(args?: SelectSubset<T, ShopRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopRatings and returns the data saved in the database.
     * @param {ShopRatingCreateManyAndReturnArgs} args - Arguments to create many ShopRatings.
     * @example
     * // Create many ShopRatings
     * const shopRating = await prisma.shopRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopRatings and only return the `id`
     * const shopRatingWithIdOnly = await prisma.shopRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopRating.
     * @param {ShopRatingDeleteArgs} args - Arguments to delete one ShopRating.
     * @example
     * // Delete one ShopRating
     * const ShopRating = await prisma.shopRating.delete({
     *   where: {
     *     // ... filter to delete one ShopRating
     *   }
     * })
     * 
     */
    delete<T extends ShopRatingDeleteArgs>(args: SelectSubset<T, ShopRatingDeleteArgs<ExtArgs>>): Prisma__ShopRatingClient<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopRating.
     * @param {ShopRatingUpdateArgs} args - Arguments to update one ShopRating.
     * @example
     * // Update one ShopRating
     * const shopRating = await prisma.shopRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopRatingUpdateArgs>(args: SelectSubset<T, ShopRatingUpdateArgs<ExtArgs>>): Prisma__ShopRatingClient<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopRatings.
     * @param {ShopRatingDeleteManyArgs} args - Arguments to filter ShopRatings to delete.
     * @example
     * // Delete a few ShopRatings
     * const { count } = await prisma.shopRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopRatingDeleteManyArgs>(args?: SelectSubset<T, ShopRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopRatings
     * const shopRating = await prisma.shopRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopRatingUpdateManyArgs>(args: SelectSubset<T, ShopRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopRatings and returns the data updated in the database.
     * @param {ShopRatingUpdateManyAndReturnArgs} args - Arguments to update many ShopRatings.
     * @example
     * // Update many ShopRatings
     * const shopRating = await prisma.shopRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopRatings and only return the `id`
     * const shopRatingWithIdOnly = await prisma.shopRating.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopRating.
     * @param {ShopRatingUpsertArgs} args - Arguments to update or create a ShopRating.
     * @example
     * // Update or create a ShopRating
     * const shopRating = await prisma.shopRating.upsert({
     *   create: {
     *     // ... data to create a ShopRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopRating we want to update
     *   }
     * })
     */
    upsert<T extends ShopRatingUpsertArgs>(args: SelectSubset<T, ShopRatingUpsertArgs<ExtArgs>>): Prisma__ShopRatingClient<$Result.GetResult<Prisma.$ShopRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopRatingCountArgs} args - Arguments to filter ShopRatings to count.
     * @example
     * // Count the number of ShopRatings
     * const count = await prisma.shopRating.count({
     *   where: {
     *     // ... the filter for the ShopRatings we want to count
     *   }
     * })
    **/
    count<T extends ShopRatingCountArgs>(
      args?: Subset<T, ShopRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopRatingAggregateArgs>(args: Subset<T, ShopRatingAggregateArgs>): Prisma.PrismaPromise<GetShopRatingAggregateType<T>>

    /**
     * Group by ShopRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopRatingGroupByArgs} args - Group by arguments.
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
      T extends ShopRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopRatingGroupByArgs['orderBy'] }
        : { orderBy?: ShopRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopRating model
   */
  readonly fields: ShopRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShopRating model
   */
  interface ShopRatingFieldRefs {
    readonly id: FieldRef<"ShopRating", 'String'>
    readonly userId: FieldRef<"ShopRating", 'String'>
    readonly shopId: FieldRef<"ShopRating", 'String'>
    readonly rating: FieldRef<"ShopRating", 'Int'>
    readonly review: FieldRef<"ShopRating", 'String'>
    readonly serviceRating: FieldRef<"ShopRating", 'Int'>
    readonly ambianceRating: FieldRef<"ShopRating", 'Int'>
    readonly valueRating: FieldRef<"ShopRating", 'Int'>
    readonly createdAt: FieldRef<"ShopRating", 'DateTime'>
    readonly updatedAt: FieldRef<"ShopRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopRating findUnique
   */
  export type ShopRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    /**
     * Filter, which ShopRating to fetch.
     */
    where: ShopRatingWhereUniqueInput
  }

  /**
   * ShopRating findUniqueOrThrow
   */
  export type ShopRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    /**
     * Filter, which ShopRating to fetch.
     */
    where: ShopRatingWhereUniqueInput
  }

  /**
   * ShopRating findFirst
   */
  export type ShopRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    /**
     * Filter, which ShopRating to fetch.
     */
    where?: ShopRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopRatings to fetch.
     */
    orderBy?: ShopRatingOrderByWithRelationInput | ShopRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopRatings.
     */
    cursor?: ShopRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopRatings.
     */
    distinct?: ShopRatingScalarFieldEnum | ShopRatingScalarFieldEnum[]
  }

  /**
   * ShopRating findFirstOrThrow
   */
  export type ShopRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    /**
     * Filter, which ShopRating to fetch.
     */
    where?: ShopRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopRatings to fetch.
     */
    orderBy?: ShopRatingOrderByWithRelationInput | ShopRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopRatings.
     */
    cursor?: ShopRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopRatings.
     */
    distinct?: ShopRatingScalarFieldEnum | ShopRatingScalarFieldEnum[]
  }

  /**
   * ShopRating findMany
   */
  export type ShopRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    /**
     * Filter, which ShopRatings to fetch.
     */
    where?: ShopRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopRatings to fetch.
     */
    orderBy?: ShopRatingOrderByWithRelationInput | ShopRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopRatings.
     */
    cursor?: ShopRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopRatings.
     */
    skip?: number
    distinct?: ShopRatingScalarFieldEnum | ShopRatingScalarFieldEnum[]
  }

  /**
   * ShopRating create
   */
  export type ShopRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopRating.
     */
    data: XOR<ShopRatingCreateInput, ShopRatingUncheckedCreateInput>
  }

  /**
   * ShopRating createMany
   */
  export type ShopRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopRatings.
     */
    data: ShopRatingCreateManyInput | ShopRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopRating createManyAndReturn
   */
  export type ShopRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * The data used to create many ShopRatings.
     */
    data: ShopRatingCreateManyInput | ShopRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopRating update
   */
  export type ShopRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopRating.
     */
    data: XOR<ShopRatingUpdateInput, ShopRatingUncheckedUpdateInput>
    /**
     * Choose, which ShopRating to update.
     */
    where: ShopRatingWhereUniqueInput
  }

  /**
   * ShopRating updateMany
   */
  export type ShopRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopRatings.
     */
    data: XOR<ShopRatingUpdateManyMutationInput, ShopRatingUncheckedUpdateManyInput>
    /**
     * Filter which ShopRatings to update
     */
    where?: ShopRatingWhereInput
    /**
     * Limit how many ShopRatings to update.
     */
    limit?: number
  }

  /**
   * ShopRating updateManyAndReturn
   */
  export type ShopRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * The data used to update ShopRatings.
     */
    data: XOR<ShopRatingUpdateManyMutationInput, ShopRatingUncheckedUpdateManyInput>
    /**
     * Filter which ShopRatings to update
     */
    where?: ShopRatingWhereInput
    /**
     * Limit how many ShopRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopRating upsert
   */
  export type ShopRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopRating to update in case it exists.
     */
    where: ShopRatingWhereUniqueInput
    /**
     * In case the ShopRating found by the `where` argument doesn't exist, create a new ShopRating with this data.
     */
    create: XOR<ShopRatingCreateInput, ShopRatingUncheckedCreateInput>
    /**
     * In case the ShopRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopRatingUpdateInput, ShopRatingUncheckedUpdateInput>
  }

  /**
   * ShopRating delete
   */
  export type ShopRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
    /**
     * Filter which ShopRating to delete.
     */
    where: ShopRatingWhereUniqueInput
  }

  /**
   * ShopRating deleteMany
   */
  export type ShopRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopRatings to delete
     */
    where?: ShopRatingWhereInput
    /**
     * Limit how many ShopRatings to delete.
     */
    limit?: number
  }

  /**
   * ShopRating without action
   */
  export type ShopRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopRating
     */
    select?: ShopRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopRating
     */
    omit?: ShopRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopRatingInclude<ExtArgs> | null
  }


  /**
   * Model DrinkRating
   */

  export type AggregateDrinkRating = {
    _count: DrinkRatingCountAggregateOutputType | null
    _avg: DrinkRatingAvgAggregateOutputType | null
    _sum: DrinkRatingSumAggregateOutputType | null
    _min: DrinkRatingMinAggregateOutputType | null
    _max: DrinkRatingMaxAggregateOutputType | null
  }

  export type DrinkRatingAvgAggregateOutputType = {
    rating: number | null
    sweetnessLevel: number | null
  }

  export type DrinkRatingSumAggregateOutputType = {
    rating: number | null
    sweetnessLevel: number | null
  }

  export type DrinkRatingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    drinkId: string | null
    rating: number | null
    review: string | null
    sweetnessLevel: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrinkRatingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    drinkId: string | null
    rating: number | null
    review: string | null
    sweetnessLevel: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrinkRatingCountAggregateOutputType = {
    id: number
    userId: number
    drinkId: number
    rating: number
    review: number
    sweetnessLevel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DrinkRatingAvgAggregateInputType = {
    rating?: true
    sweetnessLevel?: true
  }

  export type DrinkRatingSumAggregateInputType = {
    rating?: true
    sweetnessLevel?: true
  }

  export type DrinkRatingMinAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
    rating?: true
    review?: true
    sweetnessLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrinkRatingMaxAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
    rating?: true
    review?: true
    sweetnessLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrinkRatingCountAggregateInputType = {
    id?: true
    userId?: true
    drinkId?: true
    rating?: true
    review?: true
    sweetnessLevel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DrinkRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrinkRating to aggregate.
     */
    where?: DrinkRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkRatings to fetch.
     */
    orderBy?: DrinkRatingOrderByWithRelationInput | DrinkRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrinkRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrinkRatings
    **/
    _count?: true | DrinkRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrinkRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrinkRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrinkRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrinkRatingMaxAggregateInputType
  }

  export type GetDrinkRatingAggregateType<T extends DrinkRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateDrinkRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrinkRating[P]>
      : GetScalarType<T[P], AggregateDrinkRating[P]>
  }




  export type DrinkRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrinkRatingWhereInput
    orderBy?: DrinkRatingOrderByWithAggregationInput | DrinkRatingOrderByWithAggregationInput[]
    by: DrinkRatingScalarFieldEnum[] | DrinkRatingScalarFieldEnum
    having?: DrinkRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrinkRatingCountAggregateInputType | true
    _avg?: DrinkRatingAvgAggregateInputType
    _sum?: DrinkRatingSumAggregateInputType
    _min?: DrinkRatingMinAggregateInputType
    _max?: DrinkRatingMaxAggregateInputType
  }

  export type DrinkRatingGroupByOutputType = {
    id: string
    userId: string
    drinkId: string
    rating: number
    review: string | null
    sweetnessLevel: number | null
    createdAt: Date
    updatedAt: Date
    _count: DrinkRatingCountAggregateOutputType | null
    _avg: DrinkRatingAvgAggregateOutputType | null
    _sum: DrinkRatingSumAggregateOutputType | null
    _min: DrinkRatingMinAggregateOutputType | null
    _max: DrinkRatingMaxAggregateOutputType | null
  }

  type GetDrinkRatingGroupByPayload<T extends DrinkRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrinkRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrinkRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrinkRatingGroupByOutputType[P]>
            : GetScalarType<T[P], DrinkRatingGroupByOutputType[P]>
        }
      >
    >


  export type DrinkRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    drinkId?: boolean
    rating?: boolean
    review?: boolean
    sweetnessLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drinkRating"]>

  export type DrinkRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    drinkId?: boolean
    rating?: boolean
    review?: boolean
    sweetnessLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drinkRating"]>

  export type DrinkRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    drinkId?: boolean
    rating?: boolean
    review?: boolean
    sweetnessLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drinkRating"]>

  export type DrinkRatingSelectScalar = {
    id?: boolean
    userId?: boolean
    drinkId?: boolean
    rating?: boolean
    review?: boolean
    sweetnessLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DrinkRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "drinkId" | "rating" | "review" | "sweetnessLevel" | "createdAt" | "updatedAt", ExtArgs["result"]["drinkRating"]>
  export type DrinkRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DrinkRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DrinkRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drink?: boolean | DrinkDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DrinkRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrinkRating"
    objects: {
      drink: Prisma.$DrinkPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      drinkId: string
      rating: number
      review: string | null
      sweetnessLevel: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["drinkRating"]>
    composites: {}
  }

  type DrinkRatingGetPayload<S extends boolean | null | undefined | DrinkRatingDefaultArgs> = $Result.GetResult<Prisma.$DrinkRatingPayload, S>

  type DrinkRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrinkRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrinkRatingCountAggregateInputType | true
    }

  export interface DrinkRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrinkRating'], meta: { name: 'DrinkRating' } }
    /**
     * Find zero or one DrinkRating that matches the filter.
     * @param {DrinkRatingFindUniqueArgs} args - Arguments to find a DrinkRating
     * @example
     * // Get one DrinkRating
     * const drinkRating = await prisma.drinkRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrinkRatingFindUniqueArgs>(args: SelectSubset<T, DrinkRatingFindUniqueArgs<ExtArgs>>): Prisma__DrinkRatingClient<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrinkRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrinkRatingFindUniqueOrThrowArgs} args - Arguments to find a DrinkRating
     * @example
     * // Get one DrinkRating
     * const drinkRating = await prisma.drinkRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrinkRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, DrinkRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrinkRatingClient<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrinkRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkRatingFindFirstArgs} args - Arguments to find a DrinkRating
     * @example
     * // Get one DrinkRating
     * const drinkRating = await prisma.drinkRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrinkRatingFindFirstArgs>(args?: SelectSubset<T, DrinkRatingFindFirstArgs<ExtArgs>>): Prisma__DrinkRatingClient<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrinkRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkRatingFindFirstOrThrowArgs} args - Arguments to find a DrinkRating
     * @example
     * // Get one DrinkRating
     * const drinkRating = await prisma.drinkRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrinkRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, DrinkRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrinkRatingClient<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrinkRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrinkRatings
     * const drinkRatings = await prisma.drinkRating.findMany()
     * 
     * // Get first 10 DrinkRatings
     * const drinkRatings = await prisma.drinkRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drinkRatingWithIdOnly = await prisma.drinkRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrinkRatingFindManyArgs>(args?: SelectSubset<T, DrinkRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrinkRating.
     * @param {DrinkRatingCreateArgs} args - Arguments to create a DrinkRating.
     * @example
     * // Create one DrinkRating
     * const DrinkRating = await prisma.drinkRating.create({
     *   data: {
     *     // ... data to create a DrinkRating
     *   }
     * })
     * 
     */
    create<T extends DrinkRatingCreateArgs>(args: SelectSubset<T, DrinkRatingCreateArgs<ExtArgs>>): Prisma__DrinkRatingClient<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrinkRatings.
     * @param {DrinkRatingCreateManyArgs} args - Arguments to create many DrinkRatings.
     * @example
     * // Create many DrinkRatings
     * const drinkRating = await prisma.drinkRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrinkRatingCreateManyArgs>(args?: SelectSubset<T, DrinkRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DrinkRatings and returns the data saved in the database.
     * @param {DrinkRatingCreateManyAndReturnArgs} args - Arguments to create many DrinkRatings.
     * @example
     * // Create many DrinkRatings
     * const drinkRating = await prisma.drinkRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DrinkRatings and only return the `id`
     * const drinkRatingWithIdOnly = await prisma.drinkRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrinkRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, DrinkRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DrinkRating.
     * @param {DrinkRatingDeleteArgs} args - Arguments to delete one DrinkRating.
     * @example
     * // Delete one DrinkRating
     * const DrinkRating = await prisma.drinkRating.delete({
     *   where: {
     *     // ... filter to delete one DrinkRating
     *   }
     * })
     * 
     */
    delete<T extends DrinkRatingDeleteArgs>(args: SelectSubset<T, DrinkRatingDeleteArgs<ExtArgs>>): Prisma__DrinkRatingClient<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrinkRating.
     * @param {DrinkRatingUpdateArgs} args - Arguments to update one DrinkRating.
     * @example
     * // Update one DrinkRating
     * const drinkRating = await prisma.drinkRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrinkRatingUpdateArgs>(args: SelectSubset<T, DrinkRatingUpdateArgs<ExtArgs>>): Prisma__DrinkRatingClient<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrinkRatings.
     * @param {DrinkRatingDeleteManyArgs} args - Arguments to filter DrinkRatings to delete.
     * @example
     * // Delete a few DrinkRatings
     * const { count } = await prisma.drinkRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrinkRatingDeleteManyArgs>(args?: SelectSubset<T, DrinkRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrinkRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrinkRatings
     * const drinkRating = await prisma.drinkRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrinkRatingUpdateManyArgs>(args: SelectSubset<T, DrinkRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrinkRatings and returns the data updated in the database.
     * @param {DrinkRatingUpdateManyAndReturnArgs} args - Arguments to update many DrinkRatings.
     * @example
     * // Update many DrinkRatings
     * const drinkRating = await prisma.drinkRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DrinkRatings and only return the `id`
     * const drinkRatingWithIdOnly = await prisma.drinkRating.updateManyAndReturn({
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
    updateManyAndReturn<T extends DrinkRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, DrinkRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DrinkRating.
     * @param {DrinkRatingUpsertArgs} args - Arguments to update or create a DrinkRating.
     * @example
     * // Update or create a DrinkRating
     * const drinkRating = await prisma.drinkRating.upsert({
     *   create: {
     *     // ... data to create a DrinkRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrinkRating we want to update
     *   }
     * })
     */
    upsert<T extends DrinkRatingUpsertArgs>(args: SelectSubset<T, DrinkRatingUpsertArgs<ExtArgs>>): Prisma__DrinkRatingClient<$Result.GetResult<Prisma.$DrinkRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrinkRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkRatingCountArgs} args - Arguments to filter DrinkRatings to count.
     * @example
     * // Count the number of DrinkRatings
     * const count = await prisma.drinkRating.count({
     *   where: {
     *     // ... the filter for the DrinkRatings we want to count
     *   }
     * })
    **/
    count<T extends DrinkRatingCountArgs>(
      args?: Subset<T, DrinkRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrinkRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrinkRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrinkRatingAggregateArgs>(args: Subset<T, DrinkRatingAggregateArgs>): Prisma.PrismaPromise<GetDrinkRatingAggregateType<T>>

    /**
     * Group by DrinkRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrinkRatingGroupByArgs} args - Group by arguments.
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
      T extends DrinkRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrinkRatingGroupByArgs['orderBy'] }
        : { orderBy?: DrinkRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrinkRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrinkRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrinkRating model
   */
  readonly fields: DrinkRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrinkRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrinkRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drink<T extends DrinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrinkDefaultArgs<ExtArgs>>): Prisma__DrinkClient<$Result.GetResult<Prisma.$DrinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DrinkRating model
   */
  interface DrinkRatingFieldRefs {
    readonly id: FieldRef<"DrinkRating", 'String'>
    readonly userId: FieldRef<"DrinkRating", 'String'>
    readonly drinkId: FieldRef<"DrinkRating", 'String'>
    readonly rating: FieldRef<"DrinkRating", 'Int'>
    readonly review: FieldRef<"DrinkRating", 'String'>
    readonly sweetnessLevel: FieldRef<"DrinkRating", 'Int'>
    readonly createdAt: FieldRef<"DrinkRating", 'DateTime'>
    readonly updatedAt: FieldRef<"DrinkRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DrinkRating findUnique
   */
  export type DrinkRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkRating to fetch.
     */
    where: DrinkRatingWhereUniqueInput
  }

  /**
   * DrinkRating findUniqueOrThrow
   */
  export type DrinkRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkRating to fetch.
     */
    where: DrinkRatingWhereUniqueInput
  }

  /**
   * DrinkRating findFirst
   */
  export type DrinkRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkRating to fetch.
     */
    where?: DrinkRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkRatings to fetch.
     */
    orderBy?: DrinkRatingOrderByWithRelationInput | DrinkRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrinkRatings.
     */
    cursor?: DrinkRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrinkRatings.
     */
    distinct?: DrinkRatingScalarFieldEnum | DrinkRatingScalarFieldEnum[]
  }

  /**
   * DrinkRating findFirstOrThrow
   */
  export type DrinkRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkRating to fetch.
     */
    where?: DrinkRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkRatings to fetch.
     */
    orderBy?: DrinkRatingOrderByWithRelationInput | DrinkRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrinkRatings.
     */
    cursor?: DrinkRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrinkRatings.
     */
    distinct?: DrinkRatingScalarFieldEnum | DrinkRatingScalarFieldEnum[]
  }

  /**
   * DrinkRating findMany
   */
  export type DrinkRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    /**
     * Filter, which DrinkRatings to fetch.
     */
    where?: DrinkRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrinkRatings to fetch.
     */
    orderBy?: DrinkRatingOrderByWithRelationInput | DrinkRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrinkRatings.
     */
    cursor?: DrinkRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrinkRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrinkRatings.
     */
    skip?: number
    distinct?: DrinkRatingScalarFieldEnum | DrinkRatingScalarFieldEnum[]
  }

  /**
   * DrinkRating create
   */
  export type DrinkRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a DrinkRating.
     */
    data: XOR<DrinkRatingCreateInput, DrinkRatingUncheckedCreateInput>
  }

  /**
   * DrinkRating createMany
   */
  export type DrinkRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrinkRatings.
     */
    data: DrinkRatingCreateManyInput | DrinkRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrinkRating createManyAndReturn
   */
  export type DrinkRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * The data used to create many DrinkRatings.
     */
    data: DrinkRatingCreateManyInput | DrinkRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrinkRating update
   */
  export type DrinkRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a DrinkRating.
     */
    data: XOR<DrinkRatingUpdateInput, DrinkRatingUncheckedUpdateInput>
    /**
     * Choose, which DrinkRating to update.
     */
    where: DrinkRatingWhereUniqueInput
  }

  /**
   * DrinkRating updateMany
   */
  export type DrinkRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrinkRatings.
     */
    data: XOR<DrinkRatingUpdateManyMutationInput, DrinkRatingUncheckedUpdateManyInput>
    /**
     * Filter which DrinkRatings to update
     */
    where?: DrinkRatingWhereInput
    /**
     * Limit how many DrinkRatings to update.
     */
    limit?: number
  }

  /**
   * DrinkRating updateManyAndReturn
   */
  export type DrinkRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * The data used to update DrinkRatings.
     */
    data: XOR<DrinkRatingUpdateManyMutationInput, DrinkRatingUncheckedUpdateManyInput>
    /**
     * Filter which DrinkRatings to update
     */
    where?: DrinkRatingWhereInput
    /**
     * Limit how many DrinkRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrinkRating upsert
   */
  export type DrinkRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the DrinkRating to update in case it exists.
     */
    where: DrinkRatingWhereUniqueInput
    /**
     * In case the DrinkRating found by the `where` argument doesn't exist, create a new DrinkRating with this data.
     */
    create: XOR<DrinkRatingCreateInput, DrinkRatingUncheckedCreateInput>
    /**
     * In case the DrinkRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrinkRatingUpdateInput, DrinkRatingUncheckedUpdateInput>
  }

  /**
   * DrinkRating delete
   */
  export type DrinkRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
    /**
     * Filter which DrinkRating to delete.
     */
    where: DrinkRatingWhereUniqueInput
  }

  /**
   * DrinkRating deleteMany
   */
  export type DrinkRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrinkRatings to delete
     */
    where?: DrinkRatingWhereInput
    /**
     * Limit how many DrinkRatings to delete.
     */
    limit?: number
  }

  /**
   * DrinkRating without action
   */
  export type DrinkRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrinkRating
     */
    select?: DrinkRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrinkRating
     */
    omit?: DrinkRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrinkRatingInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    latitude: 'latitude',
    longitude: 'longitude',
    phone: 'phone',
    website: 'website',
    hours: 'hours',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const DrinkScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    description: 'description',
    price: 'price',
    category: 'category',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type DrinkScalarFieldEnum = (typeof DrinkScalarFieldEnum)[keyof typeof DrinkScalarFieldEnum]


  export const ToppingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type ToppingScalarFieldEnum = (typeof ToppingScalarFieldEnum)[keyof typeof ToppingScalarFieldEnum]


  export const DrinkToppingScalarFieldEnum: {
    drinkId: 'drinkId',
    toppingId: 'toppingId'
  };

  export type DrinkToppingScalarFieldEnum = (typeof DrinkToppingScalarFieldEnum)[keyof typeof DrinkToppingScalarFieldEnum]


  export const ShopRatingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shopId: 'shopId',
    rating: 'rating',
    review: 'review',
    serviceRating: 'serviceRating',
    ambianceRating: 'ambianceRating',
    valueRating: 'valueRating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopRatingScalarFieldEnum = (typeof ShopRatingScalarFieldEnum)[keyof typeof ShopRatingScalarFieldEnum]


  export const DrinkRatingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    drinkId: 'drinkId',
    rating: 'rating',
    review: 'review',
    sweetnessLevel: 'sweetnessLevel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DrinkRatingScalarFieldEnum = (typeof DrinkRatingScalarFieldEnum)[keyof typeof DrinkRatingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    drinkRatings?: DrinkRatingListRelationFilter
    shopRatings?: ShopRatingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drinkRatings?: DrinkRatingOrderByRelationAggregateInput
    shopRatings?: ShopRatingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    drinkRatings?: DrinkRatingListRelationFilter
    shopRatings?: ShopRatingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    address?: StringFilter<"Shop"> | string
    city?: StringFilter<"Shop"> | string
    state?: StringFilter<"Shop"> | string
    zipCode?: StringNullableFilter<"Shop"> | string | null
    latitude?: FloatFilter<"Shop"> | number
    longitude?: FloatFilter<"Shop"> | number
    phone?: StringNullableFilter<"Shop"> | string | null
    website?: StringNullableFilter<"Shop"> | string | null
    hours?: JsonNullableFilter<"Shop">
    description?: StringNullableFilter<"Shop"> | string | null
    imageUrl?: StringNullableFilter<"Shop"> | string | null
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    drinks?: DrinkListRelationFilter
    ratings?: ShopRatingListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drinks?: DrinkOrderByRelationAggregateInput
    ratings?: ShopRatingOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    address?: StringFilter<"Shop"> | string
    city?: StringFilter<"Shop"> | string
    state?: StringFilter<"Shop"> | string
    zipCode?: StringNullableFilter<"Shop"> | string | null
    latitude?: FloatFilter<"Shop"> | number
    longitude?: FloatFilter<"Shop"> | number
    phone?: StringNullableFilter<"Shop"> | string | null
    website?: StringNullableFilter<"Shop"> | string | null
    hours?: JsonNullableFilter<"Shop">
    description?: StringNullableFilter<"Shop"> | string | null
    imageUrl?: StringNullableFilter<"Shop"> | string | null
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    drinks?: DrinkListRelationFilter
    ratings?: ShopRatingListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    address?: StringWithAggregatesFilter<"Shop"> | string
    city?: StringWithAggregatesFilter<"Shop"> | string
    state?: StringWithAggregatesFilter<"Shop"> | string
    zipCode?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    latitude?: FloatWithAggregatesFilter<"Shop"> | number
    longitude?: FloatWithAggregatesFilter<"Shop"> | number
    phone?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    website?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    hours?: JsonNullableWithAggregatesFilter<"Shop">
    description?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type DrinkWhereInput = {
    AND?: DrinkWhereInput | DrinkWhereInput[]
    OR?: DrinkWhereInput[]
    NOT?: DrinkWhereInput | DrinkWhereInput[]
    id?: StringFilter<"Drink"> | string
    shopId?: StringFilter<"Drink"> | string
    name?: StringFilter<"Drink"> | string
    description?: StringNullableFilter<"Drink"> | string | null
    price?: FloatNullableFilter<"Drink"> | number | null
    category?: StringNullableFilter<"Drink"> | string | null
    imageUrl?: StringNullableFilter<"Drink"> | string | null
    createdAt?: DateTimeFilter<"Drink"> | Date | string
    ratings?: DrinkRatingListRelationFilter
    toppings?: DrinkToppingListRelationFilter
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type DrinkOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ratings?: DrinkRatingOrderByRelationAggregateInput
    toppings?: DrinkToppingOrderByRelationAggregateInput
    shop?: ShopOrderByWithRelationInput
  }

  export type DrinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrinkWhereInput | DrinkWhereInput[]
    OR?: DrinkWhereInput[]
    NOT?: DrinkWhereInput | DrinkWhereInput[]
    shopId?: StringFilter<"Drink"> | string
    name?: StringFilter<"Drink"> | string
    description?: StringNullableFilter<"Drink"> | string | null
    price?: FloatNullableFilter<"Drink"> | number | null
    category?: StringNullableFilter<"Drink"> | string | null
    imageUrl?: StringNullableFilter<"Drink"> | string | null
    createdAt?: DateTimeFilter<"Drink"> | Date | string
    ratings?: DrinkRatingListRelationFilter
    toppings?: DrinkToppingListRelationFilter
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type DrinkOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DrinkCountOrderByAggregateInput
    _avg?: DrinkAvgOrderByAggregateInput
    _max?: DrinkMaxOrderByAggregateInput
    _min?: DrinkMinOrderByAggregateInput
    _sum?: DrinkSumOrderByAggregateInput
  }

  export type DrinkScalarWhereWithAggregatesInput = {
    AND?: DrinkScalarWhereWithAggregatesInput | DrinkScalarWhereWithAggregatesInput[]
    OR?: DrinkScalarWhereWithAggregatesInput[]
    NOT?: DrinkScalarWhereWithAggregatesInput | DrinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drink"> | string
    shopId?: StringWithAggregatesFilter<"Drink"> | string
    name?: StringWithAggregatesFilter<"Drink"> | string
    description?: StringNullableWithAggregatesFilter<"Drink"> | string | null
    price?: FloatNullableWithAggregatesFilter<"Drink"> | number | null
    category?: StringNullableWithAggregatesFilter<"Drink"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Drink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Drink"> | Date | string
  }

  export type ToppingWhereInput = {
    AND?: ToppingWhereInput | ToppingWhereInput[]
    OR?: ToppingWhereInput[]
    NOT?: ToppingWhereInput | ToppingWhereInput[]
    id?: StringFilter<"Topping"> | string
    name?: StringFilter<"Topping"> | string
    description?: StringNullableFilter<"Topping"> | string | null
    drinks?: DrinkToppingListRelationFilter
  }

  export type ToppingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    drinks?: DrinkToppingOrderByRelationAggregateInput
  }

  export type ToppingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ToppingWhereInput | ToppingWhereInput[]
    OR?: ToppingWhereInput[]
    NOT?: ToppingWhereInput | ToppingWhereInput[]
    description?: StringNullableFilter<"Topping"> | string | null
    drinks?: DrinkToppingListRelationFilter
  }, "id" | "name">

  export type ToppingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ToppingCountOrderByAggregateInput
    _max?: ToppingMaxOrderByAggregateInput
    _min?: ToppingMinOrderByAggregateInput
  }

  export type ToppingScalarWhereWithAggregatesInput = {
    AND?: ToppingScalarWhereWithAggregatesInput | ToppingScalarWhereWithAggregatesInput[]
    OR?: ToppingScalarWhereWithAggregatesInput[]
    NOT?: ToppingScalarWhereWithAggregatesInput | ToppingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topping"> | string
    name?: StringWithAggregatesFilter<"Topping"> | string
    description?: StringNullableWithAggregatesFilter<"Topping"> | string | null
  }

  export type DrinkToppingWhereInput = {
    AND?: DrinkToppingWhereInput | DrinkToppingWhereInput[]
    OR?: DrinkToppingWhereInput[]
    NOT?: DrinkToppingWhereInput | DrinkToppingWhereInput[]
    drinkId?: StringFilter<"DrinkTopping"> | string
    toppingId?: StringFilter<"DrinkTopping"> | string
    drink?: XOR<DrinkScalarRelationFilter, DrinkWhereInput>
    topping?: XOR<ToppingScalarRelationFilter, ToppingWhereInput>
  }

  export type DrinkToppingOrderByWithRelationInput = {
    drinkId?: SortOrder
    toppingId?: SortOrder
    drink?: DrinkOrderByWithRelationInput
    topping?: ToppingOrderByWithRelationInput
  }

  export type DrinkToppingWhereUniqueInput = Prisma.AtLeast<{
    drinkId_toppingId?: DrinkToppingDrinkIdToppingIdCompoundUniqueInput
    AND?: DrinkToppingWhereInput | DrinkToppingWhereInput[]
    OR?: DrinkToppingWhereInput[]
    NOT?: DrinkToppingWhereInput | DrinkToppingWhereInput[]
    drinkId?: StringFilter<"DrinkTopping"> | string
    toppingId?: StringFilter<"DrinkTopping"> | string
    drink?: XOR<DrinkScalarRelationFilter, DrinkWhereInput>
    topping?: XOR<ToppingScalarRelationFilter, ToppingWhereInput>
  }, "drinkId_toppingId">

  export type DrinkToppingOrderByWithAggregationInput = {
    drinkId?: SortOrder
    toppingId?: SortOrder
    _count?: DrinkToppingCountOrderByAggregateInput
    _max?: DrinkToppingMaxOrderByAggregateInput
    _min?: DrinkToppingMinOrderByAggregateInput
  }

  export type DrinkToppingScalarWhereWithAggregatesInput = {
    AND?: DrinkToppingScalarWhereWithAggregatesInput | DrinkToppingScalarWhereWithAggregatesInput[]
    OR?: DrinkToppingScalarWhereWithAggregatesInput[]
    NOT?: DrinkToppingScalarWhereWithAggregatesInput | DrinkToppingScalarWhereWithAggregatesInput[]
    drinkId?: StringWithAggregatesFilter<"DrinkTopping"> | string
    toppingId?: StringWithAggregatesFilter<"DrinkTopping"> | string
  }

  export type ShopRatingWhereInput = {
    AND?: ShopRatingWhereInput | ShopRatingWhereInput[]
    OR?: ShopRatingWhereInput[]
    NOT?: ShopRatingWhereInput | ShopRatingWhereInput[]
    id?: StringFilter<"ShopRating"> | string
    userId?: StringFilter<"ShopRating"> | string
    shopId?: StringFilter<"ShopRating"> | string
    rating?: IntFilter<"ShopRating"> | number
    review?: StringNullableFilter<"ShopRating"> | string | null
    serviceRating?: IntNullableFilter<"ShopRating"> | number | null
    ambianceRating?: IntNullableFilter<"ShopRating"> | number | null
    valueRating?: IntNullableFilter<"ShopRating"> | number | null
    createdAt?: DateTimeFilter<"ShopRating"> | Date | string
    updatedAt?: DateTimeFilter<"ShopRating"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShopRatingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    rating?: SortOrder
    review?: SortOrderInput | SortOrder
    serviceRating?: SortOrderInput | SortOrder
    ambianceRating?: SortOrderInput | SortOrder
    valueRating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ShopRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_shopId?: ShopRatingUserIdShopIdCompoundUniqueInput
    AND?: ShopRatingWhereInput | ShopRatingWhereInput[]
    OR?: ShopRatingWhereInput[]
    NOT?: ShopRatingWhereInput | ShopRatingWhereInput[]
    userId?: StringFilter<"ShopRating"> | string
    shopId?: StringFilter<"ShopRating"> | string
    rating?: IntFilter<"ShopRating"> | number
    review?: StringNullableFilter<"ShopRating"> | string | null
    serviceRating?: IntNullableFilter<"ShopRating"> | number | null
    ambianceRating?: IntNullableFilter<"ShopRating"> | number | null
    valueRating?: IntNullableFilter<"ShopRating"> | number | null
    createdAt?: DateTimeFilter<"ShopRating"> | Date | string
    updatedAt?: DateTimeFilter<"ShopRating"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_shopId">

  export type ShopRatingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    rating?: SortOrder
    review?: SortOrderInput | SortOrder
    serviceRating?: SortOrderInput | SortOrder
    ambianceRating?: SortOrderInput | SortOrder
    valueRating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopRatingCountOrderByAggregateInput
    _avg?: ShopRatingAvgOrderByAggregateInput
    _max?: ShopRatingMaxOrderByAggregateInput
    _min?: ShopRatingMinOrderByAggregateInput
    _sum?: ShopRatingSumOrderByAggregateInput
  }

  export type ShopRatingScalarWhereWithAggregatesInput = {
    AND?: ShopRatingScalarWhereWithAggregatesInput | ShopRatingScalarWhereWithAggregatesInput[]
    OR?: ShopRatingScalarWhereWithAggregatesInput[]
    NOT?: ShopRatingScalarWhereWithAggregatesInput | ShopRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopRating"> | string
    userId?: StringWithAggregatesFilter<"ShopRating"> | string
    shopId?: StringWithAggregatesFilter<"ShopRating"> | string
    rating?: IntWithAggregatesFilter<"ShopRating"> | number
    review?: StringNullableWithAggregatesFilter<"ShopRating"> | string | null
    serviceRating?: IntNullableWithAggregatesFilter<"ShopRating"> | number | null
    ambianceRating?: IntNullableWithAggregatesFilter<"ShopRating"> | number | null
    valueRating?: IntNullableWithAggregatesFilter<"ShopRating"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ShopRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShopRating"> | Date | string
  }

  export type DrinkRatingWhereInput = {
    AND?: DrinkRatingWhereInput | DrinkRatingWhereInput[]
    OR?: DrinkRatingWhereInput[]
    NOT?: DrinkRatingWhereInput | DrinkRatingWhereInput[]
    id?: StringFilter<"DrinkRating"> | string
    userId?: StringFilter<"DrinkRating"> | string
    drinkId?: StringFilter<"DrinkRating"> | string
    rating?: IntFilter<"DrinkRating"> | number
    review?: StringNullableFilter<"DrinkRating"> | string | null
    sweetnessLevel?: IntNullableFilter<"DrinkRating"> | number | null
    createdAt?: DateTimeFilter<"DrinkRating"> | Date | string
    updatedAt?: DateTimeFilter<"DrinkRating"> | Date | string
    drink?: XOR<DrinkScalarRelationFilter, DrinkWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DrinkRatingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    rating?: SortOrder
    review?: SortOrderInput | SortOrder
    sweetnessLevel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drink?: DrinkOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DrinkRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_drinkId?: DrinkRatingUserIdDrinkIdCompoundUniqueInput
    AND?: DrinkRatingWhereInput | DrinkRatingWhereInput[]
    OR?: DrinkRatingWhereInput[]
    NOT?: DrinkRatingWhereInput | DrinkRatingWhereInput[]
    userId?: StringFilter<"DrinkRating"> | string
    drinkId?: StringFilter<"DrinkRating"> | string
    rating?: IntFilter<"DrinkRating"> | number
    review?: StringNullableFilter<"DrinkRating"> | string | null
    sweetnessLevel?: IntNullableFilter<"DrinkRating"> | number | null
    createdAt?: DateTimeFilter<"DrinkRating"> | Date | string
    updatedAt?: DateTimeFilter<"DrinkRating"> | Date | string
    drink?: XOR<DrinkScalarRelationFilter, DrinkWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_drinkId">

  export type DrinkRatingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    rating?: SortOrder
    review?: SortOrderInput | SortOrder
    sweetnessLevel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DrinkRatingCountOrderByAggregateInput
    _avg?: DrinkRatingAvgOrderByAggregateInput
    _max?: DrinkRatingMaxOrderByAggregateInput
    _min?: DrinkRatingMinOrderByAggregateInput
    _sum?: DrinkRatingSumOrderByAggregateInput
  }

  export type DrinkRatingScalarWhereWithAggregatesInput = {
    AND?: DrinkRatingScalarWhereWithAggregatesInput | DrinkRatingScalarWhereWithAggregatesInput[]
    OR?: DrinkRatingScalarWhereWithAggregatesInput[]
    NOT?: DrinkRatingScalarWhereWithAggregatesInput | DrinkRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DrinkRating"> | string
    userId?: StringWithAggregatesFilter<"DrinkRating"> | string
    drinkId?: StringWithAggregatesFilter<"DrinkRating"> | string
    rating?: IntWithAggregatesFilter<"DrinkRating"> | number
    review?: StringNullableWithAggregatesFilter<"DrinkRating"> | string | null
    sweetnessLevel?: IntNullableWithAggregatesFilter<"DrinkRating"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"DrinkRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DrinkRating"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drinkRatings?: DrinkRatingCreateNestedManyWithoutUserInput
    shopRatings?: ShopRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drinkRatings?: DrinkRatingUncheckedCreateNestedManyWithoutUserInput
    shopRatings?: ShopRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drinkRatings?: DrinkRatingUpdateManyWithoutUserNestedInput
    shopRatings?: ShopRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drinkRatings?: DrinkRatingUncheckedUpdateManyWithoutUserNestedInput
    shopRatings?: ShopRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    website?: string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drinks?: DrinkCreateNestedManyWithoutShopInput
    ratings?: ShopRatingCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    website?: string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drinks?: DrinkUncheckedCreateNestedManyWithoutShopInput
    ratings?: ShopRatingUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drinks?: DrinkUpdateManyWithoutShopNestedInput
    ratings?: ShopRatingUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drinks?: DrinkUncheckedUpdateManyWithoutShopNestedInput
    ratings?: ShopRatingUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    website?: string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkCreateInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    ratings?: DrinkRatingCreateNestedManyWithoutDrinkInput
    toppings?: DrinkToppingCreateNestedManyWithoutDrinkInput
    shop: ShopCreateNestedOneWithoutDrinksInput
  }

  export type DrinkUncheckedCreateInput = {
    id?: string
    shopId: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    ratings?: DrinkRatingUncheckedCreateNestedManyWithoutDrinkInput
    toppings?: DrinkToppingUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: DrinkRatingUpdateManyWithoutDrinkNestedInput
    toppings?: DrinkToppingUpdateManyWithoutDrinkNestedInput
    shop?: ShopUpdateOneRequiredWithoutDrinksNestedInput
  }

  export type DrinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: DrinkRatingUncheckedUpdateManyWithoutDrinkNestedInput
    toppings?: DrinkToppingUncheckedUpdateManyWithoutDrinkNestedInput
  }

  export type DrinkCreateManyInput = {
    id?: string
    shopId: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type DrinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToppingCreateInput = {
    id?: string
    name: string
    description?: string | null
    drinks?: DrinkToppingCreateNestedManyWithoutToppingInput
  }

  export type ToppingUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    drinks?: DrinkToppingUncheckedCreateNestedManyWithoutToppingInput
  }

  export type ToppingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drinks?: DrinkToppingUpdateManyWithoutToppingNestedInput
  }

  export type ToppingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    drinks?: DrinkToppingUncheckedUpdateManyWithoutToppingNestedInput
  }

  export type ToppingCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type ToppingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ToppingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DrinkToppingCreateInput = {
    drink: DrinkCreateNestedOneWithoutToppingsInput
    topping: ToppingCreateNestedOneWithoutDrinksInput
  }

  export type DrinkToppingUncheckedCreateInput = {
    drinkId: string
    toppingId: string
  }

  export type DrinkToppingUpdateInput = {
    drink?: DrinkUpdateOneRequiredWithoutToppingsNestedInput
    topping?: ToppingUpdateOneRequiredWithoutDrinksNestedInput
  }

  export type DrinkToppingUncheckedUpdateInput = {
    drinkId?: StringFieldUpdateOperationsInput | string
    toppingId?: StringFieldUpdateOperationsInput | string
  }

  export type DrinkToppingCreateManyInput = {
    drinkId: string
    toppingId: string
  }

  export type DrinkToppingUpdateManyMutationInput = {

  }

  export type DrinkToppingUncheckedUpdateManyInput = {
    drinkId?: StringFieldUpdateOperationsInput | string
    toppingId?: StringFieldUpdateOperationsInput | string
  }

  export type ShopRatingCreateInput = {
    id?: string
    rating: number
    review?: string | null
    serviceRating?: number | null
    ambianceRating?: number | null
    valueRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutRatingsInput
    user: UserCreateNestedOneWithoutShopRatingsInput
  }

  export type ShopRatingUncheckedCreateInput = {
    id?: string
    userId: string
    shopId: string
    rating: number
    review?: string | null
    serviceRating?: number | null
    ambianceRating?: number | null
    valueRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutRatingsNestedInput
    user?: UserUpdateOneRequiredWithoutShopRatingsNestedInput
  }

  export type ShopRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopRatingCreateManyInput = {
    id?: string
    userId: string
    shopId: string
    rating: number
    review?: string | null
    serviceRating?: number | null
    ambianceRating?: number | null
    valueRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkRatingCreateInput = {
    id?: string
    rating: number
    review?: string | null
    sweetnessLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drink: DrinkCreateNestedOneWithoutRatingsInput
    user: UserCreateNestedOneWithoutDrinkRatingsInput
  }

  export type DrinkRatingUncheckedCreateInput = {
    id?: string
    userId: string
    drinkId: string
    rating: number
    review?: string | null
    sweetnessLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drink?: DrinkUpdateOneRequiredWithoutRatingsNestedInput
    user?: UserUpdateOneRequiredWithoutDrinkRatingsNestedInput
  }

  export type DrinkRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    drinkId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkRatingCreateManyInput = {
    id?: string
    userId: string
    drinkId: string
    rating: number
    review?: string | null
    sweetnessLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    drinkId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DrinkRatingListRelationFilter = {
    every?: DrinkRatingWhereInput
    some?: DrinkRatingWhereInput
    none?: DrinkRatingWhereInput
  }

  export type ShopRatingListRelationFilter = {
    every?: ShopRatingWhereInput
    some?: ShopRatingWhereInput
    none?: ShopRatingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DrinkRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DrinkListRelationFilter = {
    every?: DrinkWhereInput
    some?: DrinkWhereInput
    none?: DrinkWhereInput
  }

  export type DrinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    hours?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DrinkToppingListRelationFilter = {
    every?: DrinkToppingWhereInput
    some?: DrinkToppingWhereInput
    none?: DrinkToppingWhereInput
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type DrinkToppingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrinkCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type DrinkAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DrinkMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type DrinkMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type DrinkSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type ToppingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ToppingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ToppingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DrinkScalarRelationFilter = {
    is?: DrinkWhereInput
    isNot?: DrinkWhereInput
  }

  export type ToppingScalarRelationFilter = {
    is?: ToppingWhereInput
    isNot?: ToppingWhereInput
  }

  export type DrinkToppingDrinkIdToppingIdCompoundUniqueInput = {
    drinkId: string
    toppingId: string
  }

  export type DrinkToppingCountOrderByAggregateInput = {
    drinkId?: SortOrder
    toppingId?: SortOrder
  }

  export type DrinkToppingMaxOrderByAggregateInput = {
    drinkId?: SortOrder
    toppingId?: SortOrder
  }

  export type DrinkToppingMinOrderByAggregateInput = {
    drinkId?: SortOrder
    toppingId?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShopRatingUserIdShopIdCompoundUniqueInput = {
    userId: string
    shopId: string
  }

  export type ShopRatingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    serviceRating?: SortOrder
    ambianceRating?: SortOrder
    valueRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
    serviceRating?: SortOrder
    ambianceRating?: SortOrder
    valueRating?: SortOrder
  }

  export type ShopRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    serviceRating?: SortOrder
    ambianceRating?: SortOrder
    valueRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopRatingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    serviceRating?: SortOrder
    ambianceRating?: SortOrder
    valueRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopRatingSumOrderByAggregateInput = {
    rating?: SortOrder
    serviceRating?: SortOrder
    ambianceRating?: SortOrder
    valueRating?: SortOrder
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

  export type DrinkRatingUserIdDrinkIdCompoundUniqueInput = {
    userId: string
    drinkId: string
  }

  export type DrinkRatingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    sweetnessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrinkRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
    sweetnessLevel?: SortOrder
  }

  export type DrinkRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    sweetnessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrinkRatingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    drinkId?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    sweetnessLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrinkRatingSumOrderByAggregateInput = {
    rating?: SortOrder
    sweetnessLevel?: SortOrder
  }

  export type DrinkRatingCreateNestedManyWithoutUserInput = {
    create?: XOR<DrinkRatingCreateWithoutUserInput, DrinkRatingUncheckedCreateWithoutUserInput> | DrinkRatingCreateWithoutUserInput[] | DrinkRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrinkRatingCreateOrConnectWithoutUserInput | DrinkRatingCreateOrConnectWithoutUserInput[]
    createMany?: DrinkRatingCreateManyUserInputEnvelope
    connect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
  }

  export type ShopRatingCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopRatingCreateWithoutUserInput, ShopRatingUncheckedCreateWithoutUserInput> | ShopRatingCreateWithoutUserInput[] | ShopRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopRatingCreateOrConnectWithoutUserInput | ShopRatingCreateOrConnectWithoutUserInput[]
    createMany?: ShopRatingCreateManyUserInputEnvelope
    connect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
  }

  export type DrinkRatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DrinkRatingCreateWithoutUserInput, DrinkRatingUncheckedCreateWithoutUserInput> | DrinkRatingCreateWithoutUserInput[] | DrinkRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrinkRatingCreateOrConnectWithoutUserInput | DrinkRatingCreateOrConnectWithoutUserInput[]
    createMany?: DrinkRatingCreateManyUserInputEnvelope
    connect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
  }

  export type ShopRatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopRatingCreateWithoutUserInput, ShopRatingUncheckedCreateWithoutUserInput> | ShopRatingCreateWithoutUserInput[] | ShopRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopRatingCreateOrConnectWithoutUserInput | ShopRatingCreateOrConnectWithoutUserInput[]
    createMany?: ShopRatingCreateManyUserInputEnvelope
    connect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DrinkRatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<DrinkRatingCreateWithoutUserInput, DrinkRatingUncheckedCreateWithoutUserInput> | DrinkRatingCreateWithoutUserInput[] | DrinkRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrinkRatingCreateOrConnectWithoutUserInput | DrinkRatingCreateOrConnectWithoutUserInput[]
    upsert?: DrinkRatingUpsertWithWhereUniqueWithoutUserInput | DrinkRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DrinkRatingCreateManyUserInputEnvelope
    set?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    disconnect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    delete?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    connect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    update?: DrinkRatingUpdateWithWhereUniqueWithoutUserInput | DrinkRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DrinkRatingUpdateManyWithWhereWithoutUserInput | DrinkRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DrinkRatingScalarWhereInput | DrinkRatingScalarWhereInput[]
  }

  export type ShopRatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopRatingCreateWithoutUserInput, ShopRatingUncheckedCreateWithoutUserInput> | ShopRatingCreateWithoutUserInput[] | ShopRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopRatingCreateOrConnectWithoutUserInput | ShopRatingCreateOrConnectWithoutUserInput[]
    upsert?: ShopRatingUpsertWithWhereUniqueWithoutUserInput | ShopRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopRatingCreateManyUserInputEnvelope
    set?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    disconnect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    delete?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    connect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    update?: ShopRatingUpdateWithWhereUniqueWithoutUserInput | ShopRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopRatingUpdateManyWithWhereWithoutUserInput | ShopRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopRatingScalarWhereInput | ShopRatingScalarWhereInput[]
  }

  export type DrinkRatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DrinkRatingCreateWithoutUserInput, DrinkRatingUncheckedCreateWithoutUserInput> | DrinkRatingCreateWithoutUserInput[] | DrinkRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DrinkRatingCreateOrConnectWithoutUserInput | DrinkRatingCreateOrConnectWithoutUserInput[]
    upsert?: DrinkRatingUpsertWithWhereUniqueWithoutUserInput | DrinkRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DrinkRatingCreateManyUserInputEnvelope
    set?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    disconnect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    delete?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    connect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    update?: DrinkRatingUpdateWithWhereUniqueWithoutUserInput | DrinkRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DrinkRatingUpdateManyWithWhereWithoutUserInput | DrinkRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DrinkRatingScalarWhereInput | DrinkRatingScalarWhereInput[]
  }

  export type ShopRatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopRatingCreateWithoutUserInput, ShopRatingUncheckedCreateWithoutUserInput> | ShopRatingCreateWithoutUserInput[] | ShopRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopRatingCreateOrConnectWithoutUserInput | ShopRatingCreateOrConnectWithoutUserInput[]
    upsert?: ShopRatingUpsertWithWhereUniqueWithoutUserInput | ShopRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopRatingCreateManyUserInputEnvelope
    set?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    disconnect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    delete?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    connect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    update?: ShopRatingUpdateWithWhereUniqueWithoutUserInput | ShopRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopRatingUpdateManyWithWhereWithoutUserInput | ShopRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopRatingScalarWhereInput | ShopRatingScalarWhereInput[]
  }

  export type DrinkCreateNestedManyWithoutShopInput = {
    create?: XOR<DrinkCreateWithoutShopInput, DrinkUncheckedCreateWithoutShopInput> | DrinkCreateWithoutShopInput[] | DrinkUncheckedCreateWithoutShopInput[]
    connectOrCreate?: DrinkCreateOrConnectWithoutShopInput | DrinkCreateOrConnectWithoutShopInput[]
    createMany?: DrinkCreateManyShopInputEnvelope
    connect?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
  }

  export type ShopRatingCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopRatingCreateWithoutShopInput, ShopRatingUncheckedCreateWithoutShopInput> | ShopRatingCreateWithoutShopInput[] | ShopRatingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopRatingCreateOrConnectWithoutShopInput | ShopRatingCreateOrConnectWithoutShopInput[]
    createMany?: ShopRatingCreateManyShopInputEnvelope
    connect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
  }

  export type DrinkUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<DrinkCreateWithoutShopInput, DrinkUncheckedCreateWithoutShopInput> | DrinkCreateWithoutShopInput[] | DrinkUncheckedCreateWithoutShopInput[]
    connectOrCreate?: DrinkCreateOrConnectWithoutShopInput | DrinkCreateOrConnectWithoutShopInput[]
    createMany?: DrinkCreateManyShopInputEnvelope
    connect?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
  }

  export type ShopRatingUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopRatingCreateWithoutShopInput, ShopRatingUncheckedCreateWithoutShopInput> | ShopRatingCreateWithoutShopInput[] | ShopRatingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopRatingCreateOrConnectWithoutShopInput | ShopRatingCreateOrConnectWithoutShopInput[]
    createMany?: ShopRatingCreateManyShopInputEnvelope
    connect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DrinkUpdateManyWithoutShopNestedInput = {
    create?: XOR<DrinkCreateWithoutShopInput, DrinkUncheckedCreateWithoutShopInput> | DrinkCreateWithoutShopInput[] | DrinkUncheckedCreateWithoutShopInput[]
    connectOrCreate?: DrinkCreateOrConnectWithoutShopInput | DrinkCreateOrConnectWithoutShopInput[]
    upsert?: DrinkUpsertWithWhereUniqueWithoutShopInput | DrinkUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: DrinkCreateManyShopInputEnvelope
    set?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
    disconnect?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
    delete?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
    connect?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
    update?: DrinkUpdateWithWhereUniqueWithoutShopInput | DrinkUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: DrinkUpdateManyWithWhereWithoutShopInput | DrinkUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: DrinkScalarWhereInput | DrinkScalarWhereInput[]
  }

  export type ShopRatingUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopRatingCreateWithoutShopInput, ShopRatingUncheckedCreateWithoutShopInput> | ShopRatingCreateWithoutShopInput[] | ShopRatingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopRatingCreateOrConnectWithoutShopInput | ShopRatingCreateOrConnectWithoutShopInput[]
    upsert?: ShopRatingUpsertWithWhereUniqueWithoutShopInput | ShopRatingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopRatingCreateManyShopInputEnvelope
    set?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    disconnect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    delete?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    connect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    update?: ShopRatingUpdateWithWhereUniqueWithoutShopInput | ShopRatingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopRatingUpdateManyWithWhereWithoutShopInput | ShopRatingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopRatingScalarWhereInput | ShopRatingScalarWhereInput[]
  }

  export type DrinkUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<DrinkCreateWithoutShopInput, DrinkUncheckedCreateWithoutShopInput> | DrinkCreateWithoutShopInput[] | DrinkUncheckedCreateWithoutShopInput[]
    connectOrCreate?: DrinkCreateOrConnectWithoutShopInput | DrinkCreateOrConnectWithoutShopInput[]
    upsert?: DrinkUpsertWithWhereUniqueWithoutShopInput | DrinkUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: DrinkCreateManyShopInputEnvelope
    set?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
    disconnect?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
    delete?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
    connect?: DrinkWhereUniqueInput | DrinkWhereUniqueInput[]
    update?: DrinkUpdateWithWhereUniqueWithoutShopInput | DrinkUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: DrinkUpdateManyWithWhereWithoutShopInput | DrinkUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: DrinkScalarWhereInput | DrinkScalarWhereInput[]
  }

  export type ShopRatingUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopRatingCreateWithoutShopInput, ShopRatingUncheckedCreateWithoutShopInput> | ShopRatingCreateWithoutShopInput[] | ShopRatingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopRatingCreateOrConnectWithoutShopInput | ShopRatingCreateOrConnectWithoutShopInput[]
    upsert?: ShopRatingUpsertWithWhereUniqueWithoutShopInput | ShopRatingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopRatingCreateManyShopInputEnvelope
    set?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    disconnect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    delete?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    connect?: ShopRatingWhereUniqueInput | ShopRatingWhereUniqueInput[]
    update?: ShopRatingUpdateWithWhereUniqueWithoutShopInput | ShopRatingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopRatingUpdateManyWithWhereWithoutShopInput | ShopRatingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopRatingScalarWhereInput | ShopRatingScalarWhereInput[]
  }

  export type DrinkRatingCreateNestedManyWithoutDrinkInput = {
    create?: XOR<DrinkRatingCreateWithoutDrinkInput, DrinkRatingUncheckedCreateWithoutDrinkInput> | DrinkRatingCreateWithoutDrinkInput[] | DrinkRatingUncheckedCreateWithoutDrinkInput[]
    connectOrCreate?: DrinkRatingCreateOrConnectWithoutDrinkInput | DrinkRatingCreateOrConnectWithoutDrinkInput[]
    createMany?: DrinkRatingCreateManyDrinkInputEnvelope
    connect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
  }

  export type DrinkToppingCreateNestedManyWithoutDrinkInput = {
    create?: XOR<DrinkToppingCreateWithoutDrinkInput, DrinkToppingUncheckedCreateWithoutDrinkInput> | DrinkToppingCreateWithoutDrinkInput[] | DrinkToppingUncheckedCreateWithoutDrinkInput[]
    connectOrCreate?: DrinkToppingCreateOrConnectWithoutDrinkInput | DrinkToppingCreateOrConnectWithoutDrinkInput[]
    createMany?: DrinkToppingCreateManyDrinkInputEnvelope
    connect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
  }

  export type ShopCreateNestedOneWithoutDrinksInput = {
    create?: XOR<ShopCreateWithoutDrinksInput, ShopUncheckedCreateWithoutDrinksInput>
    connectOrCreate?: ShopCreateOrConnectWithoutDrinksInput
    connect?: ShopWhereUniqueInput
  }

  export type DrinkRatingUncheckedCreateNestedManyWithoutDrinkInput = {
    create?: XOR<DrinkRatingCreateWithoutDrinkInput, DrinkRatingUncheckedCreateWithoutDrinkInput> | DrinkRatingCreateWithoutDrinkInput[] | DrinkRatingUncheckedCreateWithoutDrinkInput[]
    connectOrCreate?: DrinkRatingCreateOrConnectWithoutDrinkInput | DrinkRatingCreateOrConnectWithoutDrinkInput[]
    createMany?: DrinkRatingCreateManyDrinkInputEnvelope
    connect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
  }

  export type DrinkToppingUncheckedCreateNestedManyWithoutDrinkInput = {
    create?: XOR<DrinkToppingCreateWithoutDrinkInput, DrinkToppingUncheckedCreateWithoutDrinkInput> | DrinkToppingCreateWithoutDrinkInput[] | DrinkToppingUncheckedCreateWithoutDrinkInput[]
    connectOrCreate?: DrinkToppingCreateOrConnectWithoutDrinkInput | DrinkToppingCreateOrConnectWithoutDrinkInput[]
    createMany?: DrinkToppingCreateManyDrinkInputEnvelope
    connect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DrinkRatingUpdateManyWithoutDrinkNestedInput = {
    create?: XOR<DrinkRatingCreateWithoutDrinkInput, DrinkRatingUncheckedCreateWithoutDrinkInput> | DrinkRatingCreateWithoutDrinkInput[] | DrinkRatingUncheckedCreateWithoutDrinkInput[]
    connectOrCreate?: DrinkRatingCreateOrConnectWithoutDrinkInput | DrinkRatingCreateOrConnectWithoutDrinkInput[]
    upsert?: DrinkRatingUpsertWithWhereUniqueWithoutDrinkInput | DrinkRatingUpsertWithWhereUniqueWithoutDrinkInput[]
    createMany?: DrinkRatingCreateManyDrinkInputEnvelope
    set?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    disconnect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    delete?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    connect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    update?: DrinkRatingUpdateWithWhereUniqueWithoutDrinkInput | DrinkRatingUpdateWithWhereUniqueWithoutDrinkInput[]
    updateMany?: DrinkRatingUpdateManyWithWhereWithoutDrinkInput | DrinkRatingUpdateManyWithWhereWithoutDrinkInput[]
    deleteMany?: DrinkRatingScalarWhereInput | DrinkRatingScalarWhereInput[]
  }

  export type DrinkToppingUpdateManyWithoutDrinkNestedInput = {
    create?: XOR<DrinkToppingCreateWithoutDrinkInput, DrinkToppingUncheckedCreateWithoutDrinkInput> | DrinkToppingCreateWithoutDrinkInput[] | DrinkToppingUncheckedCreateWithoutDrinkInput[]
    connectOrCreate?: DrinkToppingCreateOrConnectWithoutDrinkInput | DrinkToppingCreateOrConnectWithoutDrinkInput[]
    upsert?: DrinkToppingUpsertWithWhereUniqueWithoutDrinkInput | DrinkToppingUpsertWithWhereUniqueWithoutDrinkInput[]
    createMany?: DrinkToppingCreateManyDrinkInputEnvelope
    set?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    disconnect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    delete?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    connect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    update?: DrinkToppingUpdateWithWhereUniqueWithoutDrinkInput | DrinkToppingUpdateWithWhereUniqueWithoutDrinkInput[]
    updateMany?: DrinkToppingUpdateManyWithWhereWithoutDrinkInput | DrinkToppingUpdateManyWithWhereWithoutDrinkInput[]
    deleteMany?: DrinkToppingScalarWhereInput | DrinkToppingScalarWhereInput[]
  }

  export type ShopUpdateOneRequiredWithoutDrinksNestedInput = {
    create?: XOR<ShopCreateWithoutDrinksInput, ShopUncheckedCreateWithoutDrinksInput>
    connectOrCreate?: ShopCreateOrConnectWithoutDrinksInput
    upsert?: ShopUpsertWithoutDrinksInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutDrinksInput, ShopUpdateWithoutDrinksInput>, ShopUncheckedUpdateWithoutDrinksInput>
  }

  export type DrinkRatingUncheckedUpdateManyWithoutDrinkNestedInput = {
    create?: XOR<DrinkRatingCreateWithoutDrinkInput, DrinkRatingUncheckedCreateWithoutDrinkInput> | DrinkRatingCreateWithoutDrinkInput[] | DrinkRatingUncheckedCreateWithoutDrinkInput[]
    connectOrCreate?: DrinkRatingCreateOrConnectWithoutDrinkInput | DrinkRatingCreateOrConnectWithoutDrinkInput[]
    upsert?: DrinkRatingUpsertWithWhereUniqueWithoutDrinkInput | DrinkRatingUpsertWithWhereUniqueWithoutDrinkInput[]
    createMany?: DrinkRatingCreateManyDrinkInputEnvelope
    set?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    disconnect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    delete?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    connect?: DrinkRatingWhereUniqueInput | DrinkRatingWhereUniqueInput[]
    update?: DrinkRatingUpdateWithWhereUniqueWithoutDrinkInput | DrinkRatingUpdateWithWhereUniqueWithoutDrinkInput[]
    updateMany?: DrinkRatingUpdateManyWithWhereWithoutDrinkInput | DrinkRatingUpdateManyWithWhereWithoutDrinkInput[]
    deleteMany?: DrinkRatingScalarWhereInput | DrinkRatingScalarWhereInput[]
  }

  export type DrinkToppingUncheckedUpdateManyWithoutDrinkNestedInput = {
    create?: XOR<DrinkToppingCreateWithoutDrinkInput, DrinkToppingUncheckedCreateWithoutDrinkInput> | DrinkToppingCreateWithoutDrinkInput[] | DrinkToppingUncheckedCreateWithoutDrinkInput[]
    connectOrCreate?: DrinkToppingCreateOrConnectWithoutDrinkInput | DrinkToppingCreateOrConnectWithoutDrinkInput[]
    upsert?: DrinkToppingUpsertWithWhereUniqueWithoutDrinkInput | DrinkToppingUpsertWithWhereUniqueWithoutDrinkInput[]
    createMany?: DrinkToppingCreateManyDrinkInputEnvelope
    set?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    disconnect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    delete?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    connect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    update?: DrinkToppingUpdateWithWhereUniqueWithoutDrinkInput | DrinkToppingUpdateWithWhereUniqueWithoutDrinkInput[]
    updateMany?: DrinkToppingUpdateManyWithWhereWithoutDrinkInput | DrinkToppingUpdateManyWithWhereWithoutDrinkInput[]
    deleteMany?: DrinkToppingScalarWhereInput | DrinkToppingScalarWhereInput[]
  }

  export type DrinkToppingCreateNestedManyWithoutToppingInput = {
    create?: XOR<DrinkToppingCreateWithoutToppingInput, DrinkToppingUncheckedCreateWithoutToppingInput> | DrinkToppingCreateWithoutToppingInput[] | DrinkToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: DrinkToppingCreateOrConnectWithoutToppingInput | DrinkToppingCreateOrConnectWithoutToppingInput[]
    createMany?: DrinkToppingCreateManyToppingInputEnvelope
    connect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
  }

  export type DrinkToppingUncheckedCreateNestedManyWithoutToppingInput = {
    create?: XOR<DrinkToppingCreateWithoutToppingInput, DrinkToppingUncheckedCreateWithoutToppingInput> | DrinkToppingCreateWithoutToppingInput[] | DrinkToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: DrinkToppingCreateOrConnectWithoutToppingInput | DrinkToppingCreateOrConnectWithoutToppingInput[]
    createMany?: DrinkToppingCreateManyToppingInputEnvelope
    connect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
  }

  export type DrinkToppingUpdateManyWithoutToppingNestedInput = {
    create?: XOR<DrinkToppingCreateWithoutToppingInput, DrinkToppingUncheckedCreateWithoutToppingInput> | DrinkToppingCreateWithoutToppingInput[] | DrinkToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: DrinkToppingCreateOrConnectWithoutToppingInput | DrinkToppingCreateOrConnectWithoutToppingInput[]
    upsert?: DrinkToppingUpsertWithWhereUniqueWithoutToppingInput | DrinkToppingUpsertWithWhereUniqueWithoutToppingInput[]
    createMany?: DrinkToppingCreateManyToppingInputEnvelope
    set?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    disconnect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    delete?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    connect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    update?: DrinkToppingUpdateWithWhereUniqueWithoutToppingInput | DrinkToppingUpdateWithWhereUniqueWithoutToppingInput[]
    updateMany?: DrinkToppingUpdateManyWithWhereWithoutToppingInput | DrinkToppingUpdateManyWithWhereWithoutToppingInput[]
    deleteMany?: DrinkToppingScalarWhereInput | DrinkToppingScalarWhereInput[]
  }

  export type DrinkToppingUncheckedUpdateManyWithoutToppingNestedInput = {
    create?: XOR<DrinkToppingCreateWithoutToppingInput, DrinkToppingUncheckedCreateWithoutToppingInput> | DrinkToppingCreateWithoutToppingInput[] | DrinkToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: DrinkToppingCreateOrConnectWithoutToppingInput | DrinkToppingCreateOrConnectWithoutToppingInput[]
    upsert?: DrinkToppingUpsertWithWhereUniqueWithoutToppingInput | DrinkToppingUpsertWithWhereUniqueWithoutToppingInput[]
    createMany?: DrinkToppingCreateManyToppingInputEnvelope
    set?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    disconnect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    delete?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    connect?: DrinkToppingWhereUniqueInput | DrinkToppingWhereUniqueInput[]
    update?: DrinkToppingUpdateWithWhereUniqueWithoutToppingInput | DrinkToppingUpdateWithWhereUniqueWithoutToppingInput[]
    updateMany?: DrinkToppingUpdateManyWithWhereWithoutToppingInput | DrinkToppingUpdateManyWithWhereWithoutToppingInput[]
    deleteMany?: DrinkToppingScalarWhereInput | DrinkToppingScalarWhereInput[]
  }

  export type DrinkCreateNestedOneWithoutToppingsInput = {
    create?: XOR<DrinkCreateWithoutToppingsInput, DrinkUncheckedCreateWithoutToppingsInput>
    connectOrCreate?: DrinkCreateOrConnectWithoutToppingsInput
    connect?: DrinkWhereUniqueInput
  }

  export type ToppingCreateNestedOneWithoutDrinksInput = {
    create?: XOR<ToppingCreateWithoutDrinksInput, ToppingUncheckedCreateWithoutDrinksInput>
    connectOrCreate?: ToppingCreateOrConnectWithoutDrinksInput
    connect?: ToppingWhereUniqueInput
  }

  export type DrinkUpdateOneRequiredWithoutToppingsNestedInput = {
    create?: XOR<DrinkCreateWithoutToppingsInput, DrinkUncheckedCreateWithoutToppingsInput>
    connectOrCreate?: DrinkCreateOrConnectWithoutToppingsInput
    upsert?: DrinkUpsertWithoutToppingsInput
    connect?: DrinkWhereUniqueInput
    update?: XOR<XOR<DrinkUpdateToOneWithWhereWithoutToppingsInput, DrinkUpdateWithoutToppingsInput>, DrinkUncheckedUpdateWithoutToppingsInput>
  }

  export type ToppingUpdateOneRequiredWithoutDrinksNestedInput = {
    create?: XOR<ToppingCreateWithoutDrinksInput, ToppingUncheckedCreateWithoutDrinksInput>
    connectOrCreate?: ToppingCreateOrConnectWithoutDrinksInput
    upsert?: ToppingUpsertWithoutDrinksInput
    connect?: ToppingWhereUniqueInput
    update?: XOR<XOR<ToppingUpdateToOneWithWhereWithoutDrinksInput, ToppingUpdateWithoutDrinksInput>, ToppingUncheckedUpdateWithoutDrinksInput>
  }

  export type ShopCreateNestedOneWithoutRatingsInput = {
    create?: XOR<ShopCreateWithoutRatingsInput, ShopUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutRatingsInput
    connect?: ShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShopRatingsInput = {
    create?: XOR<UserCreateWithoutShopRatingsInput, UserUncheckedCreateWithoutShopRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShopUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<ShopCreateWithoutRatingsInput, ShopUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutRatingsInput
    upsert?: ShopUpsertWithoutRatingsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutRatingsInput, ShopUpdateWithoutRatingsInput>, ShopUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutShopRatingsNestedInput = {
    create?: XOR<UserCreateWithoutShopRatingsInput, UserUncheckedCreateWithoutShopRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopRatingsInput
    upsert?: UserUpsertWithoutShopRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShopRatingsInput, UserUpdateWithoutShopRatingsInput>, UserUncheckedUpdateWithoutShopRatingsInput>
  }

  export type DrinkCreateNestedOneWithoutRatingsInput = {
    create?: XOR<DrinkCreateWithoutRatingsInput, DrinkUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: DrinkCreateOrConnectWithoutRatingsInput
    connect?: DrinkWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDrinkRatingsInput = {
    create?: XOR<UserCreateWithoutDrinkRatingsInput, UserUncheckedCreateWithoutDrinkRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrinkRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type DrinkUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<DrinkCreateWithoutRatingsInput, DrinkUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: DrinkCreateOrConnectWithoutRatingsInput
    upsert?: DrinkUpsertWithoutRatingsInput
    connect?: DrinkWhereUniqueInput
    update?: XOR<XOR<DrinkUpdateToOneWithWhereWithoutRatingsInput, DrinkUpdateWithoutRatingsInput>, DrinkUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutDrinkRatingsNestedInput = {
    create?: XOR<UserCreateWithoutDrinkRatingsInput, UserUncheckedCreateWithoutDrinkRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrinkRatingsInput
    upsert?: UserUpsertWithoutDrinkRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDrinkRatingsInput, UserUpdateWithoutDrinkRatingsInput>, UserUncheckedUpdateWithoutDrinkRatingsInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type DrinkRatingCreateWithoutUserInput = {
    id?: string
    rating: number
    review?: string | null
    sweetnessLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drink: DrinkCreateNestedOneWithoutRatingsInput
  }

  export type DrinkRatingUncheckedCreateWithoutUserInput = {
    id?: string
    drinkId: string
    rating: number
    review?: string | null
    sweetnessLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkRatingCreateOrConnectWithoutUserInput = {
    where: DrinkRatingWhereUniqueInput
    create: XOR<DrinkRatingCreateWithoutUserInput, DrinkRatingUncheckedCreateWithoutUserInput>
  }

  export type DrinkRatingCreateManyUserInputEnvelope = {
    data: DrinkRatingCreateManyUserInput | DrinkRatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShopRatingCreateWithoutUserInput = {
    id?: string
    rating: number
    review?: string | null
    serviceRating?: number | null
    ambianceRating?: number | null
    valueRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutRatingsInput
  }

  export type ShopRatingUncheckedCreateWithoutUserInput = {
    id?: string
    shopId: string
    rating: number
    review?: string | null
    serviceRating?: number | null
    ambianceRating?: number | null
    valueRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopRatingCreateOrConnectWithoutUserInput = {
    where: ShopRatingWhereUniqueInput
    create: XOR<ShopRatingCreateWithoutUserInput, ShopRatingUncheckedCreateWithoutUserInput>
  }

  export type ShopRatingCreateManyUserInputEnvelope = {
    data: ShopRatingCreateManyUserInput | ShopRatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DrinkRatingUpsertWithWhereUniqueWithoutUserInput = {
    where: DrinkRatingWhereUniqueInput
    update: XOR<DrinkRatingUpdateWithoutUserInput, DrinkRatingUncheckedUpdateWithoutUserInput>
    create: XOR<DrinkRatingCreateWithoutUserInput, DrinkRatingUncheckedCreateWithoutUserInput>
  }

  export type DrinkRatingUpdateWithWhereUniqueWithoutUserInput = {
    where: DrinkRatingWhereUniqueInput
    data: XOR<DrinkRatingUpdateWithoutUserInput, DrinkRatingUncheckedUpdateWithoutUserInput>
  }

  export type DrinkRatingUpdateManyWithWhereWithoutUserInput = {
    where: DrinkRatingScalarWhereInput
    data: XOR<DrinkRatingUpdateManyMutationInput, DrinkRatingUncheckedUpdateManyWithoutUserInput>
  }

  export type DrinkRatingScalarWhereInput = {
    AND?: DrinkRatingScalarWhereInput | DrinkRatingScalarWhereInput[]
    OR?: DrinkRatingScalarWhereInput[]
    NOT?: DrinkRatingScalarWhereInput | DrinkRatingScalarWhereInput[]
    id?: StringFilter<"DrinkRating"> | string
    userId?: StringFilter<"DrinkRating"> | string
    drinkId?: StringFilter<"DrinkRating"> | string
    rating?: IntFilter<"DrinkRating"> | number
    review?: StringNullableFilter<"DrinkRating"> | string | null
    sweetnessLevel?: IntNullableFilter<"DrinkRating"> | number | null
    createdAt?: DateTimeFilter<"DrinkRating"> | Date | string
    updatedAt?: DateTimeFilter<"DrinkRating"> | Date | string
  }

  export type ShopRatingUpsertWithWhereUniqueWithoutUserInput = {
    where: ShopRatingWhereUniqueInput
    update: XOR<ShopRatingUpdateWithoutUserInput, ShopRatingUncheckedUpdateWithoutUserInput>
    create: XOR<ShopRatingCreateWithoutUserInput, ShopRatingUncheckedCreateWithoutUserInput>
  }

  export type ShopRatingUpdateWithWhereUniqueWithoutUserInput = {
    where: ShopRatingWhereUniqueInput
    data: XOR<ShopRatingUpdateWithoutUserInput, ShopRatingUncheckedUpdateWithoutUserInput>
  }

  export type ShopRatingUpdateManyWithWhereWithoutUserInput = {
    where: ShopRatingScalarWhereInput
    data: XOR<ShopRatingUpdateManyMutationInput, ShopRatingUncheckedUpdateManyWithoutUserInput>
  }

  export type ShopRatingScalarWhereInput = {
    AND?: ShopRatingScalarWhereInput | ShopRatingScalarWhereInput[]
    OR?: ShopRatingScalarWhereInput[]
    NOT?: ShopRatingScalarWhereInput | ShopRatingScalarWhereInput[]
    id?: StringFilter<"ShopRating"> | string
    userId?: StringFilter<"ShopRating"> | string
    shopId?: StringFilter<"ShopRating"> | string
    rating?: IntFilter<"ShopRating"> | number
    review?: StringNullableFilter<"ShopRating"> | string | null
    serviceRating?: IntNullableFilter<"ShopRating"> | number | null
    ambianceRating?: IntNullableFilter<"ShopRating"> | number | null
    valueRating?: IntNullableFilter<"ShopRating"> | number | null
    createdAt?: DateTimeFilter<"ShopRating"> | Date | string
    updatedAt?: DateTimeFilter<"ShopRating"> | Date | string
  }

  export type DrinkCreateWithoutShopInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    ratings?: DrinkRatingCreateNestedManyWithoutDrinkInput
    toppings?: DrinkToppingCreateNestedManyWithoutDrinkInput
  }

  export type DrinkUncheckedCreateWithoutShopInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    ratings?: DrinkRatingUncheckedCreateNestedManyWithoutDrinkInput
    toppings?: DrinkToppingUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinkCreateOrConnectWithoutShopInput = {
    where: DrinkWhereUniqueInput
    create: XOR<DrinkCreateWithoutShopInput, DrinkUncheckedCreateWithoutShopInput>
  }

  export type DrinkCreateManyShopInputEnvelope = {
    data: DrinkCreateManyShopInput | DrinkCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ShopRatingCreateWithoutShopInput = {
    id?: string
    rating: number
    review?: string | null
    serviceRating?: number | null
    ambianceRating?: number | null
    valueRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutShopRatingsInput
  }

  export type ShopRatingUncheckedCreateWithoutShopInput = {
    id?: string
    userId: string
    rating: number
    review?: string | null
    serviceRating?: number | null
    ambianceRating?: number | null
    valueRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopRatingCreateOrConnectWithoutShopInput = {
    where: ShopRatingWhereUniqueInput
    create: XOR<ShopRatingCreateWithoutShopInput, ShopRatingUncheckedCreateWithoutShopInput>
  }

  export type ShopRatingCreateManyShopInputEnvelope = {
    data: ShopRatingCreateManyShopInput | ShopRatingCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type DrinkUpsertWithWhereUniqueWithoutShopInput = {
    where: DrinkWhereUniqueInput
    update: XOR<DrinkUpdateWithoutShopInput, DrinkUncheckedUpdateWithoutShopInput>
    create: XOR<DrinkCreateWithoutShopInput, DrinkUncheckedCreateWithoutShopInput>
  }

  export type DrinkUpdateWithWhereUniqueWithoutShopInput = {
    where: DrinkWhereUniqueInput
    data: XOR<DrinkUpdateWithoutShopInput, DrinkUncheckedUpdateWithoutShopInput>
  }

  export type DrinkUpdateManyWithWhereWithoutShopInput = {
    where: DrinkScalarWhereInput
    data: XOR<DrinkUpdateManyMutationInput, DrinkUncheckedUpdateManyWithoutShopInput>
  }

  export type DrinkScalarWhereInput = {
    AND?: DrinkScalarWhereInput | DrinkScalarWhereInput[]
    OR?: DrinkScalarWhereInput[]
    NOT?: DrinkScalarWhereInput | DrinkScalarWhereInput[]
    id?: StringFilter<"Drink"> | string
    shopId?: StringFilter<"Drink"> | string
    name?: StringFilter<"Drink"> | string
    description?: StringNullableFilter<"Drink"> | string | null
    price?: FloatNullableFilter<"Drink"> | number | null
    category?: StringNullableFilter<"Drink"> | string | null
    imageUrl?: StringNullableFilter<"Drink"> | string | null
    createdAt?: DateTimeFilter<"Drink"> | Date | string
  }

  export type ShopRatingUpsertWithWhereUniqueWithoutShopInput = {
    where: ShopRatingWhereUniqueInput
    update: XOR<ShopRatingUpdateWithoutShopInput, ShopRatingUncheckedUpdateWithoutShopInput>
    create: XOR<ShopRatingCreateWithoutShopInput, ShopRatingUncheckedCreateWithoutShopInput>
  }

  export type ShopRatingUpdateWithWhereUniqueWithoutShopInput = {
    where: ShopRatingWhereUniqueInput
    data: XOR<ShopRatingUpdateWithoutShopInput, ShopRatingUncheckedUpdateWithoutShopInput>
  }

  export type ShopRatingUpdateManyWithWhereWithoutShopInput = {
    where: ShopRatingScalarWhereInput
    data: XOR<ShopRatingUpdateManyMutationInput, ShopRatingUncheckedUpdateManyWithoutShopInput>
  }

  export type DrinkRatingCreateWithoutDrinkInput = {
    id?: string
    rating: number
    review?: string | null
    sweetnessLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDrinkRatingsInput
  }

  export type DrinkRatingUncheckedCreateWithoutDrinkInput = {
    id?: string
    userId: string
    rating: number
    review?: string | null
    sweetnessLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkRatingCreateOrConnectWithoutDrinkInput = {
    where: DrinkRatingWhereUniqueInput
    create: XOR<DrinkRatingCreateWithoutDrinkInput, DrinkRatingUncheckedCreateWithoutDrinkInput>
  }

  export type DrinkRatingCreateManyDrinkInputEnvelope = {
    data: DrinkRatingCreateManyDrinkInput | DrinkRatingCreateManyDrinkInput[]
    skipDuplicates?: boolean
  }

  export type DrinkToppingCreateWithoutDrinkInput = {
    topping: ToppingCreateNestedOneWithoutDrinksInput
  }

  export type DrinkToppingUncheckedCreateWithoutDrinkInput = {
    toppingId: string
  }

  export type DrinkToppingCreateOrConnectWithoutDrinkInput = {
    where: DrinkToppingWhereUniqueInput
    create: XOR<DrinkToppingCreateWithoutDrinkInput, DrinkToppingUncheckedCreateWithoutDrinkInput>
  }

  export type DrinkToppingCreateManyDrinkInputEnvelope = {
    data: DrinkToppingCreateManyDrinkInput | DrinkToppingCreateManyDrinkInput[]
    skipDuplicates?: boolean
  }

  export type ShopCreateWithoutDrinksInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    website?: string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: ShopRatingCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutDrinksInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    website?: string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: ShopRatingUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutDrinksInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutDrinksInput, ShopUncheckedCreateWithoutDrinksInput>
  }

  export type DrinkRatingUpsertWithWhereUniqueWithoutDrinkInput = {
    where: DrinkRatingWhereUniqueInput
    update: XOR<DrinkRatingUpdateWithoutDrinkInput, DrinkRatingUncheckedUpdateWithoutDrinkInput>
    create: XOR<DrinkRatingCreateWithoutDrinkInput, DrinkRatingUncheckedCreateWithoutDrinkInput>
  }

  export type DrinkRatingUpdateWithWhereUniqueWithoutDrinkInput = {
    where: DrinkRatingWhereUniqueInput
    data: XOR<DrinkRatingUpdateWithoutDrinkInput, DrinkRatingUncheckedUpdateWithoutDrinkInput>
  }

  export type DrinkRatingUpdateManyWithWhereWithoutDrinkInput = {
    where: DrinkRatingScalarWhereInput
    data: XOR<DrinkRatingUpdateManyMutationInput, DrinkRatingUncheckedUpdateManyWithoutDrinkInput>
  }

  export type DrinkToppingUpsertWithWhereUniqueWithoutDrinkInput = {
    where: DrinkToppingWhereUniqueInput
    update: XOR<DrinkToppingUpdateWithoutDrinkInput, DrinkToppingUncheckedUpdateWithoutDrinkInput>
    create: XOR<DrinkToppingCreateWithoutDrinkInput, DrinkToppingUncheckedCreateWithoutDrinkInput>
  }

  export type DrinkToppingUpdateWithWhereUniqueWithoutDrinkInput = {
    where: DrinkToppingWhereUniqueInput
    data: XOR<DrinkToppingUpdateWithoutDrinkInput, DrinkToppingUncheckedUpdateWithoutDrinkInput>
  }

  export type DrinkToppingUpdateManyWithWhereWithoutDrinkInput = {
    where: DrinkToppingScalarWhereInput
    data: XOR<DrinkToppingUpdateManyMutationInput, DrinkToppingUncheckedUpdateManyWithoutDrinkInput>
  }

  export type DrinkToppingScalarWhereInput = {
    AND?: DrinkToppingScalarWhereInput | DrinkToppingScalarWhereInput[]
    OR?: DrinkToppingScalarWhereInput[]
    NOT?: DrinkToppingScalarWhereInput | DrinkToppingScalarWhereInput[]
    drinkId?: StringFilter<"DrinkTopping"> | string
    toppingId?: StringFilter<"DrinkTopping"> | string
  }

  export type ShopUpsertWithoutDrinksInput = {
    update: XOR<ShopUpdateWithoutDrinksInput, ShopUncheckedUpdateWithoutDrinksInput>
    create: XOR<ShopCreateWithoutDrinksInput, ShopUncheckedCreateWithoutDrinksInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutDrinksInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutDrinksInput, ShopUncheckedUpdateWithoutDrinksInput>
  }

  export type ShopUpdateWithoutDrinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: ShopRatingUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutDrinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: ShopRatingUncheckedUpdateManyWithoutShopNestedInput
  }

  export type DrinkToppingCreateWithoutToppingInput = {
    drink: DrinkCreateNestedOneWithoutToppingsInput
  }

  export type DrinkToppingUncheckedCreateWithoutToppingInput = {
    drinkId: string
  }

  export type DrinkToppingCreateOrConnectWithoutToppingInput = {
    where: DrinkToppingWhereUniqueInput
    create: XOR<DrinkToppingCreateWithoutToppingInput, DrinkToppingUncheckedCreateWithoutToppingInput>
  }

  export type DrinkToppingCreateManyToppingInputEnvelope = {
    data: DrinkToppingCreateManyToppingInput | DrinkToppingCreateManyToppingInput[]
    skipDuplicates?: boolean
  }

  export type DrinkToppingUpsertWithWhereUniqueWithoutToppingInput = {
    where: DrinkToppingWhereUniqueInput
    update: XOR<DrinkToppingUpdateWithoutToppingInput, DrinkToppingUncheckedUpdateWithoutToppingInput>
    create: XOR<DrinkToppingCreateWithoutToppingInput, DrinkToppingUncheckedCreateWithoutToppingInput>
  }

  export type DrinkToppingUpdateWithWhereUniqueWithoutToppingInput = {
    where: DrinkToppingWhereUniqueInput
    data: XOR<DrinkToppingUpdateWithoutToppingInput, DrinkToppingUncheckedUpdateWithoutToppingInput>
  }

  export type DrinkToppingUpdateManyWithWhereWithoutToppingInput = {
    where: DrinkToppingScalarWhereInput
    data: XOR<DrinkToppingUpdateManyMutationInput, DrinkToppingUncheckedUpdateManyWithoutToppingInput>
  }

  export type DrinkCreateWithoutToppingsInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    ratings?: DrinkRatingCreateNestedManyWithoutDrinkInput
    shop: ShopCreateNestedOneWithoutDrinksInput
  }

  export type DrinkUncheckedCreateWithoutToppingsInput = {
    id?: string
    shopId: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    ratings?: DrinkRatingUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinkCreateOrConnectWithoutToppingsInput = {
    where: DrinkWhereUniqueInput
    create: XOR<DrinkCreateWithoutToppingsInput, DrinkUncheckedCreateWithoutToppingsInput>
  }

  export type ToppingCreateWithoutDrinksInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type ToppingUncheckedCreateWithoutDrinksInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type ToppingCreateOrConnectWithoutDrinksInput = {
    where: ToppingWhereUniqueInput
    create: XOR<ToppingCreateWithoutDrinksInput, ToppingUncheckedCreateWithoutDrinksInput>
  }

  export type DrinkUpsertWithoutToppingsInput = {
    update: XOR<DrinkUpdateWithoutToppingsInput, DrinkUncheckedUpdateWithoutToppingsInput>
    create: XOR<DrinkCreateWithoutToppingsInput, DrinkUncheckedCreateWithoutToppingsInput>
    where?: DrinkWhereInput
  }

  export type DrinkUpdateToOneWithWhereWithoutToppingsInput = {
    where?: DrinkWhereInput
    data: XOR<DrinkUpdateWithoutToppingsInput, DrinkUncheckedUpdateWithoutToppingsInput>
  }

  export type DrinkUpdateWithoutToppingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: DrinkRatingUpdateManyWithoutDrinkNestedInput
    shop?: ShopUpdateOneRequiredWithoutDrinksNestedInput
  }

  export type DrinkUncheckedUpdateWithoutToppingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: DrinkRatingUncheckedUpdateManyWithoutDrinkNestedInput
  }

  export type ToppingUpsertWithoutDrinksInput = {
    update: XOR<ToppingUpdateWithoutDrinksInput, ToppingUncheckedUpdateWithoutDrinksInput>
    create: XOR<ToppingCreateWithoutDrinksInput, ToppingUncheckedCreateWithoutDrinksInput>
    where?: ToppingWhereInput
  }

  export type ToppingUpdateToOneWithWhereWithoutDrinksInput = {
    where?: ToppingWhereInput
    data: XOR<ToppingUpdateWithoutDrinksInput, ToppingUncheckedUpdateWithoutDrinksInput>
  }

  export type ToppingUpdateWithoutDrinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ToppingUncheckedUpdateWithoutDrinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopCreateWithoutRatingsInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    website?: string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drinks?: DrinkCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutRatingsInput = {
    id?: string
    name: string
    address: string
    city: string
    state: string
    zipCode?: string | null
    latitude: number
    longitude: number
    phone?: string | null
    website?: string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drinks?: DrinkUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutRatingsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutRatingsInput, ShopUncheckedCreateWithoutRatingsInput>
  }

  export type UserCreateWithoutShopRatingsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drinkRatings?: DrinkRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShopRatingsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    drinkRatings?: DrinkRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShopRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopRatingsInput, UserUncheckedCreateWithoutShopRatingsInput>
  }

  export type ShopUpsertWithoutRatingsInput = {
    update: XOR<ShopUpdateWithoutRatingsInput, ShopUncheckedUpdateWithoutRatingsInput>
    create: XOR<ShopCreateWithoutRatingsInput, ShopUncheckedCreateWithoutRatingsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutRatingsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutRatingsInput, ShopUncheckedUpdateWithoutRatingsInput>
  }

  export type ShopUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drinks?: DrinkUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableJsonNullValueInput | InputJsonValue
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drinks?: DrinkUncheckedUpdateManyWithoutShopNestedInput
  }

  export type UserUpsertWithoutShopRatingsInput = {
    update: XOR<UserUpdateWithoutShopRatingsInput, UserUncheckedUpdateWithoutShopRatingsInput>
    create: XOR<UserCreateWithoutShopRatingsInput, UserUncheckedCreateWithoutShopRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShopRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShopRatingsInput, UserUncheckedUpdateWithoutShopRatingsInput>
  }

  export type UserUpdateWithoutShopRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drinkRatings?: DrinkRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShopRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drinkRatings?: DrinkRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DrinkCreateWithoutRatingsInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    toppings?: DrinkToppingCreateNestedManyWithoutDrinkInput
    shop: ShopCreateNestedOneWithoutDrinksInput
  }

  export type DrinkUncheckedCreateWithoutRatingsInput = {
    id?: string
    shopId: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    toppings?: DrinkToppingUncheckedCreateNestedManyWithoutDrinkInput
  }

  export type DrinkCreateOrConnectWithoutRatingsInput = {
    where: DrinkWhereUniqueInput
    create: XOR<DrinkCreateWithoutRatingsInput, DrinkUncheckedCreateWithoutRatingsInput>
  }

  export type UserCreateWithoutDrinkRatingsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shopRatings?: ShopRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDrinkRatingsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shopRatings?: ShopRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDrinkRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDrinkRatingsInput, UserUncheckedCreateWithoutDrinkRatingsInput>
  }

  export type DrinkUpsertWithoutRatingsInput = {
    update: XOR<DrinkUpdateWithoutRatingsInput, DrinkUncheckedUpdateWithoutRatingsInput>
    create: XOR<DrinkCreateWithoutRatingsInput, DrinkUncheckedCreateWithoutRatingsInput>
    where?: DrinkWhereInput
  }

  export type DrinkUpdateToOneWithWhereWithoutRatingsInput = {
    where?: DrinkWhereInput
    data: XOR<DrinkUpdateWithoutRatingsInput, DrinkUncheckedUpdateWithoutRatingsInput>
  }

  export type DrinkUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toppings?: DrinkToppingUpdateManyWithoutDrinkNestedInput
    shop?: ShopUpdateOneRequiredWithoutDrinksNestedInput
  }

  export type DrinkUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toppings?: DrinkToppingUncheckedUpdateManyWithoutDrinkNestedInput
  }

  export type UserUpsertWithoutDrinkRatingsInput = {
    update: XOR<UserUpdateWithoutDrinkRatingsInput, UserUncheckedUpdateWithoutDrinkRatingsInput>
    create: XOR<UserCreateWithoutDrinkRatingsInput, UserUncheckedCreateWithoutDrinkRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDrinkRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDrinkRatingsInput, UserUncheckedUpdateWithoutDrinkRatingsInput>
  }

  export type UserUpdateWithoutDrinkRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopRatings?: ShopRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDrinkRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopRatings?: ShopRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DrinkRatingCreateManyUserInput = {
    id?: string
    drinkId: string
    rating: number
    review?: string | null
    sweetnessLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopRatingCreateManyUserInput = {
    id?: string
    shopId: string
    rating: number
    review?: string | null
    serviceRating?: number | null
    ambianceRating?: number | null
    valueRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkRatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drink?: DrinkUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type DrinkRatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    drinkId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkRatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    drinkId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopRatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type ShopRatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopRatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkCreateManyShopInput = {
    id?: string
    name: string
    description?: string | null
    price?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ShopRatingCreateManyShopInput = {
    id?: string
    userId: string
    rating: number
    review?: string | null
    serviceRating?: number | null
    ambianceRating?: number | null
    valueRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: DrinkRatingUpdateManyWithoutDrinkNestedInput
    toppings?: DrinkToppingUpdateManyWithoutDrinkNestedInput
  }

  export type DrinkUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: DrinkRatingUncheckedUpdateManyWithoutDrinkNestedInput
    toppings?: DrinkToppingUncheckedUpdateManyWithoutDrinkNestedInput
  }

  export type DrinkUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopRatingUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShopRatingsNestedInput
  }

  export type ShopRatingUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopRatingUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    serviceRating?: NullableIntFieldUpdateOperationsInput | number | null
    ambianceRating?: NullableIntFieldUpdateOperationsInput | number | null
    valueRating?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkRatingCreateManyDrinkInput = {
    id?: string
    userId: string
    rating: number
    review?: string | null
    sweetnessLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrinkToppingCreateManyDrinkInput = {
    toppingId: string
  }

  export type DrinkRatingUpdateWithoutDrinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDrinkRatingsNestedInput
  }

  export type DrinkRatingUncheckedUpdateWithoutDrinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkRatingUncheckedUpdateManyWithoutDrinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    sweetnessLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrinkToppingUpdateWithoutDrinkInput = {
    topping?: ToppingUpdateOneRequiredWithoutDrinksNestedInput
  }

  export type DrinkToppingUncheckedUpdateWithoutDrinkInput = {
    toppingId?: StringFieldUpdateOperationsInput | string
  }

  export type DrinkToppingUncheckedUpdateManyWithoutDrinkInput = {
    toppingId?: StringFieldUpdateOperationsInput | string
  }

  export type DrinkToppingCreateManyToppingInput = {
    drinkId: string
  }

  export type DrinkToppingUpdateWithoutToppingInput = {
    drink?: DrinkUpdateOneRequiredWithoutToppingsNestedInput
  }

  export type DrinkToppingUncheckedUpdateWithoutToppingInput = {
    drinkId?: StringFieldUpdateOperationsInput | string
  }

  export type DrinkToppingUncheckedUpdateManyWithoutToppingInput = {
    drinkId?: StringFieldUpdateOperationsInput | string
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