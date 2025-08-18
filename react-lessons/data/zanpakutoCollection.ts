export interface Zanpakuto {
  name: string;
  owner: string;
  type: "melee" | "kido" | "elemental" | "illusion";
  bankai?: string;
  shikaiAbility: string;
  powerLevel: number;
  isReleased: boolean;
}

export const zanpakutoCollection: Zanpakuto[] = [
  {
    name: "Zangetsu",
    owner: "Kurosaki Ichigo",
    type: "melee",
    bankai: "Tensa Zangetsu",
    shikaiAbility: "Getsuga Tensho",
    powerLevel: 8500,
    isReleased: true,
  },
  {
    name: "Hyorinmaru",
    owner: "Hitsugaya Toshiro",
    type: "elemental",
    bankai: "Daiguren Hyorinmaru",
    shikaiAbility: "Ice and water manipulation",
    powerLevel: 8200,
    isReleased: false,
  },
  {
    name: "Kyoka Suigetsu",
    owner: "Aizen Sosuke",
    type: "illusion",
    bankai: "Complete Hypnosis",
    shikaiAbility: "Perfect illusion control",
    powerLevel: 9200,
    isReleased: true,
  },
  {
    name: "Ryujin Jakka",
    owner: "Yamamoto Genryusai",
    type: "elemental",
    bankai: "Zanka no Tachi",
    shikaiAbility: "Flame manipulation",
    powerLevel: 9500,
    isReleased: false,
  },
  {
    name: "Senbonzakura",
    owner: "Kuchiki Byakuya",
    type: "melee",
    bankai: "Senbonzakura Kageyoshi",
    shikaiAbility: "Petal blade barrage",
    powerLevel: 8300,
    isReleased: true,
  },
  {
    name: "Zabimaru",
    owner: "Abarai Renji",
    type: "melee",
    bankai: "Hihio Zabimaru",
    shikaiAbility: "Segmented whip sword",
    powerLevel: 7200,
    isReleased: false,
  },
  {
    name: "Sode no Shirayuki",
    owner: "Kuchiki Rukia",
    type: "elemental",
    bankai: "Hakka no Togame",
    shikaiAbility: "Ice-snow abilities",
    powerLevel: 7500,
    isReleased: true,
  },
  {
    name: "Wabisuke",
    owner: "Kira Izuru",
    type: "kido",
    shikaiAbility: "Weight doubling",
    powerLevel: 6500,
    isReleased: false,
  },
  {
    name: "Suzumebachi",
    owner: "Soi Fon",
    type: "melee",
    bankai: "Jakuho Raikoben",
    shikaiAbility: "Two-hit kill",
    powerLevel: 7800,
    isReleased: true,
  },
  {
    name: "Haineko",
    owner: "Matsumoto Rangiku",
    type: "kido",
    shikaiAbility: "Ash transformation",
    powerLevel: 7000,
    isReleased: false,
  },
];
