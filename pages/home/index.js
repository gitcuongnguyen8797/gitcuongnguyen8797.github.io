import Header from "components/Header";
import { topMenuList } from "data/common";
import Head from "next/head";

export default function Home({title, description, keywords}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header menuList={topMenuList} />
    </>
  );
}

export async function getStaticProps() {
  return {
      props: {
          title: "Home | Blog Penetration",
          description: "The blog sharing about advanced in IT",
          keywords: "Full-Stack Developer, Java Developer, Laravel, NodeJS, React"
      }
  }
}