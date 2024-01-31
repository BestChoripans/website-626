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

function recargarContenido() {
    fetch('nuevo_contenido.html?' + evitarCache)
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html;
        })
        .catch(error => console.error('Error al cargar el nuevo contenido:', error));
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