import React, { useState, useEffect } from 'react'
import { AiOutlineLogout,AiOutlineHome, AiOutlineCar, AiOutlineForm } from "react-icons/ai";
import CarsTable from './CarsTable';
import Chart from './Chart';
import {getVehicles, getBrands} from "../redux/CarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


function AdminPanel() {
    const [show, setShow] = useState(false)
    const [user,setUser]=useState("")
    const [allCars,setAllcars]=useState({})
    const [panel, setPanel] = useState(1)
    const [cars,setCars]=useState([])
    const carsData=useSelector(state=>state.cars.cars)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      setCars(carsData)
    }, [carsData])
    
    useEffect(() => {
        dispatch(getVehicles());
        dispatch(getBrands());
        setUser(sessionStorage.getItem("email"))
    }, [dispatch]);
    useEffect(()=>{
        if(cars.length>0){
            let data = []
            for (let i=0; i<cars.length; i++) {
                data.push(cars[i].brand)
              }
              data = (Array.from(new Set(data)).sort())
              let data2=[]
            for (let i=0; i<data.length; i++) {
                data2.push({
                    brand:data[i],
                    "Number Of Cars":(cars.filter((p)=>p.brand===data[i])).length
                })

            }
            setAllcars(data2)
        }
    },[cars])
    const logOut=() => {
      sessionStorage.removeItem("email")
      sessionStorage.removeItem("password")
      navigate("/")
    }

  return (
    <div className='flex flex-row'>
        <div className='h-screen bg-custom-b1 w-16  hover:w-52 transition-width duration-200' 
        onMouseOver={()=>{setShow(true)}}
        onMouseOut={()=>{setShow(false)}}>
            <div className='flex flex-col h-screen justify-between ms-4 ' >
                <div className=''>
                <p className='text-custom-w1 text-md mt-2' style={{'display':show?'block':'none'}}>{user}</p>
                <button className='text-custom-w1 flex flex-row mt-4 hover:text-custom-r1 items-center '
                onClick={()=>{setPanel(1)}}
                ><AiOutlineHome className='text-custom-w1 text-2xl'/> 
                <span className='ms-2 text-xl' style={{'display':show?'block':'none'}}>Home</span>
                </button>
                <button className='text-custom-w1 flex flex-row mt-4 hover:text-custom-r1 items-center '
                onClick={()=>{setPanel(2)}}
                ><AiOutlineCar className='text-custom-w1 text-2xl'/> 
                <span className='ms-2 text-xl' style={{'display':show?'block':'none'}}>Cars</span>
                </button>
                <button className='text-custom-w1 flex flex-row mt-4 hover:text-custom-r1 items-center '
                onClick={()=>{setPanel(3)}}
                ><AiOutlineForm className='text-custom-w1 text-2xl'/> 
                <span className='ms-2 text-xl' style={{'display':show?'block':'none'}}>Edit</span>
                </button>
                </div>
                <div className='mb-4 h-10 '>
                <button className='text-custom-w1 flex flex-row hover:text-custom-r1 items-center '
                onClick={logOut}
                ><AiOutlineLogout className='text-custom-w1 text-2xl'/> 
                <span className='ms-2 text-xl' style={{'display':show?'block':'none'}} >LogOut</span>
                </button>
                </div>
            </div>
        </div>
        {(panel === 1 || panel === 2)?
        (
            <div className='flex flex-col w-full'>
        <div className='flex flex-col items-center  mt-4 mx-4 border-2 h-fit shadow-xl shadow-custom-b1'>
            <p className='text-custom-b1 text-xl font-bold mt-1'>All Cars</p>
            <Chart cars={allCars}/>
        </div>
        </div>
        ):(
            <div className='flex flex-col w-full'>
                <CarsTable  />
            </div>
        )}
        
        
    </div>
  )
}

export default AdminPanel