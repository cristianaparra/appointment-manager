import React, { Fragment, useState } from 'react';
import Formulario from './components/formulario';


function App() {


  const [citas, guardarCitas]= useState([]);


  //funcion que agrege nuevas citas

  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  }

  return (
    <Fragment>

      <h1>Administrador de Pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario  crearCita={crearCita}/>
          </div>
          <div className='one-half column'>
        
                  </div>

        </div>

      </div>

    </Fragment>
  );
}

export default App;