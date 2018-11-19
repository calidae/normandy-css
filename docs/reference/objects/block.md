# Block

Stacked image-with-text object. A simple abstraction to cover a very commonly
occurring design pattern.


::: tip Where can I see Block object?
 It is located in `5-Objects/_objects.block.scss`
:::
---

## Block Object

Use `o-block` to create a block-object

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

Use `o-block--{size}`

```html
<div class="o-block o-block--{size}">
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

### Usage

#### `.o-block--flush`
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

#### `.o-block--tiny`
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

#### `.o-block--small`
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

#### `.o-block--large`
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

#### `.o-block--huge`
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

## Alignment modifiers

Use `o-block--{alignment}`

```html
<div class="o-block o-block--{alignment}">
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

### Usage

#### `.o-block--left`
<code>
    <div class="o-block o-block--left">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

#### `.o-block--right`
<code>
    <div class="o-block o-block--right">
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

code {
    div {
        color:black;
    }
    p {
        color:black;
    }
}

</style>