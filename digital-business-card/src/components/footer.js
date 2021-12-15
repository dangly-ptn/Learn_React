import React from "react"
import avatar from '../images/avatar.png'

export default function Footer() {
  return (
    <footer>
      <hr></hr>
      <div className="img-footer">
        <img src={avatar} alt="" />
        <img src={avatar} alt="" />
        <img src={avatar} alt="" />
        <img src={avatar} alt="" />
      </div>
    </footer>
  )
}
