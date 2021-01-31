import React, { useState } from 'react';
import PropTypes  from 'prop-types'

// funcional component

const CounterApp = ({value  = 2} ) => {

  const [counter, setCounter] = useState( value );
// retorn un arreglo
  const handleadd = ()=>  {
    // console.log(event);

    // setCounter(  counter + 1);
    setCounter( (c) => c +1 );
    // estas son las 2 maneras de manejar el counter y su estado
    // cambiamos el valor del counter
    // solo las funciones que estan dedicadas a cambiar el state
  }

  const handleRest = () => {
    setCounter( c => c - 1 )
  }

  const handleReste = () => {
      setCounter( value );
  }


  return (
    <>
    <h1> Counter App </h1>
    <h2>{counter}</h2>

    <button  onClick={ handleadd } > +1 </button>
    <button  onClick={ handleRest } > -1 </button>
    <button  onClick={ handleReste } > RESET </button>

  </>
  )
}

// refactor de la funcion
// hace referencia  a la funcion que se declaro arriba


CounterApp.propTypes = {
  value:PropTypes.number
}
export default CounterApp;
