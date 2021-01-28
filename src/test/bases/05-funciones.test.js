import { getUser, getUsuarioActivo } from '../../bases/05-funciones';

describe('pruebas en las funciones' , ()=> {

  test('debe retornar un objeto', () => {

    const userTest ={
      uid:'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();
// evalua objetos y que las propiedades sean iguales
    expect( user ).toEqual( userTest );
  });

  test('Debe de retornar un objeto de un usuario activo', ()=> {

      const userActivo = {
        uid:"ABC567",
        username:"Juan"
      }
      const activo = getUsuarioActivo('Juan');
      console.log(activo);
      expect(activo).toEqual(userActivo);

  });
});
