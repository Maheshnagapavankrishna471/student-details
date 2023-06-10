import { createSlice } from "@reduxjs/toolkit";


const studentsData = [
    {id:1,firstname:'mahesh',lastname:'manepalli',email:'nani123',phno:123456789,batchno:22,course:'FSD'}
]

const studentSlice = createSlice({
    name:'students',
    initialState:{
        value:studentsData
    },
    reducers:{
        addstudent:(state,action)=>{
            state.value.push(action.payload)
        }

    }

})

export default studentSlice.reducer

export const {addstudent} = studentSlice.actions