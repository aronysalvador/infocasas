export default function validarCrearUsuario(valores) {
    let errores = {};

    //Validar el nombre del Usuario
    if(!valores.nombre){
        errores.nombre = "El Nombre del Usuario es Obligatorio";
    }

    //Validar la Email del Usuario
    if(!valores.email){
        errores.email = "El Email es obligatoria";
    }else if(valores.email.length < 5){
        errores.email = "El Email debe tener al menos 5 caracteres";
    }else if(valores.email.includes("@") == false){
        errores.email = "El Email debe tener un dominio valido";
    }

    //Validar el Numero Telefonico del Usuario
    if(!valores.telefono){
        errores.telefono = "El Numero Telefonico es obligatorio";
    }else if(valores.telefono.length < 9){
        errores.telefono = "El Numero Telefonico debe tener al menos 9 caracteres";
    }

    //Validar la WebSite del Usuario
    if(!valores.website){
        errores.website = "La WebSite del Usuario es Obligatoria";
    }

    return errores;
}