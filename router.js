Twitterish.Router.map(function() {
  this.resource('tweets', {path:'/'});
  this.resource('tweet', {path: 'tweets/:tweet_id'});
  this.resource('addTweet');
  this.resource('hashtags');
})
