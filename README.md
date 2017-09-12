# Normandy-css

Normandy CSS és una metodologia per organitzar i desenvolupar el CSS
dels projectes de Calidae.

També inclou un boilerplate en Sass de la implementació d'aquests acords.

Està construït sobre els principis d'ITCSS, BEM i OOCSS.

Consulta la metodologia i documentació a [Gitbook](https://afontcu.gitbooks.io/normandy).

## Ús

Normandy CSS és fàcilment instal·lable desde els repositoris de paquets NPM.

```
$ npm install normandy-css
```

Desprès caldrà que feu els imports en el fitxer principal de sass del vostre projecte, per tal de poder utilitzar les 7 capes de css i afegir els @import del vostre codi personalitzat just després de cada capa.

```
@charset "UTF-8";
@import "/node_modules/normandy-css/scss/1-Settings/main";
@import "/node_modules/normandy-css/scss/2-Tools/main";
@import "/node_modules/normandy-css/scss/3-Generic/main";
@import "/node_modules/normandy-css/scss/4-Base/main";
@import "/node_modules/normandy-css/scss/5-Objects/main";
@import "/node_modules/normandy-css/scss/6-Components/main";
@import "/node_modules/normandy-css/scss/7-Utilities/main";

```
