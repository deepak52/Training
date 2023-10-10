function LoginformValidation(){
    let a = document.getElementById("uname").value;
    let b = document.getElementById("pass").value;
    let rule1 = /^(?=.*[!@#$%^&*-])(?=.*[0-9])(?=.*[A-z]).{8,10}$/;
    result1 = b.match(rule1); 

    console.log(a, b);
    let z = b.length;
    console.log("length of password : " + z);
    let flag = false;
    if (a == "" && b == ""){
        console.log("name and password should not be empty");
        alert("Name And Password Should Not Be Empty");
        flag = true;
        
    }
    else if (!result1){
        alert("*Password must have a minimum of 8 and maximum of 10 charaters with atleast one upper case and lower case letter, one number and a special character");
        flag = true;
    }
    else if(a ==""){
        console.log("name should not be empty");
        alert("Name Should Not Be Empty");
        flag = true;
    }
    
    if(!flag){
        alert("sucess")
    }
    
}

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

function FormValidation(){
    //alert(“Alert”)
    var name=document.custom_form.name;
    var email=document.custom_form.email;
    var phone=document.custom_form.phone;
    var date=document.custom_form.date
    // var gender=document.custom_form.gender   
    var state=document.custom_form.state;
    var district=document.custom_form.district
    var Uname=document.custom_form.Uname;
    var pass1=document.custom_form.pass1;
    var pass2=document.custom_form.pass2
    //Name validation
    if (name.value == "") {
       name.nextElementSibling.style.display = "block";
       name.style.border = "1px solid #f00";
       return false
    }else{
      name.nextElementSibling.style.display = "none";
      name.style.border = "1px solid transparent";
    }
    //email validation
    if (!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value == "") {
       email.nextElementSibling.style.display = "block";
       email.style.border = "1px solid #f00";
       return false
    }else{
      email.nextElementSibling.style.display = "none";
      email.style.border = "1px solid transparent";
    }
    //phone no validation
    if (!phone.value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/) || phone.value == "") {
        phone.nextElementSibling.style.display = "block";
        phone.style.border = "1px solid #f00";
        return false
     }else{
       phone.nextElementSibling.style.display = "none";
       phone.style.border = "1px solid transparent";
     }
    //date of birth validation
    if (date.value == "") {
        date.nextElementSibling.style.display = "block";
        date.style.border = "1px solid #f00";
        return false
     }else{
       date.nextElementSibling.style.display = "none";
       date.style.border = "1px solid transparent";
     }
    // //gender validation
    // if (gender.value == "") {
    //     gender.nextElementSibling.style.display = "block";
    //     gender.style.border = "1px solid #f00";
    //     return false
    //  }else{
    //    gender.nextElementSibling.style.display = "none";
    //    gender.style.border = "1px solid transparent";
    //  }
    
    //state select box validation
    if (state.value == "") {
       state.nextElementSibling.style.display = "block";
       state.style.border = "1px solid #f00";
       return false
    }else{
      state.nextElementSibling.style.display = "none";
      state.style.border = "1px solid transparent";
    }
    //state select box validation
    if (district.value == "") {
        district.nextElementSibling.style.display = "block";
        district.style.border = "1px solid #f00";
        return false
     }else{
       district.nextElementSibling.style.display = "none";
       district.style.border = "1px solid transparent";
     }
    //Username validation
    if (Uname.value == "") {
        Uname.nextElementSibling.style.display = "block";
        Uname.style.border = "1px solid #f00";
        return false
     }else{
       Uname.nextElementSibling.style.display = "none";
       Uname.style.border = "1px solid transparent";
     }
     //password1 validation
    if (pass1.value == "") {
        pass1.nextElementSibling.style.display = "block";
        pass1.style.border = "1px solid #f00";
        return false
     }else{
       pass1.nextElementSibling.style.display = "none";
       pass1.style.border = "1px solid transparent";
     }
     //Username validation
    if (pass2.value == "") {
        pass2.nextElementSibling.style.display = "block";
        pass2.style.border = "1px solid #f00";
        return false
     }else{
       pass2.nextElementSibling.style.display = "none";
       pass2.style.border = "1px solid transparent";
     }
 }