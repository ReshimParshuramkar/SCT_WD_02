let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;
let lapCount = 1;

function formatTime(time) {
    let milliseconds = Math.floor((time % 1000) / 10);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);

    return (
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0') + ":" +
        String(milliseconds).padStart(2, '0')
    );
}

function start() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").textContent = formatTime(elapsedTime);
        }, 10);
    }
}

function pause() {
    if (running) {
        running = false;
        clearInterval(timerInterval);
    }
}

function reset() {
    running = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    lapCount = 1;

    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (running) {
        const lapTime = formatTime(elapsedTime);
        const li = document.createElement("li");
        li.textContent = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById("laps").appendChild(li);
        lapCount++;
    }
}