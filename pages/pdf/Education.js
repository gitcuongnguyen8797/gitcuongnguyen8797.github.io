import { Text, View } from "@react-pdf/renderer";
import userInfo from "pages/api/user";
import styles from '../../styles/pdf/general-information.styles'


const EducationItem = ({ title, university, time, major }) => {
  return (
    <View style={styles.education_container}>
      <Text style={{ fontSize: 12, fontWeight: 'extrabold' }}>{title}</Text>
      {/* <Text style={{ fontSize: 10, fontWeight: 'normal', ...styles.phone }}>Major: {major}</Text> */}
      <Text style={{ ...styles.phone }}>{university}, {time}</Text>
    </View>
  );
}

export default function Education() {
  return (
    <>
      <Text style={{ paddingBottom: 10 }}>{userInfo.educations.title}</Text>
      {userInfo.educations.educations.map(info => <EducationItem {...info} />)}
    </>
  );
}
