var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

App = (function() {

  function App() {
    this.fillWithHardcodedData = __bind(this.fillWithHardcodedData, this);

    var glue, gui;
    this.newsfeed = new Newsfeed();
    gui = new Gui();
    glue = new Glue(this.newsfeed, gui);
    this.fillWithHardcodedData();
    this.newsfeed.start();
    window.newsfeed = this.newsfeed;
  }

  App.prototype.fillWithHardcodedData = function() {
    var andrzej, arkencyStory, blogPost, hexStory, post, yashke;
    andrzej = new User("Andrzej Krzywda");
    post = new Post(andrzej, "Look at this: http://hexagonaljs. Sounds like a clean way to Single Page Apps");
    hexStory = new Story(post);
    yashke = new User("Jan Filipowski");
    blogPost = new Post(yashke, "Arkency blog: http://blog.arkency.com");
    arkencyStory = new Story(blogPost);
    this.newsfeed.addStory(hexStory);
    return this.newsfeed.addStory(arkencyStory);
  };

  return App;

})();

new App();
