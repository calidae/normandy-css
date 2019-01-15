# Colors

Utilities for controlling the color and background color of an element.

It uses `$global-colors` variables map to generate the color utilities.

::: tip Where can I customize this variable?

It is located in `1-Settings/_settings.colors.scss`

```scss
$global-colors: (
  'branding-primary': hsl(72, 54%, 52%),
  'notify-success': hsl(122, 39%, 49%),
  'notify-info': hsl(199, 92%, 56%),
  'notify-warning': hsl(36, 100%, 50%),
  'notify-danger': hsl(4, 90%, 58%),
);
```

:::

## Text color

Used to give color to the text of a specific element.

| Class          | Property         |
| -------------- | ---------------- |
| u-text-{color} | `color: {color}` |

### Usage

```html
<p class="u-text-notify-warning">Lorem ipsum dolor sit amet</p>
```

<pre class="u-text-notify-warning">
Lorem ipsum dolor sit amet
</pre>

## Background color

Used to give color to the background of a specific element.

| Class                | Property                    |
| -------------------- | --------------------------- |
| u-background-{color} | `background-color: {color}` |

### Usage

```html
<p class="u-background-notify-warning">Lorem ipsum dolor sit amet</p>
```

<!-- prettier-ignore-start -->
<pre>
<p class="u-background-notify-warning">Lorem ipsum dolor sit amet
</p></pre>
<!-- prettier-ignore-end -->
