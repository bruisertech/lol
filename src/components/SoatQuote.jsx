import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle2 } from 'lucide-react';

const SoatQuote = () => {
  const [placa, setPlaca] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  // Formatter for currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const calculateTariff = (vehicleTypeStr, engineSizeStr, registrationYear) => {
    const year = parseInt(registrationYear) || 2026;
    const age = 2026 - year;
    const engineSize = parseInt(engineSizeStr) || 0;
    const type = (vehicleTypeStr || '').toLowerCase();

    let category = "AUTOS FAMILIARES";
    if (type.includes("moto")) category = "MOTOS";
    else if (type.includes("camioneta") || type.includes("campero") || type.includes("suv")) category = "CAMPEROS Y CAMIONETAS";
    else if (type.includes("carga") || type.includes("furgon") || type.includes("camion")) category = "CARGA O MIXTO";

    let basePrice = 0;

    if (category === "MOTOS") {
      if (engineSize < 100) basePrice = 256200; // Assuming 'Ciclomotor' 124100 needs explicit 'ciclomotor' keyword, so defaulting <100 to 256200
      else if (engineSize >= 100 && engineSize <= 200) basePrice = 343300;
      else if (engineSize > 200) basePrice = 761400;
      else basePrice = 343300; // fallback
      // 140/150 MOTOS Motocarros/tricimoto/cuadriciclos/5 pas: 386.900 ignored for simple logic unless explicit
    }
    else if (category === "CAMPEROS Y CAMIONETAS") {
      if (engineSize < 1500) {
        basePrice = age < 10 ? 792800 : 953000;
      } else if (engineSize >= 1500 && engineSize <= 2500) {
        basePrice = age < 10 ? 946600 : 1121400;
      } else {
        basePrice = age < 10 ? 1110300 : 1274000;
      }
    }
    else if (category === "CARGA O MIXTO") {
      // Tons are tricky from engineSize (cc), we approximate or use defaults if tonnage not directly available.
      // The API often doesn't give precise tonnage in CC field. We'll use a middle ground or safest default if tonnage is missing.
      // Assuming missing tonnage = Menos de 5 toneladas (888.400)
      basePrice = 888400;
    }
    else {
      // AUTOS FAMILIARES
      if (engineSize < 1500) {
        basePrice = age < 10 ? 447300 : 592900;
      } else if (engineSize >= 1500 && engineSize <= 2500) {
        basePrice = age < 10 ? 544700 : 677400;
      } else {
        basePrice = age < 10 ? 636000 : 754300;
      }
    }

    return basePrice;
  };

  const handleQuote = async (e) => {
    e.preventDefault();
    if (!placa || !cedula || !correo) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`https://www.regcheck.org.uk/api/reg.asmx/CheckColombia?RegistrationNumber=${placa}&username=sadbot666`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, "text/xml");

      const vehicleJsonNode = xmlDoc.getElementsByTagName("vehicleJson")[0];

      if (!vehicleJsonNode || !vehicleJsonNode.textContent) {
        throw new Error("Invalid XML structure");
      }

      const vehicleData = JSON.parse(vehicleJsonNode.textContent);

      if (!vehicleData || !vehicleData.Description) {
         throw new Error("Vehicle not found");
      }

      const year = vehicleData.RegistrationYear;
      const make = vehicleData.CarMake.CurrentTextValue;
      const model = vehicleData.CarModel.CurrentTextValue;
      const cc = vehicleData.EngineSize.CurrentTextValue;
      const type = vehicleData.VehicleType || vehicleData.Description || '';

      const basePrice = calculateTariff(type, cc, year);
      const discountAmount = basePrice * 0.12;
      const finalPrice = basePrice - discountAmount;

      // Save to global variables for future payment integration as requested
      window.soatQuoteData = {
         placa,
         cedula,
         correo,
         finalPrice
      };

      setResult({
        make,
        model,
        year,
        cc,
        basePrice,
        finalPrice
      });

    } catch (err) {
      console.error("Error fetching vehicle data:", err);
      setError("No pudimos recuperar la información. Verifica la placa o intenta más tarde comunícate al 3004444444");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f1f4f9] py-12">
      <div className="container mx-auto px-4 max-w-4xl">

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-[#000066] mb-8 font-serif">
            Cotiza y Compra tu SOAT
          </h2>

          <form onSubmit={handleQuote} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Placa del Vehículo</label>
              <input
                type="text"
                value={placa}
                onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                placeholder="Ej: ABC123"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#000066] focus:border-transparent outline-none uppercase font-semibold transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Cédula de Ciudadanía</label>
              <input
                type="text"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                placeholder="Ej: 1020304050"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#000066] focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="correo@ejemplo.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#000066] focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div className="md:col-span-3 flex justify-center mt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#000066] hover:bg-blue-900 text-white font-bold text-lg py-4 px-12 rounded-full shadow-md transition-all flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                     Consultando...
                  </>
                ) : (
                  <>
                    <Search className="mr-2" size={24} />
                    Cotizar SOAT
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg flex items-start animate-fade-in">
              <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={24} />
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Results Area */}
          {result && (
            <div className="mt-8 border-t border-gray-100 pt-8 animate-fade-in">

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center justify-center">
                 <CheckCircle2 className="text-green-600 mr-2" size={20} />
                 <p className="text-green-800 font-semibold text-center">
                    Vehículo encontrado exitosamente
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Vehicle Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-[#000066] mb-4 border-b pb-2">Datos del Vehículo</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between"><span className="text-gray-600">Marca:</span> <span className="font-semibold text-gray-900">{result.make}</span></li>
                    <li className="flex justify-between"><span className="text-gray-600">Modelo:</span> <span className="font-semibold text-gray-900">{result.model}</span></li>
                    <li className="flex justify-between"><span className="text-gray-600">Año:</span> <span className="font-semibold text-gray-900">{result.year}</span></li>
                    <li className="flex justify-between"><span className="text-gray-600">Cilindraje:</span> <span className="font-semibold text-gray-900">{result.cc} cc</span></li>
                  </ul>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-[#000066] text-sm font-semibold text-center">
                      Inicio vigencia: <span className="font-bold">*** (Disponible después del pago)</span> y fin vigencia igual.
                    </p>
                  </div>
                </div>

                {/* Price Details */}
                <div className="bg-white rounded-xl p-6 border-2 border-[#000066] shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden">
                   <div className="absolute top-0 right-0 bg-red-600 text-white font-bold py-1 px-4 rounded-bl-xl text-sm transform">
                     OFERTA
                   </div>

                   <h3 className="text-gray-500 font-medium mb-1">Precio Oficial SOAT</h3>
                   <p className="text-xl text-gray-400 line-through font-semibold mb-4">
                     {formatCurrency(result.basePrice)}
                   </p>

                   <div className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full mb-4 inline-block text-sm">
                     ¡Descuento especial 12%!
                   </div>

                   <h3 className="text-gray-800 font-bold text-lg mb-1">Precio Final a Pagar</h3>
                   <p className="text-4xl md:text-5xl font-extrabold text-[#000066]">
                     {formatCurrency(result.finalPrice)}
                   </p>

                   <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full w-full transition-colors">
                      Continuar al Pago
                   </button>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default SoatQuote;
