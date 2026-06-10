import React from "react";
import LeftMenu from "@/components/LeftMenu";
import ExperienceSection from "./ExperienceSection";
import BannerSection from "./BannerSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "@/components/Footer";
import Head from "next/head";

const About = ({title, description, keywords}) => {
    return (
        <div className="container-fluid-md container-xl g-0">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>

            <div className="row">
                {/* Left Sidebar */}
                <div className="col-sm-12 col-md-4 col-lg-3 position-relative">
                    <div className="card card-body"><LeftMenu /></div>
                </div>

                {/* Main Content */}
                <div className="col-sm-12 col-md-8 col-lg-9 py-3 d-flex flex-column gap-3">
                    <BannerSection />
                    <ExperienceSection />
                    <ProjectsSection />
                </div>
            </div>
            <div className="pt-5"><Footer /></div>
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


