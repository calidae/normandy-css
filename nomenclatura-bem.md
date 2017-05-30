# Nomenclatura BEM

L'estructura dels noms de les classes és la següent:

`.[namespace]-[block]__[element]--[modifier]`

Noti's els dos guionets baixos entre Block i Element, i els dos guionets entre Element i Modifier.

Basat en la metodologia [BEM](http://bem.info/), aquesta estructura defineix tres ítems bàsics: **Blocks**, **Elements** i **Modifier**.

## Block

Encapsula un component de la UI que té sentit per si sol. Es mapeja fàcilment amb Objects i Components. Els Blocks es poden anidar i interactuar amb altres Blocks, però no tenen precedències ni herències entre ells \(o sigui, un Block no hauria de dependre d'un altre per aparèixer a la UI\).

```html
<div class="c-form">...</div>
```

```css
.c-form {} /* Good */

div.c-form {} /* Bad */
```

Un Block pot anidar-se dins d'altres Blocks a nivell semàntic \(HTML\), però no a nivell de CSS.

## Element

Part d'un Block que no té sentit per si sol. Qualsevol element està semànticament lligat al seu Block.

Dins d'un Block, tots els elements són semànticament iguals.

```html
<div class="c-form">
    <div class="c-form__input">
        <div class="c-form__icon">
        </div>
    </div>
    ...
</div>
```

```css
.c-form__input {} /* Good */
.c-form__icon {} /* Good */

div.c-form__input {} /* Bad */
.c-form .c-form__input .c-form__icon {} /* Bad */
.c-form__input .c-form__icon {} /* Bad */
.c-form__input > .c-form__icon {} /* Bad */
```

## Modifier

Flag per Blocks o per Elements. Útils per canviar l'aspecte, el comportament o l'estat. Serveix per proposar versions alternatives d'un Block o un Elements.

Un Modifier és una classe addicional.

```html
<div class="c-form c-form--hidden">
    <div class="c-form__input c-form__input--border-primary"></div>
    ...
</div>
```

```css
.c-form--hidden {} /* Good */
.c-form__input--border-primary {} /* Good */

.c-form__input.c-form__input--border-primary {} /* Bad */
```

La majoria de dubtes sobre BEM queden resolts a les [FAQs de la seva web](http://getbem.com/faq/).

Un altre benefici afegit de BEM és que millora el rendiment de renderitzat del navegador. De fet, és la metodologia que recomana Google des d'aquest punt de vista:

> If you’re looking for a good way to organize your CSS, BEM is a really good starting point, both from a structure point-of-view, but also because of the simplifications of style lookup. _\(Font: _[_Google Web Developers_](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)\)



