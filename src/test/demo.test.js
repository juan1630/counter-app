console.log('Hola mundo');

// el comando npm run test ejecuta todas los los archivos ccon el nombre .test.js
//por defecto instala jest que nos ayuda con las pruebas por eso sale el test



describe('Pruebas del archivo demo.test.js', ( )=> {
  test( 'Deben de ser iguales los strings', () => {
    // este es un test suit
    const mensaje = 'Hola mundo!';
    // inicializacion

    //2.-  Estimulo

    const mensaje2 = `Hola mundo!`;

    // 3.- observaciones
    expect(mensaje).toBe(mensaje2);// hace la compracion de los strings

  });

});
