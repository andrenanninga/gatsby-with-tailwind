import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-700 mb-6">
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-serif tracking-wide mb-0">
        <Link to="/" className="text-white no-underline hover:text-white">
          {siteTitle}
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
