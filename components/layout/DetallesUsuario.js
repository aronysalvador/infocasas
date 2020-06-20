import React, { useState} from 'react';
import { Usuario, DescripcionProducto, Titulo, TextoDescripcion, Votos, InputSubtmit2, InputSubtmit3 } from '../ui/DetallesUsuariosStyle';
import { AlertaIndex } from '../ui/Formulario';
import Link from 'next/link';
import clienteAxios from '../../config/axios';

const DetallesUsuario = ({usuarios}) => {

    const [ alerta , guardarAlerta]  = useState(false);

    const [mensaje, guardarMensaje] = useState();
    
    const { id, name, email, phone, website  } = usuarios;

    //Eliminar un Usuario
    const handleEliminar = e => {
        e.preventDefault();
        const idEliminar = id;   
        eliminarUsuario(idEliminar);
        
    }

    const eliminarUsuario = async (idEliminar) => {

        try {        
            const response = await clienteAxios.delete(`/${idEliminar}`);
            const data = response.statusText;
            guardarMensaje(data);
            guardarAlerta(true);
              window.setTimeout(()=>{
                guardarAlerta(false);

            },3000)
             
        } catch (error) {
            console.log('No se pudo eliminar la data')
        }
      
    }

    return (  
        <>
        <Usuario>
        
            <DescripcionProducto>
                <div>
                    <Votos>
                        <Titulo> {name}</Titulo>
                    </Votos>

                    <Titulo>Email</Titulo>
                    <TextoDescripcion>{email}</TextoDescripcion>

                    <Titulo>Telefono</Titulo>
                    <TextoDescripcion> {phone}</TextoDescripcion>

                    <Titulo>WebSite</Titulo>
                    <TextoDescripcion>{website}</TextoDescripcion>

                </div>
            </DescripcionProducto>

            <form
            >
                <Link href='/editar-usuario/[id]' as={`/editar-usuario/${id}`}
                        >
                    <InputSubtmit2 
                        type="submit"              
                        value="Editar"
                    />    
                </Link>   
                      
            </form>
            
            <form
                onSubmit={handleEliminar}
            >
                <InputSubtmit3
                    type="submit"
                    value="Eliminar Usuario"
                />
            </form>
 
        </Usuario>

        {alerta ? ( <AlertaIndex>
            Respuesta( {mensaje} : Eliminado Exitosamente) Este mensaje desaparecera en 3 segundos 
                      </AlertaIndex>) : null}
        </>
    );
}
 
export default DetallesUsuario;