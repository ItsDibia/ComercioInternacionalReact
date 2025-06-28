import TarjetasConLista from "../Components/TarjetasConLista"
import datosAnalisisDeMercado from "../Sets/MercadosInternacionales"

export default function MercadosInternacionales(){
    return(
        <div>

            <TarjetasConLista datos={datosAnalisisDeMercado}/>
        </div>
    )
};