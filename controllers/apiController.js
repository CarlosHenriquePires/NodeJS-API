var pessoaModel = require('../models/pessoaModel');
var bodyParser = require('body-parser');

module.exports = function (app){

    //Aceita qualquer tipo de requisição seja via json ou forms no body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //Rota para buscar a pessoa pelo nome e retorna o json
    app.get('/api/buscarPessoa/:nome',function(req,res){
        pessoaModel.find({nome: req.params.nome}, function(err,results){
            if(err){
                console.log(err);
            }else{
                res.send(results);
            }
        });
    });
    // Rota para adicionar ou atualizar uma Pessoa verificando se foi passado o id da pessoa
    app.post('/api/addPessoa/',function(req,res){;
        if(req.body.id){
            pessoaModel.findByIdAndUpdate(req.body.id,{nome:req.body.nome, sobrenome:req.body.sobrenome},function(err,results){
                if(err){
                    console.log(err);
                }else{
                    var dadosAtualizados = {id:req.body.id,nome:req.body.nome, sobrenome:req.body.sobrenome};
                    var jsonDadosAtualizado = JSON.stringify(dadosAtualizados);
                    // Apresenta os dados antes e depois de serem atualizados
                    res.send('Cadastro atualizado com sucesso!' + '\n' + results + '\n' + jsonDadosAtualizado);
                }
            });
        }else{
            var novaPessoa = {
                nome: req.body.nome,
                sobrenome: req.body.sobrenome
            };
            // Criar uma nova pessoa retornando o json
            pessoaModel.create(novaPessoa,function(err,results){
                if(err){
                    console.log(err);
                }else{
                    res.send('Cadastro salvo com sucesso!' + '\n' + results);
                }
            });
        }
    })
}