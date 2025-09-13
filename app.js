document.getElementById("homepage").addEventListener("click", paydet);
document.getElementById("choose").addEventListener("click", enter);
document.getElementById("home2").addEventListener("click", home2);
var home_body = document.getElementById("homepage");
var pay_body = document.getElementById("paysec");
var home = document.getElementById("home");
var home2 = document.getElementById("home2");
var choose_class = document.getElementById("choose");
var entr = document.getElementById("entr");



pay_body.style.display = "none";
// reception.style.display = "none";
// nursery.style.display = "none";
// grade.style.display ="none";
// j_achiever.style.display = "none";
// s_achiever.style.display = "none";

function home2() {
    var reception = document.getElementById("Reception");
    var nursery = document.getElementById("Nursery");
    var grade = document.getElementById("Grade");

    home_body.style.display = "none";
    home.style.display = "block";
    choose_class.style.display = "block";
    reception.style.display = "none";
    nursery.style.display = "none";
    grade.style.display ="none";
    home2.style.display = "none";
}

function paydet() {
    home_body.style.display = "none";
    home.style.display = "block";
    choose_class.style.display = "block";
}

function home() {
    home_body.style.display = "block";
    home.style.display = "none";
    choose_class.style.display = "none";
}


// function home2() {
//     home_body.style.display = "none";
//     home.style.display = "none";
//     choose_class.style.display = "none";
//     pay_body.style.display = "block";
// }

 function enter() {
    var reception = document.getElementById("Reception");
    var nursery = document.getElementById("Nursery");
    var grade = document.getElementById("Grade");
    var junaid = document.getElementById("junaid");

    if(junaid.value == 'Reception') {
        reception.style.display = "block";
        nursery.style.display = "none";
        grade.style.display ="none";
        choose_class.style.display = "none";
        home.style.display = "block";
        home2.style.display = "block";
    }
    else if(junaid.value == 'Nursery'){
        reception.style.display = "none";
        nursery.style.display = "block";
        grade.style.display ="none";
        choose_class.style.display = "none";
        home2.style.display = "block";
        home.style.display = "block";
    }
    else if(junaid.value == 'Grade') {
        reception.style.display = "none";
        nursery.style.display = "none";
        grade.style.display ="block";
        choose_class.style.display = "none";
        home2.style.display = "block";
        home.style.display = "block";
    }
   else{
    
   }
   return false;

}