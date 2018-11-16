# Normandy CSS

Normandy is a CSS boilerplate that gives you an initial structure for your CSS.

It's build upon
[ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528),
[BEM](http://getbem.com/naming/) and
[OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/).
Normandy is a customized version of
[inuitcss](https://github.com/inuitcss/inuitcss).


## Documentation

To check out our Getting Started and References documentation, visit our [Github
Pages](https://calidae.github.io/normandy-css/).


## Installation

You can install Normandy from npm:

```shell
npm install --save-dev normandy-css
```

Since Normandy is using Sass, you will need to add its core files to your own
`main.scss`.

We recommend a structure as follows, where you zip Normandy layers with your
own:

```scss
@import "/node_modules/normandy-css/scss/1-Settings/main";
@import "/my/path/to/scss/1-Settings/main";

@import "/node_modules/normandy-css/scss/2-Tools/main";
@import "/my/path/to/scss/2-Tools/main";

@import "/node_modules/normandy-css/scss/3-Generic/main";
@import "/my/path/to/scss/3-Generic/main";

@import "/node_modules/normandy-css/scss/4-Base/main";
@import "/my/path/to/scss/4-Base/main";

@import "/node_modules/normandy-css/scss/5-Objects/main";
@import "/my/path/to/scss/5-Objects/main";

@import "/node_modules/normandy-css/scss/6-Components/main";
@import "/my/path/to/scss/6-Components/main";

@import "/node_modules/normandy-css/scss/7-Utilities/main";
@import "/my/path/to/scss/7-Utilities/main";
```

This way, you maintain the desired layer structure while allowing your values to
override Normandy's.


## FAQs

### "I want to play with Normandy!"

Great! There's an `output.css` file in the root directory of the project with
the compiled version of the default values. Feel free to grab this file and add
it to any Codepen, Fiddle or Codesandbox.

Bear in mind that you won't be able to benefit from Sass variables (obvs) and
other goodies.

Also, please notice that Normandy isn't intended to be used this way. You should
customize its Settings to match your design guidelines.


### "I want to contribute"

Lovely ❤️. We are open to any kind of input. Feel free to submit issues or PRs
to the repository!

First you'll need to install dependencies:

```shell
npm install
```

Then, run the following script to compile Sass. This will lint on save and update the `output.css` file.

```shell
npm start
````


Also remember to pass the linters and tests!

```shell
npm test
````


Enjoy!
