let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) { // Puedes ajustar el valor según necesites
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});


  document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('.hamb-btn').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
});

// También cierra el menú si se hace clic en el overlay
document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
});

