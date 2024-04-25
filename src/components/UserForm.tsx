import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
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
 
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    age: 16,
    gender: '',
    country: '',
    about: ''
  });

  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "age") {
      // Ensure the value consists of up to 2 digits
      const ageValue = /^\d{0,2}$/.test(value) ? parseInt(value, 10) : 16;
      setUserInfo(prevState => ({
        ...prevState,
        [name]: ageValue
      }));
    } else {
      setUserInfo(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting state to true
    // Perform further actions like sending data to backend, etc.
    setTimeout(async () => {
      try {
        // Perform further actions like sending data to backend, etc.
        await writeToFirestore(userInfo); // Assuming writeToFirestore is an async function
        setUserInfo({  // Reset all fields to empty strings
          name: '',
          email: '',
          phone: '',
          age: 16,
          gender: '',
          country: '',
          about: ''
        });
        handleOpen();
      } catch (error) {
        // Handle error if necessary
        console.error('Error writing data to Firestore: ', error);
      } finally {
        setSubmitting(false); // Reset submitting state to false after submission
      }
    }, 1000);
  };

  return (
    <div id="userForm" className="user-form-container">
      <h2>Connect With Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label>Full Name</label>
            <input type="text" name="name" value={userInfo.name} onChange={handleChange} required placeholder='Saw Joseph' />
          </div>
          <div className="col">
            <label>Email Address</label>
            <input type="email" name="email" value={userInfo.email} onChange={handleChange} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" placeholder='josephsaw@gmail.com' />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Country</label>
            <input type="text" name="country" value={userInfo.country} onChange={handleChange} required placeholder='Myanmar' />
          </div>
          <div className="col">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={userInfo.phone} onChange={handleChange} required pattern='[0-9]+' placeholder='+95972010730' />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Age</label>
            <input type="number" name="age" value={userInfo.age.toString()} onChange={handleChange} required pattern='\d{2}' />
          </div>
          <div className="col">
            <label>Gender</label>
            <select name="gender" value={userInfo.gender} onChange={handleChange} required >
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
            <textarea name="about" value={userInfo.about} onChange={handleChange} required placeholder='Personal Development' />
          </div>
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Your Information'}
        </button>
      </form>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: 'center' }}>Submission Successful</DialogTitle>
        <DialogContent >
          <DialogContentText>Your submission was successful. We will contact you via email.</DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserForm;
