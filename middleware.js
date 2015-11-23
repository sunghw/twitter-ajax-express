module.exports={
	logger: function(req, res, next){
		//request method
		console.log('Request : ' + new Date() + ' ' + req.method + ' ' + req.originalUrl);

		next();
	}
};