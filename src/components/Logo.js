import React from "react"

import styles from "./Logo.module.css"

export default (props) => (
  <img className={styles.Logo} src={props.src} alt={props.alt}></img>
)