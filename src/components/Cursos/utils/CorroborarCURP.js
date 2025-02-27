

export function validarGeneroCurp (Curp){
    //validar que la entrada sea una cadena
    if (typeof Curp !== "string") {
        throw new Error ("La CURP debe ser una cadena de texto");
    }
    //quitar espacios en el inicio y en el final
    Curp=Curp.trim();
    //validar que esta curp tenga 18 caracteres
    if (Curp.length!==18) {
        throw new Error ("La CURP debe de contener 18 caracteres");
    }
    //Extraer caracter de genero
    const genero = Curp.charAt (10).toUpperCase();
    let sexo;
    if (genero === "H"){
        sexo = "Hombre";
        return sexo;
    } else if (genero === "M") {
        sexo = "Mujer";
        return sexo;
    } else {
        throw new Error ("Caracter de genero invalido");
    }
    }

/* let curpEjemplo = "MXME980920MDFRTR04"; */
let curpEjemplo = "FOPE000922HTCLRMA1";
console.log (validarGeneroCurp(curpEjemplo)); 