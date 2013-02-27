Newsfeed
====================

This is a simple newsfeed implementation that used the hexagonaljs approach.
This example is focused on showing real-time updates from the server.


How to run it?
--------------

Just clone the repo and open index.html.
Alternatively, see it at http://fast-shore-9907.herokuapp.com/

How to work on it?
------------------

  $ npm install -g coffee-toaster
  
  $ toaster -dw


The app object
--------------

This is the starting point of the application. The app object initializes the use case object (newsfeed) and the adapters (gui and webSocketsAdapter). At the end it passes all of them to the glue code.

```coffeescript
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
```

The newsfeed object
-------------------

At the heart of an application lives the use case object. In this example it's the newsfeed object. 

```coffeescript
class Newsfeed
  constructor: ->
    @stories = []
    
  start: => 

  addStory: (story) =>
    @stories.push(story)
```

The webSocketsAdapter object
----------------------------

This object simulates a typical Web Sockets usage. It just generates some random data, that are "pushed" into the newsfeed.

```coffeescript
class FakeWebSocketsAdapter
  constructor: ->

  start: =>
    intervalId = setInterval((=> @newStoryPushed(@createStory())), 3000)
    setTimeout(( => clearInterval(intervalId)), 20000)

  createStory: () =>
    name = ["Andrzej", "Yashke", "Rupert", "Pawel"].sample()
    author = new User(name)
    post = new Post(author, "some fake data here at #{new Date().toLocaleTimeString()} which I disagree with.\n")
    story = new Story(post)
    return story

  newStoryPushed: (story) =>
```

The adapter is connected with the rest of the application via some glue code:

```coffeescript
After(@webSocketsAdapter, "newStoryPushed", (story) => @newsfeed.addStory(story))
```

The gui object
--------------

The idea of hexagonal architecture is based on the idea of adapters that are plugged into the domain. One of typical adapters is the gui object. 
