# Estilos CSS en Texto

En CSS, existen varias propiedades que se pueden utilizar para aplicar estilos a los textos en una página web. Estas propiedades permiten controlar aspectos como el tamaño de fuente, el color, el espaciado, la alineación y muchos otros atributos del texto.

## Propiedades de Estilo de Texto

A continuación, se describen algunas de las propiedades más comunes utilizadas para aplicar estilos a los textos:

- `font-family`: Define el tipo de fuente que se utilizará para el texto. Se pueden especificar varias fuentes en caso de que la primera no esté disponible en el dispositivo del usuario.

- `font-size`: Establece el tamaño de la fuente. Puede especificarse en unidades de medida como píxeles, porcentajes o em.

- `font-weight`: Define el grosor o peso de la fuente. Se pueden utilizar valores como `normal`, `bold`, `lighter`, entre otros.

- `font-style`: Determina el estilo de la fuente. Puede ser `normal`, `italic` para cursiva o `oblique` para una inclinación sutil.

- `color`: Define el color del texto. Puede especificarse utilizando un nombre de color, un valor hexadecimal o un valor RGB.

- `text-decoration`: Permite añadir decoraciones al texto, como subrayado, tachado o resaltado. Se pueden utilizar valores como `none`, `underline`, `line-through`, entre otros.

- `text-align`: Controla la alineación horizontal del texto dentro de su contenedor. Puede ser `left`, `right`, `center` o `justify`.

- `line-height`: Establece la altura de línea del texto, que determina el espacio vertical entre líneas.

- `letter-spacing`: Define el espaciado entre letras. Puede utilizarse para aumentar o disminuir el espacio entre caracteres.

Estos son solo algunos ejemplos de las propiedades que se pueden utilizar para estilizar el texto en CSS. Existen muchas más propiedades que ofrecen un amplio control sobre la apariencia del texto.

## Ejemplo de Uso de Estilos de Texto

```css
h1 {
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  text-decoration: underline;
}

p {
  font-family: "Helvetica", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  text-align: justify;
}
```

En este ejemplo, se aplican diferentes estilos de texto a los encabezados (`h1`) y los párrafos (`p`). Se define la fuente, el tamaño, el peso, el color, la alineación y otros atributos para cada elemento.

Es importante recordar que estos estilos se pueden aplicar a cualquier elemento de texto en HTML, utilizando los selectores adecuados.