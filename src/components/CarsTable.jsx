import React, {useEffect, useState} from 'react'
import { AiOutlineDelete, AiOutlineSelect } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { BiSort } from "react-icons/bi";
import Modal from './Modal';
import ModalAddCar from './ModalAddCar';
import { deleteVehicle, getVehicles } from '../redux/CarSlice';

function CarsTable() {
    const vehiclesData = useSelector(state=>state.cars.cars)
    const brandsData = useSelector(state=>state.cars.brands)
    const [cars,setCars]=useState([])
    const [brands,setBrands] = useState([])
    const [isOpen,setIsOpen]=useState(false);
    const [addCar,setAddCar] = useState(false);
    const [id,setId]=useState(0);
    const [carsData,setcarsData] = useState([])
    const [page,setPage] = useState(1)
    const [pages,setPages] = useState(0)
    const [pageArray,setPageArray] = useState([])
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setCars(vehiclesData)
        setBrands(brandsData)
    },[brandsData, vehiclesData])
    useEffect(() => {
        if(cars.length>0){

            let total = cars.length
            setPages(Math.round(total/9))
            setPageArray(Array(pages).fill(""))
            setcarsData(cars.slice((page*10-10),(page*10)))
        }
    }, [cars, cars.length, page, pages])

    const previousClick=() => {
      if(page!==1){setPage(page-1)}
    };
    const nextClick=() => {
        if(page!==pages){setPage(page+1)}
    }
    /* const sortBrand=() => {
        const data = [...cars].sort((a, b) => a.brand.toLowerCase() < b.brand.toLowerCase() ? -1 : 1 );
      setCars(data)
    };
    const sortModel=() => {
        const data = [...cars].sort((a, b) => a.model.toLowerCase() < b.model.toLowerCase() ? -1 : 1 );
      setCars(data)
    }
    const sortYear=() => {
        const data = [...cars].sort((a, b) => a.modelYear - b.modelYear );
      setCars(data)
    } */
    const togglePopup=(id) => {
        setIsOpen(!isOpen);setId(id);
        dispatch(getVehicles())
    }
    const toggleAddCar=() => {
      setAddCar(!addCar)
    }
    const deleteCar=(id)=>{
        dispatch(deleteVehicle({id}))
    }

    

  return (
    <div className="overflow-x-auto relative">
        <div className='flex justify-end m-3    '>
            <button className='border-2 rounded-sm border-custom-b1 bg-custom-b1 text-custom-w1 font-medium p-1 hover:text-custom-r1'
            onClick={toggleAddCar}>ADD CAR</button>
        </div>
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-custom-b1 uppercase bg-gray-200  ">
            <tr>
                <th scope="col" className="py-3 px-6 w-1/5">
                   <p className='flex items-center cursor-pointer hover:text-custom-r1' /* onClick={sortBrand} */>BRAND <BiSort className='ms-2' /></p> 
                </th>
                <th scope="col" className="py-3 px-6 w-1/5">
                    <p className='flex items-center cursor-pointer hover:text-custom-r1' /* onClick={sortModel} */>MODEL <BiSort className='ms-2' /></p> 
                </th>
                <th scope="col" className="py-3 px-6 w-1/5">
                   <p className='flex items-center cursor-pointer hover:text-custom-r1' /* onClick={sortYear} */>YEAR <BiSort className='ms-2' /></p> 
                </th>
                <th scope="col" className="py-3 px-6 w-1/6">
                    <p>PLATTE</p>
                </th>
                <th scope="col" className="py-3 px-6">
                    <p>NOTES</p>
                </th>
                <th scope="col" className="py-3 px-6">
                    <p>ACTION</p>
                </th>
            </tr>
        </thead>
        <tbody>
            {carsData.map((car,index)=>(
                <tr className=" bg-gray-100 border-b " key={index}>
                <th scope="row" className="py-4 px-6 font-medium text-custom-b1 whitespace-nowrap ">
                    {car.brand}
                </th>
                <td className="py-4 px-6">
                    {car.model}
                </td>
                <td className="py-4 px-6">
                    {car.modelYear}
                </td>
                <td className="py-4 px-6">
                    {car.plate}
                </td>
                <td className="py-4 px-6">
                    {car.notes}
                </td>
                <td className="py-4 px-6">
                    <button className='text-xl text-custom-b1 hover:text-custom-r1' onClick={()=>{togglePopup(car.id)}}><AiOutlineSelect/></button>
                    <button className='text-xl text-custom-b1 hover:text-custom-r1' onClick={()=>{deleteCar(car.id)}}><AiOutlineDelete /></button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
        <div>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item"><button className="page-link" onClick={previousClick}>Previous</button></li>
                {pageArray.map((page,index)=>(
                    <li className="page-item" key={index}><button className="page-link"  onClick={()=>{setPage(index+1)}} > {index+1} </button></li>
                ))} 
                <li className="page-item"><button className="page-link" onClick={nextClick} >Next</button></li>
            </ul>
        </nav>
        </div>
        <div>
            {isOpen && <Modal car={cars.filter((car)=>car.id===id)}  handleClose={togglePopup} brands={brands} />}
        </div>
        <div>
            {addCar && <ModalAddCar  handleClose={toggleAddCar} brands={brands} />}
        </div>
    </div>
  )
}

export default CarsTable