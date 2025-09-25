import React, { useState } from 'react';
import axios from 'axios';

const ResetStep = ({ email }) => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [msg, setMsg] = useState('');

  const handleReset = async () => {
    if (password !== confirm) {
      setMsg("Passwords don't match");
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/auth/reset-password', { email, password });
      setMsg('Password reset successful. Go back to login.');
    } catch (err) {
      setMsg('Failed to reset password.');
    }
  };

  return (
    <div>
      <h2>Set New Password</h2>
      <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      <button onClick={handleReset}>Reset Password</button>
      <p>{msg}</p>
    </div>
  );
};

export default ResetStep;
