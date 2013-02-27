var FakeWebSocketsAdapter,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

FakeWebSocketsAdapter = (function() {

  function FakeWebSocketsAdapter() {
    this.newStoryPushed = __bind(this.newStoryPushed, this);

    this.createStory = __bind(this.createStory, this);

    this.start = __bind(this.start, this);

  }

  FakeWebSocketsAdapter.prototype.start = function() {
    var intervalId,
      _this = this;
    intervalId = setInterval((function() {
      return _this.newStoryPushed(_this.createStory());
    }), 3000);
    return setTimeout((function() {
      return clearInterval(intervalId);
    }), 20000);
  };

  FakeWebSocketsAdapter.prototype.createStory = function() {
    var author, name, post, story;
    name = ["Andrzej", "Yashke", "Rupert", "Pawel"].sample();
    author = new User(name);
    post = new Post(author, "some fake data here at " + (new Date().toLocaleTimeString()) + " which I disagree with.\n");
    story = new Story(post);
    return story;
  };

  FakeWebSocketsAdapter.prototype.newStoryPushed = function(story) {};

  return FakeWebSocketsAdapter;

})();
