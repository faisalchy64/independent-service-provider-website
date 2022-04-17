import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";

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
        </>
    );
}

export default Home;
