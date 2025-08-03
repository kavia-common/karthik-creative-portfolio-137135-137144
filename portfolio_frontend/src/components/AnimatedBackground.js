import React, { useEffect, useRef } from "react";

// PUBLIC_INTERFACE
// SVG/CANVAS-based moving blobs background
function AnimatedBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let blobs = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);
    resize();

    // Blobs params
    blobs = Array(7)
      .fill(0)
      .map((_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 60 + Math.random() * 90,
        dx: (Math.random() - 0.5) * 0.9,
        dy: (Math.random() - 0.5) * 0.8,
        color:
          i % 2 === 0
            ? "rgba(36,128,215,0.10)"
            : "rgba(251,133,0,0.14)",
      }));

    function animate() {
      ctx.clearRect(0, 0, width, height);

      blobs.forEach((b, idx) => {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
        ctx.fillStyle = b.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="animated-bg-canvas"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}

export default AnimatedBackground;
