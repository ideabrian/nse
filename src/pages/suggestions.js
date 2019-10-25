import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Suggestions</h1>
    <p>I love giving suggestions, thanks for asking.</p>
    <p>
      I thought this challenge was appropriate. It got us wearing the shoes of
      the kinds of people we'd support in the role, for that it's fantastic.
    </p>
    <p>
      It requires a little thinking, some tenacity, and a willingness to follow
      patterns -- as in "anwer the questions please!" -- all good for a business
      that runs on systems.
    </p>
    <h4>How could the test or the posting be better?</h4>
    <p>
      There could be many more small activities. While this test already takes a
      couple of hours, there's no reason it couldn't take more. And, it could be
      done in a way that anybody might want to complete the challenge because it
      would help them learn about Netlify and level up their skills in the
      process. Meanwhile, it would be a funnel to help recruit talented,
      thoughtful people.
    </p>
    <p>
      Imagine a site that had a CYOA - choose your own adventure - that kind of
      simulated the first part where you choose which skills are your favorite.
      Could you sort and filter people based on the tasks they chose to complete
      and the tenacity with which they persevered?
    </p>
    <h4>Thanks!</h4>
    <p>Thanks for the opportunity - to play along.</p>
    <Link to="/page-2/">To Q & A</Link> |
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IndexPage
