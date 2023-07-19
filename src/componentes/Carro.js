import { Component } from "react";
import '../estilos/producto.css';
import BubbleAlert from './BubbleAlert';

class Carro extends Component {
    render(){
        const { carro } = this.props;
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
                <button className="carro">
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro;
