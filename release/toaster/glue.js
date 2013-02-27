var Glue;

Glue = (function() {

  function Glue(newsfeed, gui, webSocketsAdapter) {
    var _this = this;
    this.newsfeed = newsfeed;
    this.gui = gui;
    this.webSocketsAdapter = webSocketsAdapter;
    After(this.newsfeed, "start", function() {
      return _this.gui.showFeed();
    });
    After(this.newsfeed, "addStory", function(story) {
      return _this.gui.appendStory(story);
    });
    After(this.webSocketsAdapter, "newStoryPushed", function(story) {
      return _this.newsfeed.addStory(story);
    });
    LogAll(this.newsfeed);
    LogAll(this.gui);
    LogAll(this.webSocketsAdapter);
  }

  return Glue;

})();
