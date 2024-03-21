var canvas = document.getElementById('canvas').getContext("2d");

document.addEventListener("click", function(e){});

function draw() {}

function update() {}

function main() {
    canvas.clearRect(0,0,500,900);
    draw();
    update();
    requestAnimationFrame(main);
}

main();