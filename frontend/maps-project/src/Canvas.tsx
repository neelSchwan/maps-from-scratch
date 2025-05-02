import { useRef, useEffect } from "react";

// we need an interaface to make typescript happy
interface CanvasProps {
  width: number;
  height: number;
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
}

export default function Canvas({ width, height, draw }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  let frameCount = 0;
  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");

      if (context) {
        context.canvas.height = height;
        context.canvas.width = width;

        frameRef.current = requestAnimationFrame(() =>
          draw(context, frameCount)
        );
      }
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, [draw]);

  return <canvas ref={canvasRef} />;
}
