---
title: Drawer
skellyCSS: true
toc: false
---
<div class="mb-4">
{{% requires-js %}}
</div>

Drawers are Platform UI elements that hide content off-screen until called upon, at which point they are attached to one side of the viewport.

{{< code-demo >}}
<div class="block-container mt-3">
  <button class="button drawer__open" data-drawer="default">
    Toggle default drawer
  </button>
</div>
<div id="default" class="drawer drawer--closed">
  <div class="drawer__inner">
   <div class="drawer__content">
      <div class="flex flex--justify-end mb-3">
        <button class="button drawer__close" data-drawer="default">
          Close 
          <i class="pi-times" aria-hidden="true"></i>
        </button>
      </div>
      <h2 class="skeleton skeleton--lg"></h2>
      <p class="skeleton" data-lines="5"></p>
      <p class="skeleton" data-lines="3"></p>
      <p class="skeleton" data-lines="6"></p>
    </div>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button drawer__open" data-drawer="default">
  Toggle default drawer
</button>
<!-- Default Drawer -->
<div class="drawer drawer--closed">
  <div class="drawer__inner">
    <div class="drawer__header">
      <button class="button drawer__close" data-drawer="default">
        Close 
        <i class="pi-times" aria-hidden="true"></i>
      </button>
      <!-- Drawer header goes here! -->
    </div>
    <div class="drawer__content">
      <!-- Drawer content goes here! -->
    </div>
  </div>
</div>
{{< /highlight >}}
{{< /code-markup >}}

{{< modifiers >}}
<tr>
  <td data-label="Base">
    <code>drawer</code>
  </td>
  <td data-label="Modifier">
    <code>drawer-{direction}</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <code>data-drawer</code>
  </td>
  <td data-label="Behavior">
    Drawer opens from the provided direction - available options are top, bottom, left, right
    <br>
    Side drawers (left and right) do not occupy the entire viewport
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>drawer</code>
  </td>
  <td data-label="Modifier">
    <code>drawer--single-row</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <code>data-drawer</code>
  </td>
  <td data-label="Behavior">
    A small sized drawer
  </td>
</tr>
{{< /modifiers >}}

{{< callout tipHeader="Drawer Tip" >}}
  <p>If the <code>header-fixed</code> class is added to the main wrapper, the side drawers will open below the header.</p>
{{< /callout >}}