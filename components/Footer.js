import React from "react";
import Image from "next/image";
import Link from "next/link";
import userInfo from "pages/api/user";
import Logo from 'public/logo.svg';
import { categoriesPages, footerUserInfo, topMenuList } from "pages/api/common";


const ListInfo = ({ items = [] }) => (
    <ul className="list-info">
        {
            items.map((value, index) => (
                <li key={index} className="info-item">
                    <div className="info-item__icon"><Image src={value.icon} layout="responsive" /></div>
                    <div className="info-item__content">{value.item}</div>
                </li>
            ))
        }
    </ul>
);


const ListMenu = ({ menuItems = [] }) => (
    <ul className="list-menu">
        {
            menuItems.map((value, index) =>
                <li key={index} className="list-menu__item" ><Link href={value.href}><a>{value.title}</a></Link></li>
            )
        }
    </ul>
)

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__body row pb-5 pt-5">
                <div className="col-xs-12 col-sm-12 col-md-1"></div>
                <div className="col-xs-12 col-sm-5 col-md-4">
                    {/* Logo and Information Section */}
                    <div className="col-sm-8 col-md-7 pb-4"><Image src={Logo} layout="responsive" /></div>
                    <ListInfo items={footerUserInfo} />
                    <ul className="social-links" style={{ justifyContent: "flex-start" }}>
                        {
                            userInfo.socials.map((value, index) => (<li key={index} className="social-links__item" style={{ margin: 0, marginRight: 15 }}><Link href={value.href}><a><Image src={value.icon} alt="developer" /></a></Link> </li>))
                        }
                    </ul>
                </div>

                {/* List Menu Center */}
                <div className="col-xs-12 col-sm-4 col-md-3">
                    <h4 className="pb-2">Full-Stack Developer</h4>
                    <ListMenu menuItems={topMenuList} />
                </div>

                {/* List Menu Right */}
                <div className="col-xs-12 col-sm-3 col-md-3">
                    <h4 className="pb-2">Blog</h4>
                    <ListMenu menuItems={categoriesPages} />
                </div>
            </div>
            <div className="footer__copy-right row"> 2022 All Rights Reserved. Made with &#10084; </div>
        </footer>
    )
}