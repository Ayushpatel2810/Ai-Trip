// import React from 'react';
// import { Button } from '../ui/button';

// const Header = () => {
//   return (
//     <div className='p-3 shadow-sm flex'>
//       <div className="ml-auto">
//         <Button className="">Sign In</Button>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import '@/config/FirebaseConfig'; // This will initialize Firebase
const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        localStorage.setItem("user", JSON.stringify(firebaseUser));
      } else {
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className='p-3 shadow-sm flex'>
      <div className="ml-auto">
        {user ? (
          <Button className="" onClick={handleSignOut}>Sign Out</Button>
        ) : (
          <Button className="" onClick={handleGoogleSignIn}>Sign In</Button>
        )}
      </div>
    </div>
  );
};

export default Header;




// import React from 'react';
// import { Button } from '../ui/button';
// // Import Firebase auth and provider if using Firebase
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const Header = () => {
//   const handleGoogleSignIn = async () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//       // Optionally: redirect or update state here
//     } catch (error) {
//       console.error("Google sign-in error:", error);
//     }
//   };

//   return (
//     <div className='p-3 shadow-sm flex'>
//       <div className="ml-auto">
//         <Button className="" onClick={handleGoogleSignIn}>Sign In</Button>
//       </div>
//     </div>
//   );
// };

// export default Header;