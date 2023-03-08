const express = require ('express');
const app = express();

var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine');

// Configurando pasta de arquivos estáticos acessíveis
app.use(express.static('public'));

app.get('/', (req, res) => {

    return res.render('index.ejs')
    
    });

    app.listen(3000, () => console.log('servidor rodando'));