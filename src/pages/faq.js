import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import FrequentlyAskedQuestions from "../components/faq/FrequentlyAskedQuestions"

const FaqPage = () => {
  return (
    <Layout>
      <Seo />
      <FrequentlyAskedQuestions />
    </Layout>
  )
}

export default FaqPage
