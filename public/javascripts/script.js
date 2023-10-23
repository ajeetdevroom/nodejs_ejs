function waitAndshow() {  
    //define a date and time variable  
    var systemdate = new Date();  
   
    //display the updated time after every 4 seconds  
    document.getElementById("clock").innerHTML = systemdate.toLocaleTimeString();  
}  

   //define time interval and call user-defined waitAndshow function  
   setInterval(waitAndshow, 1000); 