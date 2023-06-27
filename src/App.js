import { Component } from 'react';
import Productos from '../src/componentes/Productos'

class App extends Component {
    //crear un estado inicial de productos
    state = {
        productos: [
            { nombre: 'Tomate', precio: 1500, img: '/productos/tomate.jpg' },
            { nombre: 'Arbejas', precio: 2500, img: '/productos/arbejas.jpg' },
            { nombre: 'Lechuga', precio: 500, img: '/productos/lechuga.jpg' }
        ]
    }

    render(){
        return (
            <>
                <div>
                    <Productos 
                        agregarItems={() => console.log('test')}
                        productos={this.state.productos}
                    />
                </div>
            </>
        )
    }

}

//visualizar un objeton json en el template
//<pre>{JSON.stringify(this.state.productos, null, 2)}</pre>


export default App;
