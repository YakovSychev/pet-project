import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userApi';

function App() {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
if(loading) {
  return <Spinner animation={'grow'}/>
}

  return (
    <BrowserRouter>
    <NavBar/>
        <AppRouter />
        </BrowserRouter>
  );
}

export default observer(App);
