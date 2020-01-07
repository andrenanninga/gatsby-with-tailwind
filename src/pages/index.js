import React from "react"
import { Link } from "gatsby"
import { css } from "astroturf"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const styles = css`
  .image {
    max-width: 18rem;
  }
`

console.log(styles)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className={`mb-6 ${styles.image}`}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
