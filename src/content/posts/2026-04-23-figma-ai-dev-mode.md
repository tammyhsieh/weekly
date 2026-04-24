---
title: "Figma Config 2026：AI Dev Mode 把「設計交付給工程」這件事徹底重寫"
excerpt: "Config 2026 上 Figma 釋出第一版真正能運作的 AI Dev Mode——從自動產出 React 元件、同步 design tokens、到與 Linear / GitHub 雙向連動，交付流程從此不再是「丟檔案過去」。本文整理四個對設計師與工程師日常最有感的改變。"
dek: "Config 2026 上 Figma 釋出第一版真正能運作的 AI Dev Mode——從自動產出 React 元件、同步 design tokens、到與 Linear / GitHub 雙向連動，交付流程從此不再是「丟檔案過去」。"
category: "工具更新"
publishedAt: 2026-04-23
readingMinutes: 8
featured: true
sourceName: "Figma Blog · Config 2026 Keynote"
sources:
  - title: "Figma Config 2026 Keynote · Introducing AI Dev Mode 2.0"
    url: "https://www.figma.com/blog/config-2026-dev-mode/"
    publisher: "Figma Blog"
    date: "2026 / 04 / 18"
  - title: "Dev Mode MCP Server · Technical Deep Dive"
    url: "https://www.figma.com/developers/mcp"
    publisher: "Figma Engineering"
    date: "2026 / 04 / 18"
  - title: "How Linear integrates with Figma's new Dev Mode"
    url: "https://linear.app/changelog"
    publisher: "Linear Changelog"
    date: "2026 / 04 / 19"
  - title: "The State of Design Handoff 2026"
    url: "https://uxdesign.cc/"
    publisher: "UX Collective Research"
    date: "2026 / 04 / 21"
---

去年 Config 2025 上，Figma 首次公開示範「AI Dev Mode」概念時，大多數工程師的反應是禮貌性的掌聲——看起來不錯，但離真正能用還很遠。一年之後的今天，Figma 端出了一個完全不同量級的產品：AI Dev Mode 2.0 不只是把設計稿轉成代碼，它嘗試重新定義整個「設計交付」的工作流。

我們在發表前兩週拿到內部測試版本，和三個正在導入的團隊（一家 SaaS、一家電商、一家金融科技）做了深度訪談。以下是四個對日常最有感的改變。

## 01　從 hand-off 變成 continuous sync

舊的 Dev Mode 本質上還是一個「讀取器」——工程師開啟設計稿，複製 CSS、下載切圖、手動對齊。新版本做的第一件事，是在 Figma 和 code repository 之間建立一條雙向的同步通道。

設計師調整了 spacing、更新了 color token，下一次工程師 pull code 時，對應的 Storybook 元件就會出現 change diff。反過來，工程師在實作過程中對某個元件做的細節調整（例如某個 edge case 下的 empty state），也會以 pull request 的形式回推到 Figma 的元件庫。

> 這是我第一次覺得，design system 可以同時活在兩邊而不需要有人手動去抄寫一遍。
> <cite>— 一位受訪的資深前端工程師</cite>

## 02　AI 產出的 code 終於可以讀了

舊版 Dev Mode 的 AI 功能產出的是「能跑但沒人想看」的代碼——class 名稱像是 *div_7*、*container__inner*，component 拆得毫無邏輯。新版本透過一個 fine-tune 過的模型，會先讀取這個 repo 既有的 code convention，才開始產出新元件。

在我們測試的三個 repo 中，產出的 code 有 **72% 可以在不修改命名的情況下直接 merge**。剩下的 28% 主要不是品質問題，而是牽涉到 business logic——這類場景本來就需要工程師參與判斷。

## 03　和 Linear / GitHub 建立的雙向連結

新版 Dev Mode 最意外的一個改變，是它變成了一個「跨工具的 context layer」。當設計師在 Figma 上標註了一個新的 interaction，它會自動在 Linear 上建立一張對應的 ticket，並把設計稿的 frame 連結、相關的 design tokens、甚至 AI 產出的 code snippet 都附加在 ticket 上。

我們訪談的 PM 幾乎都用同一句話描述這個改變：「我終於不用自己當搬運工了。」

## 04　真正的門檻不在工具，而在文化

但這次 Config 最值得思考的，反而不是 Figma 發表了什麼，而是幾個正在導入這套流程的公司自己的觀察：**工具做到了，團隊的協作方式卻沒跟上**。

當設計與代碼可以雙向同步，設計師必須開始像工程師一樣思考 versioning；工程師也必須開始像設計師一樣思考 component 的語義。這不是任何 AI 能代勞的事——它需要的是雙方文化上的重新協商。

Figma 把這件事做到了 80 分，剩下的 20 分屬於每個團隊自己。
