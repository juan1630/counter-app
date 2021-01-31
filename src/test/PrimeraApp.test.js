import React from 'react';

import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';



describe('preubas en el componente primer app', () => {

    // test('Debe mostrar hola soy goku', () => {
    //     const saludo ="Hola soy Gokú";
    //     // cuando son porps requeridas se deb de enviar dentro del componente
    //     const { getByText } = render( <PrimeraApp  saludo={saludo} /> );
    //     // wrapper.getByText();
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // });


    test('debe de mostrar el componente <PrimeraApp/>', ()=> {

          const saludo = "Hola soy Gokú";
          const wrapper  = shallow( <PrimeraApp saludo={saludo}/> );
          expect(  wrapper ).toMatchSnapshot();
          //
    });

// fin del describe
});
