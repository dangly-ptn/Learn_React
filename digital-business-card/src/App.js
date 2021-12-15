import React from "react"
import Main from "./components/main"
import Header from "./components/header"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="container">
      <form>
        <Header />
        <Main />
        <Footer />
      </form>
    </div>
  )
}
