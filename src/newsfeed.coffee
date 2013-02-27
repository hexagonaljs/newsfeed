class Newsfeed
  constructor: ->
    @stories = []
    
  start: => 

  addStory: (story) =>
    @stories.push(story)



class Story
  constructor: (@post) ->

class Post
  constructor: (@author, @content) ->

class User
  constructor: (@name) ->


