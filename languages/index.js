import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from './en/index';
import Vietnamese from './vn/index';

const resources = {
    vi: {
        translation: Vietnamese
    },
    en: {
        translation: English
    }
}


i18n.use(initReactI18next)
    .init({
        resources,
        keySeparator: false,
        lng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        
    });
    
export default i18n;