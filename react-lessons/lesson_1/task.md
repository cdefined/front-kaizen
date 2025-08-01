## 課題 1：Props 付きのコンポーネント

[Playground のリンク](https://www.typescriptlang.org/play/?)

- `<ZanpakutoCard>` コンポーネントを作成してください
- `zanpakuto` オブジェクトを Props として受け取り、以下のプロパティを表示してください：
  - `name`, `owner`, `type`, `bankai`, `shikaiAbility`, `powerLevel`, `isReleased`
- `bankai` は存在する場合のみ表示してください

```tsx
export interface Zanpakuto {
  name: string;
  owner: string;
  type: "melee" | "kido" | "elemental" | "illusion";
  bankai?: string;
  shikaiAbility: string;
  powerLevel: number;
  isReleased: boolean;
}

function ZanpakutoCard({ zanpakuto }: { zanpakuto: Zanpakuto }) {
  return null;
}
```
