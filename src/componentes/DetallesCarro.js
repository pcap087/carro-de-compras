import { Component } from "react";
import '../estilos/producto.css';

class DetallesCarro extends Component {
    render(){
        const { carro } = this.props;
        console.log(carro);
        return (
            <div className="detalleCarro">
                <ul className="ul-det-carro">
                    {carro.map(x => 
                        <li key={x.nombre} className="li-det-carro">
                            <img alt={x.nombre} src={x.img} width='50' height='35'/>
                            {x.nombre} <span>{x.cantidad}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro;