# Cover

Stacked image-with-text object. A simple abstraction to cover a very commonly
occurring design pattern.

| Class         | Property                                                            |
| --------------| ------------------------------------------------------------------- |
| o-cover       | display: flex, background-position: center; background-size: cover; |
| o-cover__body | margin:auto padding: $global-spacing-unit                           |                         

```css

/**
 * 1. Center the body into parent element.
 */

.o-cover__body {
    margin: auto; /* 1 */
    padding: $global-spacing-unit;


/* Size variants.
===================================================================== */

    .o-cover--flush & {
        padding: 0;
    }

    .o-cover--tiny & {
        padding: $global-spacing-unit-tiny;
    }

    .o-cover--small & {
        padding: $global-spacing-unit-small;
    }

    .o-cover--large & {
        padding: $global-spacing-unit-large;
    }

    .o-cover--huge & {
        padding: $global-spacing-unit-huge;
    }

/* Alignment variants.
===================================================================== */

    .o-cover--top & {
        margin-top: 0;
    }

    .o-cover--bottom & {
        margin-bottom: 0;
    }

    .o-cover--left & {
        margin-left: 0;
    }

    .o-cover--right & {
        margin-right: 0;
    }
}

```

---

## Cover Object

#### Use `o-cover` to create a cover-object

```html
<div class="o-cover o-cover--demo">
     <div class="o-cover__body">
        Lorem ipsum dolor sit amet
    </div>
</div>
```
---

<code>
    <div class="o-cover o-cover--demo">
        <div class="o-cover__body">
            Lorem ipsum dolor sit amet
        </div>
    </div>
</code>

## Size modifiers

#### Use `o-cover--{size}`

```html
<div class="o-cover o-cover--demo">
     <div class="o-cover__body">
        Lorem ipsum dolor sit amet
    </div>
</div>
```
---

<code>
    <p class="u-m u-text-h4">flush</p>
    <div class="o-cover o-cover--flush o-cover--demo">
        <div class="o-cover__body">
            Lorem ipsum dolor sit amet
        </div>
    </div>  
    <p class="u-m u-text-h4">tiny</p>
    <div class="o-cover o-cover--tiny o-cover--demo">
        <div class="o-cover__body">
            Lorem ipsum dolor sit amet
        </div>
    </div>
    <p class="u-m u-text-h4">small</p>
    <div class="o-cover o-cover--small o-cover--demo">
        <div class="o-cover__body">
            Lorem ipsum dolor sit amet
        </div>
    </div>
    <p class="u-m u-text-h4">large</p>
    <div class="o-cover o-cover--large o-cover--demo">
        <div class="o-cover__body">
            Lorem ipsum dolor sit amet
        </div>
    </div>
    <p class="u-m u-text-h4">huge</p>
    <div class="o-cover o-cover--huge o-cover--demo">
        <div class="o-cover__body">
            Lorem ipsum dolor sit amet
        </div>
    </div>
</code>

## Alignment modifiers

<br>Use `o-cover--{alignment}`

<code>
<p class="u-m u-text-h4">left</p>
    <div class="o-cover o-cover--left o-cover--demo">
        <div class="o-cover__body">
            Lorem ipsum dolor sit amet
        </div>
      </div>
<p class="u-m u-text-h4">right</p>
      <div class="o-cover o-cover--right o-cover--demo">
          <div class="o-cover__body">
              Lorem ipsum dolor sit amet
          </div>
      </div>
</code>


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

.o-cover--demo {
    background-image:url('http://unsplash.it/960/600');
    height: 250px;
}

</style>