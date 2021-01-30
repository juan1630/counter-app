import React from 'react';
import { render } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp';

describe('preubas en el componente primer app', () => {
    test('Debe mostrar hola soy goku', () => {
        const saludo ="Hola soy Gokú";
        // cuando son porps requeridas se deb de enviar dentro del componente
        const { getByText } = render( <PrimeraApp  saludo={saludo} /> );
        // wrapper.getByText();
        expect( getByText( saludo ) ).toBeInTheDocument();
    });
});
