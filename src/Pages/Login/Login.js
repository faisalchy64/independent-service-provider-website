import { useEffect, useState } from "react";
import {
    useAuthState,
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthGoogle from "../../components/AuthGoogle/AuthGoogle";
import auth from "../../firebase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bool, setBool] = useState(false);

    const [signInWithEmailAndPassword, , , error] =
        useSignInWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password);
    };

    const navigate = useNavigate();
    const location = useLocation();

    const [user] = useAuthState(auth);

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [navigate, user, from]);

    // reset password

    const [sendPasswordResetEmail, sending, resetError] =
        useSendPasswordResetEmail(auth);

    const handleReset = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(email);
    };

    console.log(sending);

    return (
        <div className="common-box my-5">
            {bool ? (
                <>
                    <h1>Reset Password</h1>
                    <form className="form" onSubmit={handleReset}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="mb-2" type="submit">
                            Reset Password
                        </button>
                        <p className="my-3">
                            {resetError ? resetError.message : ""}
                        </p>
                    </form>
                </>
            ) : (
                <>
                    {" "}
                    <h1>Log In</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className="mb-2" type="submit">
                            Log In
                        </button>
                        <Link to="/signup">Create New Account</Link>
                        <p onClick={() => setBool(true)}>Forgot Password</p>

                        <p className="my-3">{error ? error.message : ""}</p>
                    </form>
                    <AuthGoogle />
                </>
            )}
        </div>
    );
}

export default Login;
