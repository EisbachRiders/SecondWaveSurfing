import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import AllProducts from "../components/shop/AllProducts"

export default function ProductTemplate({ pageContext }) {
  const { products, category } = pageContext

  return (
    <Layout>
      <Seo title={category} />
      <AllProducts products={products} category={category} />
    </Layout>
  )
}
