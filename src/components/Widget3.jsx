import React from 'react';
import { ShieldCheck, Smartphone, Clock } from 'lucide-react';

const Widget3 = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#333333] mb-12 font-serif">
          Beneficios del SOAT 100% digital
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#f1f4f9] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="bg-white p-4 rounded-full mb-6 shadow-md w-24 h-24 flex items-center justify-center text-[#000066]">
              <ShieldCheck size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#000066] mb-4">Rápido y seguro</h3>
            <p className="text-gray-600">
              Cómpralo en pocos minutos, paga de forma segura y recíbelo al instante en tu correo electrónico.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f1f4f9] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="bg-white p-4 rounded-full mb-6 shadow-md w-24 h-24 flex items-center justify-center text-[#000066]">
              <Smartphone size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#000066] mb-4">Siempre a la mano</h3>
            <p className="text-gray-600">
              Llévalo siempre contigo en tu celular o descárgalo para imprimirlo cuando lo necesites.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f1f4f9] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="bg-white p-4 rounded-full mb-6 shadow-md w-24 h-24 flex items-center justify-center text-[#000066]">
              <Clock size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#000066] mb-4">Tranquilidad 24/7</h3>
            <p className="text-gray-600">
              Cuenta con nuestro respaldo en todo momento. Estamos disponibles para ti cuando más lo necesites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget3;
