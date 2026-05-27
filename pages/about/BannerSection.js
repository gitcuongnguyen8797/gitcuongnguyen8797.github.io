import React from "react";
import styles from "styles/page/_about.module.scss";

const highlights = [
    { number: "7+",   label: "Years of Professional Experience" },
    { number: "10+",  label: "Production Projects Delivered" },
    { number: "4",   label: "Team Leader Engagements" },
    { number: "80%+", label: "Unit Test Coverage Maintained" },
];

export default function BannerSection() {
    return (
        <section className={styles.summarySection}>
            <h2 className={styles.sectionTitle}>Summary</h2>
            <p className={styles.summaryText}>
                Full Stack Developer with <strong>7+ years of experience</strong> designing and delivering
                scalable web applications for enterprise and product-based clients across Vietnam and Japan.
                Strong expertise in <strong>PHP/Laravel, Node.js/NestJS, React/Next.js</strong>, and cloud
                infrastructure on <strong>AWS &amp; GCP</strong>. Proven leadership as a{" "}
                <strong>Team Leader</strong> — architecting systems, establishing CI/CD pipelines,
                mentoring engineers, and consistently maintaining{" "}
                <strong>≥80% unit-test coverage</strong>.
                Passionate about clean, maintainable code and engineering practices that scale.
            </p>
            <div className={styles.highlightGrid}>
                {highlights.map(({ number, label }) => (
                    <div key={label} className={styles.highlightCard}>
                        <div className={styles.highlightNumber}>{number}</div>
                        <div className={styles.highlightLabel}>{label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}