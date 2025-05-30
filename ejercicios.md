# Ejercicios para Practicar y Mejorar el Proyecto

Aquí tienes una lista de ejercicios diseñados para ayudarte a practicar tus conocimientos y mejorar este proyecto de festival de música. ¡Diviértete experimentando!

## Ejercicios de SASS

1.  **Nuevas Variables de Color:**
    *   Define al menos tres nuevas variables de color en `_variables.scss`.
    *   Aplica estas nuevas variables a diferentes elementos del sitio (por ejemplo, cambia el color de fondo de una sección, el color del texto de los encabezados o el color de los bordes de los botones).

2.  **Crear un Nuevo Mixin:**
    *   Crea un mixin en `_mixins.scss` para un estilo de botón reutilizable (por ejemplo, con padding, border-radius, y un efecto hover).
    *   Utiliza este mixin en al menos dos lugares diferentes del proyecto.

3.  **Modificar Mixins Existentes:**
    *   Elige un mixin existente en `_mixins.scss` (por ejemplo, el de `telefono` o `tablet`).
    *   Modifícalo para que acepte un parámetro adicional (por ejemplo, un tamaño de fuente específico para ese breakpoint).
    *   Actualiza los lugares donde se usa el mixin para reflejar el cambio.

4.  **Nesting y Selectores Avanzados:**
    *   Revisa el archivo `_galeria.scss` o `_lineup.scss`.
    *   Identifica oportunidades para utilizar nesting de SASS de forma más efectiva o para refactorizar selectores CSS largos y complejos.
    *   Intenta anidar al menos tres niveles de selectores en alguna parte del código.

5.  **Extendiendo Clases (Uso de `@extend`):**
    *   Identifica dos o más selectores en tus archivos SCSS que compartan un conjunto significativo de propiedades CSS.
    *   Crea una clase base con estas propiedades compartidas.
    *   Utiliza `@extend` para que los selectores originales hereden de esta clase base. Considera las implicaciones de `@extend` versus mixins.

6.  **Modularización Adicional:**
    *   Crea un nuevo archivo `.scss` dentro de la carpeta `layout` para un componente específico que aún no tenga su propio archivo (por ejemplo, `_navegacion.scss` si la navegación principal tiene muchos estilos).
    *   Mueve los estilos relevantes a este nuevo archivo e impórtalo en `app.scss`.

## Ejercicios de JavaScript

7.  **Nueva Funcionalidad en `app.js`:**
    *   Agrega una nueva funcionalidad interactiva al archivo `app.js`. Por ejemplo:
        *   Un botón "Volver Arriba" que aparezca cuando el usuario haga scroll hacia abajo y lo lleve suavemente al inicio de la página.
        *   Un carrusel de imágenes simple para la galería (si aún no existe uno muy complejo).
        *   Validación básica para un formulario (si decides añadir uno).

8.  **Optimizar JavaScript Existente:**
    *   Revisa el código en `app.js`.
    *   Busca oportunidades para refactorizar el código, hacerlo más legible, o mejorar su rendimiento (por ejemplo, usando `querySelectorAll` de manera más eficiente, o delegación de eventos).

## Ejercicios Generales y de Gulp

9.  **Agregar un Nuevo Paquete NPM y Tarea Gulp:**
    *   Investiga un paquete NPM útil para el desarrollo frontend (por ejemplo, `autoprefixer` si aún no lo usas, o un minificador de HTML).
    *   Instala el paquete.
    *   Modifica `gulpfile.js` para agregar una nueva tarea que utilice este paquete.

10. **Optimización de Imágenes:**
    *   Si aún no lo has hecho, investiga cómo optimizar las imágenes del proyecto (comprimirlas sin perder mucha calidad).
    *   Puedes hacerlo manualmente o buscar una tarea de Gulp (como `gulp-imagemin`) para automatizar este proceso.
    *   Aplica la optimización a las imágenes en la carpeta `src/img/` y asegúrate de que la tarea de Gulp las mueva a `build/img/`.

11. **Crear una Nueva Sección en `index.html`:**
    *   Diseña y añade una nueva sección a tu `index.html` (por ejemplo, una sección de "Patrocinadores", "Preguntas Frecuentes" o "Cómo llegar").
    *   Crea los estilos correspondientes en un nuevo archivo SCSS dentro de `src/scss/layout/` e impórtalo.
    *   Si es necesario, añade interactividad con JavaScript.

12. **Experimentar con Fuentes:**
    *   Busca e integra una nueva fuente personalizada en el proyecto.
    *   Actualiza `_globales.scss` o `_variables.scss` para usar la nueva fuente en diferentes elementos.

¡Espero que estos ejercicios te sean de utilidad! Recuerda consultar la documentación y experimentar. 

## Qué me es permitido y qué no en esta actividad (Gemini 2.5 pro):

Más que "reglas estrictas", aquí tienes algunas pautas y buenas prácticas que te ayudarán a sacar el máximo provecho de estos ejercicios y a consolidar tu aprendizaje. El objetivo es que no solo completes las tareas, sino que entiendas profundamente los conceptos y cómo aplicarlos de manera efectiva.

