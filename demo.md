---
layout: default
title: demo
---

<h1 class="dxm-effect">DXM Console Effect</h1>

<p class="dxm-effect">A text effect like the console in Demon X Machina (Nintendo Switch game).</p>

Customized from [blivesta/chaffle](https://github.com/blivesta/chaffle)

## Installation

```html
<script src="DXMEffect.js"></script>
<script>
  const elements = document.querySelectorAll('.dxm-effect');
  [].forEach.call(elements, function (el) {
      const exmEffect = new DXMEffect(el, { 
      speed: 30,
      delay: 100,
      });
      exmEffect.init();
  });
</script>
```

## Examples

### Basic Usage
```html
<p class="dxm-effect">The quick brown fox jumps over the lazy dog.</p>
```

<p class="dxm-effect">The quick brown fox jumps over the lazy dog.</p>

### Slow Animation by Dafult

```javascript
const elements = document.querySelectorAll('.dxm-effect');
[].forEach.call(elements, function (el) {
    const exmEffect = new DXMEffect(el, { 
    speed: 30,
    delay: 100,
    });
    exmEffect.init();
});
```

<p class="dxm-effect-slow">The quick brown fox jumps over the lazy dog.</p>

### Delayed Animation

```html
<p class="dxm-effect" data-dxmeffect-start-delay="1000">The quick brown fox jumps over the lazy dog.</p>
```

<p class="dxm-effect" data-dxmeffect-start-delay="1000">The quick brown fox jumps over the lazy dog.</p>

### Srialize Multiple Animation

```html
<p id="effect1" class="dxm-effect">The quick brown fox jumps over the lazy dog.</p>
<p id="effect2" class="dxm-effect" data-dxmeffect-after="effect1">The quick brown fox jumps over the lazy dog.</p>
<p id="effect3" class="dxm-effect" data-dxmeffect-after="effect2">The quick brown fox jumps over the lazy dog.</p>
```

<p id="effect1" class="dxm-effect">The quick brown fox jumps over the lazy dog.</p>
<p id="effect2" class="dxm-effect" data-dxmeffect-after="effect1">The quick brown fox jumps over the lazy dog.</p>
<p id="effect3" class="dxm-effect" data-dxmeffect-after="effect2">The quick brown fox jumps over the lazy dog.</p>

## Note
- Recomended using monospaced fonts.
- Content text is ONLY plain text. Don't contain unecessary white spaces and new lines.(Because DXM Effect using `white-space: pre;` style.)
