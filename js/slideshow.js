let i = 0;
let images = [];
let time = 8000;

images[0] = "./images/slideshow/slide-1.png";
images[1] = "./images/slideshow/slide-2.png";

function changeImg() {
    document.getElementById("slide").setAttribute("src", images[i]);

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
