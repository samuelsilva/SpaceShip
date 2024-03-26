var canvas = document.getElementById('canvas').getContext("2d");
canvas.imageSmoothingEnabled = false;

document.addEventListener("click", function(e){
    if(currentScene.click) {
        currentScene.click();
    }
});

document.addEventListener("mousemove", function(e){
    if(currentScene.moveShip) {
        currentScene.moveShip(e);
    }
});

var currentScene = {};
function changeScene(scene) {
    currentScene = scene;
};

var groupShoot = [];
var shoots = {
    draw(){
        groupShoot.forEach((shoot) =>{
            shoot.draw();
        });
    },
    update(){
        groupShoot.forEach((shoot) =>{
            shoot.move();

            if(shoot.positionY <= -100) {
                groupShoot.splice(shoot[0],1);
            }
        });
    },
};

var groupMeteors = [];
var meteors = {
    time: 0,
    spawMeteors() {
        this.time += 1;
    
        if(this.time >= 60) {
            groupMeteors.push(new Meteors(0,0,50,50, "assets/meteoro.png"));
            this.time = 0;
        }
    },   

    draw(){
        groupMeteors.forEach((meteor)=>{
            meteor.draw();
        });
    },
    update(){
        this.spawMeteors();
        groupMeteors.forEach((meteor)=>{
            meteor.move();


        });
    },
};


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

};

// as cenas passam a ser desenhadas e não apenas um objeto
var menu = {
    
    title: new Text("SPACESHIP"),
    label: new Text("Click to Start"),
    ship: new Obj(220, 800, 60, 50, "assets/nave.png"),

    click() {
        changeScene(game);
    },
    draw(){
        infinityBg.draw();
        this.title.draw_text(60, "Arial", 80, 300, "white");
        this.label.draw_text(20, "Arial", 200, 450, "white");
        this.ship.draw();
    },
    update(){
        infinityBg.moveBg();
    },
};

var game = {
    
    score: new Text("0"),
    ship: new Obj(220, 800, 60, 50, "assets/nave.png"),

    moveShip(event) {
        this.ship.positionX = event.offsetX - this.ship.width / 2;
        this.ship.positionY = event.offsetY - 30;
    },
    click(){
        groupShoot.push(new Shoot(this.ship.positionX + 29,this.ship.positionY,2,10, "assets/tiro.png")); // add items to group
    },
    draw(){
        infinityBg.draw();
        this.score.draw_text(30, "Arial", 40, 40, "white");
        this.ship.draw();
        shoots.draw();
        meteors.draw();

    },
    update(){
        infinityBg.moveBg();
        shoots.update();
        meteors.update();
    },

};

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