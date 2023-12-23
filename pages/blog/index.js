import BlogHeader from "@/components/BlogHeader";
import Head from "next/head";

export default function index({ title, description, keywords }) {
  return (
    <div className="container-fluid g-0">
      {/* Header */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      {/* Section 1: Logo + Nav Link  */}
      <BlogHeader />
      {/* Section 2: Categories  */}
      {/* Section 3: Slider + New Posts */}
      {/* Section 4: Favorite Posts */}
      {/* Footer */}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Blog | Nguyen Hai Cuong",
      description: "This page is where I will share my stories",
      keywords: "Tech Blogs, Stories, Full-stack Developer, CV, Hiring",
    },
  };
}
