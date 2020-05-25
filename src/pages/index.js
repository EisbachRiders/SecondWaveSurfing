import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Hero from "../components/homepage/Hero"
import MissionStatement from "../components/homepage/MissionStatement"
// import ShopCategories from "../components/homepage/ShopCategories"
import BlogWidget from "../components/blog/BlogWidget"
// import BrandsWidget from "../components/brands/BrandsWidget"
import Brands from "../components/brands/Brands"

const Homepage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <MissionStatement />
      {/* <BrandsWidget /> */}
      <Brands />
      {/* <ShopCategories /> */}
      <BlogWidget />
    </Layout>
  )
}

export default Homepage
