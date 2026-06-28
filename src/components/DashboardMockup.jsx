import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { dashboardMockData } from '../mockData';

export default function DashboardMockup() {
  return (
    <section id="dashboard" className="py-24 bg-obsidian relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Rendimiento en </span>
            <span className="text-cyan-neon">Tiempo Real</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nuestro Motor Tributario automatizado procesa y optimiza cargas impositivas masivas al instante.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-obsidian-light rounded-2xl border border-gray-800 p-6 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow background for the dashboard */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-cyan-glow opacity-20 blur-[100px] pointer-events-none"></div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-obsidian rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-gray-400 text-sm uppercase tracking-wider mb-2">Tiempo de liquidación</span>
              <span className="text-4xl font-bold text-white">4.2<span className="text-xl text-cyan-neon">h</span></span>
            </div>
            <div className="bg-obsidian rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-gray-400 text-sm uppercase tracking-wider mb-2">Ahorro Promedio</span>
              <span className="text-4xl font-bold text-gold">18<span className="text-xl">%</span></span>
            </div>
            <div className="bg-obsidian rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-gray-400 text-sm uppercase tracking-wider mb-2">Errores Detectados</span>
              <span className="text-4xl font-bold text-green-400">0</span>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-obsidian rounded-xl p-6 border border-gray-800 h-[400px]">
            <h3 className="text-lg font-semibold mb-6 text-gray-300">Comparativa: Impuesto Tradicional vs Optimizado por IA</h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={dashboardMockData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTradicional" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorOptimizado" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f3ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00f3ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="name" stroke="#666" tick={{ fill: '#999' }} />
                <YAxis stroke="#666" tick={{ fill: '#999' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#171717', borderColor: '#333', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="tradicional" stroke="#8884d8" fillOpacity={1} fill="url(#colorTradicional)" name="Impuesto Tradicional" />
                <Area type="monotone" dataKey="optimizado" stroke="#00f3ff" fillOpacity={1} fill="url(#colorOptimizado)" name="Optimizado por IA" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
