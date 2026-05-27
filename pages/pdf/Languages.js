import { Text, View } from "@react-pdf/renderer";
import React from "react";
import userInfo from "data/user";
import ProgressBar from "./ProgressBar";

// Mirrored from ListProgress component using userInfo.languages data
export default function Languages() {
  const { title, listItems = [] } = userInfo.languages;

  return (
    <View>
      {/* .list-progress__title h3 */}
      <Text style={{ fontSize: 11, fontWeight: "bold", color: "#1a1a2e", marginBottom: 5 }}>
        {title}
      </Text>
      {listItems.map((item, i) => (
        <ProgressBar key={i} label={item.label} percent={item.percent} />
      ))}
    </View>
  );
}
