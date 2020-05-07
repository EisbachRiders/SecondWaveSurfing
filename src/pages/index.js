import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Brands from "../components/about/Brands"
import About from "../components/about/About"

const Homepage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Brands />
      <About />
    </Layout>
  )
}

export default Homepage
