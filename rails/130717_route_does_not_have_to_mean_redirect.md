# Route means a lot of things
##I learned something about Sinatra today.
A route has three ingredients:
1. an HTTP method
2. a URL matching pattern
3. a code block

```ruby
post '/game/:guess' do
  game.guess(params[:guess])
end
private
  def game
    @game ||= Mastermind::Game.new_with_code(params[:code])
  end
```
Whether that code block renders a page, or in this case, creates a Mastermind::Game object is entirely up to the content of the block.

The block ships the return value back to the browser that invoked it. What the browser does with it is the browser's business.

##I learned something about Ajax today.
An ajax call is built up from a few minimum parameters: a url, the HTTP method, the dataType expected, and a callback function that handles the return. You can include data from the user in the form of a data hash:

```javascript
var the_url = "http://" + window.location.host + "/game/" + guess_string;
  var mark_string = $.ajax({
    type: "POST",
    url: the_url,
    accepts: "application/json",
    dataType: "json",
    data: { 'code' : secret_code },
    complete: function(data){
      output_mark = data['responseText'];
      process_output(secret_code, guess_string, output_mark);
    }
  });
```
In this code snippet I am doing a bunch of things. Earlier in my javascript I have generated the secret code. When I call 'http://localhost:9393/game/' with a guess, a few things happen:
1. I create a Mastermind::Game object with the provided secret code (params[:code])
2. I compare the submitted guess to the secret code (params[:guess])
3. I return a json of the output of this comparison (in this case, it is a string of +/- characters indicating exact number matches(+) or matched numbers in the wrong position(-))
4. In the callback function I am retrieving the data from the json object and passing it on for further processing

##I learned something about routes today.
When my javascript called the route, it wasn't reloading my page, it was retrieving data! I had conflated routes with navigation in my imagination, and forgot that a route is just a request for information. Just because that information is usually rendered as an html page doesn't mean that one equates the other. Which leads me to the penultimate point...

##I learned something about curl today.
ANYTHING can make an HTTP request. Ok, maybe that is a slight overstatement.

Browsers interpret the information retrieved using HTTP requests, but they are far from the only category of software that can. Turns out, the command-line functions just as well:
```bash
curl -X POST -H "Accept: application/json" -d "code=12345" js-games.herokuapp.com/game/12345
```
This command will return the same string I am retrieving with $.ajax in javascript. Sure it is a fairly plain result - it doesn't even include a new line character, for pity's sake - but it does the job of making an HTTP request to a route and receiving the result of the route's block processing.

##I learned something about myself today.
I didn't even realize I was misunderstanding HTTP! It was one of those concepts I had already checked off my mental list of technologies to cover on my quest to become a web developer. This breakthrough has reminded me that reviewing the fundamentals in the context of learning new technologies will bring a deeper understanding of everything.

Awesome