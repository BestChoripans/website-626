const evitarCache = Math.random().toString(36).substring(7);

function recargarEstilos() {
    const enlacesCSS = document.querySelectorAll('link[rel="stylesheet"]');
    enlacesCSS.forEach(enlace => {
        enlace.href = enlace.href.split('?')[0] + '?' + evitarCache;
    });
}

function recargarScripts() {
    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
        script.src = script.src.split('?')[0] + '?' + evitarCache;
    });
}

function recargarAssets() {
    const imagen = document.createElement('img');
    imagen.src = 'logo.png?' + evitarCache;
    document.body.appendChild(imagen);

}

setTimeout(() => {
    recargarEstilos();
    recargarScripts();
    recargarContenido();
    recargarAssets();
}, 2000); 