import Tarjeta from "../Components/Targeta"

export default function Main() {
  return (
    <div>

      <section className="flex flex-row gap-4 flex-wrap justify-center px-4 py-8">
        <Tarjeta
          titulo="Responsable"
          Contenido="Diego Pérez, estudiante de Administración de Negocios Internacionales con enfoque autodidacta en desarrollo web. Aplica conocimientos de programación para construir soluciones digitales, integrando herramientas modernas como React.js, Tailwind CSS y FastAPI."
        />
        <Tarjeta
          titulo="Objetivo"
          Contenido="Más que un proyecto académico, esta investigación no busca ofrecer una guía detallada para nuevos exportadores. Su verdadera intención es brindar una base introductoria que oriente a las personas interesadas sobre qué aspectos deben investigar en una primera etapa."
        />
        <Tarjeta
          titulo="Tecnología usada en la interfaz"
          Contenido="React.js es una herramienta basada en JavaScript que permite construir sitios web modernos mediante componentes reutilizables, integrando estructura (HTML), diseño (CSS) e interactividad (JS) en un solo flujo. Para el diseño visual, se utilizó Tailwind CSS, un sistema de clases utilitarias que permite estilizar de forma rápida y eficiente directamente desde el HTML."
        />
      </section>
    </div>
  )
}
