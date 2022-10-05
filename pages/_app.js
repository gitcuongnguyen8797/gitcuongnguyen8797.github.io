import { withTranslation } from 'react-i18next';
import '../styles/globals.scss';
import '../languages/index';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withTranslation()(MyApp)
