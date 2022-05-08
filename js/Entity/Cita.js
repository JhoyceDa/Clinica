export class Cita{

  static contadorCita = 0;

  _id;
  _sede;
  _especialidad;
  _medico;
  _dia;
  _hora;
  _estado;

  constructor(sede, especialidad, medico, dia, hora, estado) {
    this._id = ++Cita.contadorCita;
    this._sede = sede;
    this._especialidad = especialidad;
    this._medico = medico;
    this._dia = dia;
    this._hora = hora;
    this._estado = estado;
  }

  get id(){
    return this._id;
  }

  get sede(){
    return this._sede;
  }

  set sede(sede){
    this._sede=sede;
  }
  
  get especialidad(){
    return this._especialidad;
  }

  set especialidad(especialidad){
    this._especialidad=especialidad;
  }

  get medico(){
    return this._medico;
  }

  set medico(medico){
    this._medico=medico;
  }

  get dia(){
    return this._dia;
  }

  set dia(dia){
    this._dia=dia;
  }

  get hora(){
    return this._dia;
  }

  set dia(dia){
    this._dia=dia;
  }

  get estado(){
    return this._estado;
  }

  set estado(estado){
    this._estado=estado;
  }

}