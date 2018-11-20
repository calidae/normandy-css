# Block

Stacked image-with-text object. A simple abstraction to cover a very commonly
occurring design pattern.

::: tip Where is it?
The Block object is located in `5-Objects/_objects.block.scss`.
:::

## Elements

The Block Object has 2 elements:

- `o-block__img`
- `o-block__body`

### Usage

```html{1,2,5}
<div class="o-block">
  <div class="o-block__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-block__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
    reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis
    quasi praesentium ab vel at repellat amet atque?
  </div>
</div>
```

<div class="o-block u-mt-small">
  <div class="o-block__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-block__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

## Size modifiers

Use the size modifiers to adapt the gap between the elements.

| Class          | Elements' gap                |
| -------------- | ---------------------------- |
| o-block--flush | `0`                          |
| o-block--tiny  | `$global-spacing-unit-tiny`  |
| o-block--small | `$global-spacing-unit-small` |
| o-block--large | `$global-spacing-unit-large` |
| o-block--huge  | `$global-spacing-unit-huge`  |

### Usage

#### `.o-block--flush`

<div class="o-block o-block--flush u-mt-small">
  <div class="o-block__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-block__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-block--tiny`

<div class="o-block o-block--tiny u-mt-small">
  <div class="o-block__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-block__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-block--small`

<div class="o-block o-block--small u-mt-small">
  <div class="o-block__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-block__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-block--large`

<div class="o-block o-block--large u-mt-small">
  <div class="o-block__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-block__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-block--huge`

<div class="o-block o-block--huge u-mt-small">
  <div class="o-block__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-block__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

## Alignment modifiers

Use alignment modifiers to change the elements' alignment.

| Class          | Alignment |
| -------------- | --------- |
| o-block--left  | left      |
| o-block--right | right     |

### Usage

#### `.o-block--left`

<div class="o-block o-block--left u-mt-small">
  <div class="o-block__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-block__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-block--right`

<div class="o-block o-block--right u-mt-small">
  <div class="o-block__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-block__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

<style lang="scss">
@import './outline.css';
</style>
