window.onload = function() {
    displayDate();
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

    const date = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    
    let month = months[date.getMonth()];
    let dateNow = date.getDate().toString().toUpperCase();
    let dayNow = days[date.getDay()-1].toUpperCase();

    document.getElementById("month").innerHTML = month;
    document.getElementById("date").innerHTML = dateNow
    console.log("date is fetched");
    document.getElementById("day").innerHTML = dayNow;
    console.log("day is fetched");
}