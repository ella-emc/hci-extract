// Global variables
const date = new Date();
const months_short = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const months_full = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];


window.onload = function() {
    displayDate();
    let periodNow = `${months_full[date.getMonth()]} ${date.getDate().toString()}, ${date.getFullYear().toString()}`;  
    document.getElementById("expense-period").innerHTML = periodNow;

};

function displayExpenses() {
    console.log("I am called");
    const selected = document.getElementById("period").value;
    const display = ["Php 0.00", "Php 250.00", "Php 2,500.00", "Php 120,000.00"];

    if (selected == "0") {
        document.getElementById("expense").innerHTML = display[0];
    } else if (selected == "1") {
        document.getElementById("expense").innerHTML = display[1];
    } else if (selected == "2") {
        document.getElementById("expense").innerHTML = display[2];
    } else {
        document.getElementById("expense").innerHTML = display[3];
    }
}

function displayDate() {
    console.log("Display date is called");

    let month = months_short[date.getMonth()];
    let dateNow = date.getDate().toString();
    let dayNow = days[date.getDay()-1].toUpperCase();

    document.getElementById("month").innerHTML = month;
    document.getElementById("date").innerHTML = dateNow
    console.log("date is fetched");
    document.getElementById("day").innerHTML = dayNow;
    console.log("day is fetched");
}

function displayExpensePeriod() {
    const period = document.getElementById("timeperiod").value;
    const month = date.getMonth();
    let periodNow;

    if (period == "d") {
        periodNow = `${months_full[date.getMonth()]} ${date.getDate().toString()}, ${date.getFullYear().toString()}`;  
    } else if (period == "w") {
        let weekEnd = date.getDate();
        let weekStart = weekEnd - 7;
        
        if (weekStart < 1) {
            switch (month) {
                case 0, 2, 4, 6, 7, 9, 11:
                    weekStart = 31 - (7-weekEnd);
                    break;
                case 1: 
                    // This does not consider leap years
                    weekStart = 28 -(7-weekEnd);
                    break;
                default:
                    weekStart = 30 - (7-weekEnd);
                    break;
            }
        }

        periodNow = `${months_full[date.getMonth()-1]} ${weekStart}-${months_full[date.getMonth()]} ${weekEnd}, ${date.getFullYear().toString()}`;  
    } else if (period == "m") {
        let monthStart = "1";
        let monthEnd;
        switch (month) {
            case 0, 2, 4, 6, 7, 9, 11:
                monthEnd = "31";
                break;
            case 1: 
                // This does not consider leap years
                monthEnd = "28";
                break;
            default:
                monthEnd = "30";
                break;
        }

        periodNow = `${months_full[month]} ${monthStart}-${monthEnd}, ${date.getFullYear().toString()}`;
    } else {
        periodNow = `${months_full[0]}-${months_full[11]} ${date.getFullYear().toString()}`;
    }

    document.getElementById("expense-period").innerHTML = periodNow;

}

function displayAnalytics() {

}

function displayHome() {

}

function displayCalculator() {

}

function displayAddExpenses() {

}

function displayProfile() {

}