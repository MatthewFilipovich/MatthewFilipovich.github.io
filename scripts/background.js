let images = ["images/ometepe.jpg", "images/space.jpg"];
let imageLocations = ["Nicaragua", "space"];
var i = Math.floor(Math.random() * images.length);
updateImage()

function leftImage() {
    if (i == 0) {
        i = images.length - 1
    } else {
        i -= 1
    }
    updateImage()
}

function rightImage() {
    if (i == images.length - 1) {
        i = 0
    } else {
        i += 1
    }
    updateImage()
}

function updateImage() {
    document.getElementById('background').style.backgroundImage = "url(" + images[i] + ")";
    document.getElementById("location").innerHTML = imageLocations[i];
}