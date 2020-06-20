import axios from 'axios';

const  clienteAxios2 = axios.create({

    baseURL:  process.env.API_BACK2,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8"
      }

  });

export default clienteAxios2;  
