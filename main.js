import { canvas, c } from "./canvas.js";
import { circulo } from "./circulo.js";
import "./events.js";


// Módulos não funcionam em arquivos locais por causa de uma tal de CORS policy. Use Live Server pelo VSCode!
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    circulo.update();
}

animate();