import copyright from "../../images/copyright.png";

function Footer() {
    return (
        <footer className="py-5 bg-light d-flex justify-content-center align-items-center">
            <p className="ms-2 mb-0 text-center">
                Copyright <img src={copyright} width="15px" alt="" />{" "}
                {new Date().getFullYear()}{" "}
                <span className="text-danger">BEFIT</span> All Rights Reserved
            </p>
        </footer>
    );
}

export default Footer;
