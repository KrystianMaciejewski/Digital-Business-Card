import React from "react"
import ReactDOM from "react-dom"
import Info from "./Components/Info.js"
import About from "./Components/About.js"
import Interests from "./Components/Interests.js"

import Footer from "./Components/Footer.js"

function Page() {
    return (
        <div className="page">
        <Info />
        <div className="about_interests--container">
        <About />
        <Interests />
        </div>
        <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))