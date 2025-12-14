import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  Scale,
  Calculator,
  Building,
  Info,
} from "lucide-react"

export default function Referencias() {
  const [mostrar, setMostrar] = useState(false)

  const referencias = [
    {
      titulo: "Decreto 1165 / 2019",
      url: "https://www.suin-juriscol.gov.co/viewDocument.asp?id=30036618",
      descripcion: "Regulaciones aduaneras vigentes en Colombia",
      icono: <Scale className="w-5 h-5" />,
    },
    {
      titulo: "Aspectos básicos de Exportación",
      url: "https://www.dian.gov.co/aduanas/Regimen-de-Aduanas/Documents/ABC-Aspectos-basicos-Exportacion.pdf",
      descripcion: "Guía básica para exportadores",
      icono: <FileText className="w-5 h-5" />,
    },
    {
      titulo: "Régimen Sancionatorio y Decomiso",
      url: "https://normograma.dian.gov.co/dian/compilacion/docs/decreto_0920_2023.htm",
      descripcion: "Decreto 0920 de 2023",
      icono: <Building className="w-5 h-5" />,
    },
    {
      titulo: "Consulta Arancelaria – MUISCA",
      url: "https://muisca.dian.gov.co/WebArancel/DefMenuConsultas.faces",
      descripcion: "Consulta oficial de aranceles",
      icono: <Calculator className="w-5 h-5" />,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Botón */}
      <div className="text-center mb-6">
        <button
          onClick={() => setMostrar(!mostrar)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          <FileText className="w-5 h-5" />
          {mostrar ? "Ocultar referencias" : "Mostrar referencias"}
          {mostrar ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      {/* Contenido */}
      {mostrar && (
        <div className="bg-white border rounded-2xl shadow-sm">
          {/* Header */}
          <div className="border-b px-6 py-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Referencias oficiales
            </h3>
            <p className="text-sm text-gray-600">
              Fuentes oficiales para comercio internacional en Colombia
            </p>
          </div>

          {/* Lista */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {referencias.map((ref, i) => (
              <a
                key={i}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50 transition"
              >
                <div className="text-blue-600">{ref.icono}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 flex items-center gap-1">
                    {ref.titulo}
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </h4>
                  <p className="text-sm text-gray-600">
                    {ref.descripcion}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Nota */}
          <div className="border-t px-6 py-4 flex gap-3 bg-gray-50">
            <Info className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-700">
              Todos los enlaces corresponden a entidades oficiales del gobierno colombiano.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
