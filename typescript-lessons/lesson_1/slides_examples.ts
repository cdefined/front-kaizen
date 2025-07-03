// TypeScript 入門 - 基礎編
// All code examples from the lesson

// =============================================================================
// Basic TypeScript compilation example
// =============================================================================

// hello.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Usage
console.log(greet("world"));

// =============================================================================
// JavaScript vs TypeScript comparison
// =============================================================================

// JavaScript version (runtime error)
/*
function getUserJS(id) {
    const users = [{ id: "123", name: "john" }];
    return users.find(u => u.id === id);
}

const userJS = getUserJS("456"); // undefined
console.log(userJS.name.toUpperCase()); // TypeError at runtime
*/

// TypeScript version (compile-time error prevention)
interface User {
  id: string;
  name: string;
  email?: string; // Optional property
}

function getUser(id: string): User | undefined {
  const users: User[] = [{ id: "123", name: "john" }];

  return users.find((u) => u.id === id);
}

const user = getUser("456");
// console.log(user.name.toUpperCase()); // Error: Object is possibly 'undefined'

// Correct usage with type guard
if (user) {
  console.log(user.name.toUpperCase()); // Safe
}

// =============================================================================
// Basic Types
// =============================================================================

// Primitive types
let username: string = "john_doe";
let age: number = 25;
let isActive: boolean = true;
let data: null = null;
let result: undefined = undefined;

// Arrays - 2 ways to declare
let scores: number[] = [95, 87, 92, 88];
let languages: Array<string> = ["javascript", "typescript", "python"];

// 配列の型定義 - 2つの書き方
let clubGrades: number[] = [1, 2, 3, 2, 1];
let clubMembers: Array<string> = [
  "竜宮レナ",
  "園崎魅音",
  "古手梨花",
  "北条沙都子",
];

// 混合型の配列
let evidence: (string | number)[] = ["鬼隠し", 1983, "綿流し", 1982];

// 読み取り専用配列
let hinamizawaRules: ReadonlyArray<string> = ["鬼隠し", "綿流し", "祟殺し"];
// hinamizawaRules.push("暇潰し"); // エラー！

// 読み取り専用配列（readonly 修飾子）
let legends: readonly string[] = ["雛見沢症候群", "綿流しの儀式", "祟りの噂"];
// legends.pop(); // エラー！

// 多次元配列
let board: string[][] = [
  ["X", "O", "X"],
  [" ", "X", "O"],
  ["O", " ", " "],
];

// Objects
let clubMember: { name: string; age: number; weapon?: string } = {
  name: "竜宮レナ",
  age: 16,
  // weapon は省略可能（?マーク）
};

// インデックスシグネチャ
let suspicionLevels: { [character: string]: number } = {
  前原圭一: 3,
  竜宮レナ: 5,
  園崎魅音: 2,
};

// ネストしたオブジェクト
let village: {
  name: string;
  location: {
    prefecture: string;
    population: number;
  };
} = {
  name: "雛見沢村",
  location: {
    prefecture: "岐阜県",
    population: 2000,
  },
};

// any type (avoid)
let mysteryData: any = "綿流し";
mysteryData = 1983;
mysteryData = true;
mysteryData = { killer: "unknown" };

// なんでもできてしまう（危険）
mysteryData.oyashiro.curse.activate; // エラーにならない
mysteryData(); // エラーにならない
mysteryData[0][1][2]; // エラーにならない

// 型の利益を失う
let anyResult = mysteryData + 5; // resultの型もany

// unknown type (safer than any)

function investigate(): unknown {
  // Simulate investigating a secret in the village
  const secrets = [
    "雛見沢症候群の謎",
    1983,
    { rumor: "オヤシロさまの祟り" },
    true,
  ];
  // Randomly return one of the secrets
  const index = Math.floor(Math.random() * secrets.length);

  return secrets[index];
}

let secret: unknown = investigate();

// 直接操作はエラー
// villageSecret.toUpperCase(); // エラー！
// villageSecret + 5; // エラー！

// 型ガードが必要
if (typeof secret === "string") {
  console.log(secret.toUpperCase()); // OK
}

if (typeof secret === "number") {
  console.log(secret.toFixed(2)); // OK
}

