window.onload = () => {
    load();
}

let load = () => {
    let input = {
    email: document.getElementById('email'),
    password: document.getElementById('password')};
    let btn = document.getElementById('signin-btn')

    for (let i in input) {
        input[i].addEventListener('focus', function() {
            input[i].classList.remove('error');
        });
    }

    btn.addEventListener('click', function() {
        auth.signIn(input.email, input.password)
        .then(function(errors) {
            if (!errors) window.location = home;
            else {
                for (let i = 0; i < errors.length; i++) {
                    for (let j = 0; j < errors[i].item.length; j++) {
                        let item = errors[i].item[j];
                        if (item == 'email') input.email.classList.add('error');
                        else input.password.classList.add('error');
                    }
                }
            }
        }).catch(function(e) {
            console.log(e);
        });
    });
}

let auth = {

    signIn: async (email, password) => {
        let errors;
        await auth.authCustomer(
            email.value,
            password.value
        ).then(function(response) {
            if (!response || response.status) 
                errors = response.errors;
            else {
                aember.createToken({
                    token: response.token,
                    name: response.data.name,
                    storage: 'local'
                });
            }
        }).catch(function(e) {
            console.log(e);
        });
        return errors;
    },

    signUp: () => {

    },

    logOut: () => {

    },

    authCustomer: async (email, password) => {
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
            console.log(e);
        });
        return response;
    }
}