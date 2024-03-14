import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detailcourses from '../components/DetailCourses'
import MyLearing from '../components/MyLearning/MyLearning';


function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path={'/Detailcourses'} element={<Detailcourses />}></Route>
                <Route exact path={'/MyLearning'} element={<MyLearing />}></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Router;