**Pautas Generales:**

1.  **Entiende el "Porqué":** No te limites a copiar y pegar código o a hacer que algo funcione sin más. Pregúntate:
    *   *¿Por qué esta solución funciona?*
    *   *¿Qué alternativas existen y por qué esta es (o no es) la mejor en este contexto?*
    *   *¿Cómo afecta este cambio al resto del proyecto?*

2.  **Experimenta y "Rompe" Cosas (Controladamente):**
    *   No tengas miedo de probar variaciones de los ejercicios. ¿Qué pasa si cambias un valor? ¿Si usas un selector diferente?
    *   **Usa control de versiones (Git):** Antes de hacer cambios grandes o experimentar, haz un `commit`. Si algo sale mal, puedes revertir fácilmente. Esto te dará la libertad de explorar sin temor a perder tu trabajo.

3.  **Consulta la Documentación:**
    *   Si un ejercicio te pide usar una nueva propiedad de SASS, una función de JavaScript o una tarea de Gulp, busca la documentación oficial. Entenderás mejor sus capacidades y limitaciones.
    *   MDN Web Docs para HTML, CSS y JavaScript es un recurso invaluable.
    *   La documentación de SASS y Gulp también es muy completa.

4.  **Cambios Incrementales y Pruebas Constantes:**
    *   Realiza cambios pequeños y prueba con frecuencia. Es más fácil depurar un pequeño cambio que muchos a la vez.
    *   Usa las herramientas de desarrollador de tu navegador (inspeccionar elemento, consola, etc.) constantemente.

5.  **Código Limpio y Organizado:**
    *   Intenta que tu código sea legible y mantenible. Esto incluye:
        *   Nombres de variables y funciones descriptivos.
        *   Indentación consistente.
        *   Comentarios para las partes complejas o no obvias (evita comentar lo obvio).

**Pautas Específicas para los Ejercicios:**

*   **SASS (`.scss` files):**
    *   **Variables (`_variables.scss`):** Úsalas para todo lo que se pueda repetir o que quieras cambiar fácilmente más tarde (colores, fuentes, espaciados, breakpoints).
    *   **Mixins (`_mixins.scss`):**
        *   Son geniales para reutilizar grupos de declaraciones CSS. Piensa en ellos como funciones para tus estilos.
        *   Usa parámetros en los mixins para hacerlos más flexibles.
    *   **Nesting (Anidación):**
        *   Es útil para reflejar la estructura HTML y mantener el código organizado, pero evita anidar demasiado (más de 3-4 niveles puede generar selectores muy específicos y difíciles de sobrescribir).
    *   **`@extend`:**
        *   Úsalo con precaución. Es bueno para compartir un conjunto de propiedades *semánticamente relacionadas* entre selectores. Un mal uso puede inflar tu CSS o crear relaciones no deseadas. A menudo, un mixin es una alternativa más segura.
    *   **Modularización:**
        *   Dividir tu SCSS en archivos pequeños y específicos (como en `layout/` y `base/`) es una excelente práctica. Facilita la navegación y el mantenimiento.

*   **JavaScript (`app.js`):**
    *   **Legibilidad:** Escribe funciones pequeñas y con un propósito claro.
    *   **Eficiencia del DOM:**
        *   Evita seleccionar el mismo elemento del DOM múltiples veces dentro de una función si puedes guardarlo en una variable.
        *   Considera la delegación de eventos para manejar eventos en múltiples elementos de manera eficiente.
    *   **No Repetir Código (DRY - Don't Repeat Yourself):** Si tienes bloques de código similares, piensa en cómo podrías crear una función reutilizable.

*   **Gulp (`gulpfile.js`):**
    *   **Entiende las Tareas:** Asegúrate de comprender qué hace cada tarea en tu `gulpfile.js`.
    *   **Instalación de Paquetes:** Cuando instales un nuevo paquete NPM, entiende para qué sirve y cómo se integra en tu flujo de trabajo de Gulp.

*   **HTML (`index.html`):**
    *   **Semántica:** Usa etiquetas HTML semánticas (`<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, etc.) para dar estructura y significado a tu contenido.
    *   **Accesibilidad (a11y):** Considera la accesibilidad. Por ejemplo, añade texto `alt` descriptivo a las imágenes.

**Lo que "No es Válido" (o menos recomendable para aprender):**

*   **Modificar directamente los archivos en la carpeta `build/`:** Estos archivos son generados por Gulp. Tus cambios se perderán la próxima vez que ejecutes las tareas. Trabaja siempre en la carpeta `src/`.
*   **Ignorar los errores de la consola (JavaScript o Gulp):** Los mensajes de error te dan pistas cruciales sobre qué está mal.
*   **Hacer cambios muy grandes sin probar:** Es más difícil encontrar el origen de un problema.
*   **No entender el código que escribes o copias:** El objetivo es aprender, no solo hacer que funcione.

En resumen: **sé curioso, sé metódico, prueba constantemente y enfócate en entender los principios detrás de cada tarea.**