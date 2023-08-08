# Lenguaje CSS
## CSS - Cascading Style Sheets

CSS es un lenguaje utilizado para describir el estilo y la presentación de un documento HTML. Permite controlar el diseño, los colores, las fuentes, los tamaños y otros aspectos visuales de los elementos en una página web. A continuación se muestra la sintaxis básica de CSS:

### Selectores

Los selectores en CSS se utilizan para seleccionar los elementos HTML a los que se aplicarán las reglas de estilo. Pueden ser selectores de etiquetas, clases, identificadores, atributos y pseudo-clases. Aquí hay algunos ejemplos:

- Selector de etiqueta: `h1`, `p`, `div`
- Selector de clase: `.clase`, `.destacado`
- Selector de ID: `#id`, `#encabezado`
- Selector de atributo: `[atributo]`, `[tipo="boton"]`
- Selector de pseudo-clase: `:hover`, `:focus`

### Propiedades y valores

Las propiedades en CSS se utilizan para definir los estilos y características de los elementos seleccionados. Se asignan a los selectores utilizando la siguiente sintaxis:

```css
selector {
  propiedad: valor;
  /* Otras propiedades y valores */
}
```

Aquí hay algunos ejemplos de propiedades comunes y sus valores:

- `color`: define el color del texto. Por ejemplo: `color: #FF0000;`
- `font-size`: establece el tamaño de la fuente. Por ejemplo: `font-size: 16px;`
- `background-color`: define el color de fondo de un elemento. Por ejemplo: `background-color: #FFFF00;`
- `border`: especifica el estilo, grosor y color del borde. Por ejemplo: `border: 1px solid #000000;`

### Comentarios

Los comentarios en CSS se utilizan para agregar notas o explicaciones en el código. Se pueden utilizar para hacer el código más legible o para desactivar temporalmente una regla de estilo. Los comentarios en CSS se escriben de la siguiente manera:

```css
/* Este es un comentario */
```

### Ejemplo de uso

A continuación se muestra un ejemplo básico de cómo se puede utilizar CSS para aplicar estilos a un elemento HTML:

```css
/* Estilo para todos los párrafos */
p {
  color: #333333;
  font-size: 14px;
}

/* Estilo para un elemento con clase "destacado" */
.destacado {
  background-color: #FFFF00;
  border: 1px solid #000000;
}
```

En este ejemplo, se aplica un estilo de color de texto y tamaño de fuente a todos los párrafos, y se define un estilo de fondo y borde para los elementos con la clase "destacado".