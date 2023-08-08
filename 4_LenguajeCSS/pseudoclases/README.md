# Pseudoclases en CSS

Las pseudoclases en CSS son palabras clave que se agregan a los selectores y que especifican un estado o una acción particular del elemento seleccionado. Las pseudoclases permiten aplicar estilos basados en interacciones del usuario, como el estado de un enlace (visitado, sin visitar, al pasar el mouse), el primer o último elemento de una lista, la selección de un elemento, entre otros.


|Pseudoclase|descripción|
|-|-|
|`:link`|se utiliza para seleccionar enlaces no visitados en una página web.|
|`:visited`| se utiliza para seleccionar enlaces visitados en una página web.|
|`:hover`|se utiliza para seleccionar un elemento cuando el cursor del mouse se sitúa sobre él.|
|`:active`|se utiliza para seleccionar un elemento durante el momento en que está siendo activado por el usuario, como al hacer clic en un enlace.|
|`:focus`|se utiliza para seleccionar un elemento cuando está siendo enfocado por el usuario, como cuando se selecciona un campo de entrada de texto.|
|`:checked`|se utiliza para seleccionar elementos de entrada que están marcados o seleccionados, como casillas de verificación o botones de opción.|
|`:enabled`|se utiliza para seleccionar elementos de entrada que están habilitados y pueden ser interactuados por el usuario.|
|`:disabled`|se utiliza para seleccionar elementos de entrada que están deshabilitados y no pueden ser interactuados por el usuario.|
|`:read-only`|se utiliza para seleccionar elementos de entrada que son de solo lectura.|
|`:read-write`|se utiliza para seleccionar elementos de entrada que son de lectura y escritura.|
|`:required`|se utiliza para seleccionar elementos de entrada que son obligatorios, es decir, deben ser llenados antes de enviar el formulario.|
|`:optional`| se utiliza para seleccionar elementos de entrada que son opcionales, es decir, no es necesario llenarlos antes de enviar el formulario|.
|`:invalid`|se utiliza para seleccionar elementos de entrada cuyos valores no cumplen con las restricciones de validación establecidas, como campos de correo electrónico incorrectos o números inválidos.|
|`:valid`|se utiliza para seleccionar elementos de entrada cuyos valores cumplen con las restricciones de validación establecidas.|
|`:out-of-range`|se utiliza para seleccionar elementos de entrada cuyos valores están fuera del rango especificado, como un número demasiado grande o pequeño en un campo de número.|
|`:in-range`|se utiliza para seleccionar elementos de entrada cuyos valores están dentro del rango especificado.|
|`:lang(es)`|se utiliza para seleccionar elementos que están en un idioma específico, en este caso, el idioma español.|
|`:target`|se utiliza para seleccionar un elemento cuando es el destino de un enlace interno (ancla).|
|`:root`|se utiliza para seleccionar el elemento raíz del documento, que es la etiqueta `<html>`.
|`:default`|se utiliza para seleccionar el elemento predeterminado dentro de un grupo de elementos, como un botón predeterminado en un formulario.|
|`:dir(A)`|se utiliza para seleccionar elementos según su dirección de escritura, donde "A" puede ser "ltr" (de izquierda a derecha) o "rtl" (de derecha a izquierda).|
|`:indeterminate`|se utiliza para seleccionar elementos de entrada que están en un estado indeterminado, como una casilla de verificación que no está marcada ni desmarcada.|
|`:fullscreen`| se utiliza para seleccionar elementos que están en modo de pantalla completa.|
|`:scope`|se utiliza para seleccionar elementos que son descendientes directos del elemento actual.|
|`:any(A)`|se utiliza para seleccionar elementos que coinciden con al menos uno de los selectores especificados en una lista separada por comas.|
---
Ejemplo de uso de pseudoclase:
```css
a:hover {
  color: red;
}
```
En este ejemplo, se aplica un estilo de color rojo a los enlaces cuando el usuario pasa el mouse sobre ellos.

## Pseudoelementos en CSS

Los pseudoelementos en CSS son similares a las pseudoclases, pero en lugar de seleccionar estados o acciones, se utilizan para agregar contenido o estilo a partes específicas de un elemento. Los pseudoelementos se representan con dos puntos `::` y se agregan después del selector.

Algunos ejemplos de pseudoelementos son:

- `::before`: Inserta contenido antes del contenido de un elemento.
- `::after`: Inserta contenido después del contenido de un elemento.
- `::first-line`: Selecciona la primera línea de texto dentro de un elemento.
- `::first-letter`: Selecciona la primera letra de un bloque de texto.

Ejemplo de uso de pseudoelemento:
```css
p::before {
  content: ">>";
  font-weight: bold;
}
```
En este ejemplo, se inserta el contenido ">>" antes del contenido de cada párrafo.