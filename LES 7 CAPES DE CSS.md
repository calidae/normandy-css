### Les 7 capes de CSS
El CSS s'organitza en 7 capes en forma de triangle invertit:

![7 capes de CSS](https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/10152838/itcss-layers1.svg)

Les capes són les següents:

* **Settings**: variables globals de configuració, definició de colors, etc.

* **Tools**: mixins i funcions globals. És important que no existeixi cap output de CSS en aquestes dues primeres capes (i.e. un projecte amb Settings i Tools hauria de generar un arxiu CSS buit).

* **Generic**: reset/normalització d'estils, box-sizing, etc. És la primera capa que genera CSS compilat.

* **Elements**: definicions d'estils per elements HTML purs (H1, A, TABLE, etc). Aquests elements tenen estils per defecte del navegador, així que es poden redefinir aquí.

* **Objects**: Selectors basats en classes que defineixen patrons de disseny sense estil, com per exemple el [Media Object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) o el [Nav](https://csswizardry.com/2011/09/the-nav-abstraction/). Aquests objects estan basats en [OOCSS, Object Oriented CSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/). Modificar alguna propietat CSS d'un Object és una acció delicada que pot tenir conseqüències més enllà de la modificació que es vulgui fer a una instància concreta.

* **Components**: components específics de la UI. Aquí és on es desenvolupa la gran majoria de la feina en cada projecte. Els components d'una interfície acostumen a estar compostos d'Objectes i Components. Modificar un component no ha de tenir conseqüències fora del context que estiguis desenvolupant.

* **Trumps/Utilities**: classes d'utilitat i helpers amb la capacitat de sobreescriure qualsevol regla definida prèviament en el triangle, e.g. classes per amagar contingut.

La forma de triangle mostra com els estils generats s'ordenen: d'estils genèrics a explícits, de poc específics a més específics, i des de globals a atòmics.

![Reach, Specificity, Explicitness](https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/10154630/itcss-key-metrics.svg)

Font: [ITCSS: Scalable and Mantainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
