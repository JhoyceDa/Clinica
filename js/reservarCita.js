'use strict';

import {citas} from '../utils/citas.js';
import {Cita} from './Entity/Cita.js'
import {doctores} from '../utils/doctores.js';
import {especialidades} from '../utils/especialidades.js';
import {sedes} from '../utils/sedes.js';
import models from './models.js'

let arrayCitas=[...citas];
let myChart;

let modalCita = new bootstrap.Modal(document.getElementById('modalCita'), {
    keyboard: false
  })

  const listarMedicos = ()=>{
    
    const cmbMedico = document.querySelector('#cmbMedico');
    doctores.forEach((element) => {
      cmbMedico.innerHTML += `
        <option value="${element.nombre}">${element.nombre}</option>
      `
      });
}

const listarEspecialidades = ()=>{
    
    const cmbEspecialidad = document.querySelector('#cmbEspecialidad');
    especialidades.forEach((element) => {
      cmbEspecialidad.innerHTML += `
        <option value="${element.nombre}">${element.nombre}</option>
      `
      });
}

const listarSedes = ()=>{
    
    const cmbSede = document.querySelector('#cmbSede');
    sedes.forEach((element) => {
      cmbSede.innerHTML += `
        <option value="${element.nombre}">${element.nombre}</option>
      `
      });
}
  
  const abrirModalCita=()=>{
  
    
    modalCita.show();
  }
  
  const cerrarModalCita=()=>{
  
    modalCita.hide();
  }

  const readCita = (citaId) => {

    console.log(citaId);
    /*
    const documentFormProducto = document.querySelector('#formProducto');
    const formTitle = document.querySelector('#formTitle');
    const formButton = document.querySelector('#formButton');
  
    const producto = productos.find((element) => {
      return element.id === productId;
    });
    const { id, nombre, precio, marca, categoria, stock } = producto;
  
    formTitle.innerHTML = 'Editar producto';
    formButton.innerHTML = 'Editar';
    documentFormProducto['id'].value = id;
    documentFormProducto['nombre'].value = nombre;
    documentFormProducto['precio'].value = precio;
    documentFormProducto['marca'].value = marca;
    documentFormProducto['categoria'].value = categoria;
    documentFormProducto['stock'].value = stock;
    showAlert('primary', 'Registro leído');*/
  };

  const readCitas = () => {

    const tBodyCita = document.querySelector('#tBodyCita');
    tBodyCita.innerHTML = '';
  
    arrayCitas.forEach((cita) => {
      const { id, sede, especialidad, medico, dia, hora,estado } = cita;
      tBodyCita.innerHTML += `
        <tr onclick="readCita(${id})" style="cursor: pointer;">
          <th>${id}</th>
          <td>${sede}</td>
          <td>${especialidad}</td>
          <td>${medico}</td>
          <td>${dia}</td>
          <td>${hora}</td>
          <td>${estado}</td>
        </tr>
      `
    });
    //console.log('Registros leídos');
  };

  const getFormDataCita = () => {
    const documentFormCita = document.forms['frmRegistro'];
    const sede = documentFormCita['sede'].value;
    const especialidad = documentFormCita['especialidad'].value;
    const medico = documentFormCita['medico'].value;
    const dia = documentFormCita['dia'].value;
    const hora = documentFormCita['hora'].value;
  
    return ({ sede, especialidad, medico, dia, hora });

  };

const validateForm = () => {

  const documentFormCita = document.forms['frmRegistro'];
  const sede = documentFormCita['sede'].value;
  const especialidad = documentFormCita['especialidad'].value;
  const medico = documentFormCita['medico'].value;
  const dia = documentFormCita['dia'].value;
  const hora = documentFormCita['hora'].value;
  
    return [sede.trim(), especialidad.trim(), medico.trim(), dia.trim(), hora.trim()].includes('');
  };

  const resetForm = () => {
    const documentFormCita = document.forms['frmRegistro'];
    documentFormCita['sede'].value = '';
    documentFormCita['especialidad'].value = '';
    documentFormCita['medico'].value = '';
    documentFormCita['dia'].value = '';
    documentFormCita['hora'].value = '';
  };

  const registrarCita = () => {
    const { sede, especialidad, medico, dia, hora } = getFormDataCita();

    if (validateForm()) {
     
      Swal.fire({
        icon: 'error',
        title: 'Por favor, competar todos los campos',
        text: 'Verifica nuevamente',
      })

    } else {
      
      arrayCitas = [...arrayCitas, new Cita(sede, especialidad, medico, dia, hora, 'Registrado')];
      resetForm();
      readCitas();
      cerrarModalCita();
      Swal.fire(
        'OK',
        'Cita Registrada Correctamente',
        'success'
      )
      
    }

  };


const documentReady = () => {
    
    const btnCrear = document.getElementById("btnCrear");
    const btnEditar = document.querySelector('#btnEditar');

    const submitRegistro=(e)=>{
      e.preventDefault();
      registrarCita();
      myChart.destroy();
      myChart= models(arrayCitas);
    }

   readCitas();
   listarMedicos();
   listarEspecialidades();
   listarSedes();
   myChart= models(arrayCitas);
   frmRegistro.addEventListener('submit', submitRegistro);
   btnCrear.addEventListener('click',abrirModalCita);
   btnEditar.addEventListener('click',abrirModalCita);

}

document.addEventListener('DOMContentLoaded', documentReady);