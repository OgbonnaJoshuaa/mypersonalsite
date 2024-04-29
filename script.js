var details = document.querySelectorAll(".fill__btn").length;
var users = [];

for (var i = 0; i < details; i++){
  
    document.querySelectorAll(".fill__btn")[i].addEventListener("click", function(){
      
          // alert("hello world") ``
        // name 
    var userName = "";
    while (userName === "") {
      userName = prompt("What is your name");
    }

    if (userName.length > 0 && userName.length >1 ) {
      alert("valid data!");
    }else{
      alert("Invalid Data!");
      userName = "";
    }
    // phone numbers

    var phoneNumber = "";
    while (phoneNumber === "") {
    phoneNumber = prompt("input phone number");
    }
    if (phoneNumber.length > 0 && phoneNumber.length <= 11) {
      alert("Valid Data!");
    }else{
      alert("Invalid Data!");
      phoneNumber = "";
    }

    // email
    var email = "";
    while (email === "") {
      email = prompt("Input your email");
    }

    if (email.includes("@") && email.includes(".")) {
      alert("valid data");
    }else {
      alert("Invalid Data!");
      email = "";
    }
    var password = "";
    while (password === "") {
      password = prompt("Input your password your password must not be less than 6");
    }
    if (password.length > 0 && password.length >= 6) {
    alert("Valid Data!");
    }else{
      alert("invalid Data!");
    }

    var confirmPassword = "";
    while (confirmPassword === "") {
      confirmPassword = prompt("confirm your password");
    }
    if (confirmPassword === password) {
      alert("valid data!");
    }else{
      alert("Check that your password matches!");
    }
    confirm("Confim your detais are correct");
    alert("valid data!");

        
      var users = {
        userName: userName,
        phoneNumber: phoneNumber,
        email: email
      }
        users.push(users);
        }         
    )
}

function seeDetails() {
  // alert(`user Details\n Password: ${userDetails.Password}\n Confirm Password: ${userDetails.ConfirmPassword}`)
  var reveal = document.getElementById("reveal").innerHTML = alert("Here are your details" + JSON.stringify(users));
  

}

//   let password = prompt("Enter your password");
        
      //   function validatePassword() {
      //     if (password.length > 0 && password.length <=6) {
      //       alert("valid data!");  
            
      //     }else{
      //       alert("invalid data!");
      //     }
          
      //   }
      //   while (validatePassword(password) ===false){
      //     password = prompt("Password must be greater than 5");
      //   }
      //   alert(validatePassword(password));
      //   userDetails["password"] = password
      
      //   let ConfirmPassword = prompt("Confirm password");
      
      //   function validateConfirmPassword(comfirmPassword) {
      //     if (comfirmPassword === password) {
      //       alert("valid data!");  
            
      //     }else{ 
      //       alert("invalid data!");
      //     }
          
      //   }
      //   alert(validateConfirmPassword(ConfirmPassword));
      //   userDetails["confirmPassword"] = ConfirmPassword
  
  
      //   let email = ("Enter your Email");
      //   function validateEmail() {
      //     if( email.includes("@") && email.includes(".")){
      //       alert("valid data");
      //      }
      //      else{
      //       alert("invalid data");
      //       email = "";
      //     }
  
  
  
      //   }