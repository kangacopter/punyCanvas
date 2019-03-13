let canvas = [];
// Use an array to store the pixels so they can be output
let currentColor = "";

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

  // Click on each pixel to change color
  $(".pixel").click(function() {
    $(this).removeClass("red green blue yellow purple orange black white");
    $(this).addClass(currentColor);
  });
});

// Set currentColor, which is a CLASS NAME to apply to the pixel
// Listen for click on each color, set current color variable to that color
$(".color").click(function() {
  console.log(this);
  switch ($(this).attr("id")) {
    case "color1":
      currentColor = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return !x.match("color");
        });
      console.log(currentColor + " CURRENT COLOR");

      break;
    case "color2":
      currentColor = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return x.match("green");
        });
      console.log(currentColor + " CURRENT COLOR");

      break;
    case "color3":
      currentColor = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return x.match("blue");
        });
      console.log(currentColor + " CURRENT COLOR");

      break;
    case "color4":
      currentColor = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return x.match("yellow");
        });
      console.log(currentColor + " CURRENT COLOR");

      break;
    case "color5":
      currentColor = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return x.match("purple");
        });
      console.log(currentColor + " CURRENT COLOR");

      break;
    case "color6":
      currentColor = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return x.match("orange");
        });
      console.log(currentColor + " CURRENT COLOR");

      break;
    case "color7":
      currentColor = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return x.match("black"); // BUT!! you want it to be NOT that color(???)
        });
      console.log(currentColor + " CURRENT COLOR");

      break;
    case "color8":
      currentColor = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return x.match("white");
        });
      console.log(currentColor + " CURRENT COLOR");

      break;
  }
});

//  Will need to figure this out so a set number of pixels w*h
// Every image will be the same size
// Will need an array to store all of the pixels!!!

// Maybe don't use .css and set this with classes
