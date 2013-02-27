class Glue
  constructor: (@newsfeed, @gui, @webSocketsAdapter)->
    After(@newsfeed, "start", => @gui.showFeed())
    After(@newsfeed, "addStory", (story) => @gui.appendStory(story ))

    After(@webSocketsAdapter, "newStoryPushed", (story) => @newsfeed.addStory(story))
    
    LogAll(@newsfeed)
    LogAll(@gui)
    LogAll(@webSocketsAdapter)