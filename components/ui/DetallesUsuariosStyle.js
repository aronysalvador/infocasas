import styled from '@emotion/styled';

export const Usuario = styled.li`
    padding: 4rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
`;

export const DescripcionProducto = styled.div`
    flex:0 1 600px;
    display:grid;
    grid-template-columns: 6fr 1fr;
    column-gap: 2rem;
`;

export const Titulo = styled.a`
    font-size: rem;
    font-weight:bold;
    margin: 0;

    :hover {
        cursor: pointer;
    }
`;

export const TextoDescripcion = styled.p`
    font-size:1.6rem;
    margin:0;
    color: #888;
`;

export const Votos = styled.div`
    flex: 0 0 auto;
    text-align: center;
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;

    div {
        font-size: 2rem;
    }

    p {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;

export const InputSubtmit2 = styled.input`
    background-color: gray;
    width: auto;
    padding: 1.5rem;
    text-align: center;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight:700;

    &:hover {
        cursor:pointer;
    }
`;

export const InputSubtmit3 = styled.input`
    background-color: var(--naranja);
    width: auto;
    padding: 1.5rem;
    text-align: center;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight:700;


    &:hover {
        cursor:pointer;
    }
    `;
