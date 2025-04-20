"use client";
import dynamic from "next/dynamic";
import {
  Document,
  Page,
  View,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import {  main } from "../../styles/pdf/styles";
import GenernalInformation from './GeneralInformation'
import Skills from "./Skills";
import Contacts from "./Contacts";
import Divider from "./Divider";
import Introduction from "./Introduction";
import Languages from "./Languages";
import Experiences from "./Experiences";
import Certs from "./Certs";
import Education from "./Education";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

// const test = async () => {
//   const blob = await pdf(
//     <Document style={{ width: '100%'}}>
//       <Page size='A4' wrap={false}>
//         <View wrap={false}>
//             <Text>Text</Text>
//         </View>
//       </Page>
//     </Document>
//   ).toBlob();

//   console.log(blob);

//   saveAs(blob, "pageName");
// };

const PortfolioPdf = () => {
  const [windowHeight, setWindownHeight] = useState();

  useEffect(() => {
    setWindownHeight(window.innerHeight);
  }, []);

  return (
    <PDFViewer width={"100%"} height={windowHeight}>
      <Document>
        <Page size={"A4"} style={main.page}>
          <View style={main.leftContainer}>
            <GenernalInformation />
            {/* Divider */}
            <Divider />
            <Contacts />

            <Divider />
            <Education />

            {/* Divider */}
            <Divider />
            <Skills />
            
            {/* Divider */}
            <Divider />
            <Languages />

            {/* Divider */}
            {/* <Divider />
            <Certs /> */}
            
          </View>
          <View style={main.rightContainer}>
            {/* Introduction Banner */}
            <Introduction />
            {/* Experiences */}
            <Experiences />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PortfolioPdf;
