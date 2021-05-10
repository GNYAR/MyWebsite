var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(".nav-link").click(() => {
    $("#navbarToggler").removeClass("show");
});

$(".litem").hover(function() {
    $(this).find(".point").toggleClass("point-h");
    $(this).find(".line").toggleClass("line-h");
});
let i = true;
$("#me").click(function() {
    let href = (location.href == "" ? "img/" : "../img/" );
    if(i) {
        $(this).attr("src", href + "formal.jpg");
        i = false;
    } else {
        $(this).attr("src", href + "life.jpg");
        i = true;
    }
});