var myVideos = require('../models/myVideosModel');

//Ao ser requisitado /popularBD, o banco será criado, populado e retornado o JSON
module.exports = function(app){           
    app.get('/popularBD',function(req,res){
        var myVideosData =
            {
                titulo:'lofi hip hop radio - beats to relax/study to',
                descricao:'Música 24/7 para estudo',
                categoria:'Música para Estudo',
                link:'https://www.youtube.com/watch?v=5qap5aO4i9A'
            };

        // Popula o mongodb com os dados acima
        myVideos.create(myVideosData, function(err,results){
            if(err){
                console.log(err);
            }else{
                res.send(results);
            }
        });
    });
};