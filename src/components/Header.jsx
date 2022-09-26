import React, { useState } from "react";
import { AiOutlineCar, AiOutlineUser, AiOutlineTeam } from "react-icons/ai";

function Header() {
    const [show, setShow] = useState(false)
  return (
    <nav className="navbar bg-custom-b1 h-20">
      <div className="row w-full">
        <div className="col flex justify-between">
          <div className="flex flex-row items-center">
            <AiOutlineCar className="text-custom-w1 text-3xl ms-4 " />
            <h1 className="text-custom-w1 ms-4">Rent A Car</h1>
          <div className="dropdown pt-1">
            <button  className="text-custom-w1 text-2xl border-l-2 ms-2 ps-2 pb-1 h-16 pt-1 items-center hover:border-custom-r1 hover:text-custom-r1" type="button" data-bs-toggle="dropdown" aria-expanded="false"
            onMouseOver={()=>{setShow(true)}}
            onMouseOut={()=>{setShow(false)}}
            onFocus={()=>{setShow(true)}}>
              Cars
            </button>
            <ul className="dropdown-menu ml-10px " style={{'display':show?'block':'none'}} 
            onMouseEnter={()=>{setShow(true)}}
            onMouseLeave={()=>{setShow(false)}}>
              <li>
                <a className="dropdown-item" href="/">
                  All Cars
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Plus Cars
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Economic Cars
                </a>
              </li>
            </ul>
          </div>
          </div>
          <div className="flex flex-row mt-2">
            <button className="text-custom-w1 border-2 rounded flex px-2 mx-2 h-10 pt-1 hover:border-custom-r1">
              <AiOutlineUser className="text-custom-w1 text-xl" /> User Login{" "}
            </button>
            <button className="text-custom-w1 border-2 rounded flex px-2 mx-2 h-10 pt-1 hover:border-custom-r1">
              <AiOutlineTeam className="text-custom-w1 text-xl" /> Admin Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
