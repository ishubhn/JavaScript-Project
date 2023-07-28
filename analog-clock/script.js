// refer dom elements
const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

// check mode in localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
    // add 'dark' class to body and set text to 'Light'
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

// click event listener for modeSwitch
modeSwitch.addEventListener("click", () => {
    // toggle "dark" class on body
    body.classList.toggle("dark");
    // check if "dark" class is currently present
    const isDarkMode = body.classList.contains("dark");
    console.log(`is dark? : ${isDarkMode}`);
    // set modeSwitch based on 'dark' class presense
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    // set localStorage
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
})

const updateTime = () => {
    // get current time and calc degrees
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;

    // rotate clock hands in appropriate degree based on curtime
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg + (date.getMinutes()/2)}deg)`;
}


// call updateTime to set clock hands every second
setInterval(updateTime, 1000);