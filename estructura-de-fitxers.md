# Estructura de fitxers

L'estructura de fitxers Sass del projecte seguiran una estructura que repliqui les 7 capes. Els arxius concatenaran el nom de la capa i el nom del propi arxiu, per facilitar-ne la localització:

```
scss/
    main.scss
    1-Settings/
        _settings.colors.scss /* variables de colors */
        ...
    2-Tools/
        _tools.clearfix.scss /* mixins per clearfix */
        ...
    3-Generic/
        _generic.normalize.scss /* NormalizeCSS */
        ...
    4-Base/
        _base.headings.scss /* h1{}, h2{}, h3{}... */
        _base.images.scss /* img{} */
        _base.page.scss /* html{} */
        ...
    5-Objects/
        _objects.media.scss /* .o-media{}... */
        _objects.layout.scss /* .o-layout{}... */
        _objects.pack.scss /* .o-pack{}... */
        ...
    6-Components/
        _components.button.scss /* .c-button{}... */
        ...
    7-Utilities/
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
        1-Settings/
        ...
```

En qualsevol cas, l'estructura definitiva quedarà condicionada, evidentment, per l'estructura del projecte on s'apliqui. El que cal mantenir és que les capes han d'incloure's en l'ordre correcte.

