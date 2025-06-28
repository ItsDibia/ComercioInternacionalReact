import TarjetasConLista from "../Components/TarjetasConLista"
import empaqueEtiquetado from "../Sets/EmbalajeEtiquetado"

export default function EmbalajeEtiquetado(){
    return(
        <div>

            <TarjetasConLista datos={empaqueEtiquetado}/>
        </div>
    )
};