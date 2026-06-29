import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function NeuralNetwork(props) {
  const ref = useRef();

  const [positions, setPositions] = useState(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function TypewriterText({ text }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-neon to-gold">{displayedText}</span>;
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 1452;
    const step = 25; // Speed of counting
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return <span className="font-mono text-cyan-neon font-bold">{count.toLocaleString()}</span>;
}

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <NeuralNetwork />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            <TypewriterText text="El motor tributario inteligente que optimiza tu tiempo y tus impuestos" />
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-10 text-xl md:text-2xl text-gray-300">
            <span>Declaraciones procesadas con éxito hoy:</span>
            <div className="bg-obsidian-light px-4 py-2 rounded-lg border border-cyan-glow shadow-[0_0_15px_rgba(0,243,255,0.2)]">
               <Counter />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
             <a href="#pricing" className="px-8 py-4 bg-gold text-obsidian font-bold rounded-full hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] text-lg">
                Comprar Tokens
             </a>
             <a href="#dashboard" className="px-8 py-4 bg-transparent border-2 border-cyan-neon text-cyan-neon font-bold rounded-full hover:bg-cyan-glow transition-all duration-300 text-lg">
                Ver Simulación
             </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-obsidian to-transparent z-10"></div>
    </section>
  );
}
