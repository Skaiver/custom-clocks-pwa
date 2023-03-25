import HtmlClock from "./classes/HtmlClock.js";
import TimeHelper from "./helper/TimeHelper.js";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/sw.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

const timeHelper = new TimeHelper();

const clock = new HtmlClock("Berlin", true);


const utcOffsetForOhio = timeHelper.getOffsetForPlaceInTime("ohio");
const clock2 = new HtmlClock("Ohio", false, utcOffsetForOhio);

const utcOffsetForLondon = timeHelper.getOffsetForPlaceInTime("london");
const clock3 = new HtmlClock("London", false, utcOffsetForLondon);

let clocks = [clock, clock2, clock3];


document.querySelectorAll('.clock-actions input').forEach((el) => {
    if (el.getAttribute("name") === "hours") {
        // update clock - how's the time in X hours?
        clocks.forEach((clock) => {

        });
    }
});