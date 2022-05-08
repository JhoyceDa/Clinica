'use strict';

import {usuarios} from '../utils/usuarios.js';
import {Usuario} from '../js/Entity/Usuario.js';

let arrayUsuarios=[...usuarios];
let myModal = new bootstrap.Modal(document.getElementById('modalRegistro'), {
  keyboard: false
})

const abrirModalRegistro=()=>{

  
      myModal.show();
}

const cerrarModalRegistro=()=>{

    myModal.hide();
}

const getFormDataUsuario = (nombreFormulario) => {
    const documentFormProducto = document.forms[nombreFormulario];
    const tipoDocumento = documentFormProducto['tipoDocumento'].value;
    const numeroDocumento = documentFormProducto['numeroDocumento'].value;
    const contraseña = documentFormProducto['contraseña'].value;
  
    return ({ tipoDocumento, numeroDocumento, contraseña });

  };

const validateForm = (nombreFormulario) => {
    const documentFormProducto = document.forms[nombreFormulario];
    const tipoDocumento = documentFormProducto['tipoDocumento'].value;
    const numeroDocumento = documentFormProducto['numeroDocumento'].value;
    const contraseña = documentFormProducto['contraseña'].value;
  
    return [tipoDocumento.trim(), numeroDocumento.trim(), contraseña.trim()].includes('');
  };

  const resetForm = (nombreFormulario) => {
    const documentFormProducto = document.forms[nombreFormulario];
    documentFormProducto['tipoDocumento'].value = 'DNI';
    documentFormProducto['numeroDocumento'].value = '';
    documentFormProducto['contraseña'].value = '';
  };

const registrarUsuario=()=>{

      const { tipoDocumento, numeroDocumento, contraseña } = getFormDataUsuario('frmRegistro');
      

      if (validateForm('frmRegistro')) {

        Swal.fire({
          icon: 'error',
          title: 'Por favor, competar todos los campos',
          text: 'Verifica nuevamente',
        })

      } else {
        
        arrayUsuarios = [...arrayUsuarios, new Usuario(tipoDocumento, numeroDocumento, contraseña)];
        resetForm('frmRegistro');
        cerrarModalRegistro();
          Swal.fire(
            'OK',
            'Registro Exitoso',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.href = './reservarCita.html';
            } 
          });
      }

}

const loginUsuario=()=>{

  const { tipoDocumento, numeroDocumento, contraseña } = getFormDataUsuario('frmLogin');

  if (!validateForm('frmLogin')) {

    const usuarioBuscado = arrayUsuarios.filter((usuario) => {

      if(usuario.numeroDocumento==numeroDocumento && 
        usuario.contraseña == contraseña && 
        usuario.tipoDocumento==tipoDocumento){
  
        return usuario;
  
      }
  
    });

    
    if(usuarioBuscado.length!=0)
    {
      window.location.href = './reservarCita.html';
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: 'Verifica nuevamente',
      });
    }

  }

}


const documentReady = () => {
    
    const btnBuscar = document.getElementById("btnRegistro");
    const frmRegistro = document.querySelector('#frmRegistro');
    const frmLogin = document.querySelector('#frmLogin');

    const submitRegistro=(e)=>{
      e.preventDefault();
      registrarUsuario();
    }

    const submitLogin=(e)=>{
      e.preventDefault();
      loginUsuario();
    }

    frmLogin.addEventListener('submit', submitLogin);
    frmRegistro.addEventListener('submit', submitRegistro);
    btnBuscar.addEventListener('click',abrirModalRegistro);

}

document.addEventListener('DOMContentLoaded', documentReady);



