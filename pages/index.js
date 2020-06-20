import React, {useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import DetallesUsuario from '../components/layout/DetallesUsuario';
import DetallesPost from '../components/layout/DetallesPost';
import clienteAxios from '../config/axios';
import clienteAxios2 from '../config/axios2';
import {Titulo} from '../components/ui/indexStyle';

const Home = () => {

  const [usuarios, guardarUsuarios] = useState([]);

  const [post, guardarPost] = useState([]);

  useEffect(()=>{
    const obtenerUsuarios = async () => {
      try {
        const response = await clienteAxios.get('/'); 
        const data = response.data;
        actualizarData(data);
        
      } catch (error) {
          console.log('No se puedo traer la data')
      }
    }

    const obtenerPost = async () => {
      try {
        const response = await clienteAxios2.get('/'); 
        const data2 = response.data;
        actualizarDataPost(data2);
        
      } catch (error) {
          console.log('No se puedo traer la data')
      }
    }

    obtenerUsuarios();
    obtenerPost();
    
   }, []);
   
  function actualizarData (data) {  
    guardarUsuarios(data);
  }

  function actualizarDataPost (data2) {  
    console.log(data2)
    guardarPost(data2);
  }

    return(
      <div>
        <Layout>
          <div className="listado">
              <div className="contenedor1">
                <ul className="bg-white">
                <Titulo>Usuarios</Titulo>
                {usuarios.map(usuarios => (                                     
                      <DetallesUsuario
                          key={usuarios.id}
                          usuarios={usuarios}
                      />                     
                  ))}
                </ul>             
              </div>

              <div className="contenedor2">
                <ul className="bg-white">
                <Titulo>Posts</Titulo>
                {post.map(post => (                                     
                      <DetallesPost
                          key={post.id}
                          post={post}
                      />                     
                  ))}
                </ul>             
              </div>

             
          </div>
        </Layout>
      </div>
    )
}

export default Home