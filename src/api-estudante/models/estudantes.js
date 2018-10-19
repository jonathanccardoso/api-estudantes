var mongoose = require('mongoose'),
    scherma = mongoose.Schema();

var EstudanteSchema = new Schema({
  nome: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Estudantes', EstudantesRanges);