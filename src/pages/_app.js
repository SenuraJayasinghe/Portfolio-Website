import Theme from '../styles/theme';
import '../components/BackgrooundAnimation/background1.css'
import '../components/Technologies/IconSize.css'



export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 