# Cover

Stacked image-with-text object. A simple abstraction to cover a very commonly
occurring design pattern.

| Class         | Property                                                            |
| --------------| ------------------------------------------------------------------- |
| o-cover       | display: flex, background-position: center; background-size: cover; |
| o-cover__body | margin:auto padding: $global-spacing-unit                           |                         

```css

.o-cover__body {
    margin-bottom: $global-spacing-unit;


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

```

---

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
    height: 250px;
}

</style>