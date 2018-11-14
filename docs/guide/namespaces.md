# Namespaces

Les classes de CSS definides utilitzen un prefix que indiquen en quin nivell de
la piràmide es troben. Aquests són els prefixos que utilitzem:

- `o-`. Indica que es tracta d'un Object, és a dir, d'un element que pot
  estar-se utilitzant en altres contextos. Anar molt en compte al fer-hi
  modificacions i fer-ho si realment és l'única solució vàlida.

- `c-`. Indica que es tracta d'un Component. És una implementació concreta de
  la UI. Qualsevol canvi que es faci a l'estil d'aquesta classe hauria de ser
  detectable en el context actual. Modificar aquesta classe ha de ser segur i
  no ha de tenir efectes secundaris.

- `u-`. Indica que es tracta d'una Utility. Té un rol molt específic
  \(habitualment un sol atribut CSS\) i no hauria de modificar-se mai. Es pot
  reutilitzar i no està lligada a cap implementació de la UI.

- `js-`. Indica que es tracta d'una classe per Javascript. Aquesta classe
  serveix per bindejar l'element a la lògica que afegeixi el Javascript a la
  UI. Una classe amb aquest prefix no hauria ni d'aparèixer als fitxers `.scss`
  del projecte, ja que no ha de tenir atributs associats. Val la pena notar
  que, tot i definir aquest namespace, probablement sigui molt més pràctic
  bindejar Javascript a l'ID d'un element o a un atribut `data-`
  \([font](https://www.w3schools.com/tags/att_global_data.asp)\).

Font: [More Transparent UI Code with
Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

Excepte el prefix `.js`, noti's que els altres tres prefixos corresponen als
tres últims nivells de la piràmide de CSS.

### Exemples

```css
/* Object class */
.o-media {
}

/* Component class */
.c-form {
}

/* Utility class */
.u-hidden {
}

/* Javascript class */
.js-result-list {
}
```

---
