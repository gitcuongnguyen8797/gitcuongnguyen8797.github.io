import React from 'react';
import { experiencesWithoutProjects } from "data/experiences";
import styles from "styles/page/_about.module.scss";

function CompanyBlock({ company, workTimes, role, skills = [], description = [] }) {
    return (
        <div className={styles.companyBlock}>
            <div className={styles.companyHeader}>
                <span className={styles.companyName}>{company}</span>
                <span className={styles.companyPeriod}>{workTimes}</span>
            </div>
            <span className={styles.role}>{role}</span>
            <hr className={styles.companyDivider} />
            {skills.length > 0 && (
                <div className={styles.techTags}>
                    {skills.map((skill) => (
                        <span key={skill} className={styles.techTag}>{skill}</span>
                    ))}
                </div>
            )}
            {description.length > 0 && (
                <ul className={styles.respList}>
                    {description.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function ExperienceSection() {
    return (
        <section className={styles.experienceSection}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            {experiencesWithoutProjects.map((entry, i) => (
                <CompanyBlock key={i} {...entry} />
            ))}
        </section>
    );
}
