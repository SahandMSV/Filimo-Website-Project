function serial_btn() {
    document.getElementById("serial_btn").style.backgroundColor = "rgb(21, 21, 21)";
    document.getElementById("serial_btn").style.fontWeight = "normal";
    document.getElementById("movie_btn").style.backgroundColor = "rgb(58, 58, 58)";
    document.getElementById("movie_btn").style.fontWeight = "bold";
}

function movie_btn() {
    document.getElementById("movie_btn").style.backgroundColor = "rgb(21, 21, 21)";
    document.getElementById("movie_btn").style.fontWeight = "normal";
    document.getElementById("serial_btn").style.backgroundColor = "rgb(58, 58, 58)";
    document.getElementById("serial_btn").style.fontWeight = "bold";
}

const navbar = document.getElementById("navbar");

window.addEventListener ('scroll', function () {
    if (window.scrollY > 0) {
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.65)";
    } else {
        document.getElementById("navbar").style.backgroundColor = "black";
    }
});