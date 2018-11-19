# Colors

Utilities for controlling the color and background color of an element.

It uses `$global-colors` variables map to generate the color utilities.

::: tip Where can I customize this variable?

It is located in `1-Settings/_settings.colors.scss`

```scss
$global-colors: (
  'branding-primary': #acc743,
  'notify-success': #4caf50,
  'notify-info': #29b6f6,
  'notify-warning': #ff9800,
  'notify-danger': #f44336,
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
<p class="u-color-branding-primary">Lorem ipsum dolor sit amet</p>
```

<pre class="u-color-branding-primary">
Lorem ipsum dolor sit amet
</pre>

## Background color

Used to give color to the background of a specific element.

| Class                | Property                    |
| -------------------- | --------------------------- |
| u-background-{color} | `background-color: {color}` |

### Usage

```html
<p class="u-background-notify-warning u-p-tiny">Lorem ipsum dolor sit amet</p>
```

<pre class="u-background-notify-warning u-p-tiny">
Lorem ipsum dolor sit amet
</pre>
