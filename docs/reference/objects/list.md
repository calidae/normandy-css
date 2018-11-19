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

Use `o-list--block` to display each element on its own block.

```html
<div class="o-list o-list--block">
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
  <div class="o-list__item">Item</div>
</div>
```

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

code {
    div {
        color:black;
    }
    p {
        color:black;
    }
}

p {
  margin-block-start: 1em;
  margin-block-end: 1em;
}

h2 {
  padding-bottom: 0.3rem;
}

</style>
