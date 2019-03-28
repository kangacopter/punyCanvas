// Init main variables
let currentColor = "";
let dragging = false;
let artName = "art name";

// Set color arrays (let color = [r, g, b])
let blue = [60, 145, 230];
let green = [159, 211, 86];
let purple = [91, 80, 122];
let orange = [244, 92, 9];
let red = [214, 40, 40];
let yellow = [255, 202, 58];
let white = [255, 255, 255];
let black = [0, 0, 0];

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

  // Prevents an issue that occurs when user clicks in between pixels
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

  // Button for image output, loads pixel array
  $("#output").on("click", function() {
    let pixels = [];
    $(".pixel").each(function(i) {
      let tmp = $(this)
        .attr("class")
        .split(" ")
        .filter(function(x) {
          return !x.match("pixel");
        });
      switch (tmp.toString()) {
        case "red":
          pixels.push(red);
          break;
        case "blue":
          pixels.push(blue);
          break;
        case "green":
          pixels.push(green);
          break;
        case "yellow":
          pixels.push(yellow);
          break;
        case "orange":
          pixels.push(orange);
          break;
        case "white" || "none":
          pixels.push(white);
          break;
        case "black":
          pixels.push(black);
          break;
        case "purple":
          pixels.push(purple);
          break;
        default:
          pixels.push(white);
          break;
      }
    });
    getImage(pixels);
  });

  // Creates image output using canvas
  // Thanks to this jsfiddle: http://jsfiddle.net/m1erickson/956kC/
  // Check this out, also: https://www.w3schools.com/tags/canvas_imagedata_data.asp
  function getImage(pixels) {
    $(".output-container").empty();
    let imgOutput = document.createElement("canvas");
    let ctx = imgOutput.getContext("2d");

    imgOutput.width = 16;
    imgOutput.height = 16;

    let imgData = ctx.createImageData(16, 16);

    let n = 0;
    for (let z = 0; z < imgData.data.length; z += 4) {
      imgData.data[z + 0] = pixels[n][0];
      imgData.data[z + 1] = pixels[n][1];
      imgData.data[z + 2] = pixels[n][2];
      imgData.data[z + 3] = 255; // This one is for opacity?
      n++;
    }

    ctx.putImageData(imgData, 0, 0);

    let outputImage = new Image();
    outputImage.src = imgOutput.toDataURL();
    imgDownload = imgOutput.toDataURL(); // This is setting the global variable for downloading
    $(".output-container").append(outputImage);
  }

  // Save the output file, warn user of potential saving issues
  //Thanks to this jsfiddle: http://jsfiddle.net/Ljrf7uxm/
  $("#save-button").on("click", function() {
    // Detect for mobile, which cannot use this save button.
    // Thanks to https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      alert("Mobile device detected... please save the image below instead.");
    } else if (typeof imgDownload === "undefined") {
      alert("Please doodle something and output before downloading!");
    } else {
      $(this).attr("href", imgDownload);
      $(this).attr("download", artName + ".png");
    }
    // This is based on the user's name input. In the future, it would be wise to ensure the user does not name
    // the canvas with certain characters. For now, it appears that this is not an issue.
  });

  // Art name changing functions
  $.fn.editName = function() {
    let name = $(".art-name-text").html();
    $("#name-edit").css("display", "flex");
    $("#name-set").css("display", "none");
    // $("#name-input").attr("placeholder", name);
    // Option to have the name as a placeholder.. this introduced a strange side effect though.
  };

  $.fn.setName = function() {
    artName = $("#name-input").val();
    if (!artName) {
      artName = "art name";
    }
    $("#name-edit").css("display", "none");
    $("#name-set").css("display", "flex");
    $(".art-name-text").text(artName);
    return artName;
  };

  // Upon clicking the name or the edit icon, allow name editing
  $(".art-name").on("click", function() {
    $.fn.editName();
  });

  $(".fa-edit").on("click", function() {
    $.fn.editName();
  });

  // Upon clicking check button or hitting enter, submit the name
  $(".fa-check").on("click", function() {
    $.fn.setName();
  });

  $("#name-input").on("keypress", function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      $.fn.setName();
    }
  });

  // Top secret easter egg
  console.log("i<3u, jquery. rip?");
}); // End of document ready

// Function to get color from each color in palette
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

// Set currentColor of palette clicked, which is a class name to apply to the pixel.
$(".color").on("click", function() {
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
