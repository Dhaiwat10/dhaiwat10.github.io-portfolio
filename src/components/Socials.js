import React from "react"
import "./Socials.css"
import Logo from "./Logo"

export default () => (
  <div className="row">
    <h3>GET IN TOUCH</h3>
    <a
      rel="noopener noreferrer"
      href="https://linkedin.com/in/dhaiwat-pandya"
      target="_blank"
    >
      <Logo alt="Link to my LinkedIn page" src="images/linkedin.png" />
    </a>

    <a
      rel="noopener noreferrer"
      href="https://github.com/Dhaiwat10"
      target="_blank"
    >
      <Logo alt="Link to my Github page" src="images/github.png" />
    </a>
  </div>
)
