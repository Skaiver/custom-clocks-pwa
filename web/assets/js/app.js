import HtmlClock from "./classes/HtmlClock.js";
import TimeHelper from "./helper/TimeHelper.js";

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/sw.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

const timeHelper = new TimeHelper();

const berlin = new HtmlClock("Berlin", true);


const utcOffsetForOhio = timeHelper.getOffsetForPlaceInTime("ohio");
const ohio = new HtmlClock("Ohio", false, utcOffsetForOhio);

const utcOffsetForLondon = timeHelper.getOffsetForPlaceInTime("london");
const london = new HtmlClock("London", false, utcOffsetForLondon);

let clocks = [berlin, ohio, london];


document.querySelectorAll('.clock-actions input').forEach((el) => {
    if (el.getAttribute("name") === "hours") {
        // update clock - how's the time in X hours?
        el.addEventListener('change', (ev) => {
            let hours = el.value;
            console.log("changing clocks:", hours)
            clocks.forEach((clock) => {
                console.log(clock)
                clock.clearHoursOnTop();
                clock.forwardHours(hours);
            });
        })
    }
});


