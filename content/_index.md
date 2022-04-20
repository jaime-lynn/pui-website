---
title: Platform UI
---

<div class="block-container flex--justify-center cards">
  <div class="block block-11 tablet-up-8 desktop-up-6 text--center">
    <h2 class="text--center text--purple text--bold text--size-xl">
      It started with us, now we're sharing it with you!
    </h2>
    <p class="text--size-md">
    Platform UI is built to give designers and developers more control over their UIs. It's a powerful and simple system with just enough utilities to make your project amazing.
    </p>
  </div>
</div>

<div class="block-container flex--justify-center pb-4">
  <div class="block block-7 tablet-up-8">
    <div class="block-container blocks cards tablet-up-2 lg-tablet-up-3 laptop-up-4 px-2 my-2 flex--justify-center" >
      <div class="block">
        <div class="card text--center hover-shadow no-border">
          <h3 class="text--size-lg text--purple">Easy</h3>
{{< figure src="/images/icons/responsive.svg" class="px-4" >}}
Quick to install, easy to learn. Use a CDN or npm install, add a template, and you're live!
        </div>
      </div>
      <div class="block">
        <div class="card text--center hover-shadow no-border">
          <h3 class="text--size-lg text--purple">Responsive</h3>
{{< figure src="/images/icons/responsive.svg" class="px-4" >}}
Take advantage of Platform UI's responsive grid system. You'll have your designs on every screen in no time at all. 
        </div>
      </div>
      <div class="block">
        <div class="card text--center hover-shadow no-border">
          <h3 class="text--size-lg text--purple">Icons</h3>
{{< figure src="/images/icons/responsive.svg" class="px-4" >}}
Platform Icons let you not worry about your icon choices. They work seamlessly when choosing a CDN install.
        </div>
      </div>
      <div class="block">
        <div class="card text--center hover-shadow no-border">
          <h3 class="text--size-lg text--purple">Templates</h3>
{{< figure src="/images/icons/responsive.svg" class="px-4" >}}
Want that blog up now? We have starter templates to help you launch your ideas.
        </div>
      </div>
    </div>
  </div>
</div>

<section class="block-container flex--justify-center background--lighter py-4">
  <div class="block block-11 tablet-up-8">
    <h2 class="text--center text--purple text--bold text--size-xl">Quick Start</h2>
    <div class="block-container flex--justify-center blocks p-2">
      <div class="block">
        <h3 class="text--size-md text--purple">Using packages</h3>
{{< highlight bash >}}
npm install @ritterim/platform-ui
{{< /highlight >}}
      </div>
    </div>
    <div class="block-container flex--justify-center blocks p-2">
      <div class="block">
        <h3 class="text--size-md text--purple">Using a CDN</h3>
{{< highlight html >}}
<!-- Compressed CSS -->
https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css
<!-- Compressed JS -->
https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js
{{< /highlight >}}
      </div>
    </div>
  </div>
</section>

<section class="block-container flex--justify-center py-4">
  <div class="block block-11 tablet-up-8 desktop-up-6">
    <h2 class="text--center text--purple text--bold text--size-xl">Need moar?</h2>
    <p class="text--size-md">
Here's a quick template to get you started. It uses the CDN install, which we recommend for a quick launch!</p>
    <div class="block-container flex--justify-center">
      <div class="block">
{{< highlight html >}}
<!doctype html>
<html lang="en">
  <head>
    <title>Platform UI</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Import your fonts here -->
    <link rel="dns-prefetch" href="https://unpkg.com/">
    <link rel="stylesheet" href="https://unpkg.com/@ritterim/platform-ui/dist/platform-ui.min.css" crossorigin="anonymous">
  </head>
  <body>
    <div class="block-container">
      <aside class="block block-3 background--dark text--white p-4 vh-100 flex flex--column flex--justify-between">
        <nav class="site-menu pt-4">
          <ul class="list">
            <li><a class="site-menu__item" href="#">Home</a></li>
            <li><a class="site-menu__item" href="#">About</a></li>
            <li><a class="site-menu__item" href="#">Donate</a></li>          
          </ul>
        </nav>
        <footer class="text--light">
          <p>&copy; My Blog</p>
        </footer>
      </aside>
      <main class="block block-9 p-4 h-100">
        <h1 class="py-4 text--orange">Headline</h1>
      </main>
    </div>
    <script src="https://unpkg.com/@ritterim/platform-ui/dist/js/platform-ui.min.js" defer></script>
  </body>
</html>
{{< /highlight >}}
      </div>
    </div>
  </div>
</section>