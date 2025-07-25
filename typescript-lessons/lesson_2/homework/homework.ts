import {
  type Zanpakuto,
  zanpakutoCollection,
} from "../../lesson_1/homework/data";

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

class ZanpakutoManager {
  private zanpakutos: Zanpakuto[] = [];

  constructor(initialData?: Zanpakuto[]) {
    // TODO: 実装
    throw new Error("Not implemented");
  }

  // 斬魄刀を追加
  add(zanpakuto: Zanpakuto): void {
    // TODO: 実装
    throw new Error("Not implemented");
  }

  // 条件で検索
  search(filters: SearchFilters): Zanpakuto[] {
    // TODO: 実装
    throw new Error("Not implemented");
  }

  // 統計情報を取得
  getStats(): ZanpakutoStats {
    // TODO: 実装
    throw new Error("Not implemented");
  }

  // 全データを取得
  getAll(): Zanpakuto[] {
    // TODO: 実装（防御的コピー）
    throw new Error("Not implemented");
  }

  // パワーレベルで更新
  updatePowerLevel(name: string, newPowerLevel: number): boolean {
    // TODO: 実装
    // 戻り値: 更新成功時 true、対象が見つからない場合 false
    throw new Error("Not implemented");
  }
}

class ZanpakutoFormatter {
  static formatBasic(zanpakuto: Zanpakuto): string {
    // TODO: 実装
    // 例: "Zangetsu (Kurosaki Ichigo) - Melee Type [Released]"
    throw new Error("Not implemented");
  }

  static formatDetailed(zanpakuto: Zanpakuto): string {
    // TODO: 実装
    // 例: "Zangetsu (Kurosaki Ichigo) - Melee [Released] - Power: 8500 - Bankai: Tensa Zangetsu"
    throw new Error("Not implemented");
  }

  static formatStats(stats: ZanpakutoStats): string {
    // TODO: 実装
    // 例: "Total: 10 | Melee: 4, Kido: 2, Elemental: 3, Illusion: 1 | Avg Power: 7850 | Released: 5/10 | Bankai: 8/10"
    throw new Error("Not implemented");
  }
}

// テストコード
console.log("=== 斬魄刀管理システム改良版テスト ===");

const manager = new ZanpakutoManager(zanpakutoCollection);

// 基本機能テスト
console.log("基本機能テスト:");
const allZanpakutos = manager.getAll();
console.assert(allZanpakutos.length === 10, "Initial data load failed");

// 検索機能テスト
console.log("検索機能テスト:");
const meleeZanpakutos = manager.search({ type: "melee" });
console.assert(meleeZanpakutos.length === 4, "Melee search failed");

const strongZanpakutos = manager.search({ minPowerLevel: 8000 });
console.assert(strongZanpakutos.length === 5, "Power level search failed");

const bankaiZanpakutos = manager.search({ hasBankai: true });
console.assert(bankaiZanpakutos.length === 8, "Bankai search failed");

// 統計テスト
console.log("統計テスト:");
const stats = manager.getStats();
console.assert(stats.total === 10, "Stats total incorrect");
console.assert(stats.byType.melee === 4, "Stats type count incorrect");
console.assert(
  Math.abs(stats.averagePowerLevel - 7970) < 50,
  "Stats average incorrect",
);

// 更新テスト
console.log("更新テスト:");
const updateSuccess = manager.updatePowerLevel("Zangetsu", 9000);
console.assert(updateSuccess === true, "Update should succeed");
const updateFail = manager.updatePowerLevel("NonExistent", 1000);
console.assert(updateFail === false, "Update should fail for non-existent");

// フォーマッターテスト
console.log("フォーマッターテスト:");
const formatted = ZanpakutoFormatter.formatBasic(zanpakutoCollection[0]);
console.assert(formatted.includes("Zangetsu"), "Basic format test failed");

console.log("=== テスト完了 ===");

// 実行例
console.log("\n=== 実行例 ===");
console.log("統計情報:");
console.log(ZanpakutoFormatter.formatStats(manager.getStats()));

console.log("\n強力な斬魄刀 (8000以上):");
manager
  .search({ minPowerLevel: 8000 })
  .forEach((z) => console.log(ZanpakutoFormatter.formatDetailed(z)));

console.log("\n解放済みの斬魄刀:");
manager
  .search({ isReleased: true })
  .forEach((z) => console.log(ZanpakutoFormatter.formatBasic(z)));
