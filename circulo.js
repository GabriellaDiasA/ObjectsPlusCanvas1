import { canvas, c } from "./canvas.js";

export let circulo = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    velx: 5,
    vely: 5,
    color: "rgb(50,0,50)",

    draw: function(){
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        c.fill();
        c.closePath();
    },

    update: function(){
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0) this.velx = -this.velx;
        if(this.y + this.radius > canvas.height || this.y - this.radius < 0) this.vely = -this.vely;
        this.x += this.velx;
        this.y += this.vely;
        this.draw();
    }
}