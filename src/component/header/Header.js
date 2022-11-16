import './header.css';
import { useState } from 'react';
import { Liste } from '../liste/Liste.js';
import logo from './img/logo.png';
import '../../asset/css/generic.css';


export function Header(props){
    const [menuBurger, setMenuBurger] = useState(false);
    let croix1 = 'croix1';
    let croixNone = '';
    let croix2 = 'croix2'
    const toggleMenu = () =>{
        setMenuBurger(current => !current)
    }
    if(menuBurger === true){
        croix1 += ' rotate1';
        croixNone += ' none'
        croix2 += ' rotate2'
    }
    return(
        <header style={{backgroundImage:"url(/img/wall.jpg", backgroundSize:"cover", backgroundPositionX:"-150px", backgroundPositionY:"50px"}}>
            <div className='container-top flex'>
                <div className='container-logo'>
                    <img className='img-fluid' src={logo} alt='logo hades'/>
                </div>
                <ul className='menu-burger' onClick={toggleMenu}>
                    <li className={croix1}></li>
                    <li className={croixNone}></li>
                    <li className={croix2}></li>
                </ul>
            </div>
            <Liste menuBurger = {menuBurger} sectionPrincipal = {props.sectionPrincipal}/>
        </header>
    );
}
