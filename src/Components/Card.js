import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent } from '../features/studentSlice'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({id,firstname,lastname,email,phno,batchno,course,sNo}) => {
    const dispatch = useDispatch()
    const students = useSelector((state) => state.kids.value)
    const deleteM = () => {{
      window.confirm("are u sure that u wanted to delete this item??")
    }
        dispatch(deleteStudent({ id: id}))
    }
  return (
    <>
    <td>{sNo}</td>
    <td>{firstname}</td>
    <td>{lastname}</td>
    <td>{email}</td>
    <td>{phno}</td>
    <td>{batchno}</td>
    <td>{course}</td>
    <td><Link to={`/updatecontact/${id}`}><button>EditStudent</button></Link></td>
    <td><button onClick={deleteM}>DELETE</button></td>
    </>
  )
}
export default Card
