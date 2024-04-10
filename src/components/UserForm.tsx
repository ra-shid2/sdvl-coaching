import React, { useState } from 'react';
import '../styles/UserForm.css'; // Import CSS file
import writeToFirestore from '../services/api/saveUserData';

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  country: string;
  about: string;
}

const UserForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    age: 16,
    gender: '',
    country: '',
    about: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can perform further actions like sending data to backend, etc.
    writeToFirestore(userInfo); 
    setUserInfo({  // Reset all fields to empty strings
        name: '',
        email: '',
        phone: '',
        age: 16,
        gender: '',
        country: '',
        about: ''
      });
  };

  return (
    <div className="user-form-container">
      <h2>Connect With Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label>Name</label>
            <input type="text" name="name" value={userInfo.name} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>Email</label>
            <input type="email" name="email" value={userInfo.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Country</label>
            <input type="text" name="country" value={userInfo.country} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>Phone</label>
            <input type="tel" name="phone" value={userInfo.phone} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Age</label>
            <input type="number" name="age" value={userInfo.age.toString()} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>Gender</label>
            <select name="gender" value={userInfo.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Your Goal</label>
            <textarea name="about" value={userInfo.about} onChange={handleChange} required />
          </div>
        </div>

        <button type="submit">Submit Your Infomation</button>
      </form>
    </div>
  );
};

export default UserForm;
