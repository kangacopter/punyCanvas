var canvas = [];
// Use an array to store the pixels so they can be output
var currentColor = "";

$(document).ready(function() {
  for (var x = 0; x < 16; x++) {
    for (var y = 0; y < 16; y++) {
      var $pixel = $("<div class='pixel'></div>");
      $("#pixelCanvas").append($pixel);
    }
  }

  // Click on each pixel to change color
  $(".pixel").click(function() {
    $(this).css("background-color", "red");
  });
});

//  Will need to figure this out so a set number of pixels w*h
// Every image will be the same size
// Will need an array to store all of the pixels!!!
