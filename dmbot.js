var twit = require('twit');
var config = require('./config');
var Twitter = new twit(config);
var stream = Twitter.stream('user');
stream.on('direct_message',function(directMsg){

	var usr = directMsg.direct_message.sender.screen_name;
	if(usr!='otixj'){
	console.log(usr);
	Twitter.post('direct_messages/new',{screen_name:usr,text:"Figuring out my bot! Excuse me I'm just a bot Yuhu"},function(err){
		if(err){
			console.log("Something went wrong because: "+err);
		}
	})
}

});