class Glue
  constructor: (@useCase, @gui)->
    After(@useCase, "start", => @gui.showFeed(@useCase.feed))
    
    LogAll(@useCase)
    LogAll(@gui)