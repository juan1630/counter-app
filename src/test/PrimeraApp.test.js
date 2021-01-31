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
          // el Snapshot toma una fotografia del codigo del componente y la compará, para actualizar el Snapshot con la tecla u
          expect(  wrapper ).toMatchSnapshot();
          //
    });
    // fin del primer test

    test('Debe de retornar el subtitulo desde los props', ()=> {
      const saludo = "Hola soy Gokú";
      const subTitulo ="Soy el subtitulo";

      const wrapper  = shallow(
        <PrimeraApp
          saludo={saludo}
          subtitulo={subTitulo}
          />
      );

      // la funcion find es propia del wrapper que funciona como un querySelector
      const textoParrafo = wrapper.find('p').text();
      console.log( textoParrafo );
      expect( textoParrafo ).toBe( subTitulo );
    });

// fin del describe
});
