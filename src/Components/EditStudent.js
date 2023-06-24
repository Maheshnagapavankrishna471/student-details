import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatestudent } from "../features/studentSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Addstudent.css";
import { toast } from "react-toastify";


const EditStudent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sstudents = useSelector((state) => state.kids.value);
  const currentStudent = sstudents.find((student) => student.id == id);
  const navigate = useNavigate();
  const [data, setData] = useState({ ...currentStudent });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("before onchange", data);
    setData({ ...data, [name]: value });
    console.log("after onchange", data);
  };
  const dbsUpate = () => {
    dispatch(updatestudent({ id: id, ...data }));
    toast("🔥Edited sucessfully!")
    navigate("/");
  };
  return (
    <>
    <h1 style={{color:'white'}}>update student</h1>
      <div className="main">
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
        {/* <input className="tagg" onChange={handleChange} name='course' placeholder='courses' value={data.course} /> */}
        <select value={data.course} className="tagg" name="course" onChange={handleChange}>
          {/* <option value="" selected>
            select courses
          </option> */}
          <option value="fsd">FSD</option>
          <option value="ds">DS</option>
        </select>
        <div
          style={{ width: "100%" }}
          className="d-sm-block  d-md-flex justify-content-around"
        >
          <div>
            <button className=" btn btn-primary" id="btn">
              <Link to="/" className="text-light">
                MainPage
              </Link>
            </button>
          </div>
          <div>
            <button className="btn btn-success" id="btn" onClick={dbsUpate}>
              EditStudent
            </button>
          </div>
          {/* <button onClick={dbsUpate}>editstudent</button> */}
        </div>
      </div>
    </>
  );
};
export default EditStudent;
