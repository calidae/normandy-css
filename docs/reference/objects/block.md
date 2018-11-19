# Block

| Class         | Property                            |
| --------------| ----------------------------------- |
| o-block       | display: block text-align: center |
| o-block__body | display: block                      |
| o-block--right| text-align:right                    |
| o-block--left | text-align:left                     |


::: tip Where can I see Size Modifiers?
 It is located in `5-Objects/_objects.block.scss`
:::
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

<code>
<p class="u-m u-text-h4">flush</p>
    <div class="o-block o-block--flush">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">tiny</p>
    <div class="o-block o-block--tiny">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">small</p>
    <div class="o-block o-block--small">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">large</p>
    <div class="o-block o-block--large">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">huge</p>
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

<br>Use `o-block--{alignment}`

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

<code>
<p class="u-m u-text-h4">left</p>
    <div class="o-block o-block--left">
        <div class="o-block__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-block__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">right</p>
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