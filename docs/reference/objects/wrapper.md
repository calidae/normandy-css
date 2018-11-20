# Wrapper

Page-level constraining and wrapping elements.

::: tip Where is it?
The Wrapper object is located in `5-Objects/_objects.wrapper.scss`.
:::

### Usage

```html
<div class="o-wrapper">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis
  fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium
  ab vel at repellat amet atque?
</div>
```

---

<div class="o-wrapper">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium  ab vel at repellat amet atque?
</div>

## Size modifiers

Use the size modifiers to adapt the gap between the elements.

| Class            | Elements' gap                |
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

<div class="o-wrapper o-wrapper--flush u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</div>

#### `.o-wrapper--tiny`

<div class="o-wrapper o-wrapper--tiny u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</div>

#### `.o-wrapper--small`

<div class="o-wrapper o-wrapper--small u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</div>

#### `.o-wrapper--large`

<div class="o-wrapper o-wrapper--large u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</div>

#### `.o-wrapper--huge`

<div class="o-wrapper o-wrapper--huge u-mt-small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
</div>

<style lang="scss">
@import './outline.css';
</style>
