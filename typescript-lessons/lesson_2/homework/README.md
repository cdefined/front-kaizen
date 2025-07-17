# 宿題: 斬魄刀管理システム改良版

## 課題概要

前回の斬魄刀管理システムをクラスベースで改良し、実際のアプリケーションで使われるような機能を追加してください。

### 基本型定義の拡張

```typescript
// 前回の Zanpakuto interface は維持
interface Zanpakuto {
  name: string;
  owner: string;
  type: "melee" | "kido" | "elemental" | "illusion";
  bankai?: string;
  shikaiAbility: string;
  powerLevel: number;
  isReleased: boolean;
}

// 新しい型定義
type ZanpakutoType = Zanpakuto["type"];

interface SearchFilters {
  type?: ZanpakutoType;
  minPowerLevel?: number;
  maxPowerLevel?: number;
  hasBankai?: boolean;
  isReleased?: boolean;
  owner?: string;
}

interface ZanpakutoStats {
  total: number;
  byType: Record<ZanpakutoType, number>;
  averagePowerLevel: number;
  releasedCount: number;
  bankaiCount: number;
}
```

### 実装するクラス

#### 1. ZanpakutoManager クラス

斬魄刀コレクションを管理するメインクラス。

```typescript
class ZanpakutoManager {
  private zanpakutos: Zanpakuto[] = [];

  constructor(initialData?: Zanpakuto[]) {
    // TODO: 実装
  }

  // 斬魄刀を追加
  add(zanpakuto: Zanpakuto): void {
    // TODO: 実装
  }

  // 条件で検索
  search(filters: SearchFilters): Zanpakuto[] {
    // TODO: 実装
  }

  // 統計情報を取得
  getStats(): ZanpakutoStats {
    // TODO: 実装
  }

  // 全データを取得
  getAll(): Zanpakuto[] {
    // TODO: 実装（防御的コピー）
  }

  // パワーレベルで更新
  updatePowerLevel(name: string, newPowerLevel: number): boolean {
    // TODO: 実装
    // 戻り値: 更新成功時 true、対象が見つからない場合 false
  }
}
```

#### 2. ZanpakutoFormatter クラス

表示用のフォーマット機能を提供する静的クラス。

```typescript
class ZanpakutoFormatter {
  static formatBasic(zanpakuto: Zanpakuto): string {
    // TODO: 実装
    // 例: "Zangetsu (Kurosaki Ichigo) - Melee Type [Released]"
  }

  static formatDetailed(zanpakuto: Zanpakuto): string {
    // TODO: 実装
    // 例: "Zangetsu (Kurosaki Ichigo) - Melee [Released] - Power: 8500 - Bankai: Tensa Zangetsu"
  }

  static formatStats(stats: ZanpakutoStats): string {
    // TODO: 実装
    // 例: "Total: 10 | Melee: 4, Kido: 2, Elemental: 3, Illusion: 1 | Avg Power: 7850 | Released: 5/10 | Bankai: 8/10"
  }
}
```

---

## ボーナス課題 (各 5 点)

### ボーナス 1: Generic Repository Pattern

```typescript
interface Repository<T> {
  add(item: T): void;
  findById(id: string): T | undefined;
  findAll(): T[];
  update(id: string, item: Partial<T>): boolean;
  delete(id: string): boolean;
}

class ZanpakutoRepository implements Repository<Zanpakuto> {
  // TODO: name をユニークIDとして使用した実装
}
```

### ボーナス 2: Utility Types の活用

```typescript
// 必要なフィールドのみを持つ型
type ZanpakutoSummary = Pick<Zanpakuto, "name" | "owner" | "powerLevel">;

// 更新可能なフィールドのみを持つ型
type ZanpakutoUpdateData = Partial<Omit<Zanpakuto, "name" | "owner">>;

// 型別統計情報
type TypeStats = Record<ZanpakutoType, ZanpakutoSummary[]>;

class AdvancedZanpakutoManager extends ZanpakutoManager {
  getSummaries(): ZanpakutoSummary[] {
    // TODO: 実装
  }

  updateZanpakuto(name: string, updateData: ZanpakutoUpdateData): boolean {
    // TODO: 実装
  }

  getStatsByType(): TypeStats {
    // TODO: 実装
  }
}
```

### ボーナス 3: Enum の活用

```typescript
enum PowerTier {
  ROOKIE = "ROOKIE", // 0-6000
  LIEUTENANT = "LIEUTENANT", // 6001-7500
  CAPTAIN = "CAPTAIN", // 7501-8500
  ELITE = "ELITE", // 8501-9000
  LEGENDARY = "LEGENDARY", // 9001+
}

class TierAnalyzer {
  static getTier(powerLevel: number): PowerTier {
    // TODO: 実装
  }

  static getTierDistribution(
    zanpakutos: Zanpakuto[],
  ): Record<PowerTier, number> {
    // TODO: 実装
  }
}
```

### ボーナス 4: 複雑な検索とソート

```typescript
type SortField = keyof Pick<Zanpakuto, "name" | "owner" | "powerLevel">;
type SortOrder = "asc" | "desc";

interface SearchOptions extends SearchFilters {
  sortBy?: SortField;
  sortOrder?: SortOrder;
  limit?: number;
  offset?: number;
}

class AdvancedSearch {
  static search(zanpakutos: Zanpakuto[], options: SearchOptions): Zanpakuto[] {
    // TODO: フィルタリング、ソート、ページネーション実装
  }
}
```

### ボーナス 5: Type Guards と Conditional Types

```typescript
// 卍解を持つ斬魄刀の型
type ZanpakutoWithBankai = Zanpakuto & { bankai: string };

// 型による条件分岐
type ZanpakutoDetails<T extends Zanpakuto> = T extends ZanpakutoWithBankai
  ? { hasBankai: true; bankaiName: string }
  : { hasBankai: false; bankaiName: null };

class TypeGuards {
  static hasBankai(zanpakuto: Zanpakuto): zanpakuto is ZanpakutoWithBankai {
    // TODO: 実装
  }

  static getDetails<T extends Zanpakuto>(zanpakuto: T): ZanpakutoDetails<T> {
    // TODO: 実装
  }
}
```

---

## 評価基準

- **基本課題 (50 点)**: ZanpakutoManager と ZanpakutoFormatter クラスの実装
- **ボーナス課題 (各 10 点)**: 最大 50 点のボーナス

### 実行確認

`npm run lesson2` でテストを実行し、すべてのテストが通ることを確認してください。

---
