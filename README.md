# Sakatwun Da Portfolio

個人ポートフォリオサイト。楽曲配信（nodee / LinkCore）と Web 制作実績を紹介します。

## 技術スタック

- Next.js (App Router) + TypeScript
- Tailwind CSS
- 静的エクスポート → Cloudflare Workers（Static Assets）

## セットアップ

```bash
npm install
cp .env.example .env.local
# .env.local を編集して環境変数を設定
npm run dev
```

## 環境変数

| 変数 | 説明 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 公開URL（OGP用） |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 測定ID（`G-XXXXXXXXXX`） |
| `NEXT_PUBLIC_X_URL` | X プロフィールURL |

## ビルド

```bash
npm run build
```

出力先: `out/`

## ローカルで Workers 配信を確認

```bash
npm run preview:worker
```

## 手動デプロイ（Cloudflare Workers Static Assets）

```bash
npm run deploy
```

初回は `npx wrangler login` で Cloudflare にログインしてください。

## GitHub Actions による自動デプロイ

`main` ブランチへの push で `.github/workflows/deploy.yml` が実行され、Workers にデプロイされます。

### 必要な GitHub Secrets

`.env.local` と同じ値を Secrets に登録してください。詳細は [`.github/DEPLOY.md`](.github/DEPLOY.md) を参照。

| Secret | 説明 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Workers デプロイ権限付き API トークン |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare アカウント ID |
| `NEXT_PUBLIC_SITE_URL` | `https://sakatwun.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 測定ID |
| `NEXT_PUBLIC_X_URL` | `https://x.com/sakatwun` |

### API トークンの作成

1. Cloudflare Dashboard → My Profile → API Tokens
2. 「Create Token」→ 「Edit Cloudflare Workers」テンプレートを使用
3. 対象アカウントを選択して発行

## カスタムドメイン

`wrangler.toml` に `sakatwun.com` / `www.sakatwun.com` を設定済みです。

1. お名前.com の NS を Cloudflare のものに変更
2. `npm run deploy` または `main` へ push
3. Cloudflare Dashboard → Workers & Pages → `sakatwun-portfolio` でドメインが Active になることを確認

## ページ構成

- `/` — Home（ヒーロー、Music/Works プレビュー）
- `/music/` — 配信楽曲7曲（nodee / LinkCore 埋め込みプレイヤー）
- `/works/` — Web制作実績3件
- `/about/` — プロフィール・スキル・X 連絡先
