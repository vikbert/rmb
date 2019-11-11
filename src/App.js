import React from 'react';
import Topbar from "./components/topBar/Topbar";
import HeroBody from "./components/HeroBody";
import ShowCases from "./components/ShowCases";
import AuthModal from "./components/authModal/Modal";
import Sidebar from "./components/Sidebar";
import BackToTop from "./components/BackToTop";
import FooterSimple from "./components/footer/FooterSimple";

function App() {
    return (
        <>
            <section className="hero is-default is-bold is-fullheight">
                <Topbar/>
                <HeroBody/>
            </section>

            <section className="section section-light-grey is-medium">
                <ShowCases/>
            </section>

            {/*<section className="section is-medium">*/}
            {/*    <HowItWorks/>*/}
            {/*</section>*/}

            {/*<section className="section is-medium section-secondary">*/}
            {/*    <CustomerFeedbacks/>*/}
            {/*</section>*/}

            {/*<section className="section section-light-grey is-medium">*/}
            {/*    <ContactForm/>*/}
            {/*</section>*/}

            <AuthModal/>
            <FooterSimple/>
            <Sidebar/>

            <BackToTop/>
        </>
    );
}

export default App;
