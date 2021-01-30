import { getImagen } from '../../bases/11-async-await';

describe('Debe de retornar una rl valida', ()=> {

  test('Debe de retornar la url de un gif', async  () =>{
        const url = await getImagen();
        // console.log( url );
        // la url del gif debe de contener https
          expect( url.includes('https://')   ).toBe( true );
  });

});
