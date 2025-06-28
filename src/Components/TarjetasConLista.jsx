export default function TarjetasConLista({ datos }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Tarjetas */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(datos).map(([titulo, contenido], index) => (
            <TarjetaSimple key={index} titulo={titulo} contenido={contenido} index={index} />
          ))}
        </section>
      </div>
    </main>
  )
}

function TarjetaSimple({ titulo, contenido, index }) {
  const coloresSutiles = [
    "from-slate-600 to-slate-700",
    "from-gray-600 to-gray-700", 
    "from-blue-700 to-blue-800",
    "from-indigo-700 to-indigo-800",
    "from-slate-700 to-gray-800",
    "from-blue-800 to-slate-800",
  ]

  const colorSeleccionado = coloresSutiles[index % coloresSutiles.length]

  return (
    <article className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Ícono profesional */}
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br ${colorSeleccionado} text-white text-sm font-semibold mb-4 shadow-sm`}
      >
        {index + 1}
      </div>

      {/* Título */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
        {titulo}
      </h2>

      {/* Contenido */}
      <p className="text-gray-600 leading-relaxed text-sm text-justify">
        {contenido}
      </p>

      {/* Línea decorativa sutil */}
      <div className="mt-4 w-12 h-0.5 bg-gray-300 rounded-full"></div>
    </article>
  )
}