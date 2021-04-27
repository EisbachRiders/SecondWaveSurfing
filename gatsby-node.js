const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve("src/templates/page.js")
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")
  const blogListTemplate = path.resolve("src/templates/blogList.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  const productTemplate = path.resolve("src/templates/productTemplate.js")
  const productCategoryTemplate = path.resolve(
    "src/templates/productCategoryTemplate.js"
  )

  const result = await graphql(`
    query {
      pagesRemark: allMdx(
        filter: { frontmatter: { label: { nin: "article" } } }
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
      postsRemark: allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        filter: { frontmatter: { label: { in: "article" } } }
      ) {
        edges {
          node {
            id
            slug
            frontmatter {
              tags
            }
          }
          next {
            slug
          }
          previous {
            slug
          }
        }
      }
      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges
  const pages = result.data.pagesRemark.edges
  const tags = result.data.tagsGroup.group
  // const products = result.data.products.edges
  // const fins = result.data.fins.products.edges
  // const leashes = result.data.leashes.products.edges
  // const sup = result.data.sup.products.edges
  // const accessories = result.data.accessories.products.edges
  // const apparel = result.data.apparel.products.edges

  // Create pages, posts, and tags
  pages.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: pageTemplate,
      context: { id: node.id },
    })
  })

  posts.forEach(({ node, previous, next }) => {
    const previousSlug = previous ? previous.slug : null
    const nextSlug = next ? next.slug : null
    createPage({
      path: node.slug,
      component: blogPostTemplate,
      context: { id: node.id, previous: previousSlug, next: nextSlug },
    })
  })

  // create pagination on blog
  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  tags.forEach((tag) => {
    let postLen = posts.filter(
      (elem) => elem.node.frontmatter.tags[0] === tag.fieldValue
    ).length
    let numPages = Math.ceil(postLen / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/tags/${tag.fieldValue}`
            : `/tags/${tag.fieldValue}/${i + 1}`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  // Create product category pages
  //   createPage({
  //     path: "/products",
  //     component: productCategoryTemplate,
  //     context: { products: products, category: "products" },
  //   })
  //   createPage({
  //     path: "/products/surfboard-fins",
  //     component: productCategoryTemplate,
  //     context: { products: fins, category: "surfboard-fins" },
  //   })
  //   createPage({
  //     path: "/products/sup-longboard-fins",
  //     component: productCategoryTemplate,
  //     context: { products: sup, category: "sup-longboard-fins" },
  //   })
  //   createPage({
  //     path: "/products/leashes",
  //     component: productCategoryTemplate,
  //     context: { products: leashes, category: "leashes" },
  //   })
  //   createPage({
  //     path: "/products/accessories",
  //     component: productCategoryTemplate,
  //     context: { products: accessories, category: "accessories" },
  //   })
  //   createPage({
  //     path: "/products/apparel",
  //     component: productCategoryTemplate,
  //     context: { products: apparel, category: "apparel" },
  //   })
  //   // Create individual product pages
  //   fins.forEach(({ node }) => {
  //     createPage({
  //       path: `products/${node.slug}`,
  //       component: productTemplate,
  //       context: { product: node },
  //     })
  //   })

  //   leashes.forEach(({ node }) => {
  //     createPage({
  //       path: `products/${node.slug}`,
  //       component: productTemplate,
  //       context: { product: node },
  //     })
  //   })

  //   sup.forEach(({ node }) => {
  //     createPage({
  //       path: `products/${node.slug}`,
  //       component: productTemplate,
  //       context: { product: node },
  //     })
  //   })

  //   accessories.forEach(({ node }) => {
  //     createPage({
  //       path: `products/${node.slug}`,
  //       component: productTemplate,
  //       context: { product: node },
  //     })
  //   })

  //   apparel.forEach(({ node }) => {
  //     createPage({
  //       path: `products/${node.slug}`,
  //       component: productTemplate,
  //       context: { product: node },
  //     })
  //   })
  // }

  exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === "Mdx") {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: "slug",
        node,
        // Generated value based on filepath with "blog" prefix. you
        // don't need a separating "/" before the value because
        // createFilePath returns a path with the leading "/".
        value: value,
      })
    }
  }
}
// products(where: { supportedTypesOnly: true }) {
//   edges {
//     node {
//       name
//       link
//       productTags {
//         edges {
//           node {
//             name
//           }
//         }
//       }
//       productCategories {
//         edges {
//           node {
//             name
//           }
//         }
//       }
//       slug
//       shortDescription
//     }
//   }
// }
