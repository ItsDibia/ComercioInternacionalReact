import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink, FileText, Scale, Calculator, Building, Info } from "lucide-react"

export default function Referencias() {
  const [mostrar, setMostrar] = useState(false)
  const visualizarInformacion = () => {
    setMostrar(!mostrar)
  }

  const referencias = [
    {
      titulo: "Decreto 1165 / 2019",
      url: "https://www.suin-juriscol.gov.co/viewDocument.asp?id=30036618",
      descripcion: "Normativa oficial sobre regulaciones aduaneras",
      icono: <Scale className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      titulo: "Aspectos básicos de Exportación",
      url: "https://www.dian.gov.co/aduanas/Regimen-de-Aduanas/Documents/ABC-Aspectos-basicos-Exportacion.pdf",
      descripcion: "Guía completa para exportadores",
      icono: <FileText className="w-5 h-5" />,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      titulo: "Régimen Sancionatorio y Decomiso",
      url: "https://normograma.dian.gov.co/dian/compilacion/docs/decreto_0920_2023.htm",
      descripcion: "Decreto 0920/2023 - Sanciones y procedimientos",
      icono: <Building className="w-5 h-5" />,
      color: "from-amber-500 to-amber-600"
    },
    {
      titulo: "Consultas Arancel - Muisca",
      url: "https://muisca.dian.gov.co/WebArancel/DefMenuConsultas.faces",
      descripcion: "Sistema oficial de consulta de aranceles",
      icono: <Calculator className="w-5 h-5" />,
      color: "from-purple-500 to-purple-600"
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Botón principal mejorado */}
      <div className="text-center mb-8">
        <button
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 overflow-hidden"
          onClick={visualizarInformacion}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <FileText className="w-5 h-5 relative z-10" />
          <span className="relative z-10">{mostrar ? "Ocultar Referencias" : "Mostrar Referencias"}</span>
          {mostrar ? <ChevronUp className="w-5 h-5 relative z-10" /> : <ChevronDown className="w-5 h-5 relative z-10" />}
        </button>
      </div>

      {/* Contenido de referencias con animación mejorada */}
      <div
        className={`transition-all duration-700 ease-in-out ${
          mostrar ? "max-h-[2000px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-8"
        } overflow-hidden`}
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header mejorado */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 px-6 sm:px-10 py-8 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Referencias Oficiales</h3>
              </div>
              <p className="text-blue-100 text-lg max-w-2xl">
                Documentos y recursos oficiales para comercio internacional en Colombia
              </p>
            </div>
          </div>

          {/* Grid de referencias mejorado */}
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {referencias.map((ref, index) => (
                <a
                  key={index}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 rounded-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradiente de fondo al hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" 
                       style={{background: `linear-gradient(135deg, rgb(59, 130, 246), rgb(147, 51, 234))`}}></div>
                  
                  <div className="relative p-6">
                    <div className="flex items-start gap-4">
                      {/* Icono con gradiente */}
                      <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${ref.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <div className="text-white">{ref.icono}</div>
                      </div>
                      
                      {/* Contenido */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-2 text-lg mb-2">
                          <span className="line-clamp-2">{ref.titulo}</span>
                          <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {ref.descripcion}
                        </p>
                        
                        {/* Indicador visual */}
                        <div className="mt-3 flex items-center gap-2 text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>Visitar recurso</span>
                          <div className="w-4 h-px bg-blue-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Información adicional mejorada */}
            <div className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-100">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Información Importante</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Aquí encontrarás <span className="font-semibold text-blue-700">decretos oficiales</span>, guías básicas de exportación y herramientas del gobierno colombiano para consultar aranceles. Estos recursos son esenciales si estás aprendiendo sobre comercio internacional o preparando documentación para exportar.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-blue-700 font-medium">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Todos los enlaces son fuentes oficiales verificadas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}