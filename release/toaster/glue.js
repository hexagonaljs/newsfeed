var Glue;

Glue = (function() {

  function Glue(useCase, gui) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    After(this.useCase, "start", function() {
      return _this.gui.showFeed(_this.useCase.feed);
    });
    LogAll(this.useCase);
    LogAll(this.gui);
  }

  return Glue;

})();
