wow.. jquery

how to add an element to a page:

$(function() {
  ('<p>this is new</p>').insertAfter('.square');
});


how to do resilient event binding
$(function() {
  ('body').on('click', '.square', function(){
    $(this).toggleClass('blue');
  });
});


-----------------------------

var a_jquery_object = $("<div class='square'></div>");

var a_string = "<div class='square'></div>";

if you want to reuse the string to make a new
element in the DOM, save it as a STRING
not as a jQuery object!!!