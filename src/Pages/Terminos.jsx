import TarjetasConLista from "../Components/TarjetasConLista"
import comercioExterior from "../Sets/Terminos"
import Referencias from "../Components/Referencias"

export default function Terminos(){
    return(
        <div>
            <Referencias/>
            <TarjetasConLista datos={comercioExterior}/>
        </div>
    )
};