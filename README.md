# README #

Això és una primera proposta en versió alpha dels acords d'estil, nomenclatura i organització del CSS als projectes de Calidae.

***

### Objectius de la guia ###

* Simplificar la comprensió del codi, tant per nous desenvolupadors com per quan recuperem un projecte antic. Facilitar el code review del CSS.

* Aconseguir una major coherència entre els diferents projectes que desenvolupem.

* Augmentar la velocitat de desenvolupament.

* Millorar l’escalabilitat del codi.

* Millorar la comunicació entre dissenyadors i desenvolupadors.

* Millorar, definir (i documentar) les bones pràctiques al desenvolupar CSS.


### Warning ###
En aquesta guia es parla de com s'escriu i s'organitza el CSS de forma genèrica i universal, amb frases com "El CSS s'organitza en 7 capes". Evidentment, la referència és únicament a la proposta d'organització de CSS a Calidae, i no a qualsevol implementació de CSS.

## Índex ###

1. [Les 7 capes de CSS](#markdown-header-les-7-capes-de-css)

2. [Single responsibility](#markdown-header-single-responsibility)

3. [Namespaces](#markdown-header-namespaces)

4. [Nomenclatura de classes](#markdown-header-nomenclatura-de-classes)

5. [Nesting](#markdown-header-nesting)

6. [Encapsulament de frameworks](#markdown-header-encapsulament-de-frameworks)

7. [No ID's](#markdown-header-no-id)

8. [Media Queries](#markdown-header-media-queries)

9. [Grid](#markdown-header-grid)

10. [CSS Linting](#markdown-header-css-linting)

***

## Les 7 capes de CSS
El CSS s'organitza en 7 capes en forma de triangle invertit:

![7 capes de CSS](images/itcss.png)

Les capes són les següents:

* **Settings**: variables globals de configuració, definició de colors, etc.

* **Tools**: mixins i funcions globals. És important que no existeixi cap output de CSS en aquestes dues primeres capes (i.e. un projecte amb Settings i Tools hauria de generar un arxiu CSS buit).

* **Generic**: reset/normalització d'estils, box-sizing, etc. És la primera capa que genera CSS compilat.

* **Elements**: definicions d'estils per elements HTML purs (H1, A, TABLE, etc). Aquests elements tenen estils per defecte del navegador, així que es poden redefinir aquí.

* **Objects**: Selectors basats en classes que defineixen patrons de disseny sense estil, com per exemple el [Media Object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) o el [Nav](https://csswizardry.com/2011/09/the-nav-abstraction/). Aquests objects estan basats en [OOCSS, Object Oriented CSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/). Modificar alguna propietat CSS d'un Object és una acció delicada que pot tenir conseqüències més enllà de la modificació que es vulgui fer a una instància concreta.

* **Components**: components específics de la UI. Aquí és on es desenvolupa la gran majoria de la feina en cada projecte. Els components d'una interfície acostumen a estar compostos d'Objectes i Components. Modificar un component no ha de tenir conseqüències fora del context que estiguis desenvolupant.

* **Trumps/Utilities**: classes d'utilitat i helpers amb la capacitat de sobreescriure qualsevol regla definida prèviament en el triangle, e.g. classes per amagar contingut.

La forma de triangle mostra com els estils generats s'ordenen: d'estils genèrics a explícits, de poc específics a més específics, i des de globals a atòmics.

![Reach, Specificity, Explicitness](images/itcss-2.png)

Font: [ITCSS: Scalable and Mantainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)



***
## Namespaces 
Les classes de CSS definides utilitzen un prefix que indiquen en quin nivell de la piràmide es troben.

* `o-`. Indica que es tracta d'un Object, és a dir, d'un element que pot estar-se utilitzant en altres contextos, i fer-ne modificacions pot tenir conseqüències imprevistes. Anar molt en compte al fer-hi modificacions.

* `c-`. Indica que es tracta d'un Component. És una implementació concreta de la UI. Qualsevol canvi que es faci a l'estil d'aquesta classe hauria de ser detectable en el context actual.

* `u-`. Indica que es tracta d'una Utility. Té un rol molt específic (habitualment un sol atribut CSS) i no hauria de modificar-se mai. Es pot reutilitzar i no està lligada a cap implementació de la UI.

* `js-`. Indica que es tracta d'una classe per Javascript. Aquesta classe serveix per bindejar l'element a la lògica que afegeixi el Javascript a la UI. Una classe amb aquest prefix no hauria ni d'aparèixer als fitxers `.scss` del projecte, ja que no ha de tenir atributs associats.

Font: [More Transparent UI Code with Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)


### Exemples

```css
/* Object class */
.o-media { }

/* Component class */
.c-form { }

/* Utility class */
.u-hidden { }

/* Javascript class */
.js-result-list { }
```




***
## Single responsibility 
Fill me.


***
## Nomenclatura de classes
Fill me.



***
## Nesting 
Fill me.


***
## Encapsulament de frameworks 
Fill me.


***
## No ID's 
Fill me.


***
## Media Queries 
Fill me.


***
## Grid 
Fill me.



***
## CSS Linting 
Fill me.


***
### Contribution guidelines ###

* Per afegir/modificar continguts, fes un fork de master i crea un Pull Request. Automàticament es notificarà al canal #css de l'Slack.

* El contingut s'escriu en present i en primera persona del plural ("Utilitzem una classe addicional" enlloc de "s'utilitza una classe addicional").

* El contingut de la guia s'escriu en Markdown: [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo).
