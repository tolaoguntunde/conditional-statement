// let randomNumber = Math.random();
// randomNumer = randomNumber * 6;
// randomNumber =Math.floor(randomNumber) + 1;
// console.log(randomNumber)

// prompt("What is your name");
// prompt("what is your friends name");

// let friendshipScore = Math.random()* 100;
// friendshipScore = Math.floor(friendshipScore) + 1;
// // alert(`Your frienhip Score is ${friendshipScore}%`);
// if (friendshipScore >=70) {
//     console.log(`Your friendship score is above 70 score: ${friendshipScore}`)
// }


// let randomNum =Math.random();
// randomNum = randomNum * 100 ;
// randomNum = Math.floor(randomNum) + 1;

// if (randomNum % 2  === 0) {
//     console.log(`Your number ${randomNum} is even`)
// }
// =============================Assignment==================//
let a = prompt("Enter first argument");
let b = prompt("Enter second argument");
if (a !== b) {
    alert("The values are not equal")
} else {
    alert("They are equal")
}

let speedValue = prompt("Enter your speed");
let speedLimitValue = prompt("Enter your speed limit");


function speedChecker(speed, speedLimit) {
    if (speed >= speedLimit) {
        alert("Yes, you are speeding")
    } else {
        alert("No you are not speeding.What's wrong with you")
    }
}

speedChecker(speedValue, speedLimitValue)


function countSpoons(){
    let count = 10;
    let spoons = 11;
    if (count === spoons) {
        alert("We have spoons for everyone")
    }
    
    else if (count < spoons) {
        alert("Bring more spoons please")
    } else {
        alert("We have a problem")
    }
}

countSpoons()

hourValue=prompt("Enter number of hours:");
function officeHours(hour){
    if (hour < 10 || hour > 10 ) {
     alert("The office is closed")   
    }else{
        alert("Open for business")
    }
}

officeHours(hourValue)


let hourOpenValue=prompt("Enter hours of operation");
let checkWeekend = prompt("is it weekend - True /false");
checkWeekend = Boolean(checkWeekend);
function isOfficeOpen(hour,isWeekend){
if (hour < 10 || hour > 18 || isWeekend === true) {
    alert("The office is closed")
}
}

isOfficeOpen(hourOpenValue,checkWeekend)

function leavingTime(){
    let hour = 12;
    let minute = 30;
    if (hour === 12 && minute === 30) {
        alert("We are leaving at 12:30"); 
    }else{
        alert("The time is")
    }
}
leavingTime()

function pickBook(){
    let book = "maths";
    if (book === "history") {
        alert("History Book");
    }
    else if (book === "maths") {
        alert("Maths Book");
    }else if (book === "economics") {
        alert("Economics Book");
    }else{
        alert("Unknown book")
    }
}
pickBook()

ageValue = prompt("Enter you age:");
function checkEligibility(age){
if (age > 18) {
    alert("Qualifies for driving")  
}else{
    alert("Does not qualify for driving")
}
}

checkEligibility(ageValue)