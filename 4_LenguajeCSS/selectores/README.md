# Selectores en CSS

En CSS, los selectores son patrones utilizados para seleccionar y aplicar estilos a elementos HTML específicos. Hay varios tipos de selectores disponibles en CSS.

## Selector de etiqueta

Este selector selecciona todos los etiqueta HTML que coinciden con el nombre del la etiqueta especificada.

**Ejemplo:**
```css
p {
  color: blue;
}
```
Este ejemplo selecciona todos las etiquetas `<p>` y les aplica el color azul.

## Selector de ID

Este selector selecciona un elemento HTML con un atributo `id` específico.

**Ejemplo:**  
**CSS**
```css
#myElemento {
  font-weight: bold;
}
```
**HTML**
```html
<elemento id="myElemento"></elemento>
```


Este ejemplo selecciona el elemento con el atributo `id="myElemento"` y le aplica un estilo de fuente en negrita.

### Selector de Clase

Este selector selecciona todos los elementos HTML que tienen una clase específica.

**Ejemplo:**  
**CSS**
```css
.myClase {
  background-color: yellow;
}
```
**HTML**
```html
<elemento class="myClase"></elemento>
```
Este ejemplo selecciona todos los elementos con la clase `myClase` y les aplica un color de fondo amarillo.

### Selecciones Mixtas

Es posible combinar selectores para seleccionar elementos más específicos.

**Ejemplo:**  
**CSS**
```css
div.header p {
  color: red;
}
```
**HTML**
```html
<div class="header">
    <p>
        Lorem sit commodo nisi esse occaecat cupidatat consectetur.
    <p>
</div>
```
Este ejemplo selecciona todos los elementos `<p>` que están dentro de un elemento `<div>` con la clase `header` y les aplica un color rojo.

## Selector de Grupo

Este selector permite seleccionar varios elementos al mismo tiempo.

**Ejemplo:**
```css
h1, h2, h3 {
  text-decoration: underline;
}
```
Este ejemplo selecciona todos los elementos `<h1>`, `<h2>` y `<h3>` y les aplica un estilo de subrayado.

## Selector Descendente

Este selector selecciona elementos secundarios dentro de un elemento padre.

**Ejemplo:**
```css
div p {
  font-style: italic;
}
```
Este ejemplo selecciona todos los elementos `<p>` que son hijos directos de un elemento `<div>` y les aplica un estilo de fuente en cursiva.

## Selector Hijo

Este selector selecciona elementos hijos directos de un elemento padre.

**Ejemplo:**
```css
ul > li {
  list-style-type: circle;
}
```
Este ejemplo selecciona todos los elementos `<li>` que son hijos directos de un elemento `<ul>` y les aplica un estilo de viñeta circular.

## Selector Hermano Adyacente

Este selector selecciona un elemento que es inmediatamente seguido por otro elemento.

**Ejemplo:**
```css
h2 + p {
  margin-top: 10px;
}
```
Este ejemplo selecciona el elemento `<p>` que sigue inmediatamente después de un elemento `<h2>` y le aplica un margen superior de 10 píxeles.

### Selector Hermano General

Este selector selecciona todos los elementos hermanos que siguen después de un elemento.

**Ejemplo:**
```css
h3 ~ p {
  color: green;
}
```
Este ejemplo selecciona todos los elementos `<p>` que son hermanos de un elemento `<h3>` y les aplica un color verde.

### Selector Universal

Este selector selecciona todos

 los elementos HTML.

**Ejemplo:**
```css
* {
  padding: 0;
  margin: 0;
}
```
Este ejemplo selecciona todos los elementos HTML y les aplica un relleno y margen de 0.