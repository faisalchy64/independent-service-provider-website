import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <Checkout />
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </div>
    );
}

export default App;
