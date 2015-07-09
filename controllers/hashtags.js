Twitterish.HashtagsController = Ember.ArrayController.extend({
  returnTweets: [],
  actions: {
    findHashTags: function(){
      var findTag = this.get('hashtag');
      var foundTweets = [];
      for(var i=0; i< tweets.length; i++) {
        for(var j=0; j< tweets[i].hashtags.length; j++) {
          if (findTag == tweets[i].hashtags[j]) {
          foundTweets.push(tweets[i]);
        }
      }
    }
    this.set('returnTweets', foundTweets);
    }
  }
});
