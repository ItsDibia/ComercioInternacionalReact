import { Link } from "react-router-dom";

export default function NavBar() {
  const menuItems = [
    { nombre: "Requisitos Legales", path: "/" }, // ahora la vista principal
    { nombre: "Mercados Internacionales", path: "/mercados-internacionales" },
    { nombre: "Documentación", path: "/documentacion" },
    { nombre: "Medios de Transporte", path: "/medios-de-transporte" },
    { nombre: "Embalaje y Etiquetado", path: "/embalaje-etiquetado" },
    { nombre: "Impuestos y Aranceles", path: "/impuestos" },
    { nombre: "Distribución y Recepción", path: "/distribucion-recepcion" },
    { nombre: "Directorio de Términos", path: "/terminos" },
    { nombre: "Comportamiento de Mercados", path: "/comportamiento-mercado" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex flex-wrap justify-center gap-6 px-6 py-4">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className="text-sm font-semibold text-gray-700 relative cursor-pointer transition-all duration-300 hover:text-blue-700 group"
          >
            <Link to={item.path}>
              {item.nombre}
              <span className="absolute -top-2 left-0 w-full h-1 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 rounded-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
