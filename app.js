var express = require('express');
var app = express();
var mongoDB = require('./config/connection');
var dbController = require('./controllers/dbController');
var apiController = require('./controllers/apiController');
var corsConfig = require('./config/corsConfig');

// Utilizar dados estáticos do public
app.use('/assets',express.static('./public'));

//Definindo meu view engine ejs
app.set('view engine','ejs');

//Ao receber uma requisição get será renderizado a página index do diretório views
app.get('/',function(req,res){
    res.render('index');
});
// Habilitando a configuração do CORS
corsConfig(app);
//Conectando ao banco
mongoDB();
// Popular o banco
dbController(app);
// Habilitando as rotas configuradas
apiController(app);


app.listen(3000);
