import React from "react";
import Image from "next/image";
import Logo from 'public/logo.png';
import EngFlag from 'public/eng.png';
import VNFlag from 'public/vn.png';
import Link from "next/link";

const Switcher = ({ lang, onClick }) => (<Image onClick={onClick} src={lang === 'vi' ? VNFlag : EngFlag} width="40px" height="40px" />)

export default function Header({ locale, menuList = [], }) {

    return (
        <div className="header">
            <div className="header__logo"><Image src={Logo} width="70px" height="70px" /></div>
            <div className="header__menu">
                <ul className="menu">
                    {menuList.map((value, index) => <li key={index} className="menu__item"><Link href={value.href}><a>{value.title}</a></Link></li>)}
                </ul>
            </div>
            <div className="header__lang"></div>
        </div>
    )
}
