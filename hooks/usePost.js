import React, { useEffect, useState } from 'react';
import clienteAxios2 from '../config/axios2';

const usePost = () => {
    const [ post, guardarPost ] = useState([]);

    useEffect(() => {
        const obtenerPost = async () => {
            try {
              const response = await clienteAxios2.get('/'); 
              const data2 = response.data;
              console.log(data2);
              actualizarDataPost(data2);
              
            } catch (error) {
                console.log('No se puedo traer la data')
            }
          }
          obtenerPost(); 
    }, []);

    function actualizarDataPost (data) {  
        guardarPost(data);
    }

    return {
        post
    }
}

export default usePost;