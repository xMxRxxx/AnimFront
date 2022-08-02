import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Setup from '../pages/Setup';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import AddSeries from '../pages/Admin/AddSeries';
import AddSubSeries from '../pages/Admin/AddSubSeries';
import UpdateDelPage from '../pages/Admin/UpdateDelPage';
import CatalogSecond from '../pages/CatalogSecond';



const Jalur = () => {
    return (
        <Routes>
            <Route
                path='/basecamp/Update'
                exac
                element={<UpdateDelPage/>}
            />
            <Route
                path='/basecamp/addSeries'
                exac
                element={<AddSeries/>}
            />
            <Route
                path='/basecamp/addSubSeries'
                exac
                element={<AddSubSeries/>}
            />
            <Route
                path='/basecamp'
                exac
                element={<Setup/>}
            />
            <Route
                path='/:category/search/:keyword'
                element={<Catalog/>}
            />
            <Route
                path='/film/:category/detail/:id'
                element={<Detail/>}
            />
            <Route
                path='/:category/:tipe'
                element={<CatalogSecond/>}
            />
            <Route
                path='/:category'
                element={<Catalog/>}
            />
            <Route
                path='/'
                exact
                element={<Home/>}
            />
        </Routes>
    );
}

export default Jalur;
