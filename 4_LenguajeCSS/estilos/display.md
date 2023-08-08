
# La propiedad `display` en CSS

La propiedad `display` en CSS se utiliza para controlar el tipo de visualización de un elemento. Determina cómo se renderiza un elemento en el flujo del documento y cómo interactúa con otros elementos.

Algunos de los valores más comunes para la propiedad `display` son:

## 1. `block`

El valor `block` hace que un elemento se comporte como un bloque. Ocupa todo el ancho disponible y se coloca en una nueva línea. Algunos elementos que tienen por defecto el valor `block` son: `div`, `p`, `h1` a `h6`, `ul`, `ol`, entre otros.

Ejemplo:

```css
div {
  display: block;
}
```

## 2. `inline`

El valor `inline` hace que un elemento se comporte como una línea dentro del flujo del texto. No ocupa todo el ancho disponible y otros elementos en la misma línea se renderizan en el mismo flujo. Algunos elementos que tienen por defecto el valor `inline` son: `span`, `a`, `strong`, `em`, entre otros.

Ejemplo:

```css
span {
  display: inline;
}
```

## 3. `inline-block`

El valor `inline-block` combina las características de los elementos `inline` y `block`. Se comporta como una línea dentro del flujo del texto, pero puede tener un ancho y alto definidos, así como márgenes y relleno. Algunos elementos que pueden tener el valor `inline-block` son: `img`, `input`, `button`, entre otros.

Ejemplo:

```css
img {
  display: inline-block;
}
```

## 4. `none`

El valor `none` oculta el elemento de la visualización. El elemento no se renderiza y no ocupa espacio en el flujo del documento. Es útil para ocultar elementos de forma dinámica con JavaScript o para aplicar estilos condicionales.

Ejemplo:

```css
div.hidden {
  display: none;
}
```

Estos son solo algunos ejemplos de cómo utilizar la propiedad `display` en CSS. Puedes combinarla con otras propiedades y experimentar para lograr el diseño deseado.

Aquí tienes un ejemplo de cómo se podrían aplicar algunos estilos utilizando la propiedad `display`:

```html
<style>
  div {
    display: block;
    width: 200px;
    height: 100px;
    background-color: red;
    margin-bottom: 10px;
  }

  span {
    display: inline;
    background-color: blue;
    color: white;
    padding: 5px;
  }

  img {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }

  div.hidden {
    display: none;
  }
</style>

<div></div>

<span>Texto en línea</span>

<img src="imagen.jpg" alt="Imagen">

<div class="hidden">Este div está oculto</div>
```
¡Claro! Aquí tienes una explicación sobre cómo utilizar la propiedad `display: flex;` en CSS:

# `display: flex;` en CSS

La propiedad `display: flex;` en CSS se utiliza para crear un contenedor flexible que organiza sus elementos hijos en una línea o en una columna. Es parte del modelo de diseño flexible conocido como "Flexbox".

Cuando aplicas `display: flex;` a un contenedor, los elementos hijos dentro de ese contenedor se convierten automáticamente en elementos flexibles y se ajustan automáticamente según las reglas de flexibilidad.

La propiedad `display: flex;` tiene varios efectos en los elementos hijos dentro del contenedor:

1. **Distribución de espacio**: Los elementos hijos flexibles se distribuyen automáticamente a lo largo del eje principal (horizontal o vertical) del contenedor. Puedes controlar cómo se distribuye el espacio utilizando diferentes propiedades, como `justify-content` (alineación horizontal) y `align-items` (alineación vertical).

2. **Ajuste de tamaño**: Los elementos hijos flexibles pueden ajustar automáticamente su tamaño para llenar el espacio disponible en el contenedor. Puedes controlar cómo se ajusta el tamaño utilizando propiedades como `flex-grow`, `flex-shrink` y `flex-basis`.

3. **Ordenamiento**: Puedes cambiar el orden de los elementos hijos dentro del contenedor utilizando la propiedad `order`. Esto te permite modificar el orden de visualización sin cambiar el orden en el código HTML.

Aquí tienes un ejemplo de cómo utilizar `display: flex;` en CSS:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  flex: 1;
  height: 100px;
  margin: 10px;
  background-color: blue;
  color: white;
  text-align: center;
}
```

```html
<div class="container">
  <div class="item">Elemento 1</div>
  <div class="item">Elemento 2</div>
  <div class="item">Elemento 3</div>
</div>
```

En este ejemplo, el contenedor con la clase `.container` se convierte en un contenedor flexible con `display: flex;`. Los elementos hijos con la clase `.item` se distribuyen horizontalmente y se centran tanto horizontal como verticalmente dentro del contenedor.

Puedes experimentar con diferentes propiedades y valores para ajustar la apariencia y el comportamiento del diseño flexible.

La propiedad `display: flex;` es una poderosa herramienta para crear diseños flexibles y responsivos en CSS. Te permite controlar fácilmente el flujo y la organización de los elementos en un contenedor.

¡Claro! Aquí tienes una explicación sobre cómo utilizar la propiedad `display: grid;` en CSS:

# La propiedad `display: grid;` en CSS

La propiedad `display: grid;` en CSS se utiliza para crear un diseño de tipo cuadrícula (grid layout) en el cual los elementos hijos de un contenedor se distribuyen en filas y columnas. Es una forma flexible y poderosa de organizar y alinear elementos en una página web.

Cuando aplicas `display: grid;` a un contenedor, los elementos hijos dentro de ese contenedor se convierten automáticamente en elementos de la cuadrícula y se ajustan según las reglas de la cuadrícula.

La propiedad `display: grid;` tiene varios efectos en los elementos hijos dentro del contenedor:

1. **Definición de la cuadrícula**: Puedes definir la estructura de la cuadrícula especificando el número de filas y columnas, así como sus tamaños y distribución utilizando las propiedades `grid-template-rows` y `grid-template-columns`.

2. **Posicionamiento de elementos**: Puedes posicionar los elementos hijos dentro de la cuadrícula utilizando las propiedades `grid-row` y `grid-column`. Esto te permite ubicar los elementos en celdas específicas de la cuadrícula y controlar su tamaño y ubicación.

3. **Alineación y espaciado**: Puedes alinear los elementos y controlar el espaciado entre ellos utilizando propiedades como `justify-items`, `align-items`, `justify-content` y `align-content`.

Aquí tienes un ejemplo de cómo utilizar `display: grid;` en CSS:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.item {
  background-color: blue;
  color: white;
  padding: 20px;
  text-align: center;
}
```

```html
<div class="container">
  <div class="item">Elemento 1</div>
  <div class="item">Elemento 2</div>
  <div class="item">Elemento 3</div>
  <div class="item">Elemento 4</div>
  <div class="item">Elemento 5</div>
  <div class="item">Elemento 6</div>
</div>
```
En este ejemplo, el contenedor con la clase `.container` se convierte en un contenedor de cuadrícula con `display: grid;`. Los elementos hijos con la clase `.item` se distribuyen en una cuadrícula de 3 columnas, y hay un espacio de 10 píxeles entre cada elemento.