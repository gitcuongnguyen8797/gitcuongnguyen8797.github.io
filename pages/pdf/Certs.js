import { Text } from "@react-pdf/renderer";
import React from "react";
import userInfo from "data/user";

export default function Certs() {
  return (
    <>
      <Text style={{ paddingBottom: 10 }}>{userInfo.certification.title}</Text>
    </>
  );
}
