# Cover

Place any text as a cover from an image.

::: tip Where is it?
The Cover object is located in `5-Objects/_objects.cover.scss`.
:::

## Elements

The Cover Object has 2 elements:

- `o-cover__body`

### Usage

```html
<div class="o-cover o-cover--demo">
  <div class="o-cover__body">Lorem ipsum dolor sit amet</div>
</div>
```

<div class="o-cover o-cover--demo">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div>

## Size modifiers

Use the size modifiers to give a size to the body of the object

::: tip Where can I see more about the $global-spacing-unit?
It is located in `1-Settings/_settings.core.scss`
:::

| Class          | Property                    |
| -------------- | --------------------------- |
| o-cover--flush | `0` 											   |
| o-cover--tiny  | `$global-spacing-unit-tiny` |
| o-cover--small | `$global-spacing-unit-small`|
| o-cover--large | `$global-spacing-unit-large`|
| o-cover--huge  | `$global-spacing-unit-huge` |


### Usage

#### `.o-cover--flush`


<div class="o-cover o-cover--flush o-cover--demo u-mt-small">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div> 

#### `.o-cover--tiny`

<div class="o-cover o-cover--tiny o-cover--demo u-mt-small">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div>

#### `.o-cover--small`

<div class="o-cover o-cover--small o-cover--demo u-mt-small">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div>

#### `.o-cover--large`

<div class="o-cover o-cover--large o-cover--demo u-mt-small">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div>

#### `.o-cover--huge`

<div class="o-cover o-cover--huge o-cover--demo u-mt-small">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div>

## Alignment modifiers

Use alignment modifiers to change the elements' alignment.

| Class           | Property  |
| --------------- | --------- |
| o-cover--top    | `0` 		  |
| o-cover--bottom | `0` 			|
| o-cover--left   | `0` 		  |
| o-cover--right  | `0` 			|


#### `.o-cover--top`

<div class="o-cover o-cover--top o-cover--demo u-mt-small">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div>

#### `.o-cover--bottom`

<div class="o-cover o-cover--bottom o-cover--demo u-mt-small">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div>

#### `.o-cover--left`

<div class="o-cover o-cover--left o-cover--demo u-mt-small">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div>

#### `.o-cover--right`

<div class="o-cover o-cover--right o-cover--demo u-mt-small">
		<div class="o-cover__body">
				Lorem ipsum dolor sit amet
		</div>
</div>

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
