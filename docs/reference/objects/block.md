# Block

Stacked image-with-text object. A simple abstraction to cover a very commonly
occurring design pattern.

| Class         | Property                            |
| --------------| ----------------------------------- |
| o-block       | display: block , text-align: center |
| o-block__body | display: block                      |
| o-block--right| text-align:right                    |
| o-block--left | text-align:left                     |

```css

.o-block__img {
    margin-bottom: $global-spacing-unit;


/* Size variants.
===================================================================== */

    .o-block--flush > & {
        margin-bottom: 0;
    }

    .o-block--tiny > & {
        margin-bottom: $global-spacing-unit-tiny;
    }

    .o-block--small > & {
        margin-bottom: $global-spacing-unit-small;
    }

    .o-block--large > & {
        margin-bottom: $global-spacing-unit-large;
    }

    .o-block--huge > & {
        margin-bottom: $global-spacing-unit-huge;
    }

}

```

---

## Block Object

<br>Use `o-block` to create a block-object

```html
<div class="o-block">
    <div class="o-block__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-block__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---

<code>
    <div class="o-block">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Numquam, reiciendis fugiat ut voluptate fugit quisquam modi
            maiores, perspiciatis quasi praesentium 
            ab vel at repellat amet atque?
        </div>
    </div>
</code>

## Size modifiers

<br>Use `o-block--{size}`

### Flush

```html
<div class="o-block o-block--flush">
    <div class="o-block__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-block__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---

<code>
    <div class="o-block o-block--flush">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

### Tiny

```html
<div class="o-block o-block--tiny">
    <div class="o-block__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-block__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---

<code>
    <div class="o-block o-block--tiny">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

### Small

```html
<div class="o-block o-block--small">
    <div class="o-block__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-block__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---

<code>
    <div class="o-block o-block--small">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

### Large

```html
<div class="o-block o-block--large">
    <div class="o-block__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-block__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---


<code>
    <div class="o-block o-block--large">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

### Huge

```html
<div class="o-block o-block--huge">
    <div class="o-block__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-block__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---

<code>
    <div class="o-block o-block--huge">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

<style lang="scss">
@import '../../.vuepress/scss/main.scss';
@import './outline.css';
</style>