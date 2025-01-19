function displayAnalogTime(){
    let date = new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let hr = document.querySelector("#hour");
    let min = document.querySelector("#minute");
    let sec = document.querySelector("#second");
    let hhRotation =30*hh + mm/2;
    let mmRotation = 6*mm;
    let ssRotation = 6*ss;
    hr.style.transform = `rotate(${hhRotation}deg)`;
    min.style.transform = `rotate(${mmRotation}deg)`;
    sec.style.transform = `rotate(${ssRotation}deg)`;
}
function displayDigitalTime(){
    let date = new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let digiClock = document.querySelector(".digiClock");
    digiClock.innerText=`${hh}  :  ${mm}  :  ${ss}`;
}
// displayAnalogTime();
// displayDigitalTime();
setInterval(displayAnalogTime,1000);
setInterval(displayDigitalTime,1000);