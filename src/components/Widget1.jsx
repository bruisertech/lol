import React from 'react';

const Widget1 = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-white">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img src="./images/widget_1.png" alt="Información SOAT" className="w-full h-auto rounded-lg invert-safe" />
        </div>
        <div className="lg:w-1/2 lg:pl-16">
          <h2 className="text-4xl font-bold text-[#000066] mb-6 font-serif">
            ¿Qué es el SOAT?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            El <strong>SOAT</strong> (Seguro Obligatorio de Accidentes de Tránsito) es un seguro que garantiza los recursos que faciliten la atención médica oportuna de todas las personas (conductor, ocupantes del vehículo, pasajeros o peatones) que resulten lesionadas en un accidente de tránsito en el territorio nacional.
          </p>
          <button className="bg-[#000066] text-white px-8 py-3 rounded-full hover:bg-[#000088] transition-colors font-semibold text-lg shadow-md">
            Comprar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Widget1;
