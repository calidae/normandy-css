# CALIDAE CSS #

Això és una primera proposta en versió alpha dels acords d'estil, nomenclatura i organització del CSS als projectes de Calidae.

***

### Objectius de la guia ###

* Simplificar la comprensió del codi, tant per nous desenvolupadors com per quan recuperem un projecte antic. Facilitar el code review del CSS.

* Aconseguir una major coherència entre els diferents projectes que desenvolupem.

* Augmentar la velocitat de desenvolupament.

* Millorar l’escalabilitat del codi.

* Millorar la comunicació entre dissenyadors i desenvolupadors.

* Millorar, definir (i documentar) les bones pràctiques al desenvolupar CSS.


### Warnings ###
1. En aquesta guia es parla de com s'escriu i s'organitza el CSS de forma genèrica i universal, amb frases com "El CSS s'organitza en 7 capes". Evidentment, la referència és únicament a la proposta d'organització de CSS a Calidae, i no a qualsevol implementació de CSS.

2. Les decisions d'aquesta guia estan basades en l'experiència d'altres desenvolupadors que s'han trobat amb problemes semblants als que volem solucionar. Per això és important consultar les fonts de cada punt de la guia, per entendre correctament els principis que els justifiquen.


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

* **Tools**: mixins i funcions globals. És important que no existeixi cap output de CSS en aquestes dues primeres capes (*i.e.* un projecte amb només Settings i Tools hauria de generar un arxiu CSS buit).

* **Generic**: reset/normalització d'estils, box-sizing, etc. És la primera capa que genera CSS compilat.

* **Elements**: definicions d'estils per elements HTML purs (H1, A, TABLE, etc). Aquests elements tenen estils per defecte del navegador, així que es poden redefinir aquí.

