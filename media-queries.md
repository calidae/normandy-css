# Media queries.

Normandy-css inclou Sass-MQ per defecte com a eina per gestionar media queries.

La confguació base es troba a l'arxiu _settings.media-queries.scss i consisteix en una declaració de breakpoints amb els que treballar.
Editeu aquests breakpoints segons les necessitats de cada projecte.

```css
$mq-breakpoints: (
  mobile:   480px,
  tablet:   768px,
  desktop:  1024px,
  wide:     1240px,
  full:     1650px
)
```

Exemple bàsic de media queries disponibles:

``` CSS
.square {
  width: 250px;
  height: 250px;
  background-color: #f00;
  font-size: 16px;

  @include mq($from: tablet) {
    background-color: #0f0;
  }

  @include mq($until: tablet) {
    color: #fff;
  }

  @include mq(tablet, desktop) {
    font-size: 21px;
  }
}
```

Per a més informació sobre el funcionament [Sass-MQ](https://github.com/sass-mq/sass-mq)
