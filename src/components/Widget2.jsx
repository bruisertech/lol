import React, { useState } from 'react';

const Widget2 = () => {
  const [activeTab, setActiveTab] = useState('coberturas');

  return (
    <section className="bg-[#f1f4f9] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#333333] mb-12 font-serif">
          Coberturas y tarifas
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Tabs */}
          <div className="lg:w-1/4 flex flex-col space-y-4">
            <button
              onClick={() => setActiveTab('coberturas')}
              className={`p-4 rounded-lg flex items-center shadow-sm transition-colors border-2 ${activeTab === 'coberturas' ? 'bg-white border-[#000066] text-[#000066]' : 'bg-white border-transparent text-[#000066] hover:border-gray-200'}`}
            >
              <div className="w-10 h-10 mr-4 flex items-center justify-center bg-blue-50 rounded-full text-[#000066]">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <span className="font-bold text-lg">Coberturas</span>
            </button>

            <button
              onClick={() => setActiveTab('no_cubre')}
              className={`p-4 rounded-lg flex items-center shadow-sm transition-colors border-2 ${activeTab === 'no_cubre' ? 'bg-white border-[#000066] text-[#000066]' : 'bg-white border-transparent text-[#000066] hover:border-gray-200'}`}
            >
              <div className="w-10 h-10 mr-4 flex items-center justify-center bg-green-500 rounded-full text-white">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="font-bold text-lg">¿Qué NO cubre?</span>
            </button>

            <button
              onClick={() => setActiveTab('tarifas')}
              className={`p-4 rounded-lg flex items-center shadow-sm transition-colors border-2 ${activeTab === 'tarifas' ? 'bg-white border-[#000066] text-[#000066]' : 'bg-white border-transparent text-[#000066] hover:border-gray-200'}`}
            >
              <div className="w-10 h-10 mr-4 flex items-center justify-center bg-blue-50 rounded-full text-[#000066]">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
              </div>
              <span className="font-bold text-lg">Tarifas</span>
            </button>

            <button
              onClick={() => setActiveTab('descuento')}
              className={`p-4 rounded-lg flex items-center shadow-sm transition-colors border-2 ${activeTab === 'descuento' ? 'bg-white border-[#000066] text-[#000066]' : 'bg-white border-transparent text-[#000066] hover:border-gray-200'}`}
            >
              <div className="w-10 h-10 mr-4 flex items-center justify-center bg-blue-50 rounded-full text-[#000066]">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8l-8 8"></path><circle cx="9" cy="9" r="1"></circle><circle cx="15" cy="15" r="1"></circle></svg>
              </div>
              <span className="font-bold text-lg">Descuento de ley</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="lg:w-3/4 bg-white p-8 rounded-lg shadow-sm min-h-[400px]">
            {activeTab === 'coberturas' && (
              <div className="flex flex-col lg:flex-row h-full items-center">
                <div className="lg:w-1/2 pr-8">
                  <p className="text-gray-700 mb-6 text-lg">
                    Con tu SOAT estás protegido en caso de un accidente de tránsito. Estas son las coberturas a las que tienes derecho como conductor, ocupante o peatón:
                  </p>
                  <ul className="space-y-4 text-[#000066] font-semibold">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> Gastos médicos, quirúrgicos, farmacéuticos y hospitalarios hasta por 800 S.M.D.L.V.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> Incapacidad permanente hasta por 180 S.M.D.L.V.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> Muerte y gastos funerarios hasta por 750 S.M.D.L.V.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> Gastos de transporte y movilización de las víctimas hasta por 10 S.M.D.L.V.
                    </li>
                  </ul>
                  <p className="mt-8 text-sm text-blue-700 font-semibold cursor-pointer hover:underline">
                    Para conocer el detalle, te invitamos a consultar el clausulado de SOAT.
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                  <img src="./images/widget_2.1.png" alt="Coberturas" className="max-w-full h-auto object-contain invert-safe" />
                </div>
              </div>
            )}

            {activeTab === 'no_cubre' && (
              <div className="flex flex-col lg:flex-row h-full items-center">
                <div className="lg:w-1/2 pr-8">
                  <p className="text-gray-700 mb-6 text-lg">
                    El SOAT NO cubre los daños patrimoniales causados por un accidente de tránsito, como daños a estructuras o edificaciones, y tampoco la pérdida parcial o total de los vehículos involucrados.
                  </p>
                  <p className="mt-8 text-sm text-blue-700 font-semibold cursor-pointer hover:underline">
                    Para conocer el detalle, te invitamos a consultar el clausulado de SOAT.
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                  <img src="./images/car_icon.png" alt="Qué no cubre" className="max-w-full h-auto object-contain invert-safe" />
                </div>
              </div>
            )}

            {activeTab === 'tarifas' && (
              <div className="flex flex-col lg:flex-row h-full items-center">
                <div className="lg:w-1/2 pr-8">
                   <p className="text-gray-700 mb-6 text-lg">
                     Las tarifas del SOAT están reguladas por la Superintendencia Financiera de Colombia. El valor depende del tipo de vehículo, su cilindraje, modelo y capacidad de pasajeros.
                   </p>
                   <p className="mt-8 text-sm text-blue-700 font-semibold cursor-pointer hover:underline">
                     Consulta aquí el simulador de tarifas vigente.
                   </p>
                </div>
                <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                  <img src="./images/price_icon.png" alt="Tarifas" className="max-w-full h-auto object-contain invert-safe" />
                </div>
              </div>
            )}

            {activeTab === 'descuento' && (
              <div className="flex flex-col lg:flex-row h-full items-center">
                <div className="lg:w-1/2 pr-8">
                   <p className="text-gray-700 mb-6 text-lg">
                     Aprovecha el descuento de ley por buen comportamiento. Si renuevas a tiempo y no has tenido siniestros que afecten la póliza en el último año, podrás acceder a descuentos especiales.
                   </p>
                   <p className="mt-8 text-sm text-blue-700 font-semibold cursor-pointer hover:underline">
                     Verifica si cumples las condiciones para el descuento.
                   </p>
                </div>
                <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                   <img src="./images/discount_icon.png" alt="Descuento" className="max-w-full h-auto object-contain invert-safe" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget2;
