import { Component } from "react";
import '../estilos/producto.css';

class BubbleAlert extends Component {

    getNumber(n){
        if(!n){ 
            return ''
        }
        return n > 9 //si n es mayor a 9 entonces aparecer por defecto 9+ sino el valor de n
            ? '9+' 
            : n 
    }

    render(){
        const { value } = this.props;

        return (
            <span className="bubbleAlert">
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert;