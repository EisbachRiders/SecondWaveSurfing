import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { makeStyles } from "@material-ui/styles"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/ui/Container"
import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles({
  container: {
    marginBottom: 60,
  },
})

const shortcodes = { Link }

const BlogPostTemplate = ({ children, data: { mdx }, pageContext }) => {
  const classes = useStyles()
  const { previous, next } = pageContext

  return (
    <Layout>
      {/* <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.excerpt}
      /> */}
      {children}
      {/* <article>
        <Container flexDirection="column">
          <h1>{mdx.frontmatter.title}</h1>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </article> */}
      {/* <nav>
            <ul>
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
