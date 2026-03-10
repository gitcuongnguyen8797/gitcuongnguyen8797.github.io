import React from "react";
import Image from "next/image";

const EducationItem = ({ degree, institution, period, description, gpa, location, logo }) => (
    <div className="education-item">
        <div className="education-item__content">
            <div>
                {logo ? (
                    <div className="education-item__logo">
                        <Image
                            src={logo}
                            alt={`${institution} logo`}
                            width={60}
                            height={60}
                            objectFit="contain"
                        />
                    </div>
                ) : (
                    <div className="education-item__logo education-item__logo--default">
                        <Image
                            src="/icons/icon-graduate.svg"
                            alt="Education icon"
                            width={48}
                            height={48}
                            objectFit="contain"
                        />
                    </div>
                )}
                 <div className="education-item__degree">{degree}</div>
            </div>

           
            {period && <div className="education-item__period">{period}</div>}
            <div className="education-item__institution">{institution}</div>
            {location && <div className="education-item__location">{location}</div>}
        </div>
    </div>
);

export default function EducationList({ title, educations = [] }) {
    return (
        <div className="education-list">
            <div className="education-list__title">
                <h3>{title}</h3>
            </div>
            <div className="education-list__items">
                {educations.map((education, index) => (
                    <EducationItem 
                        key={index} 
                        degree={education.degree}
                        institution={education.institution}
                        period={education.period}
                        description={education.description}
                        gpa={education.gpa}
                        location={education.location}
                        logo={education.logo}
                    />
                ))}
            </div>
        </div>
    );
}
