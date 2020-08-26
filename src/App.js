import React, { Fragment, useState } from 'react';
import Formulario from './components/formulario';
import Cita from './components/Cita'

function App() {


  const [citas, guardarCitas] = useState([]);


  //funcion que agrege nuevas citas

  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  }

  //eliminar cita

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }

  const tituloCitas = citas.length === 0 ? 'Sin Citas' : 'Estas son tus Citas';

  return (
    <Fragment>

      <h1>Administrador de Pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita} />
          </div>
          <div className='one-half column'>
            <h1>{tituloCitas}</h1>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>

        </div>

      </div>

    </Fragment>
  );
}

export default App;