import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import AboutTemp from "../components/about/AboutTemp"
import ContactTemp from "../components/ContactTemp"

const AboutPage = () => {
  return (
    <Layout>
      <Seo />
      <AboutTemp />
      <ContactTemp />
    </Layout>
  )
}

export default AboutPage
