import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComportamientoMercado from "./Pages/ComportamientoMercado";
import DistribucionRecepcion from "./Pages/DistribucionRecepcion";
import Documentacion from "./Pages/Documentacion";
import EmbalajeEtiquetado from "./Pages/EmbalajeEtiquetado";
import IdentificacionMercados from "./Pages/IdentificacionMercados";
import Impuestos from "./Pages/Impuestos";
import MediosDeTransporte from "./Pages/MediosDeTransporte";
import MercadosInternacionales from "./Pages/MercadosInternacionales";
import RequisitosLegales from "./Pages/RequisitosLegales";
import Terminos from "./Pages/Terminos";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        {/* Vista principal ahora es Requisitos Legales */}
        <Route path="/" element={<RequisitosLegales />} />
        <Route path="/distribucion-recepcion" element={<DistribucionRecepcion />} />
        <Route path="/documentacion" element={<Documentacion />} />
        <Route path="/embalaje-etiquetado" element={<EmbalajeEtiquetado />} />
        <Route path="/identificacion-mercados" element={<IdentificacionMercados />} />
        <Route path="/impuestos" element={<Impuestos />} />
        <Route path="/medios-de-transporte" element={<MediosDeTransporte />} />
        <Route path="/mercados-internacionales" element={<MercadosInternacionales />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/comportamiento-mercado" element={<ComportamientoMercado />} />
      </Routes>
    </BrowserRouter>
  );
}
