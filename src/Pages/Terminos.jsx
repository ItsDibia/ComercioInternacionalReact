import TarjetasConLista from "../Components/TarjetasConLista"
import comercioExterior from "../Sets/Terminos"

export default function Terminos(){
    return(
        <div>

            <TarjetasConLista datos={comercioExterior}/>
        </div>
    )
};