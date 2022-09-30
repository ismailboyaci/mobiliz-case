import { configureStore } from '@reduxjs/toolkit'
import  CarReducer  from './CarSlice'
const reducer ={
    cars:CarReducer
}
const Store = configureStore({
    reducer:reducer,
    devTools:true,
    /* middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        immutableCheck:{warnAfter:128},
        serializableCheck: { warnAfter: 128 },
    }) */
})
export default Store