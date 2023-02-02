import "./PrivacyTerms.css";
import "../All/all.css";
import { NavBar } from "../All/NavBar";
import { Footer } from "../All/Footer";
import { Terms } from "./components/Terms";
import "bootstrap/dist/css/bootstrap.min.css";

function PrivacyTerms() {
  return (
    <div className="Contact">
      <NavBar />
      <Terms />
      <Footer />
    </div>
  );
}

export default PrivacyTerms;
