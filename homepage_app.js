function serial_btn() {
    if (document.getElementById("movie_btn").style.backgroundColor !== "rgb(21, 21, 21)") {
        document.getElementById("serial_btn").style.fontWeight = "bold";
        document.getElementById("serial_btn").style.backgroundColor = "rgb(58, 58, 58)";
        document.getElementById("movie_btn").style.fontWeight = "normal";
        document.getElementById("movie_btn").style.backgroundColor = "rgb(21, 21, 21)";
    }
}

function movie_btn() {
    if (document.getElementById("serial_btn").style.backgroundColor !== "rgb(21, 21, 21)") {
        document.getElementById("movie_btn").style.fontWeight = "bold";
        document.getElementById("movie_btn").style.backgroundColor = "rgb(58, 58, 58)";
        document.getElementById("serial_btn").style.fontWeight = "normal";
        document.getElementById("serial_btn").style.backgroundColor = "rgb(21, 21, 21)";
    }
}

const navbar = document.getElementById("navbar");

window.addEventListener ('scroll', function () {
    if (window.scrollY > 0) {
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    } else {
        document.getElementById("navbar").style.backgroundColor = "black";
    }
});