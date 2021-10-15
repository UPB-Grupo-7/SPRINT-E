let registros =[];

function validar_captcha(rcaptcha){
    captcha = 3+2;
    if (rcaptcha == captcha) {        
        return true;
    } else{
        return false;
    }
}

function iniciar_sesion(usuario, contrasena, rcaptcha){
    for (var i=0; i<registros.length; i++){

        if(registros[i].contrasena == contrasena && registros[i].usuario == usuario){
            n= validar_captcha(rcaptcha)
            if(n == true){
                return true;
            } else{
                return false;
            }
        } else{
            return false;
        }
    }
}

function agregarRegistro(){
    let persona = [];
    usuario = document.getElementById('in_usuario').value;
    contrasena = document.getElementById('in_contrasena').value;
    validarUsuario = false;
    validarContrasena = false;
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (usuario.length < 3 || usuario.length > 9) {
        console.log("Usuario no tiene la longitud");
    } else if (!ptr.test(usuario)) {
        console.log("Usuario usa caracteres especiales");
    } else {
        if(usuario != ""){
            validarUsuario = true;
        }
        else{
            console.log("Usuario no tiene info")
        }
    }
    if (contrasena.length < 6) {
        console.log("Contrasena no tiene la longitud");
    } else if (!ptr.test(contrasena)) {
        console.log("Contrasena tiene caracteres especiales");
    } else {
        if(contrasena != ""){
            validarContrasena = true;
        }
        else{
            console.log("Usuario no tiene info")
        }
    }
    if(validarUsuario == true && validarContrasena == true){
        persona = {"usuario" : usuario, "contrasena" : contrasena}
        registros.push(persona);
        console.log(persona);
        console.log(registros);
    }
}

module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.agregarRegistro = agregarRegistro;