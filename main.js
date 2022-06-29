function showTime() {
    const time = document.querySelector('.time');
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // Set AM or PM
    let amPM = hour >= 12 ? 'PM' : 'AM';

    // Set 12hr Format
    hour = hour % 12 || 12;

    // Display Time
    time.textContent = `${hour}:${addZero(min)}:${addZero(sec)} ${amPM}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return n.toString().padStart(2, '0');
}

function setGreeting() {
    const greeting = document.querySelector('.greeting');
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (hour < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }
}

showTime();
setGreeting();