import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from '../Home'
import HodLogin from '../HodLogin'
import EmployeeLogin from "../EmployeeLogin"


export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='emplogin' element={<EmployeeLogin />} />
            <Route path='hodlogin' element={<HodLogin />} />
        </Route>
    )
)