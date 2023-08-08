# Estilos de Tablas en CSS

Las tablas en HTML se pueden estilizar utilizando CSS para personalizar su apariencia y mejorar su legibilidad. Hay varios estilos y propiedades disponibles para las tablas, que incluyen:

## 1. Bordes (`border`)

La propiedad `border` se utiliza para establecer los bordes de las celdas de la tabla. Puede especificar el grosor, el estilo y el color del borde. Por ejemplo:

```css
table {
  border: 1px solid #ccc;
}

td {
  border: 1px solid #000;
}
```

## 2. Colapso de Bordes (`border-collapse`)

La propiedad `border-collapse` se utiliza para especificar si los bordes de las celdas deben colapsar en uno solo o si deben mostrarse por separado. Por ejemplo:

```css
table {
  border-collapse: collapse;
}
```

## 3. Relleno (`padding`)

La propiedad `padding` se utiliza para agregar espacio entre el contenido de las celdas y los bordes de la tabla. Puede especificar el relleno individualmente para cada celda o para toda la tabla. Por ejemplo:

```css
td {
  padding: 10px;
}
```

## 4. Ancho y Alto (`width` y `height`)

Las propiedades `width` y `height` se utilizan para establecer el ancho y el alto de las celdas de la tabla. Pueden especificarse en píxeles, porcentajes u otras unidades de medida. Por ejemplo:

```css
td {
  width: 100px;
  height: 50px;
}
```

## 5. Alineación de Texto (`text-align`)

La propiedad `text-align` se utiliza para alinear el texto dentro de las celdas de la tabla. Puede ser "left", "right", "center" o "justify". Por ejemplo:

```css
td {
  text-align: center;
}
```

## 6. Color de Texto y Fondo (`color` y `background-color`)

Las propiedades `color` y `background-color` se utilizan para establecer el color del texto y el color de fondo de las celdas de la tabla, respectivamente. Por ejemplo:

```css
td {
  color: #fff;
  background-color: #000;
}
```

Estos son solo algunos de los estilos más comunes que se pueden aplicar a las tablas en CSS. También existen otras propiedades y estilos disponibles para personalizar aún más las tablas según tus necesidades.

Aquí tienes un ejemplo de cómo se podrían aplicar algunos de estos estilos a una tabla en HTML:

```html
<style>
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    width: 100%;
  }

  td {
    border: 1px solid #000;
    padding: 10px;
    text-align: center;
    color: #fff;
    background-color: #000;
  }
</style>

<table>
  <tr>
    <td>Nombre</td>
    <td>Edad</td>
    <td>País</td>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>25</td>
    <td>EE. UU.</td>
  </tr

>
  <tr>
    <td>Jane Smith</td>
    <td>30</td>
    <td>Canadá</td>
  </tr>
</table>
```