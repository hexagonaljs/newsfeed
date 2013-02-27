var Newsfeed, Post, Story, User,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Newsfeed = (function() {

  function Newsfeed() {
    this.addStory = __bind(this.addStory, this);

    this.start = __bind(this.start, this);
    this.stories = [];
  }

  Newsfeed.prototype.start = function() {};

  Newsfeed.prototype.addStory = function(story) {
    return this.stories.push(story);
  };

  return Newsfeed;

})();

Story = (function() {

  function Story(post) {
    this.post = post;
  }

  return Story;

})();

Post = (function() {

  function Post(author, content) {
    this.author = author;
    this.content = content;
  }

  return Post;

})();

User = (function() {

  function User(name) {
    this.name = name;
  }

  return User;

})();
