# Entrega Semana 5 - Pruebas e2e
## Ghost v3.3.0
Proyecto en el que se elabora una suite de pruebas e2e para Ghost CMS utilizando como API de automatización [Cypress](https://www.cypress.io/) y [Kraken](https://thesoftwaredesignlab.github.io/KrakenMobile/).
<br/><br/>
Para ver una comparación de ventajas y desventajas de ambas herramientas, visite el siguiente [enlace](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/Ventajas-y-desventajas---Cypress-y-Kraken)

## Integrantes
1. Carlos Garcia - cj.garcias1@uniandes.edu.co
2. Jose Montero - j.monterov@uniandes.edu.co
3. Juan Camilo Daza - jc.dazam1@uniandes.edu.co
4. Manuel Bello - m.bello@uniandes.edu.co

### Funcionalidades y escenarios de pruebas
En este documento se describen las funcionalidades a probar y escenarios de prueba: 

| Id | Nombre | Resumen | Responsable |
| - | - | - | - |
| [F01](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F01) | Crear Tag | Funcionalidad que permite la creación de etiquetas | Carlos |
| [F02](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F02) | Crear Post | Funcionalidad que permita la creación de nuevas publicaciones | Jose |
| [F03](F03) | Editar Post | Funcionalidad que permite la edición o corrección de publicaciones realizadas|Manuel|
| [F04](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F04) | Crear Page | Funcionalidad que permite la creacion de paginas con contenidos | Juan |
| [F05](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F05) | Editar Page | Funcionalidad que permite publicar las paginas creadas por el usuarios | TODOS |


# Correr pruebas (Headless) :rocket:
## Pasos para despliegue
1. Instalar [docker](https://www.docker.com/get-started) segun tu sistema operativo
2. Clonar este repositorio en su máquina local. Si necesita ayuda puede consultar este [link](https://docs.github.com/es/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
4. Abrir una consola que esté ubicada sobre el folder del repositorio que clonó en el paso 2.
5. Verificar que el servicio de docker desktop se está ejecutando.
6. Ejecutar `docker-compose build` para comenzar a construir las imagenes localmente de vrt, ghost, cypress y kraken.
7. Ejecutar `docker-compose up -d` para iniciar los contenedores.

Una vez realizados estos pasos se desplegarán automaticamente 3 contenedores de docker que ejecutaran los suite de pruebas headless.

![image](https://user-images.githubusercontent.com/78028512/117737241-b2641600-b1b6-11eb-9c7d-4e073a7fd0e9.png)


## Ver ejecución de pruebas
Para visualizar el progreso de un contenedor puedes ejecutar los siguientes comandos en una consola:
Nota: la composición y la ejecución de los escenarios tarda un tiempo dependiendo de la capacidad de su máquina local, por lo que si en el primer intento no le salen logs, dele unos segundos más para que el componente se ejecute

1. Kraken `docker logs kraken-web`
2. Cypress `docker logs cypress-chrome`
3. Ghost `docker logs ghost`

## Ver resultados
Una vez la ejecución de las pruebas hayan finalizado los resultados se guardan en las siguientes direcciones segun el suite de pruebas

1. Kraken `kraken-ghost/reports`
2. Cypress `cypress-ghost/cypress`

## Reiniciar ejecución de pruebas
Para realizar una nueva ejecución limpia de la suite de pruebas se recomienda remover los contenedores, ejecutando en la consola:

1. `docker-compose down`
2. `docker-compose up -d`
