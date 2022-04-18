import img from "../../images/no-results.png";

function NotFound() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column my-5 py-5">
            <img src={img} width="250px" alt="" />
            <h1 className="mt-4 text-center">PAGE NOT FOUND 404!</h1>
        </div>
    );
}

export default NotFound;
