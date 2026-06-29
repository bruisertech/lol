import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { contadorMockData, flowMockData } from '../mockData';
import { CheckCircle2, Clock, FileText } from 'lucide-react';

function TiltCard({ children, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className={`w-full ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full bg-obsidian-light rounded-2xl border border-gray-800 p-8 shadow-xl transition-all duration-200 ease-out flex flex-col"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function CountdownClock() {
  const [timeLeft, setTimeLeft] = useState(12 * 60 * 60); // 12 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center space-x-2 text-cyan-neon font-mono text-xl mt-4 bg-obsidian p-3 rounded-lg border border-gray-800">
      <Clock className="w-5 h-5" />
      <span>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}

export default function Profiles() {
  return (
    <section id="profiles" className="py-24 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Soluciones a tu </span>
            <span className="text-gold">Medida</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Elige tu perfil y descubre cómo nuestro Motor Tributario se adapta a tus necesidades específicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Persona Natural */}
          <TiltCard>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">Persona Natural</h3>
              <p className="text-gray-400 mb-6 h-12">Declaración de renta optimizada y guiada paso a paso.</p>

              <div className="bg-obsidian rounded-xl p-4 border border-gray-800 mb-6">
                <div className="flex justify-between text-sm mb-2 text-gray-300">
                  <span>Progreso del flujo</span>
                  <span className="text-cyan-neon">85%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-glow to-cyan-neon h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <span className="text-sm text-gray-400">Garantía de entrega en menos de:</span>
                  <CountdownClock />
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Contador / Firma */}
          <TiltCard className="md:-mt-8"> {/* Slight offset for the middle card */}
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gold">Soy Contador / Firma</h3>
                <span className="bg-gold text-obsidian text-xs font-bold px-2 py-1 rounded">PRO</span>
              </div>
              <p className="text-gray-400 mb-6 h-12">Gestiona múltiples clientes y automatiza la descarga de borradores DIAN.</p>

              <div className="bg-obsidian rounded-xl p-4 border border-gray-800 h-48 flex flex-col justify-center items-center">
                <h4 className="text-sm text-gray-300 mb-2">Estado de Cartera (50 Clientes)</h4>
                <div className="w-full h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={contadorMockData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={50}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {contadorMockData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <RechartsTooltip
                        contentStyle={{ backgroundColor: '#171717', border: 'none', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Empresa (Jurídica) */}
          <TiltCard>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">Empresa (Jurídica)</h3>
              <p className="text-gray-400 mb-6 h-12">Integración de balances y conciliación automática del Formulario 110.</p>

              <div className="bg-obsidian rounded-xl p-4 border border-gray-800 mb-6 space-y-3">
                {flowMockData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                    className={`flex items-center p-3 rounded-lg border ${
                      item.status === 'done' ? 'border-green-500/30 bg-green-500/10' :
                      item.status === 'active' ? 'border-cyan-neon/30 bg-cyan-neon/10' :
                      'border-gray-800 bg-obsidian-light'
                    }`}
                  >
                    {item.status === 'done' ? <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> :
                     item.status === 'active' ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}><Clock className="w-5 h-5 text-cyan-neon mr-3" /></motion.div> :
                     <FileText className="w-5 h-5 text-gray-500 mr-3" />}
                    <span className={item.status === 'active' ? 'text-white' : 'text-gray-400'}>{item.step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
