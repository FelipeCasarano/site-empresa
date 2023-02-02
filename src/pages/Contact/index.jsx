import "./Contact.css";
import "../All/all.css";
import { NavBar } from "../All/NavBar";
import { ContactBanner } from "./components/ContactBanner";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "../All/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div className="Contact">
      <NavBar />
      <ContactBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
