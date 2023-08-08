# Estilos de Listas en CSS

En CSS, puedes aplicar diferentes estilos a las listas HTML utilizando diversas propiedades y pseudoelementos. Algunos de los estilos más comunes son:

## 1. List-Style-Type

La propiedad `list-style-type` se utiliza para establecer el tipo de viñeta o numeración de las listas. Algunos valores comunes son:

- `disc`: Crea una viñeta redonda.
- `circle`: Crea una viñeta circular.
- `square`: Crea una viñeta cuadrada.
- `decimal`: Crea una numeración decimal.
- `lower-alpha`: Crea una numeración alfabética minúscula.
- `upper-alpha`: Crea una numeración alfabética mayúscula.

Ejemplo:

```css
ul {
  list-style-type: square;
}

ol {
  list-style-type: upper-alpha;
}
```

## 2. List-Style-Position

La propiedad `list-style-position` se utiliza para especificar la posición de las viñetas o numeración de las listas. Algunos valores comunes son:

- `inside`: Las viñetas o numeración se colocan dentro del área de contenido.
- `outside`: Las viñetas o numeración se colocan fuera del área de contenido.

Ejemplo:

```css
ul {
  list-style-position: inside;
}

ol {
  list-style-position: outside;
}
```

## 3. List-Style-Image

La propiedad `list-style-image` se utiliza para utilizar una imagen personalizada como viñeta en lugar del estilo predeterminado. Puedes especificar la ruta de la imagen o usar `none` para eliminar la viñeta.

Ejemplo:

```css
ul {
  list-style-image: url('imagen-vineta.png');
}
```

## 4. List-Style

La propiedad `list-style` combina las propiedades `list-style-type`, `list-style-position` y `list-style-image` en una sola declaración abreviada.

Ejemplo:

```css
ul {
  list-style: square inside url('imagen-vineta.png');
}
```

Estos son solo algunos ejemplos de cómo puedes aplicar estilos a las listas en CSS. Puedes combinar estas propiedades y experimentar con diferentes valores para lograr el aspecto deseado.

Aquí tienes un ejemplo de cómo se podrían aplicar algunos de estos estilos a una lista HTML:

```html
<style>
  ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  ol {
    list-style-type: upper-alpha;
    list-style-position: outside;
  }
</style>

<ul>
  <li>Elemento de lista 1</li>
  <li>Elemento de lista 2</li>
  <li>Elemento de lista 3</li>
</ul>

<ol>
  <li>Elemento de lista 1</li>
  <li>Elemento de lista 2</li>
  <li>Elemento de lista 3</li>
</ol>
```