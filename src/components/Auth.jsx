// import { auth, provider } from "../firebase-config.js";
// import { signInWithPopup } from "firebase/auth";
// // import "../styles/Auth.css";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      // setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  // const signInWithGoogle = async () => {
  //   const result = await signInWithPopup(auth, provider);
  //   cookies.set("auth-token", result.user.refreshToken);
  //   console.log(result)
  // }


  return (
    <div className="">
      <p className=""> Sign In With Google To Continue </p>
      <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  );
};
