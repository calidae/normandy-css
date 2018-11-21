# Getting Started

Normandy is a CSS boilerplate that gives you an initial structure for your CSS.

It is not a UI library, a framework, or a complete CSS solution that you can
plug in and call it a day.

It's build upon
[ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528),
[BEM](http://getbem.com/naming/) and
[OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/).
Normandy is a customized version of
[inuitcss](https://github.com/inuitcss/inuitcss).

## Installation

You can install Normandy via npm:

```shell
npm install --save-dev normandy-css
```

Since Normandy is using Sass, you will need to add its core files to your own
`main.scss`.

We recommend a structure as follows, where you zip Normandy layers with your
own:

```scss
@import '/node_modules/normandy-css/scss/1-Settings/main';
@import '/my/path/to/scss/1-Settings/main';

@import '/node_modules/normandy-css/scss/2-Tools/main';
@import '/my/path/to/scss/2-Tools/main';

@import '/node_modules/normandy-css/scss/3-Generic/main';
@import '/my/path/to/scss/3-Generic/main';

@import '/node_modules/normandy-css/scss/4-Base/main';
@import '/my/path/to/scss/4-Base/main';

@import '/node_modules/normandy-css/scss/5-Objects/main';
@import '/my/path/to/scss/5-Objects/main';

@import '/node_modules/normandy-css/scss/6-Components/main';
@import '/my/path/to/scss/6-Components/main';

@import '/node_modules/normandy-css/scss/7-Utilities/main';
@import '/my/path/to/scss/7-Utilities/main';
```

This way, you maintain the desired layer structure while allowing your values
to override Normandy's.

## Initial configuration

Normandy is built upon some [design system
principles](https://medium.muz.li/what-is-a-design-system-1e43d19e7696) that
allow the user to customize the whole CSS output.

The idea is that Normandy provides you with customizable constraints (specific
values for spacing, colors, text sizes...) and a toolset of objects and
utilities to build your interfaces.

The core variables of the boilerplate are placed in, well, the core file,
`1-Settings/_settings.core.scss`:

```scss
$global-baseline: 6px;

$unit-factor-tiny: 1 !default;
$unit-factor-small: 2 !default;
$unit-factor: 4 !default;
$unit-factor-large: 8 !default;
$unit-factor-huge: 16 !default;

$global-font-size: 16px;
$global-line-height: 24px;
```

Our recommendation is to **customize core variables at the beginning of the
project**. The value of these variables have implications in almost every
layer, thus changing them in an ongoing project could carry undesired side
effects.

## Daily usage

The idea behind Normandy is to use a
[utility-first](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
approach, where you use the Utilities layer to create your UI, and the abstract
out your components when you see repeating patterns.

This utility-first approach, with the constraints of a design system, allows
you to create consistent layouts.

Picture this: you need to define a proportional CSS Grid gap in order to
achieve a sensible [vertical
rhythm](https://zellwk.com/blog/why-vertical-rhythms/). You would do something
like this:

```scss
.c-component__grid {
  display: grid;
  grid-gap: $global-spacing-unit-small;
}
```

## FAQs

### "I want to play with Normandy!"

Great! There's an `output.css` file in the root directory of the project with
the compiled version of the default values. Feel free to grab this file and add
it to any Codepen, Fiddle or Codesandbox. Bear in mind that you won't be able
to benefit from Sass variables (obvs) and other goodies.

### "I want to contribute"

Lovely ❤️. We are open to any kind of input. Feel free to submit issues or PRs
to the repository!

#### Install dependencies

```shell

$ npm install

```

#### Start a watcher

```shell

$ npm start

```

This way, output.css will be updated automatically on every change you make.

#### Run tests

```shell

$ npm test

```

Make sure all tests pass before submitting a PULL REQUEST.

Enjoy!
