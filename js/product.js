window.onload = function() {
    load();
}

function load() {
    getProductBySlug();
}

function getProductBySlug() {
    let slug = (window.location.search.split('?'))[1];
    console.log(slug);

    if (!slug) {
        console.log('i dont see slug');
    } else {
        let product = fetch(api + 'product/' + slug, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then(function(data) {
            return data;
        }) 
        .catch(function(e) {
            console.log(e);
        });
    
        product.then(function(data) {
            createCase(data);
        }).catch(function(e) {
            console.log(e);
        });
    }
}

function createCase(data) {
    let product_name = document.getElementById('product-name');
    let description = document.getElementById('description');
    let price = document.getElementById('price');

    product_name.innerHTML = data.title;
    description.innerHTML = data.description;
    price.innerHTML = 'R$' + data.price;
}