let images = ["images/delsur.jpg", "images/sondel.jpg", "images/scotland.jpg", "images/croatia.jpg",
    "images/georgianbay.jpg", "images/ometepe.jpg", "images/sanfran.jpg", "images/theshire.jpg", "images/austria.jpg"];
let imageLocations = ["San Juan Del Sur, Nicaragua", "Sondel, Netherlands", "Pentland Hills, Scotland", "Makarska, Croatia",
    "Georgian Bay, Canada", "Ometepe Island, Nicaragua", "San Francisco, United States", "The Shire, Eriador", "Kitzbühel, Austria"];
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