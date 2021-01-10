import { canvas, c } from "./canvas.js";
import { circulo } from "./circulo.js";
import "./events.js";

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    circulo.update();
}

animate();