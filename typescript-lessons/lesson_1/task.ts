/**
 * 課題1 Union型とtype guard
 * 関数 processId を作成してください
 *
 * 引数 id は number または string のいずれかです
 * number の場合は "ID: 123"、string の場合は "CODE: ABC" の形式で返す
 */
// テスト
console.log(processId(123)); // "ID: 123"
console.log(processId("ABC")); // "CODE: ABC"

/**
 * 課題2 オプション値と配列
 * 関数 createMessage を作成してください
 *
 * 名前と省略可能なタグを受け取ります
 * タグがある場合は "Hello 名前 [tag1, tag2]"、ない場合は "Hello 名前" を返します
 */
// テスト
console.log(createMessage("Takano")); // "Hello Takano"
console.log(createMessage("Satoko", ["admin", "user"])); // "Hello Satoko [admin, user]"

/**
 * 課題3 型推論と怪奇現象
 * 関数 investigateFragment を作成してください
 *
 * 引数: fragments は数値の配列または文字列の配列
 * 配列の最初の要素を返す。空配列の場合は "nanodesu" を返す
 * 型を判定する処理を書いてください
 */
// テスト
console.log(investigateFragment([1983, 1984, 1985])); // 1983
console.log(investigateFragment(["rena", "mion"])); // "rena"
console.log(investigateFragment([])); // "nanodesu"
