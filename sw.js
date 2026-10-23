const CACHE='kusakari-icons-v2.8';
const ICONS=['./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(self.skipWaiting())});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('kusakari-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 // Always request latest HTML/manifest from network. Do not show stale app versions.
 if(req.mode==='navigate'||req.url.endsWith('manifest.webmanifest')){event.respondWith(fetch(req));return;}
 if(ICONS.some(x=>new URL(x,self.registration.scope).href===req.url)){
  event.respondWith(fetch(req).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy));return res}).catch(()=>caches.match(req)));return;
 }
});
