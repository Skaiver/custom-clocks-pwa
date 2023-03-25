const technicalPwaName = "custom-international-clocks-pwa";
const assets = [
    "/",
    "/index.html",
    "/assets/css/style.css",
    "/assets/js/app.js",
    // fonts
    "/assets/fonts/nunito/nunito-v25-latin-300.eot",
    "/assets/fonts/nunito/nunito-v25-latin-300.svg",
    "/assets/fonts/nunito/nunito-v25-latin-300.ttf",
    "/assets/fonts/nunito/nunito-v25-latin-300.woff",
    "/assets/fonts/nunito/nunito-v25-latin-300.woff2",
    "/assets/fonts/nunito/nunito-v25-latin-500.eot",
    "/assets/fonts/nunito/nunito-v25-latin-500.svg",
    "/assets/fonts/nunito/nunito-v25-latin-500.ttf",
    "/assets/fonts/nunito/nunito-v25-latin-500.woff",
    "/assets/fonts/nunito/nunito-v25-latin-500.woff2",
    "/assets/fonts/nunito/nunito-v25-latin-700.eot",
    "/assets/fonts/nunito/nunito-v25-latin-700.svg",
    "/assets/fonts/nunito/nunito-v25-latin-700.ttf",
    "/assets/fonts/nunito/nunito-v25-latin-700.woff",
    "/assets/fonts/nunito/nunito-v25-latin-700.woff2",
    "/assets/fonts/nunito/nunito-v25-latin-regular.eot",
    "/assets/fonts/nunito/nunito-v25-latin-regular.svg",
    "/assets/fonts/nunito/nunito-v25-latin-regular.ttf",
    "/assets/fonts/nunito/nunito-v25-latin-regular.woff",
    "/assets/fonts/nunito/nunito-v25-latin-regular.woff2"
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