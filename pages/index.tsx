import type { NextPage } from "next"
import Navbar from "./components/navbar"
import Content from "./components/content"

const Home: NextPage = () => {
  return (
    <div className="max-h-screen">
      <Navbar />
      <Content />
    </div>
  )
}

export default Home
