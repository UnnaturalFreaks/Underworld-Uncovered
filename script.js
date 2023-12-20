///
///     changes the background colour
///


$(document).ready(function () {
    var colourIndex = 1;

    $('input').on('change', function () {
        var currentIndex = parseInt($('input[name="magazines"]:checked').attr('id').split('-')[1]);

        // Increment or decrement the color index based on the direction
        if (currentIndex === colourIndex + 1 || (currentIndex === 1 && colourIndex === 3)) {
            // Move forward
            colourIndex = (colourIndex % 3) + 1;
        } else if (currentIndex === colourIndex - 1 || (currentIndex === 3 && colourIndex === 1)) {
            // Move backward
            colourIndex = (colourIndex - 1 === 0) ? 3 : colourIndex - 1;
        }

        // Toggle the 'colour-1', 'colour-2', and 'colour-3' classes
        $('.carousel').removeClass('colour-1 colour-2 colour-3').addClass('colour-' + colourIndex);
    });
});








///
///     Code to change the height of the correct info-space,sets the selected box's height to auto, and the others back to intial 0;
///

function changeHeight(infoSpaceId) 
{
  var infoSpaces = document.getElementsByClassName('info-space');

  for (var i = 0; i < infoSpaces.length; i++) {
    if (infoSpaces[i].id === infoSpaceId) {
      infoSpaces[i].style.height = 'auto'; // Set the height to auto
    } else {
      infoSpaces[i].style.height = ''; // Reset the height
    }
  }
}


// Call changeHeight for the initially checked radio button
document.addEventListener('DOMContentLoaded', function ()
{
    changeHeight('mag-info-55');
});






///
///     When the user scrolls, call the function, and if scrolled past, add sticky class to header, remove otherwise.
///



window.onscroll = function () { scrollFunction() };
var header = document.getElementById("stickyHeader");
var sticky = header.offsetTop; //offset position
function scrollFunction() {
    if (window.pageYOffset > sticky)
    {
        header.classList.add("sticky");
    }
    else
    {
        header.classList.remove("sticky");
    }
}