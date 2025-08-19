# 課題２：斬魄刀ステータス エディター

## タスク

[Playground のリンク](https://codesandbox.io/p/devbox/zhan-po-dao-nobiao-shi-forked-hsc96h?workspaceId=ws_KALT2Ee5cXzUQBDTYp2uGF)

基本的なフォームを作成してください

- 2 つの入力フィールド： `name`（テキスト） と `powerLevel`（数値, 1-10000）
- 両方とも必須項目
- 送信時： データを `console.log` して、フォームをクリア
- `useState` でフォーム状態を管理

```tsx
function ZanpakutoForm() {
  const [zanpakuto, setZanpakuto] = useState({
    name: "",
    powerLevel: 1,
  });

  // ここにコードを書いてください

  return <form>{/* 入力フィールドと送信ボタンを追加 */}</form>;
}

export default function Solution() {
  return <ZanpakutoForm />;
}
```
