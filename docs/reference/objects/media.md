# Media

| Class                 | Property                               |
| --------------------- | -------------------------------------- |
| o-media               | display: flex  align-items: flex-start |

See more in /scss/5-Objects/_objects.media.scss

```css

.o-media__img {
  margin-right: $global-spacing-unit;

  > img {
    display: block;
  }

}

.o-media__body {
  flex: 1;

  &,
  > :last-child {
    margin-bottom: 0;
  }

}

```

---

## Media Object

<br>Use `o-media` to create a media-object

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

<br>Use `o-media--{size}`

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

<code>
<p class="u-m u-text-h4">flush</p>
    <div class="o-media o-media--flush">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">tiny</p>
    <div class="o-media o-media--tiny">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">small</p>
    <div class="o-media o-media--small">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">large</p>
    <div class="o-media o-media--large">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">huge</p>
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

<br>Use `o-media--{alignment}`

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

<code>
<p class="u-m u-text-h4">middle</p>
    <div class="o-media o-media--middle">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">bottom</p>
    <div class="o-media o-media--bottom">
        <div class="o-media__img">
            <img src="http://unsplash.it/100" alt="Placeholder image" />
        </div>
        <div class="o-media__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint. Deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sed, omnis ipsa exercitationem illo ut. Eos, porro voluptas unde velit totam aliquid iste molestias deleniti necessitatibus et quia, temporibus, ullam!
        </div>
    </div>
<p class="u-m u-text-h4">stretch</p>
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

<p class="u-m u-text-h4">reverse</p>
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