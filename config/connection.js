var mongoose = require('mongoose');

//Exportando a função para conexão com o mongodb
module.exports = function(){
   return mongoose.connect("mongodb+srv://carluxhenrique:1a2b3c@cluster0-yirwx.mongodb.net/myvideos?retryWrites=true&w=majority");
};