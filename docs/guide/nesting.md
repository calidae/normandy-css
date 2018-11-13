# Nesting

Amb l'ús de preprocessadors \(Sass/SCSS\), el nesting de CSS s'ha convertit en
una pràctica habitual que ofereix alguns beneficis però que té conseqüències si
s'utilitza de forma exhaustiva.

Necessitar sobreescriure estils a base de nesting indica un problema
d'especificitat de base. Afegir més nestings per resoldre-ho només empitjora el
problema i [empitjora el
rendiment](https://speakerdeck.com/jonrohan/githubs-css-performance).

Per això, la recomanació és seguir la [Inception
Rule](http://thesassway.com/beginner/the-inception-rule): **mai definir més de
4 nivells de nesting**. En aquest 4 nivells no entren estils com pseudoatributs
\(`:hover`\) o media queries. I si en són menys, millor.

En general, una bona _thumb rule_ és preguntar-se "aquest estil es pot
aconseguir amb menys selectors?".

```css
body > div:nth-of-type(2) > article:first-child > p:first-child {} /* bad, really really bad */

article > p:first-child {} /* still bad */

.text-intro {} /* good */
```

Així doncs, sempre farem servir el **nombre mínim de selectors necessaris** per
estilitzar qualsevol element. Això aplica, per exemple, al definir estils per
un Element o un Modifier, on no afegim la class del Block que el conté:

```css
.c-block .c-block__element {} /* Bad */
.c-block.c-block--modifier {} /* Bad */
.c-block__element.c-block__element--modifier {} /* Bad */

.c-block__element {} /* Good */
.c-block--modifier {} /* Good */
.c-block--modifier .c-block__element {} /* Good. Un dels pocs casos on el nesting té una raó de ser: en cas que un Modifier d'un Bloc afecti un Element. */
```

Anidar l'Element o el Modifier al Block no aporta res. Només evita que algun
desenvolupador utilitzi un Element fora del seu Block. A part d'això \(que és
fàcilment detectable en _code reviews_\) simplement augmenta l'especificitat
dels selectors d'Elements sense cap necessitat i en complica l'escriptura,
introduïnt més punts d'error \(_Keep it short and simple_\).

