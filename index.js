// Work Time : 25 minutes
// Short Break : 5 minutes
// Long Breal : 10 minutes

let workTime = 0.1; // You can change it to 25, for now it is only 6 seconds to see all the features of the app
let time = workTime*60;

let breakTimeShort = 0.1;  // You can change it to 5, for now it is only 6 seconds to see all the features of the app
let time_break = breakTimeShort*60;  // You can change it to 10, for now it is only 6 seconds to see all the features of the app

let breakTimeLong = 0.1;
let time_break_long = breakTimeLong*60;
let counter = 0;
let counterShort = 0;
let counterLong = 0;

const countdownEl = document.getElementById('Timer');
const workBtn = document.getElementById('workBtn');
const shortBtn = document.getElementById('shortBtn');
const longBtn = document.getElementById('longBtn');
let acText = document.getElementById('accuracy');


var interval, interval_short, interval_long, startIt, beepSound, beepSoundLong;

function startPlease(){
    startIt = setTimeout(function(){
        const sp = new Audio('startPlease.mp3');
        sp.play();
    }, 10000) // Wait for 10 seconds and it will tell you to START PLEASE
}

function workStart(){
     const notCheat = new Audio('notCheat.mp3');
     ++counter;
     if(counter == 2){
         window.location.href = 'index.html'
     }else{
         interval = setInterval(updateWork, 1000);         
         
     }
    // console.log(counter)
    //  setTimeout(function(){notCheat.play();}, 3000)
     
}
function shortStart(){
    ++counterShort;
        if(counterShort == 2){
            window.location.href = 'index.html'
        }else{
            interval_short = setInterval(updateShort, 1000);         
            
        }
}
function longStart(){
        ++counterLong;
        if(counterLong == 2){
            window.location.href = 'index.html'
        }else{
             interval_long = setInterval(updateLong, 1000);
            
        }
}
function updateWork(){
    clearTimeout(startIt)
    clearInterval(beepSoundLong)
    clearInterval(beepSound)
    
    const minute = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerText = `${minute} : ${seconds}`
    time--;
    workBtn.disabled = true;
    shortBtn.disabled = true;
    longBtn.disabled = true;
    
    if(time === -1){
        clearInterval(interval)
        workBtn.disabled = false;
        shortBtn.disabled = false;
        longBtn.disabled = false;
        const completedSound = new Audio('completedSound.mp3');
        completedSound.play();    
        countdownEl.innerText = `Oh! I can't belive that`;
        acText.innerText = `Cool! Great accuracy of ${score}% 🎉`;
        // document.title('Oh, I can\'t belive that - Big Smoke')
    }

    
}
function updateShort(){
    clearTimeout(startIt)    
    clearInterval(beepSoundLong)
    acText.style.display = 'none';
    
    const minuteShort = Math.floor(time_break / 60);
    let secondsShort = time_break % 60;
    
    secondsShort = secondsShort < 10 ? '0' + secondsShort : secondsShort;
    countdownEl.innerText = `${minuteShort} : ${secondsShort}`
    time_break--;
    workBtn.disabled = true;
    shortBtn.disabled = true;
    longBtn.disabled = true;
    if(time_break === -1){
        clearInterval(interval_short)
        workBtn.disabled = false;
        shortBtn.disabled = false;
        longBtn.disabled = false;
        countdownEl.innerText = 'Short Break is Over';
        const beep = new Audio('beep.mp3')
        beepSound = setInterval(function(){
            beep.play();
            
        }, 500)
        setTimeout(function(){
            clearInterval(beepSound)
        }, 10000)
    }
    
}
function updateLong(){
    clearTimeout(startIt)    
    clearInterval(beepSound) 
    acText.style.display = 'none';

    const minuteLong = Math.floor(time_break_long / 60);
    let secondsLong = time_break_long % 60;
    
    secondsLong = secondsLong < 10 ? '0' + secondsLong : secondsLong;
    countdownEl.innerText = `${minuteLong} : ${secondsLong}`
    time_break_long--;
    workBtn.disabled = true;
    shortBtn.disabled = true;
    longBtn.disabled = true;
    if(time_break_long === -1){
        clearInterval(interval_long)
        workBtn.disabled = false;
        shortBtn.disabled = false;
        longBtn.disabled = false;
        countdownEl.innerText = 'Long Break is Over';
        const beepLong = new Audio('beep.mp3')
        beepSoundLong = setInterval(function(){
            beepLong.play();
            
        }, 500)
        setTimeout(function(){
            clearInterval(beepSoundLong)
        }, 10000)
    }
    
}
function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}
let score = randomNumber(90, 100)
let coffeeC = 0;

function coffee(){
    coffeeC++;
    document.getElementById('coffee-counter').innerText = coffeeC;
    if(coffeeC == 5){
        document.getElementById('coffee-btn').disabled = true;
        document.getElementById('coffee-btn').innerText = 'Enough! Coffee Drainer 🤣, that was 5th time';
    }
}
// function stop(){
//         clearInterval(interval_long)
//         clearInterval(interval)
//         clearInterval(interval_short)
//         countdownEl.innerText = 'You have tried to escape'
//         workBtn.disabled = false;
//         shortBtn.disabled = false;
//         longBtn.disabled = false;
    
// }

