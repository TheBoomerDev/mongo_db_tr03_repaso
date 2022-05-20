const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    nombre   : { type: String, default: 'Gollum' },
    apodo    : { type: String, default: 'Gollum' },
    descripcion:{ type: String, default: 'Gollum' },
    edad:{ type: Number, default: 0 }
}
const Esquema = new Schema(schema, params);
const model = mongoose.model('personaje', Esquema);

module.exports = model