// Navbar initialization Materialize
$(".button-collapse").sideNav();

// Parallax initialization Materialize
$(document).ready(function () {
    $('.parallax').parallax();
});

// Collapsible initialization Materialize
$(document).ready(function () {
    $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

// Carousel initialization Materialize
$(document).ready(function () {
    $('#sliderOne').slider({height: 700});
    $('#sliderTwo').slider({height: 450});
});

// Alert for the submit button into the form (page contact)
function messageSent(){
    document.getElementById(messageSentForm);
    alert ("Message sent, Thanks !");
}