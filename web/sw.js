const technicalPwaName = "custom-international-clocks-pwa";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/img/coffee1.jpg",
    "/img/coffee2.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(technicalPwaName).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})