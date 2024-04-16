$(document).ready(function() {
    // Toggle tour information when clicking on "View Tour Reports"
    $('.tour-report').click(function() {
        $('.tour-info').toggleClass('show');
        $('h2').toggleClass('show');
    });
});
