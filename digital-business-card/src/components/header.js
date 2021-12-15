import React from "react"
import avatar from '../images/avatar.png'

export default function Header() {
  return (
    <div>
      <img src={avatar} alt="" className="avatar" />
      <h1 className="name">Ly Dang Hai Dang</h1>
      <p className="job">Developer</p>
      <p className="address">Can Tho, Viet Nam</p>
      <div className="btn">
        <button className="email">Email</button>
        <button className="linkedin">Skype</button>
      </div>
    </div>
  )
}
