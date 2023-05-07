const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //gets the rendering context allowing manipulation.

function drawCircle(x, y, size) {
  ctx.fillStyle = "black";
  ctx.beginPath(); //starts a path.
  ctx.arc(x, y, size, 0, 2 * Math.PI); //the arc method draws a circle to be rendered.
  ctx.fill(); // method called to render the fillstyle.
}

let x = 50;
let y = 50;
const size = 30;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(x, y, size);
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyW") {
    y -= 10;
  } else if (event.code === "KeyA") {
    x -= 10;
  } else if (event.code === "KeyS") {
    y += 10;
  } else if (event.code === "KeyD") {
    x += 10;
  }
});
