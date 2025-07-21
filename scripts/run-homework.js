// child_process モジュールから execSync をインポート
const { execSync } = require("child_process");
// path モジュールをインポート（OS問わず正しくパス結合するため）
const path = require("path");

// コマンドライン引数を取得（最初の2つはnodeとスクリプト名なので除外）
const args = process.argv.slice(2);
const [lessonArg, name] = args;

// 引数が2つない場合は使い方を表示して終了
if (!lessonArg || !name) {
  console.error("使い方: npm run run-homework lesson2 karino");
  process.exit(1);
}

// lessonの形式（例: lesson2）を正規表現で検証
const lessonMatch = lessonArg.match(/^lesson(\d+)$/);
if (!lessonMatch) {
  console.error("レッスン名が正しくありません。例: lesson2");
  process.exit(1);
}

// レッスン番号を抽出（例: "2"）
const lessonNumber = lessonMatch[1];

// フォルダ名を「lesson_2」の形で組み立て
const lessonDir = `lesson_${lessonNumber}`;

// 実行するJavaScriptファイルのパスを組み立て
const jsPath = path.join("dist", lessonDir, "homework", name, "homework.js");

try {
  console.log("📦 TypeScriptをコンパイル中...");
  execSync("tsc", { stdio: "inherit" });

  console.log(`🚀 実行中: ${jsPath}`);
  execSync(`node ${jsPath}`, { stdio: "inherit" });
} catch (error) {
  console.error("❌ 実行中にエラーが発生しました:", error.message);
  process.exit(1);
}
