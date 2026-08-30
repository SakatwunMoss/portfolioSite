# GitHub Actions 用 Secrets 設定

`.env.local` と同じ値を GitHub リポジトリの Secrets に登録してください。

**Settings → Secrets and variables → Actions → New repository secret**

| Secret 名 | 設定値（.env.local と同じ） |
|-----------|----------------------------|
| `NEXT_PUBLIC_SITE_URL` | `https://sakatwun.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 測定ID |
| `NEXT_PUBLIC_X_URL` | `https://x.com/sakatwun` |
| `CLOUDFLARE_API_TOKEN` | Workers 編集権限の API トークン |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare アカウント ID |

`NEXT_PUBLIC_*` はビルド時に HTML に埋め込まれるため、ローカルの `.env.local` だけでは CI デプロイに反映されません。上記 Secrets の登録が必要です。
