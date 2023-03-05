<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Pokemon


## Comenzando

La idea general es crear una aplicación en la cual se puedan ver los distintos Pokemon utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

  - Buscar pokemons
  - Filtrarlos / Ordenarlos
  - Crear nuevos pokemons en una base de datos

Pasos para poder ver el proyecto:

 1- Clonar el repositorio

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. También es necesario tener instalado postgreSQL

Actualmente las versiónes necesarias son:

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor

El repositorio cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

2 - En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con sus propias credenciales para conectarse a postgres.

3 - Crear desde postgreSQL una base de datos llamada `pokemon`, para esto se debe abrir la consola de postgresql y escribir la sentencia sql: 'CREATE DATABASE pokemon;' Luego debemos ordenar a postgreSQL que se conecte a la base de datos creada anteriormente escribiendo la línea: '\c pokemon;' en la consola de postgres.

Una vez conectada la base de datos en postgreSQL, se debe abrir el visual studio code y en la consola dentro de la carpeta 'api' escribir 'npm install', luego poner este mismo comando en la carpeta 'client'.

4 - Escribir en la consola del visual studio, en la carpeta 'api' npm start.

5 - Escribir en la consola del visual studio, en la carpeta 'client' npm start.

