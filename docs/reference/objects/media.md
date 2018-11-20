# Media

An image to the left, with descriptive content to the right.

::: tip Where is it?
The Media object is located in `5-Objects/_objects.media.scss`.
:::

## Elements

The Media Object has 2 elements:

- `o-media__img`
- `o-media__body`

### Usage

```html{1,2,5}
<div class="o-media">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
    reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis
    quasi praesentium ab vel at repellat amet atque?
  </div>
</div>
```

---

<div class="o-media">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium  ab vel at repellat amet atque?
  </div>
</div>

## Size modifiers

Use the size modifiers to adapt the gap between the elements.

| Class          | Elements' gap                |
| -------------- | ---------------------------- |
| o-media--flush | `0`                          |
| o-media--tiny  | `$global-spacing-unit-tiny`  |
| o-media--small | `$global-spacing-unit-small` |
| o-media--large | `$global-spacing-unit-large` |
| o-media--huge  | `$global-spacing-unit-huge`  |

::: tip
\$global-spacing-unit map is located in `1-Settings/_settings.core.scss`
:::

### Usage

#### `.o-media--flush`

<div class="o-media o-media--flush u-mt-small">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-media--tiny`

<div class="o-media o-media--tiny u-mt-small">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?         </div>
</div>

#### `.o-media--small`

<div class="o-media o-media--small u-mt-small">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-media--large`

<div class="o-media o-media--large u-mt-small">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-media--huge`

<div class="o-media o-media--huge u-mt-small">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

## Alignment modifiers

Use the alignment modifiers to change the vertical alignment of the body.

| Class            | Body's alignment                  |
| ---------------- | --------------------------------- |
| o-media--center  | Center                            |
| o-media--bottom  | Bottom                            |
| o-media--stretch | Fill the same height as the image |

### Usage

#### `.o-media--center`

<div class="o-media o-media--center u-mt-small">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-media--bottom`

<div class="o-media o-media--bottom u-mt-small">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

#### `.o-media--stretch`

<div class="o-media o-media--stretch u-mt-small">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

## Reverse modifiers

Use the reverse modifier to swap positions between elements.

### Usage

#### `.o-media--reverse`

<div class="o-media o-media--reverse u-mt-small">
  <div class="o-media__img">
    <img src="http://unsplash.it/100" alt="Placeholder image" />
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit uisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque?
  </div>
</div>

<style lang="scss">
@import './outline.css';
</style>
