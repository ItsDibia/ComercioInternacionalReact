import { useState, useEffect } from "react";

// Componente Header con animaciones suaves
export default function Header() {
  const [mostrar, setMostrar] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Activar animaciones después de que el componente se monte
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const visualizarInformacion = () => {
    setMostrar(!mostrar);
  };

  return (
    <div className="overflow-x-hidden">
      <header className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 py-16 text-center text-white relative overflow-hidden">
        {/* Elementos decorativos de fondo con animación */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 transition-all duration-[2000ms] ease-out ${loaded ? 'animate-pulse' : ''}`}></div>
          <div className={`absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40 transition-all duration-[2500ms] ease-out ${loaded ? 'animate-pulse' : ''}`} style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Gradiente animado adicional */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className={`text-5xl md:text-6xl font-bold uppercase tracking-wide mb-6 drop-shadow-lg transition-all duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Guía de Exportación
          </h1>
          
          <button
            onClick={visualizarInformacion}
            className={`bg-white text-blue-800 font-semibold px-8 py-3 rounded-full shadow-lg text-base hover:bg-blue-50 hover:shadow-xl transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{transitionDelay: '0.3s'}}
          >
            {mostrar ? "Ocultar información" : "Información adicional"}
          </button>
        </div>

        {/* Partículas flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white/30 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-float-slow"></div>
        </div>
      </header>

      {mostrar && (
        <section className="bg-gradient-to-br from-gray-50 to-white shadow-2xl border border-gray-100 rounded-3xl max-w-5xl mx-auto mt-12 mb-8 px-10 py-12 transform transition-all duration-700 ease-out animate-slide-down">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 animate-fade-in-up">
              Proyecto Académico
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full animate-expand"></div>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              La exportación de productos como la <span className="font-semibold text-blue-700">joyería artesanal colombiana</span> representa una 
              oportunidad única para pequeños productores que buscan expandir sus oportunidades. 
              Sin embargo, este proceso puede parecer desafiante para quienes no tienen experiencia 
              en comercio internacional.
            </p>
            
            <p className="text-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              A través de una estrategia bien estructurada y una comprensión clara de los requisitos 
              comerciales, arancelarios y logísticos, cualquier productor puede superar estos obstáculos 
              y lograr el <span className="font-semibold text-green-600">éxito en mercados globales</span>.
            </p>
            
            <p className="text-lg animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Este proceso no solo contribuye al crecimiento económico de las pequeñas empresas, sino que 
              también promueve la <span className="font-semibold text-amber-600">cultura y el arte colombiano</span> a nivel mundial.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="text-blue-800 font-medium">
              💡 Esta guía está diseñada para ser tu compañero en el proceso de exportación, 
              proporcionando información práctica y actualizada.
            </p>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        
        @keyframes slide-down {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes expand {
          from { 
            width: 0; 
          }
          to { 
            width: 6rem; 
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        .animate-slide-down {
          animation: slide-down 0.7s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-expand {
          animation: expand 0.8s ease-out;
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}