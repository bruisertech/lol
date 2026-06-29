import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, UploadCloud, Trash2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';

export default function ClientPanel() {
  const [profile, setProfile] = useState('natural'); // 'natural', 'empresa', 'contador'

  // States for dynamic forms
  const [ingresos, setIngresos] = useState([{ id: 1, name: 'Salario / Honorarios', amount: 5000000 }]);
  const [inversiones, setInversiones] = useState([{ id: 1, name: 'Acciones / CDTs', amount: 2000000 }]);
  const [cuentas, setCuentas] = useState([{ id: 1, name: 'Ahorros / Corriente', amount: 15000000 }]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Helper to add field
  const addField = (setter, defaultName) => {
    setter(prev => [...prev, { id: Date.now(), name: defaultName, amount: 0 }]);
  };

  // Helper to remove field
  const removeField = (setter, id) => {
    setter(prev => prev.filter(item => item.id !== id));
  };

  // Helper to update field
  const updateField = (setter, id, key, value) => {
    setter(prev => prev.map(item => item.id === id ? { ...item, [key]: value } : item));
  };

  // Calculate totals for charts
  const totalIngresos = ingresos.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const totalInversiones = inversiones.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
  const totalCuentas = cuentas.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

  const chartData = [
    { name: 'Ingresos', value: totalIngresos, color: '#00f3ff' },
    { name: 'Inversiones', value: totalInversiones, color: '#D4AF37' },
    { name: 'Cuentas', value: totalCuentas, color: '#8884d8' },
  ].filter(item => item.value > 0);

  const formatCurrency = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(val);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 4000);
    }, 2000);
  }

  // Component for rendering dynamic sections
  const DynamicSection = ({ title, data, setter, defaultName, color }) => (
    <div className="bg-obsidian rounded-xl p-6 border border-gray-800 relative overflow-hidden group hover:border-gray-700 transition-colors">
      <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: color }}></div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <button
          onClick={() => addField(setter, defaultName)}
          className="text-xs flex items-center space-x-1 bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-md transition-colors"
        >
          <Plus className="w-3 h-3" />
          <span>Añadir Otro</span>
        </button>
      </div>
      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, scale: 0.95, margin: 0 }}
              transition={{ duration: 0.2 }}
              className="flex space-x-3 items-center origin-top"
            >
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateField(setter, item.id, 'name', e.target.value)}
                className="w-5/12 bg-obsidian-light border border-gray-700 rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-colors"
                placeholder="Descripción"
              />
              <div className="relative w-6/12">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                <input
                  type="number"
                  value={item.amount || ''}
                  onChange={(e) => updateField(setter, item.id, 'amount', e.target.value)}
                  className="w-full bg-obsidian-light border border-gray-700 rounded-lg py-2.5 pl-7 pr-3 text-sm text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-colors font-mono"
                  placeholder="Monto"
                />
              </div>
              <button
                onClick={() => removeField(setter, item.id)}
                className="w-1/12 flex justify-center text-gray-600 hover:text-red-400 transition-colors"
                title="Eliminar"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <section id="simulator" className="py-24 bg-obsidian relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Simulador de </span>
            <span className="text-cyan-neon">Perfil Financiero</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Configura tu panorama contable y observa cómo la IA procesa y estructura tu declaración en tiempo real.
          </p>
        </motion.div>

        {/* Profile Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-obsidian-light p-1.5 rounded-xl inline-flex space-x-1 border border-gray-800 shadow-lg">
            {['empresa', 'natural', 'contador'].map((p) => (
              <button
                key={p}
                onClick={() => setProfile(p)}
                className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 capitalize ${
                  profile === p
                    ? 'bg-gradient-to-r from-cyan-glow to-cyan-neon/20 text-white border border-cyan-neon/50 shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800 border border-transparent'
                }`}
              >
                Soy {p}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Column: Forms */}
          <div className="xl:col-span-7 space-y-6">
            <DynamicSection title="Ingresos Declarables" data={ingresos} setter={setIngresos} defaultName="Nuevo Ingreso" color="#00f3ff" />
            <DynamicSection title="Inversiones y Activos" data={inversiones} setter={setInversiones} defaultName="Nueva Inversión" color="#D4AF37" />
            <DynamicSection title="Saldos en Cuentas Bancarias" data={cuentas} setter={setCuentas} defaultName="Nueva Cuenta" color="#8884d8" />

            {/* Document Upload */}
            <div className="bg-obsidian-light rounded-xl p-8 border border-gray-800 border-dashed text-center group transition-all duration-300 hover:border-cyan-neon/50 hover:bg-obsidian">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-obsidian flex items-center justify-center group-hover:bg-cyan-glow/20 transition-colors border border-gray-800 group-hover:border-cyan-neon/30">
                  {uploadSuccess ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </motion.div>
                  ) : (
                    <UploadCloud className={`w-8 h-8 ${isUploading ? 'text-cyan-neon animate-bounce' : 'text-gray-400 group-hover:text-cyan-neon transition-colors'}`} />
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Adjuntar Facturas Electrónicas (XML/ZIP)</h3>
              <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                Arrastra tus documentos o haz clic para subirlos masivamente. Nuestra IA extraerá y clasificará los datos al instante para conciliarlos con tus ingresos.
              </p>
              <button
                onClick={handleUpload}
                disabled={isUploading || uploadSuccess}
                className="bg-gray-800 hover:bg-gray-700 disabled:opacity-50 text-white px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border border-gray-700 hover:border-gray-500"
              >
                {isUploading ? 'Procesando con IA Motor Tributario...' : uploadSuccess ? '¡Facturas Extraídas con Éxito!' : 'Examinar Archivos'}
              </button>
            </div>
          </div>

          {/* Right Column: Visualizations & CTA */}
          <div className="xl:col-span-5 h-full">
            <motion.div
              layout
              className="bg-obsidian-light rounded-2xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden h-full flex flex-col sticky top-24"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-glow opacity-10 blur-[80px] pointer-events-none rounded-full"></div>

              <h3 className="text-2xl font-bold text-white mb-2">Análisis Patrimonial</h3>
              <p className="text-sm text-gray-400 mb-8">Clasificación en tiempo real basada en la información proporcionada para perfil: <span className="text-cyan-neon font-semibold capitalize">{profile}</span>.</p>

              <div className="h-[300px] mb-8 w-full">
                {chartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={110}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip
                        formatter={(value) => formatCurrency(value)}
                        contentStyle={{ backgroundColor: '#171717', border: '1px solid #33', borderRadius: '8px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500 border border-dashed border-gray-800 rounded-xl">
                    Ingresa datos para visualizar tu patrimonio
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-10 bg-obsidian p-5 rounded-xl border border-gray-800">
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Total Ingresos</span>
                  <span className="font-mono text-white text-sm">{formatCurrency(totalIngresos)}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Total Activos/Inversiones</span>
                  <span className="font-mono text-white text-sm">{formatCurrency(totalInversiones + totalCuentas)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-300 font-semibold">Patrimonio Bruto Estimado</span>
                  <span className="font-mono font-bold text-cyan-neon text-lg">{formatCurrency(totalIngresos + totalInversiones + totalCuentas)}</span>
                </div>
              </div>

              <div className="mt-auto">
                <button className="w-full bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-obsidian font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center justify-center space-x-3 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  <ShieldCheck className="w-6 h-6 group-hover:text-obsidian transition-colors z-10" />
                  <span className="z-10 group-hover:text-obsidian transition-colors">Solicitar Revisión Contador - 1 Token</span>
                </button>
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Nuestros expertos auditarán y firmarán tu declaración en &lt; 2h.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
