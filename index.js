
//       1. getElementById
// এই ফাংশনটির সাহায্যে html file এর কোন কিছুকে id দ্বারা সিলেক্ট করে তা জাভা দিয়ে change করা যায়। যেমন:


//document.getElementById("pragraph").innerHTML = "HELLO WORLD";

//  or

// var mypragraph = document.getElementById("pragraph");
// mypragraph.innerHTML = "I Love Bangladesh";

// document.getElementById("head").innerHTML = "I Change Hedding with JavaScript";

// var task = document.getElementById("head2");
// task.innerHTML = "Good Bye GOOD BYE";



// document.getElementsByTagName("h2")[0].innerHTML = "This Part Change1";

// document.getElementsByTagName("h2")[1].innerHTML = "This Part Change2";

// document.getElementsByClassName("head1")[1].innerHTML = "I heat India Beacause they eat beef lime. ";

// document.getElementsByClassName("head1")[0].innerHTML = "I heat India Beacause they eat beef lime. ";

//       QuerySelector
// Id, ClassName, TagName এই তিনটা মেথডের কাজই QuerySelector দ্বারা করা যায়। Example :

// document.querySelector(".head1").innerHTML = "Change1";
// document.querySelector("#head").innerHTML = "Change 2";
// document.querySelector("h2").innerHTML = "Change 3";


// document.querySelector("a").innerHTML = " Home Change to new tex";

// document.querySelector("li a").innerHTML = " Tutorial Change to new tex";

// document.querySelector(".my-div a").innerHTML = " Contact Change to new tex";

// document.querySelector("#bc").innerHTML = " <       Bangladesh Chage to Petra or bakka. >";


// document.querySelectorAll("p")[1].innerHTML = "QuerySelectorChange2";

// document.querySelectorAll("p")[4].innerHTML = "QuerySelectorChange5";

// document.querySelectorAll("p")[3].innerHTML = "QuerySelectorChange5";

// document.querySelectorAll("p")[0].innerHTML = "QuerySelectorChange5";



//  button Clik function



function myMessage1() {
    alert(" Hello everyOne1");
} function myMessage2() { alert("Hello everyOne2"); } function myMessage3() {
    alert("I am Button 3");
}





function myMessage4() {
    var myVar = document.querySelector("#paraId");
    myVar.innerHTML = "You have click on button 4"
}

// button click এর মাধ্যমে ছবি সো করানোর ফাংশন।
function myPicture1() {
    document.querySelector("#imageId").src = "images/Red Rasel.jpg"; //image id ekhane dhora hoyese
}
function myPicture2() {
    document.querySelector("#imageId").src = "images/Blue Rasel.jpg";
}