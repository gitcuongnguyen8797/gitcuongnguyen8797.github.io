import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import React from "react";
import userInfo from "data/user";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 5,
  },
  title: {
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  educationItem: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottom: '1px solid #E8E8E8',
    width: '100%',
  },
  educationItemLast: {
    paddingBottom: 15,
    marginBottom: 15,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 5,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2B2B2B',
    flex: 1,
  },
  period: {
    fontSize: 9,
    color: '#767676',
    paddingBottom: 4,
  },
  institution: {
    fontSize: 10,
    color: '#1890FF',
    fontWeight: 'semibold',
    paddingBottom: 2,
  },
  location: {
    fontSize: 9,
    color: '#767676',
    paddingBottom: 3,
  },
  gpa: {
    fontSize: 9,
    color: '#52C41A',
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  description: {
    fontSize: 9,
    color: '#767676',
    lineHeight: 1.4,
    paddingTop: 3,
  },
});

const EducationItem = ({ degree, institution, period, description, gpa, location, logo, isLast }) => (
  <View style={isLast ? styles.educationItemLast : styles.educationItem}>
    <View style={styles.headerRow}>
      {logo && <Image src={logo} style={styles.logo} />}
      <Text style={styles.degree} hyphenationCallback={(word) => [word]}>{degree}</Text>
    </View>
    {period && <Text style={styles.period} hyphenationCallback={(word) => [word]}>{period}</Text>}
    <Text style={styles.institution} hyphenationCallback={(word) => [word]}>{institution}</Text>
    {location && <Text style={styles.location} hyphenationCallback={(word) => [word]}>{location}</Text>}
    {/* {gpa && <Text style={styles.gpa}>GPA: {gpa}</Text>} */}
    {/* {description && <Text style={styles.description}>{description}</Text>} */}
  </View>
);

export default function Education() {
  if (!userInfo.education || !userInfo.education.educations) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userInfo.education.title}</Text>
      {userInfo.education.educations.map((education, index) => (
        <EducationItem
          key={index}
          degree={education.degree}
          institution={education.institution}
          period={education.period}
          description={education.description}
          gpa={education.gpa}
          location={education.location}
          logo={education.logo}
          isLast={index === userInfo.education.educations.length - 1}
        />
      ))}
    </View>
  );
}
