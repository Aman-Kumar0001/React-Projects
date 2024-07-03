import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer d-flex flex-wrap">
                    <div className="container py-2">
                        <div className="row footer2">
                            <div className="col-md-4 footercol1">
                                <img src="https://gomainspring.com/wp-content/uploads/2023/12/mainspring-logo-cybersecurity-it-services-automation.png" alt="MainSpring Logo" width='200px'/>
                                <p>MainSpring, Inc.</p>
                            </div>
                            <div className="col-md-4">
                                <p><i className="fas fa-map-marker-alt" /> 8 E. Second Street, Suite 205, Frederick, MD 21701</p>
                                <p><i className="fas fa-phone" /> 301.948.8077</p>
                            </div>
                            <div className="col-md-4 text-right" style={{width:'300px'}}>
                                <p><i className="fas fa-envelope" /> hello@gomainspring.com</p>
                                <div className="social-icons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                    <a href="#"><i className="fab fa-xing" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container text-center">
                        <p>© 2024 <a href="#">MainSpring, Inc.</a> All rights reserved | Designed &amp; Developed by <a href="#">Aman Kumar</a> | <a href="#">Privacy Policy</a></p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer