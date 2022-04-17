import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function Home() {
    return (
        <>
            <Banner />
            <Container className="my-5">
                <h1 className="text-center text-danger mb-5">
                    Available Services
                </h1>
                <Cards />
            </Container>
            <section className="mt-5 d-flex justify-content-center align-items-center flex-column bottom-banner">
                <h1 className="text-center text-white">MY EXPERIENCE</h1>
                <p className="text-danger text-center">STAY MOTIVATED</p>
                <div className="d-flex justify-content-center align-items-center text-white">
                    <div className="text-center mx-5">
                        <h3>155</h3>
                        <p>HAPPY GYM USERS</p>
                    </div>
                    <div className="text-center me-5">
                        <h3>50</h3>
                        <p>PROGRAMS</p>
                    </div>
                    <div className="text-center me-5">
                        <h3>10500</h3>
                        <p>TOTAL CALORIES BURNED</p>
                    </div>
                    <div className="text-center me-5">
                        <h3>415</h3>
                        <p>EVENTS</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;
