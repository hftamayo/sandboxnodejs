const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  user: {
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User', //deprecado este tipo de referencias en la versión 6.x de mongoose      
    },
  },
});

module.exports = mongoose.model("Order", orderSchema);
