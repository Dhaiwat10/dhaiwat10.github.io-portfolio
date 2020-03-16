import React from "react"
import Socials from "../components/Socials"
import Skills from"../components/Skills"

export default() => (
    <div>
        <div className="landing">
            <h1 className="name">DHAIWAT PANDYA</h1>

            <div className="tagline">
                FULL-STACK SOFTWARE ENGINEER
            </div>

            <button className="view_my_work_btn">
                VIEW MY WORK
            </button>
            <Socials/>
        </div>
        <Skills/>


    </div>
)
