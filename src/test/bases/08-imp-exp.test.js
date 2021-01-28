import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp';
import heroes  from '../../data/heroes';

describe('test en las funciones de los heroes', () => {

    test('debe de retornar un heroe por el ID', ()=> {

      const id = 1;
      const heroe = getHeroeById(id);
        // console.log( heroe );


        const heroeData  =  heroes.find( h => h.id === id );
        console.log(heroeData);

        expect( heroe ).toEqual( heroeData );

    });

    test('debe de retornar undefinied si el heroe no existe', ()=> {

      const id = 10;
      const heroe = getHeroeById(id);
        // console.log( heroe );
      expect( heroe ).toBe( undefined );

    });


    test('debe de retornar un arreglo de heroes de DC', ()=> {

      const owner = 'DC';

      const heroes = getHeroesByOwner( owner);
        // console.log( heroe );
      // expect( heroe ).toBe( undefined );
      const heroesData = heroes.filter( h => h.owner === owner );

    
      expect( heroesData ).toEqual( heroes );

    });


    test('debe de retornar un numero de length', ()=> {

      const owner = 'Marvel';

      const heroes = getHeroesByOwner( owner);

      const heroesData = heroes.filter( h => h.owner === owner );
      expect( heroesData.length ).toBe( 2 );

    });

});
