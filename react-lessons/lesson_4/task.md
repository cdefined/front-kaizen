# 課題：ポケモン API フック

## タスク

[Playground のリンク](https://codesandbox.io/p/devbox/pokemoncard-forked-ftndys?workspaceId=ws_KALT2Ee5cXzUQBDTYp2uGF)

`PokemonCard` と `TypeInfo` コンポーネントで同じ `fetch` パターンが繰り返されています。
この共通ロジックを `useApi` カスタムフックとして抽出してください。

## 実装要件

- `useApi(url)` フックを実装する
- 以下の状態を管理すること：
  - `data`: API から取得したデータ
  - `loading`: 読み込み中かどうか
  - `error`: エラー情報
- `useEffect` で `fetch` 処理を実装
- `{ data, loading, error }` を返す
- 実装後、`PokemonCard` と `TypeInfo` を `useApi` を使うようにリファクタリング
