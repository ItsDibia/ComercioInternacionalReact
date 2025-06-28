import TarjetasConLista from "../Components/TarjetasConLista"
import documentosExportacion from "../Sets/Documentacion"

export default function Documentacion(){
    return(
        <div>

            <TarjetasConLista datos={documentosExportacion}/>
        </div>
    )
};