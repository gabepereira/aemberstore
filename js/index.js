window.onload = function() {
    load();
}

function load() {
    aember.loadToken(localStorage.getItem('token'));
    recentProducts(api);
}

function recentProducts(api) {
    let product = fetch(api + 'product/', {
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
        Array.prototype.forEach.call(data, function(e, i) {
            createProductItem(e);
        });
    }).catch(function(e) {
        console.log(e);
    });
}

let createProductItem = (data) => {
    let a = document.createElement('a');
    let product_img = document.createElement('div');
    let product_info = document.createElement('div');
    let product_name = document.createElement('div');

    let dev = '.html'
    a.href = window.location + 'product' + dev + '?' + data.slug;

    product_name.innerHTML = data.title;

    a.classList.add('product');
    product_img.classList.add('product-img');
    product_info.classList.add('product-info');
    product_name.classList.add('product-name');

    product_info.appendChild(product_name);
    a.append(product_img, product_info);
    document.getElementById('product-wrapper').appendChild(a);
}

let aember = {

    load: () => {

    },

    loadToken: (token) => {
        console.log(token);
    }
}