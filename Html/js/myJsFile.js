

//background focus function

function focusFunction1() {
    document.getElementById("uname").style.background = "#B9D9EB";
}
  
function blurFunction1() {
    document.getElementById("uname").style.background = "";
}

function focusFunction2() {
    document.getElementById("pass").style.background = "#B9D9EB";
}
  
function blurFunction2() {
    document.getElementById("pass").style.background = "";
}

function focusFunction3() {
    document.getElementById("name").style.background = "#B9D9EB";
}
  
function blurFunction3() {
    document.getElementById("name").style.background = "";
}

function focusFunction4() {
    document.getElementById("email").style.background = "#B9D9EB";
}
  
function blurFunction4() {
    document.getElementById("email").style.background = "";
}

function focusFunction5() {
    document.getElementById("phone").style.background = "#B9D9EB";
}
  
function blurFunction5() {
    document.getElementById("phone").style.background = "";
}

function focusFunction6() {
    document.getElementById("date").style.background = "#B9D9EB";
}
  
function blurFunction6() {
    document.getElementById("date").style.background = "";
}

function focusFunction7() {
    document.getElementById("state").style.background = "#B9D9EB";
}
  
function blurFunction7() {
    document.getElementById("state").style.background = "";
}

function focusFunction8() {
    document.getElementById("district").style.background = "#B9D9EB";
}
  
function blurFunction8() {
    document.getElementById("district").style.background = "";
}

function focusFunction9() {
    document.getElementById("Uname").style.background = "#B9D9EB";
}
  
function blurFunction9() {
    document.getElementById("Uname").style.background = "";
}

function focusFunction10() {
    document.getElementById("pass1").style.background = "#B9D9EB";
}
  
function blurFunction10() {
    document.getElementById("pass1").style.background = "";
}

function focusFunction11() {
    document.getElementById("pass2").style.background = "#B9D9EB";
}
  
function blurFunction11() {
    document.getElementById("pass2").style.background = "";
}

function focusFunction12() {
    document.getElementById("fname").style.background = "#B9D9EB";
}
  
function blurFunction12() {
    document.getElementById("fname").style.background = "";
}

function focusFunction13() {
    document.getElementById("lname").style.background = "#B9D9EB";
}
  
function blurFunction13() {
    document.getElementById("lname").style.background = "";
}

function focusFunction14() {
    document.getElementById("country").style.background = "#B9D9EB";
}
  
function blurFunction14() {
    document.getElementById("country").style.background = "";
}

function focusFunction15() {
    document.getElementById("subject").style.background = "#B9D9EB";
}
  
function blurFunction15() {
    document.getElementById("subject").style.background = "";
}

//contact form validation

function contactUs(){
    var fname=document.custom_form.fname;
    var lname=document.custom_form.lname;
    var country=document.custom_form.country;
    var subject=document.custom_form.subject;

    //Name validation
    if (fname.value == "") {
        fname.nextElementSibling.style.display = "block";
        fname.style.border = "1px solid #f00";
        console.log("enter fname")
        return false
     }else{
       fname.nextElementSibling.style.display = "none";
       fname.style.border = "1px solid transparent";
     }
     if (lname.value == "") {
        lname.nextElementSibling.style.display = "block";
        lname.style.border = "1px solid #f00";
        return false
     }else{
       lname.nextElementSibling.style.display = "none";
       lname.style.border = "1px solid transparent";
     }
     //country validation
     if (country.value == "") {
        country.nextElementSibling.style.display = "block";
        country.style.border = "1px solid #f00";
        return false
     }else{
       country.nextElementSibling.style.display = "none";
       country.style.border = "1px solid transparent";
     }
     //subject validation
     if (subject.value == "") {
         subject.nextElementSibling.style.display = "block";
         subject.style.border = "1px solid #f00";
         return false
      }else{
        subject.nextElementSibling.style.display = "none";
        subject.style.border = "1px solid transparent";
      }

}



