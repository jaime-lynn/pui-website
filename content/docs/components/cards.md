---
title: Cards
skellyCSS: true
---
<section class="mb-4">
Cards can be great for seperating blocks of content. A `card` comes standard with a white background, light grey border, and
some padding.

{{< code-demo >}}
<div class="block-container">
  <div class="block laptop-up-3">
    <div class="card">
      <div class="card__header">
        Card Header
        <button class="button">Button</button>
      </div>
      <div class="card__content">
        <p class="skeleton" data-lines="4"></p>
      </div>
    </div>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="card">
    <div class="card__header">
      <!-- Header goes here! -->
    </div>
    <div class="card__content">
        <!-- Content goes here! -->
    </div>
</div>
{{< /highlight >}} 
{{< /code-markup >}}

{{< callout tipHeader="Card Tip">}} 
  <p>By default a card will take up 100% of the width of it's parent. You can utilize <a class="text--navy text-underline--hover" href="../../layout/layout">Platform UI layout classes</a>, such as block-container and block, to adjust the card's size.</p>
{{< /callout >}}
</section>


<section>

## Image Card

Images can be placed at the top of cards. The `<img>` element gets the class `card__image` and is expected to be the first child element of the card.
When `rounded-` modifiers are used on the card, the image takes on the radius as well. Other modifiers can be used as needed.

{{< code-demo >}}
<div class="block-container">
  <div class="block laptop-up-3">
        <div class="card">
            <div class="card__image">
                <img class="skeleton-image skeleton-image--full skeleton-image--landscape" />
            </div>
            <div class="card__content">
                <h3 class="skeleton skeleton--md"></h3>
                <p class="skeleton" data-lines="4"></p>
            </div>
        </div>
    </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="card">
    <img class="card__image" src="..." alt="..." />
    <div class="card__content">
        <!-- Content goes here! -->
    </div>
</div>
{{< /highlight >}} 
{{< /code-markup >}}
</section>
