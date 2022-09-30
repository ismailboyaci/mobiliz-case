import React, { useState } from 'react'
import { AiOutlineCar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const navigate= useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      if((email && passWord)!=="" ){
          sessionStorage.setItem("email",email)
          sessionStorage.setItem("password",passWord)
          setEmail("")
          setPassWord("")
          navigate("/adminpanel")
      }
    }

  return (
    <div className="container">
        <div className="row flex justify-center">
            <div className="col-6 flex justify-center h-screen align-middle items-center">
                <div className='border-2 bg-custom-b1 rounded-lg border-custom-b1 w-2/3 h-1/3'>
                    <form className='flex flex-col mt-10' onSubmit={handleSubmit}>
                        <label className='text-custom-w1 ms-1'>E-mail</label>
                        <input type="email" placeholder='example@mail.com' className='py-2 mx-2' onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label className='text-custom-w1 ms-1'>Password</label>
                        <input type="password" placeholder='***' className='py-2 mx-2' onChange={(e)=>{setPassWord(e.target.value)}}/>
                        <button className='text-custom-w1 border-2 rounded flex px-2 mt-2 h-10 pt-1 hover:border-custom-r1 mx-2' type='submit'>Login</button>
                    </form>
                    <div className='flex justify-center'>
                    <AiOutlineCar className="text-custom-w1 text-3xl mt-4 " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin