import React, { Fragment, useState } from 'react';

const Formulario = () => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }


const {mascota, propietario, fecha, hora, sintomas} = cita;




    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombres mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre mascota'
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombres dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre dueño de la mascota'
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={handleChange}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type='submit'
                    className='u-full-width button-primary'>Agregar Cita</button>

            </form>
        </Fragment>


    );
}

export default Formulario

