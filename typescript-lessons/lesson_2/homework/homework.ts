// JSONファイルからデータをインポート
import data from "./data.json";

// 型定義
interface BaseZanpakuto {
  name: string;
  owner: string;
  shikaiAbility: string;
  powerLevel: number;
  isReleased: boolean;
}

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

interface BankaiData {
  name: string;
  multiplier: number;
  specialAbility: string;
}

type CaptainZanpakuto<T extends Zanpakuto = Zanpakuto> = T & {
  bankai: BankaiData;
  rank: "captain" | "lieutenant" | "vice-captain";
};

// TODO: ZanpakutoRegistryクラスの実装
class ZanpakutoRegistry<T extends Zanpakuto = Zanpakuto> {
  private collection: Map<string, T>;

  constructor() {
    // TODO: collectionを初期化
  }

  register(zanpakuto: T): void {
    // TODO: 登録処理を実装
  }

  findByOwner(owner: string): T | undefined {
    // TODO: 所有者検索を実装
  }

  filterByType<K extends T["type"]>(type: K): Array<Extract<T, { type: K }>> {
    // TODO: 型ガード付きの型フィルタリングを実装
  }

  getStats(): {
    total: number;
    byType: Record<T["type"], number>;
    averagePower: number;
  } {
    // TODO: 統計計算を実装
  }
}

// TODO: 卍解の型ガードを実装
function hasBankai(zanpakuto: Zanpakuto): zanpakuto is CaptainZanpakuto {
  // TODO: 卍解チェックを実装
}

// TODO: 卍解戦闘力計算を実装
function calculateBankaiPower(zanpakuto: CaptainZanpakuto): number {
  // TODO: 卍解戦闘力を計算 (基本値 * 倍率)
}

// TODO: CaptainRegistryクラスの実装
class CaptainRegistry extends ZanpakutoRegistry<CaptainZanpakuto> {
  getPowerRankings(): Array<{
    owner: string;
    basePower: number;
    bankaiPower: number;
    rank: CaptainZanpakuto["rank"];
  }> {
    // TODO: 戦闘力ランキングを実装
  }

  getByRank<R extends CaptainZanpakuto["rank"]>(
    rank: R,
  ): Array<CaptainZanpakuto & { rank: R }> {
    // TODO: ランクフィルタリングを実装
  }
}

// TODO: 戦闘システムの実装（ボーナス点用）
interface BattleResult {
  winner: string;
  loser: string;
  damageDealt: number;
  rounds: number;
  usedBankai: boolean;
}

type BattleStrategy<T extends Zanpakuto> = {
  [K in T["type"]]: (attacker: Extract<T, { type: K }>, defender: T) => number;
};

class BattleSimulator {
  private strategies: BattleStrategy<Zanpakuto>;

  constructor(strategies: BattleStrategy<Zanpakuto>) {
    this.strategies = strategies;
  }

  simulate(
    zanpakuto1: Zanpakuto,
    zanpakuto2: Zanpakuto,
    options?: {
      allowBankai?: boolean;
      rounds?: number;
    },
  ): BattleResult {
    // TODO: 戦闘シミュレーションを実装
    throw new Error("Not implemented");
  }
}

// TODO: 分析用名前空間の実装（ボーナス点用）
type ZanpakutoStats = {
  [K in Zanpakuto["type"]]: {
    count: number;
    averagePower: number;
    topPerformer: string;
  };
};

namespace ZanpakutoAnalytics {
  export function analyzeByType(zanpakutos: Zanpakuto[]): ZanpakutoStats {
    // TODO: 型別分析を実装
    throw new Error("Not implemented");
  }

  export function findStrongest<T extends Zanpakuto["type"]>(
    zanpakutos: Zanpakuto[],
    type: T,
  ): Extract<Zanpakuto, { type: T }> | undefined {
    // TODO: 特定タイプの最強を検索
    throw new Error("Not implemented");
  }
}

