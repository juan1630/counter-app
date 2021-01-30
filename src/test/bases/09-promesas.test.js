import { getHeroeByIdAsync }  from '../../bases/09-promesas';
import heroes from '../../data/heroes';


describe('preubas con las promesas' , () => {

    test('preubas con las promesas de los heroes', ( done ) => {
        const id = 1;

        getHeroeByIdAsync( id )
        .then( heroe => {
            expect( heroe ).toBe( heroes[0] );
            done();
        });
    });



      test('Debe de retornar un error cuando no se encunentre un heroe' , ( done) => {


          // siempre que se manejan taeas asincronas se debe de manjear el done() que es un callback
          const id = 10;

          getHeroeByIdAsync(id)
          .catch( error => {
              expect( error ).toBe('No se pudo encontrar el héroe');
              done();
          });
      });
});
// describe('pruebas con promesas', () => {
//
//   test('Dene de retornar un heroe async al ejecutart la funcion' , ( done ) => {
//
// // el parametro done,   es una funcion que nos dice cuando la funcion termnino y le decimos al test que se termino
//       const id = 1;
//
//          getHeroeByIdAsync()
//           .then( heroe => {
//             // siempre se debe de llamar el done

//             done();
//       })
//         .catch( error => {
//       });
//
//   });
//
// });
