import { retornaArreglo } from '../../bases/07-deses-arr';
describe('pruebas de desestructuracion', ()=> {

  test('Debe de retornar un string y un arreglo', () => {

      const [letras, numeros] = retornaArreglo();
      // expect(arr).toEqual(['ABC', 123]);

      expect(letras).toBe('ABC');
      expect( typeof letras ).toBe('string');

      expect(numeros).toBe(123);
      expect( typeof numeros ).toBe('number');

  });

});
