const Cart = require('./cart');
const db = require('../util/datalayer');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description.trim();
    this.price = price;
  }

  save() {

  }

  static deleteById(id){

  }

  /* metodo sincrono
    sin el callback genera un error
    */
  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    
  }
}
