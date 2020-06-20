import React, {  useState } from 'react';
import { css } from '@emotion/core';
import  { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubtmit, Error, Alerta } from '../components/ui/Formulario';
import clienteAxios from '../config/axios';

//Validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearUsuario from '../validaciones/validarCrearUsuario';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  telefono: '',
  website: ''
}


const NuevoUsuario = () => {

  const [ alerta , guardarAlerta]  = useState(false);

  const [mensaje, guardarMensaje] = useState();

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur} = useValidacion(STATE_INICIAL, validarCrearUsuario, crearUsuario);

    const { nombre, email, telefono, website } = valores;

    //Hook de routing para redireccionar
    const router = useRouter();

    async function crearUsuario () {   
        try {
            const response = await clienteAxios.post('/', {
              name: nombre,
              email: email,
              phone: telefono,
              website: website
            });
            const data = response.statusText;
            
              guardarMensaje(data);
              guardarAlerta(true);
              window.setTimeout(()=>{
                guardarAlerta(false);

                return router.push('/');
              },3000)
            
            
        } catch (error) {
            console.log('No se puedo crear')
        }

    }

  return (
    <div>
      <Layout>      
          <>
          <h1
              css={css`
                  text-align:
                   center;
                  margin-top: 5rem;
              `}
          >           
            {alerta ? "Felicidades! Nuevo Usuario Creado" : "Nuevo Usuario "}
            </h1>
          <Formulario
            onSubmit={handleSubmit}
            // noValidate
          >
            {alerta ? ( <Alerta> Respuesta( {mensaje} : Se ha creado un nuevo Usuario.)
               Sera redireccionado en 3 segundos.
                      </Alerta>) 
            
            : 
            
            <fieldset>
              <legend>Informacion General</legend>

              <Campo>
                  <label htmlFor="nombre">Nombre</label>
                  <input 
                      type="text"
                      id="nombre"
                      placeholder="Nombre del Usuario"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>
          
              {errores.nombre && <Error>{errores.nombre}</Error>}

              <Campo>
                  <label htmlFor="email">Email</label>
                  <input 
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email del Usuario"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>

              {errores.email && <Error>{errores.email}</Error>}

              <Campo>
                  <label htmlFor="telefono">Telefono</label>
                  <input 
                      type="text"
                      id="telefono"
                      placeholder="Telefono del Usuario"
                      name="telefono"
                      value={telefono}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>

              {errores.telefono && <Error>{errores.telefono}</Error>}

              <Campo>
                  <label htmlFor="website">WebSite</label>
                  <input 
                      type="text"
                      id="website"
                      placeholder="WebSite del Usuario"
                      name="website"
                      value={website}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campo>

              {errores.website && <Error>{errores.website}</Error>}

            </fieldset>
            
            }
            
            {alerta ? null : <InputSubtmit 
                type="submit"
                value="Crear Usuario"
                
            />}
            
          </Formulario>
     
        </>

      </Layout>
    </div>
  )
}

  
export default NuevoUsuario