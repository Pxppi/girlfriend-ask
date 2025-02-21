const yesButton = document.getElementById('yes');
const noButton = document.getElementById('noButton');
const animation = document.getElementById('animation');
const confirmMessage = document.getElementById('confirmMessage');
let noClicks = 0;

yesButton.addEventListener('click', () => {
    animation.style.display = 'block';
    setTimeout(() => {
        animation.style.display = 'none';
        alert("Yay! I'm so happy!");
    }, 3000);
});

noButton.addEventListener('click', () => {
    noClicks++;

    if (noClicks < 3) {
        confirmMessage.textContent = "Are you sure?";
    } else {
        confirmMessage.textContent = "You sure? You really sure?";
        noButton.classList.add("no-grow");
    }

    if (noClicks >= 6) {
        alert("Okay... I will keep waiting until you say yes. 😢");
    }
});
