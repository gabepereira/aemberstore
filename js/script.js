const api = 'https://warm-caverns-31460.herokuapp.com/';
const home = 'https://aemberstore.com';

let aember = {

    load: () => {

    },

    storageToken: (storage) => {
        let token;
        if (storage == 'local') token = localStorage.getItem('token');
        else if (storage == 'session') token = sessionStorage.getItem('token');
        else console.log('Error. Invalid command.');
        return token;
    },

    storageName: (storage) => {
        let name;
        if (storage == 'local') name = localStorage.getItem('name');
        else if (storage == 'session') name = sessionStorage.getItem('name');
        else console.log('Error. Invalid command.');
        return name;
    },

    createToken: (data) => {
        console.log(data);
        if (data.storage == 'local') {
            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.name);
        } else if (data.storage == 'session') {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('name', data.name);
        } else {
            console.log('Error on creating token.');
        }
    }
}