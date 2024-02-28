import "./Bookactions.css"
import { Rating } from '@mui/material';
 
function Bookactions() {
    return (
        <div id="bookactions">
            <img id="bookcover" src="https://m.media-amazon.com/images/I/8129HX+5JGL._AC_UF1000,1000_QL80_.jpg"/>
            <div id="actions">
                <p><em>Quer ler essa obra?</em></p>
                <button id="addToList">Adicionar à lista</button>
                <p>Já leu? Avalie-a!</p>
                <span id="rating">
                    <Rating name="rating" size="large" defaultValue={2.5} precision={0.5}/>
                </span>
            </div>

        </div>
    )
}

export default Bookactions;