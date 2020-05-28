var pessoaModel = require('../models/pessoaModel');
var bodyParser = require('body-parser');

module.exports = function (app){

    //Aceita qualquer tipo de requisição seja via json ou forms no body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //Rota para buscar a pessoa pelo nome e retorna o json
    app.get('/api/pessoa/:nome',function(req,res){
        pessoaModel.find({nome: req.params.nome}, function(err,results){
            if(err){
                console.log(err);
            }else{
                res.send(results);
            }

        });
    });
}