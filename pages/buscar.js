import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import clienteAxios2 from '../config/axios2';
import DetallesPost from '../components/layout/DetallesPost';

const Buscar = () => {
  const router = useRouter();
  const {query : {q}  } = router;

  //Todos los productos
  const [post, guardarPost] = useState([]);
  const [ resultado, guardarResultado ] = useState([]);

  useEffect(()=>{
    const obtenerPost = async () => {
      try {
        const response = await clienteAxios2.get('/'); 
        const data2 = response.data;
        actualizarDataPost(data2);
        
      } catch (error) {
          console.log('No se puedo traer la data')
      }
    }
    obtenerPost();    
    const busqueda = q.toLowerCase();
    const filtro = post.filter( post => {
       return (
        post.title.toLowerCase().includes(busqueda) ||
        post.body.toLowerCase().includes(busqueda)
      )
    });
    guardarResultado(filtro);
    
   }, [q,post]);

function actualizarDataPost (data) {  
guardarPost(data);
}
  
   return (
    <div>

        {resultado ? (<Layout>
          <div className="listado-productos">
              <div className="contenedor">
                <ul className="bg-white">
                  {resultado.map(post => (
                      <DetallesPost
                          key={post.id}
                          post={post}
                      />
                  ))}
                </ul>
              </div>
          </div>
        </Layout>) : <p>Cargando...</p>}
      
    </div>
   )
}
  
export default Buscar
