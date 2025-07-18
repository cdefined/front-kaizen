// ============================================
// 1. TYPE ALIASES
// ============================================

// Basic type aliases
type CharacterName = string;
type Age = number;

// Union type
type WeaponUnion = "鉈" | "バット" | "注射器" | "包丁";

// Function type
type CurseFunction = (target: string) => boolean;

// Array types
type CharacterList = string[];
type SuspicionLevels = number[];

// Tuple type
type Coordinate = [number, number];

// Object type alias
type ClubMember = {
  name: string;
  age: number;
  weapon?: string; // Optional property
  curse: boolean;
};

// Using type alias
let rena: ClubMember = {
  name: "竜宮レナ",
  age: 16,
  weapon: "鉈",
  curse: true,
};

// Type extension with intersection
type Person = {
  name: string;
  age: number;
};

type ExtendedClubMember = Person & {
  weapon?: string;
  clubRole: string;
};

let mion: ExtendedClubMember = {
  name: "園崎魅音",
  age: 16,
  weapon: "エアガン",
  clubRole: "部長",
};

// ============================================
// 2. INTERFACES
// ============================================

// Basic interface
interface Character {
  name: string;
  age: number;
  isAlive: boolean;
  weapon?: string;
}

let keiichi: Character = {
  name: "前原圭一",
  age: 16,
  isAlive: true,
};

// Interface extension
interface PersonInterface {
  name: string;
  age: number;
}

interface ClubMemberInterface extends PersonInterface {
  weapon?: string;
  clubRole: string;
}

interface VillageElder extends PersonInterface {
  position: string;
  knowsSecret: boolean;
}

let mionInterface: ClubMemberInterface = {
  name: "園崎魅音",
  age: 16,
  weapon: "エアガン",
  clubRole: "部長",
};

let oryou: VillageElder = {
  name: "園崎お魎",
  age: 78,
  position: "当主",
  knowsSecret: true,
};

// Declaration merging (interface only)
interface ClubMemberMerge {
  name: string;
  age: number;
}

interface ClubMemberMerge {
  clubRole: string;
}

// ============================================
// 3. ENUMS
// ============================================

// Numeric enum with explicit values
enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

let response = HttpStatus.OK;
console.log(response); // 200
console.log(HttpStatus[200]); // "OK"

// Auto-assigned numeric enum
enum StandType {
  STAR_PLATINUM, // 0
  THE_WORLD, // 1
  CRAZY_DIAMOND, // 2
}

let jotaro = StandType.STAR_PLATINUM;
console.log(jotaro); // 0
console.log(StandType[0]); // "STAR_PLATINUM"

// String enum
enum LogLevel {
  ERROR = "error",
  WARN = "warn",
  INFO = "info",
}

function log(level: LogLevel, message: string) {
  console.log(`[${level}] ${message}`);
}

log(LogLevel.ERROR, "something broke");

// Computed enum (bit flags)
enum Permission {
  READ = 1, // 0001
  WRITE = 2, // 0010
  EXECUTE = 4, // 0100
  ALL = READ | WRITE | EXECUTE, // 0111 = 7
}

function hasPermission(user: number, perm: Permission) {
  return (user & perm) === perm;
}

// Const assertion alternative
const Color = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
} as const;

type ColorType = (typeof Color)[keyof typeof Color];

// ============================================
// 4. NULL/UNDEFINED HANDLING
// ============================================

// Null vs undefined examples
let userName; // undefined
console.log(userName); // undefined

function processUser(name?: string) {
  console.log(name); // undefined if not provided
}

// API response with null
interface Profile {
  name: string;
  avatar: string | null; // Intentionally allows null
}

// Database query returning null
const findUser = (id: number): Character | null => {
  const users: Character[] = [keiichi];
  return users.find((u) => u.name === "前原圭一") || null;
};

// Optional chaining
interface Stand {
  name: string;
  power?: number;
  user?: {
    name: string;
    age?: number;
  };
}

interface Weapon {
  name: string;
  damage: number;
}

const theWorld: Stand = { name: "The World" };

