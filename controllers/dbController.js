var mongoose = require('mongoose');
var pessoaModel = require('../models/pessoaModel');

//Ao ser requisitado /popularBD, o banco criado, populado e retornado o JSON
module.exports = function(app){           
    app.get('/popularBD',function(req,res){
        var dados = [
            {
                nome:'Carlos',
                sobrenome:'Pires'
            },
            {
                nome:'Cintia',
                sobrenome: 'Dantas'
            }
        ];

        // Popula o mongodb com os dados acima
        pessoaModel.create(dados, function(err,results){
            if(err){
                console.log(err);
            }else{
                res.send(results);
            }
        });
    });
};