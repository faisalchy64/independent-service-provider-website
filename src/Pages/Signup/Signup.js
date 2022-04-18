import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import AuthGoogle from "../../components/AuthGoogle/AuthGoogle";
import auth from "../../firebase";
import "./Signup.css";

function Signup() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const [createUserWithEmailAndPassword, , , error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        setUserInfo({
            email: e.target.email.value,
            password: e.target.password.value,
        });

        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };

    return (
        <div className="common-box my-5">
            <h1>Sign Up</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                />
                <button className="mb-2" type="submit">
                    Sign Up
                </button>

                <Link className="text-center" to="/login">
                    Already Have An Account
                </Link>

                <p className="my-3">{error ? error.message : ""}</p>
            </form>

            <AuthGoogle />
        </div>
    );
}

export default Signup;
