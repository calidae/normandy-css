# Colors

Use $global-colors. 

| Class                | Property                    |
| -------------------- | --------------------------- |
| u-text-{color}       | `color: {color}`            |
| u-background-{color} | `background-color: {color}` |


### Text color

<br>

 `u-text-{color}` can be specified the color text


```html
<p>Lorem ipsum dolor sit amet</p>
```

<pre>
   <p>Lorem ipsum dolor sit amet</p>
</pre>

### Background color

<br>

 `u-background-{color}` can be specified the color background


```html
<p class="u-background-notify-warning">Lorem ipsum dolor sit amet</p>
```

<pre>
   <p class="u-p-tiny u-background-notify-warning">Lorem ipsum dolor sit amet</p>
</pre>

<style lang="scss">
@import '../../.vuepress/scss/main.scss';

pre {
    white-space: pre-wrap;
        color:#EAECEF;

    .pre__title {
        font-size: 0.9rem;
        font-weight: bold;
        padding-top: 2rem;
        opacity:.5;
    }
}
</style>