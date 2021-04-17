# Instalar Preact

## Instalar Preact y configurar el entorno

```
npm i -D preact
```

cambiar las siguientes líneas en el archivo [tsconfig.json](../tsconfig.json)

```diff
{
  "compileOnSave": false,
  "compilerOptions": {
    "target": "es5", // usamos es5 para tener compatibilidad con navegadores antiguos
    "module": "esnext", // generation de código de modulo conforme a la ultima versión
    "moduleResolution": "node", // resover módulos conforme a NodeJS puesto que lo usaremos tanto en Jest como en Webpack
    "esModuleInterop": true, // permite usar sintaxis de módulos es6
    "sourceMap": true, // generar mapas de código para facilitar la depuración de errores
    "outDir": "./out", // solo para cuando invocamos tsc sin parametros
		"resolveJsonModule": true, // permite importar json como un módulo
    "lib": [
      "esnext", "dom" // permitir las características más recientes de JS y el DOM
-    ]
+    ],
+    "jsx": "react",
+    "jsxFactory": "h"
	}
}
```

y esta otra en el archivo [index.html](../src/index.html)

```diff
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
+   <App/>
	</body>
</html>
```

Crear el archivo [index.tsx](../scr/index.tsx) 

y renombrar los archivos [index.ts](../scr/index.ts) e [index.spec.tsx](../scr/index.spec.tsx) a [index-vanilla.ts](../scr/index-vanilla.ts) e [index-vanilla.spec.tsx](../scr/index-vanilla.spec.tsx) respectivamente.

Finalmente cambiar la línea 7 del archivo de [configuración de Webpack](../webpack.config.js)

```diff
		entry: {
-			'guia-saas': './src/index-vanilla.ts'
+			'guia-saas': './src/index.tsx'
		},
```

## Configuración del entorno para tests E2E en Preact

```sh
npm i -D @testing-library/preact @testing-library/jest-dom
```

create a test setup file at [jest-addons/setup-tests.ts](../jest-addons/setup-tests.ts)

and add the following lines to [jest.config.js](../jest.config.js)

```diff
	watchPathIgnorePatterns: pathsToIgnore, // no ejectar tests cuando haya cambios en los directorios de pathToIgnore
-	testPathIgnorePatterns: pathsToIgnore // no incluir los directorios de pathToIgnore al ejecutar los tests
+	testPathIgnorePatterns: pathsToIgnore, // no incluir los directorios de pathToIgnore al ejecutar los tests
+	setupFilesAfterEnv: [
+		"<rootDir>/jest-addons/setup-tests.ts"
+	]
```

finalmente, crear un test E2E de prueba en [index.spec.tsx](../src/index.spec.tsx)