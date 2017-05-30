# Estructura de fitxers

L'estructura de fitxers Sass del projecte seguiran una estructura que repliqui les 7 capes. Els arxius concatenaran el nom de la capa i el nom del propi arxiu, per facilitar-ne la localització:

```javascript
scss/
main.scss
settings/
    _settings.colors.scss /* variables de colors */
    ...
tools/
    _tools.clearfix.scss /* mixins per clearfix */
    ...
generic/
    _generic.normalize.scss /* NormalizeCSS */
    _generic.box-sizing.scss /* https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
    ...
base/
    _base.headings.scss /* h1{}, h2{}, h3{}... */
    _base.images.scss /* img{} */
    _base.page.scss /* html{} */
    ...
objects/
    _objects.media.scss /* .o-media{}... */
    _objects.layout.scss /* .o-layout{}... */
    _objects.pack.scss /* .o-pack{}... */
    ...
components/
    _components.button.scss /* .c-button{}... */
    ...
utilities/
    _utilities.print.scss /* @media print {}... */
    _utilities.hide.scss /* .u-hidden{}... */
    ...
```



En cas d'utilitzar una estructura atòmica per components en tot el projecte, els arxius de Components i Objects s'estructuraran conjuntament amb la resta d'arxius del Component o Object en concret. La resta d'arxius Sass seguiran l'estructura original:

```
components/
    button/
        button.html
        button.js
        _button.scss
assets/
    sass/
        main.scss
        settings/
        ...
```



