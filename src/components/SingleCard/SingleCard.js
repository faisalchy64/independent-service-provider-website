import CustomLink from "../CustomLink/CustomLink";
import "./SingleCard.css";

function SingleCard({ service }) {
    const { id, title, price, text1, text2 } = service;

    return (
        <div className="card pt-5 text-center" id={id}>
            <h1 className="color mt-5">{title}</h1>
            <h2 className="color">${price} Month</h2>
            <p className="color mt-1 mb-0">{text1}</p>
            <p className="color mt-1 mb-5">{text2}</p>
            <CustomLink to="/checkout">
                <div className="mt-5 mx-auto button">DETAILS</div>
            </CustomLink>
        </div>
    );
}

export default SingleCard;
