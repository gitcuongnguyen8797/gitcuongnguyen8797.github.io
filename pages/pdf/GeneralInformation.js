import {
  View,
  Text,
  Image,
  Svg,
  Path,
  Rect,
  Line,
  Circle,
} from "@react-pdf/renderer";
import userInfo from "data/user";

const accent    = "#f5a623";
const textLight = "#c8ccd6";

const IconEmail = () => (
  <Svg viewBox="0 0 12 12" width={10} height={10}>
    <Rect x="1" y="2.5" width="10" height="7" rx="1" stroke={textLight} strokeWidth="0.8" fill="none" />
    <Path d="M1 3.5 L6 7 L11 3.5" stroke={textLight} strokeWidth="0.8" fill="none" />
  </Svg>
);

const IconPhone = () => (
  <Svg viewBox="0 0 12 12" width={10} height={10}>
    <Path d="M3.5 1.5 C3 1.5 2 2 2 3 C2 7 5 10 9 10 C10 10 10.5 9 10.5 8.5 L9 7 C8.5 7 8 7.5 7.5 7.5 C6.5 6.5 5.5 5.5 4.5 4.5 C4.5 4 5 3.5 5 3 Z" stroke={textLight} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
  </Svg>
);

const IconLocation = () => (
  <Svg viewBox="0 0 12 12" width={10} height={10}>
    <Path d="M6 1 C4 1 2.5 2.5 2.5 4.5 C2.5 7.5 6 11 6 11 C6 11 9.5 7.5 9.5 4.5 C9.5 2.5 8 1 6 1 Z" stroke={textLight} strokeWidth="0.8" fill="none" />
    <Circle cx="6" cy="4.5" r="1.2" stroke={textLight} strokeWidth="0.7" fill="none" />
  </Svg>
);

const IconCalendar = () => (
  <Svg viewBox="0 0 12 12" width={10} height={10}>
    <Rect x="1" y="2.5" width="10" height="8.5" rx="1" stroke={textLight} strokeWidth="0.8" fill="none" />
    <Line x1="1" y1="5" x2="11" y2="5" stroke={textLight} strokeWidth="0.7" />
    <Line x1="3.5" y1="1" x2="3.5" y2="3.5" stroke={textLight} strokeWidth="0.9" strokeLinecap="round" />
    <Line x1="8.5" y1="1" x2="8.5" y2="3.5" stroke={textLight} strokeWidth="0.9" strokeLinecap="round" />
  </Svg>
);

const ContactRow = ({ icon, label }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
    {icon}
    <Text style={{ fontSize: 8.5, color: textLight }}>{label}</Text>
  </View>
);

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
        src={"/static/avatar2.jpg"}
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

        {/* Contact rows with icons */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 6 }}>
          <ContactRow icon={<IconEmail />} label={userInfo.email} />
          <Text style={{ fontSize: 8.5, color: textLight}}>|</Text>
          <ContactRow icon={<IconCalendar />} label={`${userInfo.dob}`} />
          <Text style={{ fontSize: 8.5, color: textLight,  }}>|</Text>
          <ContactRow icon={<IconPhone />} label={userInfo.phone} />
          <Text style={{ fontSize: 8.5, color: textLight,  }}>|</Text>
          <ContactRow icon={<IconLocation />} label={userInfo.location} />
        </View>
      </View>

    </View>
  );
}
