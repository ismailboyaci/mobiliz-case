import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {  updateVehicle } from "../redux/CarSlice";


function Modal(props) {
  const car = props.car[0]
  const [index,setIndex]=useState(0)
  const [brand,setBrand]=useState(car.brand)
  const [model,setModel]=useState(car.model)
  const [year,setYear]=useState(car.modelYear)
  const [plate,setPlate]=useState(car.plate)
  const [notes,setNotes]=useState(car.notes)
  const dispatch = useDispatch();
  useEffect(() => {
    const index = props.brands.map(e => e.model).indexOf(car.model);
    setIndex(props.brands[index].id)
  }, [car.model, props.brands])
  
  const editTask = () => {
    const id = car.id
    const data = {
      modelId:index,
      modelYear:Number(year),
      plate:plate,
      notes:notes
    };
    dispatch(updateVehicle({ id, data }));
    props.handleClose();
  };
  

  return (
    <div className="bg-custom-b1 bg-opacity-80 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className=" bg-slate-300 border-2 border-light-4 px-16 py-14 rounded-md text-center flex flex-col ">
        <h1 className="text-xl mb-4 font-bold text-custom-b1">Edit Car</h1>
        <div>
          <form className="flex flex-col">
            <label className="text-custom-b1 font-medium">BRAND</label>
            <input type="text" value={brand || "" } onChange={(e)=>{setBrand(e.target.value)}} className="p-1 rounded-md"/>
            <label className="text-custom-b1 font-medium">Model</label>
            <input type="text" value={model || "" } onChange={(e)=>{setModel(e.target.value)}} className="p-1 rounded-md"/>
            <label className="text-custom-b1 font-medium">Year</label>
            <input type="text" value={year || "" }  onChange={(e)=>{setYear(e.target.value)}} className="p-1 rounded-md"/>
            <label className="text-custom-b1 font-medium">Platte</label>
            <input type="text" value={plate || "" } onChange={(e)=>{setPlate(e.target.value)}} className="p-1 rounded-md"/>
            <label className="text-custom-b1 font-medium">Notes</label>
            <textarea  cols="20" rows="5" value={notes || ""} onChange={(e)=>{setNotes(e.target.value)}}></textarea>
          </form>
        </div>
        <div>
          <button
            className="text-custom-w1 border-2 rounded  px-6 mt-4 mx-2 hover:border-custom-r1 bg-custom-b1 w-1/2"
            onClick={props.handleClose}
          >
            Close
          </button>
          <button
            className='text-custom-w1 border-2 rounded  px-6 mt-4 mx-2 hover:border-green-400 bg-custom-b1 w-1/2'
            onClick={() => {
              editTask();
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;