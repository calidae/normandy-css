# Encapsulament de frameworks

Separarem mitjançant brackets \(`[ ]`\) les classes pròpies, definides per
nosaltres, de les classes que proporcionin frameworks i eines de tercers.

Definim primer les classes pròpies i posteriorment les classes de tercers.

Exemple:

```html
<div class="uk-clearfix c-block__element uk-grid"></div> <!-- Bad -->
<div class="uk-clearfix uk-grid c-block__element"></div> <!-- Bad -->

<div class="c-block__element [ uk-clearfix uk-grid ]"></div> <!-- Good -->
```



