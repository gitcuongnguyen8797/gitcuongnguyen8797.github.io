import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { topMenuList } from "pages/api/common";



const PostTimeLine = ({ timeline }) => (
  <div className="timeline">
    <ul>
      { timeline.map(({section, title, description, slug = ''}, index) => (
          <li key={index} style={{ accentColor: "#41516C" }}>
            <div className="date">{section}</div>
            <div className="title">{title}</div>
            <div className="descr">
              {description}
              <Link href={slug} ><a className="ps-2 txt--yellow" href="#">Read more</a></Link>
            </div>
        </li>
      ))}
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
              src={require('./../../../public/images/banner-hacker.jpeg')}
              layout="fill"
              alt="background"
            />
          </div>

          <div className="header-container">
            <div className="header-nav d-flex justify-content-center justify-content-md-between">
              <div className="d-none d-md-flex ms-3">
                <Image
                  src={require("./../../../public/images/blackhat.webp")}
                  layout="fixed"
                  alt="Blackhat has cap"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="banner-menu me-3">
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
          <br/>
          <div>
            <PostTimeLine timeline={[
              {
                section: 'Hiden yourself',
                title: 'How to hide yourself on the Internet ?',
                description: `When people join the Internet, all their activities will be logged at the point you visited, such as ISP, Web Server, DNS Server, etc. 
                So how can we protect ourselves to the Internet?`,
                slug: '/blog/penetration-testing/hide-yourself'
              },
              {
                section: 'Reconnaissance',
                title: 'Researching everything what you can',
                description: `"To know oneself is true progress." Collect data about your targets. Which benefits does it have`,
                slug: '/blog/penetration-testing/reconnaissance'
              },
              {
                section: 'Scanning',
                title: 'Researching everything what you can',
                description: 'This is a section talk about how can we be determined'
              },
              {
                section: 'Vulnerability Assessment',
                title: 'Researching everything what you can',
                description: 'This is a section talk about how can we be determined'
              },
              {
                section: 'DDoS if can not hack anything',
                title: 'Just kidding',
                description: 'If you feel uncomfortable with an organization or individual but are not able to hack them, DDoS !!!.'
              },
            ]} />
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
