"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Background.module.css";

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Unique Neural Network Animation
    class NeuralNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      connections: NeuralNode[];
      pulse: number;
      pulseSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.connections = [];
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas!.width, this.x));
        this.y = Math.max(0, Math.min(canvas!.height, this.y));
      }

      draw() {
        const intensity = (Math.sin(this.pulse) + 1) / 2;
        const size = 2 + intensity * 3;

        // Draw node with pulsing glow
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, size, 0, Math.PI * 2);

        const gradient = ctx!.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          size * 3
        );
        gradient.addColorStop(0, `rgba(0, 245, 255, ${0.4 * intensity})`);
        gradient.addColorStop(0.5, `rgba(0, 102, 255, ${0.2 * intensity})`);
        gradient.addColorStop(1, "rgba(0, 245, 255, 0)");

        ctx!.fillStyle = gradient;
        ctx!.fill();

        // Draw connections
        this.connections.forEach((node) => {
          const distance = Math.sqrt(
            (this.x - node.x) ** 2 + (this.y - node.y) ** 2
          );
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3 * intensity;

            ctx!.beginPath();
            ctx!.moveTo(this.x, this.y);
            ctx!.lineTo(node.x, node.y);
            ctx!.strokeStyle = `rgba(0, 245, 255, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();

            // Data pulse along connection
            const pulsePos = (Math.sin(this.pulse * 2) + 1) / 2;
            const pulseX = this.x + (node.x - this.x) * pulsePos;
            const pulseY = this.y + (node.y - this.y) * pulsePos;

            ctx!.beginPath();
            ctx!.arc(pulseX, pulseY, 1, 0, Math.PI * 2);
            ctx!.fillStyle = `rgba(255, 0, 110, ${opacity * 2})`;
            ctx!.fill();
          }
        });
      }
    }

    // Create neural network
    const nodes: NeuralNode[] = [];
    const nodeCount = 25;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new NeuralNode(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    // Connect nodes
    nodes.forEach((node) => {
      const nearbyNodes = nodes.filter((other) => {
        const distance = Math.sqrt(
          (node.x - other.x) ** 2 + (node.y - other.y) ** 2
        );
        return other !== node && distance < 200;
      });
      node.connections = nearbyNodes.slice(0, 3); // Max 3 connections per node
    });

    // Floating geometric shapes
    class FloatingShape {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      vx: number;
      vy: number;
      shape: "triangle" | "square" | "hexagon";
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = 20 + Math.random() * 40;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.shape = ["triangle", "square", "hexagon"][
          Math.floor(Math.random() * 3)
        ] as any;
        this.color = [
          "rgba(0, 245, 255, 0.1)",
          "rgba(0, 102, 255, 0.1)",
          "rgba(255, 0, 110, 0.1)",
        ][Math.floor(Math.random() * 3)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // Wrap around edges
        if (this.x < -this.size) this.x = canvas!.width + this.size;
        if (this.x > canvas!.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas!.height + this.size;
        if (this.y > canvas!.height + this.size) this.y = -this.size;
      }

      draw() {
        ctx!.save();
        ctx!.translate(this.x, this.y);
        ctx!.rotate(this.rotation);
        ctx!.strokeStyle = this.color.replace("0.1", "0.3");
        ctx!.fillStyle = this.color;
        ctx!.lineWidth = 2;

        ctx!.beginPath();
        if (this.shape === "triangle") {
          ctx!.moveTo(0, -this.size / 2);
          ctx!.lineTo(-this.size / 2, this.size / 2);
          ctx!.lineTo(this.size / 2, this.size / 2);
          ctx!.closePath();
        } else if (this.shape === "square") {
          ctx!.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.shape === "hexagon") {
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = (Math.cos(angle) * this.size) / 2;
            const y = (Math.sin(angle) * this.size) / 2;
            if (i === 0) ctx!.moveTo(x, y);
            else ctx!.lineTo(x, y);
          }
          ctx!.closePath();
        }

        ctx!.fill();
        ctx!.stroke();
        ctx!.restore();
      }
    }

    const shapes: FloatingShape[] = [];
    for (let i = 0; i < 8; i++) {
      shapes.push(new FloatingShape());
    }

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Update and draw shapes
      shapes.forEach((shape) => {
        shape.update();
        shape.draw();
      });

      // Update and draw neural network
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.floatingContainer}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.floatingElement}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </>
  );
}
