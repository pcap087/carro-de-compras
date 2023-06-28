import { Component } from "react";
import Logo from './Logo';
import Carro from './Carro';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar">
                <Logo />
                <Carro />
            </nav>
        )
    }
}

export default Navbar;