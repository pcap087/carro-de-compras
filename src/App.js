import { Component } from 'react';
import Productos from '../src/componentes/Productos'
import Layout from '../src/componentes/Layout'
import Navbar from '../src/componentes/Navbar'
import Title from '../src/componentes/Title'

class App extends Component {
    //crear un estado inicial de productos
    state = {
        productos: [
            { nombre: 'Tomate', precio: 1500, img: '/productos/tomate.jpg' },
            { nombre: 'Arbejas', precio: 2500, img: '/productos/arbejas.jpg' },
            { nombre: 'Lechuga', precio: 500, img: '/productos/lechuga.jpg' }
        ],
        carro: [],
        esCarroVisible: false
    }

    agregarProducto = (producto) => {
        const { carro } = this.state

        if(carro.find(x => x.nombre === producto.nombre)) {
            const newCarro = carro.map(x => x.nombre === producto.nombre 
                ?   ({
                        ...x,
                        cantidad: x.cantidad + 1
                    })
                : x)
            return this.setState({ carro: newCarro })
        }

        this.setState({
            carro: this.state.carro.concat({
                ...producto,
                cantidad: 1
            })
        })
    }

    //cambia el estado de la funcion de false a true
    mostrarCarroBtn = () => {
        if(!this.state.carro.length){ //cuando no tengamos elementos en el carro, no hace nada
            return
        }
        this.setState({ esCarroVisible: !this.state.esCarroVisible })
    } 

    render(){
        const { esCarroVisible } = this.state
        return (
            <>
                <Navbar 
                    carro = {this.state.carro}
                    esCarroVisible = { esCarroVisible }
                    mostrarCarroBtn = { this.mostrarCarroBtn }
                />
                <div>
                    <Layout>
                        <Title />
                        <Productos 
                            agregarProducto={this.agregarProducto} 
                            productos={this.state.productos} 
                        />
                    </Layout>
                </div>
            </>
        )
    }

}

//visualizar un objeton json en el template
//<pre>{JSON.stringify(this.state.productos, null, 2)}</pre>


export default App;
