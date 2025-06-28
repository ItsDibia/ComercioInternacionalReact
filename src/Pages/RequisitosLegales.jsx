import TarjetasConLista from "../Components/TarjetasConLista"
import requisitosExportacion from "../Sets/RequisitosLegales"

export default function RequisitosLegales(){
    return(
        <div>

            <TarjetasConLista datos={requisitosExportacion}/>
        </div>
    )
};