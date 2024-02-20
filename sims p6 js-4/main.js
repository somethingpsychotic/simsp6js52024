const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const status = document.getElementById('statusofswitch');
const alpha = document.getElementById('alpha');
const status2 = document.getElementById("status2");
const audio = document.getElementById("audio");

let isLightOn = false;

lightswitch.addEventListener('click', function() {
    if(isLightOn) {
        lightbulb.src = "lightOFF.png";
        lightswitch.src = "switchOFF.png";
        status.textContent = "TURN ON THE LIGHT";
        document.body.style.backgroundColor = "purple";
        alpha.style.visibility = "hidden";
        status2.textContent = "";
        


     
    

    }else{
        lightbulb.src = "lightON.png";
        lightswitch.src = "switchON.png";
        status.textContent = "you DID IT! now, TURN OFF THE LIGHTS";
        document.body.style.backgroundColor = "black";
        alpha.style.visibility = "visible"; 
        status2.textContent = "you just messed with a SIGMA ALPHA. RUN NOW!!!!";
       

       
    }
    isLightOn = !isLightOn;
}
    
);