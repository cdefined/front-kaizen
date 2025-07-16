# 宿題: 斬魄刀管理システム改良版

## 課題概要

前回の斬魄刀システムを拡張し、より高度な型システムを活用した管理システムを実装してください。

## 基本型定義の拡張

```typescript
// 基本の斬魄刀情報
interface BaseZanpakuto {
  name: string;
  owner: string;
  shikaiAbility: string;
  powerLevel: number;
  isReleased: boolean;
}

// 型別の追加プロパティ
interface MeleeZanpakuto extends BaseZanpakuto {
  type: "melee";
  weaponForm: "sword" | "axe" | "whip" | "dual";
  range: number;
}

interface KidoZanpakuto extends BaseZanpakuto {
  type: "kido";
  spellCategory: "hado" | "bakudo" | "kaido";
  castingTime: number;
}

interface ElementalZanpakuto extends BaseZanpakuto {
  type: "elemental";
  element: "fire" | "ice" | "lightning" | "earth" | "water";
  aoeRadius: number;
}

interface IllusionZanpakuto extends BaseZanpakuto {
  type: "illusion";
  illusionType: "visual" | "mental" | "sensory";
  duration: number;
}

type Zanpakuto =
  | MeleeZanpakuto
  | KidoZanpakuto
  | ElementalZanpakuto
  | IllusionZanpakuto;

// 卍解情報
interface BankaiData {
  name: string;
  multiplier: number;
  specialAbility: string;
}

// 隊長級の斬魄刀（卍解必須）
type CaptainZanpakuto<T extends Zanpakuto = Zanpakuto> = T & {
  bankai: BankaiData;
  rank: "captain" | "lieutenant" | "vice-captain";
};
```

## 実装する機能

### 1. 型安全なコレクション管理クラス

```typescript
class ZanpakutoRegistry<T extends Zanpakuto = Zanpakuto> {
  private collection: Map<string, T>;

  constructor();

  // 斬魄刀を登録
  register(zanpakuto: T): void;

  // 所有者で検索
  findByOwner(owner: string): T | undefined;

  // 型でフィルタリング（型ガード付き）
  filterByType<K extends T["type"]>(type: K): Array<Extract<T, { type: K }>>;

  // 統計情報を取得
  getStats(): {
    total: number;
    byType: Record<T["type"], number>;
    averagePower: number;
  };
}
```

### 2. 卍解システム

```typescript
// 卍解を持つ斬魄刀かどうかの型ガード
function hasBankai(zanpakuto: Zanpakuto): zanpakuto is CaptainZanpakuto;

// 卍解発動時の戦闘力計算
function calculateBankaiPower(zanpakuto: CaptainZanpakuto): number;

// 隊長級斬魄刀の管理
class CaptainRegistry extends ZanpakutoRegistry<CaptainZanpakuto> {
  // 戦闘力ランキング（卍解込み）
  getPowerRankings(): Array<{
    owner: string;
    basePower: number;
    bankaiPower: number;
    rank: CaptainZanpakuto["rank"];
  }>;

  // 特定ランクの隊長を取得
  getByRank<R extends CaptainZanpakuto["rank"]>(
    rank: R,
  ): Array<CaptainZanpakuto & { rank: R }>;
}
```

### 3. 戦闘シミュレーション

```typescript
// 戦闘結果
interface BattleResult {
  winner: string;
  loser: string;
  damageDealt: number;
  rounds: number;
  usedBankai: boolean;
}

// 型別の戦闘ロジック
type BattleStrategy<T extends Zanpakuto> = {
  [K in T["type"]]: (attacker: Extract<T, { type: K }>, defender: T) => number;
};

// 戦闘シミュレーター
class BattleSimulator {
  private strategies: BattleStrategy<Zanpakuto>;

  constructor(strategies: BattleStrategy<Zanpakuto>);

  simulate(
    zanpakuto1: Zanpakuto,
    zanpakuto2: Zanpakuto,
    options?: {
      allowBankai?: boolean;
      rounds?: number;
    },
  ): BattleResult;
}
```

### 4. 分析ツール

```typescript
// 統計分析用のユーティリティ型
type ZanpakutoStats = {
  [K in Zanpakuto["type"]]: {
    count: number;
    averagePower: number;
    topPerformer: string;
  };
};

// 分析機能
namespace ZanpakutoAnalytics {
  export function analyzeByType(zanpakutos: Zanpakuto[]): ZanpakutoStats;

  export function findStrongest<T extends Zanpakuto["type"]>(
    zanpakutos: Zanpakuto[],
    type: T,
  ): Extract<Zanpakuto, { type: T }> | undefined;
}
```

## 採点基準

### 基本実装 (70 点)

- [ ] 型定義の正確な実装
- [ ] 基本クラスの実装
- [ ] 型ガードの実装
- [ ] テストの通過

### 応用実装 (20 点)

- [ ] ジェネリクスの適切な活用 (+5 点)
- [ ] 条件付き型の使用 (+5 点)
- [ ] ユーティリティ型の活用 (+5 点)
- [ ] 型安全な enum/const assertion の使用 (+5 点)

### 発展実装 (10 点)

- [ ] 独自のユーティリティ型の定義 (+3 点)
- [ ] 高度な型推論の活用 (+3 点)
- [ ] パフォーマンス最適化 (+2 点)
- [ ] エラーハンドリングの充実 (+2 点)

## 実行とテスト

```bash
npm run lesson2
```

**ヒント:**

- `Extract<T, U>` で union 型から特定の型を抽出
- `keyof` と `in` で型安全なオブジェクト操作
- `const assertion` で文字列リテラル型を保持
- 型ガードで分岐後の型推論を活用
- JSON ファイルのインポートは `import data from './data.json'` で可能

**禁止事項:**

- `any` 型の使用
- 型アサーション `as` の乱用
- `@ts-ignore` コメント

## 提出物

1. `homework.ts` - 実装コード（テスト含む）
2. 使用した高度な型機能の説明（コメント）

## ファイル構成

```
lesson_2/
├── README.md          # この課題説明
├── data.json          # 斬魄刀データ
└── homework.ts        # 実装 + テスト
```
