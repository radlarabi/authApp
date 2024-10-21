import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function Login() {
    const [loginData, setLoginData] = useState({email: null, password: null})
    const [notif, setNotif] = useState("")
    const navigate = useNavigate()

    
    useEffect(() => {
        const token = Cookies.get('access_token')
        if (token){
            axios.get('http://localhost:8080/api/auth/dashboard', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                if (res.status === 200)
                    navigate('/dashboard')
            })
            .catch((err) => {
                console.error(err)
            })
        }

    }, [navigate])

    const login = async () => {
        axios.post('http://localhost:8080/api/auth/login', JSON.stringify(loginData), {
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            setNotif(res.data.message)
            Cookies.set('access_token', res?.data?.token)
            navigate('/dashboard')
            console.log(res)

        })
        .catch((e) => {
            setNotif("invalid email or password")
            console.error(e)
        })
    } 
    return(
        <div className="">
            <input type="email" name="email" id="loginEmail" 
                onChange={(e) => {
                    setLoginData((prev) => ({...prev,email: e.target.value}))
                }}/>
            <input type="password" name="password" id="loginPassword"  
                onChange={(e) => {
                    setLoginData((prev) => ({...prev,password: e.target.value}))
                }}/>
            
            <input type="submit" value="login" name="submit" id="loginsubmit" onClick={login}/>
            <div className="" style={{color: "red"}}>{notif}</div>
        </div>
    )
}