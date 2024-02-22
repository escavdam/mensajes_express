# Kata 2

## Objetivo

El objetivo de esta kata es construir una app que permita a los usuarios dejar mensajes y almacenarlos en JSON, además de poder ver los mensajes que han dejado otros usuarios.

## Tech

- Node.js
- Express
- Nunjucks

# Kanban

## 1. Iniciar Nodejs //hecho

Iniciad el proyecto para poder instalar las dependencias necesarias.

## 2. Iniciar Expresss //hecho

Iniciad el servidor de express para poder empezar a trabajar. Aseguraos de que el servidor está funcionando correctamente creando una ruta de testeo que devuelva un mensaje en el navegador.

## 3. Iniciar Nunjucks //hecho

Instalad el motor de plantillas Nunjucks para poder empezar a trabajar con vistas. Aseguraos de que las vistas se renderizan correctamente creando una ruta de testeo que devuelva una vista con algun valor inyectado a nunjucks.

## 4. Refactorizar el código //hecho

Aisla el código de las rutas en un archivo separado para que el código sea más legible y mantenible, utiliza `Routers` en express para ello.

## 5. Crear el modelo de mensajes //hecho

Cread una carpeta llamada `db` donde almacenaréis el archivo `mensajes.json`.

En el archivo, debeis crear una estructura de datos que contenga mensajes y autores.

## 6. Crear el controlador de mensajes

Crea una carpeta llamada `scripts` en la raíz del proyecto.
Crea las siguientes funciones en un archivo llamado `mensajes.js` en la carpeta `scripts`:

- **getAll()**: que devuelva el contenido de mensajes.json.
- **add(mensaje, autor)**: que permita añadir mensajes a mensajes.json.
- **reset()**: que permita resetear el contenido de mensajes.json a su estado original.

Esto será el *controlador de mensajes*, se usarán en las rutas `GET` y `POST` de `/mensajes` que crearemos más adelante.

## 7. Crear la ruta `GET /mensajes` //hecho

Cread una ruta que devuelva el contenido de mensajes.json. Usad el método GET y la función `getAll()` del controlador de mensajes que acabáis de crear.

## 8. Crear la ruta `POST /mensajes` 

Cread una ruta que permita añadir mensajes a mensajes.json. Usad el método POST y la función `add(mensaje, autor)` del controlador de mensajes que acabáis de crear. Devolved el siguiente JSON al terminar:
```json
{"status": "ok", "mensaje": "Mensaje agregado correctamente"}
```
## 9. Crear la ruta `GET /mensajes/reset`

Cread una ruta que permita resetear el contenido de mensajes.json a su estado original. Usad el método GET y la función `reset()` del controlador de mensajes que acabáis de crear. Devolved el siguiente JSON al terminar:

```json
{"status": "ok", "mensaje": "Mensajes eliminados correctamente"}
```

## 10. Crear la vista de mensajes en `GET /`

Cread una nueva plantilla de nunjucks llamada `mensajes.njk` que muestre los mensajes que se han dejado en la app. Debéis mostrar tanto usuario como mensaje en la ruta `GET /`.

## 11. Añadir un formulario a la vista

Cread un formulario en la vista `mensajes.njk` que permita a los usuarios dejar mensajes. El formulario debe tener dos campos: uno para el mensaje y otro para el autor.

> **Nota**: El formulario debe enviar los datos a la ruta `/mensajes` mediante el método POST, deberéis usar las propiedades `action` y `method` del formulario para ello.

> **Nota**: Aseguraos de que el formulario está dentro de una etiqueta `form` y que los campos de texto están dentro de una etiqueta `input`.

## 12. Captura de datos del formulario en la ruta `POST /mensajes`

Si todo ha ido bien, al enviar el formulario, los datos se enviarán a la ruta `/mensajes` mediante el método `POST`, pero muy seguramente recibiréis `undefined` en la consola al intentar capturar los datos del formulario.

Para capturarlos correctamente, deberéis usar el **middleware** `express.urlencoded` que viene incluido en express. Aseguraos de que está incluido en vuestro proyecto y de que está siendo usado en la ruta `/mensajes` o de forma global.

