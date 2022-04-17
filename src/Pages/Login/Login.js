import { useEffect, useState } from "react";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthGoogle from "../../components/AuthGoogle/AuthGoogle";
import auth from "../../firebase";
import "./Login.css";

function Login() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInfo({
            email: e.target.email.value,
            password: e.target.password.value,
        });

        signInWithEmailAndPassword(userInfo.email, userInfo.password);
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

    return (
        <div className="login-box my-5">
            <h1>Log In</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />
                <button className="mb-2" type="submit">
                    Log In
                </button>
                <Link to="/signup">Create New Account</Link>
            </form>

            <AuthGoogle />
        </div>
    );
}

export default Login;
