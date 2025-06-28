import TarjetasConLista  from "../Components/TarjetasConLista"
import mediosTransporte from "../Sets/MediosTransporte"

export default function MEdiosTransporte(){
    return(
        <div>

            <TarjetasConLista datos={mediosTransporte}/>
        </div>
    )
};