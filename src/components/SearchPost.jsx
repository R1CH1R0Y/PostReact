import React from 'react'
import NavBar from './NavBar'

const SearchPost = () => {
  return (
    <div>
        <NavBar/>
        <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Search Post</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">User Id :</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-warning">Search</button>
                </div>
            </div>
            <br />
    </div>
  )
}

export default SearchPost