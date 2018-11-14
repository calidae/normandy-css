# Nomenclatura BEM

L'estructura dels noms de les classes és la següent:

`.[namespace]-[block]__[element]--[modifier]`

Noti's els dos guionets baixos entre Block i Element, i els dos guionets entre
Element i Modifier.

Basat en la metodologia [BEM](http://bem.info/), aquesta estructura defineix
tres ítems bàsics: **Blocks**, **Elements** i **Modifier**.

## Block

Encapsula un component de la UI que té sentit per si sol. Es mapeja fàcilment
amb Objects i Components. Els Blocks es poden anidar i interactuar amb altres
Blocks, però no tenen precedències ni herències entre ells \(o sigui, un Block
no hauria de dependre d'un altre per aparèixer a la UI\).

```html
<form class="c-form">...</form>
```

```css
.c-form {
} /* Good */

form.c-form {
} /* Bad */
```

Un Block pot anidar-se dins d'altres Blocks a nivell semàntic \(HTML\), però no
a nivell de CSS. De fet, cada Block hauria de correspondre a un Component \(a
la sisena capa del triangle ITCSS\) i per tant residir en un fitxer
independent.

## Element

Un Element és una part d'un Block que no té sentit per si sol. Qualsevol
element està semànticament lligat al seu Block.

Dins d'un Block, tots els elements són semànticament iguals \(evitem reproduir
l'estructura del DOM a l'hora de definir estils\).

```html
<div class="c-form">
  <div class="c-form__input"><div class="c-form__icon"></div></div>
</div>
```

```css
.c-form__input {
} /* Good */
.c-form__icon {
} /* Good */

div.c-form__input {
} /* Bad */
.c-form .c-form__input .c-form__icon {
} /* Bad */
.c-form__input .c-form__icon {
} /* Bad */
.c-form__input > .c-form__icon {
} /* Bad */
```

## Modifier

Flag per Blocks o per Elements. Útils per canviar l'aspecte, el comportament o
l'estat. Serveix per proposar versions alternatives d'un Block o un Elements.

Un Modifier és una classe addicional.

```html
<div class="c-form c-form--hidden">
  <div class="c-form__input c-form__input--border-primary"></div>
  ...
</div>
```

```css
.c-form--hidden {
} /* Good */
.c-form__input--border-primary {
} /* Good */

.c-form__input.c-form__input--border-primary {
} /* Bad */
```

La majoria de dubtes sobre BEM queden resolts a les [FAQs de la seva
web](http://getbem.com/faq/).

Un altre benefici afegit de BEM és que millora el rendiment de renderitzat del
navegador. De fet, és la metodologia que recomana Google des d'aquest punt de
vista:

> If you’re looking for a good way to organize your CSS, BEM is a really good
> starting point, both from a structure point-of-view, but also because of the
> simplifications of style lookup. _\(Font: _[_Google Web
> Developers_](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)\)

## Single responsibility

El principi de responsabilitat única, un dels cinc principis SOLID de
desenvolupament de software, defineix que _**un mòdul o classe ha de fer una
sola cosa, només una, i fer-la bé.**_

D'aquesta manera, el codi resultant és més robust i es pot reaprofitar molt més
al combinar-lo amb altres blocs de codi semblants. A més són molt més senzills
d'entendre.

La nomenclatura BEM, en conjunt amb l'estructuració de capes \(especialment
Objects, Components i Utilities\) ajuden a seguir aquest principi a l'hora de
definir nous estils. Tot i això, val la pena tenir en compte que és
responsabilitat del desenvolupador mantenir aquest principi a l'hora de definir
nous elements, especialment modificadors.

Per aconseguir-ho, cal que les classes siguin representatives de la seva acció
a la vista, i no de la funció que compleixen. Això permet convertir les classes
en reaprofitables i en repartir responsabilitats:

```css
/* Bad */
.c-button--login {
  font-size: 2em;
  background-color: #f1f1f2;
  color: #000;
  padding: 20px;
}

/* Good */
.c-button--large {
  font-size: 2em;
  padding: 20px;
}

.c-button--secondary {
  background-color: #f1f1f2;
  color: #fff;
}
```

Font: [The single responsibility principle applied to
CSS](https://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/).
