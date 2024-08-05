import React, { useState } from 'react';

function Survey() {
  const [responses, setResponses] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Survey submitted successfully! Responses: ${JSON.stringify(responses)}`);
    console.log(responses);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question 1:</label>
        <input 
          type="text" 
          name="question1" 
          value={responses.question1} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Question 2:</label>
        <input 
          type="text" 
          name="question2" 
          value={responses.question2} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Question 3:</label>
        <input 
          type="text" 
          name="question3" 
          value={responses.question3} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Survey;
