import React from 'react'
import { useSelector } from 'react-redux'

const DisplayStudent = () => {
    const student = useSelector((state) =>state.kids.value)
    console.log(student,'this is display')
  return (
   <>
   {
    student.map(studentt =>(
        <>
        <h1>{studentt.firstname}</h1>
        <h1>{studentt.lastname}</h1>
        <h1>{studentt.email}</h1>
        <h1>{studentt.phno}</h1>
        <h1>{studentt.batchno}</h1>
        <h1>{studentt.course}</h1>



        </>

    )
    )
   }
   
   </>
  )
}

export default DisplayStudent
