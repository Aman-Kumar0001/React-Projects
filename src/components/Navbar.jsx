import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const Navbar = () => {

    let search = () => {

    }

    return (
        <>
            <div className="container-fluid px-5 pt-5 pb-4" style={{ boxShadow: '0 3px 5px #00000029' }}>
                <div className="row d-flex justify-content-around px-5 mx-5">
                    <div className="col">
                        <img src="https://gomainspring.com/wp-content/uploads/elementor/thumbs/mainspring-logo-cybersecurity-it-services-automation-qjudg0lgsu8o3zserelwpic5pgl0i7mbxusowrykj8.png" alt="" />
                    </div>
                    <div className="col my-auto text-end">
                        <i className="fa-solid fa-envelope navIcon"></i>
                        <i className="fa-solid fa-magnifying-glass navIcon ms-3" onClick={search}></i>
                    </div>
                </div>
              
            </div>
        </>
    )
}

export default Navbar