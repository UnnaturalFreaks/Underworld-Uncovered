$(document).ready(function () {
    var colorIndex = 1;

    $('input').on('change', function () {
        var currentIndex = parseInt($('input[name="magazines"]:checked').attr('id').split('-')[1]);

        // Increment or decrement the color index based on the direction
        if (currentIndex === colorIndex + 1 || (currentIndex === 1 && colorIndex === 3)) {
            // Move forward
            colorIndex = (colorIndex % 3) + 1;
        } else if (currentIndex === colorIndex - 1 || (currentIndex === 3 && colorIndex === 1)) {
            // Move backward
            colorIndex = (colorIndex - 1 === 0) ? 3 : colorIndex - 1;
        }

        // Toggle the 'color-1', 'color-2', and 'color-3' classes
        $('.carousel').removeClass('color-1 color-2 color-3').addClass('color-' + colorIndex);
    });
});





// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("stickyHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}