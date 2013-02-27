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

