

function on(){
    if(document.getElementById("car_on").style.display == "none")
    {
        
        document.getElementById("car_on").style.display ="block";

    }
    else
    {
         document.getElementById("car_on").style.display="none";

    }
    
}
setInterval(on,1000);