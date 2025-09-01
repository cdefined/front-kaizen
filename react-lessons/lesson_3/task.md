# 課題：斬魄刀ロアダー

## タスク

[Playground のリンク](https://codesandbox.io/p/devbox/relaxed-bhaskara-jr88fz?workspaceId=ws_KALT2Ee5cXzUQBDTYp2uGF)

非同期関数 `loadZanpakto(name: string)` を使って、斬魄刀の情報を取得・表示するコンポーネントを作成してください。  
この関数は成功時に `Zanpakto` を返し、失敗時にはエラーになります。

## 実装要件

- 入力フィールドで斬魄刀の名前を入力
- 「検索」ボタンで `loadZanpakto` を呼び出す
- ローディング中は「読み込み中...」と表示
- 成功時は `name` と `powerLevel` を表示
- 失敗時はエラーメッセージを表示
- `useState` と `useEffect` を組み合わせて実装すること

```tsx
function ZanpakutoLoader({ name }: { name: string }) {
  const [zanpakuto, setZanpakuto] = useState<Zanpakuto | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // name が変更された時に loadZanpakto を呼び出す処理を書く
  });

  return <div>{/* ローディング、結果、エラーの表示 */}</div>;
}
```
