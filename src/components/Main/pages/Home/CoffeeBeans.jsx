
import { useEffect, useState } from "react";

function CoffeeBeans({ src, className = "", style = {}, alt = "", speed = 170, range = 15 }) {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        let newOffset = prevOffset + direction;
        if (newOffset > range || newOffset < -range) {
          setDirection(-direction);
        }
        return newOffset;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [direction, range, speed]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ transform: `translateY(${offset}px)`, ...style }}
    />
  );
}

export default CoffeeBeans;

