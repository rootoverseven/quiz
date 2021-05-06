function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    let email= document.forms["welcome_form"]["email"].value;
  
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
  
    location.href = "quiz.html";
  }

    document.getElementById("ls").disabled = true;
  var myVar = setInterval(myTimer, 1000);
  

  function myTimer() {
    var d = new Date();
    //document.getElementById("demo").innerHTML = d.toLocaleTimeString();


window.setInterval(function(){
var date = new Date();
var hr=17;
var mn=18;
var sc= 00;

document.getElementById("startTime").innerHTML=hr+":"+mn+":"+sc;
if ((date.getHours()=== hr ) && date.getMinutes()===mn && date.getSeconds()===sc)
{
    document.getElementById("ls").disabled = false;
    //document.getElementById("dem").innerHTML="Hello34";
    document.getElementById("ls").click();
}else if(date.getHours()>= hr  && date.getMinutes()>=mn && date.getSeconds()>=sc)
{

    //document.getElementById("dem").innerHTML="Session Expired";
    alert("Sorry you're late, the quiz has already been started");

}

}, 500);

  
   // if (d.toLocaleTimeString()!="3:53:40 AM")
   // {
    //  document.getElementById("dem").innerHTML="Hello34";
      //document.getElementById("ls").click();
      
    //}
  }