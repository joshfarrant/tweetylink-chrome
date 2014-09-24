var util = require('util');
var twitter = require('twitter');

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
    resources = data['resources']['statuses']['/statuses/home_timeline'];
    console.log(resources);
})

var params = {
  'count' : 30,
  'include_entities' : true,
  'exclude_replies'  : false
};

twit.getHomeTimeline(params, function(data) {
  for (var i in data) {
    var tweet = data[i];
    var text = tweet['text'];
    var user = tweet['user']['screen_name'];
    var urls = tweet['entities']['urls'];
    var media = tweet['entities']['media'];

    var links = [];

    if (urls[0]) {
      for (var url in urls) {
        var temp = urls[url]['expanded_url'];
        links.push(temp);
      }
    };

    if (media) {
      for (var url in urls) {
        var temp = urls[url]['expanded_url'];
        links.push(temp);
      }
    };

    // console.log('text', text);

    if (links[0]) {
      // console.log('links', links);
      for (link in links) {
        console.log('@' + user, ':', links[link]);
      }
    }

  }
});