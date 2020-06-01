var myVideos = require('../models/myVideosModel');
var bodyParser = require('body-parser');

module.exports = function(app){

    //Aceita qualquer tipo de requisição seja via json ou forms
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // Rota que irá consultar e retornará todos os videos
    app.get('/api/myVideos', function(req,res){
        myVideos.find({}, function(err, results){
            if(err){
                console.log(err);
            }else{
                res.send(results);
            }
        });
    });

    // Rota para cadastrar videos
    app.post('/api/myVideos/add',function(req,res){
        myVideos.create({titulo: req.body.titulo, descricao: req.body.descricao,
            categoria: req.body.categoria, link: req.body.link}, function(err,results){
                if(err){
                    console.log(err);
                }else{
                    res.send(results);
                }  
            });
    });

    // Rota para apagar videos

    app.delete('/api/myVideos/delete/:id', function(req,res){
        myVideos.findByIdAndRemove(req.params.id,function(err,results){
            if(err){
                console.log(err);
            }else{
                res.send(results);
            }
        });
    });
}