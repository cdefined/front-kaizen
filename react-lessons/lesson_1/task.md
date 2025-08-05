# 課題 1：Props 付きのコンポーネント

## タスク

[Playground のリンク](https://reactplayground.vercel.app/#N4IgLgziBcBmCGAbCBTANCAbrK1QEsA7AExQA8A6AK1xHwFsAHAewCcwACAQUcY9lbN6HAOQUA9D0bUIZEQB1CDFuw4AlFPADGnAUNGtNOhUqZtOwDlsPwwKNc2acAvv0HCRNnQFpiQ8VqI+CiEYCaKWsyEEJyRofBEKKwcALwcfloArvQhYBQA5ihgAKKIKDmhAEIAngCSxAAUno5hAJQRUTEcgk6pVjZ2Dk4NcWAJhEnthD15hiRJDYoc6kZ51pp2peW5i4TLyxraeQDKYKz4OgCyzKRoS-uEmYiId3v7hzoU67YoWxVgDSkU2WU1aIAwUhkZBgdDMqg+uncBlWJmU5lEEhi1TKXwgEHCphUFg4AC94IRGPAANaZMDMADCzGeKB0+CiHFcemE8hAEmItngPIA3IpFLBMoRWeyAFrkyk0un0+CsRqWMkU6m05gc1ocYD3QxgTKsPYAHgAfKbxOaRYRnKKJmQiekUAgnroJVK9scmbS2YQGrr9W9DcazbKNQqGcriKS5Zq6SlgOr5VrGcyvQBtAAMAF1XNbbfbCOCQFicVo8TDS-yxjIYeRnXEuimEwymWUvX1M-dg-sOIR4DloBweRHCpBMjzXv3mAB3CasEc8gDSxuYEGp+A4tS0AAt8PlmNP7sswNVGChlyAcmUUCe3ssAEbkqkJa8AFRCm4446KECncFTw4CADzffAuCffAgnPa8AHF-0yfJ4A4L9oj3Y8gMfDgWDnJIABkUEwFBEBHAAOABWbNsxnfZ8AgDQyngVBiBHM5MnQe5nFovsHiHK9RxAAAJao2CIehlUA2jlnnRdryE-BJ2Q6oUI-DcD0EB9+3PS9rxI7Z4kQLT9hfQhwOvAARBJ8mNEIOBEsTCAk1gpOA0D8HAyDoMU6pr13FAOHJWM5x+ZIJKURgnlsf1jOWXCCKIkjyIAJmo6SOHoxjNBYkcEGQTi3m43tgMHYdBJXUS3w4Y5MkPRDYo4WSkmvLh8BJOyfQAql7yw7SLwEnloMQTIIBi3qTNfd9BMZJgyjseyL0IDd6Ia9zPKgmDfMEgAFJJYBZTghpG-0rCiM4mQa+LWEI4jSI4ABOVKaOAzL9OYlBWI4diCuWIq3l45ZSoGkA1GqTIqCIDgAClqTfBqmqXQSAE0hyHJxtQQ6Ywc3fAGp04H9P+JAGtM8zBIjKqltQ7QD1WsCEi8zbrwAMUQfiOHC-BIrZsAxvSq6bqSh6qOe7DXqYnL+CQVBaL+5YAYHfjr2OEInyiMkaVYQVxpkhdmvKzJ9w87cak1FS8f669bxQHr0tJqaeRVwg1cIDXjRQld4EKUT3LpjyGY2nzr12sZEA4J82dIcPlS1wpLvnBLbvIgBmNKXoYt7Je+2WeJKpXyfgKDnNc7CEZal8te3DRCAhi3dME63beA+38Hk-AD21WUi8kv31u82DBJV-J-g+jg5wPPgIDnNhiHjvDrsSu6AHYnvS8Xso+3LpZ+jlc+woHlZuAKqeODT4DBqlcZ1xq9cR1dDbAqvMkv7X0vxvSyiJozr5b+TYZQqmalkI5F7gHfuW0eT+W8BAJac5AqB15igCAc9E5CyXiLNeGcJaby+i5Hecs9R5zKjyAA6oXeiz8m6l1vteFc+AtY7hJMaEufV648kvn4UBEEEEQJACQlAh49ycD8JkCORB8goIXknDgAA2DB6csrvU+nlGWXE979gPoPTITCcgviNvDGhg9mDbmZlEOuwNG4k0mq3QSMMaQYXUAkKkzAnwhC4YzIOgkPzT28AeTgl9niSMFsvMiacxZYI3p9bOajir73zjyIS4wUDOIMXJQSlxbAAXoOjRxhB8geRYfsd+gkOGYXSmtMBTNBJcFArg8kEBYBsAkrzMx18BaLxHEvaiot+zryUVvfKOdFC5iFCAZwzggA)

- `<ZanpakutoCard>` コンポーネントを作成してください
- `zanpakuto` オブジェクトを Props として受け取り、以下のプロパティを表示してください：
  - `name`, `owner`, `type`, `bankai`, `shikaiAbility`, `powerLevel`, `isReleased`
- `bankai` は存在する場合のみ表示してください

```tsx
interface Zanpakuto {
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

export default function Solution() {
  return <ZanpakutoCard zanpakuto={zanpakutoCollection[0]} />;
}
```

## セットアップ手順

1. master ブランチに切り替え、更新を取得する

```bash
git switch master
git pull origin main
```

2. パッケージをインストールする

```bash
cd react-lessons/
npm install
```

3. 開発サーバーを起動する

```bash
npm run dev
```

4.  ブラウザで「[http://localhost:5173/](http://localhost:5173/)」を開く
