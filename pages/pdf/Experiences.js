import { View, Text } from "@react-pdf/renderer";
import Project from "./Project";
import Experience from "./Experience";
import experiences from "data/experiences";
import Divider from "./Divider";


export default function Experiences() {
    return (
        <View style={{ paddingTop: 25, textAlign: 'center'}}>
            <View>
                <Text style={{fontSize: 22, paddingBottom: 5}}>Experiences</Text>
                <Text style={{ fontSize: 12, color: '#767676'}}>2018 - Present</Text>
            </View>
            <View style={{ marginTop: 25, padding: 10, backgroundColor: 'white'}}>
                {
                    experiences.map((experience, index) => (
                        <>
                            <View break={index == 1 || index == experiences.length -1} key={index} style={{ paddingTop: index > 0 ? 15 : 0 }}>
                                <Experience {...experience} />
                                { index == experiences.length -1 ? '': <View style={{ marginTop: 0, marginBottom: 0 }}> <Divider /></View>}
                            </View>
                        </>
                    ))
                }
            </View>
        </View>
    )
}