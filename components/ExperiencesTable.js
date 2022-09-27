import React from "react";


const ExperienceItem = ({ projectName, description, teamSize, mainResponsibilities, techs = [] }) => (
    <div className="experience-item">
        <h5 className="experience-item__title">{projectName}</h5>
        <div className="">
            <ul className="tag-skill">
                {techs.map((value, index) => <li key={index} className="tag-skill__label txt--white">{value}</li>)}
            </ul>
        </div>
        <div className="experience-item__content">
            <p>Description: {description} </p>
            <p>Team size: {teamSize}</p>
            <span>Main responsibilities:</span>
            <ul> {mainResponsibilities.map((value, index) => <li key={index}> - {value} </li>)} </ul>
        </div>
    </div>
);

export default function ExperiencesTable({ experiences }) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                {
                    experiences.map((value, index) => (
                        <div key={index}>
                            <div className="row mt-3">
                                <div className="col-4">
                                    <h5>{value.company}</h5>
                                    <span className="txt--muted">{value.workTimes}</span>
                                </div>
                                <div className="col-8"> {value.projects.map((value, index) => <ExperienceItem key={index} {...value} />)} </div>
                            </div>
                            <hr style={{ opacity: 0.15 }} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}