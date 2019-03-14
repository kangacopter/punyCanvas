let canvas = [];
// Use an array to store the pixels so they can be output
let currentColor = "";
let dragging = false;

// Maybe do something with clicking + drag (so you don't have to click each square)
// Clear pixel option (maybe eraser in palette)
// Clear canvas

$(document).ready(function() {
  for (var x = 0; x < 16; x++) {
    for (var y = 0; y < 16; y++) {
      let $pixel = $("<div class='pixel'></div>");
      $("#pixelCanvas").append($pixel);
    }
  }

  // Click on each pixel to change color. Set dragging function so user can
  // hold the mouse down and drag over elements to change them.
  $(".pixel").click(function() {
    $(this).removeClass("red green blue yellow purple orange black white");
    // Check this out ^^ must only remove the color but not the actual color name class.
    $(this).addClass(currentColor);
  });

  // Determines if the mouse is clicked for dragging
  $(document).mousedown(function() {
    dragging = true;
  });
  $(document).mouseup(function() {
    dragging = false;
  });

  // Hovering over pixels to paint if mouse is clicked
  $(".pixel").mouseover(function() {
    if (dragging) {
      $(this).removeClass("red green blue yellow purple orange black white");
      $(this).addClass(currentColor);
    }
  });
}); // End of document ready

// Function to get color from each palette
$.fn.getColor = function() {
  let color = $(this)
    .attr("class")
    .split(" ")
    .filter(function(x) {
      return !x.match("color");
    });
  return color;
};

// Set currentColor of palette clicked, which is a CLASS NAME to apply to the pixel
// Listen for click on each color, set current color variable to that color
$(".color").click(function() {
  console.log(this);
  switch ($(this).attr("id")) {
    case "color1":
      currentColor = $(this).getColor();
      break;
    case "color2":
      currentColor = $(this).getColor();
      break;
    case "color3":
      currentColor = $(this).getColor();
      break;
    case "color4":
      currentColor = $(this).getColor();
      break;
    case "color5":
      currentColor = $(this).getColor();
      break;
    case "color6":
      currentColor = $(this).getColor();
      break;
    case "color7":
      currentColor = $(this).getColor();
      break;
    case "color8":
      currentColor = $(this).getColor();
      break;
    case "eraser":
      currentColor = $(this).getColor();
      break;
  }
});

//  Will need to figure this out so a set number of pixels w*h
// Every image will be the same size
// Will need an array to store all of the pixels!!!
