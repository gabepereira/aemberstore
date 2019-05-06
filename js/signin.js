window.onload = () => {
    load();
}

let load = () => {
    let email = document.getElementById('email');
    let password = document.getElementById('pass');
    let btn = document.getElementById('signin-btn');
    let result = document.getElementById('result');

    btn.addEventListener('click', function(e) {
        authCustomer(
            email.value,
            password.value
        ).then(function(response) {
            console.log(response);
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('name', response.data.name);
            window.location = home;
        }).catch(function(e) {
            // authentication failure
            console.log(e);
            result.classList.remove('none');
            result.innerHTML = 'Error: ' + e;
        });
    });
}

let authCustomer = async (email, password) => {
    let response;
    await fetch(api + 'customer/auth/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(async function(data) {
        response = await data.json();
    }).catch(function(e) {
        error(e);
    });
    return response;
}