import "./home.css";
import "../All/all.css";
import { NavBar } from "../All/NavBar";
import { Banner } from "./components/Banner";
import { Services } from "./components/Services";
import { Why } from "./components/Why";
import { Info } from "./components/Info";
import { Footer } from "../All/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div className="Home">
            <NavBar />
            <Banner />
            <Services />
            <Why />
            <Info />
            <Footer />
        </div>
    );
}

export default Home;