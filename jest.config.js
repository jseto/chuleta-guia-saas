const pathsToIgnore = [
	"/node_modules/",
	"/dist/",
	"/out/",
	"/coverage/"
];

module.exports = {
	globals: {
		'ts-jest': { // configuramos para que Jest use typescript
			'tsConfig': 'tsconfig.json', // usar la configuración estandart de TS
		}
	},
	transform: { // usar TS para extensiones de fichero ts i tsx
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	testMatch: [ // ejecutar tests en los ficheros que contengan ".spec" justo antes de extensiones ts, tsx, js, jsx y se encuentren en una carpeta test
		"**/test/**/*.spec.+(ts|tsx|js|jsx)"
	],
	watchPathIgnorePatterns: pathsToIgnore, // no ejectar tests cuando haya cambios en los directorios de pathToIgnore
	testPathIgnorePatterns: pathsToIgnore // no incluir los directorios de pathToIgnore al ejecutar los tests
}
