// Init main variables
let currentColor = "";
let dragging = false;

// Set color arrays
let blue = [60, 145, 230];
let green = [159, 211, 86];
let purple = [91, 80, 122];
let orange = [244, 92, 9];
let red = [214, 40, 40];
let yellow = [91, 202, 58];
let white = [255, 255, 255];
let black = [255, 255, 255];

// Initialize the canvas of pixels
$(document).ready(function() {
  for (let x = 0; x < 16; x++) {
    let row = '<div class="pixelRow">';
    for (let y = 0; y < 16; y++) {
      row += "<div class='pixel none'></div>";
    }
    row += "</div>";
    $("#pixelCanvas").append(row);
  }

  // Click on each pixel to change color. Set dragging function so user can
  // hold the mouse down and drag over elements to change them.
  $(".pixel").on("click", function() {
    $(this).removeClass("red green blue yellow purple orange black white none");
    $(this).addClass(currentColor);
  });

  // Determines if the mouse is clicked for dragging
  $(document).on("mousedown", function() {
    dragging = true;
  });
  $(document).on("mouseup", function() {
    dragging = false;
  });

  // Flawed fix for dragging issue
  $(document).on("dragend", function() {
    dragging = false;
  });
  $(document).on("dragstart", function() {
    dragging = false;
  });

  // Hovering over pixels to paint if mouse is clicked
  $(".pixel").on("mouseover", function() {
    if (dragging) {
      $(this).removeClass(
        "red green blue yellow purple orange black white none"
      );
      $(this).addClass(currentColor);
    }
  });

  // Button for image output
  $("#output").on("click", function() {
    let pixels = [];
    $(".pixel").each(function(i) {
      let tmp = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return !x.match("pixel");
        });
      pixels.push(tmp);
    });
    console.log(pixels);
  });

  // Works, mostly. Now need to deal with adding the color arrays based on what color class is there

  // Also the save button issue
}); // End of document ready

// Function to get color from each palette
$.fn.getColor = function() {
  let color = $(this)
    .attr("class")
    .split(" ")
    .filter(function(x) {
      return !x.match("color");
    });
  currentColor = color;
  // Set the current color indicator
  $("#current-color").removeClass(
    "red green blue yellow purple orange black white none"
  );
  $("#current-color").addClass(currentColor);
  if (color !== "none") {
    $("#current-color-line").css({ display: "none" });
  }
};

// Set currentColor of palette clicked, which is a CLASS NAME to apply to the pixel
// Listen for click on each color, set current color variable to that color
$(".color").on("click", function() {
  console.log(this);
  switch ($(this).attr("id")) {
    case "color1":
    case "color2":
    case "color3":
    case "color4":
    case "color5":
    case "color6":
    case "color7":
    case "color8":
      $(this).getColor();
      break;
    case "eraser":
      $(this).getColor();
      $("#current-color-line").css({ display: "block" });
      break;
  }
});

// Clear the canvas
$("#clearCanvas").on("click", function() {
  $(".pixel").removeClass("red green blue yellow purple orange black white");
  $(".pixel").addClass("none");
});

// Creates image output

// for (var x = 0; x < 16; x++) {
//   let row = '<div class="pixelRow">';
//   for (var y = 0; y < 16; y++) {
//     row += "<div class='pixel'></div>";
//   }
//   row += "</div>";
//   $("#pixelCanvas").append(row);
// }

// Go through each row, and based on the class, add the pixel's color class to the array in string form
// Or maybe based on that class, ADD THE CORRECT RGB
// Maybe I can have set arrays for these values, then insert the arrays into the array
// in order based on what the class color is... OHHHHH yes

// Get color, match to the array (switch), add that array to pixels array
