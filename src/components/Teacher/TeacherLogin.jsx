import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import Dashboard from "../user/Dashboard";
const baseUrl = "http://127.0.0.1:8000/api"

function TeacherLogin() {
  const [teacherLogin,SetTeacherLogin] = useState({
      'email':'',
      'password':''
  });
 const handleClick =(event)=>{
  SetTeacherLogin({
    ...teacherLogin,
    [event.target.name]:event.target.value
 })
}

const submitForm = async (event) => {
  
  event.preventDefault();

  try {
    const teacherFormData = new FormData;
    teacherFormData.append('email',teacherLogin.email)
    teacherFormData.append('password',teacherLogin.password)
      await axios.post('http://127.0.0.1:8000/api/teacher-login', teacherFormData)
    .then((res)=>{
      // if backend response is true {bool:true} then we set in localStorage 
      if(res.data.bool == true){
        localStorage.setItem('teacherLoginStatus',true)
        // redirect to Dashboard page
        window.location.href='/teacher-dashboard';
      }

    })
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// if teacher is login then we redirect teacher to dashboard
const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
if(teacherLoginStatus=='true'){
  window.location.href='/teacher-dashboard';
}

  useEffect(()=>{
    document.title = "Teacher Login"
  })
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card">
              <h3 className="card-header">User Login</h3>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label text-start"
                    >
                      Email
                    </label>

                    <input onChange={handleClick} value={teacherLogin.email} name="email" type="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                    onChange={handleClick}
                    value={teacherLogin.password}
                    name="password"
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  {/* <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Remember me
                    </label>
                  </div> */}
                  <button type="submit" onClick={submitForm} className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLogin;
