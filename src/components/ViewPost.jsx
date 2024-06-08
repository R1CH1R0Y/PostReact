import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPost = () => {
    const [post,changeData]=useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (response)=>{
          changeData(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">All Posts</h5>
                    <p></p>
                    <div className="container">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                {
                                    post.map(
                                        (value,index)=>{
                                            return <div>
                                                <br />
                                            <div class="card mb-3">
                                                <div class="card text-bg-dark mb-3">
                                                    <br />
                                                    <h5 class="card-title">User Id : {value.userId}</h5>
                                                    <p class="card-text">Id : {value.id}</p>
                                                    <p class="card-text">Title : {value.title}</p>
                                                    <p class="card-text">Body : </p>
                                                    <p class="card-text">{value.body}</p>
                                                    <br />
                                                </div>
                                            </div>
                                            <br />
                                            </div>
                                        }
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <br />
        </div>
    )
}

export default ViewPost