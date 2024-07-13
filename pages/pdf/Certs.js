import { Text } from "@react-pdf/renderer";
import userInfo from "pages/api/user";

export default function Certs() {
  return (
    <>
      <Text style={{ paddingBottom: 10 }}>{userInfo.certification.title}</Text>
    </>
  );
}
