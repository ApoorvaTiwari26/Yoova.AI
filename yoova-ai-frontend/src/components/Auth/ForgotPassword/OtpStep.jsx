import React, { useState } from 'react';
import axios from 'axios';

const OtpStep = ({ email, onNext }) => {
  const [otp, setOtp] = useState('');
  const [msg, setMsg] = useState('');

  const handleVerify = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/verify-otp', { email, otp });
      if (res.data.success) {
        onNext(); // Proceed to reset step
      } else {
        setMsg('Invalid OTP');
      }
    } catch (err) {
      setMsg('Verification failed');
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <input type="text" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleVerify}>Verify</button>
      <p>{msg}</p>
    </div>
  );
};

export default OtpStep;
