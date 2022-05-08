export class Especialidad{

    _id;
    _nombre;

    constructor(id,nombre){
        this._id=id;
        this._nombre=nombre;
    }

    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }   
}