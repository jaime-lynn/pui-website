---
title: Buttons
---

Each button has a default button style. Color can be added to any button using a combination of background and text utilities.

The default platform button. Usually paired visually with an icon. Can be the default size or large.

{{< code-demo >}}
<button class="button">Basic Button</button>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button">Basic Button</button>
{{< /highlight >}} 
{{< /code-markup >}}

{{< modifiers >}}
<tr>
  <td data-label="Base">
    <code>button</code>
  </td>
  <td data-label="Modifier">
    <code>button--lg</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    A larger button than the standard
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>button</code>
  </td>
  <td data-label="Modifier">
    <code>button--secondary</code>
  </td>
  <td data-label="Secondary Modifier">
    <code>has-text</code>
  </td>
  <td data-label="Data Attribute">
    <code>data-button-text</code>
  </td>
  <td data-label="Behavior">
    A round button intended to be paired with an icon
    <br>
    Adding <code>has-text</code> and <code>data-button-text</code> will show the button text on hover
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>button</code>
  </td>
  <td data-label="Modifier">
    <code>button--plain</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Removes the border and background so the contents resemble a link (good for icons as buttons)
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>button</code>
  </td>
  <td data-label="Modifier">
    <code>button--{color}</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Gives the button one of the brand colors (LINK HERE)
  </td>
</tr>
<tr>
  <td data-label="Base">
    <code>button</code>
  </td>
  <td data-label="Modifier">
    <code>button--ghost</code>
  </td>
  <td data-label="Secondary Modifier">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Data Attribute">
    <i class="pi-ban" aria-hidden="true"></i>
  </td>
  <td data-label="Behavior">
    Sets the background to transparent
  </td>
</tr>
{{< /modifiers >}}

## Secondary

The secondary platform button. Always a round button paired with a <a href="/icons">Platform icon</a>. Can be the default size or large.

{{< code-demo >}}
<button class="button button--secondary"><i class="pi-download"></i></button>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<button class="button button--secondary"><i class="pi-download"></i></button>
{{< /highlight >}} 
{{< /code-markup >}}


## Group

Evenly space any group of buttons.

{{< code-demo >}}
<div class="button-group">
  <button class="button">Cancel</button>
  <button class="button">Continue</button>
  <button class="button">Destroy Death Star</button>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="button-group">
  <button class="button">Cancel</button>
  <button class="button">Continue</button>
  <button class="button">Destroy Death Star</button>
</div>
{{< /highlight >}} 
{{< /code-markup >}}

<section class="p-0 my-4">
  <h3 class="mb-3">Visualizer</h3>
  <div class="linear-gradient inverted px-4 py-3 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Try this!</strong> 
    Check out different colors of buttons!
  </div>
  <div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
    <div class="actions block">
      <ul class="list">
        <li>
          <button class="button" data-example-elements="button--navy">
            <pre>.button--navy</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--skyblue">
            <pre>.button--skyblue</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--lightblue">
            <pre>.button--lightblue</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--med-blue">
            <pre>.button--med-blue</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--beige">
            <pre>.button--beige</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--peach">
            <pre>.button--peach</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--salmon">
            <pre>.button--salmon</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--brown">
            <pre>.button--brown</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--orange">
            <pre>.button--orange</pre>
          </button>
        </li>
        <li>
          <button class="button" data-example-elements="button--ghost text--white">
            <pre>.button--ghost</pre>
          </button>
        </li>
        <li>
          <button class="button button--salmon text--white" data-reset="true">
            Reset
          </button>
        </li>
      </ul>
    </div>
    <div class="results rounded-2 block background--dark p-3" data-default-class="flex flex--center-content">
      <button class="button">
        Example Button
      </button>
    </div>
  </div>
<section>