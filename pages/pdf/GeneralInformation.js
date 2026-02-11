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
          height: '28vw',
          width: '28vw',
          marginTop: 10,
          aspectRatio: '1/1',
          objectFit: 'cover',
        }}
        src={'/static/avatar.jpeg'}
      />
      <Text style={styles.name}>{userInfo.name}</Text>
      <Text style={styles.position}>{userInfo.title}</Text>
    </View>
  );
}
