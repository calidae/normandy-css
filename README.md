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
`main.scss` de cada capa i intercalar-hi els que hagis creat tu:

```scss
@import "/node_modules/normandy-css/scss/1-Settings/main";
@import "/custom/path/to/my/scss/1-Settings/main";

@import "/node_modules/normandy-css/scss/2-Tools/main";
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
que es troben a `1-Settings/_settings.sizes.scss`:

```scss
$global-font-size: 16px !default;
$global-line-height: 24px !default;

$global-spacing-unit: round($global-line-height) !default;

$factor-tiny: 0.25 !default;
$factor-small: 0.5 !default;
$factor-large: 2 !default;
$factor-huge: 4 !default;

$global-spacing-unit-tiny: round($global-spacing-unit * $factor-tiny);
$global-spacing-unit-small: round($global-spacing-unit * $factor-small);
$global-spacing-unit-large: round($global-spacing-unit * $factor-large);
$global-spacing-unit-huge: round($global-spacing-unit * $factor-huge);
```

### Configuració inicial

És important que la configuració d'aquestes variables es faci a l'inici del
projecte, ja que posteriors modificacions tindran efectes imprevisibles en 
cascada. Cal tenir en compte que el canvi als valors per defecte implicaran,
per exemple, canvis en els atributs de les utilitats d'espaiat així com els
`font-size` per defecte.


### Ús en el dia a dia

Totes les variables són públiques, però les variables `$global-spacing-unit...`
són les que ens resulten útils en el dia a dia.

Imaginem la situació on hem de definir un gap de CSS Grid proporcional a les
nostres variables:

```scss
.c-component__grid {
  display: grid;
  grid-gap: $global-spacing-unit-small;
}
```

La convenció és la següent: totes les variables que comencin per `$global-`
estan pensades per ser utilitzades en qualsevol capa de Normandy CSS. Així, les
variables que definim a la resta de fitxers de 1-Settings haurien de seguir
aquesta mateixa convenció, amb l'excepció dels colors (on seria completament
redundant).
