export class Usuario{

    _id;
    _numeroDocumento;
    _tipoDocumento;
    _contrasenia;

    constructor(numeroDocumento,tipoDocumento,contrasenia){
        this._numeroDocumento=numeroDocumento;
        this._tipoDocumento=tipoDocumento;
        this._contrasenia=contrasenia;
    }


    get id(){
        return this._id;
    }

    get numeroDocumento(){
        return this._numeroDocumento;
    }

    set numeroDocumento(numeroDocumento){
        this._numeroDocumento=numeroDocumento;
    }

    get tipoDocumento(){
        return this._tipoDocumento;
    }

    set tipoDocumento(tipoDocumento){
        this._tipoDocumento=tipoDocumento;
    }

    get contrasenia(){
        return this._contrasenia;
    }

    set contrasenia(contrasenia){
        this._contrasenia=contrasenia;
    }
    

}