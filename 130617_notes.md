## QWANDRY

This is a gem that allows you to inspect source code from gems you have
installed. Use it on the command line

    qw <name_of_gem> -e sublime

The -e allows you to specify the editor, and it will open from the root
folder of the gem.


## EXERCISM

A ruby gem written by Chuck to allow users to retrieve and submit warmups

// this is how you create a class in javascript
var PCS = (function() {
    return {"chunk" : "bacon"};
})();

PCS.chunk

// resolves namespace conflicts
(function($){

})(jQuery);

-----------------------
in javascript -- subsrings

"Hamburgers".substring(3) => will return "burgers"

-----------------------

prompt("this is a dialog");
confirm("this is an OK dialog");

------------------------------
if (0.33 < computerChoice <= 0.66){
  // this is a perfectly acceptable double comparison
}
---------------------------------

function doStuff(){...}
// reference function
// without the parens the fxn is identified and can be called later
window.onload = doStuff;
// calling function
// with the parens the fxn is called immediately
window.onload = doStuff();

-------------------------
$(document).ready(function() {
  ...
})

// is the exact same thing as
$(function() {
  ...
})

---------------------------
.bind() method allows us to specify
any DOM event and to attach a behaviour
to it

$(function() {
  $('button').bind('click', function() {
      $('body').addClass('large');
  });
});

------------------------------

keyword this refers to the DOM element to
which the behaviour was attached

returns a DOM element, not a jQuery object
----------------------------
.removeClass() removes all classes

-----------------------------
jQuery always triggers event handlers in the
order in which they were registered

------------------------------
shorthand event handlers:

.click(function() {...})

when these shorthand handlers are called with no
arguments, the behaviour is to trigger the action
rather than bind it

----------------------------
.toggle()
- takes two args (functions)
  - first click triggers the first
  - second click triggers the second

--------------------------------
.hover()
- takes two args (functions)
  - mouse entering the element triggers the first
  - mouse leaving the element triggers the second

  $(function() {
    $('#switcher h3').hover(function() {

      $(this).addClass('hover');
      }, function() {
        $(this).removeClass('hover');
    });
  });

  ---------------------------------
event capturing: events are passed down the DOM
  to whomever can handle them
event bubbling: events are passed up the DOM
  to whomever can handle them

** assume that the most specific element will
get the first opportunity to respond to any event

------------------------------------
use the event object in our handlers:

$(function() {
  $('switcher').click(function(event) {
  ... event 1, ... event 2
  });
});

-------------------------------------
use
event.target()
to check what element is under the mouse cursor
when the click occurrs

ie. $(event.target).is('button')
or $(event.target).hasClass('selected')
---------------------------------
call
event.stopPropagation() to prevent any other
DOM element from responding to the event

-----------------------------------
event namespacing

add parameter to event to subcategorize the event
$('#switcher').bind('click.collapse', ....)

------------------------------------
.trigger()

simulates a click

-----------------------------------
KEYBOARD EVENTS
2 types:
1- react to keyboard directly
    ie. keyup, keydown
    tells you what key was pressed
    (inspect the event object using
      .keyCode)
2- react to text input
    ie. keypress
    tells you what character ended up on the screen
---------------------------



---------------------------------
