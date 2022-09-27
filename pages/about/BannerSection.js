import React from "react";
import Image from "next/image";
import Link from "next/link";


const menuList = [
    { href: "/home", title: "Home" },
    { href: "/about", title: "About Me" },
    { href: "/blog", title: "Blog" },
    { href: "/contact", title: "Contact" }
]

export default function BannerSection() {
    return (
        <div className="banner-section">
            <div className="banner-section__content col-12 col-md-6">
                <div className="banner-menu">
                    <ul className="menu">
                        {menuList.map((value, index) => <li key={index} className="m-3"><Link href={value.href}><a className="txt--muted">{value.title}</a></Link></li>)}
                    </ul>
                </div>
                <div className="banner-content">
                    <h1>I&apos;m Cuong Nguyen</h1>
                    <h1><span className="txt--yellow">Full-Stack </span>Developer</h1>
                    <span className="txt--muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</span>
                </div>
                <div></div>
            </div>
            <div className="banner-section__image col-12 col-md-6"> <Image src={require('../../public/images/myavatar.jpg')} alt="PHP Developer" /></div>
        </div>
    )
}