import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  CarService  from '../services/CarService'

export const getVehicles = createAsyncThunk(
    "cars/retrieve",
    async () => {
      const res = await CarService.getVehicles();
      return res.data;
    }
  );
export const getCar = createAsyncThunk(
  "cars/getCar",
  async ({id}) => {
    const res = await CarService.getVehicle(id);
    return res.data;
  }
);
export const getBrands = createAsyncThunk(
  "cars/getBrands",
  async () => {
    const res = await CarService.getBrands();
    return res.data;
  }
);
export const getModels = createAsyncThunk(
  "cars/getModels",
  async ({model}) => {
    const res = await CarService.getModels(model);
    return res.data;
  }
);
export const getLocations = createAsyncThunk(
  "cars/getLocations",
  async () => {
    const res = await CarService.getLocations();
    return res.data;
  }
);
export const createVehicle=createAsyncThunk(
    "cars/create",
    async({data})=>{
      const res = await CarService.create(data);
        return res.data;
    }
);
export const updateVehicle = createAsyncThunk(
    "cars/update",
    async ({id,data}) =>{
        const res = await CarService.update(id,data);
        return res.data;
    }
);
export const deleteVehicle = createAsyncThunk(
    "cars/delete",
    async ({id})=>{
         await CarService.remove(id);
        return ({id})
    }
);

export const CarSlice = createSlice({
    name: "cars",
    initialState: {
        cars:[],
        brands:[],
        models:[]
    },
    reducers: {
    },
    extraReducers:{
        [createVehicle.fulfilled]: (state, action) => {
          return{
            ...state,
            cars: [...state.cars, action.payload],
          }
          },
          [getVehicles.fulfilled]: (state, action) => {
            return {
              ...state,
              cars: action.payload,
            };
          },
          [updateVehicle.fulfilled]: (state, action) => {
            const index = state.cars.findIndex(tutorial => tutorial.id === action.payload.id);
            state.cars[index] = {
              ...state.cars[index],
              ...action.payload,
            };
            return state
          },
          [deleteVehicle.fulfilled]: (state, action) => {
            let index = state.cars.findIndex(({ id }) => id === action.payload.id);
            state.cars.splice(index, 1)
          },
          [getBrands.fulfilled]: (state, action) => {
            return {
              ...state,
              brands: action.payload
            };
          },
          [getModels.fulfilled]: (state, action) => {
            return {
              ...state,
              models: action.payload
            };
          }
    }
})

const { reducer } = CarSlice;
export default reducer;