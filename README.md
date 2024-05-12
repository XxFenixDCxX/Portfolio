# Portfolio

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.7.

**IMPORTANTE**

Antes de ejecutar la aplicación, es necesario crear un archivo dentro de la carpeta src llamado config.ts con el siguiente contenido:

```typescript
export const AppConfig = {
  production: false,
  githubToken: 'TU_TOKEN_AQUÍ'
};
```

Reemplaza TU_TOKEN_AQUÍ con tu token personal de GitHub con el permiso para repositorios públicos.

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Generación de código

Ejecuta `ng generate component nombre-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de pruebas end-to-end

Ejecuta `ng e2e` para ejecutar las pruebas end-to-end a través de una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de pruebas end-to-end.

## Ayuda adicional

Para obtener más ayuda sobre Angular CLI, usa `ng help` o consulta la página de [Resumen y Referencia de Comandos de Angular CLI](https://angular.io/cli).
