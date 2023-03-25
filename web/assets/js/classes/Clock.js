export default class Clock {
    constructor(domElement, name = "My Clock", twentyFourHourSystem = true) {
        this.twentyFourHourSystem = twentyFourHourSystem;
        this.domElement = domElement;
        console.log(domElement)
    }

    get getTime() {
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59

        if (!this.twentyFourHourSystem) {
            var session = "AM";
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

        var time = h + ":" + m + ":" + s;
        if (!this.twentyFourHourSystem) time += " " + +session;
        return time;
    }

    refresh() {
        const time = this.getTime;
        this.domElement.innerText = time;
        this.domElement.textContent = time;
    }
}