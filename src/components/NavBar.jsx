import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i><b>Post App</b></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Add Post</Link>
        <Link class="nav-link active" to="/r">Remove Post</Link>
        <Link class="nav-link active" to="/s">Search Post</Link>
        <Link class="nav-link active" to="/v">All Posts</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar