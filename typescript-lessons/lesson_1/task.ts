/**
 * ターミナルで以下のコマンドを実行してテスト：
 * tsc typescript-lessons/lesson_1/task.ts --outDir dist && node dist/task.js
 *
 * 変更を監視しながら自動コンパイル（プログラムは自動実行されません）:
 * tsc --watch typescript-lessons/lesson_1/task.ts --outDir dist
 *
 * ブラウザでも以下でTSを実行できます：
 * https://www.typescriptlang.org/play
 */

/**
 * 課題1 Union型とtype guard
 * 関数 processId を作成してください
 *
 * 引数 id は number または string のいずれかです
 * number の場合は "ID: 123"、string の場合は "CODE: ABC" の形式で返す
 *
 * Playground: https://www.typescriptlang.org/play/?strictFunctionTypes=false&q=66#code/PQKhCgAIUwmqMGQyCMkCqA7AlgezYaPVAWDAC4CeADgKaQDmArgIYBOAJlDIEWpgDqaSkNYDG5AM6CAkk0iAkhkA68oAQjQOoMgMwZA8gyADBkCqDIBEGVq0iBUfS4ZxgewZIaGgFsARuQaRAfgyB9BhODCDDGiqRAdgwbAWgyAYhkBpBkBzBkBNBh0zKxtvQBYNQAgVEwAiEQARAC5IRAAmAGZEwEAGFzcPWITIRIBhAHkUgFEMgEEAIQrE70AjfUB4fWDAFfjw6GBwcGBgSEAxhkBOhkAJhnA+HEEsABtyADpFrCoACh5+IVEmTeycgEpjgG5IEfLUjKPE2fml1fWtnYFhMU3E5tbTi6vKjV6pAfvcHmgFssVnRhDZCNteO99odcsdIABeTHXdKZXKJAA05QAYnQMMsmBk3ntPkdjolzuDIasYYI4Qjdh8Dt8WvSMVjAXVGjzCYkSWTyBTuIjqQcAOQ-WV085AA
 */
// テスト
// console.log(processId(123)); // "ID: 123"
// console.log(processId("ABC")); // "CODE: ABC"

// console.assert(processId(123) === "ID: 123", "Failed: processId(123)");
// console.assert(processId("ABC") === "CODE: ABC", "Failed: processId('ABC')");

/**
 * 課題2 オプション値と配列
 * 関数 createMessage を作成してください
 *
 * 名前と省略可能なタグを受け取ります
 * タグがある場合は "Hello 名前 [tag1, tag2]"、ない場合は "Hello 名前" を返します
 *
 * Playground: https://www.typescriptlang.org/play/?strictFunctionTypes=false&q=66#code/PQKhCgAIUwmqMGQyBMlBVDIdYZDtDIc4ZDPDIEgVALBkFlEwdCUoZAi1MAdTSAYwCcBTAQwBdGBZRgZ2+YHNGkQEkMgHXlACEaB1BkBmDIHkGQAYMgVQZAIgzlykQLAqgWSUCgQHdApq6B75UC-AYCsGQP0MgBoZhgdeVAigyA15UBRDID8GQJoM6q4BkGQEIMgaIZAFg1ACBVAewZIACIACUYAGxiAe00tSABtVgEARgAaSHT+RABdcMBABlNlYLCo2ISk8JFAFfjJd3JgcGBgSEAxhkBOhkAJhnBaeIA7bniYxgA6BP4ACgYWdi5eAUYZ8IAVZgBrZiH48IBKA4BuSHaI6LjEzZ298IHh0fGp+Nn5tk4ePkE1gGU2eJbfY5FLhZgAEwAtgBLIbhHLhACu3EY9HCBSOp3OVSukH+rEBiRSEJhQxyyNRRXADxGY0mzF4qNYMygdCYHyW31WG22u32B0gAF5hRdqtdeXcsqyAOQAMWY0PG4IAXGyFp9lj8ebd+dKpScaU96Yz6MzWe9Fl8Vn8AUD4akwVDYfakSi0RihSKcTV8YTUiTYeS3UUpZBIHKFUrVRaNVybQS7SDHaSXRT3Qc9eATkA
 */
// テスト
// console.log(createMessage("Takano")); // "Hello Takano"
// console.log(createMessage("Satoko", ["admin", "user"])); // "Hello Satoko [admin, user]"

// console.assert(
//   createMessage("Takano") === "Hello Takano",
//   'Failed: createMessage("Takano")',
// );
// console.assert(
//   createMessage("Satoko", ["admin", "user"]) === "Hello Satoko [admin, user]",
//   'Failed: createMessage("Satoko", ["admin", "user"])',
// );

/**
 * 課題3 型推論と怪奇現象
 * 関数 investigateFragment を作成してください
 *
 * 引数: fragments は数値の配列または文字列の配列
 * 配列の最初の要素を返す。空配列の場合は "nanodesu" を返す
 * 型を判定する処理を書いてください
 *
 * Playground: https://www.typescriptlang.org/play/?strictFunctionTypes=false&q=66#code/PQKhCgAIUwmqMGQyDMlDR6oCuNBrUYCwZBUBocU1A-50EMYqGQItTAHU0gEsA7ANwFMBnAF2oHMBDVxgMQBOXDgFtGtVpEBJDIB15QAhGgdQZAZgyB5BkAGDIFUGQCIMpUpECo+hQBckAGZDR41s0iB7BgqASBUB2DIFlEwOhKgPwZA+gy3A4aaB1bTdXNz13J0AAc0BcJSdAQMjAAl8pQBX4wE0GQCAGQC8vMMAWDUAIFVtIACJaLloAewATFgBXAukUvRQpQBIlQCztZMBohkAzxUAwFylAD7MtVU0daGBwYGBIQDGGQE6GQAmGcABjUtpmUoAbRgA6ddKOAAo6JjZOHn4LMQl9gG0ARgBOAA5EABpIB8eAFjePgFYAXQAlICANyQCbvJ6IJYrNabHZ7Q4MFjsbi8QTCS6sG4FATiLgFN4FETUFYFIGg8GTXH4gow1Ybba7A5HFGndEXKw3ClgiFFEoVap0+lw7ZcZjMRgCbFQGjIk5o86Yrl3KE-J7fSGPAGAyAAXgNWtesoKfC41E25RMrIVZwxliuque6q+Lp1hPAoJFjK24sl0v2sptqLtnMdNOKhMKJLJQP1hojBJesoA5GaLYwrXLjiGOcrw3jI0SY7RyYCU8mvcsGfC-VKZZBs2zFfasdzdQa9YVimVKswasnG6bzZbrfLc0qHdjrkCPV6gA
 */
// テスト
// console.log(investigateFragment([1983, 1984, 1985])); // 1983
// console.log(investigateFragment(["rena", "mion"])); // "rena"
// console.log(investigateFragment([])); // "nanodesu"

// console.assert(
//   investigateFragment([1983, 1984, 1985]) === 1983,
//   "Failed: investigateFragment([1983, 1984, 1985])",
// );
// console.assert(
//   investigateFragment(["rena", "mion"]) === "rena",
//   'Failed: investigateFragment(["rena", "mion"])',
// );
// console.assert(
//   investigateFragment([]) === "nanodesu",
//   "Failed: investigateFragment([])",
// );
