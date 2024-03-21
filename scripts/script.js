var canvas = document.getElementById('canvas').getContext("2d");
canvas.imageSmoothingEnabled = false;

document.addEventListener("click", function(e){
    changeScene(game);
});

var currentScene = {};
function changeScene(scene) {
    currentScene = scene;
}

// as cenas passam a ser desenhadas e não apenas um objeto
var menu = {
    
    bg: new Obj(0,0,500, 900, "assets/fundo.png"),
    title: new Text("SPACESHIP"),

    draw(){
        this.bg.draw();
        this.title.draw_text(40, "Arial", 145, 450, "white");
    },
    update(){},
}

var game = {
    
    bg: new Obj(0,0,500, 900, "assets/fundo.png"),
    score: new Text("0"),
    ship: new Obj(220, 800, 60, 50, "assets/nave.png"),

    draw(){
        this.bg.draw();
        this.score.draw_text(30, "Arial", 40, 40, "white");
        this.ship.draw();
    },
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