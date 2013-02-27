class Gui
  constructor: ->
  

  createElementFor: (templateId, data) =>
    source = $(templateId).html()
    template = Handlebars.compile(source)
    html = template(data)
    element = $(html)

  showFeed: () =>
    element = @createElementFor("#feed-template")
    $(".main").append(element)

  appendStory: (story) =>
    element = @createElementFor("#story-template", @storyStructure(story))
    $(".feed").prepend(element)

  storyStructure: (story) =>
    {authorName : story.post.author.name, postContent : story.post.content}
  