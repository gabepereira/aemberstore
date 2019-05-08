const api = 'https://warm-caverns-31460.herokuapp.com/';
const home = 'https://aemberstore.com';

let aember = {

    load: () => {

    },

    loadToken: (token) => {
        console.log(token);
    },

    createToken: (data) => {
        console.log(data);
        if (data.storage == 'local') {
            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.name);
        } else if (data.storage == 'session') {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('name', data.name);
        }
    }
}