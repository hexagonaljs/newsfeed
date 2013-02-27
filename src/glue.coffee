class Glue
  constructor: (@newsfeed, @gui)->
    After(@newsfeed, "start", => @gui.showFeed(@newsfeed.stories ))
    
    LogAll(@newsfeed)
    LogAll(@gui)