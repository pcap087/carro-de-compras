import { Component } from 'react';
import Producto from './Producto';
import '../estilos/producto.css';

class Productos extends Component {
    render(){
        const { agregarProducto, productos} = this.props

        return (
            <div className='list-products'>
                {productos.map(producto => 
                    <Producto
                        agregarProducto = {agregarProducto}
                        key = {producto.nombre}
                        producto = {producto}
                    />)}
            </div>
        )
    }
}

export default Productos;