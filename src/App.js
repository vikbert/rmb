import React from 'react';
import './assets/scss/core.scss';
import HeroBody from "./components/HeroBody";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/topBar/Topbar";
import BackToTop from "./components/BackToTop";
import Footer from "./components/footer/Footer";
import AuthModal from "./components/authModal/Modal";
import ContactForm from "./components/ContactForm";
import CustomerFeedbacks from "./components/CustomerFeedbacks";
import HowItWorks from "./components/HowItWorks";
import ShowCases from "./components/ShowCases";

function App() {
    return (
        <div>
            <section className="hero is-fullheight is-default is-bold">
                <Topbar/>
                <HeroBody/>
            </section>

            <section className="section section-feature-grey is-medium">
                <ShowCases/>
            </section>

            <section className="section is-medium">
                <HowItWorks/>
            </section>

            <section className="section is-medium section-secondary">
                <CustomerFeedbacks/>
            </section>

            <section className="section section-light-grey is-medium">
                <ContactForm/>
            </section>

            s
            <AuthModal/>
            <Footer/>
            <Sidebar/>

            <BackToTop/>
        </div>
    );
}

export default App;
