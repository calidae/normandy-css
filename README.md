# Normandy CSS

Normandy is a CSS boilerplate that gives you an initial structure for your CSS.

Normandy is not a UI library, a framework, or a complete CSS solution that you can plug in and call it a day.

It's build upon [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528), [BEM](http://getbem.com/naming/) and [OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/). Normandy is a customized version of [inuitcss](https://github.com/inuitcss/inuitcss).

Want to read more about Normandy? Check out the underlying principles on [Gitbook](https://afontcu.gitbooks.io/normandy).



## Installation

You can install Normandy via npm:

```shell
npm install --save-dev normandy-css
```

Since Normandy is using Sass, you will need to add its core files to your own `main.scss`.

We recommend a structure as follows, where you zip Normandy layers with your own:

```scss
@import "/node_modules/normandy-css/scss/1-Settings/main";
@import "/custom/path/to/my/scss/1-Settings/main";

@import "/node_modules/normandy-css/scss/2-Tools/main";
@import "/custom/path/to/my/scss/2-Tools/main";

@import "/node_modules/normandy-css/scss/3-Generic/main";
@import "/custom/path/to/my/scss/3-Generic/main";

@import "/node_modules/normandy-css/scss/4-Base/main";
@import "/custom/path/to/my/scss/4-Base/main";

@import "/node_modules/normandy-css/scss/5-Objects/main";
@import "/custom/path/to/my/scss/5-Objects/main";

@import "/node_modules/normandy-css/scss/6-Components/main";
@import "/custom/path/to/my/scss/6-Components/main";

@import "/node_modules/normandy-css/scss/7-Utilities/main";
@import "/custom/path/to/my/scss/7-Utilities/main";
```

This way, we maintain the desired layer structure and you can also override Normandy values with your own.


## Initial configuration

Normandy is built upon some [design system principles](https://medium.muz.li/what-is-a-design-system-1e43d19e7696) that allow the user to customize the whole CSS output.

The core variables of the boilerplate are placed in, well, the core file, `1-Settings/_settings.core.scss`:

```scss
$global-baseline: 6px;

$unit-factor-tiny:   1 !default;
$unit-factor-small:  2 !default;
$unit-factor:        4 !default;
$unit-factor-large:  8 !default;
$unit-factor-huge:  16 !default;

$global-font-size:   16px;
$global-line-height: 24px;
```

Our recommendation is to customize such variables at the beginning of the project. The value of these variables have implications in almost every layer, thus changing them in an ongoing project could carry undesired side effects.


## Daily usage

The idea is that Normandy provides you with customizable constraints (specific values for spacing, colors, text sizes...) and a toolset of objects and utilities to build your interfaces.

Variables such as `$global-spacing-unit...` are the ones that you'll end up using the most.

Picture this: you need to define a proportional CSS Grid gap in order to achieve a sensible [vertical rythm](https://zellwk.com/blog/why-vertical-rhythms/). You would do something like this:

```scss
.c-component__grid {
  display: grid;
  grid-gap: $global-spacing-unit-small;
}
```

We use the `$global-` prefix to specify variables that could (should?) be used across all Normandy layers. The only exception to that rule are colors.


## FAQs

### "I want to play with Normandy!"

Great! There's an `output.css` file in the root directory of the project with the compiled version of the default values. Feel free to grab this file and add it to any Codepen, Fiddle or Codesandbox. Bear in mind that you won't be able to benefit from Sass variables (obvs) and other goodies.


### "I want to contribute"

Lovely ❤️. We are open to any kind of input. Feel free to submit issues or PRs to the repository!
