import { Text, } from '@react-pdf/renderer';
import ExperienceProgress from '../ProgressBar';

export default function Languages() {
  return (
    <>
        <Text style={{ paddingBottom: 10}}>Languages</Text>
        <ExperienceProgress label={'Vietnamese'} percent={90}/>
        <ExperienceProgress label={'English'} percent={70}/>
    </>
  );
}
