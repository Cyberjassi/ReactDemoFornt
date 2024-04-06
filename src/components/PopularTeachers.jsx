import React from 'react';
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react';
// axios is responsible to send http request to server
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'
export default function PopularTeachers() {
  const [teacher,setTeacher] = useState(null)
  useEffect(()=>{
    // use for fatch data
    axios.get(baseUrl+'/teacher/').then((response)=>{
      setTeacher(response.data);
    });
  },[]);
  console.log(teacher)
  return (
    <div className="container mt-3">
     <h3 className="pb-1 my-4 text-start">
          Popular Teachers{" "}
          
        </h3>
        <div className="row mb-4">
          <div className="col-md-3 mb-4">
            <div className="card">
            <Link to="/detail/1">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/300"
                  alt="Card image cap"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/detail/1">TeachersName</Link>
                </h5>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <a href="#">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/300"
                  alt="Card image cap"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#">TeachersName</a>
                </h5>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <a href="#">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/300"
                  alt="Card image cap"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#">TeachersName</a>
                </h5>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <a href="#">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/300"
                  alt="Card image cap"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#">TeachersName</a>
                </h5>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
            <Link to="/detail/1">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/300"
                  alt="Card image cap"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/detail/1">TeachersName</Link>
                </h5>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                 
                </div>
              </div>
            </div>
          </div>  <div className="col-md-3 mb-4">
            <div className="card">
            <Link to="/detail/1">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/300"
                  alt="Card image cap"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/detail/1">TeachersName</Link>
                </h5>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                 
                </div>
              </div>
            </div>
          </div>  <div className="col-md-3 mb-4">
            <div className="card">
            <Link to="/detail/1">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/300"
                  alt="Card image cap"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/detail/1">TeachersName</Link>
                </h5>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                 
                </div>
              </div>
            </div>
          </div>  <div className="col-md-3 mb-4">
            <div className="card">
            <Link to="/detail/1">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/200/300"
                  alt="Card image cap"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/detail/1">TeachersName</Link>
                </h5>
              </div>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4.5/5</span>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Latest Courses */}

        {/* Pagination Start */}
        <nav aria-label="Page navigation example mt-5">
  <ul className="pagination justify-content-center">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
        {/* Pagination End */}
    </div>
  )
}
