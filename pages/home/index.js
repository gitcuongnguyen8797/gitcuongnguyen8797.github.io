import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";

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
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-3">
                        <div className="card">
                            <div className="card-body"><LeftMenu /></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-9"><h1>Comming Soon</h1></div>
                </div>
            </div>
        </>
    )
}