import React from "react"
import "./Socials.css";

export default() => (
    <div className="row">
        <h3>GET IN TOUCH</h3>
        <a
            rel="noopener noreferrer"
            href="https://linkedin.com/in/dhaiwat-pandya"
            target="_blank">
            <img alt="Link to my LinkedIn page" className="logo" src="images/linkedin.png"></img>
        </a>

        <a
            rel="noopener noreferrer"
            href="https://github.com/Dhaiwat10"
            target="_blank">
            <img alt="Link to my Github page" className="logo" src="images/github.png"></img>
        </a>
    </div>
)