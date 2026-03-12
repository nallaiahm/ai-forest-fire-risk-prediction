function random(min,max){
return Math.floor(Math.random()*(max-min+1))+min;
}

/* Environment Simulation */

const tempEl=document.getElementById("tempVal");
const humEl=document.getElementById("humVal");
const windEl=document.getElementById("windVal");
const soilEl=document.getElementById("soilVal");
const riskEl=document.getElementById("riskLevel");
const riskBar=document.getElementById("riskBar");

function updateEnvironment(){

let temperature=random(25,50);
let humidity=random(30,70);
let windSpeed=random(5,25);
let soilDryness=random(20,90);

tempEl.innerText=temperature;
humEl.innerText=humidity;
windEl.innerText=windSpeed;
soilEl.innerText=soilDryness;

let risk=Math.floor((temperature*0.4 + windSpeed*0.3 + soilDryness*0.3));

if(risk<50){

riskEl.innerHTML='<span class="safe">LOW</span>';
riskBar.style.width="30%";
riskBar.innerText="LOW";

}
else if(risk<75){

riskEl.innerHTML='<span style="color:orange">MODERATE</span>';
riskBar.style.width="60%";
riskBar.innerText="MODERATE";

}
else{

riskEl.innerHTML='<span class="risk">HIGH</span>';
riskBar.style.width="90%";
riskBar.innerText="HIGH";

}

}

updateEnvironment();
setInterval(updateEnvironment,3000);
