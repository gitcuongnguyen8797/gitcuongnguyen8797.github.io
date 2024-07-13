import { View, Text } from "@react-pdf/renderer";

export default function ProgressBar({ label, percent }) {
  return (
    <View style={{paddingBottom: 10}}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 3}}>
            <Text style={{ fontSize: 10, color: '#767676' }}>{label}</Text>
            <Text style={{ fontSize: 10, color: '#767676' }}>{percent}%</Text>
      </View>
      <View style={{ padding: 2, border: '1px solid #ffb400', backgroundColor: 'white', borderRadius: '50px'}}>
        <View style={{ borderRadius: '50px', backgroundColor: '#ffb400', height: '8px', width: `${percent}%`}}></View>
      </View>
    </View>
  );
}
