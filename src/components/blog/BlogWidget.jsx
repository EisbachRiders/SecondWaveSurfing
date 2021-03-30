import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 30,
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    marginBottom: 30,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "30%",
      marginBottom: 0,
    },
  },
  header: {
    textAlign: "center",
    fontFamily: "secondary",
    width: "100%",
  },
  img: {
    height: 150,
    width: "auto",
    [theme.breakpoints.up("md")]: {
      height: 200,
    },
  },
  content: {
    background: theme.color.white,
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      height: 100,
    },
    [theme.breakpoints.up("md")]: {
      padding: "15px 30px",
      height: 100,
    },
  },
  tag: {
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: 700,
    margin: 0,
    marginBottom: 10,
  },
  link: {
    color: theme.color.black,
  },
}))

const BlogWidget = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 3, filter: { frontmatter: { label: { in: "article" } } }) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              tags
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Container background="gray">
      <h2 className={classes.header}>Blog</h2>
      <div className={classes.root}>
        {data.allMdx.edges.map((elem, idx) => (
          <div className={classes.container} key={`blogPreview${idx}`}>
            {elem.node.frontmatter.featuredImage ? (
              <GatsbyImage
                image={getImage(
                  elem.node.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData
                )}
                alt={elem.path}
                className={classes.img}
              />
            ) : (
              <StaticImage
                src="../../assets/shopCategory/surfer-at-eisbach.jpg"
                alt="surfers at eisbach"
                placeholder="blurred"
                className={classes.img}
              />
            )}
            <div className={classes.content}>
              <p className={classes.tag}>{elem.node.frontmatter.tags[0]}</p>
              <Link to={elem.node.fields.slug} className={classes.link}>
                {elem.node.frontmatter.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default BlogWidget
