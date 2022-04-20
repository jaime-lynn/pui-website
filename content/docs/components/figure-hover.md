---
title: Figure Hover
skellyCSS: true
toc: false
---

To hide and show the figcaption on hover, you can add the class `figure-hover` to a `<figure>`.

{{< code-demo >}}
<div class="block-container">
    <figure class="figure-hover block laptop-up-6">
        <img class="skeleton-image skeleton-image--full skeleton-image--landscape">
        <figcaption>Figcaption goes here.</figcaption>
    </figure>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<figure class="figure-hover">
    <img src="..." alt="Figcaption goes here.">
    <figcaption>Figcaption goes here.</figcaption>
</figure>
{{< /highlight >}}
{{< /code-markup >}}