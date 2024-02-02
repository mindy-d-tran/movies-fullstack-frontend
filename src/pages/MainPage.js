import { useRef, useState } from "react";
import axios from 'axios';

function MainPage() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(emailInputRef.current.value);
    console.log(passwordInputRef.current.value);
    //check if email is inputted
    if (!emailInputRef.current.value) {
      emailInputRef.current.focus();
      return;
    }
    //check if password is inputted
    if (!passwordInputRef.current.value) {
      passwordInputRef.current.focus();
      return;
    }

    // make POST req to backend
    const res = await axios.post('http://localhost:4000/api/users/signin',{
      email: emailInputRef.current.value,
      passwordInputRef: passwordInputRef.current.value
    });
    console.log(res.data);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(emailInputRef.current.value);
    console.log(passwordInputRef.current.value);
    //check if email is inputted
    if (!emailInputRef.current.value) {
      emailInputRef.current.focus();
      return;
    }
    //check if password is inputted
    if (!passwordInputRef.current.value) {
      passwordInputRef.current.focus();
      return;
    }
    // make POST req to backend
    const res = await axios.post('http://localhost:4000/api/users/signup',{
      email: emailInputRef.current.value,
      passwordInputRef: passwordInputRef.current.value
    });
    console.log(res.data);
  };

  return (
    <main>
      <h1>MainPage</h1>
      {showSignUp ? (
        <div>
          <form
            onSubmit={handleSignIn}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3>Sign In</h3>

            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email or Phone"
            />

            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
              placeholder="Password"
            />

            <button type="submit">Sign In</button>
          </form>
          <span>
            Don't have an account?{" "}
            <button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
          </span>
        </div>
      ) : (
        <div>
          <form
            onSubmit={handleSignUp}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <h3>Sign Up</h3>

            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              name="email"
              id="email"
              type="text"
              placeholder="Email or Phone"
            />

            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              name="password"
              id="password"
              type="text"
              placeholder="Password"
            />

            <button type="submit">Sign Up</button>
          </form>
          <span>
            Already have an account?{" "}
            <button onClick={() => setShowSignUp(!showSignUp)}>Sign In</button>
          </span>
        </div>
      )}
    </main>
  );
}

export default MainPage;
