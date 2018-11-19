# Flexbox

CSS Flexible Box Layout is a module of CSS that defines a CSS box model
optimized for user interface design, and the layout of items in one dimension.
In the flex layout model, the children of a flex container can be laid out in
any direction, and can “flex” their sizes, either growing to fill unused space
or shrinking to avoid overflowing the parent. Both horizontal and vertical
alignment of the children can be easily manipulated.

## Flex Display

<br> Utilities for creating flex containers.

| Class         | Property               |
| ------------- | ---------------------- |
| u-flex        | `display: flex`        |
| u-flex-inline | `display: inline-flex` |

### Flex

<br> Use `u-flex` to create a block-level flex container:

```html
<div class="u-flex">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

---

### Inline Flex

<br> Use `u-flex-inline` to create an inline flex container:

```html
<div class="u-flex-inline">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex-inline">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

## Flex Direction

<br> Utilities for controlling the direction of flex items.

| Class                 | Property                         |
| --------------------- | -------------------------------- |
| u-flex-row            | `flex-direction: row` `default`  |
| u-flex-row-reverse    | `flex-direction: row-reverse`    |
| u-flex-column         | `flex-direction: column`         |
| u-flex-column-reverse | `flex-direction: column-reverse` |

### Row `default`

<br> Use `u-flex-row` to position flex items horizontally in the same direction
as text:

```html
<div class="u-flex u-flex-row">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-row">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### Row Reverse

<br> Use `u-flex-row-reverse` to position flex items horizontally in the
opposite direction:

```html
<div class="u-flex u-flex-row-reverse">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-row-reverse">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### Column

<br> Use `u-flex-column` to position flex items vertically:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-column">
  <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">1</div>
  <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">3</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-column">
    <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">1</div>
    <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">3</div>
  </div>
</pre>

### Column Reverse

<br> Use `u-flex-column-reverse` to position flex items vertically in the
opposite direction:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-column-reverse">
  <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">1</div>
  <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">3</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-column-reverse">
    <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">1</div>
    <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-p-small u-m-tiny">3</div>
  </div>
</pre>

## Flex Wrap

<br> Utilities for controlling how flex items wrap.

| Class               | Property                      |
| ------------------- | ----------------------------- |
| u-flex-no-wrap      | `flex-wrap: nowrap` `default` |
| u-flex-wrap         | `flex-wrap: wrap`             |
| u-flex-wrap-reverse | `flex-wrap: wrap-reverse`     |

### No Wrap `default`

<br> Use `u-flex-no-wrap` to prevent flex items from wrapping, causing
inflexible items to overflow the container if necessary:

```html
<div class="u-flex u-flex-no-wrap">
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">1</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">3</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">4</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">5</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">6</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-no-wrap">
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">1</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">3</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">4</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">5</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">6</div>
  </div>
</pre>

### Wrap

<br> Use `u-flex-wrap` to allow flex items to wrap:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-wrap">
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">1</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">3</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">4</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">5</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">6</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-wrap">
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">1</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">3</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">4</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">5</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">6</div>
  </div>
</pre>

### Wrap Reverse

<br> Use `u-flex-wrap-reverse` to wrap flex items in the reverse direction:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-wrap-reverse">
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">1</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">3</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">4</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">5</div>
  <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">6</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-wrap-reverse">
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">1</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">3</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">4</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">5</div>
    <div class="u-text-center u-background-notify-warning u-ph-huge u-pv u-m-tiny">6</div>
  </div>
</pre>

## Align Items

<br> Positioning flex items along a container's cross axis.

| Class                 | Property                         |
| --------------------- | -------------------------------- |
| u-flex-items-stretch  | `align-items: stretch` `default` |
| u-flex-items-start    | `align-items: flex-start`        |
| u-flex-items-center   | `align-items: center`            |
| u-flex-items-end      | `align-items: flex-end`          |
| u-flex-items-baseline | `align-items: baseline`          |

### Stretch `default`

<br> Use `u-flex-items-stretch` to stretch items to fill the flex container's
cross axis:

```html
<div class="u-flex u-flex-items-stretch">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-items-stretch demo--fixed-height">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### Start

<br> Use `u-flex-items-start` to align items to the start of the flex
container's cross axis:

```html
<div class="u-flex u-flex-items-start">
  <div class="u-text-center u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-text-center u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-items-start demo--fixed-height">
    <div class="u-text-center u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-text-center u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### Center

<br> Use `u-flex-items-center` to align items along the center of the flex
container's cross axis:

```html
<div class="u-flex u-flex-items-center">
  <div class="u-text-center u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-text-center u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-items-center demo--fixed-height">
    <div class="u-text-center u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-text-center u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### End

<br> Use `u-flex-items-end` to align items to the end of the flex container's
cross axis:

