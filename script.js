$(document).ready(function() {

    if ($(window).width() < 576) {
        $("#hamburger-icon, .nav-link").click(function(){
            let navBar = $(".nav-bar")
            let hidden = ("hidden-xs")

            if (navBar.hasClass(hidden)) {
                navBar.show(250);
            } else {
                navBar.hide(250);
            }
            navBar.toggleClass(hidden)
        });
    }
});