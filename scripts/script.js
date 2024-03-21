var canvas = document.getElementById('canvas').getContext("2d");
canvas.imageSmoothingEnabled = false;

document.addEventListener("click", function(e){
    changeScene(game);
});

var currentScene = {};
function changeScene(scene) {
    currentScene = scene;
}

var infinityBg = {
    bg: new Obj(0,0,500, 900, "assets/fundo.png"),
    bg2: new Obj(0,-900, 500, 900, "assets/fundo.png"),

    draw(){
        this.bg.draw();
        this.bg2.draw();
    },

    moveBg(){
        this.bg.positionY += 1;
        this.bg2.positionY += 1;
        
        if(this.bg.positionY >= 900) {
            this.bg = 0;
        }
        if(this.bg2.positionY >= 0) {
            this.bg2 = -900;
        }
    },

}

// as cenas passam a ser desenhadas e não apenas um objeto
var menu = {
    
    title: new Text("SPACESHIP"),
    label: new Text("Click to Start"),
    ship: new Obj(220, 800, 60, 50, "assets/nave.png"),

    draw(){
        infinityBg.draw();
        this.title.draw_text(60, "Arial", 80, 300, "white");
        this.label.draw_text(20, "Arial", 200, 450, "white");
        this.ship.draw();
    },
    update(){
        infinityBg.moveBg();
    },
}

var game = {
    
    score: new Text("0"),
    ship: new Obj(220, 800, 60, 50, "assets/nave.png"),

    draw(){
        infinityBg.draw();
        this.score.draw_text(30, "Arial", 40, 40, "white");
        this.ship.draw();
    },
    update(){
        infinityBg.moveBg();
    },

}

var gameOver = {

    score: new Text("0"),

    draw(){
        infinityBg.draw();
        this.score.draw_text(30, "Arial", 40, 40, "white");
    },
    update(){
        infinityBg.moveBg();
    },
}

function main() {
    canvas.clearRect(0,0,500,900);
    currentScene.draw();
    currentScene.update();
    requestAnimationFrame(main);
}

changeScene(menu);
main();