var loopLength = 50000;

//populate and array to loop
var array = [];

for(var i = 0; i<loopLength; i++){
  array[i] = "item" + i;
}

function forLoop() {
  for (var i = 0; i<array.length; i++){
    item = array[i];
  }
}

$(function() {
  runBenchmark("for-loop", forLoop);
});