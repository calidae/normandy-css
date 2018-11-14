# Single responsibility

El principi de responsabilitat única, un dels cinc principis SOLID de
desenvolupament de software, defineix que un element ha de fer una sola cosa,
només una, i fer-la bé.

D'aquesta manera, el codi resultant és més robust i es pot reaprofitar molt més
al combinar-lo amb altres blocs de codi semblants. A més són molt més senzills
d'entendre.

```html
<!-- Bad -->
<nav class="global-nav">...</nav>

<!-- Good -->
<nav class="wrapper menu fixed branded">...</nav>
```

Noti's que en aquest exemple no s'utilitzen ni Namespaces ni cap tipus de
nomenclatura específica. **L'exemple només serveix com a mostra de classes de
responsabilitat única**.

Font: [The single responsibility principle applied to
CSS](https://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/).
