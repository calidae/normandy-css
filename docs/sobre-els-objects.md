# Sobre els Objects: què són i com funcionen?

Val la pena dedicar unes línies a què són els Objects i com es diferencien dels Components.

Els Objects són _abstraccions_ de disseny, és a dir, no estan lligats a una maquetació concreta i només responen a un patró de disseny reutilitzable.

L'exemple més representatiu és el [Media Object](/stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code), una abstracció de disseny utilitzada molt habitualment \(i inclosa en la implementació de Normandy\).

Els Objects tenen principalment dos objectius:

1. **Separar l'estructura de la vista**. L'estructura i el posicionament són tasques dels Objects, mentre que les característiques visuals són responsabilitat dels Components.

2. **Separar el contenidor del contingut**. No cal imitar l'estructura de l'HTML al CSS. És molt més útil definir classes que descriuen l'ús d'un tag HTML. En aquest cas, l'Object és el contenidor i els Components són el contingut.

Un Object inclourà atributs CSS relacionats amb la distribució i el posicionament i no estils cosmètics.

## Single Responsibility Principle i Open/Closed Principle

Dels 5 [principis SOLID](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design), els Objects en segueixen bàsicament dos:

* **Single-responsibility Principle**. Un Object té una responsabilitat i cap altra, amb els beneficis que això comporta de facilitat de manteniment i extensibilitat.

  Font: [The single responsibility principle applied to CSS](https://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/).

* **Open-Closed Principle**. Un Object està obert a extensions i tancat a modificacions. _Mai_ s'ha de modificar un Object: si un Object no encaixa a la implementació d'un element de la UI, probablement és perquè no s'ha de fer servir. Sí que està permès, en canvi, afegir modificacions a un object \(mantenint la separació de responsabilitats\) per afegir-hi un comportament opcional.

  Font: [The open/closed principle applied to CSS](https://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/).

A diferència dels Objects, els Components no són abstraccions de patrons de disseny sinó implementacions concretes de la UI.

