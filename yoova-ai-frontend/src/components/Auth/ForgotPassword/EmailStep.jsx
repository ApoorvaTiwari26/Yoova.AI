import React, { useState } from 'react';
import axios from 'axios';

const EmailStep = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSendOTP = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/send-otp', { email });
      setMsg('OTP sent! Check your email.');
      onNext(email); // Pass email to next step
    } catch (err) {
      setMsg('Error sending OTP. Try again.');
    }
  };

  return (
    <div>
      <h2>Forgot password?</h2>
      <p>No worries, we’ll send you reset instructions.</p>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSendOTP}>Send OTP</button>
      <p>{msg}</p>
    </div>
  );
};

export default EmailStep;
