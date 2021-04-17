# Instalar Webpack

```
npm i -D webpack webpack-cli webpack-dev-server
npm i -D ts-loader
npm i -D html-webpack-plugin
```

Crear un [index.html](../src/index.html)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><%= title %></title>
</head>
	<body>
		<h1><%= title %></h1>
	</body>
</html>
```

Crear el fichero de configuración de _webpack_ en [webpack.config.js](../webpack.config.js)

Ejecutar 

`npm run dev`

y abrir el navegador en la dirección http://localhost:8080. Deberá mostrar el texto **Guia SaaS**.

añadir el siguiente código a [index.ts](../src/index.ts)

```js
window.onload = ()=>{
	const h1 = document.getElementsByTagName('h1')
	h1.item(0).innerHTML = 'Hola Mundo Web'
}
```

Al guardar los cambios, en el navegador abierto previamente debe aparecer el texto **Hola Mundo Web** sustituyendo al texto **Guia SaaS**