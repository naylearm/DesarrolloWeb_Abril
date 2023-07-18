# Estructura Basica HTML
### Diferencia entre etiqueta y elemento
```html
<!-- Las etiquetas se utilizan para marcar el inicio y final de un elemento -->
<p>contenido del elemento parrafo</p>
```

## Que es semantica en HTML
_En HTML, la semántica se refiere al uso de etiquetas HTML apropiadas y significativas para describir el contenido de una página web. La semántica en HTML ayuda a los motores de búsqueda y a otros programas de software a comprender mejor el contenido de una página web y su estructura, lo que puede mejorar la accesibilidad y la usabilidad de la página para los usuarios._

## Elementos de bloque
Estos son los elementos que estructuran la parte principal de la
página web, dividiendo una página en bloques coherentes. Un elemento a nivel de bloque
siempre comienza con una nueva línea y ocupa todo el ancho de la página web, de
izquierda a derecha.

Los siguientes son algunos elementos de bloque en HTML:
|Tag|Descripción|
|:-:|:-:|
|`<article>`||
|`<aside>`||
|`<blockquote>`||
|`<canvas>`||
|`<dd>`||
|`<div>`||
|`<dl>`||
|`<dt>`||
|`<fieldset>`||
|`<figcaption>`||
|`<figure>`||
|`<footer>`||
|`<form>`||
|`<h1>` hasta `<h6>`||
|`<header>`||
|`<hr>`||
|`<li>`||
|`<main>`||
|`<nav>`||
|`<noscript>`||
|`<ol>`||
|`<output>`||
|`<p>`||
|`<pre>`||
|`<section>`||
|`<table>`||
|`<tfoot>`||
|`<ul>`||
|`<video>`||

## Elemento de linea
Los elementos en línea son aquellos elementos que diferencian la
parte de un texto dado y le proporcionan una función particular. Estos elementos no comienzan con una nueva línea y toman el ancho según el requisito. Los elementos en línea se utilizan principalmente con otros elementos.

|Tag|Descripción|
|:-:|:-:|
|`<a>`||
|`<abbr>`||
|`<acronym>`||
|`<b>`||
|`<bdo>`||
|`<big>`||
|`<br>`||
|`<button>`||
|`<cite>`||
|`<code>`||
|`<dfn>`||
|`<em>`||
|`<i>`||
|`<img>`||
|`<input>`||
|`<kbd>`||
|`<label>`||
|`<map>`||
|`<object>`||
|`<q>`||
|`<samp>`||
|`<script>`||
|`<select>`||
|`<small>`||
|`<span>`||
|`<strong>`||
|`<sub>`||
|`<sup>`||
|`<textarea>`||
|`<time>`||
|`<tt>`||
|`<var>`||

## Atributos
Un atributo en HTML son palabras especiales utilizadas dentro de la etiqueta de apertura,
para controlar el comportamiento del elemento. Los atributos HTML brindan información
adicional sobre el elemento. Cada atributo HTML tiene su nombre y valor:
|Atributo |Describción|
|:-:|:-:|
|id =” ”               | Para identificar un elemento único.|
|class =” ”            | Identificador múltiple.|
|align =” ”            | Alineación de contenido.|
|border =” ”           | Para darle borde al contenido.|
|style =” ”            | Para darle un estilo al contenido.|
|background-color =” ” | Para color de fondo.|
|href =” ”             | Para enlaces html.|
|height =” ”           | Para determinar altura.|
|width =” ”            | Para determinar ancho.|
|src=“ ”               | Para imágenes.|  

## Atributos globales
Los atributos globales en HTML son aquellos atributos que son comunes para todos los
elementos de HTML. Los atributos globales se pueden usar con todos los elementos,
aunque es posible que no tengan ningún efecto en algunos elementos.
|Atributo|Valor|Descripción|
|:-:|:-:|:-:|
|accesskey |Caracter|Se utiliza para generar atajos de teclado para el elemento actual.|
|class |nombreClase|Se utiliza para proporcionar el nombre de clase para el elemento actual.Se utiliza principalmente con la hoja de estilo.|
|Contenteditable|lógico|Determina si el contenido dentro de un elemento es editable o no.|
|contextmenu |menu_id |Define el id para el elemento \<menu\> que se utiliza como menú contextual (aparece un menú al hacer clic con el botón derecho) para un elemento.|
|data-* |algun valor|Se utiliza para almacenar datos privados específicos de elementos a los que se puede acceder mediante Javascript.|
|dir |rtl ltr auto|Especifica la dirección del contenido dentro del elemento actual.|
|draggable |lógico|Especifica si el contenido dentro de un elemento se puede mover o no mediante la API de arrastrar y soltar.|
|dropzone |copy,move.link|Especifica la acción que se realiza en el elemento arrastrado cuando se suelta, por ejemplo, si se copia, se mueve o se vincula.|
|hidden |-|Se utiliza para ocultar el elemento de la vista.|
|id |id |Especifica una identificación única para el elemento. Se puede utilizar con CSS y JavaScript.|
|lang |language_code |Especifica el idioma principal para el contenido de un elemento.|
|style |style |Se utiliza para aplicar CSS en línea al elemento actual. |
|spellcheck|lógico|Especifica si el contenido debe revisarse en busca de errores ortográficos o no.|
|tabindex |numerico|Determina el orden de tabulación de un elemento. |
|title |text |Se utiliza para proporcionar el título, el nombre o alguna información adicional sobre el elemento.|

