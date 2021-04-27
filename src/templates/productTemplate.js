import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Product from "../components/shop/Product"

export default function ProductTemplate({ pageContext }) {
  const { product } = pageContext

  return (
    <Layout>
      <Seo title={product.name} />
      <Product product={product} />
    </Layout>
  )
}
