// TypeScript 入門 - 基礎編
// Playground examples from the presentation

// ============================================
// 1. BASIC TYPES
// ============================================

// Primitive types
let characterName: string = "古手梨花";
let age: number = 11;
let isAlive: boolean = true;
let deathCount: null = null;
let mysteryStatus: undefined = undefined;

// Arrays
let clubGrades: number[] = [1, 2, 3, 2, 1];
let clubMembers: Array<string> = [
  "竜宮レナ",
  "園崎魅音",
  "古手梨花",
  "北条沙都子",
];

// Objects
let clubMember: { name: string; age: number; weapon?: string } = {
  name: "竜宮レナ",
  age: 16,
};

// Index signature
let suspicionLevels: { [character: string]: number } = {
  前原圭一: 3,
  竜宮レナ: 5,
  園崎魅音: 2,
};

// ============================================
// 2. ANY vs UNKNOWN
// ============================================

// any型 - 危険
let mysteryData: any = "綿流し";
mysteryData = 1983;
mysteryData.oyashiro.curse.activate; // エラーにならない（危険）

// unknown型 - 安全
let secret: unknown = "investigate()";
// secret.toUpperCase(); // エラー！
if (typeof secret === "string") {
  console.log(secret.toUpperCase()); // OK
}

// ============================================
// 3. UNION TYPES
// ============================================

// Basic union
let userId: number | string = 123;
userId = "user_456";

// Type guards
function formatId(id: number | string): string {
  if (typeof id === "number") {
    return `ID: ${id.toString().padStart(6, "0")}`;
  } else {
    return `ID: ${id.toUpperCase()}`;
  }
}

// Literal unions
type Status = "pending" | "approved" | "rejected";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// Discriminated union
type ApiResponse =
  | { success: true; data: any }
  | { success: false; error: string };

function handleResponse(response: ApiResponse) {
  if (response.success) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
}

// ============================================
// 4. FUNCTIONS
// ============================================

// Basic function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (x: number, y: number): number => x * y;

// Optional parameters
function greet(name: string, title?: string): string {
  if (title) {
    return `${title} ${name}`;
  }
  return `Hello, ${name}`;
}

// Default parameters
function createUser(name: string, age: number = 18) {
  return { name, age };
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

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

// ============================================
// 5. VOID and NEVER
// ============================================

// void型
function logMessage(message: string): void {
  console.log(`[LOG] ${message}`);
}

// never型
function throwError(message: string): never {
  throw new Error(message);
}

// Exhaustive checking with never
type Color = "amethyst" | "green";

function getColorHex(color: Color): string {
  switch (color) {
    case "amethyst":
      return "#955CD0";
    case "green":
      return "#8EDF5F";
    default:
      const exhaustiveCheck: never = color;
      throw new Error(`未処理の色: ${exhaustiveCheck}`);
  }
}

// ============================================
// 6. PRACTICE EXERCISES
// ============================================

// Exercise 1: Union type with type guards
function processId(id: number | string): string {
  if (typeof id === "number") {
    return `ID: ${id}`;
  } else {
    return `CODE: ${id}`;
  }
}

// Exercise 2: Optional parameters and arrays
function createMessage(name: string, tags?: string[]): string {
  if (tags) {
    return `Hello ${name} [${tags.join(", ")}]`;
  } else {
    return `Hello ${name}`;
  }
}

// Exercise 3: Type inference with arrays
function investigateFragment(fragments: number[] | string[]) {
  if (fragments.length === 0) {
    return "nanodesu";
  }
  return fragments[0];
}

// Alternative solution using nullish coalescing
function investigateFragment1(fragments: number[] | string[]) {
  return fragments[0] ?? "nanodesu";
}
