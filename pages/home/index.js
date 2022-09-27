import Header from "@/components/Header";
import { topMenuList } from "pages/api/common";

export default function Home({ }) {

    return (
        <>
            <Header menuList={topMenuList} />
        </>
    )
}