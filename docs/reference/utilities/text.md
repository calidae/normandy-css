# Typography

Usual text utility classes to overcome the common text management needs.

## Text Alignment

<br> Is used for aligning the inner content of a block element.

| Class         | Property             |
| ------------- | ---------------------|
| u-text-left   | `text-align: left`   |
| u-text-center | `text-align: center` |
| u-text-right  | `text-align: right`  |
| u-text-justify| `text-align: justify`|

### Left
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

## Font Size

<br> Utilities for controlling the font size of an element.

| Class         | Property         |
| ------------- | -----------------|
| u-text-h6     | `font-size: 16px`|
| u-text-h5     | `font-size: 18px`|
| u-text-h4     | `font-size: 20px`|
| u-text-h3     | `font-size: 24px`|
| u-text-h2     | `font-size: 28px`|
| u-text-h1     | `font-size: 32px`|


### Usage

<br> Control the font size of an element using the `.u-text-{size}` utilities.

<pre>
<div class="u-text-notify-success">
    <br>.u-text-h6
    <span class="u-text-branding-primary u-text-h6">My name is Normandy!</span>
    <br>.u-text-h5
    <span class="u-text-branding-primary u-text-h5">My name is Normandy!</span>
    <br>.u-text-h4
    <span class="u-text-branding-primary u-text-h4">My name is Normandy!</span>
    <br>.u-text-h3
    <span class="u-text-branding-primary u-text-h3">My name is Normandy!</span>
    <br>.u-text-h2
    <span class="u-text-branding-primary u-text-h2">My name is Normandy!</span>
    <br>.u-text-h1
    <span class="u-text-branding-primary u-text-h1">My name is Normandy!</span>
</div>
</pre> 


## Font Weight

<br> Utilities for controlling the font weight of an element.

| Class             | Property         |
| -------------   | -----------------|
| u-text-hairline | `font-weight: 100`|
| u-text-thin     | `font-weight: 200`|
| u-text-light    | `font-weight: 300`|
| u-text-normal   | `font-weight: 400`|
| u-text-medium   | `font-weight: 500`|
| u-text-semibold | `font-weight: 600`|
| u-text-bold     | `font-weight: 700`|
| u-text-extrabold| `font-weight: 800`|
| u-text-black    | `font-weight: 900`|

### Usage

<br> Control the font weight of an element using the `.u-text-{weight}` utilities.

<pre>
<div class="u-text-notify-success">
    <br>.u-text-hairline
    <span class="u-text-branding-primary u-text-hairline">My name is Normandy!</span>
    <br>.u-text-thin
    <span class="u-text-branding-primary u-text-thin">My name is Normandy!</span>
    <br>.u-text-light
    <span class="u-text-branding-primary u-text-light">My name is Normandy!</span>
    <br>.u-text-normal
    <span class="u-text-branding-primary u-text-normal">My name is Normandy!</span>
    <br>.u-text-medium
    <span class="u-text-branding-primary u-text-medium">My name is Normandy!</span>
    <br>.u-text-semibold
    <span class="u-text-branding-primary u-text-semibold">My name is Normandy!</span>
    <br>.u-text-bold
    <span class="u-text-branding-primary u-text-bold">My name is Normandy!</span>
    <br>.u-text-extrabold
    <span class="u-text-branding-primary u-text-extrabold">My name is Normandy!</span>
    <br>.u-text-black
    <span class="u-text-branding-primary u-text-black">My name is Normandy!</span>
</div>
</pre> 


## Styles, Decoration & Transform

<br> Utilities for controlling the style of text.

| Class               | Property                        |
| ------------------- | ------------------------------- |
| u-text-italic       | `font-style: italic`            |
| u-text-uppercase    | `text-transform: uppercase`     |
| u-text-lowercase    | `text-transform: lowercase`     |
| u-text-capitalize   | `text-transform: capitalize`    |
| u-text-underline    | `text-decoration: underline`    |
| u-text-line-through | `text-decoration: line-through` |
| u-text-no-underline | `text-decoration: none`         |

### Italics
<br> Use `u-text-italic`  utility to make text italic:

```html
<p class="u-text-italic">my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-italic">my name is Normandy!</p>
</pre>

### Uppercase
<br> Use `u-text-uppercase` utility to uppercase text.

```html
<p class="u-text-uppercase">my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-uppercase">my name is Normandy!</p>
</pre> 

### Lowercase
<br> Use `u-text-lowercase` utility to lowercase text.

```html
<p class="u-text-lowercase">MY NAME IS NORMANDY!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-lowercase">my name is Normandy!</p>
</pre> 

### Capitalization
<br> Use `u-text-capitalize` utility to capitalize text.

```html
<p class="u-text-capitalize">my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-capitalize">my name is Normandy!</p>
</pre> 

### Underline
<br> Use `u-text-underline` utility to underline text.

```html
<p class="u-text-underline">my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-underline">my name is Normandy!</p>
</pre> 

### Line Through
<br> Use `u-text-line-through` utility to through text.

```html
<p class="u-text-line-through">my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-line-through">my name is Normandy!</p>
</pre> 

### No Underline
<br> `u-text-no-underline` `default`
 Default value. Specifies no line for the text-decoration.

```html
<p class="u-text-no-underline">my name is Normandy!</p>
```

<pre>
    <p class="u-text-branding-primary u-text-no-underline">my name is Normandy!</p>
</pre> 


<style lang="scss">
@import '../../.vuepress/scss/main.scss';
</style>