# 課題 ２：斬魄刀ステータス エディター

## タスク

[Playground のリンク](https://codesandbox.io/p/devbox/zhan-po-dao-nobiao-shi-forked-hsc96h?workspaceId=ws_KALT2Ee5cXzUQBDTYp2uGF)

斬魄刀の情報を編集できるフォームを作成してください

- 以下のフィールドをすべて含むこと
  - `name` (テキスト), `owner` (テキスト)
  - `type` (セレクト: melee/kido/elemental/illusion)
  - `powerLevel` (数値: 1-10000)
  - `isReleased` (チェックボックス)
- 入力中の値をリアルタイムで下に表示すること
- 「登録」ボタンでコンソールに全データを出力
- 登録後、フォームをリセット

```tsx
function ZanpakutoForm() {
  const [zanpakuto, setZanpakuto] = useState({
    name: "",
    owner: "",
    type: "melee",
    powerLevel: 1,
    isReleased: false,
  });

  return null;
}

export default function Solution() {
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
