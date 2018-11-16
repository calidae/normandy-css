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
<div class="u-text-notify-success">
Left
    <div class="u-text-branding-primary u-text-left">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p><p>Aenean commodo ligula eget dolor.</p><p>Aenean massa. Cum sociis natoque penatibus et magnis dis</p><p>parturient montes,nascetur ridiculus mus. Donec quam felis,</p><p>ultricies nec, pellentesque eu, pretium quis, sem.</p>
        </p>
    </div>
Center
    <div class="u-text-branding-primary u-text-center">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p><p>Aenean commodo ligula eget dolor.</p><p>Aenean massa. Cum sociis natoque penatibus et magnis dis</p><p>parturient montes,nascetur ridiculus mus. Donec quam felis,</p><p>ultricies nec, pellentesque eu, pretium quis, sem.</p>
    </div>
Right
    <div class="u-text-branding-primary u-text-right">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p><p>Aenean commodo ligula eget dolor.</p><p>Aenean massa. Cum sociis natoque penatibus et magnis dis</p><p>parturient montes,nascetur ridiculus mus. Donec quam felis,</p><p>ultricies nec, pellentesque eu, pretium quis, sem.</p>
    </div>
Justify
    <div class="u-text-branding-primary u-text-justify">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p><p>Aenean commodo ligula eget dolor.</p><p>Aenean massa. Cum sociis natoque penatibus et magnis dis</p><p>parturient montes,nascetur ridiculus mus. Donec quam felis,</p><p>ultricies nec, pellentesque eu, pretium quis, sem.</p>
    </div>
</div>
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
<div class="u-text-notify-success">
    <br>.u-text-h6
    <span class="u-text-branding-primary u-text-h6">Lorem ipsum dolor sit amet</span>
    <br>.u-text-h5
    <span class="u-text-branding-primary u-text-h5">Lorem ipsum dolor sit amet</span>
    <br>.u-text-h4
    <span class="u-text-branding-primary u-text-h4">Lorem ipsum dolor sit amet</span>
    <br>.u-text-h3
    <span class="u-text-branding-primary u-text-h3">Lorem ipsum dolor sit amet</span>
    <br>.u-text-h2
    <span class="u-text-branding-primary u-text-h2">Lorem ipsum dolor sit amet</span>
    <br>.u-text-h1
    <span class="u-text-branding-primary u-text-h1">Lorem ipsum dolor sit amet</span>
</div>
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
<div class="u-text-notify-success">
    <br>.u-text-hairline
    <span class="u-text-branding-primary u-text-hairline">Lorem ipsum dolor sit amet</span>
    <br>.u-text-thin
    <span class="u-text-branding-primary u-text-thin">Lorem ipsum dolor sit amet</span>
    <br>.u-text-light
    <span class="u-text-branding-primary u-text-light">Lorem ipsum dolor sit amet</span>
    <br>.u-text-normal
    <span class="u-text-branding-primary u-text-normal">Lorem ipsum dolor sit amet</span>
    <br>.u-text-medium
    <span class="u-text-branding-primary u-text-medium">Lorem ipsum dolor sit amet</span>
    <br>.u-text-semibold
    <span class="u-text-branding-primary u-text-semibold">Lorem ipsum dolor sit amet</span>
    <br>.u-text-bold
    <span class="u-text-branding-primary u-text-bold">Lorem ipsum dolor sit amet</span>
    <br>.u-text-extrabold
    <span class="u-text-branding-primary u-text-extrabold">Lorem ipsum dolor sit amet</span>
    <br>.u-text-black
    <span class="u-text-branding-primary u-text-black">Lorem ipsum dolor sit amet</span>
</div>
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
<div class="u-text-notify-success">
.u-text-italic
    <span class="u-text-branding-primary u-text-italic">Lorem ipsum dolor sit amet</span>
<br>.u-text-uppercase
    <span class="u-text-branding-primary u-text-uppercase">Lorem ipsum dolor sit amet</span>
<br>.u-text-lowercase
    <span class="u-text-branding-primary u-text-lowercase">Lorem ipsum dolor sit amet</span>
<br>.u-text-capitalize
    <span class="u-text-branding-primary u-text-capitalize">Lorem ipsum dolor sit amet</span>
<br>.u-text-underline
    <span class="u-text-branding-primary u-text-underline">Lorem ipsum dolor sit amet</span>
<br>.u-text-through
    <span class="u-text-branding-primary u-text-line-through">Lorem ipsum dolor sit amet</span>
<br>.u-text-no-underline
    <span class="u-text-branding-primary u-text-no-underline">Lorem ipsum dolor sit amet</span>
</div>
</pre> 


<style lang="scss">
@import '../../.vuepress/scss/main.scss';
</style>