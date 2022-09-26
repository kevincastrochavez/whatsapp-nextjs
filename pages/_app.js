import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '../firebase';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  return <Component {...pageProps} />;
}

export default MyApp;
