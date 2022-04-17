import google from "../../images/google.png";
import "./AuthGoogle.css";
import auth from "../../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

function AuthGoogle() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    return (
        <p className="with-google mt-2" onClick={() => signInWithGoogle()}>
            <img src={google} alt="" />
            <span>Continue With Google</span>
        </p>
    );
}

export default AuthGoogle;