// Safe property access
const userName2 = theWorld.user?.name;
const userAge = theWorld.user?.age;

// Nullish coalescing
const config = {
  timeout: undefined as number | undefined,
  retries: null as number | null,
  endpoint: "" as string,
};

const finalConfig = {
  timeout: config.timeout ?? 5000,
  retries: config.retries ?? 3,
  endpoint: config.endpoint || "https://api.example.com", // Using || for empty string
};

// Type guard for null checking
function processStand(stand: Stand | null) {
  if (stand === null) {
    console.log("standが見つかりません");
    return;
  }

  // stand is now Stand type
  console.log(`stand名: ${stand.name}`);

  if (stand.user) {
    console.log(`user名: ${stand.user.name}`);
  }
}

// Non-null assertion (dangerous)
function getStandPower(stand?: Stand) {
  // Dangerous: stand might be undefined
  return stand!.name.toUpperCase();
}

// Safer version
function getStandPowerSafe(stand?: Stand) {
  if (!stand) {
    throw new Error("standが必要です");
  }
  return stand.name.toUpperCase();
}

// ============================================
// 5. TYPE ASSERTIONS
// ============================================

// Type assertion examples
const userInput = document.getElementById("name") as HTMLInputElement;
// Alternative syntax (not usable in JSX)
// const userInput2 = <HTMLInputElement>document.getElementById("name");

// API response type assertion
interface User {
  name: string;
  id: number;
}

async function fetchUser(): Promise<User> {
  const apiResponse = await fetch("/api/user");
  const userData = (await apiResponse.json()) as User;
  return userData;
}

// Type guard vs type assertion
function isUser(obj: any): obj is User {
  return obj && typeof obj.name === "string" && typeof obj.id === "number";
}

function processApiData(data: unknown) {
  // Safe: type guard
  if (isUser(data)) {
    console.log(data.name); // Safe
  }

  // Dangerous: type assertion
  const userData = data as User;
  console.log(userData.name); // Might crash at runtime
}

// Const assertions
const stands = ["za warudo", "killer queen"]; // string[]
const standsConst = ["za warudo", "killer queen"] as const;
// readonly ["za warudo", "killer queen"]

const configConst = {
  timeout: 5000,
  retries: 3,
} as const;
// { readonly timeout: 5000; readonly retries: 3 }

// Quiz answer demonstration
const user = {
  score: 0,
  avatar: "", // Empty string - user deleted avatar
  backup: null as string | null,
};

const result1 = user.score || 100; // 100 (0 is falsy)
const result2 = user.score ?? 100; // 0 (0 is not null/undefined)
const result3 = user.avatar || "default.jpg"; // "default.jpg" ("" is falsy)
const result4 = user.avatar ?? "default.jpg"; // "" ("" is not null/undefined)
const result5 = user.backup || "fallback.jpg"; // "fallback.jpg" (null is falsy)
const result6 = user.backup ?? "fallback.jpg"; // "fallback.jpg" (null triggers ??)

console.log(result1, result2, result3, result4, result5, result6);
// Output: 100, 0, "default.jpg", "", "fallback.jpg", "fallback.jpg"

// Stand ability type (union type - only possible with type)
type StandAbility = "the-world" | "star-platinum" | "crazy-diamond";

// Stand information (object - can be type or interface)
interface StandInfo {
  name: string;
  user: string;
  power: number;
}

// Extension patterns
type StandUser1 = StandInfo & {
  // type uses &
  user: string;
};

interface StandUser2 extends StandInfo {
  // interface uses extends
  user: string;
}

// ============================================
// 6. CLASSES & ACCESS MODIFIERS
// ============================================

// Prototype inheritance example
const animal = {
  speak: function () {
    return "何か音を出す";
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  return "わんわん！";
};

console.log(dog.speak()); // "何か音を出す" ← animalから継承
console.log(dog.bark()); // "わんわん！" ← 自分のメソッド

// ES6 class vs prototype function
class DogClass {
  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return "わんわん";
  }
}

function DogFunction(name: string) {
  this.name = name;
}

DogFunction.prototype.bark = function () {
  return "わんわん";
};

