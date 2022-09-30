import React from 'react'
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className='bg-custom-b1 absolute bottom-0 w-screen '>
        <div className="container mt-4">
            <div className="row">
            <form className='flex justify-center ms-2 '>
                <input type="email" placeholder='example@email.com' className='p-1'/>
                <button className='text-custom-w1 border-2 rounded flex px-2 mx-2 h-10 pt-1 hover:border-custom-r1'>Subscribe</button>
            </form>
            </div>
            <div className="row mt-2">
                <div className='flex justify-center'>
                    <p className='text-custom-w1 text-2xl'>© 2021 Copyright</p>
                </div>
            </div>
            <div className="row my-2">
                <div className='flex justify-center'>
                <a href="https://github.com/ismailboyaci" className='text-custom-w1 hover:text-custom-r1 text-2xl'> <AiFillGithub /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer