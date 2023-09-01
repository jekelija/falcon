import '@styles/globals.scss'
import { appWithTranslation } from 'next-i18next'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(Application)
