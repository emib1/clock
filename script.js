const hoursDiv = document.querySelector('.hours');
const minutesDiv = document.querySelector('.minutes');
const secondsDiv = document.querySelector('.seconds');
const clockDiv = document.querySelector('.time');

hoursDiv.innerHTML ="";
minutesDiv.innerHTML= "";
secondsDiv.innerHTML ="";

const time = new Date();

const hr = time.getHours();
const min = time.getMinutes();
const seconds = time.getSeconds();

setInterval(function(){
    hoursDiv.innerHTML = `<p> ${hr}:</p>`;
    minutesDiv.innerHTML = `<p> ${min}: </p>`;
    secondsDiv.innerHTML = `<p> ${seconds} </p>`;
}, 1000);


