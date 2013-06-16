// change the background color of the target
$('#target').css('background', 'blue');

// change the text of the span inside the target
$('#target span').text("changed");

// clone the span inside the target div and add it below the first
$('#target span').clone().insertAfter('#target span');

// change the background color of the second .target
$('.target').eq(1).css('background', 'blue');

// disable the button
$('.target button').attr('disabled', 'disabled');

// uncheck the checkboxes
$('.target input[type="checkbox"]').removeAttr('checked');

// move a child from parent1 to parent2
$('#child').appendTo('#parent2');

// make a textbox readonly
$('#target input').attr('readonly', 'readonly');