```html
<div class="u-flex u-flex-items-end">
  <div class="u-text-center u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-text-center u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-items-end demo--fixed-height">
    <div class="u-text-center u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-text-center u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### Baseline

<br> Use `u-flex-items-baseline` to align items along the flex container's
cross axis such that all of their baselines align:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-items-baseline">
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
  <div class="u-text-center u-text-h3 u-background-notify-warning u-ph-large u-pv u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-items-baseline demo--fixed-height">
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
    <div class="u-text-center u-text-h3 u-background-notify-warning u-ph-large u-pv u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
  </div>
</pre>

## Align Self

<br> Positioning a single element along a container's cross axis.

| Class                | Property                     |
| -------------------- | ---------------------------- |
| u-flex-self-auto     | `align-self: auto` `default` |
| u-flex-self-start    | `align-self: flex-start`     |
| u-flex-self-center   | `align-self: center`         |
| u-flex-self-end      | `align-self: flex-end`       |
| u-flex-self-stretch  | `align-self: stretch`        |
| u-flex-self-baseline | `align-self: baseline`       |

### Auto `default`

<br>

Use `u-flex-self-auto` to align an item based on the value of the flex
container's `align-items` property:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-items-stretch">
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
  <div class="u-flex-self-auto u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-items-stretch demo--fixed-height">
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
    <div class="u-flex-self-auto u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
  </div>
</pre>

### Start

<br>

Use `u-flex-self-start` to align an item to the start of the flex container's
cross axis, despite the container's `align-items` value:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-items-stretch">
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
  <div class="u-flex-self-start u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-items-stretch demo--fixed-height">
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
    <div class="u-flex-self-start u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
  </div>
</pre>

### Center

<br>

Use `u-flex-self-center` to align an item to the center of the flex container's
cross axis, despite the container's `align-items` value:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-items-stretch">
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
  <div class="u-flex-self-center u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-items-stretch demo--fixed-height">
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
    <div class="u-flex-self-center u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
  </div>
</pre>

### End

<br>

Use `u-flex-self-end` to align an item to the end of the flex container's cross
axis, despite the container's `align-items` value:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-items-stretch">
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
  <div class="u-flex-self-end u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-items-stretch demo--fixed-height">
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
    <div class="u-flex-self-end u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
  </div>
</pre>

### Stretch

<br>

Use `u-flex-self-stretch` to align an item to the end of the flex container's
cross axis, despite the container's `align-items` value:

<!-- prettier-ignore-start -->
```html
<div class="u-flex u-flex-items-start">
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
  <div class="u-flex-self-stretch u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
  <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
</div>
```
<!-- prettier-ignore-end -->

<pre>
  <div class="demo u-flex u-flex-items-start demo--fixed-height">
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">1</div>
    <div class="u-flex-self-stretch u-text-center u-background-notify-danger u-ph-large u-pv u-m-tiny">2</div>
    <div class="u-text-center u-background-notify-warning u-ph-large u-pv u-m-tiny">3</div>
  </div>
</pre>

## Justify Content

<br> Positioning flex items along a container's main axis.

| Class                  | Property                                |
| ---------------------- | --------------------------------------- |
| u-flex-justify-start   | `justify-content: flex-start` `default` |
| u-flex-justify-center  | `justify-content: center`               |
| u-flex-justify-end     | `justify-content: flex-end`             |
| u-flex-justify-between | `justify-content: space-between`        |
| u-flex-justify-around  | `justify-content: space-around`         |
| u-flex-justify-evenly  | `justify-content: space-evenly`         |

### Start `default`

<br>

Use `u-flex-justify-start` to justify items against the start of the flex
container's main axis:

```html
<div class="u-flex u-flex-justify-start">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-justify-start">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### Center

<br>

Use `u-flex-justify-center` to justify items against the center of the flex
container's main axis:

```html
<div class="u-flex u-flex-justify-center">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-justify-center">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### End

<br>

Use `u-flex-justify-end` to justify items against the end of the flex
container's main axis:

```html
<div class="u-flex u-flex-justify-end">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-justify-end">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### Space Between

<br>

Use `u-flex-justify-between` to justify items along the flex container's main
axis such that there is an equal amount of space between each item:

```html
<div class="u-flex u-flex-justify-between">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-justify-between">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### Space Around

<br>

Use `u-flex-justify-around` to justify items along the flex container's main
axis such that there is an equal amount of space around each item:

```html
<div class="u-flex u-flex-justify-around">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-justify-around">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

### Space Evenly

<br>

Use `u-flex-justify-evenly` items are distributed so that the spacing between
any two items (and the space to the edges) is equal:

