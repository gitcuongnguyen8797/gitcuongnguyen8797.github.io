import { Text, View } from "@react-pdf/renderer";


export default function TagSkill({skill}) {
    return (
        <View style={{ padding: 2, borderRadius: 20, backgroundColor: '#ffb400'}}>
            <Text style={{ color: 'white', padding: '0 9px', fontSize: 9 }}>{skill}</Text>
        </View>
    );
}