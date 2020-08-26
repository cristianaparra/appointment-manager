import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ crearCita }) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    //desestructurando cita
    const { mascota, propietario, fecha, hora, sintomas } = cita;


    //manejo de error
    const [error, actualizarError] = useState(false)


    //tomando evento de form
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //validando datos de submit

    const submitCita = e => {
        e.preventDefault();
        //validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }
        //eliminar validacion
        actualizarError(false);


        //asignar id// podemos agregar un valor a cita como uuid concatenandolo
        cita.id = uuidv4();
        
        //pasamos cita a app
        crearCita(cita)


        //actualizar cita
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className='alerta-error'>Necesitas completar los campos</p> : null}

            <form
                onSubmit={submitCita}
            >
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

