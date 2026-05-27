import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import userInfo from "data/user";

// Mirrored from styles/component/_leftmenu.module.scss
// 1rem = 12pt  |  1px ≈ 0.75pt
const accent   = "#f5a623";
const darkNavy = "#1a1a2e";

const styles = StyleSheet.create({
    // .coreSkillsTitle h3: font-size:0.95rem(11pt); font-weight:700; color:$dark-navy; margin-bottom:0.75rem(9pt)
    title: {
        fontSize: 11,
        fontWeight: "bold",
        color: darkNavy,
        marginBottom: 9,
    },
    // .skillGroup: margin-bottom:0.75rem(9pt)
    skillGroup: {
        marginBottom: 9,
    },
    skillGroupLast: {
        marginBottom: 0,
    },
    // .skillGroupLabel: font-size:0.72rem(9pt); font-weight:800; text-transform:uppercase;
    //                   letter-spacing:0.07em; color:$accent; margin-bottom:5px
    skillGroupLabel: {
        fontSize: 8.5,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 0.6,
        color: accent,
        marginBottom: 4,
    },
    // .skillTags: flex-wrap; gap:5px(~4pt)
    skillTags: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 4,
    },
    // .skillTag: background:#f0f2f5; color:#555; border:1px solid #d0d5dd; border-radius:3px;
    //            padding:2px 8px; font-size:0.75rem(9pt)
    skillTag: {
        backgroundColor: "#f0f2f5",
        color: "#555",
        borderWidth: 1,
        borderColor: "#d0d5dd",
        borderRadius: 3,
        padding: "1.5 5",
        fontSize: 8.5,
    },
    // .skillTagPrimary: background:#fff4e0; color:#b07400; border-color:$accent; font-weight:600
    skillTagPrimary: {
        backgroundColor: "#fff4e0",
        color: "#b07400",
        borderWidth: 1,
        borderColor: accent,
        borderRadius: 3,
        padding: "1.5 5",
        fontSize: 8.5,
        fontWeight: 600,
    },
});

export default function PdfCoreSkillsTags() {
    const { title, groups = [] } = userInfo.coreSkills;

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            {groups.map(({ label, tags, primary = [] }, gi) => (
                <View
                    key={label}
                    style={gi === groups.length - 1 ? styles.skillGroupLast : styles.skillGroup}
                >
                    <Text style={styles.skillGroupLabel}>{label}</Text>
                    <View style={styles.skillTags}>
                        {tags.map((tag) => (
                            <Text
                                key={tag}
                                style={primary.includes(tag) ? styles.skillTagPrimary : styles.skillTag}
                            >
                                {tag}
                            </Text>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
}
