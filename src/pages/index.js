import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Team</h1>
    <p>This is a Gatsby Site deployed to Netlify via CLI and Github</p>
    <h2>The Tools</h2>
    <ul>
      <li>iTerm</li>
      <li>Chrome</li>
      <li>VS Code</li>
      <li>Notion</li>
      <li>GIT / Github</li>
      <li>CLIs</li>
      <ul>
        <li>hub</li>
        <li>netlify</li>
        <li>gatsby-cli</li>
      </ul>
    </ul>
    <Link to="/page-2/">To Q & A</Link>
  </Layout>
)

export default IndexPage
