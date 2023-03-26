const CACHE_NAME = 'vi_cache_JRSPWA';

var urlsToCache= 

[
    './',
    './android/android-launchericon-48-48.png',
    './android/android-launchericon-72-72.png',
    './android/android-launchericon-96-96.png',
    './ios/16.png',
    './ios/20.png',
    './ios/29.png',
    './ios/29.png',
    './windows11/LargeTile.scale-100.png',
    './windows11/LargeTile.scale-125.png',
    './windows11/LargeTile.scale-150.png'

];

self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(Cache=>{
            return Cache.addAll(urisToCache)
            .then(()=>{
                self.skipWaiting();

            })
        })
        .catch(err => console.log("No se aregistrado el cache",err))

    );
});

self.addEventListener('activate',e =>{
    const cacheWhitelist = [CACHE_NAME];


    e.waitUntil(
        caches.keys()
        .then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhitelist.indexOf(cahceName)== -i)
                    {   //borrar elementos que no se necesitan
                        return cacheName.delete(cacheName);
                    }
                })
            );
        })
        .then(()=>{
            self.clients.claim(); //activa la cache del dispositivo
        })
    )
})

self.addEventListener('fetch', e =>{
    e.respondWith(
        cache.match(e.request)
        .then(res =>{
            if (res) { //devuelve datos desde cache
                return res;
            }
            return fetch(e.request); //hago peticion al servidor en caso de que no este
        })
    )
})