import React, { useState } from 'react'

const Newlink = () => {
  const [formData, setFormData] = useState({
    startLocation: "",
    destination: "",
  });

  const apicall = ()=>{
    
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="setRoutes-container">
      <div className="setRoutes-card">
        {/* Card Header */}
        <div className="setRoutes-card-header">
          <h2>Set Route</h2>
          <p>Plan your travel route efficiently</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="setRoutes-form">
          {/* Input Fields */}
          <div className="setRoutes-form-group">
            <label>Start Location</label>
            <input
              type="text"
              name="startLocation"
              value={formData.startLocation}
              onChange={handleChange}
              required
              placeholder="Enter start location"
            />
          </div>

          <div className="setRoutes-form-group">
            <label>Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              placeholder="Enter destination"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="setRoutes-submit-btn">
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newlink

// import React from 'react'

// export default function Newlink() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// import React from 'react'
// import PropTypes from 'prop-types'

// const Newlink = ({sname , vm}) => {
//   return (
//     <div>
//      <h1>Hello {sname}  {vm}</h1>
//     </div>
//   )
// }

// Newlink.propTypes = {

// }

// export default Newlink






