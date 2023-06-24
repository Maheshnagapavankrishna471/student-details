import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const students = useSelector((state) => state.kids.value)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    const serachData = students.filter((val) => {

        if (search) {
            return val.firstname.toLowerCase().includes(search.toLowerCase())
        }
        else {
            return students
        }
    })
    //  console.log(serachData,'inside filtered data')


    const filterRedData = serachData.filter((val) => {
        return val.course.toLowerCase().includes(filter.toLowerCase())
    })
    // console.log(filterRedData,'heloooooo')  

    return (
        <>
            <button className='btn1'><Link to="/Addstudent">AddStudent👨🏻‍🏫</Link></button>
            <input type='search'className='searchbar'
                placeholder='search here....'
                onChange={(e) => {
                    setSearch(e.target.value)
                }}>
            </input>
            <select name='course' className='dropdown' onChange={(e) => {
                setFilter(e.target.value)
            }}>
                <option value="" selected>FILTER BY COURSES</option>
                <option value="fsd">FSD</option>
                <option value="ds">DS</option>
                {/* <option value="cse">COMPUTER SCIENCE</option> */}
            </select>

            {/* {
                filteredData.map((student, index) => {
                    return (
                        <Card id={student.id}
                            firstname={student.firstname}
                            lastname={student.lastname}
                            email={student.email}
                            phno={student.phno}
                            batchno={student.batchno}
                            course={student.course}
                            sNo={index + 1}
                        />
                    )
                })
            } */}
            <div className='mt-5 w-100'>
            <table className='mx-auto'>
                        <tr>
                            <th>SNo</th>
                            <th>firstname</th>
                            <th>lastname</th>
                            <th>email</th>
                            <th>phone.no</th>
                            <th>batch.no</th>
                            <th>course</th>
                            {/* <th>actions</th> */}
                        </tr>

                        {
                filterRedData.map((search, index) => {
                    return (
                        <>
                        <tr>
                            <Card id={search.id}
                                firstname={search.firstname}
                                lastname={search.lastname}
                                email={search.email}
                                phno={search.phno}
                                batchno={search.batchno}
                                course={search.course}
                                sNo={index + 1}
                            />
                        </tr>
                        </>
                    )
                })
            }

            </table>
            </div>
         
        </>
    )
}
export default Home
