# Lede · 設計與產品週刊

每週一篇，為 UIUX 設計師、產品設計師與 PM 精選的設計與產品新消息。

---

## 檔案結構

```
weekly/
├── src/
│   ├── content/posts/       ← 每篇文章的 Markdown（這是你主要會編輯的地方）
│   ├── pages/               ← 頁面模板
│   ├── components/          ← 可重用元件
│   ├── layouts/             ← 版面
│   └── styles/global.css    ← 所有樣式
├── dist/                    ← 打包後的靜態網站（自動產生，不用手改）
├── astro.config.mjs
├── package.json
└── README.md                ← 你正在看的檔案
```

---

## 本機預覽

想在你的電腦上跑起來？需要先安裝 Node.js (v20+)。

```bash
cd weekly
npm install
npm run dev
```

開啟 `http://localhost:4321` 就能看到網站。每改一個檔案會自動重新整理。

打包成正式版本：

```bash
npm run build
```

產出會在 `dist/` 資料夾。

---

## 部署到 Cloudflare Pages（推薦，完全免費）

步驟雖然多，但一次設定好之後，之後每週新增文章只要 git push 一下就自動上線。

### 第一步：建 GitHub 帳號與 repo（如果還沒有的話）

1. 到 [github.com](https://github.com) 註冊帳號
2. 點右上角 **+** → **New repository**
3. Repository name 填 `weekly`，其他保持預設，點 **Create repository**
4. 建好之後你會看到一頁指令——先放著不管

### 第二步：把這個專案推到 GitHub

在電腦上打開終端機，`cd` 到這個專案資料夾，然後：

```bash
git init
git add .
git commit -m "Initial commit: Lede"
git branch -M main
git remote add origin https://github.com/tammyhsieh/weekly.git
git push -u origin main
```

### 第三步：連接 Cloudflare Pages

1. 到 [dash.cloudflare.com](https://dash.cloudflare.com) 註冊或登入
2. 左邊選單點 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. 授權 Cloudflare 讀取你的 GitHub，選擇剛才建的 `weekly` repo
4. Build 設定：
   - **Framework preset**: `Astro`（Cloudflare 會自動偵測）
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. 點 **Save and Deploy**

大約 1-2 分鐘後，網站就會上線在 `https://weekly-xxx.pages.dev`。

### 第四步（可選）：接自己的網域

在 Cloudflare Pages 的專案頁面 → **Custom domains** → 照指示把你買的網域 CNAME 過來。

---

## 新增一篇文章

1. 在 `src/content/posts/` 建一個新的 `.md` 檔案，檔名格式 `YYYY-MM-DD-slug.md`
2. 套用 frontmatter 格式（參考既有文章的第一段 YAML）：

   ```yaml
   ---
   title: "文章標題"
   excerpt: "一段摘要，顯示在首頁卡片"
   dek: "文章頁副標題（可省略）"
   category: "工具更新"  # 設計 | 產品策略 | 產品 | 工具更新 | 工具 | 研究
   publishedAt: 2026-05-01
   readingMinutes: 8
   featured: true  # 只有當週的一篇設為 true，會自動放上 hero
   sourceName: "資料來源名"
   sources:
     - title: "原文標題"
       url: "https://..."
       publisher: "發布平台"
       date: "2026 / 05 / 01"
   ---
   ```

3. frontmatter 下面寫內文，用 Markdown 格式
4. `git add . && git commit -m "New post" && git push`
5. Cloudflare 自動部署

---

## 每週自動化

Cowork 裡已經（或即將）設定一個 scheduled task，每週一早上會自動：

1. 搜尋當週的設計與產品新聞（Product Hunt、Lenny's Newsletter、Smashing、UX Collective 等）
2. 挑出最值得寫的一則
3. 產出 Markdown 草稿存到 `weekly-drafts/` 資料夾
4. 通知你去 review

你看過、改過、滿意了，再跟我說「發佈這篇」，我就會把檔案移到 `src/content/posts/`、推上 GitHub、Cloudflare 自動上線。

---

## 分類

目前支援六個分類：
- **設計** — UI/UX 設計方法、design system、視覺趨勢
- **產品策略** — PM 思維、策略觀點、組織與流程
- **產品** — 具體產品發佈、數據、案例
- **工具更新** — Figma、Linear、Notion 等工具的大改版
- **工具** — 工具推薦、使用心得
- **研究** — 學術、NN/g、Reforge 等研究報告
