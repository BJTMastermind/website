window.addEventListener("scroll", function() {
    var scrollPos = window.scrollY;
    document.getElementById("scrolldata").setAttribute("value", scrollPos);
});