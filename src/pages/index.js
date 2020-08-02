import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Hero from "../components/homepage/Hero"
import Trends from "../components/homepage/Trends"
import Highlights from "../components/homepage/Highlights"
import BlogWidget2 from "../components/blog/BlogWidget2"
import BrandsWidget from "../components/brands/BrandsWidget"
import About from "../components/homepage/About"

const Homepage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <About />
      {/* <Highlights /> */}
      <Trends />
      <BlogWidget2 />
      <BrandsWidget />
    </Layout>
  )
}

export default Homepage
