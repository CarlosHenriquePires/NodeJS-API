var cors = require('cors');
// Habilitando o cors
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  };
  
module.exports = function(app){
    app.use(cors(corsOptions));
}