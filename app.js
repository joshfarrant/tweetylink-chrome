var util = require('util'),
  twitter = require('twitter');
var twit = new twitter({
  consumer_key: 'r1meHgmotX0kqqsC7MAd0stV4',
  consumer_secret: 'gYTPIf8toYvbKexvha6oIajqr5BsshEjTKF5bXUM2h9VCu8CoL',
  access_token_key: '28396067-IJ2RbCXzwfnBoAQdPjFV5RMXng0E1Nb0zSaR0tv0A',
  access_token_secret: 'uVHlPJ7OzlYXpheUp2KnnCQCzK3JRcunnhbOOANqD6O53'
});

// twit.verifyCredentials(function(data) {
//   console.log(util.inspect(data));
// });

twit.rateLimitStatus(function(data) {
  console.log(data['resources']['statuses']['/statuses/home_timeline']);
})

var params = {
  'include_entities' : true
};

twit.getHomeTimeline(params, function(data) {
  for (var i in data) {
    var tweet = data[i];
    var text = tweet['text'];
    var user = tweet['user']['name'];
    var urlEntities = tweet['entities']['urls'];

    var links = [];
    var media = [];

    if (urlEntities[0]) {
      for (var entity in urlEntities) {
        var temp = urlEntities[entity]['display_url'];
        links.push(temp);
      }
    };

    console.log(
      user,
      text,
      links,
      '\n'
      );
    
  }
});