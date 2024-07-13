import { View, Text } from "@react-pdf/renderer";
import Project from "./Project";
import styles from "./styles";

export default function Experience({ company, workTimes, projects = []}) {
  return (
    <View style={styles.container}>
      <View style={styles.companyContainer}>
        <Text style={{ fontSize: 12, fontWeight: "bold", lineHeight: "1.5" }}>
          {company}
        </Text>
        <Text style={{ fontSize: 10, color: "#767676" }}>{workTimes}</Text>
      </View>
      <View style={styles.projectsContainer}>
        {
          projects.map(project => <Project {...project} />)
        }
      </View>
    </View>
  );
}
