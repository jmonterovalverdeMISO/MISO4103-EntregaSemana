# Entrega Semana 5
## Pruebas e2e
Proyecto en el que se elabora una suite de pruebas e2e para Ghost CMS utilizando como API de automatización [Cypress](https://www.cypress.io/) y [Kraken](https://thesoftwaredesignlab.github.io/KrakenMobile/)

## Integrantes
1. Carlos Garcia - cj.garcias1@uniandes.edu.co
2. Jose Montero - j.monterov@uniandes.edu.co
3. Juan Camilo Daza - jc.dazam1@uniandes.edu.co
4. Manuel Bello - m.bello@uniandes.edu.co

### Aplicación bajo pruebas 
Ghost v3.3.0

### Funcionalidades y escenarios de pruebas
En este documento se describen las funcionalidades a probar y escenarios de prueba: 

| Id | Nombre | Resumen | Responsable |
| - | - | - | - |
| [F01](F01) | Crear Tag | Funcionalidad que permite la creación de etiquetas | Carlos |
| [F02](F02) | Crear Post | Funcionalidad que permita la creación de nuevas publicaciones | Jose |
| [F03](F03) | Editar Post | Funcionalidad que permite la edición o corrección de publicaciones realizadas|Manuel|
| [F04](F04) | Crear Page | Funcionalidad que permite la creacion de paginas con contenidos | Juan |
| [F05](F05) | Editar Page | Funcionalidad que permite publicar las paginas creadas por el usuarios | TODOS |


## Desplegar suite (Headless) :rocket:
### Pasos para despliegue
1. Es obligatorio instalar [docker](https://www.docker.com/get-started)
2. En una consola ejecuta `docker-compose up -d`

Tras iniciar Docker, este tomará unos minutos para construir las imagenes de ghost, cypress y kraken. 

Una vez las imagenes esten construidas se desplegarán automaticamente 3 contenedores de docker que ejecutaran los suite de pruebas headless.

### Ver ejecución de pruebas
Para visualizar el progreso de un contenedor puedes ejecutar los siguientes comandos en una consola:

1. Kraken `docker logs kraken-web`
2. Cypress `docker logs cypress-chrome`
3. Ghost `docker logs ghost`

### Ver resultados
Una vez la ejecución de las pruebas hayan finalizado los resultados se guardan en las siguientes direcciones segun el suite de pruebas

1. Kraken `kraken-ghost/reports`
2. Cypress `cypress-ghost/cypress`

### Reiniciar ejecución de pruebas
Para realizar una nueva ejecución limpia de la suite de pruebas se recomienda remover los contenedores, ejecutando en la consola:

1. `docker-compose down`
2. `docker-compose up -d`
