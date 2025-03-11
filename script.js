document.querySelectorAll('.flip-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.card').classList.toggle('flipped');
        playSound('flip'); // Play flip sound
    });
});

// Adding twinkling star effect
const starContainer = document.querySelector('.stars');
for (let i = 0; i < 100; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    starContainer.appendChild(star);
}

// Sound effect function
function playSound(type) {
    let audio;
    if (type === 'flip') {
        audio = new Audio('flip.mp3'); // Add your own flip sound file
    } else if (type === 'hover') {
        audio = new Audio('hover.mp3'); // Add your own hover sound file
    }
    if (audio) {
        audio.volume = 0.5;
        audio.play();
    }
}

// Add hover sound effect to buttons
document.querySelectorAll('.flip-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        playSound('hover'); // Play hover sound
    });
});