```html
<div class="u-flex u-flex-justify-evenly">
  <div class="u-background-notify-warning u-p u-m-tiny">1</div>
  <div class="u-background-notify-warning u-p u-m-tiny">2</div>
  <div class="u-background-notify-warning u-p u-m-tiny">3</div>
</div>
```

<pre>
  <div class="demo u-flex u-flex-justify-evenly">
    <div class="u-background-notify-warning u-p u-m-tiny">1</div>
    <div class="u-background-notify-warning u-p u-m-tiny">2</div>
    <div class="u-background-notify-warning u-p u-m-tiny">3</div>
  </div>
</pre>

## Flex, Grow and Shrink

<br> Utilities for controlling how flex items grow and shrink.

| Class          | Property                  |
| -------------- | ------------------------- |
| u-flex-initial | `flex: initial` `default` |
| u-flex-1       | `flex: 1`                 |
| u-flex-auto    | `flex: auto`              |
| u-flex-none    | `flex: none`              |

### Flex Initial `default`

<br>

Use `u-flex-initial` to allow a flex item to shrink but not grow,
taking into account its initial size:

```html
<div class="u-flex">
  <div class="u-flex-initial u-background-notify-warning u-p-small u-m-tiny">
    Lorem
  </div>
  <div class="u-flex-initial u-background-notify-warning u-p-small u-m-tiny">
    Lorem Ipsum
  </div>
  <div class="u-flex-initial u-background-notify-warning u-p-small u-m-tiny">
    Lorem Ipsum is simply dummy text
  </div>
</div>
```

<pre>
  <div class="demo u-flex">
    <div class="u-flex-initial u-background-notify-warning u-p-small u-m-tiny">Lorem</div>
    <div class="u-flex-initial u-background-notify-warning u-p-small u-m-tiny">Lorem Ipsum</div>
    <div class="u-flex-initial u-background-notify-warning u-p-small u-m-tiny">Lorem Ipsum is simply dummy text</div>
  </div>
</pre>

### Flex 1

<br>

Use `u-flex-1` to allow a flex item to grow and shrink as needed,
ignoring its initial size:

```html
<div class="u-flex">
  <div class="u-flex-1 u-background-notify-warning u-p-small u-m-tiny">
    Lorem
  </div>
  <div class="u-flex-1 u-background-notify-warning u-p-small u-m-tiny">
    Lorem Ipsum
  </div>
  <div class="u-flex-1 u-background-notify-warning u-p-small u-m-tiny">
    Lorem Ipsum is simply dummy text
  </div>
</div>
```

<pre>
  <div class="demo u-flex">
    <div class="u-flex-1 u-background-notify-warning u-p-small u-m-tiny">Lorem</div>
    <div class="u-flex-1 u-background-notify-warning u-p-small u-m-tiny">Lorem Ipsum</div>
    <div class="u-flex-1 u-background-notify-warning u-p-small u-m-tiny">Lorem Ipsum is simply dummy text</div>
  </div>
</pre>

### Flex auto

<br>

Use `u-flex-auto` to allow a flex item to grow and shrink, taking into account
its initial size:

```html
<div class="u-flex">
  <div class="u-flex-auto u-background-notify-warning u-p-small u-m-tiny">
    Lorem
  </div>
  <div class="u-flex-auto u-background-notify-warning u-p-small u-m-tiny">
    Lorem Ipsum
  </div>
  <div class="u-flex-auto u-background-notify-warning u-p-small u-m-tiny">
    Lorem Ipsum is simply dummy text
  </div>
</div>
```

<pre>
  <div class="demo u-flex">
    <div class="u-flex-auto u-background-notify-warning u-p-small u-m-tiny">Lorem</div>
    <div class="u-flex-auto u-background-notify-warning u-p-small u-m-tiny">Lorem Ipsum</div>
    <div class="u-flex-auto u-background-notify-warning u-p-small u-m-tiny">Lorem Ipsum is simply dummy text</div>
  </div>
</pre>

### Flex None

<br>

Use `u-flex-none` to prevent a flex item from growing or shrinking:

```html
<div class="u-flex">
  <div class="u-flex-none u-background-notify-warning u-p-small u-m-tiny">
    Lorem
  </div>
  <div class="u-flex-none u-background-notify-warning u-p-small u-m-tiny">
    Lorem Ipsum
  </div>
  <div class="u-flex-none u-background-notify-warning u-p-small u-m-tiny">
    Lorem Ipsum is simply dummy text
  </div>
</div>
```

<pre>
  <div class="demo u-flex">
    <div class="u-flex-none u-background-notify-warning u-p-small u-m-tiny">Lorem</div>
    <div class="u-flex-none u-background-notify-warning u-p-small u-m-tiny">Lorem Ipsum</div>
    <div class="u-flex-none u-background-notify-warning u-p-small u-m-tiny">Lorem Ipsum is simply dummy text</div>
  </div>
</pre>
