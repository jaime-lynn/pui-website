---
title: Accordion
skellyCSS: true
toc: false
---
<div class="mb-4">
{{% requires-js %}} {{% requires-icons %}}
</div>

Leverage spacing utility classes for padding and margin for the content within the accordion.
To show the content of the accordion, toggle the class `active` on `accordion`. These accordions are also keyboard accessible.

Platform UI accordions were designed to be stacked.

{{< code-demo >}}
<div class="accordion">
  <a href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center">
    <span class="skeleton skeleton--sm mb-0 mr-2" data-color="orchid" data-opacity="0.5"></span>
    <i class="pi-angle-down accordion__icon text--med-blue"></i>
  </a>
  <div class="accordion__content px-3 py-3">
    <p class="skeleton" data-lines="6" data-color="orchid" data-opacity="0.5"></p>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="accordion">
  <a href="#" class="accordion__header">
    <!-- Accordion header goes here! -->
  </a>
  <div class="accordion__content">
    <!-- Accordion content goes here! -->
  </div>
</div>
{{< /highlight >}} 
{{< /code-markup >}}

{{< callout tipHeader="Accordion Tip">}} 

<p>Accordions can also be nested! You can see this in action on the <a href="/launch-pad/components/#nested">examples</a> page.</p>

{{< /callout >}}