// 型アサーション（注意して使用）
let curse = secret as string;

// =============================================================================
// Type Inference
// =============================================================================

// Explicit type annotation
let price: number = 1000;

// Type inference
let discount = 0.1; // inferred as number
let productName = "laptop"; // inferred as string
let isAvailable = true; // inferred as boolean

// Array type inference
let numbers = [1, 2, 3, 4]; // number[]
let mixed = [1, "hello", true]; // (string | number | boolean)[]
let empty = []; // any[] (be careful!)

// Function return type inference
function multiply(x: number, y: number) {
  return x * y; // return type inferred as number
}

// Object type inference
let config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
}; // Type inferred from structure

// Context-based inference
const numbersArray = [1, 2, 3];
const doubled = numbersArray.map((n) => n * 2); // n inferred as number

// =============================================================================
// SLIDE 7: Union Types
// =============================================================================

// Basic union types
let userId: number | string = 123;
userId = "user_456"; // Valid reassignment

// Function with union parameters
function formatId(id: number | string): string {
  if (typeof id === "number") {
    return `ID: ${id.toString().padStart(6, "0")}`;
  } else {
    return `ID: ${id.toUpperCase()}`;
  }
}

// Test formatId
console.log(formatId(123)); // "ID: 000123"
console.log(formatId("abc123")); // "ID: ABC123"

// Nullable types (common pattern)
let message: string | null = null;

function processMessage(msg: string | null) {
  if (msg !== null) {
    console.log(msg.toUpperCase()); // msg is string here
  } else {
    console.log("No message provided");
  }
}

// Literal union types (enum-like)
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Status = "pending" | "approved" | "rejected";

function makeRequest(url: string, method: HttpMethod) {
  console.log(`Making ${method} request to ${url}`);
}

makeRequest("/api/users", "GET"); // ✓ Valid
// makeRequest("/api/users", "PATCH");  // ❌ Error

// Union with objects
type ApiResponse =
  | { success: true; data: any }
  | { success: false; error: string };

function handleResponse(response: ApiResponse) {
  if (response.success) {
    console.log("Success:", response.data);
  } else {
    console.log("Error:", response.error);
  }
}

// Test handleResponse
handleResponse({ success: true, data: { users: ["john", "jane"] } });
handleResponse({ success: false, error: "Network timeout" });

// =============================================================================
// SLIDE 8: Function Type Definitions
// =============================================================================

// Basic function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiplyArrow = (x: number, y: number): number => x * y;

// Optional parameters (use ? operator)
function createUser(name: string, email?: string): User {
  return {
    id: Math.random().toString(),
    name,
    email: email || `${name}@example.com`,
  };
}

// Default parameters
function greetUser(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greetUser("alice")); // "Hello, alice!"
console.log(greetUser("bob", "Hi")); // "Hi, bob!"

// Rest parameters
function calculateTotal(...prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

console.log(calculateTotal(10, 20, 30)); // 60
console.log(calculateTotal(5, 15)); // 20

// Function type as parameter (callback)
function processData(
  data: string[],
  callback: (item: string) => string,
): string[] {
  return data.map(callback);
}

// Usage
const uppercased = processData(["hello", "world"], (s) => s.toUpperCase());
console.log(uppercased); // ["HELLO", "WORLD"]

// Function overloads
function convert(input: string): number;
function convert(input: number): string;
function convert(input: string | number): string | number {
  if (typeof input === "string") {
    return parseInt(input, 10);
  } else {
    return input.toString();
  }
}

const num = convert("123"); // TypeScript knows this returns number
const str = convert(456); // TypeScript knows this returns string
console.log(num, typeof num); // 123 "number"
console.log(str, typeof str); // "456" "string"

// =============================================================================
// SLIDE 9: void and never types
// =============================================================================

// void type - no return value (returns undefined)
function logMessage(message: string): void {
  console.log(`[LOG] ${message}`);
  // implicitly returns undefined
}

// void is usually inferred, so explicit annotation is optional
function saveToDatabase(data: any) {
  console.log("Data saved:", data);
}

// never type - function never returns normally
function throwError(message: string): never {
  throw new Error(message);
  // Code after throw is unreachable
}

function infiniteLoop(): never {
  while (true) {
    console.log("Running forever...");
    break; // Remove this break to make it truly infinite
  }
  // This code is unreachable
  throw new Error("Should never reach here");
}

// Practical use of never: exhaustive checking
type Color = "red" | "green" | "blue";

function getColorHex(color: Color): string {
  switch (color) {
    case "red":
      return "#FF0000";
    case "green":
      return "#00FF00";
    case "blue":
      return "#0000FF";
    default:
      // If we add a new color to the union, TypeScript will error here
      const exhaustiveCheck: never = color;
      throw new Error(`Unhandled color: ${exhaustiveCheck}`);
  }
}

console.log(getColorHex("red")); // "#FF0000"
console.log(getColorHex("green")); // "#00FF00"

// Function that might not return
function findUser(id: string): User {
  const database = [
    { id: "1", name: "john" },
    { id: "2", name: "jane" },
  ];

  const foundUser = database.find((u) => u.id === id);
  if (!foundUser) {
    throw new Error(`User ${id} not found`);
  }
  return foundUser;
}

// =============================================================================
// SLIDE 10: Practice Exercises
// =============================================================================

// Exercise 1: Calculator Function
function calculate(
  a: number,
  b: number,
  operation: "add" | "subtract" | "multiply" | "divide",
): number {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    default:
      const exhaustive: never = operation;
      throw new Error(`Unknown operation: ${exhaustive}`);
  }
}

