import React from 'react'

const Map = () => {
  return (
    <div className='container'>
            <div className="row mt-5 border p-4">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13774.898411694516!2d78.00811094999999!3d30.33035035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712498653120!5m2!1sen!2sin"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
    </div>
  )
}

export default Map