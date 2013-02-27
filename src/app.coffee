#<< utils
#<< newsfeed
#<< gui
#<< fake_web_sockets_adapter
#<< glue

class App
  constructor: ->
    @newsfeed          = new Newsfeed()
    gui                = new Gui()
    webSocketsAdapter  = new FakeWebSocketsAdapter()
    glue               = new Glue(@newsfeed, gui, webSocketsAdapter)

    @newsfeed.start()
    @fillWithHardcodedData()
    
    webSocketsAdapter.start()
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

