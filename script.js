// Toggle menu on small screens
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const hero = document.querySelector('.hero');
const images = ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D', 
'https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D', 
'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D']; // Add your image URLs here
let index = 0;

function changeBackground() {
    hero.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change images every 5 seconds (adjust as needed)

function plusSlides(n) {
    index += n;
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    hero.style.backgroundImage = `url('${images[index]}')`;
}