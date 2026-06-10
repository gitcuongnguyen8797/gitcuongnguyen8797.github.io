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
import Divider from "./Divider";
import Languages from "./Languages";
import PdfCoreSkillsTags from "./PdfCoreSkillsTags";
import Education from "./Education";
import ProfessionalSummary from "./ProfessionalSummary";
import WorkExperiencesSection from "./WorkExperiencesSection";
import ProjectsSection from "./ProjectsSection";

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
          {/* ── Full-width header: avatar + name + title + contacts ── */}
          <View style={main.header}>
            <GenernalInformation />
          </View>

          {/* ── All sections stacked vertically ── */}
          <View style={main.content}>
            <ProfessionalSummary />
           
            <View style={main.card}>
              <PdfCoreSkillsTags />
            </View>

            
            <View style={main.card}>
              <Education />
            </View>

            <View style={main.card}>
              <Languages />
            </View>

            <View style={{ height: 20}}>

            </View>

            <WorkExperiencesSection />

            
            <View style={{ height: 190}}>

            </View>

            <ProjectsSection />
             
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PortfolioPdf;
