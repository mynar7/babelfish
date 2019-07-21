import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoIcon from '../images/icon.png'

const Header = ({ siteTitle }) => (
  <header className="bg-purple-700 mb-2">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          className="flex items-center justify-center text-3xl font-sans font-bold"
        >
          {siteTitle}
          <img src={LogoIcon} className="w-8 ml-2" alt="Babelfish logo, a microphone and a fish"/>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
