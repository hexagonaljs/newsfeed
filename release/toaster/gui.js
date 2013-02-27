var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
    this.hideGreetMessage = __bind(this.hideGreetMessage, this);

    this.restartClicked = __bind(this.restartClicked, this);

    this.showGreetMessage = __bind(this.showGreetMessage, this);

    this.hideAskForName = __bind(this.hideAskForName, this);

    this.confirmNameButtonClicked = __bind(this.confirmNameButtonClicked, this);

    this.showAskForName = __bind(this.showAskForName, this);

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

  Gui.prototype.showFeed = function(feed) {
    var element;
    element = this.createElementFor("#feed-template");
    return $(".main").append(element);
  };

  Gui.prototype.showAskForName = function() {
    var confirmNameButton,
      _this = this;
    confirmNameButton = $("#confirm-name-button");
    confirmNameButton.click(function() {
      return _this.confirmNameButtonClicked($("#name-input").val());
    });
    return $("#name-input").focus();
  };

  Gui.prototype.confirmNameButtonClicked = function(name) {};

  Gui.prototype.hideAskForName = function() {
    return $(".ask-for-name").remove();
  };

  Gui.prototype.showGreetMessage = function(name) {
    var element,
      _this = this;
    element = this.createElementFor("#greet-message-template", {
      name: name
    });
    $(".main").append(element);
    return $("#restart-link").click(function() {
      return _this.restartClicked();
    });
  };

  Gui.prototype.restartClicked = function() {};

  Gui.prototype.hideGreetMessage = function() {
    return $(".greet-message").remove();
  };

  return Gui;

})();
