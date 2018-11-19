# Typography

Usual text utility classes to overcome the common text management needs.

## Font Size

Utilities for controlling the font size of an element.

It uses `$global-font-sizes` variables map to generate the sizing utilities.

::: tip Where can I customize this variable?

It is located in `1-Settings/_settings.font-size.scss`

```scss
$global-font-sizes: (
  h1: 32px,
  h2: 28px,
  h3: 24px,
  h4: 20px,
  h5: 18px,
  h6: 16px,
) !default;
```

Notice that this map is also used in `4-Base/_base.heading.scss` to provide a
basic default sizing to headings.
:::

### Usage

#### `.u-text-h6`

<pre class="u-text-h6">Lorem ipsum dolor sit amet</pre>

#### `.u-text-h5`

<pre class="u-text-h5">Lorem ipsum dolor sit amet</pre>

#### `.u-text-h4`

<pre class="u-text-h4">Lorem ipsum dolor sit amet</pre>

#### `.u-text-h3`

<pre class="u-text-h3">Lorem ipsum dolor sit amet</pre>

#### `.u-text-h2`

<pre class="u-text-h2">Lorem ipsum dolor sit amet</pre>

#### `.u-text-h1`

<pre class="u-text-h1">Lorem ipsum dolor sit amet</pre>

## Text Alignment

Used to align the inner content of a block element.

| Class          | Property              |
| -------------- | --------------------- |
| u-text-left    | `text-align: left`    |
| u-text-center  | `text-align: center`  |
| u-text-right   | `text-align: right`   |
| u-text-justify | `text-align: justify` |

### Usage

#### `.u-text-left`

<pre class="u-text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. pre sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis sem.</pre>

#### `.u-text-center`

<pre class="u-text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. pre sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</pre>

#### `.u-text-right`

<pre class="u-text-right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. pre sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</pre>

#### `.u-text-justify`

<pre class="u-text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. pre sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</pre>

## Font Weight

Utilities for controlling the font weight of an element.

| Class            | Property           |
| ---------------- | ------------------ |
| u-text-hairline  | `font-weight: 100` |
| u-text-thin      | `font-weight: 200` |
| u-text-light     | `font-weight: 300` |
| u-text-normal    | `font-weight: 400` |
| u-text-medium    | `font-weight: 500` |
| u-text-semibold  | `font-weight: 600` |
| u-text-bold      | `font-weight: 700` |
| u-text-extrabold | `font-weight: 800` |
| u-text-black     | `font-weight: 900` |

### Usage

#### `.u-text-hairline`

<pre class="u-text-hairline">Lorem ipsum dolor sit amet</pre>

#### `.u-text-thin`

<pre class="u-text-thin">Lorem ipsum dolor sit amet</pre>

#### `.u-text-light`

<pre class="u-text-light">Lorem ipsum dolor sit amet</pre>

#### `.u-text-normal`

<pre class="u-text-normal">Lorem ipsum dolor sit amet</pre>

#### `.u-text-medium`

<pre class="u-text-medium">Lorem ipsum dolor sit amet</pre>

#### `.u-text-semibold`

<pre class="u-text-semibold">Lorem ipsum dolor sit amet</pre>

#### `.u-text-bold`

<pre class="u-text-bold">Lorem ipsum dolor sit amet</pre>

#### `.u-text-extrabold`

<pre class="u-text-extrabold">Lorem ipsum dolor sit amet</pre>

#### `.u-text-black`

<pre class="u-text-black">Lorem ipsum dolor sit amet</pre>

## Styles & Decoration

Utilities for controlling the generic style of text.

| Class               | Property                        |
| ------------------- | ------------------------------- |
| u-text-italic       | `font-style: italic`            |
| u-text-uppercase    | `text-transform: uppercase`     |
| u-text-lowercase    | `text-transform: lowercase`     |
| u-text-capitalize   | `text-transform: capitalize`    |
| u-text-underline    | `text-decoration: underline`    |
| u-text-line-through | `text-decoration: line-through` |
| u-text-no-underline | `text-decoration: none`         |

### Usage

#### `.u-text-italic`

<pre class="u-text-italic">Lorem ipsum dolor sit amet</pre>

#### `.u-text-uppercase`

<pre class="u-text-uppercase">Lorem ipsum dolor sit amet</pre>

#### `.u-text-lowercase`

<pre class="u-text-lowercase">Lorem ipsum dolor sit amet</pre>

#### `.u-text-capitalize`

<pre class="u-text-capitalize">Lorem ipsum dolor sit amet</pre>

#### `.u-text-underline`

<pre class="u-text-underline">Lorem ipsum dolor sit amet</pre>

#### `.u-text-through`

<pre class="u-text-line-through">Lorem ipsum dolor sit amet</pre>

#### `.u-text-no-underline`

<pre class="u-text-no-underline">Lorem ipsum dolor sit amet</pre>
