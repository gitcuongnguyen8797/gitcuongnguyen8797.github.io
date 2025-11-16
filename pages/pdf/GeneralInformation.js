import {
  View,
  Text,
  Image,
} from "@react-pdf/renderer";
import userInfo from "data/user";
import styles from "../../styles/pdf/general-information.styles";

export default function () {
  return (
    <View style={{ alignItems: 'center'}}>
      <Image
        style={{
          borderRadius: '10%',
          height: "25vw",
          width: "25vw",
          marginTop: 10,
        }}
        src={'/static/profile2.jpg'}
      />
      <Text style={styles.name}>{userInfo.name}</Text>
      <Text style={styles.position}>{userInfo.title}</Text>
    </View>
  );
}
