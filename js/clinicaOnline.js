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
    const nombreDocumento = documentFormProducto['nombreDocumento'].value;
    const contraseña = documentFormProducto['contraseña'].value;
  
    return ({ tipoDocumento, nombreDocumento, contraseña });

  };

const validateForm = (nombreFormulario) => {
    const documentFormProducto = document.forms[nombreFormulario];
    const tipoDocumento = documentFormProducto['tipoDocumento'].value;
    const nombreDocumento = documentFormProducto['nombreDocumento'].value;
    const contraseña = documentFormProducto['contraseña'].value;
  
    return [tipoDocumento.trim(), nombreDocumento.trim(), contraseña.trim()].includes('');
  };

  const resetForm = (nombreFormulario) => {
    const documentFormProducto = document.forms[nombreFormulario];
    documentFormProducto['tipoDocumento'].value = 'DNI';
    documentFormProducto['nombreDocumento'].value = '';
    documentFormProducto['contraseña'].value = '';
  };

const registrarUsuario=()=>{

      const { tipoDocumento, nombreDocumento, contraseña } = getFormDataUsuario('frmRegistro');
      

      if (validateForm('frmRegistro')) {

        Swal.fire({
          icon: 'error',
          title: 'Por favor, competar todos los campos',
          text: 'Verifica nuevamente',
        })

      } else {
        
        arrayUsuarios = [...arrayUsuarios, new Usuario(tipoDocumento, nombreDocumento, contraseña)];
        resetForm('frmRegistro');
        cerrarModalRegistro();
          Swal.fire(
            'OK',
            'Registro Exitoso',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/reservarCita.html';
            } 
          });
          console.log(arrayUsuarios);
      }

}

const loginUsuario=()=>{



}


const documentReady = () => {
    
    const btnBuscar = document.getElementById("btnRegistro");
    const frmRegistro = document.querySelector('#frmRegistro');

    const submitRegistro=(e)=>{
      e.preventDefault();
      registrarUsuario();
    }

    frmRegistro.addEventListener('submit', submitRegistro);
    btnBuscar.addEventListener('click',abrirModalRegistro);

}

document.addEventListener('DOMContentLoaded', documentReady);



