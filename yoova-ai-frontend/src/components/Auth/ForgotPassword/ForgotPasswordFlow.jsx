import React, { useState } from 'react';
import EmailStep from './EmailStep';
import OtpStep from './OtpStep';
import ResetStep from './ResetStep';

const ForgotPasswordFlow = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleEmailNext = (emailInput) => {
    setEmail(emailInput);
    setStep(2);
  };

  const handleOtpNext = () => {
    setStep(3);
  };

  return (
    <div style={{ padding: '30px' }}>
      {step === 1 && <EmailStep onNext={handleEmailNext} />}
      {step === 2 && <OtpStep email={email} onNext={handleOtpNext} />}
      {step === 3 && <ResetStep email={email} />}
    </div>
  );
};

export default ForgotPasswordFlow;
