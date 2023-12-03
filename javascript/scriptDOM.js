document.addEventListener("DOMContentLoaded", function () {
    let myBox = document.getElementById("box");

    myBox.addEventListener("click", function () {
        if (myBox.classList.contains("red")) {
            myBox.classList.remove("red");
            myBox.classList.add("green");
        } else {
            myBox.classList.remove("green");
            myBox.classList.add("red");
        }
    });
});