import React from 'react'

function Register() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 offset-3">
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
                      type="email"
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
                      type="email"
                      className="form-control"
                    />
                   
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputEmail1"
                      className="form-label"
                    >
                      Username
                    </label>
                    <input
                      type="email"
                      className="form-control"
                    />
                   
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
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
                      Intrests
                    </label>
                    <textarea className='form-control' ></textarea>
                    <div id="emailHelp" className="form-text">Php,Python,JavaScript,etc</div>
                   
                  </div>
                 
                  <button type="submit" className="btn btn-primary">
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

export default Register
