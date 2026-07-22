import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create twinkling stars
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.4,
      alpha: Math.random(),
      speed: Math.random() * 0.012 + 0.003,
      color: Math.random() > 0.4 ? '#B794F4' : Math.random() > 0.5 ? '#67E8F9' : '#FFFFFF',
    }));

    // Create subtle flower petals floating in cosmic space
    const petals = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height + height,
      size: Math.random() * 6 + 4,
      speedY: Math.random() * 0.4 + 0.2,
      speedX: Math.sin(Math.random() * Math.PI) * 0.3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.8,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.1) {
          star.speed = -star.speed;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fillStyle = star.color;
        ctx.shadowBlur = star.radius * 4;
        ctx.shadowColor = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Render floating flower petals
      petals.forEach((petal) => {
        petal.y -= petal.speedY;
        petal.x += Math.sin(petal.y * 0.005) * 0.5;
        petal.rotation += petal.rotationSpeed;

        if (petal.y < -20) {
          petal.y = height + 20;
          petal.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate((petal.rotation * Math.PI) / 180);
        ctx.globalAlpha = petal.alpha;
        ctx.fillStyle = '#F9A8D4'; // Rose bloom petal color

        // Draw soft petal shape
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-petal.size, -petal.size * 1.5, -petal.size * 1.2, -petal.size * 2.5, 0, -petal.size * 3);
        ctx.bezierCurveTo(petal.size * 1.2, -petal.size * 2.5, petal.size, -petal.size * 1.5, 0, 0);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Midnight background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090B1A] via-[#0D102A] to-[#090B1A]" />
      
      {/* Soft radial nebula glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#B794F4]/15 via-[#F9A8D4]/10 to-[#67E8F9]/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#B794F4]/10 blur-[100px] rounded-full" />

      {/* Canvas for dynamic stars and flower petals */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default StarBackground;
