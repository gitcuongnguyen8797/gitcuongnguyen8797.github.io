import { Text } from "@react-pdf/renderer";
import ProgressBar from "./ProgressBar";
import React from "react";
import userInfo from "data/user";

export default function Skills() {
  return (
    <>
      <Text style={{ paddingBottom: 10 }}>{userInfo.skills.title}</Text>
      {
        userInfo.skills.listItems.map((skill) => <ProgressBar {...skill} />)
      }
    </>
  );
}