// Test calculate function
console.log("Calculate tests:");
console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "subtract")); // 5
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2

// Exercise 2: User Profile Builder
interface UserProfile {
  name: string;
  age: number;
  email?: string;
  isActive: boolean;
}

function createUserProfile(
  name: string,
  age: number = 18,
  email?: string,
): UserProfile {
  return {
    name,
    age,
    email,
    isActive: true,
  };
}

// Test createUserProfile
console.log("UserProfile tests:");
console.log(createUserProfile("john"));
console.log(createUserProfile("alice", 25));
console.log(createUserProfile("bob", 30, "bob@test.com"));

// Exercise 3: Data Validator
function validateData(data: unknown): data is { name: string; age: number } {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as any).name === "string" &&
    typeof (data as any).age === "number"
  );
}

// Test validateData
console.log("Validation tests:");
console.log(validateData({ name: "test", age: 25 })); // true
console.log(validateData({ name: "test" })); // false
console.log(validateData("invalid")); // false
console.log(validateData(null)); // false

// Usage with type guard
function processValidatedData(input: unknown) {
  if (validateData(input)) {
    // TypeScript now knows input has name and age properties
    console.log(`Name: ${input.name}, Age: ${input.age}`);
  } else {
    console.log("Invalid data format");
  }
}

processValidatedData({ name: "alice", age: 30 });
processValidatedData({ name: "bob" });

// =============================================================================
// SLIDE 11: d.ts example
// =============================================================================

// This would typically be in a .d.ts file
declare function myLibFunction(x: string): number;
declare const VERSION: string;

declare module "my-library" {
  export function helper(data: any): string;
  export const config: {
    apiUrl: string;
    timeout: number;
  };
}

// =============================================================================
// Additional utility functions and examples
// =============================================================================

// Type guard examples
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

// Usage of type guards
function processValue(value: unknown) {
  if (isString(value)) {
    console.log("String length:", value.length);
  } else if (isNumber(value)) {
    console.log("Number squared:", value * value);
  } else {
    console.log("Unknown type");
  }
}

processValue("hello"); // String length: 5
processValue(42); // Number squared: 1764
processValue(true); // Unknown type

// Advanced union type example
type LoadingState =
  | { status: "loading" }
  | { status: "success"; data: any }
  | { status: "error"; message: string };

function handleLoadingState(state: LoadingState) {
  switch (state.status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Data loaded:", state.data);
      break;
    case "error":
      console.log("Error occurred:", state.message);
      break;
    default:
      const exhaustive: never = state;
      throw new Error(`Unhandled state: ${exhaustive}`);
  }
}

// Test loading states
handleLoadingState({ status: "loading" });
handleLoadingState({ status: "success", data: ["item1", "item2"] });
handleLoadingState({ status: "error", message: "Network error" });

console.log("All examples completed successfully!");
