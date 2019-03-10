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
    // console.log($(this).css("background-color"))

    $(this).css("background-color", "red");
  });
});

// Set currentColor, which is a CLASS NAME to apply to the pixel
// Listen for click on each color, set current color variable to that color
$(".color").click(function() {
  console.log(".color clicked");
  console.log(this);
  switch ($(this).attr("id")) {
    case "color1":
      console.log("color1 clicked");
      currentColor = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          console.log(x + "EX");
          return x.match("red"); // BUT!! you want it to be NOT that color
        });

      // $(this).attr("class").split(' ').each(
      //   function() {
      //     console.log(this + "ldkafjds")
      //   })
      // May have to use a regex to kill the "color" class and isolate
      // Or maybe an array and pop color out??
      console.log(currentColor);
      break;
    case "color2":
      console.log("color2 clicked");
      break;
    case "color3":
      console.log("color3 clicked");
      break;
    case "color4":
      console.log("color4 clicked");
      break;
    case "color5":
      console.log("color5 clicked");
      break;
    case "color6":
      console.log("color6 clicked");
      break;
    case "color7":
      console.log("color7 clicked");
      break;
    case "color8":
      console.log("color8 clicked");
      break;
  }
});

//  Will need to figure this out so a set number of pixels w*h
// Every image will be the same size
// Will need an array to store all of the pixels!!!

// Maybe don't use .css and set this with classes
