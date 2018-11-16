# Typography

Usual text utility classes to overcome the common text management needs.

## Text Alignment

<br> Is used for aligning the inner content of a block element.

| Class         | Property             |
| ------------- | ---------------------|
| u-text-left   | `text-align: left`   |
| u-text-center | `text-align: center` |
| u-text-right  | `text-align: right`  |
| u-text-justify| `text-align: justify`|

<pre> 
<span class="pre__title">Left</span>
    <p class="u-text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes,nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</p>
<span class="pre__title">Center</span>
    <p class="u-text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes,nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</p>
<span class="pre__title">Right</span>
    <p class="u-text-right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes,nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</p>
<span class="pre__title">Justify</span>
    <p class="u-text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes,nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</p>
</pre>

---

## Font Size

<br> Utilities for controlling the font size of an element.

::: tip Where are $global-font-sizes?
Use $global-font-sizes variables in /scss/1-Settings/_settings.font-size.scss

```scss
$global-font-sizes: (
  h1: 32px,
  h2: 28px,
  h3: 24px,
  h4: 20px,
  h5: 18px,
  h6: 16px
) !default;
```

:::



### Usage

<br> Control the font size of an element using the `.u-text-{size}` utilities.

<pre>
<span class="pre__title">.u-text-h6</span>
    <p class="u-text-h6">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-h5</span>
    <p class="u-text-h5">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-h4</span>
    <p class="u-text-h4">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-h3</span>
    <p class="u-text-h3">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-h2</span>
    <p class="u-text-h2">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-h1</span>
    <p class="u-text-h1">Lorem ipsum dolor sit amet</p>
</pre> 


## Font Weight

<br> Utilities for controlling the font weight of an element.

| Class             | Property         |
| -------------   | -----------------|
| u-text-hairline | `font-weight: 100`|
| u-text-thin     | `font-weight: 200`|
| u-text-light    | `font-weight: 300`|
| u-text-normal   | `font-weight: 400`|
| u-text-medium   | `font-weight: 500`|
| u-text-semibold | `font-weight: 600`|
| u-text-bold     | `font-weight: 700`|
| u-text-extrabold| `font-weight: 800`|
| u-text-black    | `font-weight: 900`|

### Usage

<br> Control the font weight of an element using the `.u-text-{weight}`
utilities.

<pre>
<span class="pre__title">.u-text-hairline</span>
    <p class="u-text-hairline">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-thin</span>
    <p class="u-text-thin">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-light</span>
    <p class="u-text-light">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-normal</span>
    <p class="u-text-normal">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-medium</span>
    <p class="u-text-medium">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-semibold</span>
    <p class="u-text-semibold">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-bold</span>
    <p class="u-text-bold">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-extrabold</span>
    <p class="u-text-extrabold">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-black</span>
    <p class="u-text-black">Lorem ipsum dolor sit amet</p>
</pre> 


## Styles, Decoration & Transform

<br> Utilities for controlling the style of text.

| Class               | Property                        |
| ------------------- | ------------------------------- |
| u-text-italic       | `font-style: italic`            |
| u-text-uppercase    | `text-transform: uppercase`     |
| u-text-lowercase    | `text-transform: lowercase`     |
| u-text-capitalize   | `text-transform: capitalize`    |
| u-text-underline    | `text-decoration: underline`    |
| u-text-line-through | `text-decoration: line-through` |
| u-text-no-underline | `text-decoration: none`         |


<pre>
<span class="pre__title">.u-text-italic</span>
    <p class="u-text-italic">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-uppercase</span>
    <p class="u-text-uppercase">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-lowercase</span>
    <p class="u-text-lowercase">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-capitalize</span>
    <p class="u-text-capitalize">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-underline</span>
    <p class="u-text-underline">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-through</span>
    <p class="u-text-line-through">Lorem ipsum dolor sit amet</p>
<span class="pre__title">.u-text-no-underline</span>
    <p class="u-text-no-underline">Lorem ipsum dolor sit amet</p>
</pre> 


<style lang="scss">
@import '../../.vuepress/scss/main.scss';

pre {
    white-space: pre-wrap;
        color:#EAECEF;

    .pre__title {
        font-size: 0.9rem;
        font-weight: bold;
        padding-top: 2rem;
        opacity:.5;
    }
}
</style>