// Basic class definition
class StandClass {
  name: string; // クラスプロパティ

  constructor(name: string, public power: number) {
    // public引数はプロパティの自動宣言＋初期化
    this.name = name; // コンストラクタでプロパティを初期化
  }

  attack(): string {
    // クラスメソッド
    return `${this.name}で攻撃！パワー: ${this.power}`;
  }
}

const starPlatinum = new StandClass("スタープラチナ", 100);
console.log(starPlatinum.attack()); // "スタープラチナで攻撃！パワー: 100"
console.log(starPlatinum.power); // 100 (public引数で自動生成)

// Access modifiers
class CharacterClass {
  public name: string; // どこからでもアクセス可能
  private hp: number; // クラス内のみ
  protected level: number; // 継承先でも使用可能

  constructor(name: string, hp: number, level: number) {
    this.name = name;
    this.hp = hp;
    this.level = level;
  }

  private heal(): void {
    this.hp += 20;
  }
}

// Inheritance and override
class Villain extends CharacterClass {
  private evilPlan: string;

  constructor(name: string, hp: number, level: number, plan: string) {
    super(name, hp, level); // 親クラスのコンストラクタを呼び出し
    this.evilPlan = plan;
  }

  public getStatus(): string {
    // メソッドオーバーライド
    return `${this.name}, 計画: ${this.evilPlan}`;
  }

  protected useSpecialAbility(): void {
    console.log(`${this.name}が特殊能力を使用！レベル${this.level}の力で！`);
  }
}

const dio = new Villain("ディオ", 200, 50, "世界征服");
console.log(dio.getStatus()); // "ディオ, 計画: 世界征服"

// readonly & static
class ClubMemberClass {
  readonly membershipId: string;
  private static memberCount: number = 0;
  static readonly clubName: string = "雛見沢分校";

  constructor(public name: string, membershipId: string) {
    this.membershipId = membershipId;
    ClubMemberClass.memberCount++; // private staticもクラス内からアクセス可能
  }

  static getClubInfo(): string {
    return `${ClubMemberClass.clubName}: ${ClubMemberClass.memberCount}人`; // staticプロパティはクラス名でアクセス
  }
}

const keiichiMember = new ClubMemberClass("前原圭一", "001");
const renaMember = new ClubMemberClass("竜宮レナ", "002");
console.log(ClubMemberClass.getClubInfo()); // "雛見沢分校: 2人"

// getter/setter
class Pokemon {
  private _hp: number;

  constructor(public name: string, private _maxHp: number) {
    this._hp = _maxHp;
  }

  get hp(): number {
    return this._hp;
  }

  set hp(value: number) {
    this._hp = Math.max(0, Math.min(value, this._maxHp));
  }

  get healthPercentage(): number {
    return Math.round((this._hp / this._maxHp) * 100);
  }
}

const pikachu = new Pokemon("ピカチュウ", 100);
pikachu.hp = 150; // setter (maxHpに制限される)
console.log(pikachu.hp); // 100
console.log(pikachu.healthPercentage); // 100 (read-only)

// Abstract class
abstract class AbstractWeapon {
  constructor(public name: string, public damage: number) {}

  abstract attack(): string; // 子クラスで実装必須

  public getInfo(): string {
    // 共通の実装
    return `${this.name} (威力: ${this.damage})`;
  }
}

class Sword extends AbstractWeapon {
  attack(): string {
    return `${this.name}で斬りつけた！${this.damage}のダメージ！`;
  }
}

const sword = new Sword("エクスカリバー", 50);
console.log(sword.attack()); // "エクスカリバーで斬りつけた！50のダメージ！"

// ============================================
// 7. MODULES
// ============================================

// Export examples (stands.ts)
export class StandModule {
  constructor(public name: string, public power: number) {}
}

export const STAND_TYPES = {
  CLOSE_RANGE: "close",
  LONG_RANGE: "long",
} as const;

// Default export
export default class StandUserModule {
  constructor(public name: string, public stand: StandModule) {}
}

// Import examples (main.ts)
// import StandUser, { Stand, STAND_TYPES } from './stands';
// import { Stand as StandClass } from './stands';
// import * as StandModule from './stands';

