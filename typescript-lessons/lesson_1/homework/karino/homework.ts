import { type Zanpakuto, zanpakutoCollection } from "../data";

// ここに関数を実装してください

// 1. formatZanpakuto
function formatZanpakuto(zanpakuto: Zanpakuto): string {
  // フォーマットされた文字列を返す
  // 例: "Zangetsu (Kurosaki Ichigo) - Melee Type [Released]"
  return `${zanpakuto.name} (${zanpakuto.owner}) - ${
    zanpakuto.type.charAt(0).toUpperCase() + zanpakuto.type.slice(1)
  } Type [${zanpakuto.isReleased ? "Released" : "Sealed"}]`;
}

// 2. filterByType
function filterByType(
  zanpakutos: Zanpakuto[],
  targetType: Zanpakuto["type"]
): Zanpakuto[] {
  // 指定されたタイプの斬魄刀をフィルタリングして返す
  return zanpakutos.filter((zanpakuto) => zanpakuto.type === targetType);
}

// 3. hasBankai (type guard)
function hasBankai(
  zanpakuto: Zanpakuto
): zanpakuto is Zanpakuto & { bankai: string } {
  // 卍解を持っているかどうかをチェック
  return zanpakuto.bankai !== undefined && zanpakuto.bankai !== "";
}

// 4. getRankings
function getRankings(zanpakutos: Zanpakuto[], topN: number): string[] {
  // powerLevelでソートして、上位N件の斬魄刀をフォーマットして返す
  return [...zanpakutos]
    .sort(
      (zanpakutoA, zanpakutoB) => zanpakutoB.powerLevel - zanpakutoA.powerLevel
    )
    .slice(0, topN)
    .map(
      (zanpakuto) =>
        `${zanpakuto.name} (${zanpakuto.owner}) - Power Level: ${zanpakuto.powerLevel} - Type: ${zanpakuto.type}`
    );
}

// テスト
console.log("=== テスト開始 ===");

// formatZanpakuto テスト
console.log("formatZanpakuto テスト:");
console.assert(
  formatZanpakuto(zanpakutoCollection[0]) ===
    "Zangetsu (Kurosaki Ichigo) - Melee Type [Released]",
  "formatZanpakuto failed for released zanpakuto"
);
console.assert(
  formatZanpakuto(zanpakutoCollection[1]) ===
    "Hyorinmaru (Hitsugaya Toshiro) - Elemental Type [Sealed]",
  "formatZanpakuto failed for sealed zanpakuto"
);

// filterByType テスト
console.log("filterByType テスト:");
const meleeZanpakutos = filterByType(zanpakutoCollection, "melee");
console.assert(
  meleeZanpakutos.length === 4,
  "filterByType melee count incorrect"
);
console.assert(
  meleeZanpakutos.every((z) => z.type === "melee"),
  "filterByType melee filter incorrect"
);

// hasBankai テスト
console.log("hasBankai テスト:");
console.assert(
  hasBankai(zanpakutoCollection[0]) === true,
  "hasBankai should return true for Zangetsu"
);
console.assert(
  hasBankai(zanpakutoCollection[9]) === false,
  "hasBankai should return false for Haineko"
);

// getRankings テスト
console.log("getRankings テスト:");
const top3 = getRankings(zanpakutoCollection, 3);
console.assert(top3.length === 3, "getRankings should return exactly 3 items");
console.assert(
  top3[0].includes("Ryujin Jakka"),
  "Top ranked should be Ryujin Jakka"
);
console.assert(
  top3[0].includes("9500"),
  "Top ranked should show power level 9500"
);

console.log("=== テスト完了 ===");
console.log("すべてのテストが通った場合、エラーメッセージは表示されません");

// 実行例
console.log("\n=== 実行例 ===");
console.log("全斬魄刀:");
zanpakutoCollection.forEach((z) => console.log(formatZanpakuto(z)));

console.log("\n卍解持ち:");
zanpakutoCollection
  .filter(hasBankai)
  .forEach((z) => console.log(`${z.name} - ${z.bankai}`));

console.log("\nTop 5 Rankings:");
getRankings(zanpakutoCollection, 5).forEach((ranking) => console.log(ranking));
