# CSS Normandy

Normandy és un boilerplate de Sass i un acord per organitzar, desenvolupar i mantenir codi CSS als projectes de Calidae.

Està construït sobre els principis d'ITCSS, BEM i OOCSS.

## Documentació

La documentació es pot consultar al [Gitbook de Normandy](https://afontcu.gitbooks.io/normandy/).


## Què conté aquest repositori?

* **Carpeta `scss/`** amb el boilerplate de fitxers Sass per desenvolupar projectes seguint les directrius de la guia.
* **Carpeta `test/`** amb els testos unitaris del boilerplate.
* **Carpeta `demo/`** amb la implementació dels Objects inclosos en el projecte. Consultar la guia per entrendre què són i com s'utilitzen els Objects.
* **Arxiu `.stylelintrc`** amb la implementació dels lintings d'estil pel CSS.

## Contributing

* Per afegir/modificar continguts, fes un fork de master i crea un Pull Request.

* En cas de modificar els arxius del boilerplate de `scss/`, assegura't de fer córrer `npm test` per validar la correctesa del codi tant a nivell d'estil (Stylelint) com per passar els testos unitaris. Utilitza `npm run sass` per compilar el CSS si necessites utilitzar l'output per comprovar modificacions.

* En cas de ser necessari, afegeix els arxius necessaris a `demo/`.

* Per resoldre dubtes es poden utilitzar els Issues del projecte.

* El contingut de la guia s'escriu en Markdown: [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo).
