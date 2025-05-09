document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("animateBox");
    let pos = 0;
    let direction = 1;

    setInterval(function () {
        if (pos > 120 || pos < 0) direction *= -1;
        pos += direction * 3;
        box.style.transform = `translateX(${pos}px)`;
    }, 25);
});
