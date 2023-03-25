import TimeHelper from "../helper/TimeHelper.js";

export default class HtmlClock {
    constructor(clockName = "My Clock", twentyFourHourSystem = true, offsetToUTC) {
        this.twentyFourHourSystem = twentyFourHourSystem;
        this.clockName = clockName;
        this.offsetToUTC = offsetToUTC;
        this.buildHtml();
        this.addClockToDom();

        if (offsetToUTC) {
            this.timeHelper = new TimeHelper();
        }

        return setInterval(() => {
            this.render();
        }, 1000);
    }

    buildHtml() {
        this._domElement = document.createElement('div');
        this._domElement.classList.add("clock-wrapper");
        this._domElement.classList.add("col-12");
        this._domElement.classList.add("col-md-6");

        const clockHeading = document.createElement('h3');
        clockHeading.classList.add('heading');
        clockHeading.innerText = this.clockName;

        const clockDiv = document.createElement('div');
        clockDiv.classList.add('clock');

        this._domElement.append(clockHeading);
        this._domElement.append(clockDiv);
    }

    get getTime() {
        let date;
        if (this.offsetToUTC) {
            date = this.timeHelper.calcTime('ohio', this.offsetToUTC);
        } else {
            date = new Date();
        }

        console.log(this.hoursOnTop)

        if(this.hoursOnTop) {
            date = date.addHours(this.hoursOnTop);
        }

        let h = date.getHours(); // 0 - 23
        let m = date.getMinutes(); // 0 - 59
        let s = date.getSeconds(); // 0 - 59

        let session = "";
        if (!this.twentyFourHourSystem) {
            session = "AM";
            if (h == 0) {
                h = 12;
            }

            if (h > 12) {
                h = h - 12;
                session = "PM";
            }
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        let time = h + ":" + m + ":" + s;
        if (!this.twentyFourHourSystem){
            time += " " + session;
        }
        return time;


    }


    refresh() {
        const time = this.getTime;
        this.domClock.innerText = time;
        this.domClock.textContent = time;
    }

    forwardHours(hours){
        this.hoursOnTop = hours;
        console.log("bep")
    }

    get domClock() {
        return this._domElement.querySelector('.clock');
    }

    render() {
        this.refresh();
    }

    addClockToDom() {
        document.querySelector('.clocks.container .row').append(this._domElement);
    }

    clearHoursOnTop() {
        this.hoursOnTop = undefined;
    }
}