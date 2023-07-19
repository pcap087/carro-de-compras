import { Component } from "react";
import Logo from './Logo';
import Carro from './Carro';

class Navbar extends Component{
    render(){
        const {carro} = this.props;

        return(
            <nav className="navbar">
                <Logo />
                <Carro carro={carro}/>
            </nav>
        )
    }
}

export default Navbar;