let header = {

    loadEvent: () => {
        let menuDown = document.getElementById('menu-down');
        menuDown.addEventListener('click', function() {
            console.log(this);
        });
    },

    loadToken: () => {
        if (!aember.storageToken('local')) return;
        else {
            let authBox = document.getElementById('auth-wrapper');
            let tokenName = document.getElementById('token-name');
            let menuDown = document.getElementById('menu-down');
            authBox.classList.add('none');
            tokenName.classList.remove('none');
            tokenName.innerHTML = aember.storageName('local').toUpperCase();
            menuDown.classList.remove('none');
        }
    }
}