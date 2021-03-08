
/*
// Image Slider Function

var photos = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];
var imgTag = document.querySelector("img");


var count = 0;

function next() {
    count++;

    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }

}

function prev() {
    count--;

    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}
 
*/

/*
 ্এভাবেও জাভা ‍অ্যাড করা যায়।
function addStyle() {
    var myVar = document.querySelector("#paraId");
    myVar.style.color = "red";
    myVar.style.fontSize = "4rem";
    myVar.style.fontStyle = "italic";
    myVar.style.fontWeight = "bold";
}



// সহজ পদ্ধতি with button add style and remove style.
var myVar = document.querySelector("#para2Id");
function addStyle() {
    myVar.classList.add("para-style");
}

function removeStyle() {
    myVar.classList.remove("para-style");
}



// Even lesenar

document.querySelector("#listener").addEventListener("click", function () {
    alert("hello");
});
// function myFunction(){
//     alert("Hello");
// }



var mouseOver = document.querySelector("h6");
mouseOver.addEventListener("mouseover", function () {
    mouseOver.classList.add("listen-chake");
});

mouseOver.addEventListener("mouseout", function () {
    mouseOver.classList.remove("listen-chake");
});


// Button Listener
//  একাধিক বাটুন কে ক্লিক করলে দেখা যাবে বাটন ১, ২, ৩, ক্লিলিক্ড

/*
var len = document.querySelectorAll(".myButton").length;

for (var i = 0; i < len; i++) {

    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {

        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + "is clicked";
    });
}
*/

/*
document.querySelectorAll(".myButton")[1].addEventListener("click", function () {

    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked";
});

document.querySelectorAll(".myButton")[2].addEventListener("click", function () {

    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked";
});

*/



// Multipull JavaScript  for audio plaing











document.write(" <h1> Love is Not Life;  <h1>");