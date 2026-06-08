import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";

// Exact values mirrored from styles/page/_about.module.scss
// 1rem = 12pt in react-pdf  |  1px ≈ 0.75pt
const accent    = "#f5a623";
const darkNavy  = "#1a1a2e";
const textBody  = "#444";
const textMuted = "#888";
const bgCard    = "#f8f9fc";

const styles = StyleSheet.create({
    // .summarySection: background:#fff; border-radius:8px; padding:1.5rem 1.75rem
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
    // border-bottom:2.5px solid $accent as a separate View; margin-bottom:1.25rem(15pt)
    sectionTitleBorder: {
        borderBottomWidth: 2.5,
        borderBottomColor: accent,
        marginBottom: 15,
    },
    // .summaryText: font-size:0.9rem(11pt); color:$text-body; line-height:1.75; margin-bottom:1.25rem
    summaryText: {
        fontSize: 11,
        color: textBody,
        lineHeight: 1.75,
        marginBottom: 15,
    },
    // <strong> inside .summaryText: color:$dark-navy; font-weight:bold
    bold: {
        fontWeight: "bold",
        color: darkNavy,
    },
    // .highlightGrid: grid 2-col; gap:0.75rem(9pt) — rendered as two flex rows
    highlightRow: {
        flexDirection: "row",
        gap: 9,
        marginBottom: 9,
    },
    highlightRowLast: {
        flexDirection: "row",
        gap: 9,
    },
    // .highlightCard: background:$bg-card; border-left:3px solid $accent;
    //                border-radius:0 5px 5px 0; padding:0.75rem 1rem(9pt 12pt)
    highlightCard: {
        flexGrow: 1,
        flexBasis: 0,
        backgroundColor: bgCard,
        borderLeftWidth: 3,
        borderLeftColor: accent,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        padding: "9 12",
    },
    // .highlightNumber: font-size:1.75rem(21pt); font-weight:800; color:$dark-navy; line-height:1
    highlightNumber: {
        fontSize: 21,
        fontWeight: "bold",
        color: darkNavy,
        lineHeight: 1,
    },
    // .highlightLabel: font-size:0.75rem(9pt); color:$text-muted; margin-top:3px
    highlightLabel: {
        fontSize: 9,
        color: textMuted,
        marginTop: 3,
    },
});

const highlights = [
    { number: "7+",   label: "Years of Professional Experience" },
    { number: "10+",  label: "Production Projects Delivered" },
    { number: "4",    label: "Team Leader Engagements" },
    { number: "80%+", label: "Unit Test Coverage Maintained" },
];

function HighlightCard({ number, label }) {
    return (
        <View style={styles.highlightCard}>
            <Text style={styles.highlightNumber}>{number}</Text>
            <Text style={styles.highlightLabel}>{label}</Text>
        </View>
    );
}

export default function ProfessionalSummary() {
    return (
        <View style={styles.section}>
            {/* .sectionTitle + accent bottom border */}
            <Text style={styles.sectionTitle}>Summary</Text>
            <View style={styles.sectionTitleBorder} />

            {/* .summaryText with inline <strong> segments */}
            <Text style={styles.summaryText}>
                {"Full Stack Developer with "}
                <Text style={styles.bold}>7+ years of experience</Text>
                {" designing and delivering scalable web applications for enterprise and product-based clients across Vietnam and Japan. Strong expertise in "}
                <Text style={styles.bold}>PHP/Laravel, Node.js/NestJS, React/Next.js</Text>
                {", and cloud infrastructure on "}
                <Text style={styles.bold}>AWS & GCP</Text>
                {". Proven leadership as a "}
                <Text style={styles.bold}>Team Leader</Text>
                {" \u2014 architecting systems, establishing CI/CD pipelines, mentoring engineers, and consistently maintaining "}
                <Text style={styles.bold}>{">= 80% unit-test coverage"}</Text>
                {". Passionate about clean, maintainable code and engineering practices that scale."}
            </Text>

            {/* .highlightGrid as 2 flex rows */}
            {/* <View style={styles.highlightRow}>
                <HighlightCard {...highlights[0]} />
                <HighlightCard {...highlights[1]} />
            </View> */}
            {/* <View style={styles.highlightRowLast}>
                <HighlightCard {...highlights[2]} />
                <HighlightCard {...highlights[3]} />
            </View> */}
        </View>
    );
}
