import { canvas, c } from "./canvas.js";

export let updateSize =  window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})   