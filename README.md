## Description

Prueba tecnica para Avantio

## Installation

```bash
$ npm install
```

## Running the app

Importante no hacer ng serve pues el front tiene un proxy

```bash
$ npm run start
```

## Explanation

El framework empleado es Angular

Para la realización del front se han empleado 3 modulos.

- app.modue -> Carga la aplicación
- shared.module -> Modulo para la carga de elemetnos compartidos entre modulos
- news.module -> El principal modulo de la aplicación

La aplicacion consta de 3 componentes principales

- news-landing.component -> Principal componente donde se carga el feed del usuario
- dailytrend-article.component -> Estructura de cada articulo dentro del feed
- new-detail.component -> Vista de detalle de cada noticia donde podremos editarla o borrarla

## Errors

Por problemas con el scrapper, debido a que la estructura de las noticias no es siempre igual, en ocasiones no consigue extraer algunos elementos de las noticias como Autor, body o imagen y el diario "El Mundo" el texto no llega codificado en UTF-8 


