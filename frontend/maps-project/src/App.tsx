import Canvas from "./Canvas";

function App() {
  function draw(context: CanvasRenderingContext2D, frameCount: number) {
    context.fillStyle = "blue";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    context.beginPath();
    context.arc(100, 75, 50, 0, 2 * Math.PI);
    context.stroke();
  }

  return <Canvas width={500} height={500} draw={draw} />;
}

export default App;
