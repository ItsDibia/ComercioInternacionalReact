import TarjetasConLista from "../Components/TarjetasConLista"
import impuestosYAranceles from "../Sets/ImpuestosAranceles"

export default function Impuestos(){
    return(
        <div>

            <TarjetasConLista datos={impuestosYAranceles}/>
        </div>
    )
};