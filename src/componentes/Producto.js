import { Component } from 'react';
import Button from './Button';
import '../estilos/producto.css';

class Producto extends Component{
    render(){
        const {producto, agregarProducto} = this.props

        return (
           <div className='product'>
                <img className='img' src={producto.img} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <Button onClick={() => agregarProducto(producto)}>
                    Agregar
                </Button>
           </div>
        )
    }

}

export default Producto;