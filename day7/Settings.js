import React, { useState } from 'react';

function Settings() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    preference: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Settings saved! Profile: ${JSON.stringify(profile)}`);
    console.log(profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={profile.name} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={profile.email} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Preference:</label>
        <input 
          type="text" 
          name="preference" 
          value={profile.preference} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default Settings;
