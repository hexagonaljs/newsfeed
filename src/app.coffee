#<< utils
#<< newsfeed
#<< gui
#<< glue

class App
  constructor: ->
    @newsfeed      = new Newsfeed()
    gui          = new Gui()
    glue         = new Glue(@newsfeed, gui)
    

    @fillWithHardcodedData()
    @newsfeed.start()
    window.newsfeed = @newsfeed

  fillWithHardcodedData: =>
    andrzej = new User("Andrzej Krzywda")
    post = new Post(andrzej, "Look at this: http://hexagonaljs. Sounds like a clean way to Single Page Apps")
    hexStory = new Story(post)

    yashke = new User("Jan Filipowski")
    blogPost = new Post(yashke, "Arkency blog: http://blog.arkency.com")
    arkencyStory = new Story(blogPost)


    @newsfeed.addStory(hexStory)
    @newsfeed.addStory(arkencyStory)

new App()

