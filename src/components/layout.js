import React from "react"
import { Link } from "gatsby"
import '../style.css'


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
       <div className='header'> 
         <h1
          style={{
            fontSize:`rem`,
            marginBottom: 1,
            display:`flex`,
            alignItems:`center`,
            marginTop: 0,
            fontFamily: `Poppins, sans-serif`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontFamily: `Poppins, sans-serif`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <div className='nav-bar' style={{
          display: `flex`,
          alignItems: `center`,
          textDecoration:`none`,
          height: `100%`
        }}>
          <Link to='/about' className='nav-link'>About</Link>
          
        </div>
        </div>
      )
    } else {
      header = (
        <div style={{
          display:`flex`,

        }}> 
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontFamily: `Poppins, sans-serif`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        </div>
      )
    }
    return (
      <div className='layout'
        
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer className='margin-top'>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" className='black'>Gatsby</a> <span>by Aniket Chauhan</span>
        </footer>
      </div>
    )
  }
}

export default Layout
