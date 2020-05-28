var express = require('express');
var app = express();

// Utilizar dados estáticos do public
app.use('/assets',express.static('./public'));

//Definindo meu view engine ejs
app.set('view engine','ejs');

//Ao receber uma requisição get será renderizado a página index do diretório views
app.get('/',function(req,res){
    res.render('index');
});

app.listen(3000);
