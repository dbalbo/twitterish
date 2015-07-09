Twitterish.AddTweetController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var timeNow = new Date;
      var newTweet = {id: (tweets.length +1), text: this.get('new-tweet'), time: timeNow.toJSON(), hashtags: this.get('hashtags').split(" ")};
      tweets.addObject(newTweet);
    }
  }
});
