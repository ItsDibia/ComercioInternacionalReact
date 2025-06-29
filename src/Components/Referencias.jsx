import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, ExternalLink, FileText, Scale, Calculator, Building } from "lucide-react"

export default function Referencias() {
  const [mostrar, setMostrar] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const visualizarInformacion = () => {
    setMostrar(!mostrar)
  }

  useEffect(() => {
    alert("¡Consiga más información en estas referencias!")
    setLoaded(true)
  }, [])

  const referencias = [
    {
      titulo: "Decreto 1165 / 2019",
      url: "https://www.suin-juriscol.gov.co/viewDocument.asp?id=30036618",
      descripcion: "Normativa oficial sobre regulaciones aduaneras",
      icono: <Scale className="w-5 h-5" />,
    },
    {
      titulo: "Aspectos básicos de Exportación",
      url: "https://www.dian.gov.co/aduanas/Regimen-de-Aduanas/Documents/ABC-Aspectos-basicos-Exportacion.pdf",
      descripcion: "Guía completa para exportadores",
      icono: <FileText className="w-5 h-5" />,
    },
    {
      titulo: "Régimen Sancionatorio y Decomiso",
      url: "https://normograma.dian.gov.co/dian/compilacion/docs/decreto_0920_2023.htm",
      descripcion: "Decreto 0920/2023 - Sanciones y procedimientos",
      icono: <Building className="w-5 h-5" />,
    },
    {
      titulo: "Consultas Arancel - Muisca",
      url: "https://muisca.dian.gov.co/WebArancel/DefMenuConsultas.faces",
      descripcion: "Sistema oficial de consulta de aranceles",
      icono: <Calculator className="w-5 h-5" />,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Botón principal */}
      <div className="text-center">
        <button
          className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          onClick={visualizarInformacion}
          style={{ transitionDelay: "0.2s" }}
        >
          <FileText className="w-5 h-5" />
          {mostrar ? "Ocultar Referencias" : "Mostrar Referencias"}
          {mostrar ? (
            <ChevronUp className="w-5 h-5 transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-5 h-5 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Contenido de referencias */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          mostrar ? "max-h-screen opacity-100 transform translate-y-0" : "max-h-0 opacity-0 transform -translate-y-4"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              Referencias Oficiales
            </h3>
            <p className="text-gray-600 mt-2">Documentos y recursos oficiales para comercio internacional</p>
          </div>

          {/* Grid de referencias */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {referencias.map((ref, index) => (
                <a
                  key={index}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white group-hover:bg-blue-100 rounded-lg shadow-sm transition-colors duration-300">
                      <div className="text-blue-600 group-hover:text-blue-700">{ref.icono}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300 flex items-center gap-2">
                        {ref.titulo}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{ref.descripcion}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Información adicional */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Información Importante</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Aquí puedes encontrar decretos, guías básicas de exportación y herramientas oficiales para consultar
                    aranceles. Estas fuentes son útiles si estás aprendiendo comercio internacional o preparando
                    documentación para exportar. Todos los enlaces te llevarán a sitios oficiales del gobierno
                    colombiano.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
