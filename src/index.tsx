import { h, render } from "preact";

export const Title = ({ name })=>(<h1>{ name }</h1>)

render(<Title name="Hola Mundo Preact" />, document.getElementsByTagName('App')[0]);
