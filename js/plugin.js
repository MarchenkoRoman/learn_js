const  buttons = document.querySelectorAll('[data-time]');

const timer = (function () {

    let countdown,
        timerDisplay,
        endTime,
        alarmSound;

    function init(settings) {
        timerDisplay = document.querySelector(settings.timeLeftSelector);
        endTime = document.querySelector(settings.timeEndSelector);

        if (settings.alarmSound) {
            alarmSound = new Audio(settings.alarmSound);
        }
    }

    function start(seconds) {

    }

    function displayTimeLeft(seconds) {

    }

    function displayEndTime(timestamp) {

    }

    function stop() {

    }

    function playSound() {

    }

    return {
        init,
        start,
        stop
    }

}());

timer.init({
    timeLeftSelector: '.display__timer-left',
    timeEndSelector: '.display__end-time',
    alarmSound: 'audio/Serbsky.mp3'
});

function startTimer(e) {
    const seconds = parseInt(this.dataset.time);
    console.log(seconds);
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));