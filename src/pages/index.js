import React from "react"
import { Container, Socials, Skills } from "../components"

export default () => (
  <div>
    <Container>
      <h1 className="name">DHAIWAT PANDYA</h1>

      <div className="tagline">FULL-STACK SOFTWARE ENGINEER</div>

      <button className="view_my_work_btn">VIEW MY WORK</button>
      <Socials />
    </Container>
    <Skills />
  </div>
)
