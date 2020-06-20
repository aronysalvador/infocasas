import React from 'react';
import { Post, DescripcionProducto, Titulo, TextoDescripcion, Votos} from '../ui/DetallesPostStyle';

const DetallesPost = ({post}) => {
     const { title, body } = post;

    return (  
        <Post>       
            <DescripcionProducto>
                <div>
                    <Votos>
                        <Titulo> {title}</Titulo>
                    </Votos>

                    <Titulo>Descripcion</Titulo>
                    <TextoDescripcion>{body}</TextoDescripcion>

                </div>
            </DescripcionProducto>
        </Post>

    );
}
 
export default DetallesPost;