* **Objects**: Selectors basats en classes que defineixen patrons de disseny sense estil, abstractes, com per exemple el [Media Object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) o el [Nav](https://csswizardry.com/2011/09/the-nav-abstraction/). Aquests objects estan basats en [OOCSS, Object Oriented CSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/). Modificar alguna propietat CSS d'un Object és una acció delicada que probablement tingui conseqüències més enllà de la modificació d'una instància concreta.

* **Components**: components específics de la UI. Aquí és on es desenvolupa la gran majoria de la feina en cada projecte. Els components d'una interfície acostumen a estar compostos d'Objectes i Components. Modificar un component no ha de tenir conseqüències fora del context que estiguis desenvolupant.

* **Trumps/Utilities**: classes d'utilitat i helpers amb la capacitat de sobreescriure qualsevol regla definida prèviament en el triangle, e.g. classes per amagar contingut.

La forma de triangle mostra com els estils generats s'ordenen: d'estils genèrics a explícits, de poc específics a més específics, i des de globals a atòmics.

![Reach, Specificity, Explicitness](images/itcss-2.png)

Font: [ITCSS: Scalable and Mantainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

L'estructura de fitxers Sass del projecte han de seguir una estructura que repliqui les 7 capes. Els arxius han de concatenar el nom de la capa i el nom del propi arxiu, per facilitar-ne la localització:

    scss/
        main.scss
        settings/
            _settings.colors.scss
            ...
        tools/
            _tools.clearfix.scss
            ...
        generic/
            _generic.normalize.scss
            _generic.box-sizing.scss
            ...
        elements/
            _elements.headings.scss
            _elements.images.scss
            _elements.page.scss
            ...
        objects/
            _objects.media.scss
            _objects.layout.scss
            _objects.island.scss
            _objects.flag.scss
            ...
        components/
            _components.button.scss
            ...
        utilities/
            _utilities.print.scss
            _utilities.hide.scss
            ...

En cas d'utilitzar una estructura atòmica per components en tot el projecte, els arxius de Components i Objects es podrien estructura conjuntament amb la resta d'arxius del Component o Object en concret. La resta d'arxius Sass seguirien l'estructura original:

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


### Què són els Objects i com funcionen: Single Responsibility Principle i Open/Closed Principle
Val la pena dedicar unes línies a què són els Objects i com es diferencien dels Components.

Els Objects són *abstraccions* de disseny, és a dir, no estan lligats a una maquetació concreta i només responen a un patró de disseny reutilitzable.


Dels 5 [principis SOLID](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design), els Objects en segueixen bàsicament dos:

* **Single-responsibility Principle**. Un Object té una responsabilitat i cap altra, amb els beneficis que això comporta de facilitat de manteniment i extensibilitat.

    Font: [The single responsibility principle applied to CSS](https://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/).

* **Open-Closed Principle**. Un Object està obert a extensions i tancat a modificacions. Mai s'ha de modificar un Object: si un Object no encaixa a la implementació d'un element de la UI, simplement no s'ha de fer servir. 

    Font: [The open/closed principle applied to CSS](https://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/).

A diferència dels Objects, els Components no són abstraccions de patrons de disseny sinó implementacions concretes de la UI.


***
[*Back to top*](#markdown-header-objectius-de-la-guia)


***
## Namespaces 
Les classes de CSS definides utilitzen un prefix que indiquen en quin nivell de la piràmide es troben. Aquests són els prefixos que utilitzem:

* `o-`. Indica que es tracta d'un Object, és a dir, d'un element que pot estar-se utilitzant en altres contextos. Anar molt en compte al fer-hi modificacions i fer-ho si realment és l'única solució vàlida.

* `c-`. Indica que es tracta d'un Component. És una implementació concreta de la UI. Qualsevol canvi que es faci a l'estil d'aquesta classe hauria de ser detectable en el context actual. Modificar aquesta classe ha de ser segur i no ha de tenir efectes secundaris.

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
[*Back to top*](#markdown-header-objectius-de-la-guia)


***
## Single responsibility
El principi de responsabilitat única, un dels cinc principis SOLID de desenvolupament de software, defineix que una classe només ha de tenir una raó per canviar, i no més.

D'aquesta manera, el codi resultant és més robust i es pot reaprofitar molt més al combinar-lo amb altres blocs de codi semblants. A més són molt més senzills d'entendre.


    <nav class="wrapper menu fixed branded">...</nav> <!-- Bad -->

    <nav class="global-nav">...</nav> <!-- Good -->


Noti's que en aquest exemple no s'utilitzen ni Namespaces ni cap tipus de nomenclatura específica. **L'exemple només sereix com a mostra de classes de responsabilitat única**.

Font: [The single responsibility principle applied to CSS](https://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/).


***
[*Back to top*](#markdown-header-objectius-de-la-guia)


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
[*Back to top*](#markdown-header-objectius-de-la-guia)


***
## Grid 
Fill me.


***
[*Back to top*](#markdown-header-objectius-de-la-guia)


***
## CSS Linting 
No hi ha unes guies d'estil més encertades que unes altres; l'important és mantenir una consistència entre projectes i en el temps.

[Sass Guidelines](https://sass-guidelin.es/) ofereix la base d'estil de CSS que utilitzem. Aquesta guia [ofereix un paquet](https://github.com/bjankord/stylelint-config-sass-guidelines) per configurar l'arxiu `.stylelint` amb aquestes regles.

A Calidae apliquem les següents modificacions:

    "string-quotes": "double",
    "max-nesting-depth": 3,
    "indentation": 4,
    "declaration-block-properties-order": null,
    "rule-nested-empty-line-before": null,
    "rule-non-nested-empty-line-before": null,
    "stylelint-disable-reason": null,
    "selector-class-pattern": null,
    "max-line-length": 80,
    "no-missing-end-of-source-newline": null

Per la resta de regles, davant de qualsevol dubte la referència a seguir és la de Sass Guidelines.


***
[*Back to top*](#markdown-header-objectius-de-la-guia)


***
### Contribution guidelines ###

* Per afegir/modificar continguts, fes un fork de master i crea un Pull Request. Automàticament es notificarà al canal #css de l'Slack.

* El contingut s'escriu en present i en primera persona del plural ("Utilitzem una classe addicional" enlloc de "s'utilitza una classe addicional").

* El contingut de la guia s'escriu en Markdown: [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo).
