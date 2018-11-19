# Media

| Class                 | Property                               |
| --------------------- | -------------------------------------- |
| o-media               | display: flex  align-items: flex-start |

::: tip Where can I see Size and Alignment Modifiers?
 It is located in `5-Objects/_objects.media.scss`
:::

---

## Media Object

Use `o-media` to create a media-object

```html
<div class="o-media">
    <div class="o-media__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-media__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---

<code>
    <div class="o-media">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Numquam, reiciendis fugiat ut voluptate fugit quisquam modi
            maiores, perspiciatis quasi praesentium 
            ab vel at repellat amet atque?
        </div>
    </div>
</code>


## Size modifiers

Use `o-media--{size}`

```html
<div class="o-media o-media--{size}">
    <div class="o-media__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-media__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---

### Usage

#### `.o-media--flush`

<code>
    <div class="o-media o-media--flush">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

#### `.o-media--tiny`
<code>
    <div class="o-media o-media--tiny">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

#### `.o-media--small`
<code>
    <div class="o-media o-media--small">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

#### `.o-media--large`
<code>
    <div class="o-media o-media--large">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

#### `.o-media--huge`
<code>
    <div class="o-media o-media--huge">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

## Alignment modifiers

Use `o-media--{alignment}`

```html
<div class="o-media o-media--{alignment}">
    <div class="o-media__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-media__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---

### Usage

#### `.o-media--middle`

<code>
    <div class="o-media o-media--middle">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

#### `.o-media--bottom`
<code>
    <div class="o-media o-media--bottom">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
</code>

#### `.o-media--stretch`
<code>
<div class="o-media o-media--stretch">
    <div class="o-media__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-media__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
    </div>
</div>
</code>

## Reverse Modifier

Use `o-media--reverse`

```html
<div class="o-media o-media--reverse">
    <div class="o-media__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-media__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores,
        perspiciatis quasi praesentium ab vel at repellat amet atque?
    </div>
</div>
```
---

### Usage

#### `.o-media--reverse`

<code>
<div class="o-media o-media--reverse">
    <div class="o-media__img">
        <img src="http://unsplash.it/100" alt="Placeholder image" />
    </div>
    <div class="o-media__body">
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