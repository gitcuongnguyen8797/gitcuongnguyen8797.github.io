import React from "react";
import styles from "styles/component/_leftmenu.module.scss";

export default function CoreSkillsTags({ title, groups = [] }) {
    return (
        <div className={styles.coreSkills}>
            <div className={styles.coreSkillsTitle}><h3>{title}</h3></div>
            {groups.map(({ label, tags, primary = [] }) => (
                <div key={label} className={styles.skillGroup}>
                    <div className={styles.skillGroupLabel}>{label}</div>
                    <div className={styles.skillTags}>
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className={`${styles.skillTag} ${primary.includes(tag) ? styles.skillTagPrimary : ""}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
