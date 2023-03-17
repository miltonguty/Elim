import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const MenuHeader = () =>
{
    return (
        <header className=" block fixed z-10 w-full">
            <div className='bg-white h-32  block z-10 w-full opacity-50 absolute'></div>
            <img src="/images/logoElim.png" className="h-20  absolute ml-auto mr-auto left-0 right-0 text-center  z-20" />
            <div id="header" className='absolute ml-auto mr-auto left-0 right-0 text-center top-20 bg-transparent  z-20'>
                <nav>
                    <ul className="nav">
                        <li > <Link to={"/"} > ELIN</Link> </li>
                        <li > <Link to={"/Quienes-somos"} > QUIENES SOMOS</Link> </li>
                        <li > <Link to={"/Elim-radio"} > ELIN RADIO</Link> </li>
                        <li > <Link to={"#"} >CONECTATE</Link>
                            <ul className="submenu">
                                <li ><Link to={"/jorge-Funetes"} >Apostol Jorge Fuentes</Link></li>
                                <li ><Link to={"/Noe-vargas"} >Pastor Noe Vargas</Link></li>


                            </ul>
                        </li>
                        <li > <Link to={"/elim-jovenes"}> JOVENES ELIM</Link> </li>

                    </ul>
                </nav>
            </div>
        </header >
    )
}
export default MenuHeader;