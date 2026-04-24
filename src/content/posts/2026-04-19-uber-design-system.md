---
title: "從 Uber 第六次改版看企業級 Design System 的世代交替"
excerpt: "Uber 公開了最新設計系統「Base v6」的重構紀錄——1,200 個 token 減到 340 個，元件庫從 React 搬到跨平台渲染層。大型組織如何讓設計系統自己演化。"
category: "設計"
publishedAt: 2026-04-19
readingMinutes: 15
sourceName: "UX Collective"
sources:
  - title: "Base v6 · How Uber rebuilt its design system from the ground up"
    url: "https://uxdesign.cc/base-v6"
    publisher: "UX Collective"
    date: "2026 / 04 / 15"
  - title: "The Evolution of Uber Base"
    url: "https://base.uber.com/"
    publisher: "Uber Base"
    date: "2026 / 04 / 15"
---

Uber 在內部部落格公開了最新設計系統「Base v6」的重構紀錄。這已經是 Base 的第六次大改版，從 2017 年第一版到今天，它的演變路徑幾乎就是一部「企業級 design system 發展史」。

## 一個反直覺的數字：token 從 1,200 減到 340

舊版 Base v5 累積了 **1,200 個 design tokens**——這在大型組織裡是常態，因為每個子產品、每次活動、每個 edge case 都會貢獻一些新的 token。到最後誰也不敢刪。

v6 的第一個改變是把這 1,200 個 token **重新分層歸納成 340 個**。方法不是暴力刪除，而是定義了三層架構：*primitive → semantic → component*。底層原子只有 40 個，其上的 semantic tokens 才是設計師日常會碰到的。

結果：同一組視覺效果在 iOS、Android、Web 上第一次真正做到像素級一致。

## 元件庫從 React 搬到「跨平台渲染層」

更激進的一個決定是元件的實作層。過去 Base 的 React 元件、iOS Swift 元件、Android Compose 元件是三套獨立實作。v6 把這三套收斂到一個抽象層——所有元件先在一個叫 *Base Primitives* 的 DSL 裡定義，再由各平台的 renderer 轉譯成原生代碼。

這個做法在 Uber 這個規模的組織是值得的（團隊成員超過 5,000 人），但對中型團隊不見得適合。文章裡 Uber 的工程主管坦承：「我們花了 14 個月才讓這套東西穩定下來，這不是每家公司都負擔得起的投資。」

## 真正值得學的是「設計系統如何演化」

這篇文章最有價值的地方，不是那些酷炫的技術決策，而是 Uber 如何處理「舊系統怎麼遷移」這個問題。他們沒有搞 big-bang 遷移，而是設計了一個 codemod 工具，讓各個產品團隊可以漸進地升級——用了 9 個月，才讓 80% 的產品線完成遷移。

> Design system 不會死掉，只會慢慢被繞過去。讓遷移變簡單，比讓新系統變漂亮更重要。
> <cite>— Uber Base 核心團隊</cite>

如果你所在的組織正在考慮重構 design system，這篇 15 分鐘的長文值得讀完，並把裡面的遷移策略筆記下來。
