# Wrapper

Page-level constraining and wrapping elements.

::: tip Where is it?
The Wrapper object is located in `5-Objects/_objects.wrapper.scss`.
:::

## Elements

The Wrapper Object hasn't elements.

### Usage

::: warning
The maximum width provided by the Wrapper object is larger than the available in this document.
:::

```html
<p class="o-wrapper">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis
  fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium
  ab vel at repellat amet atque?
</p>
```

<p class="o-wrapper">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium  ab vel at repellat amet atque?
</p>

## Size modifiers

Use the size modifiers to change the gutter of the wrapped item.

| Class            | Object's gutter             |
| ---------------- | ---------------------------- |
| o-wrapper--flush | `0`                          |
| o-wrapper--tiny  | `$global-spacing-unit-tiny`  |
| o-wrapper--small | `$global-spacing-unit-small` |
| o-wrapper--large | `$global-spacing-unit-large` |
| o-wrapper--huge  | `$global-spacing-unit-huge`  |

::: tip
\$global-spacing-unit map is located in `1-Settings/_settings.core.scss`
:::

### Usage

#### `.o-wrapper--flush`

<p class="o-wrapper o-wrapper--flush u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</p>

#### `.o-wrapper--tiny`

<p class="o-wrapper o-wrapper--tiny u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</p>

#### `.o-wrapper--small`

<p class="o-wrapper o-wrapper--small u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</p>

#### `.o-wrapper--large`

<p class="o-wrapper o-wrapper--large u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</p>

#### `.o-wrapper--huge`

<p class="o-wrapper o-wrapper--huge u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</p>

<style lang="scss">
@import './outline.css';
</style>
