import React from "react";
import LeftMenu from "@/components/LeftMenu";
import ExperienceSection from "./ExperienceSection";
import BannerSection from "./BannerSection";

const About = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Left Menu */}
                <div className="col-sm-12 col-md-4 col-lg-3 position-relative"><div className="card card-body sticky-menu"><LeftMenu /></div> </div>

                {/* Right Container */}
                <div className="col-sm-12 col-md-8 col-lg-9">
                    <BannerSection />
                    <br/>
                    <ExperienceSection />
                </div>
            </div>
        </div>

    )
}

export default About;


