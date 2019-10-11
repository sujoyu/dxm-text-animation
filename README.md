<h1 class="dxm-effect">DXM Console Effect</h1>

<p class="dxm-effect">A text effect like the console in Demon X Machina (Nintendo Switch game).</p>

Customized from [blivesta/chaffle](https://github.com/blivesta/chaffle)

## Installation

```html
<script src="DXMEffect.js"></script>
<script>
  const elements = document.querySelectorAll('.dxm-effect')
  [].forEach.call(elements, function (el) {
      const exmEffect = new DXMEffect(el, { 
      speed: 30,
      delay: 100,
      })
      exmEffect.init()
  })
</script>
```

## Examples

### Basic Usage
```html
<p class="dxm-effect">The quick brown fox jumps over the lazy dog.</p>
```

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

### Delayed Animation

```html
<p class="dxm-effect" data-dxmeffect-start-delay="1000">The quick brown fox jumps over the lazy dog.</p>
```

### Serialize Multiple Animation

```html
<p id="effect1" class="dxm-effect">The quick brown fox jumps over the lazy dog.</p>
<p id="effect2" class="dxm-effect" data-dxmeffect-after="#effect1">The quick brown fox jumps over the lazy dog.</p>
<p id="effect3" class="dxm-effect" data-dxmeffect-after="#effect2">The quick brown fox jumps over the lazy dog.</p>
```

## Note
- Recomended using monospaced fonts.
- Content text is ONLY plain text. Don't contain unecessary white spaces and new lines.(Because DXM Effect using `white-space: pre;` style.)

## Options

| HTML data attribute        | JS option object | Type   | Description                                                             | Default |
|----------------------------|------------------|--------|-------------------------------------------------------------------------|---------|
| data-dxmeffect             | lang             | string | Random character's language. ('en', 'ja', 'ja-hiragana', 'ja-katakana') | 'en'    |
| data-dxmeffect-speed       | speed            | int    | Random character's changing span. (ms)                                  | 20      |
| data-dxmeffect-delay       | delay            | int    | Rendering span between each character. (ms)                             | 100     |
| data-dxmeffect-after       | after            | string | Query string of element that must finished before starts.               | -       |
| data-dxmeffect-start-delay | startDelay       | int    | Starting animation delay. (ms)                                          | 0       |
