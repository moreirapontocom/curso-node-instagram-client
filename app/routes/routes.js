module.exports = function(application){
	application.get('/', function(req, res){
		application.controllers.index.index(application, req, res);
	});

	application.get('/home', function(req, res){
		application.controllers.home.home(application, req, res);
	});

}


