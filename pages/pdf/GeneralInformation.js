import {
  View,
  Text,
  Image,
} from "@react-pdf/renderer";
import userInfo from "data/user";

const accent    = "#f5a623";
const textLight = "#c8ccd6";

export default function GeneralInformation() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 16, flex: 1 }}>
      {/* Avatar */}
      <Image
        style={{
          borderRadius: 40,
          height: 68,
          width: 68,
          objectFit: "cover",
          borderWidth: 2.5,
          borderColor: accent,
          flexShrink: 0,
        }}
        src={"/static/avatar.jpeg"}
      />

      {/* Name / Title / Contact */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
            marginBottom: 3,
          }}
        >
          {userInfo.name}
        </Text>

        <Text
          style={{
            fontSize: 11,
            color: accent,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          {userInfo.title}
        </Text>

        {/* Single Text keeps all contact items inline */}
        <Text style={{ fontSize: 8.5, color: textLight }}>
          {userInfo.email}
          {"   |   "}
          {userInfo.phone}
          {"   |   "}
          {userInfo.location}
        </Text>
      </View>
    </View>
  );
}
