const CELL_SIZE = 30;
const FIELD_SIZE = 30;

var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

const mouse = getMouse(canvas);

drawGrid();

const game = new Game();

function clearCanvas() {
   canvas.width |= 0;
}

function drawGrid() {
   context.strokeStyle = "blue";
   context.lineWidth = 0.5;

   for (let i = 0; i < canvas.width / CELL_SIZE; i++) {
      context.beginPath();
      context.moveTo(i * CELL_SIZE, 0);
      context.lineTo(i * CELL_SIZE, canvas.height);
      context.stroke();
   }

   for (let i = 0; i < canvas.height / CELL_SIZE; i++) {
      context.beginPath();
      context.moveTo(0, i * CELL_SIZE);
      context.lineTo(canvas.width, i * CELL_SIZE);
      context.stroke();
   }

   context.lineWidth = 2;
   context.strokeStyle = "red";

   context.beginPath();
   context.moveTo(0, 75);
   context.lineTo(canvas.width, 75);
   context.stroke();
}
