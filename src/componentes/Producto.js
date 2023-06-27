import { Component } from 'react';
import '../estilos/producto.css';

class Producto extends Component{
    render(){
        const {producto} = this.props

        return (
           <div className='product'>
                <img className='img'
                    src={producto.img}  
                    alt={producto.nombre} 
                />
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
           </div>
        )
    }

}

export default Producto;