import React from 'react';

function Section2() {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col">
          <form action="index.html" method="post">
            <h1>Connect <span className='text-primary fs-1'>With Us</span></h1>

            <fieldset>

              <label htmlFor="name">First Name</label><br />
              <input type="text" id="name" name="first_name" />

              <label htmlFor="name">Last Name</label><br />
              <input type="text" id="name" name="last_name" />

              <label htmlFor="email">Email Address*</label><br />
              <input type="email" id="mail" placeholder="Your email address" name="user_email" />

              <label htmlFor="phone_No">Phone Number*</label><br />
              <input type="number" id="number" placeholder="Your phone number" name="user_number" />

              <label htmlFor="phone_No">Your Message*</label><br />
              <textarea name="" placeholder='Your message' id=""></textarea>

              <label htmlFor="">Which service are you interested in?</label><br />
              <select name="" id="">
                <option value="">Please Select</option>
                <option value="">CyberSecurity</option>
                <option value="">Automation</option>
                <option value="">CyberSecurity</option>
                <option value="">vCIO</option>
                <option value="">Cost Management</option>
                <option value="">Support & Help Desk</option>
                <option value="">Other</option>
              </select>


            </fieldset>
            <button className="btn btn-outline-primary mt-3">Send Message</button>

          </form>
        </div>
        <div className="col">
          <h1>Connect <span className='text-primary fs-1'>With Us</span></h1>
          <div className="sec2cardbg">
          
          </div>
          <p className='sec2card'>
            <span className='fw-bold'>MainSpring, Inc. </span><br />
              8 E. Second Street, Suite 205 <br />
              Frederick, MD 21701 <br />
              <span className='text-primary'>301.948.8077</span>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
