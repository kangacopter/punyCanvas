let canvas = [];
// Use an array to store the pixels so they can be output
let currentColor = "";
let dragging = false;

// Initialize the canvas of pixels
$(document).ready(function() {
  for (var x = 0; x < 16; x++) {
    let row = '<div class="pixelRow">';
    for (var y = 0; y < 16; y++) {
      row += "<div class='pixel'></div>";
    }
    row += "</div>";
    $("#pixelCanvas").append(row);
  }

  // Click on each pixel to change color. Set dragging function so user can
  // hold the mouse down and drag over elements to change them.
  $(".pixel").on("click", function() {
    $(this).removeClass("red green blue yellow purple orange black white");
    $(this).addClass(currentColor);
  });

  // Determines if the mouse is clicked for dragging
  $(document).on("mousedown", function() {
    dragging = true;
  });
  $(document).on("mouseup", function() {
    dragging = false;
  });

  // Hovering over pixels to paint if mouse is clicked
  $(".pixel").on("mouseover", function() {
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
  currentColor = color;
  // Set the current color indicator
  $("#current-color").removeClass(
    "red green blue yellow purple orange black white none"
  );
  $("#current-color").addClass(currentColor);
  if (color !== "none") {
    $("#current-color-line").css({ display: "none" });
  } else {
  }
};

// Set currentColor of palette clicked, which is a CLASS NAME to apply to the pixel
// Listen for click on each color, set current color variable to that color
$(".color").on("click", function() {
  console.log(this);
  switch ($(this).attr("id")) {
    case "color1":
      $(this).getColor();
      break;
    case "color2":
      $(this).getColor();
      break;
    case "color3":
      $(this).getColor();
      break;
    case "color4":
      $(this).getColor();
      break;
    case "color5":
      $(this).getColor();
      break;
    case "color6":
      $(this).getColor();
      break;
    case "color7":
      $(this).getColor();
      break;
    case "color8":
      $(this).getColor();
      break;
    case "eraser":
      $(this).getColor();
      $("#current-color-line").css({ display: "block" });
      break;
  }

  // Clear the canvas
  $("#clearCanvas").on("click", function() {
    $(".pixel").removeClass(
      "red green blue yellow purple orange black white none"
    );
  });
});
