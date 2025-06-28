export default function Tarjeta({ titulo, Contenido }) {
  return (
    <section className="bg-white shadow-lg max-w-md w-full m-4 rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl">
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-4">
        <h1 className="text-center text-white text-lg font-semibold uppercase tracking-wide">
          {titulo}
        </h1>
      </div>
      
      <div className="p-6">
        <p className="text-slate-700 text-justify leading-relaxed text-sm">
          {Contenido}
        </p>
      </div>
    </section>
  );
}