---
layout: single
title: Getting Started
weight: 1
---


## CDN

The quickest and easiest way to implement Platform UI is by using a CDN. Here are a few examples.

### UNPKG

<div class="mb-4">
{{< highlight html >}}
<!-- In the <head> of your site. -->
<link rel="preconnect" href="https://unpkg.com" crossorigin>
<link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>
<!-- Directly before the closing </body> tag of your site. -->
<script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
{{< /highlight >}}
</div>

### JSDELIVR

<div class="mb-4">
{{< highlight html >}}
<!-- In the <head> of your site. -->
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>
<!-- Directly before the closing </body> tag of your site. -->
<script src="cdn.jsdelivr.net/npm/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
{{< /highlight >}}
</div>

### SKYPACK

<div class="mb-4">
{{< highlight html >}}
<!-- In the <head> of your site. -->
<link rel="dns-prefetch" href="https://cdn.skypack.dev" crossorigin>
<link rel="stylesheet" href="https://cdn.skypack.dev/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>
<!-- Directly before the closing </body> tag of your site. -->
<script src="https://https:/cdn.skypack.dev/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
{{< /highlight >}}
</div>

<div class="mb-6">
{{< callout tipHeader="Pro Tip">}}
<p>Leaving out a version will always fetch the latest. Adding <code>@1.3.7</code> after <code>platform-ui</code> will get that specific version. </p>
{{< /callout >}}
</div>

## Starter Templates

This is the basic template to get started for any HTML project.

<div class="mb-4">
{{< highlight html >}}
<!doctype html>
<html lang="en">
  <head>
    <title>We're using Platform UI!</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="preconnect" href="https://unpkg.com" crossorigin>
    <link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin>

  </head>
  <body>
    <h1>So cool!</h1>
    <!-- Website things... -->
    <script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js" crossorigin defer></script>
  </body>
</html>
{{< /highlight >}}
</div>
 
Looking for a little more to get going? Check out our [gallery examples](/launch-pad/)!


<div class="mb-4">
{{< highlight html >}}
<!doctype html>
<html lang="en">

<head>
  <title>Holy Grail layout | Platform UI!</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- load fonts -->		
  <link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css">
</head>

<body class="flex flex--column">
  <header class="py-6 px-3">
    <h1>Header</h1>
  </header>
  <main class="block-container flex--grow">
    <aside class="block lg-tablet-up-2">
      <h1>Side Menu</h1>
    </aside>
    <section class="block lg-tablet-up-8 p-3">
      <h1 class="text--base">Main Content</h1>
    </section>
    <aside class="block lg-tablet-up-2">
      <h1>Aside</h1>
    </aside>
  </main>
  <footer class="py-6 px-3">
    <h1>Footer</h1>
  </footer>
</body>
<script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js"></script>

</html>
{{< /highlight >}}
</div>
 
## Third Parties

There are a few third party choices we've incorporated into Platform UI which are part of the compiled version only. If you choose to build Platform UI from source, you'll need to consider the following.

### Normalize.css

The nature of browsers and their vendors often require a reset to normalize behavious for standard HTML tags, so we include <a href="https://necolas.github.io/normalize.css/" rel="external" target="_blank">Normalize.css</a> as part of Platform UI's build process.

**If you're using Platform UI in your own build process, you'll need to include Normalize.css.**

### Postcss

In the same spirit as Normalize.css, we also leverage <a href="https://github.com/postcss/postcss" rel="external">Postcss</a> and <a href="https://github.com/postcss/autoprefixer" rel="external" target="_blank">Autoprefixer</a> to reduce browser inconsistencies. 

**If you're using Platform UI in you're own build process, you'll need to include Postcss. Likewise, if you prefer greater browser support, you will have to build Platform UI from source.**

Our current browser support settings:

<div class="mt-3 mb-4">
{{< highlight js >}}
"browserslist": [
	"last 2 version",
	"> 2%"
]
{{< /highlight >}}
</div>
