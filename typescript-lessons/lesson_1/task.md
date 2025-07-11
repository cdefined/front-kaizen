## 課題 1：Union 型と type guard

[Playground のリンク](https://www.typescriptlang.org/play/?strictFunctionTypes=false&q=66#code/PQKhCgAIUwmqMGQyCMkCqA7AlgezYaPVAWDAC4CeADgKaQDmArgIYBOAJlDIEWpgDqaSkNYDG5AM6CAkk0iAkhkA68oAQjQOoMgMwZA8gyADBkCqDIBEGVq0iBUfS4ZxgewZIaGgFsARuQaRAfgyB9BhODCDDGiqRAdgwbAWgyAYhkBpBkBzBkBNBh0zKxtvQBYNQAgVEwAiEQARAC5IRAAmAGZEwEAGFzcPWITIRIBhAHkUgFEMgEEAIQrE70AjfUB4fWDAFfjw6GBwcGBgSEAxhkBOhkAJhnA+HEEsABtyADpFrCoACh5+IVEmTeycgEpjgG5IEfLUjKPE2fml1fWtnYFhMU3E5tbTi6vKjV6pAfvcHmgFssVnRhDZCNteO99odcsdIABeTHXdKZXKJAA05QAYnQMMsmBk3ntPkdjolzuDIasYYI4Qjdh8Dt8WvSMVjAXVGjzCYkSWTyBTuIjqQcAOQ-WV085AA)

- 関数 `processId` を作成してください
- 引数 `id` は `number` または `string` のいずれかです
- `number` の場合は `"ID: 123"`、`string` の場合は `"CODE: ABC"` の形式で返す

```ts
console.log(processId(123)); // "ID: 123"
console.log(processId("ABC")); // "CODE: ABC"
```

## 課題 2：オプション値と配列

[Playground のリンク](https://www.typescriptlang.org/play/?strictFunctionTypes=false&q=66#code/PQKhCgAIUwmqMGQyBMlBVDIdYZDtDIc4ZDPDIEgVALBkFlEwdCUoZAi1MAdTSAYwCcBTAQwBdGBZRgZ2+YHNGkQEkMgHXlACEaB1BkBmDIHkGQAYMgVQZAIgzlykQLAqgWSUCgQHdApq6B75UC-AYCsGQP0MgBoZhgdeVAigyA15UBRDID8GQJoM6q4BkGQEIMgaIZAFg1ACBVAewZIACIACUYAGxiAe00tSABtVgEARgAaSHT+RABdcMBABlNlYLCo2ISk8JFAFfjJd3JgcGBgSEAxhkBOhkAJhnBaeIA7bniYxgA6BP4ACgYWdi5eAUYZ8IAVZgBrZiH48IBKA4BuSHaI6LjEzZ298IHh0fGp+Nn5tk4ePkE1gGU2eJbfY5FLhZgAEwAtgBLIbhHLhACu3EY9HCBSOp3OVSukH+rEBiRSEJhQxyyNRRXADxGY0mzF4qNYMygdCYHyW31WG22u32B0gAF5hRdqtdeXcsqyAOQAMWY0PG4IAXGyFp9lj8ebd+dKpScaU96Yz6MzWe9Fl8Vn8AUD4akwVDYfakSi0RihSKcTV8YTUiTYeS3UUpZBIHKFUrVRaNVybQS7SDHaSXRT3Qc9eATkA)

- 関数 `createMessage` を作成してください
- 名前と省略可能なタグを受け取ります
- タグがある場合は `"Hello 名前 [tag1, tag2]"`、ない場合は `"Hello 名前"` を返します

```ts
console.log(createMessage("Takano")); // "Hello Takano"
console.log(createMessage("Satoko", ["admin", "user"])); // "Hello Satoko [admin, user]"
```

## 課題 3：型推論

[Playground のリンク](https://www.typescriptlang.org/play/?strictFunctionTypes=false&q=66#code/PQKhCgAIUwmqMGQyDMlDR6oCuNBrUVGgi1MA6mkAlgHYBuApgM4AuhA5gIbXkBiATg3QLbnHWSAkhkA68oAQjQOoMgMwZA8gyADBkCqDIBEGbNkiBUfTwAuSADMO3XtUqRA9gx5AJAqA7BkCyiYHQlQH4MgfQZjgcNNA6to3rNlbYuAAc0C4ShaAgZGABL4CgCvxgJoMgEAMgF5ePoAsGoAQKsaQAETEDMQA9gAmVACuaYJRKoDcRoBRDJYogBc2gBOJxoAfZoDSDIBWDAqQALSQACoAngAO5ADKAMZshAP8gNYMmHKA2gyA0QwqgMABgBIMEoD+DIARDIBiDFr9Q2MTUyaAygwW+BaVZgKAlgyAyQytKDKAFgyYkYuA5gxigOEMu81APj-2GA4GAwEggDGGQCdDIAJhnAo2yxEo2QANuQAHSo7J0AAUJAoNHoTFYeh4fFxAG0AIwATgAHIgADSQOn0gAsLLZAFYALoASn5AG5IODWQzEAikSj0VicfiyFRaIxmOxOOTqFS0mxeAw0iy0lxCEi0gLhaKIdrdWkpci0ZjsXiCUriaqyQYqWaRWKMlk8oUbbaZZiGJRKOQ2JqoERFUSVaT1R6aRKuQzOeL6Xz+ZAALx5jPM6NpFgMQjo3JaZ1xklq-QU5OM1McptZ-XgYVB+0Y0PhyO46NV5U1931q2ZfXpI0mgW5-NjvVM6MAchLZfIFZjhKHbsTo5144NU+Ipv5S8XHcRdtlPYjUcgm5d8drGs92bzOfSmRy+UoRUX9+LUty0rWNtwTOtNUpAU2w7IA)

- 関数 `investigateFragment` を作成してください
- 引数 `fragments` は数値の配列または文字列の配列
- 配列の最初の要素を返す。空配列の場合は `"nanodesu"` を返す
- 戻り値の型注釈は書かない - TypeScript に推論させる
- 考えてみよう: TypeScript はこの関数の戻り値をどんな型だと推論するでしょうか？

```ts
console.log(investigateFragment([1983, 1984, 1985])); // 1983
console.log(investigateFragment(["rena", "mion"])); // "rena"
console.log(investigateFragment([])); // "nanodesu"
```

## 実行方法

Playground を使うか、以下のコマンドでローカル実行してください：

[テストコードは `task.ts` にあります](/typescript-lessons/lesson_1/task.ts)

- ターミナルで以下のコマンドを実行してテスト：

  ```bash
  tsc typescript-lessons/lesson_1/task.ts --outDir dist && node dist/task.js
  ```

- 変更を監視しながら自動コンパイル（プログラムは自動実行されません）：

  ```bash
  tsc --watch typescript-lessons/lesson_1/task.ts --outDir dist
  ```
