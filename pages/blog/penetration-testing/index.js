import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { topMenuList } from "pages/api/common";

const PostTimeLine = ({ timeline: [] }) => (
  <div className="timeline">
    <ul>
      <li style={{ accentColor: "#41516C" }}>
        <div class="date">Hiden yourself</div>
        <div class="title">How to hide yourself on the Internet</div>
        <div class="descr">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque
          hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur
          laboriosam!
        </div>
      </li>
      <li>
        <div class="date">2007</div>
        <div class="title">Title 2</div>
        <div class="descr">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          adipisci nobis nostrum vero nihil veniam.
        </div>
      </li>
      <li>
        <div class="date">2012</div>
        <div class="title">Title 3</div>
        <div class="descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima
          consequuntur soluta placeat iure totam commodi repellendus ea
          delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe
          nulla hic.
        </div>
      </li>
      <li>
        <div class="date">2017</div>
        <div class="title">Title 4</div>
        <div class="descr">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
          cumque.
        </div>
      </li>
      <li>
        <div class="date">2022</div>
        <div class="title">Title 5</div>
        <div class="descr">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.
        </div>
      </li>
    </ul>
  </div>
);

export default function Pentest({ title, description, keywords }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="container-fluid g-0">
        <section className="header-section">
          <div className="banner-drawback">
            <Image
              src={
                "https://seotrends.com.vn/wp-content/uploads/2023/04/anh-hacker-anonymous-hoat-hinh-1-1024x683.jpeg"
              }
              layout="fill"
              alt="background"
            />
          </div>

          <div className="header-container">
            <div className="header-nav">
              <div className="">
                <Image
                  src={require("./../../../public/images/blackhat.webp")}
                  layout="fixed"
                  alt="Blackhat has cap"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="banner-menu">
                <ul className="menu">
                  {topMenuList.map((value, index) => (
                    <li key={index} className="m-3">
                      <Link href={value.href}>
                        <a className="txt--white">{value.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="header-content">
              <div className="header-content__left">
                <h1 className="txt--white txt--neo">
                  The Penetration Testing Journey
                </h1>
                <br />
              </div>
              <div className="header-content__right">
                <h1 className="text-center txt--white txt--neo">
                  Black or White
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section">
          {/* Secton Blog Timeline*/}
          <br />
          <h1 className="text-center">Journey Timeline</h1>
          <div>
            <PostTimeLine timeline={[]} />
          </div>
        </section>
        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Blog | Penetration Testing",
      description: "CEH Certificate",
      keywords:
        "Tech Blogs, Stories, Full-stack Developer, CV, Hiring, Pentest, Penetration Testing, Pentester, CEH",
    },
  };
}
