
import React, { useState } from "react";
// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from '../lib/userContext';
import Cookies from 'js-cookie';

import api from '../axiosStore'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const token = Cookies.get('jwt')
    if (token) {
      api.get('/me').then(({ data }) => {
        setUser(data)
      })
    }
  }, [setUser])

  return <UserContext.Provider value={{user, setUser}}>
    <Component {...pageProps} />
  </UserContext.Provider>;

}

export default MyApp;