import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
        <>
        <div className="container">
            <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><NavLink to="/" className="nav-link fs-5 text-light">All</NavLink></li>
                <li className="nav-item"><NavLink to="/active" className="nav-link fs-5 text-light">Active</NavLink></li>
                <li className="nav-item"><NavLink to="/completed" className="nav-link fs-5 text-light">Completed</NavLink></li>
            </ul>
            </header>
        </div>
    </>
  )
}

export default Nav