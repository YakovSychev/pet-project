import React, { useContext } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

function AppRouter() {
    const {user} = useContext(Context)

    console.log(user);

  return (
    <Routes>
        {user.isAuth && authRoutes.map(el =>
                <Route key={el.path} path={el.path} element={el.element} />
            )}
            {publicRoutes.map((el) =>
                <Route key={el.path} path={el.path} element={el.element} />
            )}
            <Route path='*' element={<Navigate replace to={SHOP_ROUTE} />} />
    </Routes>
  );
}

export default AppRouter;