import { render } from '@testing-library/preact'
import { h } from 'preact'
import { Title } from './index'

describe('Test de prueba E2E', ()=>{
	it('debe mostrar un encabezamiento',()=>{
		const mockDom = render(
			<Title name="Titulo para el test"/>
		)

		expect( mockDom.getByText('Titulo para el test') ).toBeInTheDocument()

	})
})