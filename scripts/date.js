setInterval(()=>{
    const time = document.querySelector("#date");
let date = new Date();
let day = date.getDate(); // Day of the month (1-31)
let dayOfWeek = date.getDay(); // Day of the week (0-6)
let year = date.getFullYear(); // Full year (e.g., 2024)
let month = date.getMonth(); // Month (0-11)

// Convert day of week to name
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayName = daysOfWeek[dayOfWeek];

// Convert month to name
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let monthName = months[month];

let formattedTime = `${dayName}, ${day} ${monthName} , ${year}`;
time.textContent = formattedTime;

})