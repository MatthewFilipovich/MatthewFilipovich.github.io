let images = ["images/delsur.jpg", "images/sondel.jpg", "images/scotland.jpg", "images/croatia.jpg",
    "images/georgianbay.jpg", "images/ometepe.jpg", "images/sanfran.jpg", "images/theshire.jpg", "images/austria.jpg"];
let imageLocations = ["San Juan Del Sur, Nicaragua<br>Dec 2019", "Sondel, Netherlands<br>May 2018", "Pentland Hills, Scotland<br>Sep 2020", "Makarska, Croatia<br>June 2018",
    "Georgian Bay, Canada<br>July 2018", "Ometepe Island, Nicaragua<br>Dec 2019", "San Francisco, United States<br>July 2019", "The Shire, Eriador (Scotland)<br>Sep 2020", "Kitzbühel, Austria<br>May 2018"];
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