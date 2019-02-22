var canvas = [];

 $(document).ready(function() {
  for (var x = 1; x <= 32; x++) {
    var $pixel = $("<div class='pixel'></div>");
    $("#pixelCanvas").append($pixel);
  }
 });

//  Will need to figure this out so a set number of pixels w*h
// Every image will be the same size
// Will need an array to store all of the pixels!!!
