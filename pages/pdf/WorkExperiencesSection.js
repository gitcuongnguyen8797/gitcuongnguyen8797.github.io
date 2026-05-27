import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { experiencesWithoutProjects } from "data/experiences";

// Exact values mirrored from styles/page/_about.module.scss
// 1rem = 12pt in react-pdf  |  1px ≈ 0.75pt
const accent    = "#f5a623";
const darkNavy  = "#1a1a2e";
const textBody  = "#444";
const textMuted = "#888";

const styles = StyleSheet.create({
    // .experienceSection: background:#fff; border-radius:8px; padding:1.5rem 1.75rem
    section: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: "14 14",
    },
    // .sectionTitle: font-size:1.25rem(15pt); font-weight:800; color:$dark-navy;
    //               text-transform:uppercase; letter-spacing:0.06em; padding-bottom:6px
    sectionTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: darkNavy,
        textTransform: "uppercase",
        letterSpacing: 1,
        paddingBottom: 6,
    },
    // border-bottom:2.5px solid $accent; margin-bottom:1.25rem(15pt)
    sectionTitleBorder: {
        borderBottomWidth: 2.5,
        borderBottomColor: accent,
        marginBottom: 15,
    },
    // .companyBlock: margin-bottom:2rem(24pt)  — last child: 0
    companyBlock: {
        marginBottom: 24,
    },
    companyBlockLast: {
        marginBottom: 0,
    },
    // .companyHeader: flex; justify-content:space-between; align-items:baseline;
    //                gap:4px; margin-bottom:4px
    companyHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 3,
        marginBottom: 3,
        marginTop: 8,
    },
    // .companyName: font-size:1.05rem(13pt); font-weight:700; color:$dark-navy
    // flex:1 so long names wrap instead of overflowing into the date column
    companyName: {
        fontSize: 13,
        fontWeight: "bold",
        color: darkNavy,
        flex: 1,
    },
    // .companyPeriod: font-size:0.8rem(10pt); color:$text-muted
    // flexShrink:0 keeps the date on one line and never clips it
    companyPeriod: {
        fontSize: 10,
        color: textMuted,
        flexShrink: 0,
        marginLeft: 6,
    },
    // .role: font-size:1rem(12pt); color:$accent; font-weight:600; margin-bottom:0.5rem(6pt)
    role: {
        fontSize: 12,
        color: accent,
        fontWeight: 600,
        marginBottom: 6,
    },
    // .companyDivider hr: border-top:1px solid #eee; margin:6px 0 12px
    divider: {
        borderTopWidth: 1,
        borderTopColor: "#eee",
        marginTop: 0,
        marginBottom: 9,
    },
    // .techTags: flex-wrap; gap:5px(4pt); margin-bottom:0.6rem(7pt)
    techTags: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
        marginBottom: 7,
    },
    // .techTag: background:#fff4e0; color:#b07400; border:1px solid $accent;
    //           border-radius:3px; padding:1px 8px; font-size:0.72rem(9pt); font-weight:600
    techTag: {
        backgroundColor: "#fff4e0",
        color: "#b07400",
        borderWidth: 1,
        borderColor: accent,
        borderRadius: 3,
        padding: "1.5 6",
        fontSize: 9,
        fontWeight: 600,
    },
    // .respList li: font-size:0.82rem(10pt); color:$text-body; line-height:1.5;
    //              padding:2px 0 2px 1rem — implemented as row with separate bullet
    respRow: {
        flexDirection: "row",
        marginBottom: 3,
    },
    // ::before { content:'•'; color:$accent; font-weight:700; left:2px }
    bullet: {
        color: accent,
        fontWeight: "bold",
        fontSize: 10,
        width: 10,
        flexShrink: 0,
    },
    respItem: {
        fontSize: 10,
        color: textBody,
        lineHeight: 1.5,
        flex: 1,
    },
});

function CompanyBlock({ company, workTimes, role, skills = [], description = [], isLast }) {
    return (
        <View style={isLast ? styles.companyBlockLast : styles.companyBlock} wrap={false}>
            {/* .companyHeader */}
            <View style={styles.companyHeader}>
                <Text style={styles.companyName}>{company}</Text>
                <Text style={styles.companyPeriod}>{workTimes}</Text>
            </View>

            {/* .role */}
            <Text style={styles.role}>{role}</Text>

            {/* .companyDivider */}
            <View style={styles.divider} />

            {/* .techTags */}
            {skills.length > 0 && (
                <View style={styles.techTags}>
                    {skills.map((skill) => (
                        <Text key={skill} style={styles.techTag}>{skill}</Text>
                    ))}
                </View>
            )}

            {/* .respList li  with accent bullet */}
            {description.map((item, i) => (
                <View key={i} style={styles.respRow}>
                    <Text style={styles.bullet}>{"•"}</Text>
                    <Text style={styles.respItem}>{item}</Text>
                </View>
            ))}
        </View>
    );
}

export default function WorkExperiencesSection() {
    return (
        <View style={styles.section}>
            {/* .sectionTitle + accent bottom border */}
            <Text style={styles.sectionTitle}>Work Experience</Text>
            <View style={styles.sectionTitleBorder} />

            {experiencesWithoutProjects.map((entry, i) => (
                <CompanyBlock
                    key={i}
                    {...entry}
                    isLast={i === experiencesWithoutProjects.length - 1}
                />
            ))}
        </View>
    );
}
