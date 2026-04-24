---
title: "NN/g 最新研究：使用者如何判斷 AI 回答的可信度"
excerpt: "結論之一：使用者不需要 AI 永遠正確，他們需要的是「看得見的不確定性」——當介面誠實呈現信心區間與資料來源，採納率反而上升 34%。"
category: "研究"
publishedAt: 2026-04-21
readingMinutes: 10
sourceName: "Nielsen Norman Group"
sources:
  - title: "Users' Trust in AI Responses: A 2026 Usability Study"
    url: "https://www.nngroup.com/articles/"
    publisher: "Nielsen Norman Group"
    date: "2026 / 04 / 19"
  - title: "Designing for Calibrated Trust"
    url: "https://www.nngroup.com/videos/"
    publisher: "NN/g Training"
    date: "2026 / 04 / 20"
---

Nielsen Norman Group 剛釋出 2026 年第一份關於 AI 介面信任感的大型可用性研究。研究追蹤了 480 位使用者在 12 種不同 AI 產品（從 ChatGPT、Perplexity 到企業內部 RAG 系統）上的行為，提煉出三個對設計師與 PM 都非常重要的結論。

## 01　使用者並不期待 AI 永遠正確

過去一年產業的共識是「AI 不能犯錯」，但研究結果顯示，使用者對 AI 的錯誤容忍度，其實比對搜尋引擎還高——**前提是介面誠實**。

當 AI 同時呈現答案、信心區間、以及資料來源時，使用者對錯誤答案的不滿度會下降 58%，並且更願意在下次繼續使用同一個產品。

## 02　「看得見的不確定性」是新的設計語彙

研究團隊稱這個概念為 *calibrated confidence*——刻意設計讓 AI 的不確定程度「能被看到」。具體的介面手法包括：

- 對關鍵數字標記信心區間（例如「約 18-22%」而非「20%」）
- 對引用來源做可信度分層（學術文獻 vs 社交媒體）
- 在答案下方直接列出「AI 不確定的部分」

當介面做了這些事，使用者對 AI 回答的**採納率反而上升了 34%**——這是一個反直覺但非常重要的發現。

## 03　資料來源連結是最小可行的信任基建

最值得記住的單一建議：在 AI 介面上，**每一個可驗證的事實都應該連結到可點擊的原始來源**。研究中 89% 的使用者在看到可點擊的來源時會點進去至少一次；而其中 62% 在點進去一次之後就不再需要繼續點——因為知道能驗證本身就形成了信任。

> 使用者不是在尋找正確的 AI，他們在尋找誠實的 AI。
> <cite>— Jakob Nielsen, NN/g</cite>

完整報告 52 頁，建議設計師與 PM 都至少讀完前三節。
