import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addstudent } from '../features/studentSlice'
import DisplayStudent from './DisplayStudent'

const AddStudent = () => {
        const[data, setData] = useState({firstname:'',lastname:'',email:'',phno:'',batchno:'',course:''})


        const dispatch = useDispatch()
        const student = useSelector((state)=>state.kids.value)
        console.log(student,"getting form store")
     const handleChange = (e)=>{
        const{name,value} = e.target
        console.log(data,'before change')
        setData({...data,[name]:value})
        console.log(data,'after change')
     }  
     const dbs =()=>{
        console.log('hi')
        dispatch(addstudent({id:student.length+1,...data}))
        
     } 




  return (
    <>
    <input onChange={handleChange}  name='firstname'placeholder='firstname'/>
    <input onChange={handleChange} name='lastname'placeholder='lastname'/>
    <input onChange={handleChange} name='email'placeholder='email'/>
    <input onChange={handleChange} name='phno'placeholder='phno'/>
    <input onChange={handleChange} name='batchno'placeholder='batchno'/>
    <input onChange={handleChange} name='course'placeholder='courses'/>
    <button onClick={dbs}>addStudent</button>
    <DisplayStudent/>
    
    
    
    </>
  )
}

export default AddStudent
