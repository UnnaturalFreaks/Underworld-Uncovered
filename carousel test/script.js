$(document).ready(function() {
        var colorIndex = 1;

        $('input').on('change', function() {
            // Toggle the 'color-1', 'color-2', and 'color-3' classes
            $('carousel').removeClass('color-' + colorIndex);

            // Cycle to the next color
            colorIndex = (colorIndex % 3) + 1;

            $('carousel').addClass('color-' + colorIndex);
        });
    });