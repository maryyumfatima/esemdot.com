import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-all duration-150 ease-out"
      style={{
        left: mousePosition.x - 40,
        top: mousePosition.y - 40,
        width: '80px',
        height: '80px',
        transform: `scale(${isHovering ? 1.5 : 0.5})`,
        background: `radial-gradient(
          circle,
          rgba(255, 255, 255, ${isHovering ? 0.2 : 0.12}) 0%,
          rgba(255, 255, 255, ${isHovering ? 0.1 : 0.06}) 40%,
          transparent 70%
        )`,
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50%',
        backdropFilter: 'blur(2px)',
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CustomCursor;