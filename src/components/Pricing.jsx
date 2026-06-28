import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, CreditCard, Loader2, X } from 'lucide-react';

function PaymentModal({ isOpen, onClose }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-obsidian-light border border-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl relative overflow-hidden"
            >
              <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Pago Exitoso!</h3>
                  <p className="text-gray-400 text-center">Tus tokens han sido acreditados. Comienza tu optimización ahora.</p>
                </div>
              ) : (
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Completar Pago</h3>
                    <p className="text-gray-400 text-sm">Pasarela de pago segura encriptada (Simulada)</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Número de Tarjeta</label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                          type="text"
                          required
                          placeholder="0000 0000 0000 0000"
                          className="w-full bg-obsidian border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Vencimiento</label>
                        <input
                          type="text"
                          required
                          placeholder="MM/AA"
                          className="w-full bg-obsidian border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">CVC</label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          className="w-full bg-obsidian border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-neon focus:ring-1 focus:ring-cyan-neon transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gold hover:bg-gold-light text-obsidian font-bold py-4 rounded-lg transition-colors flex justify-center items-center text-lg mt-8"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin mr-2" />
                        Procesando...
                      </>
                    ) : (
                      "Procesar Pago"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Persona Natural",
      price: "$250.000",
      currency: "COP",
      tokens: "1 Token Standard",
      description: "Ideal para individuos con ingresos laborales o rentas de capital sencillas.",
      features: [
        "Flujo 100% guiado",
        "Liquidación en < 12 horas",
        "Soporte por email",
        "Garantía contra errores matemáticos"
      ],
      highlight: false
    },
    {
      name: "Partners / Contadores",
      price: "$4'500.000",
      currency: "COP",
      tokens: "Bolsa de 25 Tokens",
      description: "La herramienta definitiva para firmas contables y contadores independientes.",
      features: [
        "Marca blanca",
        "Descuento por volumen",
        "Priorización en servidor (VIP)",
        "Panel de gestión de cartera multi-cliente",
        "Soporte prioritario 24/7"
      ],
      highlight: true
    },
    {
      name: "Empresarial",
      price: "$850.000",
      currency: "COP",
      tokens: "1 Token Premium",
      description: "Para Pymes y empresas jurídicas con necesidades de integración directa.",
      features: [
        "Conexión contable directa",
        "Anexos automáticos (F110)",
        "Conciliación bancaria IA",
        "Revisión por experto"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-obsidian-light relative">
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Adquiere tus </span>
            <span className="text-cyan-neon">Tokens</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Paga solo por lo que usas. Adquiere tokens y canjéalos por liquidaciones ultra-rápidas procesadas por nuestra IA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 border flex flex-col h-full ${
                plan.highlight
                  ? 'bg-obsidian border-gold shadow-[0_0_30px_rgba(212,175,55,0.2)] lg:-mt-8 lg:mb-8 z-10'
                  : 'bg-obsidian border-gray-800'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gold text-obsidian text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                    Recomendado
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-cyan-neon font-semibold mb-4">{plan.tokens}</div>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.currency}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-gold' : 'text-cyan-neon'}`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gold text-obsidian hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]'
                    : 'bg-transparent border-2 border-cyan-neon text-cyan-neon hover:bg-cyan-glow'
                }`}
              >
                Comprar Tokens
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
