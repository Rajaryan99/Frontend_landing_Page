// creating the menu button
const navbar = document.querySelector('.navbar .container');
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<span></span><span></span><span></span>';

// Insert after logo
document.querySelector('.logo').after(menuToggle);

// Toggle menu on click
menuToggle.onclick = function() {
    this.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
};