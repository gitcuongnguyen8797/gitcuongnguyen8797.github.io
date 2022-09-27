import Header from "@/components/Header";

const menuHeaderItems = [
    { href: "/home", title: "Home" },
    { href: "/about", title: "About Me" },
    { href: "/blog", title: "Blog" },
    { href: "/contact", title: "Contact" }
];

export default function Home({ }) {

    return (
        <>
            <Header menuList={menuHeaderItems} />
        </>
    )
}