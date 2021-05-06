document.getElementById("done").style.visibility = 'hidden';
var scnd = 5;
var countdown = setInterval(function(){
    scnd--;
    //(scnd == 1) ? document.getElementById("plural").textContent = "c ," : document.getElementById("plural").textContent = "cs ,";
    document.getElementById("btime").innerHTML = scnd;
    if (scnd <= 0)
    {
	
        clearInterval(countdown); 
        document.getElementById("done").style.visibility = 'visible';
    }
},1000);
