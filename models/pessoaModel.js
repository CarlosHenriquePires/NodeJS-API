var mongoose = require('mongoose');

//Criando um schema no mongodb
var Schema = mongoose.Schema;

//Definindo o schema
var pessoaSchema = new Schema({
        nome: String,
        sobrenome: String
    });

//Definindo o Pessoa model no mongodb
var Pessoa = mongoose.model('Pessoa',pessoaSchema);

//Exportando Pessoa
module.exports = Pessoa;