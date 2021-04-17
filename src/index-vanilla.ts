console.log('Hola mundo')

window.onload = ()=>{
	const h1 = document.getElementsByTagName('h1')
	h1.item(0).innerHTML = 'Hola Mundo Web'
}