// テストデータのセットアップ
const zanpakutos = data.zanpakutos as Zanpakuto[];
const captains = data.captains as CaptainZanpakuto[];

// レジストリの初期化
const registry = new ZanpakutoRegistry<Zanpakuto>();
const captainRegistry = new CaptainRegistry();

// 全斬魄刀を登録
zanpakutos.forEach((z) => registry.register(z));
captains.forEach((c) => captainRegistry.register(c));

// テスト
console.log("=== テスト開始 ===");

console.log("Test 1: Basic functionality");
const ichigo = registry.findByOwner("Kurosaki Ichigo");
console.assert(ichigo?.name === "Zangetsu", "Should find Ichigo's Zangetsu");
console.log("✓ Owner search works");

console.log("Test 2: Type filtering");
const meleeTypes = registry.filterByType("melee");
console.assert(meleeTypes.length === 3, "Should find 3 melee types");
console.assert(
  meleeTypes.every((z) => z.type === "melee"),
  "All should be melee type",
);
console.log("✓ Type filtering works");

console.log("Test 3: Statistics");
const stats = registry.getStats();
console.assert(stats.total === 11, "Should have 11 total zanpakutos");
console.assert(stats.byType.melee === 3, "Should have 3 melee types");
console.assert(stats.byType.elemental === 3, "Should have 3 elemental types");
console.assert(stats.byType.illusion === 2, "Should have 2 illusion types");
console.assert(stats.byType.kido === 3, "Should have 3 kido types");
console.log("✓ Statistics calculation works");

console.log("Test 4: Bankai system");
const yamamoto = captainRegistry.findByOwner("Yamamoto Genryusai");
console.assert(yamamoto !== undefined, "Should find Yamamoto");
console.assert(hasBankai(yamamoto), "Yamamoto should have bankai");

const regularIchigo = registry.findByOwner("Kurosaki Ichigo");
console.assert(
  !hasBankai(regularIchigo),
  "Regular Ichigo shouldn't have bankai",
);
console.log("✓ Bankai detection works");

console.log("Test 5: Bankai power calculation");
if (yamamoto && hasBankai(yamamoto)) {
  const bankaiPower = calculateBankaiPower(yamamoto);
  console.assert(
    bankaiPower === 9500 * 2.5,
    "Bankai power should be base * multiplier",
  );
  console.log("✓ Bankai power calculation works");
}

console.log("Test 6: Captain registry");
const captainStats = captainRegistry.getStats();
console.assert(
  captainStats.total === 6,
  "Should have 6 captain-level zanpakutos",
);

const rankings = captainRegistry.getPowerRankings();
console.assert(rankings.length === 6, "Should have 6 rankings");
console.assert(
  rankings[0].owner === "Yamamoto Genryusai",
  "Yamamoto should be strongest",
);
console.log("✓ Captain registry works");

console.log("Test 7: Rank filtering");
const captainRank = captainRegistry.getByRank("captain");
console.assert(captainRank.length === 4, "Should have 4 captains");
console.assert(
  captainRank.every((c) => c.rank === "captain"),
  "All should be captain rank",
);
console.log("✓ Rank filtering works");

console.log("=== All Tests Passed! ===");

console.log("\n=== Advanced Type Features Demo ===");

type ElementalZanpakutos = Extract<Zanpakuto, { type: "elemental" }>;
const elementalOnes = registry.filterByType("elemental");
console.log(`Found ${elementalOnes.length} elemental zanpakutos`);

type HasBankai<T> = T extends { bankai: any } ? T : never;
const withBankai: HasBankai<CaptainZanpakuto>[] = captains;
console.log(`${withBankai.length} zanpakutos have bankai`);

type PartialZanpakuto = Partial<Zanpakuto>;
type ZanpakutoNames = Pick<Zanpakuto, "name" | "owner">;
type WithoutPowerLevel = Omit<Zanpakuto, "powerLevel">;

console.log("✓ Advanced type features demonstrated");
