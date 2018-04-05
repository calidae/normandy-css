# Normandy-css

Normandy CSS és la metodologia per organitzar i estructurar el CSS
dels projectes de Calidae.

També inclou un boilerplate en Sass (`.scss`) de la implementació d'aquests acords.

Està construït sobre els principis d'ITCSS, BEM i OOCSS.

Consulta la metodologia i documentació a
[Gitbook](https://afontcu.gitbooks.io/normandy).

## Ús

Per instal·lar-lo via npm:

```shell
npm install --save-dev normandy-css
```

L'únic pas necessari per afegir normandy-css al teu projecte és importar el
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
sobre les de normandy-css. 
