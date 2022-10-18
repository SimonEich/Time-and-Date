document.getElementById("Date").addEventListener("click",dat);
document.getElementById("Time").addEventListener("click",tim);

var state = "Start";
var wert = "startwert";

function tim() {
  state = "Time"
}




function dat() {
  state = "Datum";
  wert = "1.1.1"
  show();
}




const myInterval = setInterval(show, 1000);

function show(){

  switch (state){
    case "Start":
    wert = "Ready to start!";
    break;

    case "Time":

    console.log(state);
    function myTimer() {
      const d = new Date();
      time = d.toLocaleTimeString();
      return time;
    }
    wert = myTimer();
    break;

    case "Datum":
      const d = new Date();
      wert = d.getDate()+"."+ (d.getMonth() + 1) +"." + d.getFullYear();
    break;


  }

  document.getElementById("h1").innerHTML = state;
  document.getElementById("Zeit").innerHTML = wert;
  }
