import React, { useState } from 'react';
import './App.css';

const EmployeeProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    profilePicture: <img src="defaultprofile.jpg" alt="profilePic" height={100} />, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
        <h5> Github repository link is https://github.com/codegirlMaya1/employeeProfile.git </h5>
        <h4> Hi! Please Update Your Profile Below....</h4>
        <h3> Add a profile picture, update your name, email and phone number:</h3>
        
      <h2>Employee Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-picture">
          <img src={profile.profilePicture} alt="Profile" />
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <div className="profile-details">
        <h3>Profile Details</h3>
        <img src={profile.profilePicture} alt="Profile" />
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phone}</p>
       
      </div>
    </div>
  );
};

export default EmployeeProfile;