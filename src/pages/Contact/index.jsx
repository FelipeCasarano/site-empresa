import "./Contact.css";
import "../All/all.css";
import { NavBar } from "../All/NavBar";
import { ContactBanner } from "./components/ContactBanner";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "../All/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div className="Contact">
      <Helmet>
        <title>Contato</title>
        <meta
          name="description"
          content="Ficou com alguma dúvida? Gostaria de entender melhor? Deixe nos uma mensagem e entraremos em contato!"
        />
        <link rel="canonical" href="/entre-em-contato" />
      </Helmet>
      <NavBar />
      <ContactBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
