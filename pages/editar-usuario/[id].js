

import React, {  useState, useEffect} from 'react';
import { css } from '@emotion/core';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import { Formulario, Campo, InputSubtmit, Error, Alerta } from '../../components/ui/Formulario';
import clienteAxios from '../../config/axios';
import validarCrearUsuario from '../../validaciones/validarCrearUsuario';


const EditarUsuario = () => {

  //Routing para obtener el id actual
  const router = useRouter();
  const { query: {id} } = router;

  const [ alerta , guardarAlerta]  = useState(false);

  const [mensaje, guardarMensaje] = useState();

  const [ dataEditar , setDataEditar ] = useState({});

  const [paso, guardarPaso] = useState(true);

  const [ submitForm, guardarSubmitForm ] = useState(false);

  const [ errores, guardarErrores ] = useState({});

  useEffect(()=>{
    
    if(id){
      const obtenerUsuario = async () => {
        try {
          const response = await clienteAxios.get(`/${id}`);
          const data = response.data;
            setDataEditar({
              nombre : data.name,
              email: data.email,
              telefono: data.phone, 
              website: data.website
  
            })  

            guardarPaso(false);
          
        } catch (error) {
          console.log(error);
        }  
        
      }   
      if(paso){   
        obtenerUsuario();
      }
                
   } 

    if(submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if(noErrores) {
        crearUsuario(); // fn = Funcion que se ejecuta en el componente
      }
      guardarSubmitForm(false);
   }

  }, [id, errores]);

const handleChange = e => {
  setDataEditar({
      ...dataEditar,
      [e.target.name] : e.target.value


  })
} 

//Funcion que se ejecuta cuando el usuario hace submit
const handleSubmit = e => {
  e.preventDefault();
  const erroresValidacion = validarCrearUsuario(dataEditar);
  guardarErrores(erroresValidacion);
  guardarSubmitForm(true);
}

 //Cuando serealiza el evento de Blur
 const handleBlur = () => {
  const erroresValidacion = validarCrearUsuario(dataEditar);
  guardarErrores(erroresValidacion);
}

 //Extraer el nombre del Proyecto
  const { nombre, email, telefono, website } = dataEditar; 
 
    async function crearUsuario () {
        try {
            const response = await clienteAxios.put(`/${id}`, {
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
            console.log('No se puedo traer la data')
        }

    }

  return (
    <div>
      <Layout>      
          <>
          <h1
              css={css`
                  text-align: center;
                  margin-top: 5rem;
              `}
          >Editar Usuario</h1>
          <Formulario
            onSubmit={handleSubmit}
            // noValidate
          >

            {alerta ? 
            
            ( <Alerta> Respuesta( {mensaje} : Se ha editado un  Usuario.)
              . Sera redireccionado en 3 segundos.
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
                value="Editar Usuario"
                
            />}


          </Formulario>
        </>

      </Layout>
    </div>
  )
}
  
export default EditarUsuario