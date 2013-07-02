##JSON
* JavaScript object notation
* avoid hand editing JSON files
* all object keys and string values must be in ""
* retrieve data using the global jQuery object $.getJSON()
{% highlight javascript %}
$(function() {
  $('a').on('click', function() {
    $.getJSON('filename.json', function(data) {
      $.each(data, function(entryIndex, entry){

      });
    });
    return false;
  });
})
{% endhighlight %}
$.getJSON takes two arguments
1. the filename of the data to load
2. a callback function that takes the loaded data as a parameter and can traverse the JSON structure as necessary

* $.each() is another global jQuery function:
  * as opposed to .each() which traverses the DOM, $.each takes an array and a callback function
  * each time through the loop, the current iteration index and the current item in the array are passed into the function

---

###Exercise for the day: ajax? json? getJSON? who knows?
You can't run an ajax call locally! It must be done from a server...
{% highlight javascript %}
$ rails new ajax-test
$ cd ajax-test
$ rails s
{% endhighlight %}
... so, rails is the easiest server to start!

We practiced retrieving JSON from twitter and parsing the content into
a browser.
{% highlight ruby %}
$cd public
$touch index.html
$touch app.js
$touch app.css
{% endhighlight %}
Make a basic bootstrap in index.html

Add the following code to app.js
{% highlight ruby %}
$(document).ready(function(){
  $.getJSON(
    'url',
    function(data){
    // Parse the returned JSON
    var items = [];
      $.each(data, function(key, val){
        items.push('<tr><td id="' + key + '">' +
        val["created_at"] + '</td><td>' + val["text"] + '</td></tr>');
      });

    // Join parsed tweets into table and append it to container.
    $('<table/>', {
      'class': 'my-new-list',
      html: items.join('')
    }).appendTo('.container');
  });
});
{% endhighlight %}


---
## Definitions
* a CALLBACK function is a function that is executed after the current effect is 100% finished
** typical syntax: $(selector).hide(speed,callback);

---

Chuck recommended using email@example.com when putting in test data

It is designed for testing and demo purposes

---
ajax cross-domain workarounds
* server side
* iframes
* JSON-P
* Reverse Proxy

#What is a cross-domain request, anyway?
Web browsers have a security policy called the same-site origin policy,
 which blocks Web pages from accessing data from another domain. Web
 sites often work around this policy by having their server request
 content from another site's server in the backend, thus circumventing
 the check within the browser.

Cross-site HTTP requests initiated from within scripts have been
 subject to well-known restrictions, for well-understood security
 reasons.  For example HTTP Requests made using the XMLHttpRequest
 object were subject to the same-origin policy.  In particular, this
 meant that a web application using XMLHttpRequest could only make HTTP
 requests to the domain it was loaded from, and not to other domains.
 Developers expressed the desire to safely evolve capabilities such
 as XMLHttpRequest to make cross-site requests, for better, safer
 mash-ups within web applications.

The Web Applications Working Group within the W3C has recommended the
 new Cross-Origin Resource Sharing (CORS) mechanism, which provides a
 way for web servers to support cross-site access controls, which
 enable secure cross-site data transfers.  Of particular note is that
 this specification is used within an API container such as
 XMLHttpRequest as a mitigation mechanism, allowing the crossing of the
 same-domain restriction in modern browsers.

----
how to load a file from a server using jquery
$.load('snippet.html');