// const jotaroModule = new StandUser("承太郎", new Stand("スタープラチナ", 100));
// const dioModule = new StandModule.default("DIO", new StandModule.Stand("ザ・ワールド", 95));

// ============================================
// 8. GENERICS
// ============================================

// Basic generics
function identity<T>(arg: T): T {
  return arg;
}

const result1Generic = identity<string>("za warudo"); // 明示的に型指定
const result2Generic = identity("muda muda"); // 型推論で自動判定

// Multiple type parameters
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const jotaroPair = createPair("jotaro", { name: "star platinum", power: 95 });
// [string, { name: string; power: number }]

// Generic constraints
function findByName<T extends { name: string }>(
  items: T[],
  name: string,
): T | undefined {
  return items.find((item) => item.name === name);
}

const standsGeneric: Stand[] = [
  { name: "star platinum", power: 95 },
  { name: "the world", power: 90 },
];

const weapons: Weapon[] = [
  { name: "arrow", damage: 50 },
  { name: "requiem arrow", damage: 100 },
];

// Type-safe usage
const starPlatinumGeneric = findByName(standsGeneric, "star platinum"); // StandModule | undefined
const arrow = findByName(weapons, "arrow"); // Weapon | undefined

// Generic interfaces
interface ApiResponse<T> {
  data: T;
  status: "success" | "error";
}

// Generic function
async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  return response.json();
}

// Usage with type inference
const standsResponse = await fetchData<StandModule[]>("/api/stands");
const userResponse = await fetchData<User>("/api/user");

// Type-safe access
if (standsResponse.status === "success") {
  standsResponse.data.forEach((stand) => {
    console.log(stand.name); // StandModule型として扱われる
  });
}

// ============================================
// 9. INDEX SIGNATURES
// ============================================

// Basic index signature
interface StringDictionary {
  [key: string]: string;
}

interface NumberDictionary {
  [key: string]: number;
  length: number; // ok, lengthはnumber型
  // name: string; // error, インデックスシグネチャと競合
}

// Multiple index signatures
interface MixedDictionary {
  [key: string]: any;
  [key: number]: string; // 数値キーは文字列キーに割り当て可能である必要がある
}

// ✕ Non-recommended: unsafe
interface ConfigUnsafe {
  [key: string]: any;
}

// ✓ Recommended: specific types
interface ConfigSafe {
  apiUrl: string;
  timeout: number;
  retries?: number;
}

// ============================================
// 10. CONDITIONAL TYPES
// ============================================

// Basic conditional type
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
type Test3 = IsString<"hello">; // true（文字列リテラル型はstring型に含まれる）

// Practical examples
type NonNull<T> = T extends null | undefined ? never : T;

type SafeString = NonNull<string | null>; // string
type SafeNumber = NonNull<number | undefined>; // number

// Array type check
type IsArray<T> = T extends unknown[] ? true : false;

type ArrayCheck1 = IsArray<string[]>; // true
type ArrayCheck2 = IsArray<string>; // false

// ============================================
// 11. UTILITY TYPES
// ============================================

interface UserUtility {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Partial<T> - all properties optional
type UserUpdate = Partial<UserUtility>;
// { id?: number; name?: string; email?: string; isActive?: boolean; }

// Pick<T, K> - select specific properties
type UserProfile = Pick<UserUtility, "name" | "email">;
// { name: string; email: string; }

// Omit<T, K> - exclude specific properties
type UserWithoutId = Omit<UserUtility, "id">;
// { name: string; email: string; isActive: boolean; }

// Record<K, T> - create object type with specific keys and values
type UserStatus = Record<string, boolean>;
// { [key: string]: boolean; }

// Practical usage examples
function updateUser(id: number, updates: Partial<UserUtility>) {
  // name だけ更新、email だけ更新などが可能
}

function getPublicProfile(user: UserUtility): Omit<UserUtility, "id"> {
  const { id, ...publicData } = user;
  return publicData;
}

const configRecord: Record<string, string> = {
  apiUrl: "https://api.example.com",
  theme: "dark",
};
