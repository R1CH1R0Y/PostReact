import React from 'react'
import NavBar from './NavBar'

const RemovePost = () => {
  return (
    <div>
        <NavBar/>
        <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Remove Post</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Id :</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-outline-danger">Remove</button>
                </div>
            </div>
            <br />
    </div>
  )
}

export default RemovePost