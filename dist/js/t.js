var c = 0;
var seconds2 = document.getElementById("countdown").textContent;
var countdown = setInterval(function(){
    seconds2--;
    (seconds2 == 1) ? document.getElementById("plural").textContent = "c ," : document.getElementById("plural").textContent = "cs ,";
    document.getElementById("countdown").textContent = seconds2;
    if (seconds2 <= 0)
    {
	c++;
      //  clearInterval(countdown); 
        next();
	
        if(c%2==0)
        {
            seconds2 = 10;
        }else{
            seconds2=5;
        }
        
      //  document.getElementById("n").value = user_name;
    }
},1000);


