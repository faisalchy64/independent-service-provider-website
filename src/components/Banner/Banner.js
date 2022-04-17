import { Carousel } from "react-bootstrap";
import "./Banner.css";
import imgone from "../../images/home-bg-1.jpg";
import imgtwo from "../../images/home-bg-2.jpg";
import imgthree from "../../images/home-bg-3.jpg";

function Banner() {
    return (
        <Carousel>
            <Carousel.Item className="banner-img">
                <img src={imgone} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item className="banner-img">
                <img src={imgtwo} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item className="banner-img">
                <img src={imgthree} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;
