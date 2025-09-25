import React from "react";
import { auth, googleProvider } from "../../firebase";

import { signInWithPopup } from "firebase/auth";

export default function SocialAuth() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <button className="google-login" onClick={handleGoogleLogin}>
      Sign in with Google
    </button>
  );
}
