# 宿題: 斬魄刀コレクション管理システム

## 課題概要

斬魄刀のデータを管理・分析するシステムを作成してください。

### 斬魄刀オブジェクトの型定義

```typescript
interface Zanpakuto {
  name: string;
  owner: string;
  type: "melee" | "kido" | "elemental" | "illusion";
  bankai?: string; // 卍解が判明していない場合は undefined
  shikaiAbility: string;
  powerLevel: number;
  isReleased: boolean;
}
```

### 実装する関数

#### 1. formatZanpakuto

斬魄刀の情報を読みやすい形式でフォーマットします。

```typescript
function formatZanpakuto(zanpakuto: Zanpakuto): string;
```

**出力例:**

- `"Zangetsu (Kurosaki Ichigo) - Melee Type [Released]"`
- `"Hyorinmaru (Hitsugaya Toshiro) - Elemental Type [Sealed]"`

#### 2. filterByType

指定した型の斬魄刀をフィルタリングします。

```typescript
function filterByType(
  zanpakutos: Zanpakuto[],
  targetType: Zanpakuto["type"],
): Zanpakuto[];
```

#### 3. hasBankai (type guard)

斬魄刀が卍解を持っているかどうかを判定し、型を絞り込みます。

```typescript
function hasBankai(
  zanpakuto: Zanpakuto,
): zanpakuto is Zanpakuto & { bankai: string };
```

#### 4. getRankings

霊圧レベルで斬魄刀をランク付けし、上位 N 位を返します。

```typescript
function getRankings(zanpakutos: Zanpakuto[], topN: number): string[];
```

**出力例:**

```
1位: Ryujin Jakka (Yamamoto Genryusai) - 9500
2位: Kyoka Suigetsu (Aizen Sosuke) - 9200
```

### データ

提供されている `zanpakutoCollection` 配列を使用してください（この配列は [`data.ts`](/typescript-lessons/lesson_1/homework/data.ts) に定義されています）。

### テスト

`npm run lesson1` でテストが実行され、すべての関数が正しく動作することを確認してください。
