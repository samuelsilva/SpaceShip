class Obj{
    frame = 0;
    timer = 0;
    set_visible = true;

    constructor(positionX, positionY, width, height, image){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw(){
        if(this.set_visible) {
            var img = new Image();
            img.src = this.image;
            canvas.drawImage(img, this.positionX, this.positionY, this.width, this.height);
        }
    }

    animation(speed, limit, name){
        this.timer += 1;
        if(this.timer >= speed) {
            this.timer = 0;
            this.frame += 1;
        }

        if(this.frame >= limit) {
            this.frame = 0;
        }

        this.image = "assets/images/" + name + this.frame + ".png";
    }

    collide(obj) {
        if (this.positionX < obj.positionX +obj.width &&
            this.positionX + this.width > obj.positionX &&
            this.positionY < obj.positionY +obj.height &&
            this.positionY + this.height > obj.positionY) 
        {
            return true;
        }else {
            //console.log("NÃO colidiu");
            return false;
        }
    }
}

class Text{
    text = "";

    constructor(text){
        this.text = text;
    }

    draw_text(size, font, posicaoX, posicaoY, color){
        canvas.font = size + "px" + " " + font;
        canvas.fillStyle = color;
        canvas.fillText(this.text, posicaoX, posicaoY);
    }
}

class Shoot extends Obj{
    move(){
        this.positionY -= 10;
    }
}

class Meteors extends Obj{
    move(){
        this.positionY += 10;
    }
}