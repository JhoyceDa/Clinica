'use strict';

let modalCita = new bootstrap.Modal(document.getElementById('modalCita'), {
    keyboard: false
  })
  
  const abrirModalCita=()=>{
  
    
    modalCita.show();
  }
  
  const cerrarModalCita=()=>{
  
    modalCita.hide();
  }

const documentReady = () => {
    
    const btnCrear = document.getElementById("btnCrear");
    const btnEditar = document.querySelector('#btnEditar');

    const submitRegistro=(e)=>{
      e.preventDefault();
      registrarUsuario();
    }

   // frmRegistro.addEventListener('submit', submitRegistro);
   btnCrear.addEventListener('click',abrirModalCita);
   btnEditar.addEventListener('click',abrirModalCita);

}

document.addEventListener('DOMContentLoaded', documentReady);