import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import Hero from "../components/homepage/Hero"
import Trends from "../components/homepage/Trends"
import Highlights from "../components/homepage/Highlights"
import BlogWidget2 from "../components/blog/BlogWidget2"
import BrandsWidget from "../components/brands/BrandsWidget"
import New from "../components/homepage/New"

const Homepage = () => {
  return (
    <Layout headerVariant="transparent">
      <Seo />
      <Hero />
      <BrandsWidget />
      <Highlights />
      <Trends />
      <New />
      <BlogWidget2 />
    </Layout>
  )
}

export default Homepage
