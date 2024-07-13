import { Text, View } from "@react-pdf/renderer";
import TagSkill from "../TagSkill";
import styles from "./styles";

export default function Project({ projectName, workingTime, teamSize, role, description, mainResponsibilities = [], techs = [],  }) {
  return(
    <View style={{ paddingBottom: 10}}>
      <Text style={{ fontSize: 16, fontWeight: 'bold'}}>{projectName}</Text>
      <Text style={{ fontSize: 9, color: '#767676', paddingTop: 3}}>{workingTime}</Text>
      <View style={styles.tagSkillsContainer}>
        {
          techs.map(tech => <TagSkill skill={tech} />)
        }
      </View>
      <View style={{ marginTop: 10}}>
        {/* <Text style={styles.projectContent}>Description: {description}</Text> */}
        <Text style={styles.projectContent}>Team Size: {teamSize}</Text>
        <Text style={styles.projectContent}>Position: <Text style={{ fontWeight: 'bold' }}>{role}</Text></Text>
        <Text style={styles.projectContent}>Responsibilities: </Text>
        {
          mainResponsibilities.map(res => <Text style={styles.projectContent}> - {res}</Text>)
        }
      </View>
    </View>
  )
}
