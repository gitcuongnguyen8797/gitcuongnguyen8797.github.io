import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InformationCard({ avatar, name, title, socials = [] }) {
    return (
        <div className="card-info">
            <div className="card-info__avatar"><Image className="avatar-image--rounded" src={avatar} width="200px" height="200px" alt="Full-Stack Developer" /></div>
            <div className="card-info__name ">{name}</div>
            <div className="card-info__title ">{title}</div>
            <div className="card-info__socials">
                <ul className="social-links">
                    {
                        socials.map((value, index) => (<li key={index} className="social-links__item"><Link href={value.href}><a><Image src={value.icon} alt="developer" /></a></Link> </li>))
                    }
                </ul>
            </div>
        </div>
    )
}