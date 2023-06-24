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
        },updatestudent:(state,action)=>{
            state.value.map((studentss)=>{
                if(studentss.id==action.payload.id){
                    studentss.firstname = action.payload.firstname
                    studentss.lastname = action.payload.lastname
                    studentss.email = action.payload.email
                    studentss.phno = action.payload.phno
                    studentss.batchno = action.payload.batchno
                    studentss.course = action.payload.course
                }
            })
        },
        deleteStudent:(state,action)=>{
            state.value = state.value.filter((studentsss)=>studentsss.id!==action.payload.id)
        }
    }
})
export default studentSlice.reducer
export const {addstudent,updatestudent,deleteStudent} = studentSlice.actions