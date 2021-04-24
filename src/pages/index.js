import React from "react"
import { Link, graphql } from "gatsby"


import '../style.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/hero-section"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        
        <HeroSection/>
        <hr style= {{
          margin: `4rem 0`
        }}></hr>
        <span className='blog-label'>Resources</span>
        
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          console.log(posts);
          return (
            
            <div className='blog-card-box'>
              <article className='blog-card' key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      fontSize:`1.7rem`,
                      fontWeight:`700`,
                      marginTop:`1rem`,
                      marginBottom: `1rem`,
                      fontFamily: `Poppins, sans-serif`,
                    }}
                  >  
                
                    <Link style={{ boxShadow: `none`  ,color:"inherit", fontFamily: `Poppins, sans-serif`}} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small style={{
                      fontSize:`1.1rem`,
                      fontFamily: `Poppins, sans-serif`,
                    }}>  {node.frontmatter.date}</small>
                </header>
                <section>
                  <p 
                  style={{
                    marginTop: `1rem`,
                    marginBottom: `1rem`,
                    fontSize:`1.3rem`,
                    fontFamily: `Poppins, sans-serif`,
                  }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <Link className='read-more white' to={node.fields.slug}>Read more</Link>
                </section>
              </article>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
