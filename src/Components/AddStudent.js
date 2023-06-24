import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addstudent } from "../features/studentSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Addstudent.css";
import { toast } from "react-toastify";

const AddStudent = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phno: "",
    batchno: "",
    course: "",
  });
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const student = useSelector((state) => state.kids.value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(data.firstname)

    setData({ ...data, [name]: value });
  };
  const dbs = () => {
    dispatch(addstudent({ id: student.length + 1, ...data }));
    toast("⚡Added sucessfully!")
    navigate("/");
  };

  
  return (
    <div className="main">
      {/* <TextField required id="outlined-required" label="FirstName" className='tagg' onChange={handleChange}  name='firstname'placeholder='firstname' value={data.firstname}/> */}
      <input
        className="tagg"
        onChange={handleChange}
        name="firstname"
        placeholder="firstname"
        value={data.firstname}
      />
      <input
        className="tagg"
        onChange={handleChange}
        name="lastname"
        placeholder="lastname"
        value={data.lastname}
      />
      <input
        className="tagg"
        onChange={handleChange}
        name="email"
        placeholder="email"
        value={data.email}
      />
      <input
        className="tagg"
        onChange={handleChange}
        name="phno"
        placeholder="phno"
        value={data.phno}
      />
      <input
        className="tagg"
        onChange={handleChange}
        name="batchno"
        placeholder="batchno"
        value={data.batchno}
      />

      {/* <input onChange={handleChange} name='course'placeholder='courses' value={data.course}/> */}
      <select className="tagg" name="course" onChange={handleChange}>
        <option value="" selected>
          select courses
        </option>
        <option value="fsd">FSD</option>
        <option value="ds">DS</option>
      </select>
      <div style={{ width: "100%" }} className="d-sm-block  d-md-flex justify-content-around">
        {/* <button className='col-md-3 btn btn-primary'><Link to="/" className='text-light'>Previous</Link></button>
        <button className='col-md-3 btn btn-success' onClick={dbs}>AddStudent</button>
        <button className='col-md-3 btn btn-dark'><Link to="/updatecontact/:id">Next</Link></button> */}
        <div>
          <button className=" btn btn-primary" id='btn'>
            <Link to="/" className="text-light">
              Previous
            </Link>
          </button>
        </div>
        <div>
          <button className="btn btn-success" id='btn' onClick={dbs}>
            AddStudent
          </button>
        </div>
        <div>
          <button className=" btn btn-dark" id='btn'>
            <Link to="/updatecontact/:id">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddStudent;
