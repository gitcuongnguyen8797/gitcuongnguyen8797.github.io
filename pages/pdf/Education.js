import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import React from "react";
import userInfo from "data/user";

// Mirrored from styles/component/_educationlist.module.scss
// 1rem = 12pt  |  1px ≈ 0.75pt
const accent   = "#f5a623";
const navy     = "#1a1a2e";
const textSub  = "#767676";
const cardBg   = "#f8f9fc";

const styles = StyleSheet.create({
  // .education-list: no extra padding
  container: {
    paddingTop: 0,
  },
  // .education-list__title h3: font-size:0.95rem(11pt); font-weight:700; color:#2b2b2b; margin-bottom:1rem(12pt)
  title: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2b2b2b",
    marginBottom: 9,
  },
  // .education-list__items: flex-column; gap:0.75rem(9pt)
  itemsGap: {
    marginBottom: 9,
  },
  // .education-item: flex row; gap:12px; padding:12px; background:$card-bg;
  //                  border-radius:8px; border:1px solid #e8eaf0
  educationItem: {
    flexDirection: "row",
    gap: 9,
    padding: 9,
    backgroundColor: cardBg,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e8eaf0",
  },
  // .education-item__logo: width:48px; height:48px; border-radius:50%;
  //                         border:2px solid $accent; background:#fff
  logoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: accent,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    overflow: "hidden",
  },
  logoImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  content: {
    flex: 1,
  },
  // .education-item__degree: font-size:0.82rem(10pt); font-weight:700; color:$navy; margin-bottom:3px
  degree: {
    fontSize: 10,
    fontWeight: "bold",
    color: navy,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  // .education-item__period: font-size:0.75rem(9pt); color:$text-sub; margin-bottom:4px
  period: {
    fontSize: 9,
    color: textSub,
    marginBottom: 3,
  },
  // .education-item__institution: font-size:0.78rem(9.5pt); color:$accent; font-weight:600; margin-bottom:3px
  institution: {
    fontSize: 9.5,
    color: accent,
    fontWeight: 600,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  // .education-item__location: font-size:0.73rem(9pt); color:$text-sub; ::before "▸"
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  locationArrow: {
    fontSize: 8,
    color: accent,
  },
  location: {
    fontSize: 8.5,
    color: textSub,
  },
});

const EducationItem = ({ degree, institution, period, location, logo }) => (
  <View style={styles.educationItem}>
    

    {/* .education-item__content */}
    <View style={styles.content}>
      <Text style={styles.degree} hyphenationCallback={(word) => [word]}>{degree}</Text>
      {period   && <Text style={styles.period}>{period}</Text>}
      <Text style={styles.institution} hyphenationCallback={(word) => [word]}>{institution}</Text>
      {location && (
        <View style={styles.locationRow}>
          <Text style={styles.locationArrow}>{"▸"}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      )}
    </View>
  </View>
);

export default function Education() {
  if (!userInfo.education || !userInfo.education.educations) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* .education-list__title h3 */}
      <Text style={styles.title}>{userInfo.education.title}</Text>

      {/* .education-list__items gap via marginBottom on all but last */}
      {userInfo.education.educations.map((education, index) => (
        <View
          key={index}
          style={index < userInfo.education.educations.length - 1 ? styles.itemsGap : undefined}
        >
          <EducationItem
            degree={education.degree}
            institution={education.institution}
            period={education.period}
            location={education.location}
            logo={education.logo}
          />
        </View>
      ))}
    </View>
  );
}
