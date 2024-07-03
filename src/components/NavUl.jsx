import React from 'react'

const NavUl = () => {
    return (
        <div className='container'>
            <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-5 mt-2">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Our Team</a></li>
                            <li><a className="dropdown-item" href="#">Industries</a></li>  <li><a className="dropdown-item" href="#">Something else here</a></li>
                            <li><a className="dropdown-item" href="#">Partners & Certifications</a></li>  <li><a className="dropdown-item" href="#">Careers</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Solutions
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Cybersecurity</a></li>
                            <li><a className="dropdown-item" href="#">ProSuite</a></li>  <li><a className="dropdown-item" href="#">Automation</a></li>
                            <li><a className="dropdown-item" href="#">vCIO</a></li>  <li><a className="dropdown-item" href="#">Cost Management</a></li>
                            <li><a className="dropdown-item" href="#">Support & Help Desk</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Resources
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Blog</a></li>
                            <li><a className="dropdown-item" href="#">Media Resources</a></li>  <li><a className="dropdown-item" href="#">Downloads</a></li>
                            <li><a className="dropdown-item" href="#">News & Events</a></li>  <li><a className="dropdown-item" href="#">Careers</a></li>
                        </ul>
                    </li>
                    <li className='text-primary mt-2'>Contact Us</li>
                </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavUl