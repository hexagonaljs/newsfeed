var App,Glue,Gui,UseCase,__hasProp={}.hasOwnProperty,__bind=function(a,b){return function(){return a.apply(b,arguments)}};_.defaults(this,{Before:function(a,b,c){return YouAreDaBomb(a,b).before(c)},BeforeAnyCallback:function(a,b,c){return YouAreDaBomb(a,b).beforeAnyCallback(c)},After:function(a,b,c){return YouAreDaBomb(a,b).after(c)},Around:function(a,b,c){return YouAreDaBomb(a,b).around(c)},AfterAll:function(a,b,c){var d,e,f,g;g=[];for(e=0,f=b.length;e<f;e++)d=b[e],g.push(After(a,d,c));return g},LogAll:function(a){var b,c,d;d=[];for(b in a){if(!__hasProp.call(a,b))continue;c=a[b],_.isFunction(c)?d.push(function(b){return Before(a,b,function(){return console.log("calling: "+b)})}(b)):d.push(void 0)}return d},AutoBind:function(a,b){var c,d,e;e=[];for(c in a)d=a[c],_.isFunction(d)?e.push(function(c){if(c.endsWith("Clicked")&&b[c.remove("Clicked")])return After(a,c,function(a){return b[c.remove("Clicked")](a)})}(c)):e.push(void 0);return e}}),UseCase=function(){function a(){this.start=__bind(this.start,this)}return a.prototype.start=function(){},a}(),Gui=function(){function a(){this.hideGreetMessage=__bind(this.hideGreetMessage,this),this.restartClicked=__bind(this.restartClicked,this),this.showGreetMessage=__bind(this.showGreetMessage,this),this.hideAskForName=__bind(this.hideAskForName,this),this.confirmNameButtonClicked=__bind(this.confirmNameButtonClicked,this),this.showAskForName=__bind(this.showAskForName,this),this.showFeed=__bind(this.showFeed,this),this.createElementFor=__bind(this.createElementFor,this)}return a.prototype.createElementFor=function(a,b){var c,d,e,f;return e=$(a).html(),f=Handlebars.compile(e),d=f(b),c=$(d)},a.prototype.showFeed=function(a){var b;return b=this.createElementFor("#feed-template"),$(".main").append(b)},a.prototype.showAskForName=function(){var a,b=this;return a=$("#confirm-name-button"),a.click(function(){return b.confirmNameButtonClicked($("#name-input").val())}),$("#name-input").focus()},a.prototype.confirmNameButtonClicked=function(a){},a.prototype.hideAskForName=function(){return $(".ask-for-name").remove()},a.prototype.showGreetMessage=function(a){var b,c=this;return b=this.createElementFor("#greet-message-template",{name:a}),$(".main").append(b),$("#restart-link").click(function(){return c.restartClicked()})},a.prototype.restartClicked=function(){},a.prototype.hideGreetMessage=function(){return $(".greet-message").remove()},a}(),Glue=function(){function a(a,b){var c=this;this.useCase=a,this.gui=b,After(this.useCase,"start",function(){return c.gui.showFeed(c.useCase.feed)}),LogAll(this.useCase),LogAll(this.gui)}return a}(),App=function(){function a(){var a,b,c;c=new UseCase,b=new Gui,a=new Glue(c,b),c.start(),window.useCase=c}return a}(),new App