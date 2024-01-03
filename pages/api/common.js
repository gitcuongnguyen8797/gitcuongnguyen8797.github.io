
import Graduate from 'public/icons/icon-graduate.svg';
import Home from 'public/icons/icon-home.svg';
import Work from 'public/icons/icon-work.svg';

export const topMenuList =  [
    { href: "/home", title: "Home" },
    { href: "/about", title: "About Me" },
    { href: "/blog", title: "Blog" },
    { href: "/contact", title: "Contact" }
]

export const categoriesPages = [
    { href: "/hot-news", title: "Hot News" },
    { href: "/iot", title: "IoT" },
    { href: "/blog/machine-learning", title: "Machine Learning" },
    { href: "/blog/penetration-testing", title: "Penetration Testing" }
]

export const footerUserInfo = [
    {
        icon: Graduate, item: <span><b>Ths. CuongNguyen</b></span>
    },
    {
        icon: Home, item: <span>Academy of Cryptography Techniques</span>
    },
    {
        icon: Work, item: <span>Full-Stack Developer &amp; information security</span>
    }
]