import TarjetasConLista from "../Components/TarjetasConLista"
import logisticaInternacional from "../Sets/DistribucionRecepcion"

export default function DistribucionRecepcion(){
    return(
        <div>

            <TarjetasConLista datos={logisticaInternacional}/>
        </div>
    )
};