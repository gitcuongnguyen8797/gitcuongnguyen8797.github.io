import React from "react";
import Image from "next/image";
import Logo from "public/logo.svg";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner1 = () => (
  <div className="header-banner">
    <div className="banner-content">
      <div className="banner-content__left">
        <h1>Nguyen Hai Cuong (Camilo Nguyen)</h1>
        <br />
        <h4>Cyber security master&apos;s degree</h4>
        <p>Full-Stack Developer</p>
      </div>
      <div className="banner-content__right"></div>
    </div>
  </div>
);

const Banner2 = () => (
  <div className="header-banner">
    <div className="banner-content">
      <div className="banner-content__left">
        <h1>Penetration Testing</h1>
        <br/>
        {/* <h4>Penetration Testing Tutorial</h4> */}
        <h5><Link href='/blog/penetration-testing'><a className="txt--yellow">Explore More &gt;</a></Link></h5>
      </div>
      <div className="banner-content__right"></div>
    </div>
  </div>
);

const Banner3 = () => (
  <div className="header-banner">
    <div className="banner-content">
      <div className="banner-content__left">
        <h1>Machine Learning</h1>
        <br/>
        <h5><Link href='/blog/machine-learning'><a className="txt--yellow">Explore More &gt;</a></Link></h5>
      </div>
      <div className="banner-content__right"></div>
    </div>
  </div>
);

const Banner4 = () => (
  <div className="header-banner">
    <div className="banner-content">
      <div className="banner-content__left">
        <h1>Internet of Things</h1>
        <br/>
        <h5><Link href='/blog/iot'><a className="txt--yellow">Explore More &gt;</a></Link></h5>
      </div>
      <div className="banner-content__right"></div>
    </div>
  </div>
);

export default function Header({ menuList = [] }) {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Image src={Logo} layout="responsive" alt="Full-Stack Developer" />
        </div>
        <div className="header__menu">
          <ul className="menu">
            {menuList.map((value, index) => (
              <li key={index} className="menu__item ">
                <Link href={value.href}>
                  <a className="txt--white">{value.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header__lang"></div>
      </div>

      <Swiper
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={true}
      >
        <SwiperSlide><Banner1 /></SwiperSlide>
        <SwiperSlide><Banner2 /></SwiperSlide>
        <SwiperSlide><Banner3 /></SwiperSlide>
        <SwiperSlide><Banner4 /></SwiperSlide>
      </Swiper>
    </>
  );
}
