/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
var Schedule [Phonenum,Fname,Lname,repairdate,Repairtime]
list: {
    text += Schedule[0] + "<br>";
    text += Schedule[1] + "<br>";
    text += Schedule[2] + "<br>";
    break Schedule;
    text += Schedule[3] + "<br>";
    text += Schedule[4] + "<br>";
    text += Schedule[5] + "<br>";
}
function validate(){
  var PhoneEntered = document.getElementById("Phonenum").value;
    var FnameEntered = document.getElementById("Fname").value;
      var LnameEntered = document.getElementById("Lname").value;
        var repairdateEntered = document.getElementById("repairdate").value;
          var RepairtimeEntered = document.getElementById("Repairtime").value;
  //Show message that there is an error with the PhoneNumber...
if (PhonenumEntered.length < 10 )
    { document.getElementById("PhonenumError").innerHTML="phone number with area code needs at least 10 digits";
    document.getElementById("PhonenumError").classList.remove("hidden-message");
    document.getElementById("PhonenumError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("PhonenumGroup").classList.add("has-error");
    }

else { document.getElementById("PhonenumError").innerHTML="Good PhoneNumber.";

document.getElementById("PhonenumError").classList.remove("hidden-message");
document.getElementById("PhonenumError").classList.add("shown-message");
//Turn the Phonenum items red
document.getElementById("PhonenumGroup").classList.add("has-success");
     }
     if (FnameEntered.length < 1)
         { document.getElementById("FnameError").innerHTML="name needs to be at least one letter.";
         document.getElementById("FnameError").classList.remove("hidden-message");
         document.getElementById("FnameError").classList.add("shown-message");
         //Turn the username items Red
         document.getElementById("FnameGroup").classList.add("has-error");
         }

     else { document.getElementById("FnameError").innerHTML="Cool First Name.";

     document.getElementById("FnameError").classList.remove("hidden-message");
     document.getElementById("FnameError").classList.add("shown-message");
     //Turn the Fname items red
     document.getElementById("FnameGroup").classList.add("has-success");
          }

          if (LnameEntered.length < 1)
              { document.getElementById("LnameError").innerHTML="password needs to be longer than zero characters.";
              document.getElementById("LnameError").classList.remove("hidden-message");
              document.getElementById("LnameError").classList.add("shown-message");
              //Turn the username items red
              document.getElementById("LnameGroup").classList.add("has-error");
              }

          else { document.getElementById("LnameError").innerHTML="Awesome Last Name.";

          document.getElementById("LnameError").classList.remove("hidden-message");
          document.getElementById("LnameError").classList.add("shown-message");
          //Turn the Fname items red
          document.getElementById("LnameGroup").classList.add("has-success");
               }
}
