# List

Unstyled inline or blocked lists.

::: tip Where is it?
The List object is located in `5-Objects/_objects.list.scss`.
:::

## Elements

The List Object has 1 element that can be repeated as many times as needed:

- `o-list__item`

### Usage

```html
<div class="o-list">
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
</div>
```

<div class="o-list u-mt-small">
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
</div>

## Display modifiers

Use display modifiers to modify the display property of each element.

### Usage

#### `.o-list--block`

<div class="o-list o-list--block u-mt-small">
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
</div>

<style lang="scss">
@import '../../.vuepress/scss/main.scss';
@import './outline.css';

p {
  margin-block-start: 1em;
  margin-block-end: 1em;
}

h2 {
  padding-bottom: 0.3rem;
}
</style>
