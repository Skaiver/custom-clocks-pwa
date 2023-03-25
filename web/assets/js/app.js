import StorageHelper from "./helper/StorageHelper.js";
import Clock from "./classes/Clock.js";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/sw.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

const domElement = document.querySelector('#clock');
const clock = new Clock(domElement, "Germany", true);

setInterval(() => {
    clock.refresh();
}, 1000);


// document.querySelector("nav li[data-app-action='home']").addEventListener("click", showCoffees)
// document.querySelector("nav li[data-app-action='new-entry']").addEventListener("click", showEntryForm)

// const storageHelper = new StorageHelper();
// storageHelper.getReports();
// storageHelper.saveReport({date: "2023-03-20", "content": "a"});
// storageHelper.getReports();
