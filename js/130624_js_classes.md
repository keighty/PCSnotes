# javascript Classes

```indexOf``` always returns a number so there’s no need to use !==. If you
 want to save bytes, you could use ~'foo'.indexOf('oo') which returns a
 truthy value if the substring is found, and a falsy value (0) if it
 isn’t

#Defining a class in javascript
```javascript
(function() {
  var Robot;

  window.Robot = Robot = (function() {
    function Robot() {
      this.name = this.nameGen();
    }

    Robot.prototype.nameGen = function() {
      var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var possibleNumbers = "0123456789";
      var robotName = "";
      for(var i=0; i < 2; i++)
        robotName += possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));

      robotName += Math.floor(Math.random()*90) + 10;

      return robotName;
    };

    Robot.prototype.reset = function() {
      this.name = this.nameGen();
    };

    return Robot;
  })();

}).call(this);
```