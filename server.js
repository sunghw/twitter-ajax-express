var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //heroku server EV port to listen to. if local, 3000.
var middleware = require('./middleware');
var twitter = require('./twitter');

app.use(middleware.logger); //application level middleware

app.use(express.static(__dirname + '/public'));
	//default redirects '/' to abovedir/index.html


app.get('/getTweets', function (req, res) {
	console.log("Server got GET /getTweets ");
	console.log(req.query);
	getTimeline(req.query, res);
});
// app.get('/getMoreTweets', function (req, res){
// 	console.log("Server got GET /getMoreTweets");
// 	console.log(req.query);
// 	//pass screen_name, count, maxid.
// 	getTimeline(req.query, res);

// });
function getTimeline( params, res){
	twitter.get('statuses/user_timeline',
		params,
		function (error, tweets, response){
			if(!error && tweets.length > 0){
				if(params.max_id){
					tweets.shift(); //remove first element with max_id ; 
				}
				if(tweets.length > 0){
					var tweetsResp = [];
					tweets.forEach(function(tweet){
						console.log(tweet.id + " : " + tweet.text);
						var t = {id : tweet.id, text: tweet.text};
						tweetsResp.push(t);
					});
					params.max_id = tweets[tweets.length - 1].id;
					res.json({max_id : params.max_id, tweets: tweetsResp});
				}
				else{
					res.json({});
				}
			}
	});
}

app.listen(PORT, function(){//callback fn once the server starts.
	console.log('express server started on port:' + PORT);
}); //which port to listen to

// var count = 0;


