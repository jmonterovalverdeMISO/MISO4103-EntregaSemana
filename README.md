# Entrega Semana 6 - Pruebas e2e
## Ghost 
Proyecto en el que se elabora una suite de pruebas e2e para Ghost CMS (para las versiones 3.3.0 y 3.42.5) utilizando como API de automatización [Cypress](https://www.cypress.io/) y [Kraken](https://thesoftwaredesignlab.github.io/KrakenMobile/).
<br/>
Para ver una comparación de ventajas y desventajas de ambas herramientas, visite el siguiente [enlace](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/Ventajas-y-desventajas---Cypress-y-Kraken)
<br/><br/>

Adicionalmente se genera una herramienta de pruebas de regresión visual. 
<br/>
Para ver una comparación entre las posibles herramientas a utilizar () visite el siguiente [enlace](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/Ventajas-y-desventajas---Herramientas-VRT).

### Pruebas realizadas
En este repositorio se ejecutan 3 clases de pruebas:
1. 20 pruebas en Kraken que se ejecutan en dos versiones de Ghost (3.3.0 y 3.42.5)
2. 20 pruebas en cypress que se ejecutan en dos versiones de Ghost (3.3.0 y 3.42.5)
3. Pruebas de regresion visual (VRT) que se ejecutan sobre las tomas de pantalla realizadas en cada paso de las pruebas de cypress (sobre las 20 pruebas en total). Se define como una prueba fallida si la aplicación detecta más de un 4.5% de cambios de la pantalla de la aplicación en 3.3.0 (baseline) y la pantalla en 3.42.5 (nueva version). Este "fallido" en realidad es un escenario marcado para que sea revisado manualmente por un tester para determinar si hay problemas reales o no. Los issues pendientes de revisión se encuentran registrados en la [sección de issues](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/issues) de este repositorio.

## Integrantes
1. Carlos Garcia - cj.garcias1@uniandes.edu.co
2. Jose Montero - j.monterov@uniandes.edu.co
3. Juan Camilo Daza - jc.dazam1@uniandes.edu.co
4. Manuel Bello - m.bello@uniandes.edu.co

### Funcionalidades y escenarios de pruebas
En [este documento](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/Funcionalidades) se describen las funcionalidades a probar y escenarios de prueba. A continuación de tiene una tabla resumen de las mismas:

| Id | Nombre | 
| - | - | 
| [F01](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F01) | Crear Tag |
| [F02](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F02) | Crear Post | 
| [F03](F03) | Editar Post | 
| [F04](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F04) | Crear Page | 
| [F05](https://github.com/jmonterovalverdeMISO/MISO4103-EntregaSemana/wiki/F05) | Editar Page | 

Todas las funcionalidades tinen escenarios para ser probadas en ambas versiones de Ghost.



# Correr pruebas (Headless) :rocket:
Para ejecutar la suite de pruebas puedes escoger entre los frameworks disponibles Cypress o Kraken.

## Antes de empezar
1. Instalar [docker](https://www.docker.com/get-started) segun tu sistema operativo
2. Clonar este repositorio en su máquina local. Si necesita ayuda puede consultar este (link)[https://docs.github.com/es/github/creating-cloning-and-archiving-repositories/cloning-a-repository]
3. Abrir una consola que esté ubicada sobre el folder del repositorio que clonó en el paso 2.

## Kraken :octopus:
1. Verificar que el servicio de docker está corriendo.
2. Ejecutar `docker-compose -f ./docker-compose.kraken.yml build` en una consola para construir las imagenes de ghost y kraken. 
3. Ejecutar `docker-compose -f ./docker-compose.kraken.yml up -d` en una consola para iniciar infraestructura de pruebas.

Una vez ejecutados los pasos se desplegarán automaticamente la infraestructura con Ghost y se ejecutaran los suite de pruebas headless.

### Reiniciar ejecución de pruebas
Para realizar una nueva ejecución limpia de la suite de pruebas se recomienda remover los contenedores, ejecutando en la consola:

1. `docker-compose down`
2. `docker-compose -f ./docker-compose.kraken.yml up -d`

## Cypress :robot:
1. Verificar que el servicio de docker está corriendo.
2. Ejecutar `docker-compose -f ./docker-compose.cypress.yml build` en una consola para construir las imagenes de ghost y kraken. 
3. Ejecutar `docker-compose -f ./docker-compose.cypress.yml up -d` en una consola para iniciar infraestructura de pruebas.

Una vez ejecutados los pasos se desplegarán automaticamente la infraestructura con Ghost y se ejecutaran los suite de pruebas headless.

### Reiniciar ejecución de pruebas
Para realizar una nueva ejecución limpia de la suite de pruebas se recomienda remover los contenedores, ejecutando en la consola:

1. `docker-compose down`
2. `docker-compose -f ./docker-compose.cypress.yml up -d`



# Ver ejecución y reportes :heavy_check_mark:
Para visualizar el progreso de un contenedor puedes ejecutar los siguientes comandos en una consola:
Notas: 
- La composición y la ejecución de los escenarios tarda un tiempo dependiendo de la capacidad de su máquina local, por lo que si en el primer intento no le salen logs, dele unos segundos más para que el componente se ejecute
- La ejecución de VRT debe esperar a que cypress haya finalizado las pruebas, si se revisa la carpeta antes es probable que no vea resultados

1. Kraken `docker logs kraken-web`
2. Cypress `docker logs cypress-chrome`
3. Ghost `docker logs ghost`
4. VRT - `docker logs vrt-test`

## Ver reportes
Una vez la ejecución de las pruebas hayan finalizado los resultados se guardan en las siguientes direcciones segun el suite de pruebas segun el framework utilizado

1. Kraken `kraken-ghost/reports`
2. Cypress `cypress-ghost/cypress`
3. VRT `vrt-results/report`

## Ver reporte de Pruebas de Regresión Visual :paintbrush:
Este es generado a través de Cypress por esta razón se debe ejecutar primero este suite de pruebas. Una vez finalizado a través de `vrt-results/report/index.html` se puede visualizar los resultados de las pruebas de regresión visual

![Screenshot from 2021-05-16 22-11-44](https://user-images.githubusercontent.com/78863809/118427858-ccf52e00-b693-11eb-85c2-b1c56c9a727a.png)



