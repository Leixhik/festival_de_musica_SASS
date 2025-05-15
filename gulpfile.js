import {src, dest, watch} from 'gulp'; // src y dest son funciones de gulp que permiten definir tareas para procesar archivos. src se utiliza para especificar la ubicación de los archivos de origen, mientras que dest se utiliza para definir la ubicación de salida donde se guardarán los archivos procesados.

import * as dartSass from 'sass'; // Dart Sass es una implementación de Sass escrita en Dart. Es la versión recomendada de Sass y es compatible con todas las características del lenguaje Sass. Dart Sass se utiliza para compilar archivos SCSS o Sass a CSS.

import gulpSass from "gulp-sass";
/* utiliza la sintaxis de módulos de JavaScript (ES Modules) para importar el paquete gulp-sass. Este paquete es un plugin para Gulp (un sistema de automatización de tareas) que permite compilar archivos SCSS o Sass a CSS. Sass es un preprocesador de CSS que añade características como variables, anidación y mixins, lo que facilita la escritura y mantenimiento de estilos. 
*/

const sass = gulpSass(dartSass);

export function css(done){
    src('src/scss/app.scss', {sourcemaps: true}) // src('src/scss/app.scss') es la ruta de entrada del archivo SCSS que se va a compilar. Este archivo puede contener estilos y reglas CSS escritas en Sass.

        .pipe(sass().on('error', sass.logError) )
        .pipe(dest('build/css', { sourcemaps: '.' }))

    done();
}

export function dev(){
    watch('src/scss/**/*.scss', css);/* La línea observa cambios en el archivo app.scss y ejecuta la tarea css cuando detecta modificaciones */
    
}