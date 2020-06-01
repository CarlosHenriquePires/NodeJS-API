var mongoose = require('mongoose');

//Criando um schema no mongodb
var Schema = mongoose.Schema;

//Definindo o schema
var myVideosModel= new Schema({
        titulo: String,
        descricao: String,
        categoria: String,
        link: String
    });

//Definindo o modelo do myVideos no mongodb
var myVideos = mongoose.model('MyVideos',myVideosModel);

//Exportando Pessoa
module.exports = myVideos;