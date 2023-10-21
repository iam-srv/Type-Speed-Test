import React from "react";
import Navbar from "./Components/Navbar";
import Timer from "./Components/timer";
import Para from "./Components/Para";
import Reset from "./Components/reset";
import Escape from "./Components/esc";
import NoWords from "./Components/noWords";
import Footer from "./Components/Footer";
import "./main.css";

const App = () => {

    return (
        <section className="main-container">
            <Navbar />
            <Timer />
            <Para />
            <Reset />
            <Escape />
            <NoWords />
            <Footer />
        </section>
    )
}

export default App;