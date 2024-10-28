import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import {toast} from 'react-toastify'

const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e) => {
         try {
            
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
            if(response.data.success) {
              setToken(response.data.token)
            }
            else{
                toast.error(response.data.mesaage)
            }

         } catch (error) {
            console.log(error);
            toast.error(response.mesaage)
         }

    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shadow-xl rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Đăng nhập Admin</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'> Email :</p>
                    <input onChange= {(e) => setEmail(e.target.value)} value ={email} className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"type="email" name="email" placeholder="Nhập email" required/>
                </div>

                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Mật khẩu :</p>
                    <input onChange= {(e) => setPassword(e.target.value)} value ={password} className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"type="password" name="password" placeholder="Nhập mật khẩu" required />
                </div>

                <button className="mt-2 w-full py-2 px-4 rounded-md text-white bg-blue-950" type="submit" > Đăng nhập </button>
            </form>
        </div>
    </div>
  )
}

export default Login