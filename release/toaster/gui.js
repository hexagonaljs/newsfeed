var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
    this.storyStructure = __bind(this.storyStructure, this);

    this.appendStory = __bind(this.appendStory, this);

    this.showFeed = __bind(this.showFeed, this);

    this.createElementFor = __bind(this.createElementFor, this);

  }

  Gui.prototype.createElementFor = function(templateId, data) {
    var element, html, source, template;
    source = $(templateId).html();
    template = Handlebars.compile(source);
    html = template(data);
    return element = $(html);
  };

  Gui.prototype.showFeed = function() {
    var element;
    element = this.createElementFor("#feed-template");
    return $(".main").append(element);
  };

  Gui.prototype.appendStory = function(story) {
    var element;
    element = this.createElementFor("#story-template", this.storyStructure(story));
    return $(".feed").prepend(element);
  };

  Gui.prototype.storyStructure = function(story) {
    return {
      authorName: story.post.author.name,
      postContent: story.post.content
    };
  };

  return Gui;

})();
