var Twitter = require('twitter');
 
module.exports = new Twitter({
  consumer_key: 'JVfaM4v1UMthOPZ2Q97nUrQ63',
  consumer_secret: 'p8tUk2SZCZRgx5pPrEyRkL8lKSUKgYIClB8gYZSbUR7fM0ECEo',
  access_token_key: '151695126-3wnv1OgSzJziR447R1Tj18pOIg0XWghDOMguRI80',
  access_token_secret: 'uuw2z6Rjp7uHRj2eQrKc7dhyBEV2EMwFvUXZW1ePeTjkw'
});

// var util = require('util');
// var count = 0;
// var params = {
// 	screen_name : 'erudez',
// 	count: 10
// };

// twitter.get('statuses/user_timeline',
// 	params,
// 	function (error, tweets, response){
// 		if(!error){
// 			tweets.forEach(function(tweet){
// 				console.log(tweet.id + " : " + tweet.text);
// 			});
// 			params.max_id = tweets[tweets.length - 1].id;

// 		}
// 	});
// console.log("new params to do next query: ");
// console.log(params);
// twitter.get('statuses/user_timeline',
// 	params,
// 	function (error, tweets, response){
// 		if(!error){
// 			tweets.forEach(function(tweet){
// 				console.log(tweet.text);
// 			})
// 		}
// 	});

// twitter.stream('statuses/filter', {track: 'love'}, function (stream) {
// 	stream.on('data', function ( data ){
// 		console.log(data);
// 		stream.destroy();
// 	});	
// });