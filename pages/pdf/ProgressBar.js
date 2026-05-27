import { View, Text } from "@react-pdf/renderer";

// Mirrored from ListProgress component:
// percent >= 90 → "Native", >= 70 → "Intermediate", else "Basic"
function getLevel(percent) {
  if (percent >= 90) return "Native";
  if (percent >= 70) return "Intermediate";
  return "Basic";
}

export default function ProgressBar({ label, percent }) {
  return (
    // .progress-container: margin:2vh 0  (~8pt in PDF)
    <View style={{ marginBottom: 8 }}>
      {/* .progress-header: flex; space-between; color:$text-muted */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 3 }}>
        <Text style={{ fontSize: 9, color: "#767676" }}>{label}</Text>
        <Text style={{ fontSize: 9, color: "#767676" }}>{getLevel(percent)}</Text>
      </View>
      {/* .progress: padding:2px; border:0.5px solid #FFB400; background:white; border-radius:50px */}
      <View style={{ padding: 2, borderWidth: 0.5, borderColor: "#FFB400", backgroundColor: "white", borderRadius: 50 }}>
        {/* .progress-bar: border-radius:50px; background:#ffb400 */}
        <View style={{ borderRadius: 50, backgroundColor: "#FFB400", height: 5, width: `${percent}%` }} />
      </View>
    </View>
  );
}
