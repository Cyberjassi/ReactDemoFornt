import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
const baseUrl = "http://127.0.0.1:8000/api/teacher/"
function TeacherRegister() {
  const [teacherData,setteacherData] = useState({
    'full_name':'',
    'email':'',
    'password':'',
    'qualification':'',
    'mobile_no':'',
    'skills':'',
    'status':''
  
  });
  // Change Element Value
  const handleChange=(event)=>{
      setteacherData({
        ...teacherData,
        [event.target.name]:event.target.value
      })
  }
  console.log(teacherData)
  // for changing our title
  
  useEffect(()=>{
    document.title = 'Teacher Register';
  })

  // if teacher already login then it redirect to dashboard
  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
if(teacherLoginStatus=='true'){
  window.location.href='/teacher-dashboard';
}
 
 const submitForm=()=>{
  const teacherFormData = new FormData();
  teacherFormData.append("full_name",teacherData.full_name)
  teacherFormData.append("email",teacherData.email)
  teacherFormData.append("password",teacherData.password)
  teacherFormData.append("qualification",teacherData.qualification)
  teacherFormData.append("mobile_no",teacherData.mobile_no)
  teacherFormData.append("skills",teacherData.skills)
try{
  axios.post(baseUrl,teacherFormData).then((response)=>{
    // for set status success
    setteacherData({
      'full_name':'',
      'email':'',
      'password':'',
      'qualification':'',
      'mobile_no':'',
      'skills':'',
      'status':'success'
    });
  });
 }catch(error){
    console.log(error);
        // for set status error
    setteacherData({'status':'error'})
 }}
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 offset-3">
            {teacherData.status=='success' && <p className='text-success'>Thanks for Your Registeration</p>}
            {!teacherData.status=='error' && <p className='text-danger'>Something Wrong Happend!</p>}
            <div className="card">
              <h3 className="card-header">User Register</h3>
              <div className="card-body">
                <form>
                <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                    >
                      Full Name
                    </label>
                    <input
                       name="full_name"
                       value={teacherData.full_name}
                       onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                   
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                    name="email"
                    value={teacherData.email}
                    onChange={handleChange}
                      type="email"
                      className="form-control"
                    />
                   
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                    name="password"
                    value={teacherData.password}
                    onChange={handleChange}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                    >
                      Qualification
                    </label>
                    <input
                    name="qualification"
                    value={teacherData.qualification}
                    onChange={handleChange}
                      type="text"
                      className="form-control"
                    />
                   
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                    >
                      Mobile Number
                    </label>
                    <input
                    name="mobile_no"
                    value={teacherData.mobile_no}
                    onChange={handleChange}
                      type="integer"
                      className="form-control"
                    />
                   
                  </div>
                 
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                    >
                      Skills
                    </label>
                    <textarea 
                    name="skills"
                    value={teacherData.skills}
                    onChange={handleChange}
                    className='form-control' ></textarea>
                    <div id="emailHelp" className="form-text">Php,Python,JavaScript,etc</div>
                   
                  </div>
                 
                  <button onClick={submitForm} type="submit" className="btn btn-primary">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherRegister
