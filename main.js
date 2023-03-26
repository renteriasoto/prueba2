if('serviceWorker' in navigator)
{
    console.log("puedes usar el service worker");

    navigator.serviceWorker.registers('./sw.js')
    .then(res=>console.log('SW cargando correctamente',res))
    .catch(err => console.log('service worker no se a podido registrar',err));
}