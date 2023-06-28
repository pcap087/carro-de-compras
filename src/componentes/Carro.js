import { Component } from "react";
import '../estilos/producto.css';
import BubbleAlert from './BubbleAlert';

class Carro extends Component {
    render(){
        return (
            <div>
                <span className="bubble">
                    <BubbleAlert value={10}/>
                </span>
                <button className="carro">
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro;
