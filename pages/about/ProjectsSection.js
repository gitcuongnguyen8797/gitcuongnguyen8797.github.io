import React from "react";
import projects from "data/projects";
import styles from "styles/page/_about.module.scss";

function ProjectMeta({ period, role, teamSize, company }) {
    return (
        <div className={styles.projectMetaGrid}>
            <span className={styles.projectMetaItem}><strong>Company:</strong> {company}</span>
            <span className={styles.projectMetaItem}><strong>Period:</strong> {period}</span>
            <span className={styles.projectMetaItem}><strong>Role:</strong> {role}</span>
            <span className={styles.projectMetaItem}><strong>Team:</strong> {teamSize} members</span>
        </div>
    );
}

function ProjectCard({
    name,
    link,
    summary,
    period,
    role,
    teamSize,
    company,
    status,
    domain,
    highlights = [],
    responsibilities = [],
    techs = [],
    isPersonal = false,
}) {
    return (
        <article className={styles.projectCard}>
            <div className={styles.projectTop}>
                <h3 className={styles.projectTitle}>{name}</h3>
                <div className={styles.projectBadges}>
                    <span className={styles.projectBadge}>{domain}</span>
                    <span
                        className={`${styles.projectBadge} ${
                            status === "In Progress" ? styles.projectBadgeLive : styles.projectBadgeDone
                        }`}
                    >
                        {status}
                    </span>
                </div>
            </div>
            
            {techs.length > 0 && (
                <div className={styles.techTags}>
                    {techs.map((tech) => (
                        <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                </div>
            )}

            <p className={styles.projectSummary}>{summary}</p>
            
            {link && (
                <p className={styles.projectLink}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {`Demonstration Link -- ${link}`}
                    </a>
                </p>
            )}
            {!isPersonal && <ProjectMeta period={period} role={role} teamSize={teamSize} company={company} />}

            {highlights.length > 0 && (
                <div className={styles.projectInfoBlock}>
                    <h4 className={styles.projectLabel}>Key Highlights</h4>
                    <ul className={styles.respList}>
                        {highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {responsibilities.length > 0 && (
                <div className={styles.projectInfoBlock}>
                    <h4 className={styles.projectLabel}>Core Responsibilities</h4>
                    <ul className={styles.respList}>
                        {responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

        </article>
    );
}

export default function ProjectsSection() {
    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <p className={styles.projectsIntro}>
                Below are some of the key projects I've worked on, showcasing my experience in software development across various domains. Each project highlights my role, the technologies used, and the impact delivered.
            </p>

            <div className={styles.projectsGrid}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}
