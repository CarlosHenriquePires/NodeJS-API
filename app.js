var express = require('express');
var app = express();
var mongoDB = require('./config/connection');
var dbController = require('./controllers/dbController');


// Utilizar dados estáticos do public
app.use('/assets',express.static('./public'));

//Definindo meu view engine ejs
app.set('view engine','ejs');

//Ao receber uma requisição get será renderizado a página index do diretório views
app.get('/',function(req,res){
    res.render('index');
});

//Conectando ao banco
mongoDB();
dbController(app);

app.listen(3000);
