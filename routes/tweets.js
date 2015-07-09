Twitterish.TweetsRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('tweets');
  },
  model: function() {
    return tweets;
  }
});
