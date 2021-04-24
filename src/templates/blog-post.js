import React from "react"
import { Link, graphql } from "gatsby"
import '../style.css'
import Layout from "../components/layout"
import SEO from "../components/seo"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: `2rem`,
                marginBottom: `1rem`,
                fontFamily: `Poppins, sans-serif`,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                display: `block`,
                marginBottom: `0.7rem`,
                fontFamily: `Poppins, sans-serif`,
              }}
            >
              {post.frontmatter.date}
            </p>
            <p
              style={{
                fontFamily: `Poppins, sans-serif`,
                display: `block`,
                marginBottom: '1rem',
              }}
            >
              {post.frontmatter.author}
            </p>
          </header>
          <section className='main-post' dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: `5rem`
            }}
          />
         
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev" className='black'>
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next" className='black'>
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        description
      }
    }
  }
`
