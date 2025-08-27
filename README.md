# TypeScript

## 1. TypeScript 入門 ①

型システム、コンパイル設定、基本型、型推論、Union 型、関数の型、void と never

- [プレゼンテーション](https://cdefined.github.io/front-kaizen/typescript-lessons/lesson_1/slides.html)
- [プレゼンテーションのコード例](/typescript-lessons/lesson_1/slides_examples.ts)
- [プレゼンテーションの演習課題](/typescript-lessons/lesson_1/task.md)
- [宿題・実践課題](/typescript-lessons/lesson_1/homework/README.md)

## 2. TypeScript 入門 ②

interface、type、型の拡、enum、クラス、ジェネリクス、ユーティリティ型

- [プレゼンテーション](https://cdefined.github.io/front-kaizen/typescript-lessons/lesson_2/slides.html)
- [プレゼンテーションのコード例](/typescript-lessons/lesson_2/slides_examples.ts)
- [プレゼンテーションの演習課題](/typescript-lessons/lesson_2/task.md)
- [宿題・実践課題](/typescript-lessons/lesson_2/homework/README.md)

## 3. React 基礎 ①

React とは、JSX、コンポーネント、Props の使い方

- [プレゼンテーション](https://cdefined.github.io/front-kaizen/react-lessons/lesson_1/slides.html)
- [プレゼンテーションの演習課題・実践課題](/react-lessons/lesson_1/task.md)

## 4. React 基礎 ②

useState、イベント処理、フォーム

- [プレゼンテーション](https://cdefined.github.io/front-kaizen/react-lessons/lesson_2/slides.html)
- [プレゼンテーションの演習課題](/react-lessons/lesson_2/task.md)
- [宿題・実践課題](/react-lessons/lesson_2/homework/README.md)

## 5. React 応用 ①

SPA とは、ライフサイクル、useEffect

- [プレゼンテーション](https://cdefined.github.io/front-kaizen/react-lessons/lesson_3/slides.html)
- [プレゼンテーションの演習課題・実践課題](/react-lessons/lesson_3/task.md)

## コードレビューと提出

### 準備

1. リポジトリを **clone**
1. `.devcontainer` で [VSCode Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) 使用
1. 各レッスンの `lesson_*/homework/` に自分のディレクトリ作成（例: `karino`）
1. オリジナルの `homework.ts` を自分のディレクトリにコピー

### 作業フロー

1. `master` から新ブランチ切る（例: `feat/lesson1`）
1. 自分のディレクトリの `homework.ts` で課題対応
1. `npm run run-homework [lesson名] [受講者名]` で実行テスト

   - lesson 名: `lesson1`（アンダースコア無し）
   - 受講者名: ディレクトリ名と一致させる

1. **Pull Request** 作成
1. レビュー後にフィードバックがあれば、修正して再度 push する

### 注意

- PR のコメントは自由で、気軽に難しかった点などを書いてください
