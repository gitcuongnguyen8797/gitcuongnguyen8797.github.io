import { withTranslation } from 'react-i18next';
import '../styles/globals.scss';
import '../languages/index';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withTranslation()(MyApp)
