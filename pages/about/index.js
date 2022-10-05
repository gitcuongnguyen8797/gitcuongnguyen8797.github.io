import React from "react";
import LeftMenu from "@/components/LeftMenu";
import ExperienceSection from "./ExperienceSection";
import BannerSection from "./BannerSection";
import Footer from "@/components/Footer";
import Head from "next/head";

const About = ({title, description, keywords}) => {
    return (
        <div className="container-fluid-md container-xl">
            <Head>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="row">
                {/* Left Menu */}
                <div className="col-sm-12 col-md-4 col-lg-3 position-relative"><div className="card card-body sticky-menu"><LeftMenu /></div> </div>

                {/* Right Container */}
                <div className="col-sm-12 col-md-8 col-lg-9">
                    <BannerSection />
                    <br />
                    <ExperienceSection />
                </div>
            </div>
            <div className="row pt-5"><Footer /></div>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: "About Me | Nguyen Hai Cuong Developer",
            description: "This is CV of Full-stack Developer.",
            keywords: "Full-Stack Developer, Java Developer, Laravel, NodeJS, React"
        }
    }
}

export default About;


