class Cita{

  static contadorCita = 0;

  _id;
  _nombre;
  _precio;
  _marca;
  _categoria;
  _stock;

  constructor(nombre, precio, marca, categoria, stock) {
    this._id = ++Producto.contadorProducto;
    this._nombre = nombre;
    this._precio = precio;
    this._marca = marca;
    this._categoria = categoria;
    this._stock = stock;
  }

}