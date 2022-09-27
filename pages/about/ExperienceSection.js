import React from "react";
import experiences from "pages/api/experiences";
import ExperiencesTable from "@/components/ExperiencesTable";

export default function ExperienceSection() {
    return (
        <div className="row d-flex justify-content-center">
            <h1 className="text-center">Experiences</h1>
            <p className="text-center text">Janurary 2018 - Present </p>
            <div className="col-12"><ExperiencesTable experiences={experiences} /></div>
        </div>
    )
}