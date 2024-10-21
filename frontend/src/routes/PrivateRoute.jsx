import {Routes, Route, Navigate } from "react-router-dom"
import axios from "axios"
import Cookies from 'js-cookie'
import Dashboard from "../components/Dashboard"
import { useEffect, useState } from "react"

export default function PrivateRoute({component: Component, ...rest}) {
    const [isAutenticated, setIsAutenticated] = useState(null)

    
    const checkToken = async () => {
        try {
            const res = await axios.get('http://localhost:8080/api/auth/dashboard', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('access_token')}`
                }
            })
            console.log("okokokk")
            return res.status === 200
            
        } catch (error) {
            console.error(error)
            return false
        }
    }
    useEffect(() => {
        checkToken().then((res) => setIsAutenticated(res))
    }, [])
    // console.log("check ", )

    // const isAutenticated = true 
    if (isAutenticated === null)
            return <div className="">Loading ...</div>

    console.log("isAutenticated ", isAutenticated)
    return isAutenticated ? <Dashboard/> : <Navigate to='/login'/>
}