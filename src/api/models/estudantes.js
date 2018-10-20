var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;

var EstudantesSchema = new Schema({
  nome: {type: String, required: true, trim: true}
});

module.exports = mongoose.model('Estudantes', EstudantesSchema);
