import * as React from "react";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Card(props: {
  icon: React.ComponentType<React.ComponentProps<"svg">> | string;
  title: string;
  description: string;
  link: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5); // default center
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);
  const rotateZ = useMotionValue(0);
  const scale = useMotionValue(1);

  const smoothRotateX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 300, damping: 20 });
  const smoothRotateZ = useSpring(rotateZ, { stiffness: 300, damping: 20 });

  const smoothScale = useSpring(scale, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const handleClick = () => {
    window.open(props.link, "_blank");
  };

  useEffect(() => {
    // every 10s
    setInterval(() => {
      rotateZ.set(90);
      scale.set(0.5);
      setTimeout(() => {
        rotateZ.set(-90);
        scale.set(0.75);
        setTimeout(() => {
          rotateZ.set(0);
          scale.set(1);
        }, 300);
      }, 300);
    }, 3000);
  }, [scale, rotateZ]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        rotateZ: smoothRotateZ,
        scale: smoothScale,
        transformPerspective: 1000,
      }}
      className={props.className}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-md ${typeof props.icon != "string" ? "bg-purple-800" : "bg-white p-1"} text-white`}
      >
        {typeof props.icon == "string" ? (
          <img src={props.icon} />
        ) : (
          <props.icon className="h-5 w-5" />
        )}
      </div>
      <h3 className="mt-3 text-base font-medium text-pink-50">{props.title}</h3>
      <p className="mt-1 text-sm text-purple-200">{props.description}</p>
    </motion.div>
  );
}
