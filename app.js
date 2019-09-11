// docker run --rm -it -p8080:8080 -v $PWD:/app moreirapontocom/node:12.2.0 nodemon app

/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(8080, function(){
	console.log('Servidor online');
})