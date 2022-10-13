document.getElementById("Date").addEventListener("click",dat);
document.getElementById("Time").addEventListener("click",tim);

const d = new Date();

function tim(){
    document.getElementById("Zeit").innerHTML = d.toLocaleTimeString();
    document.getElementById("h1").innerHTML = "Time";



}

function dat() {
  document.getElementById("Zeit").innerHTML = d.getDay()+"."+d.getMonth()+"." + d.getFullYear();
  document.getElementById("h1").innerHTML = "Date";
  return;
}
