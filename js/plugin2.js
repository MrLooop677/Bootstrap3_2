$(function() {
    // scroll navbar
    $(window).on("scroll", function() {
            if ($(this).scrollTop() >= $(".upper-bar").height()) {
                if ($(".navbar").hasClass("scrolled") && $(".navbar").hasClass("navbar-fixed-top")) {
                    return 0;
                } else {
                    $(".navbar").addClass("scrolled navbar-fixed-top")
                }
            } else {
                $(".navbar").removeClass("scrolled navbar-fixed-top")
            }
        })
        // end scroll navbar

    // taps section
    $(".table-switch li").on("click", function() {
        $(this).addClass("select").siblings().removeClass("select")
        $(".taps-content div").hide();
        $('.' + $(this).data("class")).show()

    })
})