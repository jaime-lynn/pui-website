---
title: Errors
weight: 3
---

There are time you just want a small reflection of a greater state; good, bad, indifferent. More on the SPA/SWA side of development, we found use for small indications of that greater state and made it easier to leverage in Platform UI. 

`positive`, `negative`, and `neutral` became a simple language to convey these states. They currently affect [pills](/docs/components/pills/), [text](link here), and [backgrounds](link here), and may make their way further into our framework in the future. 

## Text

<p class="text--positive">Positive</p>
<p class="text--negative">Negative</p>
<p class="text--neutral">Neutral</p>

{{< highlight html >}}
<p class="text--positive">Positive</p>
<p class="text--negative">Negative</p>
<p class="text--neutral">Neutral</p>
{{< /highlight >}}

## Pills

<div class="pill pill--circle-empty positive"></div>
<div class="pill pill--circle-empty negative"></div>
<div class="pill pill--circle-empty neutral"></div>
<div class="pill pill--circle-empty-dot positive"></div>
<div class="pill pill--circle-empty-dot negative"></div>
<div class="pill pill--circle-empty-dot neutral"></div>

<div class="pill positive">
Positive
</div>

<div class="pill negative">
Negative
</div>

<div class="pill neutral">
Neutral
</div>

{{< highlight html >}}

<div class="pill pill--circle-empty positive"></div>
<div class="pill pill--circle-empty negative"></div>
<div class="pill pill--circle-empty neutral"></div>
<div class="pill pill--circle-empty-dot positive"></div>
<div class="pill pill--circle-empty-dot negative"></div>
<div class="pill pill--circle-empty-dot neutral"></div>

<div class="pill positive">
Positive
</div>

<div class="pill negative">
Negative
</div>

<div class="pill neutral">
Neutral
</div>

{{< /highlight >}}