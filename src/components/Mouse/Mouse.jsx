"use client";
import React, { useEffect, useRef } from "react";

const Mouse = () => {
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorOutline = cursorOutlineRef.current;

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      {/* div of cursor flower dot */}
      <div className="cursor-outline bg-indigo-600 h-6 w-6" id="cursor-outline" ref={cursorOutlineRef}></div>
    </div>
  );
};

export default Mouse;
