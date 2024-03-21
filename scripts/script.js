var canvas = document.getElementById('canvas').getContext("2d");

document.addEventListener("click", function(e){});

var currentScene = {};
function changeScene(scene) {
    currentScene = scene;
}

// as cenas passam a ser desenhadas e não apenas um objeto
var menu = {
    draw(){},
    update(){},
}

var game = {
    draw(){},
    update(){},

}


function main() {
    canvas.clearRect(0,0,500,900);
    currentScene.draw();
    currentScene.update();
    requestAnimationFrame(main);
}

changeScene(menu);
main();