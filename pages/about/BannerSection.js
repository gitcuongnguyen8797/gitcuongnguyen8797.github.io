import React from "react";
import Image from "next/image";
import Link from "next/link";
import { topMenuList } from "data/common";

export default function BannerSection() {
    return (
        <div className="banner-section ">
            <div className="banner-section__content col-12 col-md-8 col-xl-6">
                <div className="banner-menu">
                    <ul className="menu">
                        {topMenuList.map((value, index) => <li key={index} className="m-3"><Link href={value.href} className="txt--muted">{value.title}</Link></li>)}
                    </ul>
                </div>
                <div className="banner-body">
                    <div className="banner-body__content">
                        <h1>I&apos;m Cuong Nguyen</h1>
                        <h1><span className="txt--yellow">Full-Stack </span>Developer</h1>
                        <p className="txt--muted">
                            As a software engineer with 5 years of experience in many languages such as PHP, Laravel, NodeJS, NestJS, React JS, etc., 
                            I want to improve my work knowledge and maximize my capabilities to bring quality products and the best performance in my work.
                        </p>
                        <p className="txt--muted">Finding new challenge, position so that I can bring my value and become a key members in your company</p>
                    </div>
                </div>
            </div>
            <div className="banner-section__image col-4 col-md-4 col-xl-6">
                <Image src={require('../../public/images/banner-technologies.png')} alt="PHP Developer" width={400} />
            </div>
        </div>
    )
}