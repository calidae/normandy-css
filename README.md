# Normandy CSS

Normandy CSS és la metodologia per organitzar i estructurar el CSS
dels projectes de Calidae.

També inclou un boilerplate en Sass (`.scss`) de la implementació d'aquests acords.

Està construït sobre els principis d'ITCSS, BEM i OOCSS.

Consulta la metodologia i documentació a
[Gitbook](https://afontcu.gitbooks.io/normandy).



## Instal·lació i configuració

Per instal·lar-lo via npm:

```shell
npm install --save-dev normandy-css
```

L'únic pas necessari per afegir Normandy CSS al teu projecte és importar el
`main.scss` de cada capa i intercalar-hi els que hagis creat tu amb l'excepció 
de les capes setting i tools que es criden primer les de normandy:

```scss
@import "/node_modules/normandy-css/scss/1-Settings/main";
@import "/node_modules/normandy-css/scss/2-Tools/main";

@import "/custom/path/to/my/scss/1-Settings/main";
@import "/custom/path/to/my/scss/2-Tools/main";

@import "/node_modules/normandy-css/scss/3-Generic/main";
@import "/custom/path/to/my/scss/3-Generic/main";

@import "/node_modules/normandy-css/scss/4-Base/main";
@import "/custom/path/to/my/scss/4-Base/main";

@import "/node_modules/normandy-css/scss/5-Objects/main";
@import "/custom/path/to/my/scss/5-Objects/main";

@import "/node_modules/normandy-css/scss/6-Components/main";
@import "/custom/path/to/my/scss/6-Components/main";

@import "/node_modules/normandy-css/scss/7-Utilities/main";
@import "/custom/path/to/my/scss/7-Utilities/main";
```

D'aquesta manera, les variables i classes pròpies sempre tindran preferència per
sobre les de Normandy CSS. 



## Ús

Normandy CSS treballa sobre unes variables bàsiques que permeten la configuració
de tot el boilerplate.

A continuació es mostren les variables bàsiques i els seus valors per defecte,
que es troben a `1-Settings/_settings.core.scss`:

```scss
$global-baseline: 6px;

$global-spacing-unit-tiny:   6px;
$global-spacing-unit-small: 12px;
$global-spacing-unit:       24px;
$global-spacing-unit-large: 48px;
$global-spacing-unit-huge:  96px;

$global-font-size:   16px;
$global-line-height: 24px;
```

### Configuració inicial

És important que la configuració d'aquestes variables es faci a l'inici del
projecte, ja que posteriors modificacions tindran efectes imprevisibles en 
cascada. Cal tenir en compte que modificar els valors per defecte implicarà,
per exemple, canvis en els atributs de les utilitats d'espaiat així com les
de font-size.


### Ús en el dia a dia

Totes les variables són públiques, però les variables `$global-spacing-unit...`
són les que ens resulten útils en el dia a dia.

Imaginem la situació on hem de definir un gap de CSS Grid proporcional a les
variables d'espaiat amb l'objectiu d'aconseguir un
[vertical rythm](https://zellwk.com/blog/why-vertical-rhythms/) consistent:

```scss
.c-component__grid {
  display: grid;
  grid-gap: $global-spacing-unit-small;
}
```

La convenció és la següent: totes les variables que comencin per `$global-`
estan pensades per ser utilitzades en qualsevol capa de Normandy CSS. Així, les
variables que definim a la resta de fitxers de 1-Settings haurien de seguir
aquesta mateixa convenció, amb l'excepció dels colors (on és redundant).
