import axios from 'axios'


export async function Login(email, password){
    try{
        const api = await axios.post('localhost:8080/api/auth/login', {email: email, password: password})
        if (!api.ok)
            throw new Error(api.status)
    
        const res = api.json()
        return res.token
    }catch(e){
        console.log(e)
    }
}


export async function Register(email, password){
    try{
        const api = await axios.post('localhost:8080/api/auth/register', {email: email, password: password})
        if (!api.ok)
            throw new Error(api.status)
    
        const res = api.json()
        return true
    }catch(e){
        console.log(e)
        return false
    }
}