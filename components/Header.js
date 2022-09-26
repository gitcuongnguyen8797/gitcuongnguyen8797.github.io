import React from "react";
import Image from "next/image";
import Logo from 'public/logo.png';
import EngFlag from 'public/eng.png';
import VNFlag from 'public/vn.png';
import Link from "next/link";
import { t } from "i18next";



const NavMenu = () => (
    <ul className="menu">
        <li className="menu__item"><Link href={"/home"}><a>{t('home')}</a></Link></li>
        <li className="menu__item"><Link href={"/about"}><a>{t('about')}</a></Link></li>
        <li className="menu__item"><Link href={"/blog"}><a>{t('blog')}</a></Link></li>
        <li className="menu__item"><Link href={"/contact"}><a>{t('contact')}</a></Link></li>
    </ul>
)

const Switcher = ({ lang, onClick }) => (<Image onClick={onClick} src={lang === 'vi' ? VNFlag : EngFlag} width="40px" height="40px" />)

export default function Header({ locale }) {

    return (
        <div className="header">
            <div className="header__logo"><Image src={Logo} width="70px" height="70px" /></div>
            <div className="header__menu"><NavMenu /></div>
            <div className="header__lang"><Switcher lang={locale} /></div>
        </div>
    )
}
