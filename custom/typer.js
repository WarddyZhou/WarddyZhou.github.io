
window.onload = function () {
    var $typeContent = $("[class='φee']");
    $typeContent.append('<span id="typer"></span>');
    //, "Make time for civilization"," for civilization won't make time.", "Keep on sailing."
    var options = {
        strings: ["There's story to be told.", "Make time for civilization"," for civilization won't make time.", "Keep on sailing."],
        typeSpeed: 50,
        contentType: 'html',
        loop: true,
        showCursor: false,
        backSpeed: 25,
        smartBackspace: true,
        backDelay: 1000
    };
    var typed = new Typed("#typer", options);
}