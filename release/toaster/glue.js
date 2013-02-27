var Glue;

Glue = (function() {

  function Glue(newsfeed, gui) {
    var _this = this;
    this.newsfeed = newsfeed;
    this.gui = gui;
    After(this.newsfeed, "start", function() {
      return _this.gui.showFeed(_this.newsfeed.stories);
    });
    LogAll(this.newsfeed);
    LogAll(this.gui);
  }

  return Glue;

})();
