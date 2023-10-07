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
    document.getElementById("uname").style.background = "#adcae6";
}
  
function blurFunction1() {
    document.getElementById("uname").style.background = "";
}

function focusFunction2() {
    document.getElementById("pass").style.background = "#adcae6";
}
  
function blurFunction2() {
    document.getElementById("pass").style.background = "";
}

// function regValidation(){
//     console.log("form entered");
//     let a = document.getElementById("fname").value;
//     let b = document.getElementById("lname").value;
//     let c = document.getElementById("email").value;
//     let d = document.getElementById("dob").value;
//     let f = document.getElementById("gndr").value;
//     let g = document.getElementById("pno").value;
//     let h = document.getElementById("addr").value;
//     let i = document.getElementById("state").value;
//     let j = document.getElementById("dist").value;
//     let k = document.getElementById("uname").value;
//     let l = document.getElementById("pass1").value;
//     let m = document.getElementById("pass2").value;
//     let n = document.getElementById("c1").value;
//     let o = document.getElementById("c2").value;
//     let p = document.getElementById("c3").value;
//     console.log(a,b,c,d,e,f,g,h,i,j,k,l,m);
//     let rule1 = /^(?=.*[!@#$%^&*-])(?=.*[0-9])(?=.*[A-z]).{8,20}$/;
    
//     if(a == ""){
//         alert("First Name Must NOt Be Empty");
//     }
//     else if(b == ""){
//         alert("Last Name Must NOt Be Empty");
//     }
//     else if(c == ""){
//         alert("Email Must NOt Be Empty");
//     }  
//     else if(d == ""){
//         alert("Date Of Birth Must NOt Be Empty");
//     }  
//     else if(f == ""){
//         alert("Gender Must NOt Be Empty");
//     } 
//     else if(g == ""){
//         alert("Phone Number Must NOt Be Empty");
//     }
//     else if(h == ""){
//         alert("Address Must NOt Be Empty");
//     }
//     else if(i == ""){
//         alert("State Must NOt Be Empty");
//     }
//     else if(j == ""){
//         alert("District Must NOt Be Empty");
//     } 
//     else if(k == ""){
//         alert("Username Must NOt Be Empty");
//     }
//     else if(l == ""){
//         alert("Passwords Must NOt Be Empty");
//     }
//     else if(m == ""){
//         alert("Passwords Must NOt Be Empty");
//     }
//     else if(n != "" || o != "" || p != ""){
//         alert("Check Box Must NOt Be Empty");
//     }

//     else if(l == m){
//         console.log("match");
//         result1 = l.match(rule1);
//     }

//     else{
//         console.log("not match");
//         alert("Passwords Does not match");
//     }

//     if (!result1){
//         console.log("invalid");
//         alert("*Password must have a minimum of 8 and maximum of 20 charaters with atleast one upper case and lower case letter, one number and a special character");
//         flag = true;
//     }
    

// }

function contactUs(){
    let a = document.getElementById("fname").value;
    let b = document.getElementById("lname").value;
    let c = document.getElementById("country").value;
    let d = document.getElementById("subject").value;
    console.log(a,b,c,d);
    
    if(a == ""){
        alert("first name should not be empty");

    }  
    else if(b == ""){
        alert("last name should not be empty");

    }  
    else if(c == ""){
        alert(" country should not be empty");

    } 
    else if(d == ""){
        alert("message should not be empty");

    }
    else{
        alert("sucess");
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