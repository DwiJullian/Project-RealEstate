//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
}); 

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

// selection price
function selectPrice() {
    const buttons = document.querySelectorAll('.btn')
    
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('btn-active')
            })
            this.classList.add('btn-active')
        })
    })
}

function selectBuild() {
    const buildings = document.querySelectorAll('.bld')
    
    buildings.forEach(function(bld) {
        bld.addEventListener('click', function() {
            buildings.forEach(function(bld) {
                bld.classList.remove('building-active')
            })
            this.classList.add('building-active')
        })
    })
}


   
