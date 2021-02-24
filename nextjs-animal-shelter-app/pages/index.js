import React from "react";
import MyNavbar from '../components/MyNavbar';
import UserContext from '../lib/userContext';
import Landing from '../components/Landing';
import Cookies from 'js-cookie';

import api from '../axiosStore'


export default function Index() {
  const { setUser } = React.useContext(UserContext)

  React.useEffect(() => {
    const token = Cookies.get('jwt')
    if (token) {
      api.get('/me').then(({ data }) => {
        setUser(data)
      })
    }
  }, [])

  return (
    <>
      <MyNavbar />

      <Landing />
    </>
  );
}