import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import projects from "data/projects";

const accent = "#f5a623";
const darkNavy = "#1a1a2e";
const textBody = "#444";
const textMuted = "#888";

const styles = StyleSheet.create({
    section: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: "14 14",
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: darkNavy,
        textTransform: "uppercase",
        letterSpacing: 1,
        paddingBottom: 6,
    },
    sectionTitleBorder: {
        borderBottomWidth: 2.5,
        borderBottomColor: accent,
        marginBottom: 15,
    },
    intro: {
        fontSize: 10,
        color: textBody,
        lineHeight: 1.6,
        marginBottom: 10,
    },
    projectCard: {
        borderWidth: 1,
        borderColor: "#e8ebf0",
        backgroundColor: "#fcfdff",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    projectCardLast: {
        borderWidth: 1,
        borderColor: "#e8ebf0",
        backgroundColor: "#fcfdff",
        borderRadius: 8,
        padding: 10,
    },
    projectHeader: {
        marginBottom: 4,
    },
    projectTitle: {
        fontSize: 11,
        fontWeight: "bold",
        color: darkNavy,
        marginBottom: 3,
    },
    badgeRow: {
        flexDirection: "row",
        gap: 4,
        marginBottom: 5,
    },
    badge: {
        fontSize: 7.5,
        fontWeight: "bold",
        color: "#3a4153",
        backgroundColor: "#edf1f8",
        borderRadius: 999,
        padding: "2 6",
    },
    badgeProgress: {
        fontSize: 7.5,
        fontWeight: "bold",
        color: "#1f6f3f",
        backgroundColor: "#e7f7ee",
        borderRadius: 999,
        padding: "2 6",
    },
    badgeDone: {
        fontSize: 7.5,
        fontWeight: "bold",
        color: "#2456d6",
        backgroundColor: "#e9f0ff",
        borderRadius: 999,
        padding: "2 6",
    },
    summary: {
        fontSize: 9.5,
        color: textBody,
        lineHeight: 1.55,
        marginBottom: 6,
    },
    link: {
        fontSize: 8.5,
        color: "#2456d6",
        marginBottom: 6,
    },
    metaText: {
        fontSize: 8.5,
        color: textMuted,
        lineHeight: 1.5,
        marginBottom: 1,
    },
    metaBold: {
        color: darkNavy,
        fontWeight: "bold",
    },
    subTitle: {
        color: darkNavy,
        fontSize: 9,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 3,
    },
    bulletRow: {
        flexDirection: "row",
        marginBottom: 2,
    },
    bullet: {
        color: accent,
        fontWeight: "bold",
        fontSize: 9,
        width: 9,
        flexShrink: 0,
    },
    bulletText: {
        fontSize: 8.5,
        color: textBody,
        lineHeight: 1.5,
        flex: 1,
    },
    techTags: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
        marginTop: 5,
    },
    techTag: {
        backgroundColor: "#fff4e0",
        color: "#b07400",
        borderWidth: 1,
        borderColor: accent,
        borderRadius: 3,
        padding: "1.5 6",
        fontSize: 8,
        fontWeight: 600,
    },
});

function ProjectCard({ project, isLast }) {
    const statusStyle = project.status === "In Progress" || project.status === "Enhancing"
        ? styles.badgeProgress
        : styles.badgeDone;

    return (
        <View style={isLast ? styles.projectCardLast : styles.projectCard} wrap={false}>
            <View style={styles.projectHeader}>
                <Text style={styles.projectTitle}>{project.name}</Text>
                <View style={styles.badgeRow}>
                    <Text style={styles.badge}>{project.domain}</Text>
                    <Text style={statusStyle}>{project.status}</Text>
                </View>
            </View>

            <Text style={styles.summary}>{project.summary}</Text>

            {!!project.link && (
                <Link src={project.link} style={styles.link}>
                    {project.link}
                </Link>
            )}

            {!project.isPersonal && (
                <View>
                    <Text style={styles.metaText}>
                        <Text style={styles.metaBold}>Company: </Text>
                        {project.company}
                    </Text>
                    <Text style={styles.metaText}>
                        <Text style={styles.metaBold}>Period: </Text>
                        {project.period}
                    </Text>
                    <Text style={styles.metaText}>
                        <Text style={styles.metaBold}>Role: </Text>
                        {project.role}
                    </Text>
                    <Text style={styles.metaText}>
                        <Text style={styles.metaBold}>Team: </Text>
                        {project.teamSize} members
                    </Text>
                </View>
            )}

            {Array.isArray(project.highlights) && project.highlights.length > 0 && (
                <View>
                    <Text style={styles.subTitle}>Key Highlights</Text>
                    {project.highlights.map((item, index) => (
                        <View key={`${project.id}-h-${index}`} style={styles.bulletRow}>
                            <Text style={styles.bullet}>{"•"}</Text>
                            <Text style={styles.bulletText}>{item}</Text>
                        </View>
                    ))}
                </View>
            )}

            {Array.isArray(project.responsibilities) && project.responsibilities.length > 0 && (
                <View>
                    <Text style={styles.subTitle}>Core Responsibilities</Text>
                    {project.responsibilities.map((item, index) => (
                        <View key={`${project.id}-r-${index}`} style={styles.bulletRow}>
                            <Text style={styles.bullet}>{"•"}</Text>
                            <Text style={styles.bulletText}>{item}</Text>
                        </View>
                    ))}
                </View>
            )}

            {Array.isArray(project.techs) && project.techs.length > 0 && (
                <View style={styles.techTags}>
                    {project.techs.map((tech, index) => (
                        <Text key={`${project.id}-t-${index}`} style={styles.techTag}>{tech}</Text>
                    ))}
                </View>
            )}
        </View>
    );
}

export default function ProjectsSection() {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            <View style={styles.sectionTitleBorder} />
            <Text style={styles.intro}>
                Selected projects highlighting architecture ownership, hands-on implementation,
                and delivery impact across real-world products.
            </Text>

            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    isLast={index === projects.length - 1}
                />
            ))}
        </View>
    );
}
