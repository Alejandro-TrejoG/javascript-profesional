self.addEventListener("install", event => {
    event.waitUntil(precache())
})

self.addEventListener("fetch", event => {
    const request = event.request;

    // Evaluamos si el metodo de la peticion es GET
    if (request.method !== "GET") {
        return
    }

    // Buscamos en cache si esta la peticion
    event.respondWith(cachedResponse(request))

    // Actualizar el cache
    event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open("v1")
    cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open("v1")
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open("v1")
    const response = await fetch(request)
    return response.status === 200
        ? cache.put(request, response)
        : new Promise((resolve, reject) => resolve(':D'));
}