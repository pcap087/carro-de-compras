import { Component } from "react";
import '../estilos/producto.css';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro.js';

class Carro extends Component {
    render(){
        const { carro, esCarroVisible, mostrarCarroBtn} = this.props;
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)

        return (
            <div>
                <span className="bubble">
                    {/* render condicional */}
                    {cantidad !== 0 
                        ?  <BubbleAlert value={cantidad}/>
                        : null
                    }
                </span>
                <button 
                    onClick={mostrarCarroBtn} 
                    className="carro">
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro} /> : null }
            </div>
        )
    }
}

export default Carro;
