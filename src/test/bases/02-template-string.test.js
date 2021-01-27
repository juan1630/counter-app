import { getSaludo } from '../../bases/02-template-string'

describe('pruebas en 02 template string', ()=> {

  test('prueba en el método getSaludo' , ()=> {
      const nombre = "Juan";
      const result =    getSaludo( nombre );
      console.log( result );
      expect( result ).toBe('Hola '+ nombre);
  });


  test('Se debe de ejecutar la funcion y reotornar Hola carlos si no hay argumentos declarados', () => {

      const saludo = getSaludo();
      expect(saludo).toBe('Hola Carlos');
  });

});
