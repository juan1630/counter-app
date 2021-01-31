// FC
// import React, { Fragment} from 'react';
// <></> Fragments cortos

import React from 'react';
import PropTypes from 'prop-types';

// no se pueden imprimir objectos ni bolleanos
// const saludo = [1,2,3,4,5,6,7];
// const saludo = {
//   nombre:"Juan",
//   edad:25
// }

// usamos el destructurins con los props
const PrimeraApp = ( {
                        saludo,
                        subtitulo
                       } ) => {
  // los props

  // const saludo = "Hola mundo";
  // console.log( props.saludo );
  // esta sintaxis solo acepta valores primitivos
  // <h1> { JSON.stringify( saludo ) } </h1>
   // { JSON.stringify(saludo, null, 3)}
// no imprime booleans
    return (
      <>
      <h1> {saludo} !!!</h1>
      <p>{ subtitulo}</p>
      </>
  );
}


PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired
}

//default props
PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;
