console.log("The bot is starting!");
var twit = require('twit');
var config = require('./config');
var Twitter = new twit(config);
var favorite = function() {
  var params = {
    q: '#webdev OR #webdeveloping',
    result_type: 'recent',
    lang: 'en'    
  } 
  Twitter.get('search/tweets', params, function(err,data){
  	console.log(data);
    // find tweets
    var tweet = data.statuses[10].id_str;
    console.log(tweet);
    // if random tweet exists
    if(typeof tweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: tweet}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log("Something went wrong!");
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}
	setInterval(favorite,100000);
	var shown = false;
	console.log(shown);
	function sendTweet(){
		if(shown==false){
			Twitter.post('statuses/update',{status:'If you are seeing this tweet, then I successfully coded my twitter bot! :-D Hi from twitter bot!'},function(err,data){
				if(!err){
					console.log('Everything went fine!');
					shown=true;
				}
  				else{
					console.log(err);
				}
			});
		}
	}
	//sendTweet();
	function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};