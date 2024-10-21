import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [loginData, setLoginData] = useState({email: null, password: null})
    const [notif, setNotif] = useState("")
    const navigate = useNavigate()

    const login = async () => {
        axios.post('http://localhost:8080/api/auth/register', JSON.stringify(loginData), {
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            setNotif(res.data.message)
            navigate('/login')
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