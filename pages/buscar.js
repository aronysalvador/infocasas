import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import DetallesPost from '../components/layout/DetallesPost';
import usePost from '../hooks/usePost';

const Buscar = () => {
  const router = useRouter();
  const {query : {q}  } = router;

  //Todos los productos
  const { post } = usePost();
  const [ resultado, guardarResultado ] = useState([]);

  useEffect(()=>{
        
    const busqueda = q.toLowerCase();
    const filtro = post.filter( post => {
       return (
        post.title.toLowerCase().includes(busqueda) ||
        post.body.toLowerCase().includes(busqueda)
      )
    });
    guardarResultado(filtro);
    
   }, [q,post]);

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
