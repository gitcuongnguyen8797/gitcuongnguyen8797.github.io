import { View } from "@react-pdf/renderer";

export default function Divider() {
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        borderColor: "#767676",
        borderBottom: "0.1px",
        marginTop: 10,
        marginBottom: 10,
      }}
    ></View>
  );
}
