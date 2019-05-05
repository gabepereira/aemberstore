window.onload = function() {
    load();
}

function load() {
    getProductBySlug();
}

function getProductBySlug() {
    let hash = window.location.hash;
    console.log(hash);
}