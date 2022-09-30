
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createVehicle } from "../redux/CarSlice";


function ModalAddCar(props) {
  const [brand,setBrand]=useState("")
  const [model,setModel]=useState("")
  const [year,setYear]=useState("")
  const [plate,setPlate]=useState("")
  const [notes,setNotes]=useState("")
  const dispatch = useDispatch();
  const [brands,setBrands]=useState([])
  const [models,setModels]=useState([])
  const [index,setIndex]=useState()

  useEffect(() => {
    let data = []
    for (let i=0; i<props.brands.length; i++) {
      data.push(props.brands[i].brand)
    }
    setBrands(Array.from(new Set(data)).sort())
  }, [props.brands])
  useEffect(() => {
    let data = []
    if(brand!==""){
      for(let i= 0 ; i<props.brands.length;i++){
        if(props.brands[i].brand === brand){
          data.push(props.brands[i].model)
      }
      setModels(data)
    }}
  }, [brand, props.brands])
  useEffect(() => {
    if(model){
    const index = props.brands.map(e => e.model).indexOf(model);
      setIndex(props.brands[index].id)
    }
  }, [model, props.brands])
  
  
  
  const addCar = () => {
    const data = {
      modelId:index,
      modelYear:Number(year),
      plate:plate,
      notes:notes
    };
    dispatch(createVehicle( {data} ));
    props.handleClose();
  };
  

  return (
    <div className="bg-custom-b1 bg-opacity-80 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className=" bg-slate-300 border-2 border-light-4 px-16 py-14 rounded-md text-center flex flex-col ">
        <h1 className="text-xl mb-4 font-bold text-custom-b1">Add Car</h1>
        <div>
          <form className="flex flex-col">
            <label className="text-custom-b1 font-medium">BRAND</label>
            <select onChange={(e)=>{setBrand(e.target.value)}} className="p-1 rounded-md">
              <option>Select Brand</option>
              {brands.map((model,i)=>(
                <option key={i} value={model}>{model}</option>
              ))}
            </select>
            <label className="text-custom-b1 font-medium">Model</label>
            <select onChange={(e)=>{setModel(e.target.value)}} className="p-1 rounded-md">
              <option>Select Model</option>
              {models.map((model,i)=>(
                <option key={i} value={model}>{model}</option>
              ))}
            </select>
            <label className="text-custom-b1 font-medium">Year</label>
            <input type="text" value={year || "" }  onChange={(e)=>{setYear(e.target.value)}} className="p-1 rounded-md"/>
            <label className="text-custom-b1 font-medium">Platte</label>
            <input type="text" value={plate || "" } onChange={(e)=>{setPlate(e.target.value)}} className="p-1 rounded-md"/>
            <label className="text-custom-b1 font-medium">Notes</label>
            <textarea  cols="20" rows="5" value={notes || ""} onChange={(e)=>{setNotes(e.target.value)}} className="p-1 rounded-md"></textarea>
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
              addCar();
            }}
          >
            Add 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAddCar;