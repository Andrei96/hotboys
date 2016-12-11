$(document).ready(function () {
    var prev = null;
    var el = null;

    $("ul.info-list> li a").click(function() {
        prev = el;
        el = $(this).attr("data-el");
        if(prev == null || el != prev) {
            $("section."+prev).css("display", "none");
            $("section."+el).css("display", "block");
        } else if(prev == null || el == prev) {

            if($("section."+el).hasClass(el)) {
                $("section."+el).css("display", "block");

            }

        }
    });
});
