# CSS Linting

No hi ha unes guies d'estil més encertades que unes altres; l'important és mantenir una consistència entre projectes i en el temps.

[Sass Guidelines](https://sass-guidelin.es/) ofereix la base d'estil de CSS que utilitzem. Aquesta guia [ofereix un paquet](https://github.com/bjankord/stylelint-config-sass-guidelines) per configurar l'arxiu `.stylelintrc` \([Font](https://stylelint.io/user-guide/configuration/)\) amb aquestes regles.

A Calidae apliquem les següents modificacions:

```
  "string-quotes": "double",
  "max-nesting-depth": 3,
  "indentation": 2,
  "rule-empty-line-before": null,
  "selector-class-pattern": null,
  "max-line-length": 80,
  "no-missing-end-of-source-newline": null,
  "order/properties-alphabetical-order": null
```

En aquest mateix repositori existeix un arxiu `.stylelintrc` base.

Per la resta de regles, davant de qualsevol dubte la referència a seguir és la de Sass Guidelines.

