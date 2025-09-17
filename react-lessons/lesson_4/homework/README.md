# 宿題：完全な斬魄刀フォーム

## タスク

完全な斬魄刀フォームを作成してください：

- 元の仕様のすべてのフィールド：
  - `name`（テキスト, 必須）
  - `owner`（テキスト, 必須）
  - `bankai`（テキスト, オプション）
  - `type`（セレクト： melee/kido/elemental/illusion, 必須）
  - `powerLevel`（スライダーで選択： 1-10000, 必須）
  - `isReleased`（チェックボックス, 必須）
- フォームの下に現在の値をリアルタイムで表示
- 適切な HTML 検証（必須フィールド、数値範囲など）
- 「登録」ボタンでコンソールに全データを出力
- 送信後にフォームをリセット
- ボーナス： 基本的な CSS でスタイルを整える

### 検証要件：

- `name`: 最低 1 文字
- `owner`: 最低 1 文字
- `powerLevel`: 1-10000 の範囲
- 送信前にすべての必須フィールドを入力する必要があります

```tsx
function ZanpakutoForm() {
  const [zanpakuto, setZanpakuto] = useState({
    name: "",
    owner: "",
    type: "melee",
    powerLevel: 1,
    isReleased: false,
    bankai: "",
  });

  // 完全なソリューションを実装してください

  return <form>{/* すべてのフォームフィールドを追加 */}</form>;
}

export default function HomeAssignmentSolution() {
  return <ZanpakutoForm />;
}
```

## セットアップ手順

1. master ブランチに切り替え、更新を取得する

```bash
git switch master
git pull origin main
```

2. パッケージをインストールする

```bash
cd react-lessons/
npm install
```

3. 開発サーバーを起動する

```bash
npm run dev
```

4.  ブラウザで「[http://localhost:5173/](http://localhost:5173/)」を開く
