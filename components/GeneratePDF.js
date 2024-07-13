import { pdf } from '@react-pdf/renderer';
import MyPdf from '../pages/pdf';
 
export const generatePDF =  async () => {
    await pdf(<MyPdf />).toBlob();
    const url = URL.createObjectURL(blob);
    console.log(url);
    return url;
}