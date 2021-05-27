const express = require('express');
const app = express();
const morgan = require('morgan');

//Configurações
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


//Iniciando o middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Minhas Routes
app.use(require('./routes/index'));
app.use('/api/nakamas', require('./routes/nakamas'));

//Iniciando o servidor
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});