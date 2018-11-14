# Text Utility

Usual text utility classes to overcome the common text management needs.

## Text Alignment

<br> Is used for aligning the inner content of a block element.

| Class         | Property                    |
| ------------- | --------------------------- |
| u-text-left   | `text-align: left` `default`|
| u-text-center | `text-align: center`        |
| u-text-right  | `text-align: right`         |
| u-text-justify| `text-align: justify`       |

### Left `default`
<br> Use `u-text-left` to aligns the text to the left:

```html
<p class="u-text-branding-primary u-text-left">Hello my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br>Aenean commodo ligula eget dolor.<br>Aenean massa. Cum sociis natoque penatibus et magnis dis<br>parturient montes,nascetur ridiculus mus. Donec quam felis,<br>ultricies nec, pellentesque eu, pretium quis, sem.
    </p>
</pre>

---

### Center
<br> Use `u-text-center` to center the text:

```html
<p class="u-text-branding-primary u-text-center">Hello my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br>Aenean commodo ligula eget dolor.<br>Aenean massa. Cum sociis natoque penatibus et magnis dis<br>parturient montes,nascetur ridiculus mus. Donec quam felis,<br>ultricies nec, pellentesque eu, pretium quis, sem.
    </p>
</pre> 

---

### Right
<br> Use `u-text-right` to aligns the text to the right:

```html
<p class="u-text-branding-primary u-text-right">Hello my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br>Aenean commodo ligula eget dolor.<br>Aenean massa. Cum sociis natoque penatibus et magnis dis<br>parturient montes,nascetur ridiculus mus. Donec quam felis,<br>ultricies nec, pellentesque eu, pretium quis, sem.
    </p>
</pre> 

---

### Justify
<br> Use `u-text-justify` Stretches the lines so that each line has equal width:

```html
<p class="u-text-branding-primary u-text-justify">Hello my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br>Aenean commodo ligula eget dolor.<br>Aenean massa. Cum sociis natoque penatibus et magnis dis<br>parturient montes,nascetur ridiculus mus. Donec quam felis,<br>ultricies nec, pellentesque eu, pretium quis, sem.
    </p>
</pre> 

---

<style lang="scss">
@import '../../.vuepress/scss/main.scss';
</style>