import React from 'react';
import PropTypes  from 'prop-types'

// funcional component

const CounterApp = ({value } ) => {
  const handleadd = (event)=>  {
    console.log(event);
    return 1;
  }

  return (
    <>
    <h1> Counter App </h1>
    <h2>  { value } </h2>
    <button  onClick={ handleadd } > +1 </button>
    </>
  )
}

// refactor de la funcion
// hace referencia  a la funcion que se declaro arriba


CounterApp.propTypes = {
  value:PropTypes.number
}
export default CounterApp;
